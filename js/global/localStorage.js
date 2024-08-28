'use strict'

function saveCountryData(countryData) {
  if (!countryData || !countryData.name || !countryData.name.common) {
    return
  }

  const countryName = countryData.name.common.toLowerCase()
  localStorage.setItem(countryName, JSON.stringify(countryData))
}

function getCountryData(countryName) {
  if (!countryName) {
    return null
  }

  const countryData = localStorage.getItem(countryName.toLowerCase())
  if (!countryData) {
    return null
  }

  return JSON.parse(countryData)
}
function getCountryDataByCode(countryCode) {
  if (!countryCode) {
    return null
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const countryData = JSON.parse(localStorage.getItem(key))

    if (
      countryData.cca2?.toLowerCase() === countryCode.toLowerCase() ||
      countryData.cca3?.toLowerCase() === countryCode.toLowerCase() ||
      countryData.ccn3 === countryCode
    ) {
      return countryData
    }
  }

  return null
}

function clearLocalStorage() {
  localStorage.clear()
}
