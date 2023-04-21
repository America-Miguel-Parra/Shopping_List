import Swal from "sweetalert2"

const NewItemButton = () => {
    const newIteModal = () => {
        Swal.fire('Any fool can use a computer')
    }
  return (
    <button 
    onClick={newIteModal}
    type="button" className="btn btn-outline-primary bi bi-plus-circle">
    </button>
  )
}

export default NewItemButton