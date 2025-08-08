const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
    const color = getComputedStyle(box).backgroundColor;
    document.body.style.backgroundColor = color;
    });
});