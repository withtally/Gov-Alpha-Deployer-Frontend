import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const parts = ['container', 'label', 'closeButton'];

const tag: ComponentMultiStyleConfig = {
  parts,
  baseStyle: {
    label: {
      fontFamily: 'Open Sans',
    },
    container: {
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      flex: 'none',
    },
  },
  sizes: {
    sm: {
      container: {
        px: 1.5,
        py: 1,
        maxH: 5,
        fontSize: 'xs',
        borderRadius: 'sm',
      },
      label: {
        lineHeight: '0.5625em',
      },
    },
    md: {
      container: {
        px: 2,
        py: 1.5,
        maxH: 6,
        fontSize: 'sm',
        borderRadius: 'sm',
      },
      label: {
        lineHeight: '0.6875em',
      },
    },
    lg: {
      container: {
        px: 3,
        py: 2,
        maxH: 7,
        fontSize: 'md',
        borderRadius: 'sm',
      },
      label: {
        lineHeight: '0.75em',
      },
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
};

export default tag;
