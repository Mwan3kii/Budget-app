<div>
      <h2>My category</h2>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <p class="card-text">{description}</p>
        </div>
      </div>
      {/* Button to create a new category */}
      <button className="btn btn-primary mt-3" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Create New Category'}
            </button>

            {/* Form for creating a new category */}
            {showForm && (
                <form onSubmit={handleSubmit} className="mt-3">
                    <div className="mb-3">
                        <label htmlFor="categoryName" className="form-label">Category Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                            name="name"
                            value={newCategory.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryDescription" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="categoryDescription"
                            name="description"
                            value={newCategory.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Add Category</button>
                </form>
            )}
    </div>


export default CategoryPage;