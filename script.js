

document.getElementById("add").addEventListener("click", ()=>{



    document.getElementById("container").innerHTML+=`
    <span>
    <li><input value=${document.getElementById("input").value}>
    <input type="checkbox" id="checkbox">
    <button class="delete">Delete</button>
    </span>
    </li>
    `

    // const newSpan = document.createElement("span")
    // const newLi = document.createElement("li")
    // const newInput = document.createElement("input")
    // const newInput2 = document.createElement("input")
    // const newBtn = document.createElement("button")

    // newInput.value = `${document.getElementById("input").value}`
    // newBtn.textContent = "Delete"
    // newInput2.type="checkbox"
    // newBtn.id = "delete"
    // newBtn.classList.add("delete")

    // document.getElementById("container").appendChild(newSpan)
    // document.getElementById("container").appendChild(newLi)
    // document.getElementById("container").appendChild(newInput)
    // document.getElementById("container").appendChild(newInput2)
    // document.getElementById("container").appendChild(newBtn)


    document.querySelectorAll(".delete").forEach(element=>element.addEventListener("click", (event)=>{
        if (event.target.classList.contains('delete')) {
            const listItem = event.target.parentElement;
            listItem.remove();
          }

        // location.reload()
        }))

// const newButton = document.querySelector("button")
// newButton.id = "delete"
})



    
    
//



// delete2.addEventListener("click", (event)=>{
//     if (event.target.classList.contains('delete')) {
//         const listItem = event.target.parentElement;
//         listItem.remove();
//       }
// })



document
            .getElementById("add")
            .addEventListener("click", function (event) {
                event.preventDefault();
            });

            // document
            // .getElementById("delete")
            // .addEventListener("click", function (event) {
            //     event.preventDefault();
            // });
