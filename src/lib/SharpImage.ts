// Straight up taken from https://github.com/Vibrant-Colors/node-vibrant/issues/44#issuecomment-469288862
// Maybe creating our own thing would make sense, as I have no idea how this here works
import sharp from "sharp"
import { ImageBase, type ImageSource } from "@vibrant/image"

export class SharpImage extends ImageBase {
  private _image: ImageData = undefined as any

  async load(image: ImageSource): Promise<ImageBase> {
    if (typeof image === "string" || image instanceof Buffer) {
      const { data, info } = await sharp(image)
        .resize(200, 200, { fit: "inside", withoutEnlargement: true })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true })

      this._image = {
        width: info.width,
        height: info.height,
        data: data as unknown as Uint8ClampedArray,
        colorSpace: "srgb",
      }

      return this
    } else {
      return Promise.reject(
        new Error(
          "Cannot load image from HTMLImageElement in node environment",
        ),
      )
    }
  }
  clear(): void {}
  update(): void {}
  getWidth(): number {
    return this._image.width
  }
  getHeight(): number {
    return this._image.height
  }
  resize(targetWidth: number, targetHeight: number, ratio: number): void {
    // done in the load step, ignoring any maxDimension or quality options
  }
  getPixelCount(): number {
    const { width, height } = this._image
    return width * height
  }
  getImageData(): ImageData {
    return this._image
  }
  remove(): void {}
}
