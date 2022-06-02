
var container = document.getElementById("container");
var buttn = document.getElementById("enter");
var input = document.getElementById('text');
var number = input.value;
buttn.addEventListener('click', function()
{
    var number = input.value;
    container.style.gridTemplateColumns = `repeat(${number} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${number} . 1fr)`;
    var product = number * number;
    grid(product);
});
function grid(size)
{
    for (var i = 0; i < size; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.addEventListener('mouseover', function hover() {
            box.style.background = 'black';
    });
        container.appendChild(box)
    }
}
