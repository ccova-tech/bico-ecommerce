import dashboardImage from '/dashboard.png'
import deportista from '/deportista.jpg'
import dashboard2 from '/dashboard2.webp'
import dashboard3 from '/dashboard3.png'

export default function Beneficios() {
    return (
      <>
        <section className='h-[100vh] 2xl:h-[calc(100vh-60px)] flex justify-center items-center border-b border-solid border-[#E7E9EE]'>
          <div className='w-auto relative h-full'>
            <img src={dashboard2} alt="dashboard" className='w-[250px] 2xl:w-[350px] rounded-lg relative top-[10%]'/>
            <img src={dashboard3} alt="dashboard" className='w-[250px] 2xl:w-[350px] rounded-lg relative top-[5%] shadow-2xl left-6'/>
          </div>
          <div className='h-4/5'>
            <img src={dashboardImage} alt="dashboard" className='h-full rounded-lg shadow-2xl'/>
          </div>
          <div className='w-auto relative h-full'>
            <div className='absolute top-[20%] flex justify-center w-full'><span className='w-40'><Bicologo/></span></div>
            <img src={deportista} alt="dashboard" className='w-[250px] 2xl:w-[350px] rounded-lg relative -left-5 top-[40%] shadow-2xl'/>
          </div>
        </section>
        <div className='border-b-2 border-solid'>
          <h2 className='my-48 text-6xl 2xl:text-8xl mx-10 text-center'>
            Conectamos <span className='font-bold'>marcas</span> con <span className='font-bold'>clientes</span> usando las ultimas tecnologías y las mejores experiencias de compras
          </h2>
        </div>
      </>
    )
  }

  const Bicologo = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.29 154.09"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path fill="#035bc8" d="M146,84.68c0-9.77-1.64-19.2-7.82-27.24-1.15-1.5-2.41-2.92-3.73-4.42L121.6,65.94c5.31,5.6,6,12.54,6,19.66q0,33,.08,66v2.5h18.44v-2.42C146.08,129.33,146.14,107,146,84.68Z"/><path fill="#035bc8" d="M57.77,49.26a51.9,51.9,0,0,0-25.52,6.67L45.44,69.12a35,35,0,0,1,6.45-2C70.8,63.29,89.8,77.82,91.41,97.07c1,11.41-2,21.46-10.06,29.5-9.3,9.22-20.63,12.24-33.21,8.24-12.73-4.05-20.34-13.06-23-26.13-.49-2.34-.56-4.77-.82-7.16,0-.22,0-.44,0-.66h0v-.28c0-.07,0-.13,0-.2V61.08q0-14.8-.06-29.62c-.05-9.77-1.64-19.2-7.82-27.24C15.35,2.79,14.16,1.43,12.9,0L0,12.9c5.15,5.57,5.8,12.43,5.81,19.48q0,33,.08,66v.51c-.07,1.11-.12,2.23-.13,3.37-.14,23.47,19,52,52.8,51.85,28.31-.12,51.86-24.16,51.74-52.87A51.88,51.88,0,0,0,57.77,49.26Z"/><path fill="#035bc8" d="M337.77,49.26A51.43,51.43,0,0,0,303,62.58h0l-.12.12c-1,.92-2,1.88-2.89,2.87L252.2,113.09,242,123.21l-4.45,4.42a30.68,30.68,0,0,1-9,6.35c-6.87,3.06-14.48,3.41-22.61.83-12.73-4.05-20.34-13.06-23-26.13-.49-2.34-.56-4.77-.82-7.16.37-17.27,11.41-31.08,27.61-34.39a32.77,32.77,0,0,1,27,6.92l4.88,4.79.09.1,5.4,5.31,12.64-12.64-3.54-3.54h0l-5.95-6-.93-.93h0a52.4,52.4,0,0,0-33.72-11.93c-29.25.08-51.84,23.32-52,53-.14,23.47,19,52,52.8,51.85a51,51,0,0,0,31.46-11.17h0l0,0c1.31-1,2.57-2.15,3.79-3.31h0l.52-.52,1-1,23.75-23.75,22,22.07a50.88,50.88,0,0,0,5.13,5.15l.15.16h0a51.15,51.15,0,0,0,34.39,12.41c28.31-.12,51.86-24.16,51.74-52.87A51.86,51.86,0,0,0,337.77,49.26Zm23.59,77.31c-9.3,9.22-20.63,12.24-33.21,8.24a37.24,37.24,0,0,1-6.82-2.92,30,30,0,0,1-6.64-5.13l-.33-.33,0,0h0l-24.7-24.67,11.63-11.81,15.68-15.69a34,34,0,0,1,14.95-7.11c18.91-3.85,37.91,10.68,39.52,29.93C372.36,108.47,369.46,118.52,361.36,126.57Z"/></g></g></svg>)