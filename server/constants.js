module.exports.JWT_OPTIONS = {
  MEMBER_AUDIENCE: ['SHOW_FAVORITE', 'LOGIN', 'SHOW_BOOKS'], //member access
  ADMIN_AUDIENCE: [
    //admin access
    'SHOW_FAVORITE',
    'LOGIN',
    'SHOW_BOOKS',
    'ADD_BOOK',
    'SHOW_USERS',
  ],
};

module.exports.ADD_BOOK = 'ADD_BOOK';
module.exports.SHOW_USERS = 'SHOW_USERS';
