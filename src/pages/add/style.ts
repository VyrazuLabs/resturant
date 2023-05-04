import { createStyles } from "@mantine/core";

export const useItemStyle = createStyles((theme) => ({
  cardStyle: {
    background: "rgba(255, 255, 255, 0.74)",
    backdropFilter: "blur(9px)",
    borderRadius: theme.defaultRadius,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.15)'
  },
  addressStyle: {
    gap: 4,
    fontSize: 11,
  },
  requestInput: {
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