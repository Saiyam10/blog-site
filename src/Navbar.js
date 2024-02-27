//Link tag instead of anchor tags are used in react webiste 
// intercept the request to server and instead do it by itself 

import {Link} from 'react-router-dom'


const Navbar = () =>{
    return (
        <nav  className="navbar">
         
            <h1>My Blog</h1>
            
            
              
            <div className="links">
                <Link to="/"> Home</Link>   
                <Link to="/create"> New Blog</Link>
            </div>
        </nav>
    );
}
export default Navbar;
