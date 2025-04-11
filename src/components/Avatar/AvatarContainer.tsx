import { Avatar, HStack, Stack, Text } from '@chakra-ui/react';

import avatarImage from '~/assets/img/avatar.png';

const user = {
    name: 'Екатерина Константинопольская',
    email: '@bake_and_pie',
    avatar: avatarImage,
};

export const AvatarContainer = () => (
    <HStack key={user.email} gap='12px' paddingRight={{ xl: '65px' }} hideBelow='lg'>
        <Avatar name={user.name} src={user.avatar} width='48px' />
        <Stack gap='0'>
            <Text fontWeight='500' fontSize='18px' letterSpacing='.5px'>
                {user.name}
            </Text>
            <Text color='rgba(0, 0, 0, 0.64)' fontSize='14px'>
                {user.email}
            </Text>
        </Stack>
    </HStack>
);
