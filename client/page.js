Meteor.Router.add({
  '/': 'main',
  '/main': 'main',
  '/isolate': 'isolate',

  '/about': function() {
    if (Session.get('aboutUs')) {
      return 'aboutUs';
    } else {
      return 'aboutThem';
    }
  },

  '*': 'not_found'
});
