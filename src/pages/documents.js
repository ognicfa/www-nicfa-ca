import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SimpleContent from '@site/src/components/SimpleContent';
import SimpleHeader from '@site/src/components/SimpleHeader';

import ConstitutionUrl from '@site/static/pdfs/NICFA-Bylaws-Constitution-Code-of-Ethics-2021.pdf';
import CollectiveAgreementUrl from '@site/static/pdfs/collective-agreement-NIC-NICFA-2022-2025.pdf';

export default function DocumentsPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documents`}
      description="Documents (NICFA)">
      <SimpleHeader bgimage="files">Documents</SimpleHeader>
      <SimpleContent>
      <p><a href={CollectiveAgreementUrl}>2022 - 2025 Collective Agreement</a></p>
      <p><a href={ConstitutionUrl}>Constitution, Bylaws & Code of Ethics</a></p>
      <p><Link to=""></Link></p>
      <p><Link to=""></Link></p>
      <p><Link to=""></Link></p>
      </SimpleContent>
    </Layout>
  );
}
