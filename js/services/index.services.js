'use strict'

function searchCountry() {
  let elCountry = document.querySelector('#cname').value

  getAns(elCountry, openShowModal)
}

function getAns(name, cb) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)[0]
      console.log(ans)
      cb(ans)
    }
  }
  xhr.open('GET', `https://restcountries.com/v3.1/name/${name}?fullText=true`, true)
  xhr.send()
}
