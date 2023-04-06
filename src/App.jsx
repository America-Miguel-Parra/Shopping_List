function App() {

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col text-start">
        </div>
      </div>
      <h1 className="mt-3">Shopping List</h1>
      <hr/>
      <div className="col text-end">
        <button type="button" className="btn btn-outline-primary">
          <i className="bi bi-plus-circle"></i>
        </button>
      </div>
      
      <div className="row mt-4">
        <div className="col">
          <input type="checkbox" />
        </div>
        <div className="col">1Kg</div>
        <div className="col-6 col-md-8">Tortillas</div>
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
