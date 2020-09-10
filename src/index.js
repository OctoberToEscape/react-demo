import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
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

class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        };
    }
    eventClick(val) {
        if (val === 1) this.setState({ isActive: true });
        else this.setState({ isActive: false });
    }
    render() {
        return (
            <div>
                <button onClick={this.eventClick.bind(this, 1)}>内容1</button>
                <button onClick={this.eventClick.bind(this, 2)}>内容2</button>
                {/* 下方内容 */}
                <div
                    style={{ display: this.state.isActive ? "block" : "none" }}>
                    展示内容1的内容1
                </div>
                <div
                    style={{
                        display: this.state.isActive ? "none" : "block",
                    }}>
                    展示内容2的内容2
                </div>
            </div>
        );
    }
}

class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    render() {
        return (
            <div>
                <h1>当前时间：{this.state.time}</h1>
            </div>
        );
    }

    //完成渲染完成
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }
}

ReactDOM.render(<TabComponent />, document.querySelector("#root"));
