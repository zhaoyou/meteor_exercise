
Template.isolate.rendered = function() {
  console.log('isolate rendered ....');
}


Template.sub1.rendered = function() {
  console.log('sub1 rendered ...');
}

Template.sub1.user = function() {
  return {
    'name': Session.get('name')
  }
}

Template.sub11.user = function() {
  return {
    'name': Session.get('name11')
  }
}

Template.sub11.rendered = function() {
  console.log('sub11 rendered ...');
}

Template.sub2.rendered = function() {
  console.log('sub2 rendered ...');
}

Template.sub2.user = function() {
  return {
    'name': Session.get('title')
  }
}

Template.sub22.rendered = function() {
  console.log('sub22 rendered ...');
}

Template.sub22.user = function() {
  return {
    'name': Session.get('title11')
  }
}
