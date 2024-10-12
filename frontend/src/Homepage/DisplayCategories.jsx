import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DisplayCategories = ({item}) => {
    const navigate = useNavigate();

    const handleSingleProduct =() => {
        navigate(`/home/${item.id}`, {
            state: {
                item: item
            }
        })
    }
  return (
    <section className="main-card" key={item.id}>
        <div className="main-dynamic-object">
          <div className="main-dynamic-bottom-section">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={handleSingleProduct}>View Category</button>
          </div>
        </div>{" "}
      </section>
  )
}

export default DisplayCategories;