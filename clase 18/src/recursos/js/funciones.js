function renderizarProductos(productos, contenedor){
    let productosHTML = ''
    productos.array.forEach((producto)=> {
        productosHTML+=`
        <article>
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>
                ${producto.descripcion}
            </p>
            <ul>
                <li>Talles ${producto.talles.join(' ')}</li>
                <li>Precio $ ${producto.precio}</li>
                
            </ul>
        </article>
        `;
        
    });
    contenedor.innerHTML = productosHTML
}

export {renderizarProductos}