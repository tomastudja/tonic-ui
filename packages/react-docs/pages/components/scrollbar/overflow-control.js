import {
  Box,
  Divider,
  Grid,
  Scrollbar,
  Text,
} from '@tonic-ui/react';
import React from 'react';
import Lorem from '@/components/Lorem';

const App = () => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
      columnGap="6x"
      rowGap="4x"
    >
      <Box>
        <Text size="xl" marginBottom="2x">
          {'overflow="auto"'}
        </Text>
        <Divider orientation="horizontal" mt="2x" mb="4x" />
        <Scrollbar
          height={200}
          overflow="auto"
        >
          <Lorem count={10} whiteSpace="nowrap" />
        </Scrollbar>
      </Box>
      <Box>
        <Text size="xl" marginBottom="2x">
          {'overflow="scroll"'}
        </Text>
        <Divider orientation="horizontal" mt="2x" mb="4x" />
        <Scrollbar
          height={200}
          overflow="scroll"
        >
          <Lorem count={10} whiteSpace="nowrap" />
        </Scrollbar>
      </Box>
      <Box>
        <Text size="xl" marginBottom="2x">
          {'overflow="hidden"'}
        </Text>
        <Divider orientation="horizontal" mt="2x" mb="4x" />
        <Scrollbar
          height={200}
          overflow="hidden"
        >
          <Lorem count={10} whiteSpace="nowrap" />
        </Scrollbar>
      </Box>
    </Grid>
  );
};

export default App;
