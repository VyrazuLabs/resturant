import { createStyles } from "@mantine/core";

export const useDetailsStyle = createStyles((theme) => ({
  cardStyle: {
    position: "absolute",
    top: "100%",
    left: "50%",
    width: "90%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255, 255, 255, 0.74)",
    backdropFilter: "blur(9px)",
    borderRadius: theme.defaultRadius,
  },
  sideBar: {
    position: "relative",
    "&::after": {
      content: `""`,
      position: "absolute",
      width: 147,
      height: "75vh",
      background: theme.colors.yellow[6],
      borderRadius: "0px 0px 251px 0px",
      top: -85,
      left: 0,
      zIndex: -1,
    },
  },
  textStyle: {
    fontSize: 11,
  },
  list_item: {
    margin: 0,
    padding: 0,
    display: "flex",
    listStyle: "none",
    flexWrap: "wrap",
    li: {
      padding: "0px 10px 0px 7px",
      fontSize: 11,
      margin: 1,
      position: "relative",
      bottom: "7px",
    },
  },
  addressStyle: {
    gap: 4,
    fontSize: 11,
  },
  underline: {
    position: "relative",
    backgroundImage: 'linear-gradient(to right, #D61D4F, #D61D4F)',
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 2px",
    lineHeight: 2
  },
}));

export const useItemStyle = createStyles((theme) => ({
  cardStyle: {
    background: "rgba(255, 255, 255, 0.74)",
    backdropFilter: "blur(9px)",
    borderRadius: theme.defaultRadius,
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