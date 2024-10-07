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
            {`A protocol carries everything it needs to fulfill its purpose 🐝`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Alongside the way a protocol applies to a target model by adding protocol fields and other behaviors, every protocol can declare its own models, seeding, configuration, routes, cron jobs, services and more.
          </p>
          <p>
         
<SVGPlus name={'orchestration'} 
light={require('@site/static/diagrams/light/protocol_protocols.svg').default} 
dark={require('@site/static/diagrams/dark/protocol_protocols.svg').default} 
/>
          </p>
          <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/concepts/protocols">
              What is a protocol?
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