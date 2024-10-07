import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'
import SVGPlus from '@site/src/components/generic/svgplus'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        pt-6`}>
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
            {`Every protocol has models, every model can have protocols 🐝 🍯`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Servable is not a traditional Node JS framework as it does not expose any api or route by itself, nor does it contain any server capacity. Instead it pollinates database tables (models) with protocols (independent and agnostic protocol oriented extensions) so that a traditional Node JS framework (adapted by a framework engine) can use them.
          </p>
          <p>
          <SVGPlus name={'orchestration'} 
light={require('@site/static/diagrams/light/architecure_protocols_models.svg').default} 
dark={require('@site/static/diagrams/dark/architecure_protocols_models.svg').default} 
/>
          </p>
          <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/concepts/components">
              Learn more about pollination framework
            </Link>
          </p>
          {/* <div className={``}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/concepts/philosophy">
              Documentation
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
}