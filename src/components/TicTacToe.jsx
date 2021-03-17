 working+array.splice+for+winning+logic
// import  { useState } from 'react';
// import SpaceComponent from './SpaceComponent';
// import SpaceComponentArray from './Board'


    // const winningAnouncement = (playerXorO) => {
//     const lines = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6],
//     ];

import React, { useState } from 'react';



    

  


// const winningAnouncement = (playerXorO) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
 master
//     return('yo')
  
//     for (let i = 0; i < lines.length; i++) {
//         const [a,b,c] = lines[i];
//         if (playerXorO[a] && playerXorO[a] === playerXorO[b] && playerXorO[a] === playerXorO[c]) {
//             return playerXorO[a]
//         }
//     }
    
// }



 working+array.splice+for+winning+logic
// const TicTacToe = () => {
//     // const [playerXorO, setPlayerXorO] = useState('O')
//     // const [winningConditions, setWinningConditions] = useState(true)
//     // return(
//     //     // <TicTacToe winningConditions={winningConditions} setWinningConditions={setWinningConditions}/>
//     // )

// }


const TicTacToe = ({ oTracker, xTracker }) => {
    let winningConditions = false;
   for(let i=0; i<lines.length; i++) {
   winningConditions = xTracker.forEach((item) => {
       return console.log(lines[i].includes(item)) 
      
    })
  }
  
 console.log(winningConditions)

    
    return(
        <div style={{color: 'white', textAlign: 'center', fontSize: '40px'}}>
        {winningConditions === true ? 'Player X is the winner' : 'TicTacToe...'}
    </div>
    )
}
    

 master


// export default TicTacToe;




