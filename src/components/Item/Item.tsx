import { Button, Flex, Heading, Image } from '@chakra-ui/react';

interface ItemProps {
    name: string;
    iconSrc: string;
}

export const Item: React.FC<ItemProps> = ({ name, iconSrc }) => (
    <Flex
        p={{ base: '12px 14px', md: '12px 24px' }}
        flexDir='row'
        w={{ base: '328px', sm: '240px', md: '668px' }}
        h={{ base: '48px', md: '56px' }}
        justify='space-between'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
    >
        <Flex alignItems='center' gap='10px'>
            <Image src={iconSrc} alt='Icon' boxSize='24px' />
            <Heading
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight='500'
                lineHeight='1.4'
                overflow={{ base: 'hidden', md: 'visible' }}
                display={{ base: '-webkit-box', md: 'block' }}
                style={{
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                }}
            >
                {name}
            </Heading>
        </Flex>
        <Button
            fontSize={{ base: '12px', md: '14px' }}
            p={{ base: '12px', md: '6px 12px' }}
            border='1px solid #2DB100'
            lineHeight='1.4'
            borderRadius='8px'
            color='#2DB100'
            bg='#fff'
            height={{ base: '24px', md: '32px' }}
        >
            Готовить
        </Button>
    </Flex>
);
