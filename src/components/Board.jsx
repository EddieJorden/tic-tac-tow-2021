import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';
// import TicTacToe from './TicTacToe';
// import TicTacToe from './TicTacToe';
// import WinningAnouncement from './TicTacToe'


const Board = () => {
    const [playerXorO, setPlayerXorO] = useState('X')
    const [winningConditions, setWinningConditions] = useState(false)
    const [xSpacesArray] = useState(['', '', '', '', '', '', '', '', ''])
   
  
    

    // const winningLines = [
    //             [0,1,2],
    //             [3,4,5],
    //             [6,7,8],
    //             [0,3,6],
    //             [1,4,7],
    //             [2,5,8],
    //             [0,4,8],
    //             [2,4,6],
    //         ];
            
            
            
            
            const squaresArray = []
            for(let i = 0; i < 9; i++){
                squaresArray.push(<SpaceComponent key={i} index={i} playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} xSpacesArray={xSpacesArray} />)
                
            }

            // Const [board,setBoard] = useState(Array(9).fill(null))
            
            // if(Board.winningLines[0] === 'X'){
            //     setWinningConditions(true)
            // }
                
    //             for (let i = 0; i < winningLines.length; i++) {
    //     const [a,b,c] = winningLines[i];
    //     if (newArray[a] && localXorO[a] === localXorO[b] && localXorO[a] === localXorO[c]) {
    //         setWinningConditions(true)
    //     }
    // }
           
           

        //   {for each line in winning lines if state === 'X' && setWinningCondition}s('X')
 


console.log(squaresArray)
console.log(xSpacesArray)


    return(
        
        <div>
        <div>
            <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                {playerXorO === 'X' ? "Player X's turn" : "Player O's turn"}
            </div>
            <div style={{
                width: '31rem',
                height: '30rem',
                margin: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
                
            }}>
           {squaresArray} 
           </div>
            <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                {winningConditions === true ? 'Player X is the winner' : 'TicTacToe...'}
            </div>
       
        </div>
            <div style={{color: 'white'}}>
                {/* <TicTacToe WinningConditions='WinningConditions'/>
                <WinningConditions /> */}
            </div>
        </div>
    )
}



export default Board