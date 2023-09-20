import SVGHero from './SVGHero'
import {
  css, 
  phone, 
  phoneFront, 
  phoneContent, 
  dashboard, 
  dashboardContentL, 
  dashboardContentR, 
  dashboardSearch, 
  dashboardSearchContent, 
  dashboardGraph
} from './phone-dashboard-css'
import zapatophone from '/zapatophone.png'
import Bicologo from './Bicologo'
import dashboard1 from '/dashboard.png'


export default function HeroBico() {
  return (
    <>
      <section className='h-[110vh] 2xl:h-[90vh] relative overflow-hidden border-b border-solid border-[#E7E9EE] mt-[60px]'>
        <div style={css} className='bg-[#035bc8] h-3/5'>
            <SVGHero/>
        </div>
        <div style={dashboard} className='absolute left-[calc(50%+220px)] top-[5%] 2xl:top-[15%]'>
            <div style={dashboardContentL}>
                <svg width="20" height="20" viewBox="0 0 20 20"><path fill="#FFF" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z"/></svg>
                <span className='w-10'><Bicologo/></span>
                <svg width="10" height="4" viewBox="0 0 10 4"><polyline fill="none" stroke="#FFF" points="1 0 5 4 9 0"/></svg>
            </div>
            <div style={dashboardContentR}>
                <div style={dashboardSearch}>
                    <div style={dashboardSearchContent}>
                        <svg className="w-[10px] mt-0 mr-[5px] mb-0 ml-[6px]" viewBox="0 0 10 10"><circle cx="4" cy="4" r="3.5" fill="none" stroke="#62788D"/><path fill="#62788D" d="M6.15 6.15c.2-.2.5-.2.7 0l2.12 2.12a.5.5 0 1 1-.7.7L6.15 6.85a.5.5 0 0 1 0-.7z"/></svg>
                        Bico Copilot
                    </div>
                    <svg width="70" height="12" viewBox="0 0 70 12"><path fill="#515de1" d="M3.12 10.5h3.76C6.7 11.37 5.91 12 5 12c-.91 0-1.7-.63-1.88-1.5zm5.72-3.7l.94.92c.22.22.28.54.16.82a.77.77 0 0 1-.7.46H.76a.77.77 0 0 1-.71-.46.74.74 0 0 1 .16-.82l.94-.92V3.75A3.8 3.8 0 0 1 5 0a3.8 3.8 0 0 1 3.84 3.75V6.8z"/><path fill="#525F7F" d="M34 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-.75-5.93v.3a.75.75 0 0 0 1.44.29 2.63 2.63 0 1 0-3.32-2.53.75.75 0 0 0 1.51-.01A1.13 1.13 0 0 1 34 3a1.12 1.12 0 0 1 0 2.23.75.75 0 0 0-.75.83zM34 10.5a1.13 1.13 0 1 0 0-2.25 1.13 1.13 0 0 0 0 2.25zm30-2.25c1.09 0 2.13-.41 2.92-1.15l1.33.5A2.7 2.7 0 0 1 70 10.12v1.12c0 .41-.34.75-.75.75h-10.5a.75.75 0 0 1-.75-.75v-1.13C58 9 58.7 8 59.76 7.6l1.32-.5A4.23 4.23 0 0 0 64 8.26zM63.85 0h.3a2.63 2.63 0 0 1 2.61 2.84l-.12 1.48a2.65 2.65 0 0 1-5.28 0l-.12-1.48A2.63 2.63 0 0 1 63.85 0z"/></svg>
                </div>
                <div style={dashboardGraph}>
                  <img src={dashboard1} alt="dashboard" className='w-full h-[100%] rounded-lg'/>
                    {/* <video className="h-[100%] rounded-lg" autoPlay muted playsinline loop>
                        <source src={videodashboard} type="video/mp4"/>
                    </video> */}
                </div>
                {/* <div style={dashboardGraph}></div> */}
            </div>
        </div>
        <div className='absolute top-0 h-full w-full flex justify-center'>
            <div className='w-[1080px] flex'>
                <div className='basis-1/2 flex flex-col justify-start mt-[5%] 2xl:mt-[14%]'>
                    <span className='w-[90%] mb-8 2xl:mb-6'>
                      <Bicologo/>
                    </span>
                    <div className='mt-40 2xl:mt-48'>
                      <h1 className='mb-4 text-2xl text-[#035bc8] font-bold'>Automatización de Ecommerce</h1>
                      <h2 className='2xl:hidden text-[#142032] text-2xl 2xl:text-3xl font-bold leading-tight'>
                          Desarrollamos tecnologías para la gestión automatizada de canales de ventas online
                      </h2>
                      <h2 className='hidden 2xl:block text-[#142032] text-2xl 2xl:text-3xl font-bold leading-tight'>
                          Desarrollamos tecnologías <br/> para la gestión automatizada <br/> de canales de ventas online
                      </h2>
                    </div>
                </div>
                <div className='basis-1/2 flex justify-center mt-[10%] 2xl:mt-[20%]'>
                    <div style={phone} className='relative'>
                        <div style={phoneFront}>
                            <div style={phoneContent} className='flex justify-center relative'>
                                {/* <video className="h-full w-[95%] rounded-[28px]" autoPlay muted playsinline loop>
                                    <source src={videophone1} type="video/mp4"/>
                                </video> */}
                                <div className='w-[364px] h-[533px] absolute top-0 shadow-xl rounded'>
                                    <img src={zapatophone} alt="zapatophone" className='absolute top-0 w-[800px]'/>
                                </div>
                            </div>
                        </div>
                        <div className='absolute -bottom-10 2xl:-bottom-32 -right-40 w-[300px]'>
                            {/* <StaticImage src="../images/sensorqkshadow.png" alt="sensor queclink"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}