import React, {useState} from "react";
import Article from "../Article/Article";

const Form = () =>{
    const clearInput = () =>{
        document.getElementById("clear").value = ""
    };
    const clearData = () =>{
        setDog("")
    }
    const [clas,setClass] = useState("")
    const [error,setError] = useState()
    const [dog,setDog] = useState('')
    const [uInput,setUInput] = useState()
    const dogHandler = (e) =>{

        setUInput(e.target.value)
    };
    const getData = (event) =>{
        clearInput()
        event.preventDefault()

        fetch(`https://dog.ceo/api/breed/${uInput}/images/random `)
            .then(response => response.json())
            .then(data => {
                if (data.status === "success"){
                    setDog(data)
                    setClass(" ")
                }else{
                    setError("Nera Tokio Suns :)")
                    setClass("negeras")
                }
                }

            )};

    const dogs = <Article message={dog.message} status={dog.status} error={error} clas={clas}/>

        console.log(dog)
    return(<div>
        <form className={"row"}>
            <input className="col-sm-9 col-12" id={"clear"} type="text" placeholder="Irasykite Suni" onChange={dogHandler} required/>
            <button className={"btn btn-primary col-sm-2"} onClick={getData} >Search</button>
        </form>
                {dogs}
    </div>
)
}

export default Form