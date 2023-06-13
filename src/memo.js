import {useState, memo, PureComponent, Component, createContext, useContext} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

import Form from './context/Form';
import dataContext from './context/context';

// class Form extends Component {
//     shouldComponentUpdate(nextProps){
//         if(this.props.mail.name === nextProps.mail.name){
//             return false;
//         }
//         return true;
//     }
//     render() {
//             console.log('UpdateAftermemo!')
//             return (
//                 <Container>
//                     <form className="w-50 border mt-5 p-3 m-auto">
//                         <div className="mb-3">
//                             <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                             <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                             </div>
//                             <div className="mb-3">
//                             <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                             <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                         </div>
//                     </form>
//                 </Container>
//             )
//         }
// }



// class Form extends PureComponent{  // поверхн сравнение пропсов и сост-ий
//     render() {
//             console.log('memo!')
//             return (
//                 <Container>
//                     <form className="w-50 border mt-5 p-3 m-auto">
//                         <div className="mb-3">
//                             <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                             <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                             </div>
//                             <div className="mb-3">
//                             <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                             <textarea value={this.props.text } className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                         </div>
//                     </form>
//                 </Container>
//             )
//         }
// }





const {Provider}=dataContext;
console.dir(dataContext);

// class InputComponent extends Component{

//     static contextType=dataContext;

//     render(){
//         return (
//             // <Consumer>
//             //     {
//             //         value=>{
//             //             return(
//             //                 <input 
//             //                     value={value.mail} 
//             //                     type="email" 
//             //                     className='form-control' 
//             //                     id="exampleFormControlInput1" 
//             //                     placeholder="name@example.com"
//             //                 />
//             //             )
//             //         }
//             //     }
//             // </Consumer>

//             <input 
//                 value={this.context.mail} 
//                 type="email" 
//                 className='form-control' 
//                 id="exampleFormControlInput1" 
//                 placeholder="name@example.com"
//             />
//             )
//     }
// }




function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'another text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail(){
        setData({...data, mail: 'forceChange@gamil.com'})
    }

    return (
        <Provider value={data}>
            <Form  text={data.text} />
            <button 
                onClick={() => setData({
                    mail: 'secondname@example.com',
                    text: 'some text',
                    forceChangeMail: forceChangeMail
                })} >
                Click me
            </button>
        </Provider>
    );
}

export default App;
