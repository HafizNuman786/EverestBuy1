/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'skdevelopers.pro'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    hostname: 'everestbuy.com'
  }
}

module.exports = nextConfig
