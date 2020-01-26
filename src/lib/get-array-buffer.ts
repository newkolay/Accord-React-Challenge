export function getArrayBuffer(file: File): Promise<ArrayBuffer> {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort()
      reject(new Error('Problem parsing input file'))
    }

    reader.onload = () => {
      if (typeof reader.result !== 'string' && reader.result !== null) {
        resolve(reader.result)
      }
    }

    reader.readAsArrayBuffer(file)
  })
}
