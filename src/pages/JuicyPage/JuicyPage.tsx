import { Box, Flex, Heading } from '@chakra-ui/react';

import { FooterMobile } from '~/features/Footer/FooterMobile';
import Header from '~/features/Header/Header';
import { SearchBox } from '~/features/SearchBox/SearchBox';
import { Sidebar } from '~/widgets/sidebar/Sidebar';
import { SidebarRight } from '~/widgets/sidebar/SidebarRight';

import { VeganSection } from '../../features/VeganSection/VeganSection';
import { JuicyContent } from './JuicyContent/JuicyContent';

export const JuicyPage = () => (
    <>
        <Header />
        <Box display='flex' justifyContent='space-between'>
            <Sidebar />
            <Flex
                as='main'
                w={{ base: '100%', sm: '100%', md: '73%' }}
                flexDir='column'
                gap='40px'
                justifyContent='center'
                mb='20px'
            >
                <Flex
                    flexDir='column'
                    justifyContent='center'
                    gap={{ sm: '20px', md: '30px' }}
                    alignItems='center'
                >
                    <Heading as='h1' fontSize='24px' mt='15px'>
                        Самое сочное
                    </Heading>
                    <SearchBox />
                </Flex>
                <JuicyContent />
                <VeganSection />
            </Flex>
            <SidebarRight />
        </Box>
        <FooterMobile />
    </>
);
