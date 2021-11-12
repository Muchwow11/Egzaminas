import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Custom.css'
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const App = () =>{
    return(<div className="container-fluid">
            <Header />

            <Main />

            <Footer />
        </div>
    )
}

export default App