import React, { Children, Component } from 'react';
import {
    Badge, Card, CardBody, Label,
    Modal, ModalBody, ModalFooter, ModalHeader, Button, CardHeader, Col, Row, Collapse, Fade
} from 'reactstrap';

const DetailView = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={() => props.toggleModal(false)} className={props.className}>
            <ModalHeader >{props.spellDetail.name} - Details</ModalHeader>
            <ModalBody>
                <Row>
                    <Col className='p-3'>
                        <Col className="RowPopup" style={{ fontSize: '1rem' }}><strong> {'Duration'}</strong></Col>
                        <Col className="RowPopup" style={{ justifyContent: 'center' }}>
                            <span>{props.spellDetail.duration}</span>
                        </Col>
                    </Col>
                    <Col className='p-3'>
                        <Col className="RowPopup" style={{ fontSize: '1rem' }}><strong> {'index'}</strong></Col>
                        <Col className="RowPopup" style={{ justifyContent: 'center' }}>
                            <span>{props.spellDetail.index}</span>
                        </Col>
                    </Col>
                    <Col className='p-3'>
                        <Col className="RowPopup" style={{ fontSize: '1rem' }}><strong> {'Range'}</strong></Col>
                        <Col className="RowPopup" style={{ justifyContent: 'center' }}>
                            <span>{props.spellDetail.range}</span>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-3'>
                        <Col className="RowPopup" style={{ fontSize: '1rem' }}><strong> {'Ritual'}</strong></Col>
                        <Col className="RowPopup" style={{ justifyContent: 'center' }}>
                            <span>{props.spellDetail.ritual === true ? 'Yes' : 'No'}</span>
                        </Col>
                    </Col>
                    <Col className='p-3'>
                        <Col className="RowPopup" style={{ fontSize: '1rem' }}><strong> {'Url'}</strong></Col>
                        <Col className="RowPopup" style={{ justifyContent: 'center' }}>
                            <span>{props.spellDetail.url}</span>
                        </Col>
                    </Col>
                    {props.spellDetail.school !== undefined &&
                        <Col className='p-3'>
                            <Col className="RowPopup" style={{ fontSize: '1rem' }}><strong> {'School Name'}</strong></Col>
                            <Col className="RowPopup" style={{ justifyContent: 'center' }}>
                                <span>{props.spellDetail.school.name}</span>
                            </Col>
                        </Col>
                    }
                </Row>
                <Row>
                    {props.spellDetail.school !== undefined &&

                        <Col className='p-3'>
                            <Col className="RowPopup" style={{ fontSize: '1rem' }}><strong> {'School Url'}</strong></Col>
                            <Col className="RowPopup" style={{ justifyContent: 'center' }}>
                                <span>{props.spellDetail.school.url}</span>
                            </Col>
                        </Col>
                    }
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => props.toggleModal(false)}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DetailView
