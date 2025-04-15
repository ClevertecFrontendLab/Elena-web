import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Input,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    VStack,
} from '@chakra-ui/react';
import React from 'react';

import ElementIcon1 from '../../assets/icons/filter-icon.svg';
import ElementIcon2 from '../../assets/icons/filter-icon.svg';
import ElementIcon3 from '../../assets/icons/filter-icon.svg';
import ElementIcon4 from '../../assets/icons/filter-icon.svg';
import ForbidIcon from '../../assets/icons/filter-icon.svg';
import { SelectContainer } from './components/SelectContainer/SelectContainer';
import { SwitchWithLabel } from './components/Switch/Switch';

interface Framework {
    label: string;
    value: string;
    icon: string;
}

interface SelectTriggerProps {
    selectedItem: Framework | null;
    onToggle: () => void;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ selectedItem, onToggle }) => (
    <IconButton
        width={{ sm: '32px', md: '48px' }}
        height={{ sm: '32px', md: '48px' }}
        p={{ sm: '8px', md: '12px' }}
        border='1px solid rgba(0, 0, 0, 0.48)'
        border-radius='6px'
        onClick={onToggle}
        variant='outline'
        size='sm'
        aria-label='Toggle framework selection'
        _hover={{ borderColor: 'blue.100' }}
    >
        {selectedItem ? (
            <img src={selectedItem.icon} alt={selectedItem.label} />
        ) : (
            <img src={ForbidIcon} alt='No selection' />
        )}
    </IconButton>
);

export const SearchBox = () => {
    const [selectedItem, setSelectedItem] = React.useState<Framework | null>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const frameworks: Framework[] = [
        { label: 'Элемент1', value: 'Элемент1', icon: ElementIcon1 },
        { label: 'Элемент2', value: 'Элемент2', icon: ElementIcon2 },
        { label: 'Элемент3', value: 'Элемент3', icon: ElementIcon3 },
        { label: 'Элемент4', value: 'Элемент4', icon: ElementIcon4 },
    ];

    const handleSelect = (framework: Framework) => {
        setSelectedItem(framework);
        setIsOpen(false);
    };

    return (
        <Box w={{ base: '100%', sm: '518px' }} m={{ base: '0 auto', md: '0 auto 10px' }}>
            <form>
                <Flex gap='12px' justifyContent='center' position='relative'>
                    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <PopoverTrigger>
                            <SelectTrigger
                                selectedItem={selectedItem}
                                onToggle={() => setIsOpen(!isOpen)}
                            />
                        </PopoverTrigger>
                        <PopoverContent top='50px' width='250px'>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <VStack spacing={1} padding={2}>
                                {frameworks.map((framework) => (
                                    <HStack
                                        key={framework.value}
                                        onClick={() => handleSelect(framework)}
                                        cursor='pointer'
                                        padding={2}
                                        width='100%'
                                        _hover={{ bg: 'gray.100' }}
                                    >
                                        <img
                                            src={framework.icon}
                                            alt={framework.label}
                                            style={{ width: '24px', height: '24px' }}
                                        />
                                        <span>{framework.label}</span>
                                    </HStack>
                                ))}
                            </VStack>
                        </PopoverContent>
                    </Popover>
                    <Box position='relative'>
                        <Input
                            pt='13px'
                            pr='48px'
                            pb='13px'
                            pl='16px'
                            w={{ base: '100%', sm: '404px', md: '458px' }}
                            h={{ base: '32px', md: '48px' }}
                            border='1px solid rgba(0, 0, 0, 0.48)'
                            placeholder='Название или ингредиент...'
                            sx={{
                                '::placeholder': {
                                    color: 'rgba(19, 75, 0, 1)',
                                },
                            }}
                        />
                        <Box
                            position='absolute'
                            top={{ base: '-10px', md: '0px' }}
                            right='5px'
                            padding='15px'
                            cursor='pointer'
                            _hover={{ transform: 'scale(1.1)', borderColor: 'gray.100' }}
                        >
                            <button type='submit'>
                                <Image
                                    src='/src/assets/icons/search-icon.svg'
                                    alt='search'
                                    boxSize={{ base: '14px', md: '18px' }}
                                />
                            </button>
                        </Box>
                    </Box>
                </Flex>
                <Flex gap='10px' align='center' mt='20px' justifyContent='end' hideFrom='base'>
                    <SwitchWithLabel></SwitchWithLabel>
                    <SelectContainer></SelectContainer>
                </Flex>
            </form>
        </Box>
    );
};
