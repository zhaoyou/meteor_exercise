Meteor.Router.add({
  '/': 'main',
  '/main': 'main',
  '/isolate': 'isolate',
  '/observing': 'observing',

  '/about': function() {
    if (Session.get('aboutUs')) {
      return 'aboutUs';
    } else {
      return 'aboutThem';
    }
  },

  '*': 'not_found'
});
