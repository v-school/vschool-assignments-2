import React from "react"

function Hero({name, catchPhrase, image}){
    const handleClick = () => {
        alert(catchPhrase)
    }

    return (
        <div onClick={handleClick}>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
        </div>
    )
}

export default Hero