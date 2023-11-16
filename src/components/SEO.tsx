import * as React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export interface ISeoProps {
    title?: string;
    description?: string;
    pathname?: string;
    image?: string;
}

export const SEO:React.FC<ISeoProps> = (props) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();
    
    const seo = {
        title: props.title || defaultTitle,
        description: props.description || defaultDescription,
        image: `${siteUrl}${props.image || image}`,
        url: `${siteUrl}${props.pathname || ``}`,
        twitterUsername,
    }

    return(<>
        <html lang="en" className="scroll-smooth"/>
        <title>{seo.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={seo.description} />
        <meta name="keywords" content="Consulting Solutions, IT Services, digital transformation consulting, Cloud Application Development, Microsoft 365 Apps, Copilot, Microsoft 365 Copilot Adoption, Generative AI, AI Assistants, SharePoint Consulting, Microsoft Teams App Development, Microsoft Copilot Studio" />
        <meta name="image" content={seo.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={seo.twitterUsername} />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:url" content={seo.url} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />
        
    </>)
}