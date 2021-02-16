import react, { useState } from 'react'
import SpaceComponent from './SpaceComponent';

const TicTacToe = () => {
    const [playerXorO, setPlayerXorO] = useState('O')
    console.log(playerXorO)

    return(
        <SpaceComponent playerXorO={playerXorO} setPlayerXorO={setPlayerXorO} />
    )
}

export default TicTacToe;
