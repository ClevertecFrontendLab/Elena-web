import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Link,
    Tag,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowIcon from '~/assets/icons/Sidebar/arrow-down.svg';

import menu from './menu.json';

export const NavigationMenu = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/vegan');
    };

    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        setExpandedItems((prev) => {
            if (prev.includes(index)) {
                return prev.filter((item) => item !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    return (
        <Flex as='aside' width='256px' m='0' p='10px 6px 0px 0px'>
            <Box
                w='100%'
                height='872px'
                className={`scrollbar-custom ${expandedItems.length > 0 ? 'scrollbar-shadow' : ''}`}
            >
                <Accordion
                    as='ul'
                    defaultIndex={[]}
                    paddingLeft='10px'
                    width='100%'
                    borderRadius='0 0 16px 16px'
                >
                    {Object.entries(menu).map(([key, value], index) => (
                        <AccordionItem as='li' key={key} border='none'>
                            <AccordionButton
                                width='100%'
                                justifyContent='space-between'
                                p='12px 20px 12px 8px'
                                data-test-id='vegan-cuisine'
                                onClick={() => handleToggle(index)}
                                sx={{
                                    _hover: {
                                        bg: '#FFFFD3',
                                    },
                                    _focus: {
                                        fontWeight: '800',
                                        bg: '#EAFFC7',
                                    },
                                }}
                            >
                                <Flex as='div' flexDirection='row' alignItems='center'>
                                    <Image
                                        src={value.icon}
                                        alt={value.name}
                                        boxSize='24px'
                                        mr={3}
                                    />
                                    <Tag
                                        as='span'
                                        color='#000000'
                                        bg='transparent'
                                        fontSize='16px'
                                        fontWeight='500'
                                        lineHeight='1.5'
                                        letterSpacing='.4px'
                                        p='0'
                                    >
                                        {value.name}
                                    </Tag>
                                </Flex>
                                <Image src={ArrowIcon} alt='Arrow Icon' w='13px' />
                            </AccordionButton>
                            <AccordionPanel p='6px 0px -0px 16px'>
                                {Object.entries(value.custom).map(([type, customValue]) => (
                                    <Box key={type} mb={3}>
                                        <Link
                                            onClick={handleButtonClick}
                                            fontWeight='500'
                                            pl='35px'
                                            position='relative'
                                            py={1}
                                            _hover={{
                                                fontWeight: 'bold',
                                                _before: {
                                                    width: '8px',
                                                    left: '17px',
                                                },
                                            }}
                                            _before={{
                                                content: '""',
                                                position: 'absolute',
                                                left: '21px',
                                                top: 0,
                                                width: '1px',
                                                height: '100%',
                                                backgroundColor: '#C4FF61',
                                                transition: 'width 0.2s, left 0.2s',
                                                zIndex: -1,
                                            }}
                                        >
                                            {customValue.title}
                                        </Link>
                                    </Box>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </Flex>
    );
};
