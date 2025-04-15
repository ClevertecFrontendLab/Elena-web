import { Avatar, Button, Flex, Image, Text } from '@chakra-ui/react';

import AddIcon from '~/assets/icons/addicon-black.svg';
import HomeIcon from '~/assets/icons/home-icon.png';
import SearchIcon from '~/assets/icons/search-icon.svg';
import avatarImage from '~/assets/img/avatar.png';
export const FooterMobile = () => (
    <Flex
        as='footer'
        h={{ base: '84px' }}
        bg='rgba(255, 255, 211, 1)'
        data-test-id='footer'
        hideFrom='md'
    >
        <Flex
            flex='1'
            alignItems='center'
            flexDir='column'
            justify='center'
            width='24px'
            height='100px'
            bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
            p='10px'
        >
            <Button
                width='40px'
                height='40px'
                bg='#000000'
                borderRadius='50%'
                p='0px'
                _hover={{ bg: '#000000' }}
                _active={{ bg: '#000000' }}
            >
                <Image src={HomeIcon} alt='Home Icon' boxSize='12px' />
            </Button>
            <Text fontSize='12px' fontWeight='600'>
                Главная
            </Text>
        </Flex>
        <Flex flex='1' alignItems='center' flexDir='column' justify='center' p='10px'>
            <Button
                flex='1'
                justifyContent='center'
                width='48px'
                p='0px'
                height='48px'
                bg='transparent'
            >
                <Image src={SearchIcon} alt='Выход' boxSize='24px' />
            </Button>
            <Text fontSize='12px' fontWeight='400' color='rgba(0, 0, 0, 1)'>
                Поиск
            </Text>
        </Flex>
        <Flex flex='1' alignItems='center' flexDir='column' justify='center' p='10px'>
            <Button
                flex='1'
                justifyContent='center'
                width='48px'
                p='0px'
                height='48px'
                bg='transparent'
            >
                <Image src={AddIcon} alt='Записать' boxSize='24px' />
            </Button>
            <Text fontSize='12px' fontWeight='400' color='rgba(0, 0, 0, 1)'>
                Записать
            </Text>
        </Flex>
        <Flex flex='1' alignItems='center' flexDir='column' justify='center' p='10px'>
            <Button
                flex='1'
                justifyContent='center'
                width='48px'
                p='0px'
                height='48px'
                bg='transparent'
            >
                <Avatar name='' src={avatarImage} width='40px' height='40px' />
            </Button>
            <Text fontSize='12px' fontWeight='400' color='rgba(0, 0, 0, 1)'>
                Мой профиль
            </Text>
        </Flex>
    </Flex>
);
