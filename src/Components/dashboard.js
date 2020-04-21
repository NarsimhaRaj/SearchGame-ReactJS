/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import GameDetails from './gameDetails';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            myGames: [],
            gamesPerPage: [],
            error: ""
        }
    }
    componentDidMount() {
        fetch('http://starlord.hackerearth.com/gamesext')
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => (b.score > a.score) ? 1 : ((a.score > b.score) ? -1 : 0));
                this.setState({ games: data, myGames: data });       
                this.props.setGamesData(data);
            })
            .catch(error => {
                console.log(error);
                this.setState({ error });
            });
    }
    inputHandler(value) {
        let { games } = this.state;
        this.setState({
            myGames: games.filter(game => (game.title.toString().toLowerCase().indexOf(value) !== -1))
        });
    }
    sortData(val) {
        let { games, myGames } = this.state;
        if(val==='asc'){ 
            games.sort((b, a) => (b.score > a.score) ? 1 : ((a.score > b.score) ? -1 : 0));
            myGames.sort((b, a) => (b.score > a.score) ? 1 : ((a.score > b.score) ? -1 : 0));
        }
        else{
            games.sort((a, b) => (b.score > a.score) ? 1 : ((a.score > b.score) ? -1 : 0));
            myGames.sort((a, b) => (b.score > a.score) ? 1 : ((a.score > b.score) ? -1 : 0));
        }
        this.setState({
            myGames, games
        });
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.myGames.length > 0 ?
                        <React.Fragment>
                            <div> Filter
                                <select onChange={(event) => this.sortData(event.target.value)}>
                                    <option value="des">Descending</option>
                                    <option value="asc">Ascending</option>
                                </select>
                            </div>
                            <div class="games">
                                {
                                    this.state.myGames.map((game, index) =>
                                        <GameDetails game={game} key={index} />
                                    )
                                }
                            </div>
                        </React.Fragment>
                        : <div>{this.state.error || "LOADING..."} </div>
                }
            </React.Fragment >
        );
    }
}

export default Dashboard;