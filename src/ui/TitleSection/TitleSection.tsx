import { Heading } from '@chakra-ui/react';

interface TitleProps {
    title: string;
}

export const TitleSection: React.FC<TitleProps> = ({ title }) => (
    <Heading
        as='h2'
        fontSize={{ sm: '24px', md: '48px' }}
        fontWeight={{ sm: '700', md: '500' }}
        lineHeight={{ sm: '1.3', md: '1' }}
        mb={{ sm: '16px', md: '24px' }}
        letterSpacing='1.5px'
        fontFamily='Inter, sans-serif'
    >
        {title}
    </Heading>
);
