/** Only self-contained raster images; never remote URLs, SVG, or HTML attributes. */
export function isSupportedImageData(value: unknown): value is string {
  return typeof value === 'string' && /^data:image\/(?:png|jpeg|webp|gif|bmp|avif|x-icon|vnd\.microsoft\.icon);base64,[A-Za-z0-9+/]+={0,2}$/i.test(value);
}
