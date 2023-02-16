/**
 * Toggle Header on mobile and tablex device size based on hamburger icon click
 * By default (on load) mobile header is closed 
*/
function toggleHeader() {
    const mainHeader = document.querySelector('.js-main-header');
    if (mainHeader.classList.contains('closed')) {
        mainHeader.classList.remove('closed');
        mainHeader.style.display = 'flex';
    } else {
        mainHeader.classList.add('closed');
        mainHeader.style.display = "none";
    }
}