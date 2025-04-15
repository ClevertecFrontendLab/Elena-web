import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import SaveIcon from '~/assets/icons/save-icon.svg';

interface CardWrapperProps {
    children: ReactNode;
    title: string;
    description: string;
    imgSrc: string;
    categoryImg: string;
    categorySubtitle: string;
    isInSlider?: boolean;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    title,
    description,
    imgSrc,
    categoryImg,
    categorySubtitle,
    isInSlider = false,
}) => (
    <Card
        w={{ base: '356px', xl: '100%', '2xl': '668px' }}
        h={{ base: '128px', xl: '244px' }}
        boxShadow='none'
        border='1px solid rgba(0, 0, 0, 0.08)'
        position={{ base: 'relative', md: 'static' }}
    >
        <CardBody p='0px' display='flex'>
            <Image
                borderRadius='8px 0px 0px 8px'
                src={imgSrc}
                alt={title}
                h={{ base: '128px', xl: '244px' }}
                w={{ base: '158px', xl: '100%' }}
            />
            <Box
                w='100%'
                display={{ base: 'flex', md: 'block' }}
                flexDir='column'
                justifyContent='spacebetween'
            >
                <Stack
                    p={{ base: '8px 8px 4px', md: '16px 24px 0px' }}
                    display={{ base: 'flex', md: 'block' }}
                    flexDir='column'
                    justify='space-evenly'
                    h='100%'
                >
                    <CardFooter
                        p='0px'
                        height={{ base: '24px', md: '40px' }}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box
                            display='flex'
                            gap='8px'
                            alignItems='center'
                            bg={isInSlider ? '#D7FF94' : ' #FFFFD3'}
                            p='2px 8px'
                            borderRadius='4px'
                            height='24px'
                            position={{ base: 'absolute', md: 'static' }}
                            top='8px'
                            left='8px'
                        >
                            <Image
                                src={categoryImg}
                                alt={categorySubtitle}
                                boxSize='16px'
                                letterSpacing='.8px'
                            />
                            <Text fontSize='14px' lineHeight='1.4'>
                                {categorySubtitle}
                            </Text>
                        </Box>
                        <ButtonGroup alignItems='center'>{children}</ButtonGroup>
                    </CardFooter>
                    <Heading
                        fontSize={{ base: '16px', md: '20px' }}
                        fontWeight='500'
                        mb={{ base: '0px', md: '8px' }}
                        overflow={{ base: 'hidden' }}
                        display={{ base: '-webkit-box' }}
                        style={{
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {title}
                    </Heading>
                    <Text
                        mb='24px'
                        fontSize='14px'
                        lineHeight='1.4'
                        letterSpacing='.5px'
                        overflow='hidden'
                        display='-webkit-box'
                        style={{
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                        }}
                        hideFrom='base'
                    >
                        {description}
                    </Text>
                    <Stack
                        direction='row'
                        spacing='8px'
                        justify='flex-end'
                        mt={{ base: '0px', md: '0px' }}
                    >
                        <Button
                            height={{ base: '24px', md: '32px' }}
                            w={{ base: '24px' }}
                            p={{ base: '0px 0px 0px 5px', md: '0px 9px' }}
                            leftIcon={
                                <Image src={SaveIcon} boxSize={{ base: '10px', md: '14px' }} />
                            }
                            bg='transparent'
                            borderRadius='6px'
                            border='1px solid rgba(0, 0, 0, 0.48)'
                        >
                            <Text hideFrom='base'>Сохранить</Text>
                        </Button>
                        <Button
                            height={{ base: '24px', md: '32px' }}
                            display='flex'
                            p='0px 9px'
                            bg='#000000'
                            color='#ffffff'
                            fontSize={{ base: '12px', md: '14px' }}
                        >
                            Готовить
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </CardBody>
    </Card>
);
