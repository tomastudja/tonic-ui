import system from '../core/system';

const group = 'flexbox';
const config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: {
    property: 'flexBasis',
    scale: 'sizes',
  },
  justifySelf: true,
  alignSelf: true,
  order: true,
};

const flexbox = system(config, { group });

export default flexbox;
