'use strict'

function searchCountry() {
  document.querySelector('.search-country').textContent = 'searchCountry'
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
