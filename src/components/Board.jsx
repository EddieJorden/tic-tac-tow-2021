import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';
import TicTacToe from './TicTacToe';
// import WinningAnouncement from './TicTacToe'



const Board = ({square, onClick}) => {
    const [playerXorO, setPlayerXorO] = useState('O')
    const [winningConditions, setWinningConditions] = useState()
    const [xTracker, setXTracker] = useState([])
    const [oTracker, setOTracker] = useState([])
    console.log(xTracker, oTracker)
   
    const spaceComponentArray = []

    for(let i=0; i<9; i++){
        spaceComponentArray.push(
            <SpaceComponent
                playerXorO={playerXorO}
                setPlayerXorO={setPlayerXorO}
                index={i}
                setXTracker={setXTracker}
                setOTracker={setOTracker}
                xTracker={xTracker}
                oTracker={oTracker}
            />
        )
    }

    

    return(
        <div>
        <div>
            <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
                {playerXorO === 'O' ? "Player X's turn" : "Player O's turn"}
            </div>
            <div style={{
                width: '31rem',
                height: '30rem',
                margin: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
                
            }}>
                {spaceComponentArray}
            </div>
         
          
       
        </div>
            <TicTacToe xTracker={xTracker} oTracker={oTracker}/>
        </div>
    )
}




export default Board