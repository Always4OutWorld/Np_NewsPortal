import NewsFeed from '../components/Handler/newsfeed.handler';
import ProfileHandler from '../components/Handler/profileedit.handler';
import ReadLaterHandler from '../components/Handler/readLater.handler';

export const loggedInRoutes = [
    {
        url: '/profileView',
        component: ProfileHandler,
    },
    {
        url: '/readlater',
        component: ReadLaterHandler,
    },
];

export const publicRoutes = [
    {
        url: '/',
        component: NewsFeed,
    },
]