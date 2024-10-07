import React from "react"
import EngineWidget from '@site/src/components/domain/widgets/engine.js'

export default props => {
  const { } = props

  return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        pt-6
        `}>
      <div class={`
          text-right
          flex
          justify-center
          align-middle
          h-full
        `}>
        {/* <LogoAnimated /> */}
        {/* <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`          
          w-[180px]
          h-[180px]`}
          role="img" /> */}
      </div>
      <div class={`                
          flex
          justify-center                 
        `}>
        <div class={`
          justify-center
          text-center
          pt-8     
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`Community engines 🌾`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Servable was built from the ground up to use protocols in all ways possible. The <b>Servable service</b> itself is a protocol (app protocol). The Servable server uses core protocols like <i>manualable</i>, <i>disposableorphans</i> and more.
          </p>
          <div className="
            grid
            grid-cols-1
            md:grid-cols-1 
            place-items-center                     
            gap-x-3
            gap-y-4
            justify-center   
            mx-2            
          ">            
            <EngineWidget id={'@servable/parse-server-engine'} mode="minimal" />
          </div>
        </div>
      </div>
    </div>
  </div>
}