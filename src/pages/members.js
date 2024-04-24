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
      <SimpleHeader bgimage="hands">Members & Committee</SimpleHeader>
      <SimpleContent>
        <h1>Who's Who</h1>

        <h2>Executive 2023 - 2025</h2>

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
                    <td>Brian Koehler</td>
                </tr>
                <tr>
                    <td>Treasurer</td>
                    <td>Sherrie Wang</td>
                </tr>
                <tr>
                    <td>Equity Officer</td>
                    <td>Cynthia Zhao</td>
                </tr>
                <tr>
                    <td>Nox̱sola</td>
                    <td>Evelyn Voyageur</td>
                </tr>
                <tr>
                    <td>Privacy Officer</td>
                    <td>Jenn Evans</td>
                </tr>
                <tr>
                    <td>Social, Organizing & Job Action Chair (NEW)</td>
                    <td>[vacant] <a href="#SOJAC">Nominations open!</a></td>
                </tr>
                <tr>
                    <td>Steward, Arts, Science & Management</td>
                    <td>Tony Trudel</td>
                </tr>
                <tr>
                    <td>Steward, Health & Human Services</td>
                    <td>Heidi Deagle</td>
                </tr>
                <tr>
                    <td>Steward, Trades & Technical</td>
                    <td>Brent DiGiuseppe</td>
                </tr>
                <tr>
                    <td>Steward, Non-instructional, Service & Continuing Education</td>
                    <td>Margaret Hearnden</td>
                </tr>
                <tr>
                    <td>Steward, At-large</td>
                    <td>[vacant]</td>
                </tr>
            </tbody>
        </table>


        <h2>FPSE Standing Committe Representatives</h2>

        <table>
            <tbody>
                <tr>
                    <td>Academic Governance</td>
                    <td>Ashley Blacquiere</td>
                </tr>
                <tr>
                    <td>Bargaining <strong>BCC</strong></td>
                    <td>Brian Koehler</td>
                </tr>
                <tr>
                    <td>Contract Administration & Review <strong>CARC</strong></td>
                    <td>Erin McConomy</td>
                </tr>
                <tr>
                    <td>Decolonization, Reconciliation, and Indigenization <strong>DRISC</strong></td>
                    <td>Evelyn Voyageur</td>
                </tr>
                <tr>
                    <td>Disability Management <strong>DMRC</strong></td>
                    <td>Cynthia Zhao</td>
                </tr>
                <tr>
                    <td>Human Rights & Solidarity <strong>HRISC</strong></td>
                    <td>Kerri Lowey McKenzie</td>
                </tr>
                <tr>
                    <td>Non-regular Faculty <strong>NRFC</strong></td>
                    <td>Dan Webb</td>
                </tr>
                <tr>
                    <td>Pension Advisory <strong>PAC</strong></td>
                    <td>Sherrie Wang</td>
                </tr>
                <tr>
                    <td>Women & Gender Eqity <strong></strong></td>
                    <td>Noreen McCaffrey</td>
                </tr>
                <tr>
                    <td>Workplace Health, Safety & Environment <strong>WHSEC</strong></td>
                    <td>Ryan McElroy</td>
                </tr>
            </tbody>
        </table>


        <h2>NICFA Committee Representatives</h2>

        <table>
            <tbody>
                <tr>
                    <td><strong>In Service PD</strong></td>
                    <td>Liz Girard & Suzanne Schiller</td>
                </tr>
                <tr>
                    <td><strong>Common PD</strong></td>
                    <td>Denise Sibileau & Liz Gerard</td>
                </tr>
            </tbody>
        </table>

        <h2 id="SOJAC">NICFA Joint Occupational Health & Safety Representatives</h2>

        <table>
            <tbody>
                <tr>
                    <td><strong>Campbell River</strong></td>
                    <td>Kyle Ward</td>
                </tr>
                <tr>
                    <td><strong>Comox Valley</strong></td>
                    <td>Ryan McElroy</td>
                </tr>
                <tr>
                    <td><strong>Port Alberni</strong></td>
                    <td>[vacant]</td>
                </tr>
            </tbody>
        </table>

        <h2>NEW! Social, Organizing & Job Action Chair</h2>

        <p>The NICFA Executive is thrilled to say that we will be piloting 
            a 25% release next academic year for the newest executive 
            position, the Social, Organizing, and Job Action Chair. Members 
            will find the relevant information about the position, including 
            links to the application form and instructions, HERE. Nominations 
            are open until Tuesday, May 14th at 4:00pm. No previous 
            experience doing union work is required; just a desire to 
            learn more and improve working conditions at NIC.</p>
 
        <p>We encourage all eligible members to consider this released 
            position. This includes faculty who work high contact hours; 
            NICFA is ready to work with you, your department, and your 
            exempt administrator, to ensure this opportunity is widely 
            available!</p>
  
        <p>You can contact Jen Wrye directly for more information. 
            Alternatively, you can attend a previously scheduled NICFA 
            policy consultation meeting to learn more or ask questions.</p>

        <ul>
            <li><a target="_blank" href={SOJACInfoUrl}>Information Sheet</a></li>
            <li><a target="_blank" href={SOJACNominationUrl}>Nomination Form</a></li>
        </ul>
      </SimpleContent>
    </Layout>
  );
}
