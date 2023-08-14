import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SimpleContent from '@site/src/components/SimpleContent';
import SimpleHeader from '@site/src/components/SimpleHeader';

import ConstitutionUrl from '@site/static/pdfs/NICFA-Bylaws-Constitution-Code-of-Ethics-2021.pdf';

export default function DocumentsPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documents`}
      description="Documents (NICFA)">
      <SimpleHeader bgimage="files">Documents</SimpleHeader>
      <SimpleContent>
      <p><Link to="https://www.bcbargaining.ca/content/3051/nic-nicfa_april_1_2019_to_march_31_2022.pdf">2019 - 2022 Collective Agreement (Local)</Link></p>
      <p><Link to="https://www.fpse.ca/sites/default/files/resource-pdfs/2019-2022%20FPSE%20Common%20Agreement.pdf">2019 - 2022 Common Agreement</Link></p>
      <p><a href={ConstitutionUrl}>Constitution, Bylaws & Code of Ethics</a></p>
      <p><Link to=""></Link></p>
      <p><Link to=""></Link></p>
      <p><Link to=""></Link></p>
      </SimpleContent>
    </Layout>
  );
}
