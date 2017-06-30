import React, {Component} from 'react';
import chandra from './chandra.jpg';
import {Grid, Row, Col} from 'react-bootstrap';
import  AutoSuggest from './components/AutoSuggest';
import  DataSources from './components/DataSources';
import '../bootstrap/less/bootstrap.less';
import './App.css';

class App extends Component {

    render() {

        return (
            <Grid>
                <Row bsClass="row header">
                    <Col bsClass="logo" md={10}>
                        <img src={chandra} alt="logo" className="center-block"/>
                    </Col>
                </Row>
                <Row bsClass="main">
                    <Col md={5}>
                        <AutoSuggest />
                    </Col>
                    <Col md={5}>
                        <DataSources />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export
default
App;
