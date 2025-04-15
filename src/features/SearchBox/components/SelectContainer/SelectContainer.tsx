import { Select } from '@chakra-ui/react';

export const SelectContainer = () => (
    <Select
        placeholder='Выберите из списка...'
        fontSize='16px'
        lineHeight='24px'
        w='234px'
        h='40px'
        color='rgba(0, 0, 0, 0.64)'
        borderRadius='6px'
    >
        <option value=''>Продукт1</option>
        <option value=''>Продукт2</option>
        <option value=''>Продукт3</option>
        <option value=''>Продукт4</option>
    </Select>
);
