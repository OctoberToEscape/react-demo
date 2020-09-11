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

class ParentCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        };
    }
    changeActive() {
        this.setState({
            isActive: !this.state.isActive,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.changeActive.bind(this)}>
                    控制子元素显示
                </button>
                <ChildCom isActive={this.state.isActive} />
            </div>
        );
    }
}

class ChildCom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let activeClass = null;
        activeClass = this.props.isActive ? "active" : "";

        return (
            <div className={"content " + activeClass}>
                <h1>我是子元素</h1>
            </div>
        );
    }
}

ReactDOM.render(<ParentCom />, document.querySelector("#root"));
