//  really cool js stuff

window.onload = theSlideShow;

function theSlideShow(){

    var allImages = document.getElementsByTagName('img'),
        slideTot = allImages.length,
        slideShow = setInterval(function(){ runSlide() }, 2500),
        prevSlide,
        slideIdNum = 1;
        curSlide = 2;

    //  assign IDs to the images

    for(var i = 0; i < slideTot; i++){
        allImages[i].setAttribute('id', 'slide-' + slideIdNum);
        slideIdNum++;
    }

    //  change the slides

    function runSlide(){

        if(curSlide < 2){
            prevSlide = slideTot;
        } else {
            prevSlide = curSlide - 1;
        }

        document.getElementById('slide-' + curSlide).style.zIndex = "2";
        document.getElementById('slide-' + prevSlide).style.zIndex = "1";

        setTimeout(function(){
            document.getElementById('slide-' + curSlide).style.opacity = '1';
        }, 200);

        setTimeout(function(){
            document.getElementById('slide-' + prevSlide).style.opacity = '0';
            incrementer();
        }, 1400);

        //  increment the slide number
        function incrementer(){
            if(curSlide == slideTot){
                curSlide = 1;
            } else{
                curSlide++;
            }
        }

    }

}
