import { createStyles } from "@mantine/core";

export const useCartStyle = createStyles((theme) => ({
  addressStyle: {
    gap: 4,
    fontSize: 11,
    },
    item: {
      transition: "transform 150ms ease",

      "&[data-active]": {
        backgroundColor: "transparent",
        borderRadius: theme.radius.md,
        zIndex: 1,
      },
    },
    content: {
      padding: 0
    },
    addsOnTable: {
      paddingLeft: '0',
      paddingBottom: '0',
      paddingTop: '0'
  },
  couponInput: {
    background: "#FFFFFF",
    borderRadius: "10px",
    input: {
      border: "1px solid #7E7E7E",
      fontSize: '12px',
    },
    'input:: placeholder': {
      fontSize: '12px'
    }
  },
}));