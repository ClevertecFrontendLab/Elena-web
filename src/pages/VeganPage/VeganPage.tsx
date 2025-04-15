import { Box, Flex, Heading } from '@chakra-ui/react';

import { FooterMobile } from '~/features/Footer/FooterMobile';
import Header from '~/features/Header/Header';
import { SearchBox } from '~/features/SearchBox/SearchBox';
import { Sidebar } from '~/widgets/sidebar/Sidebar';
import { SidebarRight } from '~/widgets/sidebar/SidebarRight';

import { VeganSection } from '../../features/VeganSection/VeganSection';
import { VeganContent } from './VeganContent/VeganContent';

export const VeganPage = () => (
    <>
        <Header />
        <Box display='flex' justifyContent='space-between'>
            <Sidebar />
            <Flex as='main' w='73%' flexDir='column' gap='40px' justifyContent='center' mb='20px'>
                <Flex flexDir='column' justifyContent='center' gap='30px'>
                    <Heading as='h1' fontSize='48px' fontWeight='700' margin='25px auto 0px'>
                        Самое сочное
                    </Heading>
                    <SearchBox />
                </Flex>
                <VeganContent />
                <VeganSection />
            </Flex>
            <SidebarRight />
        </Box>
        <FooterMobile />
    </>
);
