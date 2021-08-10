import { useState, useEffect, useRef } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = () => {
    const [isShown, setIsShown] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, () => setIsShown(false))
    return (
        <div className="menu">
            <div className="hamburger" onClick={() => setIsShown(!isShown)}>
                <span></span><span></span><span></span>
            </div>
            <nav className={isShown ? "show" : "hide"} ref={ref}>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setIsShown(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsShown(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/users" onClick={() => setIsShown(false)}>Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}