import styled from '@emotion/styled';
import { ariaAttr } from '@tonic-ui/utils';
import React, { forwardRef } from 'react';
import { Box } from '../box';

const SVGIconBase = styled(Box)`
  flex-shrink: 0;
  &:not(:root) {
    overflow: hidden;
  }
`;

const SVGIcon = forwardRef((
  {
    children,
    size = '4x',
    color = 'currentColor',
    role = 'presentation',
    focusable = false,
    viewBox = '0 0 16 16',
    ...rest
  },
  ref,
) => {
  return (
    <SVGIconBase
      aria-hidden={ariaAttr(true)}
      ref={ref}
      as="svg"
      width={size}
      height={size}
      fill={color}
      display="inline-flex"
      verticalAlign="middle"
      viewBox={viewBox}
      focusable={focusable}
      role={role}
      {...rest}
    >
      {children}
    </SVGIconBase>
  );
});

SVGIcon.displayName = 'SVGIcon';

export default SVGIcon;
