module.exports = {
   siteMetadata: {
    description: "Personal page of Pierangelo Micciulla",
    locale: "en",
    title: "Pierangelo Micciulla Portfolio",
    formspreeEndpoint: "https://formspree.io/f/xyyoelez",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
}