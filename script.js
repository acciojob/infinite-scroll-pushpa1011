const list = document.getElementById("list");
const container = document.getElementById("container");

let count = 1;

// Function to add items
function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li.textContent = "Item " + count;
        list.appendChild(li);
        count++;
    }
}

// Initially add 10 items
addItems(10);

// Infinite scroll inside container
container.addEventListener("scroll", function () {

    if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight
    ) {
        addItems(2);
    }

});
