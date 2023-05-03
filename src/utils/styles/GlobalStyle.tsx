import { createStyles, rem, Global } from "@mantine/core";
import theme from "./theme";

export const useStyles = createStyles((theme) => ({
  card: {
    height: rem(70),
    width: rem(70),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export const leftSideStyle = createStyles(() => ({
  sideBar: {
    position: "relative",
    "&::after": {
      content: `""`,
      position: "absolute",
      width: 147,
      height: "75vh",
      background: theme.colors?.yellow?.[6],
      borderRadius: "0px 0px 251px 0px",
      top: -85,
      left: 0,
      zIndex: -1,
    },
  },
  textStyle: {
    fontSize: 11,
  },
}));


export function GlobalStyle() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
        },

        ".your-class": {
          backgroundColor: "red",
        },

        "#your-id > [data-active]": {
          backgroundColor: "pink",
        },
      })}
    />
  );
}