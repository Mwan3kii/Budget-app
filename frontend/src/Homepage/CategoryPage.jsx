import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../Redux/UserCategories/categoriesSlice';
import "../Authentication/Auth.css";


const CategoryPage = ({ name, description }) => {
  const dispatch = useDispatch();
  const { loading, success, error} = useSelector((state)=> state.categories);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewCategory((newCategory) => ({
      ...newCategory,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      description: newCategory.description,
      name: newCategory.name
    }
    try {
      dispatch(createCategory(userData));
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
          <div class="spinner-border"></div> ) : ( success ? submitted && (
        <div className="success-message">
          <div> Your category was successfully created </div>
        </div>
      ): (<></>))}
      <div className="mb-3 mt-3">
        <label className="form-label">Category Name:</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter category name"
          name='name'
          value={newCategory.name}
          onChange={handleChange}
          required
          />
      </div>
      <div class="mb-3">
        <label className="form-label">Description:</label>
        <input
          type="text"
          className="form-control" 
          id="description"
          name='description'
          placeholder="Enter description" 
          value={newCategory.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Category</button>
    </form>
  )
}

export default CategoryPage;