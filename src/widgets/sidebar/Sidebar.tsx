import { Flex } from '@chakra-ui/react';

import { Footer } from '~/features/Footer/Footer';
import { NavigationMenu } from '~/features/NavigationMenu/NavigationMenu';

export const Sidebar = () => (
    <Flex
        width='256px'
        height='960px'
        flexDir='column'
        justify='space-between'
        pt='24px'
        borderRight='1px solid rgba(0, 0, 0, 0.1)'
        hideBelow='lg'
    >
        <NavigationMenu />
        <Footer />
    </Flex>
);
