const siteMetadata = {
  title: 'Daniel GG - Front End Dev',
  author: 'Daniel GG',
  homepage: 'http://danielgg.com',
  siteUrl: 'http://danielgg.com',
}

module.exports = {
  siteMetadata,
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
