import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const BreadcrumbBox = () => (
    <Breadcrumb separator='>' aria-label='Breadcrumb' marginLeft='128px' hideBelow='md'>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Категория</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Текущая страница</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
);
