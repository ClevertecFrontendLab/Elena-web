import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px',
    sm: '480px',
    md: '769px',
    lg: '992px',
    xl: '1440px',
    '2xl': '1920px',
};

export const theme = extendTheme({
    breakpoints,
});
