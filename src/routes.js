import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Usage from "./Pages/Usage/Usage";
import SignUp from "./Pages/SignUp/SignUp"

let routes = [
    {path : "/" , element : <Home/>} ,
    {path : "/product" , element : <Product/>} ,
    {path : "/usage" , element : <Usage/>} ,
    {path : "/signUp" , element : <SignUp/>} ,
]

export default routes