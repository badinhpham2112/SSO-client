import axios from "../../customize/axios"
import { useEffect } from "react"

const About = () => {

    useEffect(() => { 
        axios.get("http://localhost:8081/health").then(res => {
          console.log(res)
        })   
    }, [])

    return (
        <>
        <div> Harry Phạm</div>
       
        </>
    )
}

export default About