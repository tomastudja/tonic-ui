import {
  Box,
  useColorMode,
  useColorStyle,
  useTheme,
} from '@tonic-ui/react';
import React from 'react';
import CodeBlock from './CodeBlock';
import jsonPrettify from '../utils/json-prettify';

const ThemeParser = ({
  theme: themeKey,
}) => {
  const theme = useTheme();
  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });
  let token = colorStyle[themeKey] ?? theme[themeKey];

  if (!token) {
    return 'Theme field not found';
  }

  if (themeKey === 'space' || themeKey === 'sizes') {
    token = Object.keys(token)
      .filter(key => !(key.toString().match(/[qh]$/))) // Filter strings matching 'q' or 'h' like '1q', '1h'
      .reduce((res, key) => {
        res[key] = token[key];
        return res;
      }, {});
  }

  const indent = false;

  return (
    <Box mb="6x">
      <CodeBlock>
        <div className="js">
          {`const ${themeKey} = ${jsonPrettify(token, indent)}`}
        </div>
      </CodeBlock>
    </Box>
  );
};

export default ThemeParser;
