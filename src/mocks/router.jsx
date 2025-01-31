import { Home, About, Contact, Service, Error, Team } from "@pages/index";

const routerLinks = [
    {
        id: 1,
        path: '/',
        component: <Home />,
        title: "Home"
    },
    {
        id: 2,
        path: '/about',
        component: <About />,
        title: "About",
    },
    {
        id: 3,
        path: '/contact',
        component: <Contact />,
        title: "Contact",
    },
    {
        id: 4,
        path: '/service',
        component: <Service />,
        title: "Service",
    },
    {
        id: 5,
        path: '/team',
        component: <Team />,
        title: "Team",
    },
    {
        id: 6,
        path: '*',
        component: <Error />
    },
];

export default routerLinks;
