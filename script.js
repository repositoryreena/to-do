document.getElementById("add").addEventListener("click", ()=>{



    document.getElementById("container").innerHTML+=`
    <span>
    <li><input value=${document.getElementById("input").value}>
    <input type="checkbox" id="checkbox">
    <button class="delete">Delete</button>
    </span>
    </li>
    `



    document.querySelectorAll(".delete").forEach(element=>element.addEventListener("click", (event)=>{
        if (event.target.classList.contains('delete')) {
            const listItem = event.target.parentElement;
            listItem.remove();
          }

        }))

})



    
    



document
            .getElementById("add")
            .addEventListener("click", function (event) {
                event.preventDefault();
            });
