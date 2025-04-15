import { Box, Button, Flex, Image } from '@chakra-ui/react';

import ArrowBlack from '~/assets/icons/arrow-black.svg';
import { CardWrapper } from '~/features/JuicySection/components/CardWrapper/CardWrapper';
import IconButton from '~/ui/IconButton/IconButton';

const juicyRecipes = [
    {
        id: 1,
        image: 'src/assets/img/juicy/1.png',
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/4.png',
            subtitle: 'Вторые блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/save-icon.svg',
                count: 85,
                direction: 'row',
                onClick: () => console.log('Save!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 152,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 2,
        image: 'src/assets/img/juicy/2.png',
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/4.png',
            subtitle: 'Вторые блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/save-icon.svg',
                count: 159,
                direction: 'row',
                onClick: () => console.log('Save!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 257,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 3,
        image: 'src/assets/img/juicy/3.png',
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/4.png',
            subtitle: 'Вторые блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 258,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 342,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 4,
        image: 'src/assets/img/juicy/4.png',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/10.png',
            subtitle: 'Национальные',
        },
        buttons: [
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 124,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 324,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 5,
        image: 'src/assets/img/juicy/1.png',
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/4.png',
            subtitle: 'Вторые блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/save-icon.svg',
                count: 85,
                direction: 'row',
                onClick: () => console.log('Save!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 152,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 6,
        image: 'src/assets/img/juicy/2.png',
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/4.png',
            subtitle: 'Вторые блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/save-icon.svg',
                count: 159,
                direction: 'row',
                onClick: () => console.log('Save!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 257,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 7,
        image: 'src/assets/img/juicy/3.png',
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/4.png',
            subtitle: 'Вторые блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 258,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 342,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 8,
        image: 'src/assets/img/juicy/4.png',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/10.png',
            subtitle: 'Национальные',
        },
        buttons: [
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 124,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 324,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
];
export const JuicyContent = () => (
    <Box p='0px 0px 0px 24px' width='100%'>
        <Flex alignItems='center' flexDir='column' gap='16px'>
            <Flex gap={{ base: '16px', md: '22px' }} flexWrap='wrap'>
                {juicyRecipes.map((recipe) => (
                    <CardWrapper
                        key={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        imgSrc={recipe.image}
                        categoryImg={recipe.category.img}
                        categorySubtitle={recipe.category.subtitle}
                        isInSlider={false}
                    >
                        {recipe.buttons &&
                            recipe.buttons.map((button, index) => (
                                <IconButton
                                    key={index}
                                    icon={button.icon}
                                    count={button.count}
                                    onClick={button.onClick}
                                    direction={button.direction as 'row' | 'column'}
                                />
                            ))}
                    </CardWrapper>
                ))}
            </Flex>
            <Button
                height={{ base: '40px', md: '48px' }}
                bg='#B1FF2E'
                fontSize={{ base: '16px', md: '18px' }}
                fontWeight='600'
                lineHeight='1.6'
                letterSpacing='.8px'
                p={{ base: '12px 10px', md: '12px 24px' }}
                rightIcon={<Image src={ArrowBlack} w='16px' hideFrom='base' />}
            >
                Загрузить ещё
            </Button>
        </Flex>
    </Box>
);
