const header = {
    homepage: '/',
    tile: 'Shop',
    navigation: [
        {
            name: 'Home',
            to: '/',
        },
        {
            name: 'Profile',
            to: '/profile',
        },
    ],
};

const shopCategories = [
    {
        name: 'All',
        href: '/',
        category: 'All',
    },
    {
        name: 'Hoodies',
        href: '/',
        category: 'Hoodie',
    },
    {
        name: 'T-Shirt',
        href: '/',
        category: 'T-Shirt',
    },
    {
        name: 'Albums',
        href: '/',
        category: 'Album',
    },
    {
        name: 'Posters',
        href: '/',
        category: 'Poster',
    },

];

export { header, shopCategories };
