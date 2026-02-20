import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
    const siteTitle = 'Maaz Ahmad Khan - Portfolio';
    const defaultDescription = 'Full Stack Developer specialized in React, Node.js, and modern web technologies.';
    const siteUrl = 'https://maaz-portfolio.vercel.app'; // Replace with actual URL if different
    const defaultImage = '/Maaz_profile.jpg';

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | Maaz Ahmad Khan` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
}
