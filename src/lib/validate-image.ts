export function validateImage(
  file: File,
  formats: Array<string>,
  size: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!formats.includes(file.type)) {
      reject('Wrong file format')
    }
    const img = new Image()
    img.onload = () => {
      if (img.width !== size && img.height !== size) {
        reject(`Size is not ${size}x${size}`)
      }
      resolve('Success')
    }
    img.src = URL.createObjectURL(file)
  })
}
