import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SimpleContent from '@site/src/components/SimpleContent';
import SimpleHeader from '@site/src/components/SimpleHeader';

import SOJACInfoUrl from '@site/static/pdfs/SOJAC-Chair-Election.docx.pdf';
import SOJACNominationUrl from '@site/static/pdfs/NICFA-Nomination-Form.docx.pdf';


export default function MembersPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Members & Committee`}
      description="Members and Committee (NICFA)">
      <SimpleHeader bgimage="hands">Members & Committees</SimpleHeader>
      <SimpleContent>
        <h1>Who's Who 2025 - 2027</h1>

        <h2>Executive &amp; Council</h2>

        <table>
            <tbody>
                <tr>
                    <td>President</td>
                    <td>Jen Wrye</td>
                </tr>
                <tr>
                    <td>Vice-President/Chief Steward</td>
                    <td>Erin McConomy</td>
                </tr>
                <tr>
                    <td>Secretary</td>
                    <td>Katherine Carpenter</td>
                </tr>
                <tr>
                    <td>Treasurer</td>
                    <td>Sherrie Wang</td>
                </tr>
                <tr>
                    <td>Social, Organizing & Job Action Chair</td>
                    <td>Claire Guiot</td>
                </tr>
                                <tr>
                    <td>Chief Bargainer</td>
                    <td>Brian Koehler</td>
                </tr>
                <tr>
                    <td>Equity Officer</td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td>Nox̱sola</td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td>Privacy Officer</td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td>Steward, Arts, Science & Management</td>
                    <td>Mac Newton</td>
                </tr>
                <tr>
                    <td>Steward, Health & Human Services</td>
                    <td>Laura Bailey</td>
                </tr>
                <tr>
                    <td>Steward, Trades & Technical</td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td>Steward, Non-instructional, Service & Continuing Education</td>
                    <td>Margaret Hearnden</td>
                </tr>
                <tr>
                    <td>Steward, At-large</td>
                    <td>Tony Trudel</td>
                </tr>
            </tbody>
        </table>


        <h2>FPSE Standing Committee Representatives</h2>

        <table>
            <tbody>
                <tr>
                    <td>Academic Governance</td>
                    <td>Aisling Brady</td>
                </tr>
                <tr>
                    <td>Bargaining Coordinator<strong>BCC</strong></td>
                    <td>NICFA Chief Bargainer (Brian Koehler)</td>
                </tr>
                                <tr>
                    <td>Climate Action</td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td>Contract Administration &amp; Review <strong>CARC</strong></td>
                    <td>Erin McConomy</td>
                </tr>
                <tr>
                    <td>Decolonization, Reconciliation, &amp; Indigenization <strong>DRISC</strong></td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td>Disability &amp; Rehabilitation Management <strong>DMRC</strong></td>
                    <td>Jenn Evans</td>
                </tr>
                <tr>
                    <td>Human Rights &amp; Solidarity <strong>HRISC</strong></td>
                    <td>Kerri Lowey McKenzie</td>
                </tr>
                <tr>
                    <td>Non-regular Faculty <strong>NRFC</strong></td>
                    <td>Emma Courtney</td>
                </tr>
                <tr>
                    <td>Pension Advisory <strong>PAC</strong></td>
                    <td>NICFA Treasurer (Sherrie Wang)</td>
                </tr>
                <tr>
                    <td>Women &amp; Gender Equity <strong></strong></td>
                    <td>Jennifer Fallis-Starhunter</td>
                </tr>
                <tr>
                    <td>Workplace Health, Safety & Environment <strong>WHSEC</strong></td>
                    <td>[vacant]</td>
                </tr>
            </tbody>
        </table>


        <h2>NICFA Committee Representatives</h2>

        <table>
            <tbody>
                <tr>
                    <td><strong>In Service PD</strong></td>
                    <td>Liz Girard &amp; Suzanne Schiller</td>
                </tr>
                <tr>
                    <td><strong>Common PD</strong></td>
                    <td>Alex Blair &amp; Liz Girard</td>
                </tr>
            </tbody>
        </table>

        <h2>NICFA Joint Occupational Health &amp; Safety Representatives</h2>

        <table>
            <tbody>
                <tr>
                    <td><strong>Campbell River</strong></td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td><strong>Comox Valley</strong></td>
                    <td>[vacant]</td>
                </tr>
                <tr>
                    <td><strong>Port Alberni</strong></td>
                    <td>[vacant]</td>
                </tr>
            </tbody>
        </table>

      </SimpleContent>
    </Layout>
  );
}
