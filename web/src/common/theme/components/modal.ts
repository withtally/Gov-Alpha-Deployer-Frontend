import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const parts = ['overlay', 'dialogContainer', 'dialog', 'header', 'closeButton', 'body', 'footer'];

const modal: ComponentMultiStyleConfig = {
  parts,
  baseStyle: {
    dialog: {
      borderRadius: '10px',
    },
  },
};

export default modal;
