const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=XqOVVfoPOpyWD30GV1EFu35cSPHReMszhgZf57L5')

     const collection = actions.addCollection('Photo')

    for (const photo of data.latest_photos) {
      collection.addNode({
        id: photo.id,
        sol: photo.sol,
        title: photo.earth_date,
        img: photo.img_src
      })
    }
  })
}