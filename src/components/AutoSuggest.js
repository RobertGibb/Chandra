import React from "react";

import {Grid, Row, Col, Button, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

export default class AutoSuggest extends React.Component {

    constructor(){
        super();
        this.state = {isSearching: false};

    }

    prevSearches = () => {
        var prevSearches = [{
            name: "search1",
        }, {
            name: "search2",
        }];
        return prevSearches;
    }

    search = () => {
        this.setState({isSearching: true});
        console.log("inside search")
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
                            onClick={!isSearching ? this.search : null}>
                            {isSearching ? 'Searching...' : 'Search!'}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <BootstrapTable tableHeaderClass="col-hidden" data={this.prevSearches()} striped={true} hover={true}>
                            <TableHeaderColumn className="col-hidden" dataField="name" isKey={true}>Data Source</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
}