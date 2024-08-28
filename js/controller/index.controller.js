'use strict'

function onInit() {
  menuRender()
}

function openShowModal(countryData) {
  console.log(countryData)
  const nativeNames = Object.values(countryData.name.nativeName)
    .map((n) => `${n.official} (${n.common})`)
    .join(', ')
  const currency = Object.values(countryData.currencies)[0]
  const languages = Object.values(countryData.languages).join(', ')
  const borders = countryData.borders ? countryData.borders.join(', ') : 'None'
  const population = countryData.population.toLocaleString()
  const flagImage = countryData.flags.png

  document.querySelector('.dialog').innerHTML = `
      <div class="dialog-content">
        <span class="close" onclick="closeDialog()" data-i18n="close">&times;</span>
        <img class="dialog-img" src="${flagImage}" alt="${countryData.name.common}" />
        <div class="dialog-info">
          <h2 data-i18n="countryName">${countryData.name.common} (${countryData.name.official})</h2>
          <table>
            <tr>
              <td data-i18n="nativeName">Native Names</td>
              <td>${nativeNames}</td>
            </tr>
            <tr>
              <td data-i18n="capital">Capital</td>
              <td>${countryData.capital.join(', ')}</td>
            </tr>
            <tr>
              <td data-i18n="region">Region</td>
              <td>${countryData.region}, ${countryData.subregion}</td>
            </tr>
            <tr>
              <td data-i18n="population">Population</td>
              <td>${population}</td>
            </tr>
            <tr>
              <td data-i18n="languages">Languages</td>
              <td>${languages}</td>
            </tr>
            <tr>
              <td data-i18n="currency">Currency</td>
              <td>${currency.name} (${currency.symbol})</td>
            </tr>
            <tr>
              <td data-i18n="area">Area</td>
              <td>${countryData.area.toLocaleString()} km²</td>
            </tr>
            <tr>
              <td data-i18n="borders">Borders</td>
              <td>${borders}</td>
            </tr>
            <tr>
              <td data-i18n="timezone">Timezones</td>
              <td>${countryData.timezones.join(', ')}</td>
            </tr>
            <tr>
              <td data-i18n="gini">Gini Index (2016)</td>
              <td>${countryData.gini ? countryData.gini[2016] : 'N/A'}</td>
            </tr>
          </table>
        <button onclick="closeDialog()" class="close-btn" data-i18n="close">Close</button>
        </div>
      </div>`

  document.querySelector('.dialog').style.display = 'flex'
}

function closeDialog() {
  const elDialog = document.querySelector('.dialog')
  elDialog.style.display = 'none'
}

function showCountryData(countryData) {
  const cdata = document.querySelector('.country-data')

  const flagImage = new Image()

  const cnamge = document.querySelector('.country-name')
  const cimg = document.querySelector('.country-img')
  const cpopulation = document.querySelector('.country-population')
  const carea = document.querySelector('.country-area')

  const name = countryData.name.common
  flagImage.src = countryData.flags.png
  const population = countryData.population.toLocaleString()
  const area = countryData.area.toLocaleString() + ' km²'

  flagImage.onload = () => {
    hideLoader()

    cdata.innerHTML = `
              <h2 class="country-name">${name}</h2>
          <img class="country-img" src="${flagImage.src}" />
          <p class="country-population">${population}</p>
          <p class="country-area">${area}</p>`
  }
}

function showLoader() {
  const cdata = document.querySelector('.country-data')
  cdata.innerHTML = `
        <div class="loader-container">
          <img src="img/loader.svg" alt="Loading..." class="loader-img"/>
        </div>`
}

function hideLoader() {
  const loaderContainer = document.querySelector('.loader-container')
  if (loaderContainer) {
    loaderContainer.remove()
  }
}
