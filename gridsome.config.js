// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Nasa Mars Rover',
  plugins: [
    {
      use: 'gridsome-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDNAME,
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        resourceOptions: {
          type: "upload",
          prefix: 'testing',
          max_results: 200
        },
        // transformations: {
        //   width: 200,
        //   height: 200,
        //   gravity: 'auto:subject',
        //   crop: 'fill',
        // }
      },
    },
  ]
}
