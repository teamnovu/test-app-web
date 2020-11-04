<template>
  <div class="w-full">
    <img
      v-show="isLoading && usePlaceholder"
      :src="placeholderDataUrl"
      width="100%"
    />
    <img
      v-show="!isLoading || !usePlaceholder"
      @load="isLoading = false"
      :src="originalDataUrl"
      :srcset="imgSrcSet"
      :sizes="imgSizes"
      width="100%"
    />
  </div>
</template>

<style>
</style>

<script>
import tailwindConfig from "../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    sizes: {
      required: false,
      type: Object,
      default: () => {},
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
    srcSetSizes: {
      required: false,
      type: Array,
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
      default: 20,
      type: Number,
    },
    placeholderWidth: {
      required: false,
      type: Number,
      default: 400
    },
    usePlaceholder: {
      required: false,
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
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
  methods: {
    loaded() {
      this.loading = false;
    },
    generateSrc({
      quality,
      width,
      aspectRatio,
      blur,
      addSrcSetWidth,
      fit,
      crop,
      orient,
      format,
    }) {
      let src = `${process.env.assetUrl}${this.src}?`;
      if (width) src += `&w=${width}`;
      if (width && aspectRatio) src += `&h=${Math.round(width / aspectRatio)}`;
      if (quality) src += `&q=${quality}`;
      if (blur) src += `&blur=${blur}`;
      if (fit) src += `&fit=${fit}`;
      if (crop) src += `&fit=${crop}`;
      if (orient) src += `&orient=${orient}`;
      if (format) src += `&format=${format}`;
      if (addSrcSetWidth) src += ` ${width}w`;

      return src;
    },
  },
  computed: {
    imgSrcSet() {
      let sizes = this.screens.map((screen) => screen.size.replace("px", ""));
      if (this.srcSetSizes) {
        sizes = this.srcSetSizes.sort((a, b) => a - b);
      }
      return sizes
        .map((size) =>
          this.generateSrc({
            width: size,
            quality: this.quality,
            addSrcSetWidth: true,
            fit: this.fit,
            format: this.format,
            orient: this.orient,
            crop: this.crop,
            aspectRatio: this.aspectRatio,
          })
        )
        .join(", ");
    },
    imgSizes() {
      const sizes = Object.entries(this.sizes || {});
      if (sizes.length > 0) {
        return sizes.map(([key, value]) => {
          const breakpoint = this.screens.find((bp) => bp.breakpoint === key);
          if (breakpoint) {
            return `(${breakpoint.media}) ${value}`;
          } else {
            return `(${key}) ${value}`;
          }
        });
      }
      return this.screens.map((screen) => `(${screen.media}) ${screen.size}`);
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
        orient: this.orient,
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
