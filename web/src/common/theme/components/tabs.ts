import { ComponentMultiStyleConfig } from '@chakra-ui/react';
import { Dict } from 'modules/common/lib/types';

const parts = ['root', 'tablist', 'tab', 'tabpanels', 'tabpanel', 'indicator'];

const tabs: ComponentMultiStyleConfig = {
  parts,
  variants: {
    // eslint-disable-next-line
    line: ({ colorScheme: c}: Dict) => ({
      tab: {
        _selected: { color: `${c}.500`, borderColor: `${c}.500` },
        py: 2,
        px: 3,
        color: 'gray.400',
        fontSize: 'sm',
        fontWeight: 'semibold',
        lineHeight: '1.313rem',
      },
    }),
  },
};

export default tabs;
