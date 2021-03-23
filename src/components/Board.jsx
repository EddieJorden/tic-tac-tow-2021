import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';

const Board = () => {
    const [playerXorO, setPlayerXorO] = useState('X')
    const [winningConditions, setWinningConditions] = useState(false)
    const [xSpacesArray] = useState(['', '', '', '', '', '', '', '', '', ])
    const [oSpacesArray] = useState(['', '', '', '', '', '', '', '', '', ])

    // const calculateWinner = (xSpacesArray) => {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ]
    
    //     for (let i = 0; i < lines.length; i++) {
    //         const [a, b, c] = lines[i];
    //         if (xSpacesArray[a] && xSpacesArray[b] === xSpacesArray[b] && xSpacesArray[a] === xSpacesArray[c]) {
    //             return xSpacesArray[a];
    //         }
    //     }
    //     return null;
    // }
    
    // const calculateWinner = () => {
    //     for(let i = 0; i < xSpacesArray.length; i++) {
    //         if(xSpacesArray[0].indexof("X") === true ){setWinningConditions(true)}
    //     }
    // }

    // const calculateWinner = xSpacesArray.findIndex(el, index) => {
    //     if (el.xspace === 'X') {
    //         return true
    //     }
    // })

    // const calculateWinner = () => {
    //     if(xSpacesArray[0] === true){
    //         setWinningConditions(true)
    //     }
    // }

    const calculateWinner = xSpacesArray.some(space => space.true)

   

    const squaresArray = []
        for(let i = 0; i < 9; i++){
            squaresArray.push(
                <SpaceComponent 
                    key={i} 
                    index={i} 
                    playerXorO={playerXorO} 
                    setPlayerXorO={setPlayerXorO}
                    xSpacesArray={xSpacesArray}
                    oSpacesArray={oSpacesArray}
                />
            )    
        }
        

console.log(squaresArray)
console.log(xSpacesArray)
console.log(oSpacesArray)
console.log(winningConditions)

    return(       
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
                }}
                >
                    {squaresArray}
                </div>
                <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                    {winningConditions === true ? 'Player X is the winner' : 'TicTacToe...'}
                </div>
            </div>        
    )
}



export default Board