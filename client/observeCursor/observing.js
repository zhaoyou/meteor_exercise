Template.observing.rendered = function() {
  allPostCursor = Posts.find();
  var a = allPostCursor.observe({
    'added': function(doc) {
      console.log('post added ', doc)
    }
  });
  console.log(a);
}
