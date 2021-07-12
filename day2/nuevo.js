/*
<
nav class = "navbar navbar-light bg-light" >
    <
    div class = "container-fluid" >
    <
    a class = "navbar-brand"
href = "#" >
    <
    img src = "/docs/5.0/assets/brand/bootstrap-logo.svg"
alt = ""
width = "30"
height = "24"
class = "d-inline-block align-text-top" >
    Bootstrap <
    /a> <
    /div> <
    /nav>*/


let ingredientes = [
    "Huevos",
    "Queso",
    "Harina",
    "Leche",
    "Sal",
    "Azucar",
    "Verduras",
    "Chocomilk",
];

let elements = React.createElement("section", {
        id: "receta"
    },
    React.createElement("h1", null, "Croquetas"),
    React.createElement("ul", {
            className: "Ingredientes"
        },
        ingredientes.map((el, i) =>
            React.createElement("li", {
                key: i
            }, el))
    )
);

ReactDOM.render(elements, document.getElementById("root"));