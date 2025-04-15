import { Box, Button, Flex, Image } from '@chakra-ui/react';

import ExitIcon from '~/assets/icons/exit-icon.svg';

export const Footer = () => (
    <Flex
        as='footer'
        flexDir='column'
        p='0px 24px 32px'
        fontSize='13px'
        gap='16px'
        lineHeight='1.3'
        letterSpacing='.2px'
    >
        <Box as='p' color='rgba(0, 0, 0, .28)'>
            Версия программы 03.25
        </Box>
        <Box as='p' color='rgba(0, 0, 0, .64)' pr='33px'>
            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
        </Box>
        <Button
            textAlign='left'
            justifyContent='start'
            p='0px'
            gap='4px'
            bg='transparent'
            alignItems='center'
            fontSize='12px'
            height='auto'
        >
            <Image src={ExitIcon} alt='Выход' boxSize='12px' />
            Выйти
        </Button>
    </Flex>
);
