import React, { Component } from 'react';
import App from '../App';
import ShopsView from './ShopsView';
import AboutView from './AboutView';
import InfoView from './InfoView';
import TermsView from './TermsView';
import AdminView from './AdminView';

class GetPage extends Component {
    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount () {
        this.props.onRef(undefined)
    }

    method() {
        window.alert('Hello!')
    }

    render() { 
        return(   
            <div className="GetPage">
                <header className="App-header">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="..." alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Second slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Third slide"></img>
                        </div>
                    </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Shop</a>
                            <a class="nav-item nav-link" href="#">About Us</a>
                            <a class="nav-item nav-link" href="#">Care of Snakes</a>
                            <a class="nav-item nav-link" href="#">Terms of Service</a>
                        </div>
                    </div>
                </nav>
                <body className="Main"></body>
            </div>
        );
    }
}

export default GetPage;