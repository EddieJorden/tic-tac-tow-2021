import React from 'react';
import SpaceComponent from './SpaceComponent';

const Board = () => (
    <div>
        {squares.map((square, i) => (
            <SpaceComponent/>     
        ))}
    </div>
)

export default Board