import { Flex } from '@chakra-ui/react';

import { SocialActions } from '~/components/SocialActions/SocialActions';
import { ButtonAdd } from '~/ui/ButtonAdd/ButtonAdd';

export const SidebarRight = () => (
    <Flex
        flexDir='column'
        justify='space-between'
        width='280px'
        height='960px'
        padding='16px 0px 0px 72px'
        hideBelow='lg'
    >
        <SocialActions direction='column' hideOn={{ base: true }} />
        <ButtonAdd />
    </Flex>
);
