
import { useEffect } from 'react';
import './HomeStyle.css';
// import gradientBackgroundColor from '../Component/Babel/babel';


const Home = () => {



    useEffect(() => {
        const gradient = document.querySelector(".gradient");
        function onMouseMove(event) {
            gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(159,0,191,.2) 0, #4D4FA7 35%)';
        }
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        }
    }, [])

    return (
        <>
            <div className="gradient"></div>
        </>

    )

}



export default Home;