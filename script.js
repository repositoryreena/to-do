

document.getElementById("add").addEventListener("click", ()=>{



    document.getElementById("container").innerHTML+=`
    <span>
    <li><input value=${document.getElementById("input").value}>
    <input type="checkbox">
    <button>Delete</button>
    </span>
    </li>
    `

})

document
            .getElementById("add")
            .addEventListener("click", function (event) {
                event.preventDefault();
            });
