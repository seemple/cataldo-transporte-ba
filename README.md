# DeTODO Store
## _Una aplicación tipo e-commerce desarrollada con React JS y Firebase._
Esta aplicación es el trabajo final del curso de React desarrollado en CoderHouse. La misma consiste un el desarrollo de un e-commerce, donde se pueden agregar/eliminar productos al carrito de compras y finalmente generar una orden de compra.

### **Stack y tecnologías utilizadas**
El Stack elegido se compone de las siguientes librerías y servicios:
1. ReactJS ( para el desarrollo de la UI)
2. TailwindCSS ( para los estilos CSS de la UI )
3. Firebase ( para contar con una base de datos serverless )

El mencionado stack utiliza los siguientes lenguajes:
1. Javascript
2. HTML / CSS
3. NoSQL (Firebase)

### Instalación
Para instalar el proyecto debes clonar el repositorio de código en tu equipo local:
- Via SSH: [git@github.com:seemple/detodo-store.git](git@github.com:seemple/detodo-store.git)
- Via HTTPS: https://github.com/seemple/detodo-store.git

Una vez clonado debes ejecutar desde la terminal  el comando `npm install`. El mismo instalará todas las dependencias del proyecto para que puedas comenzar a trabajar con él.

### Ejecución
Desde la terminal, utiliza el comando `npm start`. Ejecutarás la app en modo desarrollo. Puedes navegarla en [http://localhost:3000](http://localhost:3000) desde tu  navegador.
La app se re-iniciará cuando realices cambios en el código. Y puedes ver lint errors en la consola de tu editor.


### Importación de items:
La app cuenta con una funcionalidad para importar productos en formato JSON hacia la base de datos alojada en la nube de FireStore.

Para ello, puedes navegar a **/importar-productos**. Desde esta URL podrás importar toda la información que se encuentra en el archivo JSON ubicado en **/data/oldMockupData.js**.

**¡Cuidado!** Antes de importar asegurate de respetar el formato pre-establecido en el archivo *oldMoldMockupData.js* para que la app funcione correctamente.

### Produccion
Des terminal, utiliza el comando `npm run build` . Este compila la app para producción en la carpeta `build`. 

## Uso de la app
Como mencionamos anteriormente, se trata de una app tipo "e-commerce". Para utilizarla, debes navegar las categorías de productos. Al hacerlo, encontrarás diferentes items. Al hacer click en alguno de ellos, podrás ver el detalle del item y agregar al carrito la cantidad de productos que desees.

En la navegación principal, podrás consultar el carrito en todo momento y realizar las modificaciones que desees ( agregar o quitar productos )

Finalmente, cuando estes conforme con tu pedido, podrás proceder a realizar una nueva orden de compra. 

### DEMO
Puede probar el uso de la app [en esta versión demo](https://detodo-store-martin1.vercel.app/)
