const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FyYWdqaWtkaGltYSIsImEiOiJja21naTVuN2YwOWxrMm5tb3YydHRhb3h0In0.Grwrke1nA0lmopgUptcPwA'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to connection services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[2],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode