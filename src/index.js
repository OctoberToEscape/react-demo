import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <form action='https://www.baidu.com'>
                    <div className='child'>
                        <h1>hello world</h1>
                        <button onClick={this.parentEvent}>阻止默认行为</button>
                    </div>
                </form>

                <button
                    onClick={(e) => {
                        this.parentEvents(123, e);
                    }}>
                    查看更多
                </button>
                <form action='https://www.baidu.com'>
                    <div className='child'>
                        <h1>hello world</h1>
                        <button onClick={this.parentEvent}>阻止默认行为</button>
                    </div>
                </form>

                <button
                    onClick={(e) => {
                        this.parentEvents(123, e);
                    }}>
                    查看更多
                </button>
                <form action='https://www.baidu.com'>
                    <div className='child'>
                        <h1>hello world</h1>
                        <button onClick={this.parentEvent}>阻止默认行为</button>
                    </div>
                </form>

                <button
                    onClick={(e) => {
                        this.parentEvents(123, e);
                    }}>
                    查看更多
                </button>
                <form action='https://www.baidu.com'>
                    <div className='child'>
                        <h1>hello world</h1>
                        <button onClick={this.parentEvent}>阻止默认行为</button>
                    </div>
                </form>

                <button
                    onClick={(e) => {
                        this.parentEvents(123, e);
                    }}>
                    查看更多
                </button>
            </div>
        );
    }

    parentEvent = (e) => {
        e.preventDefault();
    };

    parentEvents = (num, e) => {
        console.log(num);
        console.log(e);
    };
}

ReactDOM.render(<Parent />, document.querySelector("#root"));
