import {
    Box,
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

interface CardBoxProps {
    children: ReactNode;
    title: string;
    description: string;
    imgSrc: string;
    categoryImg: string;
    categorySubtitle: string;
    isInSlider?: boolean;
}

export const CardBox: React.FC<CardBoxProps> = ({
    children,
    title,
    description,
    imgSrc,
    categoryImg,
    categorySubtitle,
    isInSlider = false,
}) => (
    <Card w='322px' h='414px' border='1px solid rgba(0, 0, 0, 0.08)' boxShadow='none'>
        <CardBody p='0px'>
            <Image borderRadius='8px 8px 0px 0px' src={imgSrc} alt={title} height='230px' />
            <Stack p='16px 24px 0px'>
                <Heading
                    fontSize='20px'
                    fontWeight='500'
                    mb='5px'
                    overflow='hidden'
                    display='-webkit-box'
                    style={{
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {title}
                </Heading>
                <Text
                    mb='22px'
                    fontSize='14px'
                    lineHeight='1.4'
                    letterSpacing='.5px'
                    overflow='hidden'
                    display='-webkit-box'
                    style={{
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {description}
                </Text>
            </Stack>
            <CardFooter
                p='0px 20px'
                height='40px'
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
                >
                    <Image
                        src={categoryImg}
                        alt={categorySubtitle}
                        boxSize='16px'
                        letterSpacing='.8px'
                    />
                    <Text fontSize='14px' lineHeight='1.4' letterSpacing='1px'>
                        {categorySubtitle}
                    </Text>
                </Box>
                <ButtonGroup alignItems='center'>{children}</ButtonGroup>
            </CardFooter>
        </CardBody>
    </Card>
);
