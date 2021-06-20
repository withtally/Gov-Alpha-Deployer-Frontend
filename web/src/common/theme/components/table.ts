import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const parts = ["table", "thead", "tbody", "tr", "th", "td", "caption"];

const table: ComponentMultiStyleConfig = {
  parts,
  baseStyle: {
    th: {
      fontSize: "md",
      fontWeight: "semibold",
      lineHeight: "1.125rem",
      color: "gray.700",
      minWidth: 36,
      textTransform: "none",
    },
  },
};

export default table;
