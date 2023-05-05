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
                  }
}));