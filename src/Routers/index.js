import Test from '../components/Screens/test';
import NewsFeed from '../components/Screens/newsfeed.view';

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