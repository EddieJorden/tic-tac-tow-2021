import React, { useState } from 'react';
import SpaceComponent from './SpaceComponent';



const TicTacToe = ({ spaces }) => {
    const [playerXorO, setPlayerXorO] = useState('X')
    console.log(playerXorO)

    


    // return(
    //     <div style={{display: 'flex', flexWrap: 'wrap', width: '50%'}}>
    //         <div>
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         </div>
    //         <div>
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         </div>
    //         <div>
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    //         </div>
    //     </div>
    // )
}

export default TicTacToe;



