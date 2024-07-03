import React, { Component } from 'react'
import Card from './Card'
import "./trainers.css"
export default class Facility extends Component {

    articles = [

        {
            key: "Train1",
            Name: "john doe",
            Teach: "body building",
            urlToImage: "../img/trainer1.jpg"
        },
        {
            key: "Train2",
            Name: "alex walt",
            Teach: "yoga",
            urlToImage: "../img/trainer2.jpg"
        },
        {
            key: "Train3",
            Name: "mark smith",
            Teach: "yoga",
            urlToImage: "../img/trainer3.jpg"
        },
        {
            key: "Train4",
            Name: "amelia biden",
            Teach: "yoga",
            urlToImage: "../img/trainer4.jpg"
        },
        {
            key: "Train5",
            Name: "grace harris",
            Teach: "yoga",
            urlToImage: "../img/trainer5.jpg"
        },
        {
            key: "Train6",
            Name: "ivanka sutherland",
            Teach: "yoga",
            urlToImage: "../img/trainer6.jpg"
        },
        {
            key: "Train7",
            Name: "david rodger",
            Teach: "yoga",
            urlToImage: "../img/trainer7.jpg"
        },
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles
        }

    };

    render() {
        return (
            <>
                <div class="trainerslayout">
                    {this.articles.map((element) => {
                        return (
                            <Card title={element.Teach} name={element.Name} imgurl={element.urlToImage} />)
                    })}
                </div>
            </>
        )
    }
}
