/* eslint-disable no-undef */
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.websofttools.com",
  changefreq: "daily",
  priority: 0.7,
  generateRobotsTxt: false,
  exclude: [
    "/pages/api",
    "/pages/_app.js",
    "/pages/gtag",
    "/pages/_document.js",
  ],
};
