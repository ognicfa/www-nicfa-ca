import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SimpleContent from '@site/src/components/SimpleContent';
import SimpleHeader from '@site/src/components/SimpleHeader';

import styles from './index.module.css';

import TotemImageUrl from '@site/static/img/totem.jpg';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`North Island Faculty Association`}
      description="North Island College Faculty Association (NICFA)">
      <SimpleHeader bgimage="campus">Welcome</SimpleHeader>
      <SimpleContent>
        <h1>North Island College Faculty Association</h1>

        <p><img className={clsx(styles.imageRight)} src={TotemImageUrl} />
          The North Island College Faculty Association (NICFA) 
          is the sole bargaining agent for approximately 250 faculty 
          members at North Island College
          (<Link to="https:/www.nic.bc.ca">NIC</Link>).
        </p>

        

        <p>NICFA is a member (Local 16) of the Federation 
          of Post-Secondary Educators of British Columbia
          (<Link to="https://fpse.ca">FPSE</Link>), 
          which in turn is affiliated with the Canadian 
          Association of University Teachers
          (<Link to="https://www.caut.ca">CAUT</Link>), 
          the Canadian 
          Labour Congress 
          (<Link to="https://canadianlabour.ca">CLC</Link>), 
          and the British Columbia 
          Federation of Labour
          (<Link to="https://bcfed.ca">BCFED</Link>).
        </p>

        <p>Our members work in the Comox Valley, Campbell 
          River, Port Alberni and Port Hardy, and Ucluelet.
        </p>
                <p><strong>NICFA MEMBERS: </strong>To share or update your non-NIC email address, please use the following form: <a href="https://www.nicfa.ca/update/">https://www.nicfa.ca/update/</a>
        </p>
      </SimpleContent>
    </Layout>
  );
}
