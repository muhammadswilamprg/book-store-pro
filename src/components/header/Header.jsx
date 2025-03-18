import { useState } from "react";

import "./header.css";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className="header">
            <TopHeader toggle={toggle} setToggle={setToggle} />
            <MiddleHeader />
            <Navbar toggle={toggle} setToggle={setToggle} />
        </header>
    );
}
 
export default Header;