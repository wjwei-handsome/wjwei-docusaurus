import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faDiscord} from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.css';


export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            <h4>{copyright}</h4>
            <div id='contact-me' style={{"display":"flex","justifyContent":"center"}}>
              {/* <h4>Contact Me: */}
                <a href="mailto:wjwei9908@gmail.com" className={styles.linkicon}>
                  <FontAwesomeIcon icon={faEnvelope} style={{"fontSize": "36px"}}/>
                </a>
                <a href="https://github.com/wjwei-handsome" className={styles.linkicon}>
                  <FontAwesomeIcon icon={faGithubAlt} style={{"fontSize": "36px"}}/>
                </a>
                <a href="https://discord.gg/dUyetKKSbv" className={styles.linkicon}>
                  <FontAwesomeIcon icon={faDiscord} style={{"fontSize": "33px"}}/>
                </a>
              {/* </h4> */}

            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
