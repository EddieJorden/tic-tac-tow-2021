import react, { useState } from 'react'
import SpaceComponent from './SpaceComponent';



const TicTacToe = () => {
    const [playerXorO, setPlayerXorO] = useState('X')
    console.log(playerXorO)




    return(
        <div>
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
        </div>
        )
}

export default TicTacToe;
