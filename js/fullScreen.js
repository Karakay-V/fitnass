const button = document.getElementById('vievFullscreen');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    openFullscreen()
})

function openFullscreen() {
    if (button.requestFullscreen) {
        body.requestFullscreen();
    } else if (button.webkitRequestFullscreen) { /* Safari */
        body.webkitRequestFullscreen();
    } else if (button.msRequestFullscreen) { /* IE11 */
        body.msRequestFullscreen();
    }
}