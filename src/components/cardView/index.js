import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const CardView = (props) => {
    const highligthFavorite = (name) => {
       let  listOfFavorite = localStorage.getItem('favorite')
       let favoriteList = JSON.parse(listOfFavorite)
if(favoriteList != undefined || favoriteList != null){
    if (favoriteList.length > 0) {
        let findAlreadyFavorite = favoriteList.find((value) => value === name)
        if (findAlreadyFavorite !== undefined) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
    }
    return (
        <Col xs="12" sm="6" md="4" className="p-2">
            <Card className="text-white bg-info text-center">
                {highligthFavorite(props.title) === true ?
                    <img src={require('../../assets/star-fill.png')} onClick={() => props.addFavorite(props.title)}  style={{ width: 20, height: 20, margin: 5, position: 'absolute' }} />
                    :
                    <img src={require('../../assets/star-unfill.png')} onClick={() => props.addFavorite(props.title)} style={{ width: 20, height: 20, margin: 5, position: 'absolute' }} />
                }
                <CardBody>
                    <blockquote className="card-bodyquote">
                        <cite title={props.title}>{props.title} </cite>
                        <footer className="m-3">
                            <span className="link" onClick={() => props.getSpecificData(props.url, props.title)}>Click For More Detail.</span>
                        </footer>
                    </blockquote>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CardView
