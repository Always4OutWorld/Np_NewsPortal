import Test from '../components/Screens/test';
import NewsFeed from '../components/Handler/newsfeed.handler';
import ProfileHandler from '../components/Handler/profileedit.handler';

export const loggedInRoutes = [
    {
        url: '/',
        component: NewsFeed,
    },
    {
        url: '/profileView',
        component: ProfileHandler,
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