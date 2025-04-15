import { Button, Flex, Image } from '@chakra-ui/react';

import AddIcon from '~/assets/icons/Sidebar/add-icon.svg';

export const ButtonAdd = () => (
    <Flex
        alignItems='center'
        justify='center'
        width='208px'
        height='208px'
        bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
    >
        <Button
            width='48px'
            height='48px'
            bg='#000000'
            borderRadius='50%'
            p='0px'
            _hover={{ bg: '#000000' }}
            _active={{ bg: '#000000' }}
        >
            <Image src={AddIcon} alt='Save Icon' boxSize='24px' />
        </Button>
    </Flex>
);
