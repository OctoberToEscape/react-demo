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
        console.log(document.querySelector(".box3").scrollTop);
        if (val === 1)
            document.querySelector(".box1").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        else if (val === 2)
            document.querySelector(".box2").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        else if (val === 3)
            document.querySelector(".box3").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        else
            document.querySelector(".box4").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
    }
    render() {
        return (
            <div>
                <button onClick={this.eventClick.bind(this, 1)}>问答</button>
                <button onClick={this.eventClick.bind(this, 2)}>圈子</button>
                <button onClick={this.eventClick.bind(this, 3)}>课程</button>
                <button onClick={this.eventClick.bind(this, 4)}>直播</button>
                {/* 下方内容 */}
                <div
                    className='box1'
                    style={{ background: "#ccc", height: "1000px" }}>
                    问答
                </div>
                <div
                    className='box2'
                    style={{ background: "red", height: "1000px" }}>
                    圈子
                </div>
                <div
                    className='box3'
                    style={{ background: "yellow", height: "1000px" }}>
                    课程
                </div>
                <div
                    className='box4'
                    style={{ background: "blue", height: "1000px" }}>
                    直播
                </div>
            </div>
        );
    }
}

ReactDOM.render(<TabComponent />, document.querySelector("#root"));
