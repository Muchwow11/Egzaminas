
const Article = (props) =>{


    return(<div>
        <article>
            <img src={props.message} className={`col-sm offset-sm-4 ${props.clas}`}/>
            <h1>{props.error}</h1>
        </article>
    </div>)

}



export default Article