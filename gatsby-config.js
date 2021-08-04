/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Bagus Merta - Portfolio",
    description: "Hi my name is Bagus, I'm a coder",
    // url: "www.bagusmerta.com", // No trailing slash allowed!
    // siteUrl: "www.bagusmerta.com", // No trailing slash allowed!
    image: "/avatar.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/assets/markdown/projects`,
      },
    },
  ],
}
