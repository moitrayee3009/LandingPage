function landingPageControls(){

    
    var imageControl = function ()
    {
        var image = document.getElementById("zlatan_back");

        image.onmouseover = function () {
            this.src = "Images/smileZlatan.jpg";
        }

        image.onmouseout = function () {
            this.src = "Images/zlatan.jpg";  
        }
    }
    

    var headerImageControl = function ()
    {
        var headerImages = ["Images/image1.jpg","Images/image2.jpg","Images/image3.jpg","Images/image4.jpg"];
        var imageCounter = 1;

        var headerImage = document.getElementsByTagName("header");
        headerImage[0].onclick = function() {
            changeHeader();
        }

        function changeHeader()
        {
            headerImage[0].style.backgroundImage = "url('" + headerImages[imageCounter++] + "')";
            if(imageCounter >= headerImages.length) {
                imageCounter = 0;
            } 
        }

        setInterval(changeHeader,5000);
    }

    var applyButtonControl = function()
    {
        var apply = function(){
            window.open("form.html");
        }

        var btnApply = document.getElementById("apply");
        //btnApply.addEventListener('click',apply);
        btnApply.onclick = apply;

        
    }

    var googleMap = function()
    {
        // The location of kyh
        var kyh = {lat: 59.313603,  lng: 18.110680};
         // The map, centered at kyh
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 16, center: kyh});
        // The marker, positioned at kyh
        var marker = new google.maps.Marker({position: kyh, map: map});
    }
    
      
    var form = document.getElementById("interest_form");
      form.onsubmit = function (event) {
        event.preventDefault();
        alert("Intresseanmält") ;
        return true;
    } 

    imageControl();
    headerImageControl();
    applyButtonControl();
    googleMap();
    
};