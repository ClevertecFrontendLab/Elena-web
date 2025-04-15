import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { theme } from '~/themes/theme-breakpoints';

import { FooterMobile } from '../features/Footer/FooterMobile';
import { Home } from '../pages/HomePage/Home';
import { JuicyPage } from '../pages/JuicyPage/JuicyPage';
import { VeganPage } from '../pages/VeganPage/VeganPage';
function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/juicy' element={<JuicyPage />} />
                    <Route path='/vegan' element={<VeganPage />} />
                </Routes>
                <FooterMobile />
            </Router>
        </ChakraProvider>
    );
}
export default App;
