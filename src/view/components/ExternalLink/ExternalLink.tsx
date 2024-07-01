/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ExternalLinkProps extends LinkProps {
  external?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ external, ...props }) => {
  if (external) {
    return (
      <a
        href={props.to as string}
        target="_blank"
        rel="noopener noreferrer"
        className={props.className}>
        {props.children}
      </a>
    );
  }

  return <Link {...props} />;
};

export default ExternalLink;
