import { useState } from "react"

const Colorizer = ()=>
{
    const [color,setColor] = useState('#ff0000')
    const changeColor = ()=>
    {
        console.log("called");
        const random = `#${Math.floor(Math.random()*16777215).toString(16)}` 
        setColor((random))

    }
    return(
        <div className="colorizer">
            <div className="box" style={{backgroundColor:color}}></div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Colorizer