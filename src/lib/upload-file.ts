export default function uploadFile(
  file: File,
  setProgress: React.Dispatch<React.SetStateAction<number>>
) {
  const xhr = new XMLHttpRequest()

  const url =
    'https://storage.googleapis.com/newkolay-accord/image.png?x-goog-signature=0f9fc5215f106ab1e551da64c8d8cecdd9cd50313106b9f2a2486b8bd668b06730e19ffe4de2c851de471664a404b2b0796a0d555ebe5e1ebaf38187e07f1d7b806bf269a62e99e0d87be0d08c048335ebbb89eca566612dd86c9316125c121b778fb7ce64c91535c101881a55f53882f6fa5e38d7280039c0460451e07d4200cba30484f3ac2760232fd72fc77680fa70369c38d0523faa54212cd3a2a0fbeb32b4a6531506459e282a551210872a8780339ca33719624f52fd7bd2b55e41561fff321de2941be589c2281a8da7613c17e7e1b74765416f87c111eef7683a9ace963504d4b19e83770aab617d227c46414f2133495bd39cd4e10de405a11270&x-goog-algorithm=GOOG4-RSA-SHA256&x-goog-credential=upload-logo%40accord-react-challenge.iam.gserviceaccount.com%2F20200124%2Fus%2Fstorage%2Fgoog4_request&x-goog-date=20200124T125841Z&x-goog-expires=259200&x-goog-signedheaders=content-type%3Bhost'
  xhr.open('PUT', url, true)
  xhr.setRequestHeader('Content-Type', file.type)

  xhr.upload.addEventListener('progress', function(e) {
    const percentage = (e.loaded * 100.0) / e.total || 100
    setProgress(percentage)
  })

  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(e)
    } else if (xhr.readyState == 4 && xhr.status != 200) {
      console.log(e)
    }
  })

  xhr.send(file)
}
