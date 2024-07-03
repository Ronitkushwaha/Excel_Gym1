import React from "react";
import admindata from "./admindata";
export default function Trainers()extends Component {

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

    }; {
    return (
        <>
            <main class="adminmain">
                <div className="search">
                    <input type="text" placeholder="Enter to search" name="dbsearch" />
                    <button>search</button>
                </div>
                <div class="tableslist">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Join date</th>
                        </tr>
                        {this.articles.map((element) => {
                        return (
                            <admindata name={element.d1} email={element.Name} phonenumber={element.d3} joindate={element.d4} />)
                        })}
                    </table>
                </div>
            </main>
        </>
    )
}