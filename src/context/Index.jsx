import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const MyContext = createContext();

const MyProvider = (props) => {
    const [stage, setStage]= useState(1);
    const [players, setPlayer] = useState([]);
    const [result, setResult]= useState('')

    const addPlayerHandler=(name) =>{
        console.log(players)
        setPlayer(prevState=>([
            ...prevState,
            name
        ]))

    }


    const removePlayerHandler= (idx) => {
        let newArray=[...players];
        newArray.splice(idx, 1)
        setPlayer(newArray);
    }

    const nextHandler= () => {
        if(players.length < 2){
            toast.error('You Need More Than One Player',{
                position: 'top-left',
                autoClose: 2000
            })
        }
        else{
            setStage(2);
            setTimeout(()=>{
                generateLoser();
            }, 2000)
            
        }
    }

    const resetGameHandler = ()=> {
        setStage(1);
        setPlayer([]);
        setResult('');

    }

    const generateLoser= () => {

        let result= players[Math.floor(Math.random()*players.length)];
        setResult(result)
    }


    return(
        <>
        <MyContext.Provider value ={{
            //State
            stage: stage,
            players: players,
            result:result,
            //methods
            addPlayer: addPlayerHandler,
            removePlayer: removePlayerHandler,
            next:nextHandler,
            resetGame:resetGameHandler,
            generateNewLoser: generateLoser,


        }}>
            {props.children}
        </MyContext.Provider>
        <ToastContainer/>
        
        </>
    )
}

export {
    MyContext,
    MyProvider
}