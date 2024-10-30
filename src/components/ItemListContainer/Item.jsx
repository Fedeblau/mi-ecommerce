import React from 'react'

const Item = ({ elemento }) => {
    return (
        <div>
            <h3>
                {elemento.title}
            </h3>
            <img src={elemento.image} alt="botella" width={"300px"} height={"400px"} />
            <p>{elemento.category}</p>
            <p>$ {elemento.price}</p>
        </div>
    )
}

export default Item