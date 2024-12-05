import "./heading.css";

class Heading {
    render(){
        const title = document.createElement("h1");
        title.textContent = "AVI-SPL";
        title.classList.add("titleTag");
        const body = document.querySelector("body");
        body.appendChild(title)
    }
}

export default Heading;