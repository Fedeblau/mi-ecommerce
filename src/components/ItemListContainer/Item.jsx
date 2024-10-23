import React from 'react'

const Item = ({ elemento }) => {
    return (
        <div>
            <h3>
                {elemento.nombre}
            </h3>
            <img src={elemento.img} alt="botella" width={"300px"} height={"400px"} />
            <p>{elemento.uva}</p>
            <p>$ {elemento.precio}</p>
        </div>
    )
}

export default Item