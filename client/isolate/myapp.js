
Template.main.user = function() {
  return {
    'name': 'hadeser',
    'title': 'minier'
  };
}

Template.main.rendered = function() {
  console.log('main rendered ...');
}


Template.foreach.list = function() {
  return [
      {title: 'one'},
      {title: 'two'}
    ];
}

