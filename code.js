window.onload = function()
{
    var htmlElements = "";
    for (var i = 0; i < 256; i++) {
        htmlElements += '<div class="box"></div>';
    }
    var container = document.getElementById("container");
    container.innerHTML = htmlElements;
    var boxx = document.getElementById('box')
    container.addEventListener('mouseover', function()
    {
        // container.style.backgroundColor = "black";
    });
}
