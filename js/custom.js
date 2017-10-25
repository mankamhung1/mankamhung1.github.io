function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

var n = 0;
$('p#rightArrow').on('click',function(event){
  if (n<worksImages.length) {
    $(".showcase").each(function() {
        n++;
//        console.log(worksImages[n].src);
        $(this).find("img:eq(0)").attr("src", worksImages[n+3].src);
    });
  }
});

$('p#leftArrow').on('click',function(event){
    if (n>0) {
      $(".showcase").each(function() {
          n--;
//          console.log(worksImages[n].src);
          $(this).find("img:eq(0)").attr("src", worksImages[n-3].src);
      });
    }
});
