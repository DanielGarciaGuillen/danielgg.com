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
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        commonmark: true,
        footnotes: true,
        pedantic: true,
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 840,
              wrapperStyle: `margin-left: 0`
            },
          },
        ],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
