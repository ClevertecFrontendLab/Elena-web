import { Box, Button, Flex } from '@chakra-ui/react';

import ArrowIcon from '~/assets/icons/arrow-next.svg';
import IconButton from '~/ui/IconButton/IconButton';
import { TitleSection } from '~/ui/TitleSection/TitleSection';

import { CardBox } from './components/CardBox/CardBox';

const newRecipes = [
    {
        id: 1,
        image: 'src/assets/img/new-recipes/1.png',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            img: 'src/assets/icons/Sidebar/3.png',
            subtitle: 'Первые блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/save-icon.svg',
                count: 1,
                direction: 'row',
                onClick: () => console.log('Save!'),
            },
        ],
    },
    {
        id: 2,
        image: 'src/assets/img/new-recipes/2.png',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: {
            img: 'src/assets/icons/Sidebar/7.png',
            subtitle: 'Веганские блюда',
        },
        buttons: [
            {
                icon: 'src/assets/icons/save-icon.svg',
                count: 2,
                direction: 'row',
                onClick: () => console.log('Save!'),
            },
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 1,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 3,
        image: 'src/assets/img/new-recipes/3.png',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: {
            img: 'src/assets/icons/Sidebar/5.png',
            subtitle: 'Десерты, выпечка',
        },
        buttons: [
            {
                icon: 'src/assets/icons/emoji-icon.svg',
                count: 1,
                direction: 'row',
                onClick: () => console.log('Like!'),
            },
        ],
    },
    {
        id: 4,
        image: 'src/assets/img/new-recipes/4.png',
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: {
            img: 'src/assets/icons/Sidebar/1.png',
            subtitle: 'Салаты',
        },
        buttons: [],
    },
];

export const SliderBox = () => (
    <Box as='section' p=' 0px 10px 0px 24px' width='100%'>
        <TitleSection title='Новые рецепты' />
        <Flex gap='24px' position='relative' justify='center'>
            <Button
                width='48px'
                height='48px'
                position='absolute'
                top='36%'
                left='-8px'
                bg='#000000'
                aria-label='Previous slide'
                zIndex={10}
                _hover={{ bg: '#000000' }}
            >
                <img src={ArrowIcon} alt='Previous' width='24px' height='24px' />
            </Button>
            {newRecipes.map((recipe) => (
                <CardBox
                    key={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    imgSrc={recipe.image}
                    categoryImg={recipe.category.img}
                    categorySubtitle={recipe.category.subtitle}
                    isInSlider={true}
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
                </CardBox>
            ))}
            <Button
                width='48px'
                height='48px'
                position='absolute'
                top='35.5%'
                right='-8px'
                bg='#000000'
                aria-label='Next slide'
                zIndex={10}
                transform='rotate(180deg)'
                _hover={{ bg: '#000000' }}
            >
                <img src={ArrowIcon} alt='Next' width='24px' height='24px' />
            </Button>
        </Flex>
    </Box>
);
