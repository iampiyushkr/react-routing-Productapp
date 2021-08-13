import { Link } from "react-router-dom";

export default function Navbar1() {
    return <div>
        <Link to="/home"><button>Home</button></Link>
        <Link to="/allproduct"><button>All-Product</button></Link>
        <Link to="/cart"><button>Cart</button></Link>
    </div>
    
}