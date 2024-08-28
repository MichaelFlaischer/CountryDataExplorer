'use strict'

function searchCountry(event) {
  event.preventDefault()

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
  showLoader()

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

function clearCache() {
  clearLocalStorage()
}

function getCountryByCode(code, cb) {
  let countryData = getCountryDataByCode(code)

  if (countryData) {
    cb(countryData)
  } else {
    countryData = getCountryLinkFromApi(code)
    cb(countryData)
  }
}

function getCountryLink(code, cb) {
  let countryData = getCountryDataByCode(code)
  if (countryData) {
    cb(countryData.maps.googleMaps)
  } else {
    getCountryLinkFromApi(code, cb)
  }
}

function getCountryLinkFromApi(code, cb) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)[0]
      saveCountryData(ans)
      cb(ans.maps.googleMaps)
    }
  }
  xhr.open('GET', `https://restcountries.com/v3.1/alpha/${code}`, true)
  xhr.send()
}
