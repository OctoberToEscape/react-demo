import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root")
// );

// serviceWorker.unregister();

// const time = new Date().toLocaleTimeString();

// const str = "当前时间是:";

// const element = (
//     <div>
//         <h1>react-demo</h1>
//         <h2>{str + time}</h2>
//     </div>
// );

// ReactDOM.render(element, document.querySelector("#root"));

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
                    查看
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
