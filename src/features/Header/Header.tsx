import { Box, Container, Flex } from '@chakra-ui/react';

import { AvatarContainer } from '~/components/Avatar/AvatarContainer';
import { BreadcrumbBox } from '~/components/BreadcrumbBox/BreadcrumbBox';
import { Logo } from '~/components/Logo/Logo';
import { SocialActions } from '~/components/SocialActions/SocialActions';
import { ButtonModal } from '~/ui/ButtonModal/ButtonModal';

const Header = () => (
    <Box
        as='header'
        data-test-id='header'
        bg='#FFFFD3'
        minW='100%'
        p={{ base: '8px 0', xl: '16px 0', '2xl': '16px 0' }}
    >
        <Container p={{ base: '0 20px', xl: '0 16px', '2xl': '0 16px' }} minW='100%'>
            <Flex align='center' justify='space-between'>
                <Flex align='center'>
                    <Logo />
                    <BreadcrumbBox />
                </Flex>
                <Flex align='center' gap={{ base: '12px', sm: '18px' }}>
                    <AvatarContainer />
                    <SocialActions direction='row' hideOn={{ md: true }} />
                    <ButtonModal />
                </Flex>
            </Flex>
        </Container>
    </Box>
);

export default Header;
