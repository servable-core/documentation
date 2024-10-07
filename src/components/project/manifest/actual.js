import React from 'react'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'

export default ({noLink = false,
  align = 'center'}) =>  <div class={`                
flex
justify-center                 
`}><div class={`
          ${align === 'center' ? 'justify-center text-center' : ''}          
            
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`Servable Manifest 🐻`} <i></i>
          </h2>         
          <p className='text-lg'>
            The Servable Framework is built around a set of simple requirements:
            </p>
            <ul className={`
            ${align === 'center' ? 'list-none' : 'list-decimal'}          
            text-lg 
            space-y-2
            `}>            
            <li className=''>A protocol can be applied to multiple models</li>
            <li className=''>A protocol can have multiple models</li>
            <li className=''>A model can be pollinated by multiple protocols</li>
            <li className=''>A model belongs to a protocol</li>
            <li className=''>A Servable service is a protocol itself</li>
            <li className=''>A Servable engine is required for doing the actual heavy server work, ie routing, database and files management, etc.</li>
            <li className=''>A Servable engine chooses to implement partially or fully Engine APIs</li>
            <li className=''>A Servable service can switch between Servable engines as long as they implement the same set of Engine APIs</li>
            <li className=''>A protocol declares a list of required Engine APIs it needs to work</li>
            </ul>
          {!noLink && <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/concepts/philosophy">
              Read more about Servable philosophy
            </Link>
          </p>}
        </div>
        </div>
     