let header = document.getElementById('header');

function headerSlicky() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 64) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// window.onscroll = function () {
//     headerSlicky()
// };
// window.addEventListener("load", function () {
//     headerSlicky()
// });