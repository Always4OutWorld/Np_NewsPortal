import Test from '../Components/Screens/test';
import Profile from '../Components/Screens/profile';

export const loggedInRoutes = [
    {
        url: '/profile',
        component: Profile,
    },
    {
        url: '/profile2',
        component: Test,
    },
    {
        url: '/readlater',
        component: Test,
    },
];

export const publicRoutes = [
    {
        url: '/profile',
        component: Profile,
    },
    {
        url: '/login',
        component: Test,
    },
    {
        url: '/registration',
        component: Test,
    },
]