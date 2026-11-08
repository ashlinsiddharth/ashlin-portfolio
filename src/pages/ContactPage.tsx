import React from 'react';
import Seo from '../components/layout/Seo';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <Seo title="Contact" />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
        Contact
      </h1>
    </div>
  );
};

export default ContactPage;
