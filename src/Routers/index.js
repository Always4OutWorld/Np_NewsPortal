import Test from '../Components/Screens/test';
import NewsFeed from '../Components/Screens/newsfeed';

export const loggedInRoutes = [
    {
        url: '/',
        component: NewsFeed,
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
        url: '/',
        component: NewsFeed,
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