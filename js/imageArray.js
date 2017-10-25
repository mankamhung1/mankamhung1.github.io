var worksImages=[];

worksImages[0]=new Image();
worksImages[0].src="img/home/img007.jpg";
worksImages[1]=new Image();
worksImages[1].src="img/home/img008.jpg";
worksImages[2]=new Image();
worksImages[2].src="img/home/img009.jpg";
worksImages[3]=new Image();
worksImages[3].src="img/home/img010.jpg";
worksImages[4]=new Image();
worksImages[4].src="img/home/img011.jpg";
worksImages[5]=new Image();
worksImages[5].src="img/home/img012.jpg";
worksImages[6]=new Image();
worksImages[6].src="img/home/img013.jpg";
worksImages[7]=new Image();
worksImages[7].src="img/home/img014.jpg";
worksImages[8]=new Image();
worksImages[8].src="img/home/img015.jpg";
worksImages[9]=new Image();
worksImages[9].src="img/home/img016.jpg";
worksImages[10]=new Image();
worksImages[10].src="img/home/img017.jpg";
worksImages[11]=new Image();
worksImages[11].src="img/home/img018.jpg";


// The following directory listing cannot work in Github !!!
/*
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
*/
