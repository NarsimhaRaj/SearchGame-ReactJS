import React from 'react';

function GameDetails(props){

    return (
        <div className="game">
            <div className="game-title">
                {props.game.title}
            </div>
            <div className="game-body">
                <div>
                    {props.game.genre}
                </div>
                <div>
                    {props.game.release_year}
                </div>
                <div>
                    {props.game.platform}
                </div>
            </div>
            <div className="game-footer">
                <div>
                    {props.game.editors_choice}
                </div>
                <div>
                    {props.game.score}
                </div>
            </div>
        </div>
    )
}

export default GameDetails;