// //Forma 1
// export function App(){
//     //Document.createElement('h1');
//     return (
//         <div>
//             <h1>Hello World!!!!!!</h1>;
//         </div>
//     );  
// }

//Forma 2
// function App(){
//     //Document.createElement('h1');
//     return (
//         <div>
//             <h1>Hello World!!!!!!</h1>;
//         </div>
//     );  
// }

// export default App; //Exportar por defecto la función App

// import { Fragment } from "react";


// const FirstAppVictor2024 = () => {
//     return (
//         <Fragment>
//             <h1>Hello World!!!!!!</h1>
//             <p>Soy un subtitulo</p>
//         </Fragment>
//     );
// }

// export default FirstAppVictor2024; //Exportar por defecto la constante FirstAppVictor2024

// const newMessage ='Victor Manuel Carmona';
// const newMessage =[1,2,3,4,5,6,7,8,9];
const newMessage ={
    message:'Hola Mundo',
    title: 'Fernado'
};

const numero = 123;
function printMessage(numero){
    if(numero > 100){
        return 'El numero es mayor a 100';
    }else{
        return 'El numero es menor a 100';
    }
}

const getResult=()=>{
    return 4+4;
}

// printMessage(numero)
const FirstAppVictor2024 = () => {
  
    return (
        <>
            {/* <h1>{newMessage.message}</h1> */}
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <h1>{printMessage(numero)}</h1> 
            <h1>{getResult()}</h1>
            {/* <h1>Hola Mundo</h1> */}
            <p>Soy un subtitulo</p>
        </>
    );
}

export default FirstAppVictor2024; 