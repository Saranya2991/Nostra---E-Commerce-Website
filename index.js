 var offerBar = document.querySelector(".offer-bar")
        document.getElementById("offer-close").addEventListener("click", function () {
            offerBar.style.display = "none"
        })

        var sliderleftbutton = document.getElementById("slider-left-activate")
        var sliderrightbutton = document.getElementById("slider-right-activate")
        var sliderimage = document.querySelector(".slider-image-container")
        var slidermargin = 0

        console.log(sliderleftbutton)

        sliderrightbutton.addEventListener("click",

            function () {
                slidermargin = slidermargin + 100

                if (slidermargin > 200) {
                    slidermargin = 0
                    sliderimage.style.marginLeft = 0;
                }
                else {
                    sliderimage.style.marginLeft = "-" + slidermargin + "vw";
                }



            }
        )

        sliderleftbutton.addEventListener("click",

            function () {

                if (slidermargin == 0) {

                    slidermargin = 200
                    sliderimage.style.marginLeft = "-" + slidermargin + "vw";
                }
                else {

                    slidermargin = slidermargin - 100
                    sliderimage.style.marginLeft = "-" + slidermargin + "vw";
                }


            })
        //selecting side Navbar, MenuIcon

        var sidenav = document.getElementById("sidenav")
        var menuicon = document.getElementById("menuicon")
        var closenav = document.getElementById("closenav")
        menuicon.addEventListener("click", function () {
            sidenav.style.right = 0
        })

        closenav.addEventListener("click", function () {
            sidenav.style.right = "-50%"
        })

        /*like Button*/

        const likeButtons = document.querySelectorAll('.like-btn');

        likeButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });
        });

        /*Scrolling*/

        const gallery = document.getElementById('product-gallery');
        const scrollLeftBtn = document.getElementById('scroll-left');
        const scrollRightBtn = document.getElementById('scroll-right');

        scrollLeftBtn.addEventListener('click', () => {
            gallery.scrollBy({
                left: -250, // scroll left by 250px
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            gallery.scrollBy({
                left: 250, // scroll right by 250px
                behavior: 'smooth'
            });
        });


        window.addEventListener("scroll", function () {
            var elements = this.document.querySelectorAll(".initial-scroll-animate")
            elements.forEach((el) => {
                windowHeight = window.innerHeight
                var elbound = el.getBoundingClientRect()


                console.log(windowHeight)
                console.log(elbound.top)
                if (windowHeight > elbound.top - 100) {
                    console.log("Hi")
                    el.classList.remove("reveal-scroll-animate")

                }

            })

        })
