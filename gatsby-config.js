require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SoundBoss Studios`,
    description: `SoundBoss Studios, Recording Studio, Analog Recording, Professional Mixing, Professional Mastering, Recording Studio Atlanta, Atlanta Recording Studio`,
    author: `Chris Harley @ The Great Dev Co.`,
    titleTemplate: `%s | Gatsby - Airtable`,
    url: `https://soundbossstudios.netlify.app/`,
    image: `showcase.jpg`,
    twitterUsername: `@chrisharley81`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-RYE3HEW2HD`,
      },
    },
  ],
}