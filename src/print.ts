
import Add from './add';

export default function printMe() {
    const fun = document.getElementById("fun");
    fun.onclick = () => {
        const parent = document.getElementById("main");
        Add(parent);
    }
    console.log("testing");
}

