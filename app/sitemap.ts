import { MetadataRoute } from "next";

export default function sitemap():
    MetadataRoute.Sitemap {
        return [
            {
                url: "https://www.tosscables.com/",
                lastModified: new Date(),
                priority: 1,    
            },
            {
                url: "https://www.tosscables.com/products",
                lastModified: new Date(),
                priority: 0.8,    
            },
            {
                url: "https://www.tosscables.com/priceList",
                lastModified: new Date(),
                priority: 0.81,    
            },
            {
                url: "https://www.tosscables.com/offers",
                lastModified: new Date(),
                priority: 0.82,    
            },
            {
                url: "https://www.tosscables.com/aboutUs",
                lastModified: new Date(),
                priority: 0.83,    
            },
            {
                url: "https://www.tosscables.com/contactUs",
                lastModified: new Date(),
                priority: 0.84,    
            },
            {
                url: "https://www.tosscables.com/products/1",
                lastModified: new Date(),
                priority: 0.7,    
            },
            {
                url: "https://www.tosscables.com/products/2",
                lastModified: new Date(),
                priority: 0.7,    
            },
            {
                url: "https://www.tosscables.com/products/3",
                lastModified: new Date(),
                priority: 0.7,    
            },
            {
                url: "https://www.tosscables.com/products/4",
                lastModified: new Date(),
                priority: 0.7,    
            },
        ]
    }