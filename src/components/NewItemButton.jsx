import React from "react"
import Swal from "sweetalert2"
import {v4 as uuidv4} from "uuid"

const NewItemButton = ({listItems, setListItems}) => {
    const newIteModal  = async () => {
        const {value} = await Swal.fire({
          title: "New item information",
          html: `
          <input type="text" id="name" name="name"  placeholder="name" class="swal2-input" />
          <input type="numeric" id="quantity" name="quantity" placeholder="quantity" class="swal2-input" />
          <input type="text" id="unit" name="unit" placeholder="unit" class="swal2-input" />
          `,

          confirmButtonText: "Add item",
          showCancelButton: true,
          cancelButtonText: "Dismiss",
          focusConfirm: false,
          preConfirm: () => {
            const name = Swal.getPopup().querySelector("#name").value;
            const quantity = Swal.getPopup().querySelector("#quantity").value;
            const unit = Swal.getPopup().querySelector("#unit").value;
            if(!name || !quantity || !unit) {
              Swal.showValidationMessage("Please enter a name");
            }
            return {name, quantity, unit};
          }

        })
        const newList = [
          ...listItems,
          {
              id: uuidv4 (),
              ...value,
              checked: false,
          }
        ]
        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems (newList)
    }
  return (
    <button 
    onClick={newIteModal}
    type="button" className="btn btn-outline-primary bi bi-plus-circle">
    </button>
  )
}

export default NewItemButton