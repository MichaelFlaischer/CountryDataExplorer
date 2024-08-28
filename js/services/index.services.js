'use strict'

function searchCountry() {
  let elCountry = document.querySelector('#cname').value

  getAns(elCountry, showCountryData)
}

function getAns(name, cb) {
  let countryData = getCountryData(name)

  if (countryData) {
    cb(countryData)
  } else {
    countryData = getAnsFromApi(name, cb)
  }
}

function getAnsFromApi(name, cb) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)[0]
      saveCountryData(ans)
      cb(ans)
    }
  }
  xhr.open('GET', `https://restcountries.com/v3.1/name/${name}?fullText=true`, true)
  xhr.send()
}
