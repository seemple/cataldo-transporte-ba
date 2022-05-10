
const Titulo = ({title="APP",subtitle="Lorem Ipsum..."}) =>{
    return ( 
        <div className="container mx-auto mb-8">
            <div className="text-center px-3 lg:px-0">
                <h1
                className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
                >
               {title}
                </h1>
                <p
                className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
                >
                {subtitle}
                </p>

                <button
                className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
                >
                Registrarse
                </button>
                <a
                href="#"
                className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
                >Saber más</a
                >
            </div>
        </div>        
    )
}

export default Titulo;