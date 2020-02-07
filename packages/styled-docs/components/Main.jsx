/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Box, useColorMode } from '@trendmicro/react-styled-core';
import React from 'react';

const Main = React.forwardRef(({ children, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const backgroundColor = {
    light: 'white', // FIXME
    dark: 'gray.90', // FIXME
  }[colorMode];

  return (
    <Box
      as="main"
      pt=".75rem"
      pb="1.5rem"
      px="1.5rem"
      backgroundColor={backgroundColor}
      css={css`
        >:first-child {
          margin-top: 0!important;
        }
        >:last-child {
          margin-bottom: 0!important;
        }
      `}
      {...props}
    >
      {children}
    </Box>
  );
});

export default Main;
