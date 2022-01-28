const ulMenuHeader= document.getElementById('menu-header');
let secciones = [
        {
         texto: "INICIO",
         href:"../index.html"
        }, 
                    
        { 
            texto: "Nosotros",
         href: "../paginas/nosotros.html" 
        }, 
         { 
            texto: "Contacto",
            href:"../paginas/contacto.html"
        }, 
    
];

        for (let i = 0; i < secciones.length; i++) {
    
        // Crea dinamicamente los <li><li/> del menu en el header
        let itemMenu = this.document.createElement('li');
        itemMenu.id = secciones[i].texto + 1;
        itemMenu.className = "nav-item";

        ulMenuHeader.appendChild(itemMenu);

        // Crea los <a><a/>
        const liMenuHeader = document.getElementById(itemMenu.id);

        let aMenuHeader = this.document.createElement('a');
        aMenuHeader.textContent = `${ secciones[i].texto }`;
        // aMenuHeader.id = secciones[i] + 1;
        aMenuHeader.href = secciones[i].href;
        aMenuHeader.className = "nav-link fw-bold text-uppercase menuSecciones";

        liMenuHeader.appendChild(aMenuHeader);

    }