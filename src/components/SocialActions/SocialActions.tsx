import { HStack, StackProps } from '@chakra-ui/react';

import LikeIcon from '~/assets/icons/emoji-icon.svg';
import FollowIcon from '~/assets/icons/follows-icon.svg';
import SaveIcon from '~/assets/icons/save-icon.svg';
import IconButton from '~/ui/IconButton/IconButton';

interface SocialActionsProps extends StackProps {
    direction?: 'row' | 'column';
    hideOn?: { base?: boolean; md?: boolean };
}

export const SocialActions: React.FC<SocialActionsProps> = ({
    direction = 'row',
    hideOn = { base: false, md: false },
    ...props
}) => (
    <HStack
        gap={{ base: '8px', sm: '6px', lg: '24px' }}
        display={{
            base: hideOn.base ? 'none' : 'flex',
            md: hideOn.md ? 'none' : 'flex',
        }}
        flexDirection={direction}
        {...props}
    >
        <IconButton
            icon={SaveIcon}
            count={185}
            onClick={() => console.log('First button clicked')}
            direction={direction}
        />
        <IconButton
            icon={FollowIcon}
            count={589}
            onClick={() => console.log('Second button clicked')}
            direction={direction}
        />
        <IconButton
            icon={LikeIcon}
            count={587}
            onClick={() => console.log('Third button clicked')}
            direction={direction}
        />
    </HStack>
);
