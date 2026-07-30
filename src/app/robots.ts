export const dynamic = 'force-static';

import {MetadataRoute}  from "next";   

export default function robots(): MetadataRoute.Robots {
  return {
  rules:{
    userAgent: "*",
    allow: "/",
    disallow: ["/admin/", "/login/", "/private/","/temp/" ],
  },
  sitemap: "https://babadeepsinghkhadstore.in/sitemap.xml",
  }
  
}
