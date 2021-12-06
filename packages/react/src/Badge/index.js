import {
  ensureArray,
  ensureBoolean,
} from 'ensure-type';
import React, { forwardRef } from 'react';
import Box from '../Box';
import useEffectOnce from '../hooks/useEffectOnce';
import useTheme from '../useTheme';
import warnDeprecatedProps from '../utils/warnDeprecatedProps';
import {
  useBadgeStyle,
  useBadgeContentStyle,
  useBadgeContentPlacementStyle,
} from './styles';

const Badge = forwardRef((
  {
    dotSize: dotSizeProp, // deprecated
    isHidden: isHiddenProp, // deprecated
    offset: offsetProp, // deprecated
    variantColor: variantColorProp, // deprecated

    badgeContent: badgeContentProp,
    children,
    isInvisible: isInvisibleProp,
    placement = 'top-right', // One of: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    variant = 'solid',
    ...rest
  },
  ref,
) => {
  const theme = useTheme();

  useEffectOnce(() => {
    if (dotSizeProp !== undefined) {
      warnDeprecatedProps('dotSize', {
        alternative: ['width', 'height'],
        willRemove: true,
      });
    }

    if (isHiddenProp !== undefined) {
      warnDeprecatedProps('isHidden', {
        alternative: 'isInvisible',
        willRemove: true,
      });
    }

    if (offsetProp !== undefined) {
      warnDeprecatedProps('offset', {
        alternative: ['right', 'top'],
        willRemove: true,
      });
    }

    if (variant === 'badge') {
      warnDeprecatedProps('variant="badge"', {
        alternative: 'variant="solid"',
        willRemove: true,
      });
    }

    if (variantColorProp !== undefined) {
      warnDeprecatedProps('variantColor', {
        alternative: 'backgroundColor',
        willRemove: true,
      });
    }
  });

  { // map deprecated props to new props
    if (variant === 'dot' && dotSizeProp !== undefined) {
      rest.height = rest.height ?? dotSizeProp;
      rest.width = rest.width ?? dotSizeProp;
    }
    if (isHiddenProp !== undefined) {
      isInvisibleProp = ensureBoolean(isHiddenProp);
    }
    if (offsetProp !== undefined) {
      const [offsetX, offsetY] = ensureArray(offsetProp);
      if (offsetX !== undefined) {
        rest.right = rest.right ?? offsetX;
      }
      if (offsetY !== undefined) {
        rest.top = rest.top ?? offsetY;
      }
    }
    if (variant === 'badge') {
      variant = 'solid';
    }
    if (variantColorProp !== undefined) {
      const variantColor = theme?.colors?.[`${variantColorProp}:60`] ?? theme?.colors?.[`${variantColorProp}:50`] ?? variantColorProp;
      rest.backgroundColor = rest.backgroundColor ?? variantColor;
    }
  }

  const badgeContent = (variant === 'dot') ? null : badgeContentProp;
  const isInvisible = isInvisibleProp ?? (() => {
    if ((badgeContent === null || badgeContent === undefined) && (variant !== 'dot')) {
      return true;
    }
    return false;
  })();

  const badgeStyle = useBadgeStyle();
  const badgeContentStyle = useBadgeContentStyle({ variant });
  const badgeContentPlacementStyle = useBadgeContentPlacementStyle({ placement });

  if (!children && !isInvisible) {
    return (
      <Box
        ref={ref}
        {...badgeContentStyle}
        {...rest}
      >
        {badgeContent}
      </Box>
    );
  }

  return (
    <Box
      {...badgeStyle}
    >
      {children}
      {!isInvisible && (
        <Box
          ref={ref}
          {...badgeContentStyle}
          {...badgeContentPlacementStyle}
          {...rest}
        >
          {badgeContent}
        </Box>
      )}
    </Box>
  );
});

Badge.displayName = 'Badge';

export default Badge;
