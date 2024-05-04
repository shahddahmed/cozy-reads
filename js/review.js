document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup-review');
    const closeButton = document.querySelector('.popup-review .close');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Function to open the popup
    function openPopup() {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Attach close event to close button and overlay
    closeButton.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);

    // Example event to open the popup - bind this to your desired 'open' event
    document.getElementById('review-button').addEventListener('click', openPopup);
});
