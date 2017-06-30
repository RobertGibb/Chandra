import React from "react";

import {Grid, Row, Col, Modal, Button} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'


export default class DataSources extends React.Component {


    sources = () => {
        var sources = [{
            name: "J:\\Development\\2017",
        }, {
            name: "http://someserver:8345/document/repo",
        }];
        return sources;
    }

    constructor(){
        super()
        this.state = {showAddLocalSource: false,
            showAddRemoteSource: false};

   }

    onCloseAddLocalSource = () => {
        this.setState({showAddLocalSource: false});
    };

    onAddLocalSource = () => {
        this.setState({showAddLocalSource: true});
    };

    onCloseAddRemoteSource = () => {
        this.setState({showAddRemoteSource: false});
    };

    onAddRemoteSource = () => {
        this.setState({showAddRemoteSource: true});
    }

    render() {

        const {showAddLocalSource, showAddRemoteSource} = this.state;


        return(
            <div>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <BootstrapTable tableHeaderClass="col-hidden" data={this.sources()} striped={true}
                                            hover={true}>
                                <TableHeaderColumn className="col-hidden" dataField="name" isKey={true}>Data Source</TableHeaderColumn>
                                <TableHeaderColumn className="col-hidden">
                                    <Button bsStyle="primary" bsSize="xsmall" onClick={this.addLocalSource}>
                                        {"Edit"}
                                    </Button>
                                    <Button bsStyle="primary" bsSize="xsmall" onClick={this.addLocalSource}>
                                        {"Delete"}
                                    </Button>
                                </TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} >
                            <Button className="pull-right" bsStyle="primary" bsSize="small" onClick={this.addLocalSource}>
                                {"Add Local Source"}
                            </Button>
                            <Button className="pull-right" bsStyle="primary" bsSize="small" onClick={this.addRemoteSource}>
                                {"Add Remote Source"}
                            </Button>
                        </Col>
                    </Row>
                </Grid>

                <Modal show={showAddLocalSource} onHide={this.closeAddLocalSource}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Local Data Source</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeAddLocalSource}>Close</Button>
                        <Button onClick={this.addLocalSource}>Add</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showAddRemoteSource} onHide={this.closeAddRemoteSource}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Remote Data Source</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <input type="text" size="50"/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeAddRemoteSource}>Close</Button>
                        <Button onClick={this.addRemoteSource}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}