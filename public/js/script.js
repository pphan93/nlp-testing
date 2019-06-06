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

            output = $("output")

            var cList = $('ul.mylist')
            cList.empty();
            $('<li/>')
                .text("Duration: " + data.duration.amount + " " + data.duration.unit)
                .appendTo(cList);
            $('<li/>')
                .text("Goal: " + data.goal)
                .appendTo(cList);
            $('<li/>')
                .text("Start Time: " + data.startTime)
                .appendTo(cList);

            
            //var comments = data.comments
            //outputComment(comments)
        });
});