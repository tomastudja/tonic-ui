import { useColorMode } from '../color-mode';
import { useColorStyle } from '../color-style';

const usePopoverContentStyle = () => {
  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });
  const backgroundColor = {
    dark: 'gray:80',
    light: 'white',
  }[colorMode];
  const color = {
    dark: 'white:primary',
    light: 'black:primary',
  }[colorMode];

  return {
    backgroundColor,
    color,
    boxShadow: colorStyle?.shadow?.thin,
    tabIndex: '-1',
    borderWidth: 1,
    fontSize: 'sm',
    lineHeight: 'sm',
    p: '3x',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'sm',
    maxWidth: '288px',
    _focus: {
      outline: 0,
    },
  };
};

const usePopoverHeaderStyle = () => {
  const [colorMode] = useColorMode();
  const borderColor = {
    dark: 'rgba(255, 255, 255, 0.12)',
    light: 'rgba(0, 0, 0, 0.12)',
  }[colorMode];

  return {
    fontWeight: 'semibold',
    __after: {
      content: '""',
      display: 'block',
      borderTop: 1,
      borderColor,
      my: '2x',
    },
  };
};

const usePopoverBodyStyle = () => {
  return {
  };
};

const usePopoverFooterStyle = () => {
  return {
    pt: '4x',
  };
};

export {
  usePopoverContentStyle,
  usePopoverHeaderStyle,
  usePopoverBodyStyle,
  usePopoverFooterStyle,
};
