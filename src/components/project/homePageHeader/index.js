import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
// import LogoAnimated from '../logo/animated'
import LogoStatic from '../logo/static/index.svg'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`
        md:mt-16
        md:mb-16
        px-6
        md:px-6      
        py-4`}>
      <div class={`
          text-right
          flex
          justify-center
          align-middle
          h-full
        `}>
        {/* <LogoAnimated /> */}
        <LogoStatic size={'s'} />
      </div>
      <div class={`                
          flex
          justify-center                 
        `}>
        <div class={`
          justify-center
          text-center
          pt-8     
          max-w-md
        `}>
          <h1 className='md:text-7xl text-6xl font-bold text-[#e76f51]'>            
            {`${siteConfig.title}`} <i className='text-gray-600 dark:text-gray-400'> framework</i>
          </h1>
          <p className={`text-lg `}>
            A <b>protocol driven</b> Node JS framework with different <b>Servable engines</b>. 
            It provides a concise, easy to use and scalable template to get the best of protocols. 
            Get ready to change the way you code your server!
            <br />
            Models → Protocols → Framework engine → Servable 🐻 = 🍯
          </p>
          <div className={`grid grid-cols-2 space-x-6`}>
            <Link
              className="button button--primary button--lg"
              to="/docs/quickstart">
              Quick Start
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/concepts/philosophy">
              Concepts
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* <ProtocolWidget id={'emailable'} /> */}

  </div>
}