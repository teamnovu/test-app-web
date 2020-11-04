<template>
    <img
      v-if="intersecting"
      ref="imageRef"
      @load="onLoaded"
      :src="originalDataUrl"
      :srcset="imgSrcSet"
      :sizes="sizesL"
      width="100%"
    />
    <div ref="observer" v-else></div>
</template>

<style>
</style>

<script>
import resolveConfig from "tailwindcss/resolveConfig";

export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    quality: {
      required: false,
      type: Number,
      default: 70,
    },
    blur: {
      required: false,
      type: Number,
    },
    fit: {
      required: false,
      type: String,
    },
    crop: {
      required: false,
      type: String,
    },
    orient: {
      required: false,
      type: String,
    },
    format: {
      required: false,
      type: String,
    },
    fallbackWidth: {
      required: false,
      type: Number,
    },
    height: {
      required: false,
      type: Number,
    },
    aspectRatio: {
      required: false,
      type: Number,
    },
    placeholderBlur: {
      required: false,
      default: 100,
      type: Number,
    },
    placeholderQuality: {
      required: false,
      default: 30,
      type: Number,
    },
    placeholderWidth: {
      required: false,
      type: Number,
      default: 400,
    },
    usePlaceholder: {
      required: false,
      default: true,
      type: Boolean,
    },
    observeIntersection: {
      required: false,
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      sizesL: "1px",
      isLoading: true,
      hasIntersected: false,
    };
  },
  created() {
    const tailwindConfig = require("~/tailwind.config");
    const config = resolveConfig(tailwindConfig);

    const screens = Object.entries(config.theme.screens)
      .map(([key, value]) => ({
        breakpoint: key,
        media: `min-width: ${value}`,
        size: value,
      }))
      .sort((a, b) => +b.size.replace("px", "") - +a.size.replace("px", ""));

    this.screens = screens;
  },
  mounted() {
    window.addEventListener("resize", this.onResize, { passive: true });

    if (this.observeIntersection) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('intersecting');
            this.hasIntersected = true;
          }
        });
      });
      observer.observe(this.$refs.observer);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    updateSizes() {
      return new Promise((resolve) => {
        window.requestAnimationFrame(() => {
          const imageWidth = this.$refs.imageRef.getBoundingClientRect().width;
          const size = Math.ceil((imageWidth / window.innerWidth) * 100);
          this.sizesL = `${size}vw`;
          resolve();
        });
      });
    },
    onResize() {
      this.updateSizes();
    },
    async onLoaded() {
      await this.updateSizes();
      this.isLoading = false;
    },
    generateSrc({
      quality,
      width,
      aspectRatio,
      blur,
      addSrcSetWidth,
      fit,
      crop,
      format,
    }) {
      let src = `${process.env.assetUrl}${this.src}?`;
      if (width) src += `&w=${width}`;
      if (width && aspectRatio) src += `&h=${Math.round(width / aspectRatio)}`;
      if (quality) src += `&q=${quality}`;
      if (blur) src += `&blur=${blur}`;
      if (fit) src += `&fit=${fit}`;
      if (crop) src += `&fit=${crop}`;
      if (format) src += `&format=${format}`;

      return src;
    },
  },
  computed: {
    intersecting() {
      if (!this.observeIntersection) {
        return true;
      }
      return this.hasIntersected;
    },
    imgSrcSet() {
      let sizes = this.screens.map((screen) => screen.size.replace("px", ""));
      const srcSet = sizes.map(
        (size) =>
          this.generateSrc({
            width: size,
            quality: this.quality,
            fit: this.fit,
            format: this.format,
            crop: this.crop,
            aspectRatio: this.aspectRatio,
          }) + ` ${size}w`
      );

      srcSet.push(this.placeholderDataUrl + " 32w");
      return srcSet.join(",");
    },
    originalDataUrl() {
      return this.generateSrc({
        quality: this.quality,
        blur: this.blur,
        width: this.fallbackWidth,
        height: this.height,
        fit: this.fit,
        format: this.format,
        aspectRatio: this.aspectRatio,
        crop: this.crop,
      });
    },
    placeholderDataUrl() {
      return this.generateSrc({
        blur: this.placeholderBlur,
        aspectRatio: this.aspectRatio,
        quality: this.placeholderQuality,
        width: this.placeholderWidth,
        fit: this.fit,
        format: this.format,
        aspectRatio: this.aspectRatio,
        orient: this.orient,
        crop: this.crop,
      });
    },
  },
};
</script>
