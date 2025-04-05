import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Usage from "./Pages/Usage/Usage";
import OnlinePlanner from "./Pages/OnlinePlanner/OnlinePlanner"
import SignUp from "./Pages/SignUp/SignUp"

let routes = [
    {path : "/" , element : <Home/>} ,
    {path : "/product" , element : <Product/>} ,
    {path : "/usage" , element : <Usage/>} ,
    {path : "/onlinePlanner" , element : <OnlinePlanner/>} ,
    {path : "/signUp" , element : <SignUp/>} ,
]

export default routes