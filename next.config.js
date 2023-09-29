/** @type {import('next').NextConfig} */
const nextConfig = { 
  images:{
    remotePatterns:[
      {
       protocol:'https',
       hostname:'picsum.photos',
       port:'',
       pathname:'/id/**'

      } ,
       {
       protocol:'https',
       hostname:'images.pexels.com',
       port:'',
       pathname:'/photos/**'

      }
      ,
       {
       protocol:'https',
       hostname:'img.freepik.com',
       port:'',
       pathname:'/free-vector/**'

      }, 
         {
        protocol:'https',
        hostname:'*',
        port:'',
        pathname:'/**'
 
       } 
    ]
  }

}

module.exports = nextConfig
