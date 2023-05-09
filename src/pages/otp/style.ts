import { createStyles } from "@mantine/core";

export const otpPageStyle = createStyles(() => ({
    iconCard: {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    }, 
    boxStyle: {
        padding: '15px 0 0 15px',
        textAlign: 'left'
    },
    otpInput: {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    input: {
        fontSize: "16px",
        textAlign: 'center'
    },
  },
}))