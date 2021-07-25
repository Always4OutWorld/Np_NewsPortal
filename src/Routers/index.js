import NewsFeed from '../Components/Handler/newsfeed.handler';
import ProfileHandler from '../Components/Handler/profileedit.handler';
import ReadLaterHandler from '../Components/Handler/readLater.handler';
import HomeFeed from '../Components/HomePage/index';
import CovFeed from '../Components/Covid/index';

export const loggedInRoutes = [
    {
        url: '/profileView',
        component: ProfileHandler,
        isNews: true
    },
    {
        url: '/readlater',
        component: ReadLaterHandler,
        isNews: true
    },
];

export const publicRoutes = [
    {
        url: '/newsportal',
        component: NewsFeed,
        isNews: true
    },
    {
        url: '/',
        component: HomeFeed,
    },
    {
        url: '/covid',
        component: CovFeed
    }
]