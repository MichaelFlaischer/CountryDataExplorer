'use strict'

function searchCountry() {
  let elCountry = document.querySelector('#cname').value

  getAns(elCountry, openShowModal)
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

function showCountryData(countryData) {
  const cnamge = document.querySelector('.country-name')
  const cimg = document.querySelector('.country-img')
  const cpopulation = document.querySelector('.country-population')
  const carea = document.querySelector('.country-area')

  const name = countryData.name.common
  const flagImage = countryData.flags.png
  const population = countryData.population.toLocaleString()
  const area = countryData.area.toLocaleString() + ' km²'

  cnamge.textContent = name
  cimg.src = flagImage
  cpopulation.textContent = population
  carea.textContent = area
}
