import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '~/themes/theme-breakpoints';

import Header from '../features/Header/Header';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Header />
        </ChakraProvider>
    );
}
export default App;
