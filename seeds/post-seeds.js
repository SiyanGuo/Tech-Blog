
const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere',
        content: 'Loremomnis nostrum, non reprehenderit fugit sit voluptas!',
        user_id: 1
    },
    {
        title: 'Velit egestas dui',
        content: 'Suscipit eaque nemo, repellendus Amet ad in eveniet alias!',
        user_id: 5
    },
    {
        title: 'Aliquet bibendum',
        content: 'In enim justolputate eleifend tellus. Aenean metus varius laoreet. Quisque rutrum.',
        user_id: 4
    },
    {
        title: 'Metus vitae ipsum',
        content: 'Feugiat in ante metus dictum at tursus ege. Dignissim cras tincidunt lobortis feugiat vivamus at.',
        user_id: 2
    },
    {
        title: 'Vestibulum',
        content: 'Lorem ipsum, dolo, non reprehenderit fugit sit voluptas!',
        user_id: 8
    },
    {
        title: 'Vitae ipsum',
        content: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 7
    },
    {
        title: 'Tincidunt',
        content: 'In nibh mauris cursus mattis molestien curabitur gravida. Eget lorem dolor ipsumst.',
        user_id: 1
    },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
