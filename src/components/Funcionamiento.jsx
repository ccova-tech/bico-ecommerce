import { Popover, Button } from '@radix-ui/themes';
import img1 from '/12.webp'
import img2 from '/1.webp'
import img3 from '/2.webp'
import img4 from '/3.mp4'
import img5 from '/01.mp4'
import img6 from '/02.mp4'
import img7 from '/03.mp4'
import img8 from '/24.gif'
import img9 from '/05.mp4'
import img10 from '/10.gif'
import img11 from '/11.mp4'
import img12 from '/12.gif'
import img13 from '/13.mp4'
import img14 from '/14.mp4'

export default function Funcionamiento() {
    return (
      <div className='flex justify-center items-center border-b border-solid'>
        <section className='border-x border-solid flex relative w-[1080px]'>
          <div className='flex flex-col w-1/2'>
            <div className='h-[100vh] mx-4'>
              <h3 className='font-bold text-4xl mt-10 2xl:mt-24 mb-6 text-[#035bc8]'>Plataforma Bico</h3>
              <p className='text-xl mb-6'>Plataforma tecnológica conformada por un <span className='font-bold'>conjunto de soluciones de software</span> enfocados en la automatización de procesos y gestión automatidada de canales de ventas online:</p>
              <p className='text-xl'>1. Librería de  Componentes UI/UX</p>
              <p className='text-xl'>2. Bico Copilot / Microservices</p>
              <p className='text-xl'>3. Bico Headless Commerce</p>
            </div>
            <div className='h-[100vh] mx-4'>
              <h3 className='font-bold text-4xl mt-10 mb-6 text-[#035bc8]'>Librería de Componentes</h3>
              <p className='text-xl mb-6'>Conjunto de <span className='font-bold'>scripts e interfaces de usuario</span> modernas y modulares.</p>
              <p className='text-xl'>Optimizados para funcionar en el ecosistema actual de canales digitales de adquisisión y ventas, y capaces de integrarse eficientemente con los microservicios Bico y las distintas plataformas de ecommerce y herramientas de terceros existentes en el mercado.</p>
            </div>
            <div className='h-[100vh] mx-4'>
              <h3 className='font-bold text-4xl mt-10 mb-6 text-[#035bc8]'>Bico Copilot</h3>
              <p className='text-xl mb-6'>Conjunto de <span className='font-bold'>microservicios</span> integrados y escalables, orientados al análisis y gestión automatizada de ventas online.</p>
              <p className='text-xl'>Desarrollados utilizando las últimas tecnologías, y soportada en la plataforma cloud de Amazon Web Services.</p>
            </div>
            <div className='h-[70vh] mx-4'>
              <h3 className='font-bold text-4xl mt-10 mb-6 text-[#035bc8]'>Headless Commerce</h3>
              <p className='text-xl mb-6'>Connjunto de <span className='font-bold'>soluciones API´s y de administración</span> integradas, que permiten centralizar las operaciones transversales de la gestión de ecommerce y canales de ventas online:</p>
              <p className='text-xl'>- Logística y Fulfillment.</p>
              <p className='text-xl'>- Administración.</p>
              <p className='text-xl'>- Customer Success.</p>
              <p className='text-xl'>- Marketing.</p>
              <p className='text-xl'>- Ventas.</p>
              <p className='text-xl'>- Sistemas de Gestión de Proveedores.</p>
              <p className='text-xl'>- Sistemas de Gestión Empresarial.</p>
              <p className='text-xl'>- <span className='font-bold'>...</span></p>
            </div>
          </div>
          <div className='self-stretch w-1/2 relative pt-10'>
            <div className='mt-[60px] top-[60px] 2xl:top-[20%] sticky'>

              <div className='border border-solid border-[#035bc8] rounded bg-white shadow-xl'>
                <div className='mx-4 rounded-b'>
                  <div className='text-center border-b border-gray-400 border-solid p-1'>Canales de ventas online</div>
                  <div className='h-[52px] px-2 flex justify-between items-center gap-2'>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>rrss</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>iot</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>online store</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>display</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>market</div>
                  </div>
                </div>
                <div className='mx-4 rounded-t'>
                  <div className='text-center border-b border-gray-400 border-solid p-1'>Librería de Componentes UX</div>
                  <div className='h-[52px] px-2 flex justify-between items-center gap-2'>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <img src={img1} alt="imagen de muestra" />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <img src={img2} alt="imagen de muestra" />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <img src={img3} alt="imagen de muestra" />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 250 }}>
                          <video src={img4} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <video src={img5} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <video src={img6} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <video src={img7} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <img src={img8} alt="imagen de muestra" />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <video src={img9} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <img src={img10} alt="imagen de muestra" />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                        <video src={img11} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <img src={img12} alt="imagen de muestra" />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                          <video src={img14} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                    <div className='border border-solid border-gray-400 rounded flex justify-center items-center'>
                      <Popover.Root>
                        <Popover.Trigger>
                          <Button variant="soft" />
                        </Popover.Trigger>
                        <Popover.Content style={{ width: 450 }}>
                        <video src={img13} alt="imagen de muestra" autoplay='true' loop='true' />
                        </Popover.Content>
                      </Popover.Root>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border-r-2 border-solid border-[#035bc8] w-1/2 h-20 2xl:h-24'></div>

              <div className='mx-4 border border-solid border-[#035bc8] rounded bg-white shadow-xl'>
                <div className='text-center border-b border-solid border-gray-400 p-1'>Bico Copilot / Microservices</div>
                <div className='h-[52px] px-2 flex justify-between items-center gap-2'>
                  <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>clientes</div>
                  <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>pedidos</div>
                  <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>productos</div>
                  <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>proveedores</div>
                </div>
              </div>
              
              <div className='border-r-2 border-solid border-[#035bc8] w-1/2 h-20 2xl:h-24'></div>

              <div className='border border-solid border-[#035bc8] rounded bg-white shadow-xl'>
                <div className='mx-4 rounded'>
                  <div className='text-center border-b border-solid border-gray-400 p-1'>Bico Headlesss Commerce</div>
                  <div className='h-[52px] px-2 flex justify-between items-center gap-2'>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>admin</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>fulfillment</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>c-success</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>sales</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>mkt</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>erp</div>
                  </div>
                </div>
                <div className='mx-4 rounded'>
                  <div className='text-center border-b border-solid border-gray-400 p-1'>Proveedores</div>
                  <div className='h-[52px] px-2 flex justify-between items-center gap-2'>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>fabricantes</div>
                    <div className='grow h-10 border border-solid border-gray-400 rounded flex items-center justify-center text-sm'>mayoristas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }