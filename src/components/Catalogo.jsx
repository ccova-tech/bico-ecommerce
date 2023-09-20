
export default function Catalogo() {
  return (
    <div className='flex justify-center items-center border-b border-solid bg-slate-100'>
      <section className='border-x border-solid w-[1080px]'>
        <h2 className='mt-24 mb-12 font-bold text-6xl 2xl:text-8xl text-center w-full'>Modelo de Negocio: Tiendas Nicho</h2>
        <p className='mb-24 text-3xl text-center w-full'>
          Comercialización online de productos y marcas agrupadas en tiendas nicho <br/> 
          <span className='text-2xl text-[#035bc8]'>cada tienda nicho es un grupo de canales de adquisición y ventas</span>
        </p>
        
        <div className='flex pb-48'>

          <div className='w-1/2 ml-6 mr-3 mt-24'>
          <h3 className='font-bold text-4xl text-center mb-12 text-[#035bc8]'>Nichos Aspiracionales</h3> 
            <div className='bg-white rounded-md shadow-2xl group mb-12'>
              <div className='w-[510px] h-[550px] border border-solid border-gray-100 rounded-md'>
                <div className='group-hover:h-3/5 h-3/6 transition-all'>
                  <div className='h-full m-1 bg-slate-100 rounded-t-md bg-cover relative'>
                    <div className={`w-4/5 h-4/5 bottom-px right-0 absolute bg-[url('/nicho-smart.jpg')] bg-cover bg-no-repeat grayscale group-hover:grayscale-0`}></div>
                  </div>
                </div>
                <div className='group-hover:h-2/5 h-3/6 rounded-b-md p-8 transition-all bg-gradient-to-r from-cyan-500 to-blue-500'>
                  <h4 className='font-bold text-2xl flex justify-center items-center h-full group-hover:text-white'>Tecnología Smart</h4>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-md shadow-2xl group mb-12'>
              <div className='w-[510px] h-[550px] border border-solid border-gray-100 rounded-md'>
                <div className='group-hover:h-3/5 h-3/6 transition-all'>
                  <div className='h-full m-1 bg-slate-100 rounded-t-md bg-cover relative'>
                    <div className={`w-4/5 h-4/5 bottom-px right-0 absolute bg-[url('/nicho-joyas.jpg')] bg-cover grayscale group-hover:grayscale-0`}></div>
                  </div>
                </div>
                <div className='group-hover:h-2/5 h-3/6 rounded-b-md p-8 transition-all bg-gradient-to-r from-cyan-500 to-blue-500'>
                  <h4 className='font-bold text-2xl flex justify-center items-center h-full group-hover:text-white'>Joyas y Accesorios Femeninos</h4>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-md shadow-2xl group'>
              <div className='w-[510px] h-[550px] border border-solid border-gray-100 rounded-md'>
                <div className='group-hover:h-3/5 h-3/6 transition-all'>
                  <div className='h-full m-1 bg-slate-100 rounded-t-md bg-cover relative'>
                    <div className={`w-4/5 h-4/5 bottom-px right-0 absolute bg-[url('/nicho-aspiracional.jpg')] bg-cover grayscale group-hover:grayscale-0`}></div>
                  </div>
                </div>
                <div className='group-hover:h-2/5 h-3/6 rounded-b-md p-8 transition-all bg-gradient-to-r from-cyan-500 to-blue-500'>
                  <h4 className='font-bold text-2xl flex justify-center items-center h-full group-hover:text-white'>Otros Nichos Aspiracionales...</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className='w-1/2 mr-6 ml-3'>
            <h3 className='font-bold text-4xl text-center mb-12 text-[#035bc8]'>Nichos Vida Saluable</h3> 
            <div className='bg-white rounded-md shadow-2xl group mb-12'>
              <div className='w-[510px] h-[550px] border border-solid border-gray-100 rounded-md'>
                <div className='group-hover:h-3/5 h-3/6 transition-all'>
                  <div className='h-full m-1 bg-slate-100 rounded-t-md bg-cover relative'>
                    <div className={`w-4/5 h-4/5 bottom-px right-0 absolute bg-[url('/nichofit.jpg')] bg-cover grayscale group-hover:grayscale-0`}></div>
                  </div>
                </div>
                <div className='group-hover:h-2/5 h-3/6 rounded-b-md p-8 transition-all bg-gradient-to-r from-cyan-500 to-blue-500'>
                  <h4 className='font-bold text-2xl flex justify-center items-center h-full group-hover:text-white'>Sport & Fit</h4>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-md shadow-2xl group mb-12'>
              <div className='w-[510px] h-[550px] border border-solid border-gray-100 rounded-md'>
                <div className='group-hover:h-3/5 h-3/6 transition-all'>
                  <div className='h-full m-1 bg-slate-100 rounded-t-md bg-cover relative'>
                    <div className={`w-4/5 h-4/5 bottom-px right-0 absolute bg-[url('/nicho-salud.jpg')] bg-cover grayscale group-hover:grayscale-0`}></div>
                  </div>
                </div>
                <div className='group-hover:h-2/5 h-3/6 rounded-b-md p-8 transition-all bg-gradient-to-r from-cyan-500 to-blue-500'>
                  <h4 className='font-bold text-2xl flex justify-center items-center h-full group-hover:text-white'>Salud & Medical Wearables</h4>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-md shadow-2xl group'>
              <div className='w-[510px] h-[550px] border border-solid border-gray-100 rounded-md'>
                <div className='group-hover:h-3/5 h-3/6 transition-all'>
                  <div className='h-full m-1 bg-slate-100 rounded-t-md bg-cover relative'>
                    <div className={`w-4/5 h-4/5 bottom-px right-0 absolute bg-[url('/nicho-vidasaludable.jpg')] bg-cover grayscale group-hover:grayscale-0`}></div>
                  </div>
                </div>
                <div className='group-hover:h-2/5 h-3/6 rounded-b-md p-8 transition-all bg-gradient-to-r from-cyan-500 to-blue-500'>
                  <h4 className='font-bold text-2xl flex justify-center items-center h-full group-hover:text-white'>Otros Nichos Vida Saludable...</h4>
                </div>
              </div>
            </div>
          </div>

        </div>


      </section>
    </div>
  )
}