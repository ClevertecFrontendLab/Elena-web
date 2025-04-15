import {
    Box,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import LikeIcon from '~/assets/icons/emoji-icon.svg';
import SaveIcon from '~/assets/icons/save-icon.svg';
import { TitleSection } from '~/ui/TitleSection/TitleSection';

import { Item } from '../../components/Item/Item';
import { IconButton } from '../../ui/IconButton/IconButton';
export const VeganSection = () => (
    <Box
        as='section'
        borderTop='1px solid rgba(2, 0, 0, 0.08)'
        w='99%'
        m='0px 0px 2px auto'
        p={{ base: '16px', sm: '8px 20px', md: '0px' }}
    >
        <Flex
            flexDir={{ base: 'column', md: 'row' }}
            justify='space-between'
            p={{ base: '24px 0px 0px 20px', md: '24px 0px 0px 0px' }}
        >
            <TitleSection title='Веганская кухня' />
            <Text
                w={{ base: '100%', md: '50%' }}
                fontSize='16px'
                fontWeight='500'
                lineHeight='1.5'
                color='rgba(0, 0, 0, 0.64)'
            >
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>
        <Flex
            gap={{ base: '10px', md: '24px' }}
            pt={{ base: '10px', md: '0px' }}
            justify='center'
            flexDir={{ base: 'column', sm: 'row' }}
        >
            <Flex gap={{ base: '10px', md: '24px' }} flexDir={{ base: 'column', sm: 'row' }}>
                <Card
                    w={{ base: '328px', sm: '232px', md: '322px' }}
                    h={{ base: '168px', md: '192px' }}
                    boxShadow='none'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                >
                    <CardBody p='0px'>
                        <Stack p={{ base: '12px', md: '22px 24px 0px' }}>
                            <Heading
                                fontSize='20px'
                                fontWeight='500'
                                mb={{ base: '0px', md: '8px' }}
                                overflow='hidden'
                                display='-webkit-box'
                                style={{
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                Картошка, тушенная с болгарским перцем и фасолью в томатном соусе
                            </Heading>
                            <Text
                                mb={{ base: '5px', md: '20px' }}
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
                                Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -
                                вариант сытного блюда на каждый день. Фасоль в данном случае
                                заменяет мясо, делая рагу сытным и питательным. Чтобы сократить
                                время приготовления, возьмём консервированную фасоль. Блюдо хоть и
                                простое, но в полной мере наполнено ароматами и имеет выразительный
                                вкус за счёт добавления томатной пасты.
                            </Text>
                        </Stack>
                        <CardFooter
                            p={{ base: '0px', md: '0px 20px' }}
                            height='40px'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Box
                                display='flex'
                                gap='8px'
                                alignItems='center'
                                bg='#FFFFD3'
                                p='2px 8px'
                                borderRadius='4px'
                                height='24px'
                            >
                                <Image
                                    src='src/assets/icons/Sidebar/4.png'
                                    alt='Icon'
                                    boxSize='16px'
                                    letterSpacing='.8px'
                                />
                                <Text fontSize='14px' lineHeight='1.4'>
                                    Вторые блюда
                                </Text>
                            </Box>
                            <ButtonGroup alignItems='center'>
                                <IconButton icon={SaveIcon} count={1} />
                                <IconButton icon={LikeIcon} count={1} />
                            </ButtonGroup>
                        </CardFooter>
                    </CardBody>
                </Card>
                <Card
                    w={{ base: '328px', sm: '232px', md: '322px' }}
                    h={{ base: '168px', md: '192px' }}
                    boxShadow='none'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                >
                    <CardBody p='0px'>
                        <Stack p={{ base: '12px', md: '22px 24px 0px' }}>
                            <Heading
                                fontSize='20px'
                                fontWeight='500'
                                mb={{ base: '0px', md: '8px' }}
                                overflow='hidden'
                                display='-webkit-box'
                                style={{
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                Капустные котлеты
                            </Heading>
                            <Text
                                mb={{ base: '5px', md: '20px' }}
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
                                Капустные котлеты по этому рецепту получаются необычайно пышными и
                                невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка
                                помогут сделать эти чудесные котлеты из капусты одним из ваших
                                любимых овощных блюд.
                            </Text>
                        </Stack>
                        <CardFooter
                            p={{ base: '0px', md: '0px 20px' }}
                            height='40px'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Box
                                display='flex'
                                gap='8px'
                                alignItems='center'
                                bg='#FFFFD3'
                                p='2px 8px'
                                borderRadius='4px'
                                height='24px'
                            >
                                <Image
                                    src='src/assets/icons/Sidebar/4.png'
                                    alt='Icon'
                                    boxSize='16px'
                                    letterSpacing='.8px'
                                />
                                <Text fontSize='14px' lineHeight='1.4'>
                                    Вторые блюда
                                </Text>
                            </Box>
                            <ButtonGroup alignItems='center'>
                                <IconButton icon={SaveIcon} count={2} />
                                <IconButton icon={LikeIcon} count={1} />
                            </ButtonGroup>
                        </CardFooter>
                    </CardBody>
                </Card>
            </Flex>
            <Flex flexDir='column' gap='12px'>
                <Item iconSrc='src/assets/icons/Sidebar/4.png' name='Стейк для вегетарианцев' />
                <Item iconSrc='src/assets/icons/Sidebar/4.png' name='Котлеты из гречки и фасоли' />
                <Item
                    iconSrc='src/assets/icons/Sidebar/3.png'
                    name='Сырный суп с лапшой и брокколи'
                />
            </Flex>
        </Flex>
    </Box>
);
