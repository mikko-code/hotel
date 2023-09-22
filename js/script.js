document.addEventListener('DOMContentLoaded', function() {
    const apartments = document.querySelectorAll('.apartment');

    apartments.forEach(apartment => {
        const images = apartment.querySelectorAll('.apartment-images img');
        let currentImageIndex = 0;

        function showImage(index) {
            images.forEach((image, i) => {
                image.style.display = 'none';
            });

            images[index].style.display = 'block';
        }

        showImage(currentImageIndex);

        apartment.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        });
    });

    const phoneLink = document.getElementById("phoneLink");

    phoneLink.addEventListener("click", function(event) {
        event.preventDefault();

        window.location.href = "https://wa.me/380731052829";
    });
});
