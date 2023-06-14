import {useState, useEffect,Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

// const f=(a)=>{
//     return (b)=>{
//         console.log(a+b);
//     }
// }

// f(2)(5);

// const g=(a)=>{
//     return class extends Component{
//         render(){
//             return <h1>We can change the world</h1>;
//         }
//     } 
// }

  
const withSlider=(BaseComponent, getData)=>{
    return (props)=>{
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        setSlide(getData());
    }, [])

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return <BaseComponent/>
    }
}


const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

const SliderFirst = () => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setSlide(getDataFromFirstFetch());
    }, [])

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = () => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false)

    useEffect(() => {
        setSlide(getDataFromSecondFetch());
    }, [])

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => setAutoplay(autoplay => !autoplay)}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

function App() {
    return (
        <>
            <SliderFirst/>
            <SliderSecond/>
        </>
    );
}

export default App;
