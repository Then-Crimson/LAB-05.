
var link = document.querySelector('a');
link.href = "https://keybr.com";


var root = document.getElementById('root');
var h2 = document.createElement('h2');
h2.textContent = "MANIPULANDO DOM EN LAB5";
root.appendChild(h2);


var ul = document.createElement('ul');

const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
];

buyList.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

root.appendChild(ul);
