export const ApiRoutes = {
    nasa: {
        planetaryAPOD: {
            endpoint: 'https://api.nasa.gov/planetary/apod', method: 'GET'
        },
        mars: {
            latestPhotos: {
                endpoint: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos', method: 'GET'
            },
            photo: {
                endpoint: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', method: 'GET'
            }
        }
    }
}