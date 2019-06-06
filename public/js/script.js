$("#comment").click(function (e) {
  e.preventDefault();
  // write your code
  console.log("test")

  console.log($("textarea#commentArea").val())


  var userData = {
      comment: $("textarea#commentArea").val()
  }

  $.post(
      "/submit", userData,
      function (data) {
          console.log(data)
          //var comments = data.comments
          //outputComment(comments)
      });
});