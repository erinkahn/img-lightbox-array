




// find the thumbnails, get them from the html
let thumbnails = document.querySelectorAll('.thumbnail');

//loop through the thumbnails
for (let i = 0; i < thumbnails.length; i++) {
    
        // when you click the thumbnail...
    thumbnails[i].addEventListener('click', function() {
        console.log('a thumbnail was clicked', this)  // this is the same thing as thumbnails[i]

        
    //this goes before lightbox becuase in html the order matters-whats first goes on top
        // create an overlay and put it on the screen
        let overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');
        // put them on the screen by putting (appending) them in the body
        document.body.appendChild(overlay);


    //this goes after lightbox becuase in html the order matters-whats second goes underneath whats before it
        // create a lightbox and put it on the screen
        let lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        // put lightbox on the screen by putting (appending) them in the body
        document.body.appendChild(lightbox);

        // create a big image to go inside the lightbox
        let bigImage = document.createElement('img');
        thumbnails[i].classList.add('img');
        // give the image a source from the thumbnails array
        bigImage.src = this.src;
        // append the big image inside the lightbox 
        lightbox.appendChild(bigImage);

        // when you click the overlay make the big image and lightbox disappear
        overlay.addEventListener('click', function() {
            document.body.removeChild(lightbox);
            document.body.removeChild(overlay);
        })
    })
    
}




