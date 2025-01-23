import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Button = ({ href, className, iconClassName, src, alt, textClassName, children}) => {
  return (
    <Link
      href={href}
      className={className}
    >
      {src && (
        <figure className={iconClassName}>
          <Image
              src={src}
              alt={alt}
              style={{ objectFit: "contain" }}
              fill
          />
    </figure>
      )}
      <h2 className={textClassName}>
          {children}
      </h2>
    </Link>
  );
};

export default Button;
