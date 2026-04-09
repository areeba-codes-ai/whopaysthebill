import { useContext } from "react";
import { MyContext } from "../context/Index.jsx";

const StageTwo =() =>{
    const context= useContext(MyContext)
    return(
        <>
        <div className="result_wrapper">
            <h3>The Loser is:</h3>
            {context.result}
        </div>
        <div className="action_button"
        onClick ={() => context.resetGame()}>
            Start Over
        </div>
        <div className="action_button btn_2"
        onClick ={() => context.generateNewLoser()}>
            Get New Loser
        </div>
        </>
    )
}

export default StageTwo;