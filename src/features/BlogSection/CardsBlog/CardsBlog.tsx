import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

export const CardsBlog = () => (
    <Flex gap='24px'>
        <Card w='62%'>
            <CardHeader pt='25px'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='src/assets/img/users/1.png' />
                    <Box>
                        <Heading size='sm' fontSize='18px' fontWeight='500' lineHeight='1.5'>
                            Елена Высоцкая
                        </Heading>
                        <Text fontSize='14px' lineHeight='1.4'>
                            @elenapovar
                        </Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody pt='5px'>
                <Text fontSize='14px' pr='25px'>
                    Как раз после праздников, когда мясные продукты еще остались, но никто их уже не
                    хочет, время варить солянку.
                </Text>
            </CardBody>
        </Card>
        <Card w='62%'>
            <CardHeader pt='25px'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Alex Cook' src='src/assets/img/users/2.png' />
                    <Box>
                        <Heading size='sm' fontSize='18px' fontWeight='500' lineHeight='1.5'>
                            Alex Cook
                        </Heading>
                        <Text fontSize='14px' lineHeight='1.4'>
                            @funtasticooking
                        </Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody pt='5px'>
                <Text fontSize='14px' pr='25px'>
                    Как раз после праздников, когда мясные продукты еще остались, но никто их уже не
                    хочет, время варить солянку.
                </Text>
            </CardBody>
        </Card>
        <Card w='62%'>
            <CardHeader pt='25px'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Екатерина Константинопольская' src='src/assets/img/users/3.png' />
                    <Box>
                        <Heading size='sm' fontSize='18px' fontWeight='500' lineHeight='1.5'>
                            Екатерина Константинопольская
                        </Heading>
                        <Text fontSize='14px' lineHeight='1.4'>
                            @bake_and_pie
                        </Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody pt='5px'>
                <Text fontSize='14px' pr='25px'>
                    Как раз после праздников, когда мясные продукты еще остались, но никто их уже не
                    хочет, время варить солянку.
                </Text>
            </CardBody>
        </Card>
    </Flex>
);
