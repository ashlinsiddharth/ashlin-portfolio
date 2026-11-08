import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';

export const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Seo title="404 - Page Not Found" />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
        Page Not Found
      </h1>
      <p className="text-text-muted mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center text-sm font-sans text-brand-cyan hover:underline"
      >
        ← Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
