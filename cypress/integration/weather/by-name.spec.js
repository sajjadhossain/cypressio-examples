var city = 'London'
var getWeatherByName = 'samples.openweathermap.org/data/2.5/weather?q='
var appId = '&appid=b6907d289e10d714a6e88b30761fae22'
var maxTemp
var minTemp

describe('Open Weather API', () => {
  it('Gets weather data based on location', () => {
    cy.request('GET', getWeatherByName + city + appId).then((response) => {
      maxTemp = response.body.main.temp_max + ' degrees Kelvin'
      minTemp = response.body.main.temp_min + ' degrees Kelvin'
    })
  })
  it('Console logs the highest and the lowest temperatures', () => {
    console.log({
      'max': maxTemp,
      'min': minTemp
    })
  })
})
