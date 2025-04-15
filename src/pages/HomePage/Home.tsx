import { Box, Flex, Heading } from '@chakra-ui/react';

import { BlogSection } from '~/features/BlogSection/BlogSection';
import { FooterMobile } from '~/features/Footer/FooterMobile';
import Header from '~/features/Header/Header';
import { JuicySection } from '~/features/JuicySection/JuicySection';
import { SearchBox } from '~/features/SearchBox/SearchBox';
import { SliderBox } from '~/features/Slider/SliderBox';
import { VeganSection } from '~/features/VeganSection/VeganSection';
import { Sidebar } from '~/widgets/sidebar/Sidebar';
import { SidebarRight } from '~/widgets/sidebar/SidebarRight';
export const Home = () => (
    <>
        <Header />
        <Box display='flex' justifyContent='space-between'>
            <Sidebar />
            <Flex
                as='main'
                w='72%'
                flexDir='column'
                gap='40px'
                justifyContent='center'
                mb='20px'
                h='1040px'
                overflowY='scroll'
            >
                <Flex flexDir='column' justifyContent='center' gap='30px'>
                    <Heading as='h1' fontSize='48px' fontWeight='700' margin='25px auto 0px'>
                        Приятного аппетита!
                    </Heading>
                    <SearchBox />
                </Flex>
                <SliderBox />
                <JuicySection />
                <BlogSection />
                <VeganSection />
            </Flex>
            <SidebarRight />
        </Box>
        <FooterMobile />
    </>
);
