
const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
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
