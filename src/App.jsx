import { useState } from "react"

function App() {
  const [itemChecked, setItemChecked] = useState({
    first: false,
    second: false,
    third: false,
  })

const handleItemChecked = (e) => {
  //if (itemChecked[e.target.name]){
    //setItemChecked({
      //...itemChecked,
      //[e.target.name]:false,
   // });

   setItemChecked({
    ...itemChecked,
    [e.target.name]: !itemChecked[e.target.name]
   })
    
  }


  return (
    <div className="container text-center mt-3">
      <div className="row mt-5">
        <div className="col text-start">
          <h1>Shopping List</h1>
        </div>
        <div className="col text-end">
          <button type="button" className="btn btn-outline-primary bi bi-plus-circle">
          </button>
        </div>
        <hr />
      </div>

      <div className="row mt-4">
        <div className="col">
          <input 
          checked={itemChecked.first}
          name="first"
          onClick={(e)=>handleItemChecked(e)}
          type="checkbox"/>
        </div>
        <div className="col">
          {
            //itemChecked.first && <del>1 kg</del>

          }
          {
            //itemChecked.first && "1 kg"
          }
          {
          itemChecked.first ? <del>1Kg</del>: "1 kg" 
          }
          </div>
        <div className="col-6 col-md-8" style={{textDecoration: itemChecked.first && "line-through"}}>Tortillas</div>
        <div className="col-5 col-md-3 btn-group" role="group">
          <button type="button" class="btn btn-outline-primary bi bi-pencil-square"></button>
          <button type="button" class="btn btn-outline-secondary bi bi-files"></button>
          <button type="button" class="btn btn-outline-danger bi bi-trash3"></button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <input type="checkbox" />
        </div>
        <div className="col">1L</div>
        <div className="col-6 col-md-8">Aceite</div>
        <div className="col-5 col-md-3 btn-group" role="group">
          <button type="button" class="btn btn-outline-primary bi bi-pencil-square"></button>
          <button type="button" class="btn btn-outline-secondary bi bi-files"></button>
          <button type="button" class="btn btn-outline-danger bi bi-trash3"></button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <input type="checkbox" />
        </div>
        <div className="col">3L</div>
        <div className="col-6 col-md-8">Refresco</div>
        <div className="col-5 col-md-3 btn-group" role="group">
          <button type="button" class="btn btn-outline-primary bi bi-pencil-square"></button>
          <button type="button" class="btn btn-outline-secondary bi bi-files"></button>
          <button type="button" class="btn btn-outline-danger bi bi-trash3"></button>
        </div>
      </div>



    </div>

  )
}

export default App
