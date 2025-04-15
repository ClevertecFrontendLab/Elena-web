import { Button, Text } from '@chakra-ui/react';

interface IconButtonProps {
    icon?: string;
    count?: number;
    onClick?: () => void;
    direction?: 'row' | 'column';
    bg?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, count, onClick, direction }) => {
    const iconSize = direction === 'column' ? '16px' : '12px';
    const fontSize = direction === 'column' ? '16px' : '12px';

    return (
        <Button
            p='8px 6px'
            onClick={onClick}
            variant='ghost'
            leftIcon={<img src={icon} alt='Icon' style={{ width: iconSize, height: iconSize }} />}
            sx={{
                _hover: {
                    bg: 'transparent',
                    color: 'inherit',
                },
            }}
        >
            <Text color='#2DB100' fontSize={fontSize} fontWeight='600' bg='transparent'>
                {count}
            </Text>
        </Button>
    );
};

export default IconButton;
