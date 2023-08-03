import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Individual Contributor',
    Svg: require('@site/static/img/ic.svg').default,
    description: (
      <>
        I primarily develop in Python, but I've also coded in Java, Node.js, C++, and unfortunately, PHP. However, my focus is on cloud technology, and I've been primarily working with AWS and Cloudflare.
      </>
    ),
  },
  {
    title: 'Engineering Manager',
    Svg: require('@site/static/img/em.svg').default,
    description: (
      <>
        I've managed people, teams and tribes. My focus is always to enable teams to deliver value to customers, while keeping a healthy developer experience.
      </>
    ),
  },
  {
    title: 'Curious by nature',
    Svg: require('@site/static/img/curiosity.svg').default,
    description: (
      <>
        While I love software development, I'm an eager learner with a passion for history and finance.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
