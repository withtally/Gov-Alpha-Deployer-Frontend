import { ComponentSingleStyleConfig } from '@chakra-ui/react';

const button: ComponentSingleStyleConfig = {
  baseStyle: {
    fontFamily: 'Montserrat',
    fontWeight: 'semibold',
    borderRadius: 'sm',
    _disabled: {
      cursor: 'not-allowed',
    },
  },
  sizes: {
    sm: {
      px: 3,
      py: 1,
      fontSize: 'sm',
    },
    md: {
      py: 2,
      px: 4,
      fontSize: 'sm',
    },
    lg: {
      py: 3,
      px: 6,
      fontSize: 'sm',
    },
  },
  variants: {
    primary: {
      color: 'white',
      bg: 'purple.500',
      _disabled: {
        opacity: 0.7,
        bg: 'purple.600',
      },
      _hover: {
        bg: 'purple.600',
        _disabled: {
          bg: 'purple.600',
        },
      },
    },
    secondary: {
      color: 'gray.500',
      bg: 'transparent',
      border: 'gray.light',
      _disabled: {
        color: 'gray.300',
        bg: 'gray.50',
      },
      _hover: {
        bg: 'gray.50',
        color: 'purple.500',
        _disabled: {
          bg: 'gray.50',
        },
      },
    },
    tertiary: {
      color: 'purple.500',
      bg: 'transparent',
      border: 'none',
      _disabled: {
        color: 'gray.400',
      },
      _hover: {
        color: 'purple.700',
        _disabled: {
          bg: 'transparent',
        },
      },
    },
    error: {
      color: 'white',
      bg: 'red.500',
      _disabled: {
        opacity: 0.7,
        bg: 'red.600',
      },
      _hover: {
        bg: 'red.600',
        _disabled: {
          bg: 'red.600',
        },
      },
    },
    twitter: {
      _hover: {
        bg: 'external.twitterHover',
      },
      bg: 'external.twitter',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default button;
