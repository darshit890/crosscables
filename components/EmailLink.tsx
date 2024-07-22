// components/EmailLink.tsx
import React from 'react';
import Link from 'next/link';

interface EmailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  className?: string;
  children?: React.ReactNode;
}

const EmailLink: React.FC<EmailLinkProps> = ({ email, subject, body, className, children }) => {
  const encodedSubject = encodeURIComponent(subject || '');
  const encodedBody = encodeURIComponent(body || '');
  const mailtoHref = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  // Note: We do not need to use 'passHref' anymore because we're not wrapping an 'a' tag
  return (
    <Link href={mailtoHref} className={className}>
      {children}
    </Link>
  );
};

export default EmailLink;