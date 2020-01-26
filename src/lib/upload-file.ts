export default function uploadFile(
  xhr: XMLHttpRequest,
  file: File,
  setProgress: React.Dispatch<React.SetStateAction<number>>
) {
  return new Promise(function(resolve, reject) {
    const url =
      'https://storage.googleapis.com/newkolay-accord/logo?x-goog-signature=07a7cd54330c2e344030104a7ee515f3b7e16f2c2db960ec0903b376d100815abc4af4d041a39fe5bbea128d548f3ce7b0c5128b713c9713693d657ada591755f61493627234ad923ebe380b6dd6688dea63a70f39a2f1f4168272d1d2b3b824e254c97c31390f436a14aecc8713b6cc7f1f9cbff895a4446fa439d97a569a759c606f7f3ac2577203a99217b93438b3b1522baae08a4997defc7170c837d8da29c4929df44b786e1860f2b7d48fad4310d6e408a3cbbda618d2fd0be26b9f33d7be193024fb03dc8526d2d2c6ff1f17c32932010dfb9ffdfe1b1fe88da1b7c3f147899f785df0393b9a749402737bcf0fa7de843aa4a278147d8fee90903be5&x-goog-algorithm=GOOG4-RSA-SHA256&x-goog-credential=upload-logo%40accord-react-challenge.iam.gserviceaccount.com%2F20200126%2Fus%2Fstorage%2Fgoog4_request&x-goog-date=20200126T134509Z&x-goog-expires=604800&x-goog-signedheaders=host'
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('Content-Type', file.type)

    xhr.upload.addEventListener('progress', function(e) {
      const percentage = (e.loaded * 100.0) / e.total || 100
      setProgress(percentage)
    })

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.response)
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
      }
    })

    xhr.send(file)
  })
}
