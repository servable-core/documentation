import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageProtocols from '@site/src/components/project/homepageProtocols'
import Framework from '@site/src/components/project/framework'
import HomePageHeader from '../components/project/homePageHeader'
import Sample from '../components/project/sample'
// import SponsorUs from '../components/project/sponsorUs'
import HomepageProtocols2 from '../components/project/homepageProtocols2'
import HomepageProtocols3 from '../components/project/homepageProtocols3'
import HomepageProtocols4 from '../components/project/homepageProtocols4'
// import EverythingIsAProtocol from '../components/project/everythingIsAProtocol'
import Pollination from '../components/project/pollination'
import ProtocolsSample from '../components/domain/protocolsSample'
import Manifest from '../components/project/manifest'
import Definitions from '../components/project/definitions'
import EnginesSample from '../components/domain/enginesSample'
import ProtocolModels from '../components/project/protocolModels'
import ProtocolElements from '../components/project/protocolElements'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Node JS framework built on top of Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of protocols.\n Get ready to change the way you code your server!">
      <HomePageHeader />
      {/* <div className='bg-slate-200 dark:bg-slate-800 h-[1px] w-full'></div> */}
      <main className='pb-16'>
        <Framework />
        <Definitions align={'left'}/>
        <Manifest  align={'left'}/>  
        <ProtocolModels />
        <Pollination />              
        <ProtocolsSample />
       
       <ProtocolElements />
        
        {/* <EverythingIsAProtocol /> */}
        <HomepageProtocols />
        <HomepageProtocols2 />
        <HomepageProtocols3 />
        <EnginesSample />
        {/* <ExtremeRefactoring /> */}
        <HomepageProtocols4 />
        {/* <Protocoled /> */}
        <Sample />
        {/* <SponsorUs /> */}
      </main>
    </Layout>
  )
}
