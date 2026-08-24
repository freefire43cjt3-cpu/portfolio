import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setProgress((prev) =>{
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 400);
                    return 100;
                }
                return prev + 1;
            });  
        }, 25);

        return () => clearInterval (interval);        
    }, [onComplete]);

    
    return (
        <div className="loader">
            <div className="loader-content">
                <div className="loader-logo">RC</div>

                <div className="loader-text">
                    Loading portfolio...
                </div>

                <div className="loader-number">
                    {progress}%
                </div>

                <div className="loader-bar">
                    <div
                    className="loader-progress"
                    style={{ width: `${progress}%`}}
                    />
                </div>
            </div>
        </div>
    );
}

export default Loader;