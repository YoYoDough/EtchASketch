window.onload = function()
{
    var container = document.getElementById("container");
    for (var i = 0; i < 256; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.addEventListener('mouseover', function hover() {
            box.style.background = 'black';
      });
        container.appendChild(box)
    }
}
