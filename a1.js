const parent=React.createElement("div",{id:"parent"}, React.createElement(
    "div",{id:"child"},React.createElement(
        "h2",{},"hi i am h2"),React.createElement(
            "h4",{},"hi i am h2")));

const heading=React.createElement("h1",{  } ,"hello world from js!");

const root= ReactDOM.createRoot(document.getElementById("x1"));
root.render(parent);
console.log(parent);
