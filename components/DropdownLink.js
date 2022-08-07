import Link from 'next/link';
import React from 'react';

const DropdownLink = React.forwardRef(function DropdownLink(props, ref) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} passHref>
      <a {...rest} ref={ref}>
        {children}
      </a>
    </Link>
  );
});

export default DropdownLink;
