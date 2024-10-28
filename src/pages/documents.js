import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SimpleContent from '@site/src/components/SimpleContent';
import SimpleHeader from '@site/src/components/SimpleHeader';

import ConstitutionUrl from '@site/static/pdfs/constitution-bylaws-2024.pdf';
import CollectiveAgreementUrl from '@site/static/pdfs/collective-agreement-NIC-NICFA-2022-2025.pdf';
import AppealsPolicyUrl from '@site/static/pdfs/policies/NICFA Appeals Policy.pdf';
import ConductPolicyUrl from '@site/static/pdfs/policies/NICFA Conduct Policy.pdf';
import ConflictInterestPolicyUrl from '@site/static/pdfs/policies/NICFA Conflict of Interest Policy.pdf';
import CorrectionDisciplinePolicyUrl from '@site/static/pdfs/policies/NICFA Correction & Discipline Policy.pdf';
import DonationsPolicyUrl from '@site/static/pdfs/policies/NICFA Donations Policy.pdf';
import DuesPolicyUrl from '@site/static/pdfs/policies/NICFA Dues Policy.pdf';
import ExecutiveElectronicVotingPolicyUrl from '@site/static/pdfs/policies/NICFA Executive Electronic Voting Policy.pdf';
import FinancialPolicyUrl from '@site/static/pdfs/policies/NICFA Financial Policy.pdf';
import FPSEStandingCommitteePolicyUrl from '@site/static/pdfs/policies/NICFA FPSE Standing Committee Policy.pdf';
import InformationServicesPolicyUrl from '@site/static/pdfs/policies/NICFA Information Services Policy.pdf';
import JOHSCommitteePolicyUrl from '@site/static/pdfs/policies/NICFA JOHS Committee Policy.pdf';
import PoliticalEndorsementsPolicyUrl from '@site/static/pdfs/policies/NICFA Political Endorsements Policy.pdf';
import PrivacyPolicyUrl from '@site/static/pdfs/policies/NICFA Privacy Policy.pdf';
import ReimbursementTravelPolicyUrl from '@site/static/pdfs/policies/NICFA Reimbursement & Travel Policy.pdf';
import RepresentationCommunicationsPolicyUrl from '@site/static/pdfs/policies/NICFA Representation and Communications Policy.pdf';
import StrikeJobActionPolicyUrl from '@site/static/pdfs/policies/NICFA Strike and Job Action Policy.pdf';
import PDHandbookUrl from '@site/static/pdfs/PD-handbook.pdf';
import ManulifeUrl from '@site/static/pdfs/ManulifeBenefits.pdf'
export default function DocumentsPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documents`}
      description="Documents (NICFA)">
      <SimpleHeader bgimage="files">Documents</SimpleHeader>
      <SimpleContent>
      <p><a target="_blank" href={CollectiveAgreementUrl}>2022 - 2025 Collective Agreement</a></p>
      <p><a target="_blank" href={ConstitutionUrl}>Constitution, Bylaws & Code of Ethics</a></p>
      <h2>Policies</h2>
      <p><a target="_blank" href={AppealsPolicyUrl}>Appeals Policy</a></p>
      <p><a target="_blank" href={ConductPolicyUrl}>Conduct Policy</a></p>
      <p><a target="_blank" href={ConflictInterestPolicyUrl}>Conflict of Interest Policy</a></p>
      <p><a target="_blank" href={CorrectionDisciplinePolicyUrl}>Correction & Discipline Policy</a></p>
      <p><a target="_blank" href={DonationsPolicyUrl}>Donations Policy</a></p>
      <p><a target="_blank" href={DuesPolicyUrl}>Dues Policy</a></p>
      <p><a target="_blank" href={ExecutiveElectronicVotingPolicyUrl}>Executive Electronic Voting Policy</a></p>
      <p><a target="_blank" href={FinancialPolicyUrl}>Financial Policy</a></p>
      <p><a target="_blank" href={FPSEStandingCommitteePolicyUrl}>FPSE Standing Committee Policy</a></p>
      <p><a target="_blank" href={InformationServicesPolicyUrl}>Information Services Policy</a></p>
      <p><a target="_blank" href={JOHSCommitteePolicyUrl}>JOHS Committee Policy</a></p>
      <p><a target="_blank" href={PoliticalEndorsementsPolicyUrl}>Political Endorsements Policy</a></p>
      <p><a target="_blank" href={PrivacyPolicyUrl}>Privacy Policy</a></p>
      <p><a target="_blank" href={ReimbursementTravelPolicyUrl}>Reimbursement & Travel Policy</a></p>
      <p><a target="_blank" href={RepresentationCommunicationsPolicyUrl}>Representation and Communications Policy</a></p>
      <p><a target="_blank" href={StrikeJobActionPolicyUrl}>Strike and Job Action Policy</a></p>
      <h2>Miscellaneous</h2>
      <p><a target="_blank" href={PDHandbookUrl}>PD Handbook</a></p>
      <p><a target="_blank" href={ManulifeUrl}>Manulife Benefits</a></p>
      <p><Link to=""></Link></p>
      <p><Link to=""></Link></p>
      <p><Link to=""></Link></p>
      </SimpleContent>
    </Layout>
  );
}
