import React from "react";

import {Grid, Row, Col, Button, FormControl} from 'react-bootstrap';


export default class AutoSuggest extends React.Component {

    constructor(){
        super();
        this.state = {isSearching: false};

        this.search = this.search.bind(this);

    }

    search(){
        this.setState({isSearching: true});

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({isSearching: false});
        }, 2000);
    }


    render() {

        var isSearching = this.state.isSearching;

        return(
            <Grid>
                <Row>
                    <Col md={4}>
                        <FormControl />
                    </Col>
                    <Col md={1}>
                        <Button
                            className="SearchButton pull-right"
                            bsStyle="primary"
                            bsSize="small"
                            disabled={isSearching}
                            onClick={isSearching ? this.search: null}>
                            {isSearching ? 'Searching...' : 'Search!'}
                        </Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}