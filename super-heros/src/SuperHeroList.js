import React from "react"
import Hero from "./Hero"

function SuperHeroList(props){
    const mappedHeros = props.heros.map(hero => {
        return <Hero name={hero.name} 
                     catchPhrase={hero.catchPhrase}
                     image={hero.imageName}
                     key={hero.imageName}
        />
    }) 

    return (
        <div>
            { mappedHeros }
        </div>
    )
}

export default SuperHeroList