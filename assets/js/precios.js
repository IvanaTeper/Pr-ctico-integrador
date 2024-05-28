class Comments {
    constructor({ id, postId, comment }) {
        this.id = id;
        this.post_id = postId;
        this.comment = comment;

    }

    #transformarTexto() {
        this.comment.slice(0, 70) + "..."
    }


    printDisplay() {
        let ul = document.getElementByClassName("comments");
        let li = document.createElement("li");
        let texto = `${this.id} : ${this.post_id} : ${this.#transformarTexto()}`;
        li.innerHTML = texto;
        ul.appendChild(li);
    }

}

// MODULO OBJETO

class Viaje {
    constructor({ nombre_ciudad, precio, oferta, descuento, pasajes }) {
        this.nombreCiudad = nombre_ciudad;
        this.precio = precio;
        this.oferta = oferta;
        this.descuento = descuento;
        this.pasajes = pasajes
    }

    printDisplay() {
        let container = document.getElementById("container");

        let div = document.createElement("div");

        div.innerHTML = `
        <h3 class="color">${this.nombreCiudad}</h3>
        <ul>
            <li class="comment">${this.precio}</li>
            <li class="comment">${this.descuento}</li>
        </ul>
        <details>
            <summary>Detalles extras</summary>
            ${this.pasajes} | ${this.oferta}
        </details>
        `;

        container.appendChild(div);
    }


}

// el endpoint donde busca la data

const URL = "https://sheetdb.io/api/v1/8eb2ys5rqwxbc";

fetch(URL)
    .then(res => res.json())

    .then(data => data.map(d => new Viaje(d)).forEach(viaje => viaje.printDisplay()))
    .catch(error => console.log({ error }))


let btn = document.querySelector("#loadData")
btn.addEventListener(
    "click",
    () => alert("No olvide dejar su mail en el form superior para recibir ofertas!")
)