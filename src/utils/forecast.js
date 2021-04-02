const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=89a14b5d51a3cbc0b535f2a1bc669aa7&query=' + encodeURIComponent(latitude) +','+ encodeURIComponent(longtitude)

    request({ url, json: true}, (error, { body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degreees out. It feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast