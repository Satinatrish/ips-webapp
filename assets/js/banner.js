const bannerImages = document.getElementById('banner-images');
        let currentIndex = 0;

        function scrollBanner() {
            currentIndex = (currentIndex + 1) % 3; // Update to match the number of images
            bannerImages.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        // The `scrollBanner` function encapsulates the behavior related to updating the banner's position.

        setInterval(scrollBanner, 2000); // Auto-scroll every 2 seconds

        // The `document.getElementById` method and `bannerImages.style.transform` interact with the DOM, which is an object-oriented API.