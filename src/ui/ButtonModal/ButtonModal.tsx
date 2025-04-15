import { chakra, IconButton } from '@chakra-ui/react';

export const ButtonModal = () => (
    <IconButton
        aria-label='Open menu'
        bg='#FFFFD3'
        display='flex'
        hideFrom='lg'
        width='48px'
        height='48px'
        alignItems='center'
        justifyContent='center'
        sx={{
            _hover: {
                bg: 'transparent',
                color: 'inherit',
            },
        }}
    >
        <chakra.svg style={{ width: '16px', height: '12px' }}>
            <path d='M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z' fill='black' />
        </chakra.svg>
    </IconButton>
);
