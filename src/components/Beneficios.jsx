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