module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
  },

  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `danielgguillen.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
