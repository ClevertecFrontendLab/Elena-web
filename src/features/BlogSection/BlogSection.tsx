import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';

import ArrowBlack from '~/assets/icons/arrow-black.svg';

import { CardsBlog } from './CardsBlog/CardsBlog';

export const BlogSection = () => (
    <Box p='24px' bg='#C4FF61' borderRadius='16px' w='98%' m='0px 0px 0px auto'>
        <Flex justify='space-between' alignItems='start'>
            <Heading as='h4' fontSize='36px' fontWeight='400' lineHeight='1.1' mb='32px'>
                Кулинарные блоги
            </Heading>
            <Button
                bg='transparent'
                fontSize='18px'
                lineHeight='1.5'
                p='10px 24px'
                rightIcon={<Image src={ArrowBlack} w='16px' />}
            >
                Все авторы
            </Button>
        </Flex>
        <CardsBlog />
    </Box>
);
