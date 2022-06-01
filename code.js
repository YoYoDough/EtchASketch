
var container = document.getElementById("container");
var buttn = document.getElementById("enter");

for (var i = 0; i < 256; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.addEventListener('mouseover', function hover() {
        box.style.background = 'black';
  });
    container.appendChild(box)
}
