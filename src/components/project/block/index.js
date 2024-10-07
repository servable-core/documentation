import React from 'react'
import styles from './styles.module.css'
import Protocol from './protocol'

export default ({ protocolList }) => {
  return <section className={styles.protocols}>
    <div className="container">
      <div className="row">
        {protocolList.map((props, idx) => (
          <Protocol key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
}