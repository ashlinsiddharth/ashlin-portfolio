import React, { useEffect } from 'react';

export interface SeoProps {
  title: string;
  description?: string;
}

const DEFAULT_DESCRIPTION =
  'Portfolio of Ashlin Siddharth, Full Stack Developer and BCA Data Science student at Presidency University, Bengaluru.';

export const Seo: React.FC<SeoProps> = ({ title, description = DEFAULT_DESCRIPTION }) => {
  useEffect(() => {
    // Set document title in format: "Page | Ashlin Siddharth"
    document.title = `${title} | Ashlin Siddharth`;

    // Set or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
};

export default Seo;
