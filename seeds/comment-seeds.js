
const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Be brave. Take risks. Nothing can substitute experience.',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'The key to success is to start before you are ready.',
    user_id: 8,
    post_id: 7
  },
  {
    comment_text: 'Don’t be afraid to give up the good to go for the great.',
    user_id: 3,
    post_id: 6
  },
  {
    comment_text: 'What you do says what is more important to you. Action express priorities.',
    user_id: 9,
    post_id: 2
  },
  {
    comment_text: 'Courage starts with showing up and letting ourselves be seen.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Feel the power that comes from focusing on what excites you.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'You’ll have bad times, but it’ll always wake you up to the good stuff you weren’t paying attention to.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'A man is not finished when he is defeated. He is finished when he quits.',
    user_id: 10,
    post_id: 4
  },
  {
    comment_text: 'I never lose. Either I win or learn.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'A person who never made a mistake never tried anything new.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Be the hero of your own story.',
    user_id: 3,
    post_id: 7
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
