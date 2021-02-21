import Home from './Home';
import Explore from './Explore';
import Bookmark from './Bookmark';

export default [
    {
        path: '/home',
        exact: true,
        public: true,
        component: <Home />
    },
    {
        path: '/explore',
        exact: true,
        public: true,
        component: <Explore />
    },
    {
        path: '/bookmark',
        exact: true,
        public: true,
        component: <Bookmark />
    }
]