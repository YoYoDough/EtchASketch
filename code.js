window.onload = function()
{
    var htmlElements = "";
    for (var i = 0; i < 256; i++) {
        htmlElements += '<div class="box">hi</div>';
    }
    var container = document.getElementById("container");
    container.innerHTML = htmlElements;
}
