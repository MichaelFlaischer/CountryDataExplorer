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
