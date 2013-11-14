
Posts = new Meteor.Collection('posts');


if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteorguide.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });


  Meteor.subscribe("posts");
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
