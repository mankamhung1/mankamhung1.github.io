var dir = "img/home/";
var fileextension = ".jpg";
var imageCounter=0;
var worksImages=[];
$.ajax({
    url: dir,
    success: function (data) {
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            worksImages[imageCounter] = new Image();
            worksImages[imageCounter].src= filename;
            console.log($(data).find("a:contains(" + fileextension + ")"));
            console.log(worksImages[imageCounter].src);
            imageCounter++;
        });
    }
});
