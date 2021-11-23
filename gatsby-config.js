module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hackville.io",
    title: "Hackville 2022 - A Sheridan College Hackathon",
    description: "Hackville is Sheridan College's flagship hackathon, hosted by and for students."
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "faqs",
        path: "./src/faqs/",
      },
      __key: "pages",
    },
  ],
};
