import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

export const BreadcrumbBox = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const routes = [
        { path: '/', name: 'Главная' },
        { path: '/juicy', name: 'Самое сочное' },
        { path: '/vegan', name: 'Веганская кухня' },
    ];

    const filteredRoutes = routes.filter((route) => {
        if (currentPath === '/vegan') {
            return route.path === '/' || route.path === '/vegan';
        }
        if (currentPath === '/juicy') {
            return route.path === '/' || route.path === '/juicy';
        }
        return true;
    });

    return (
        <Breadcrumb separator='>' aria-label='Breadcrumb' marginLeft='128px' hideBelow='md'>
            {filteredRoutes.map((route) => (
                <BreadcrumbItem key={route.path} isCurrentPage={currentPath === route.path}>
                    <BreadcrumbLink as={Link} to={route.path}>
                        {route.name}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};
