import Item from "./Item";

export default function ItemList({items,error=false}){

    { console.log(error) }
    return(

        <div className="w-full bg-white mx-auto px-0">

        { items.length>0 &&

              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Nuestros Productos</h2>
      
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {items.map((item) => <Item features={item} key={item.id} />)}
                  </div>
                  
              </div>

        }

        { error &&
            <div className="pt-6">

            <div className="bg-red-100 border w-1/2 mx-auto border-red-400 text-red-700 px-4 p-3 rounded " role="alert">
                <strong className="font-bold">¡Ups!</strong>
                <span className="block sm:inline ml-2">No se encontró la categoria solicitada.</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
            </div>

        }

        </div>


      );

}