import _ from 'lodash';
import printMe from './print'

function component() {
    const element = document.createElement("div");
    element.setAttribute("id", "main");
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    
    const btn = document.createElement('button');
    btn.innerHTML = 'Click MEOW and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

function component2() {
    const element = document.createElement("button");
    element.setAttribute("id", "fun");
    element.innerHTML = "Press me for fun";
    return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());