export default function Add(parent: HTMLElement) {
    const element = document.createElement("div");
    element.innerHTML = "I am a new div";
    parent.appendChild(element);
}
