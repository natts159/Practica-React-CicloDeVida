import React, { Component } from 'react';
import Genre from './Genre';

class Genresindb extends Component {

    constructor(){
        super()
        this.state = {
            genres : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/genres')
            .then(response => response.json())
            .then(info => {
                console.log(info)
                this.setState(
                    {
                        genres : info.data // "info" es el objeto que trae el array, con todos los géneros, llamado "data"
                    }
                )
            })
            .catch( error => console.log(error))
    }

    handleChangeBg(){
        document.getElementById('card-body-genre').classList.toggle('bg-secondary')
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=>this.handleChangeBg()}>Genres in Data Base</h6>
                    </div>
                    <div className="card-body" id="card-body-genre">
                        <div className="row">
                            {
                                this.state.genres.map((genre, index) => {
                                    return <Genre  {...genre} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Genresindb;

