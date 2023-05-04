import { MantineThemeOverride } from "@mantine/core";

export default {
    // primaryShade: 0,
    colors: {
        red: ['#fff5f5', '#fed7d7', '#feb2b2', '#fc8181', '#f56565', '#e53e3e', '#D61D4F', '#c53030', '#952c2c', '#822727'],
        yellow: ['#fffff0', '#fefcef', '#faf089', '#f6e05e', '#ecc94b', '#d69e2e', '#fac214', '#b7791f', '#975a16', '#744210'],
        black: ['#C1C2C5', '#A6A7AB', '#909296', '#5C5F66', '#373A40', '#2C2E33', '#010101', '#1A1B1E', '#141517', '#101113']
    },
    defaultRadius: 16,
    radius: {
        xl: 16,
        lg: 12,
        md: 10,
        sm: 8,
        xs: 5
    }
} as unknown as MantineThemeOverride