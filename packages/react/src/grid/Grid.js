import React, { forwardRef } from 'react';
import { Box } from '../box';

const Grid = forwardRef((
  {
    gap,
    rowGap,
    columnGap,
    column,
    row,
    area,
    autoFlow,
    autoRows,
    autoColumns,
    templateRows,
    templateColumns,
    templateAreas,
    ...rest
  },
  ref,
) => (
  <Box
    ref={ref}
    display="grid"
    gridGap={gap}
    gridRowGap={rowGap}
    gridColumnGap={columnGap}
    gridColumn={column}
    gridRow={row}
    gridArea={area}
    gridAutoFlow={autoFlow}
    gridAutoRows={autoRows}
    gridAutoColumns={autoColumns}
    gridTemplateRows={templateRows}
    gridTemplateColumns={templateColumns}
    gridTemplateAreas={templateAreas}
    {...rest}
  />
));

Grid.displayName = 'Grid';

export default Grid;
