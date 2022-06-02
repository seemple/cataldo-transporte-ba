import Item from "./Item";

export default function ItemList({items}){

    return(
        <div className="w-full bg-white mx-auto px-0">
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Nuestros Productos</h2>
      
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {items.map((item) => <Item features={item} key={item.id} />)}
                  </div>
      
              </div>
          </div>
      );

}