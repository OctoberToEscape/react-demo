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
        this.state = {
            title: null,
        };
    }
    render() {
        return (
            <div>
                <h1>子元素传递给父元素的数据：{this.state.title}</h1>
                <Child changeTitle={this.changeTitle} />
            </div>
        );
    }
    changeTitle = (title) => {
        this.setState({ title });
    };
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "我是你爹",
        };
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.props.changeTitle(this.state.msg);
                    }}>
                    给父元素传递数据
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Parent />, document.querySelector("#root"));
