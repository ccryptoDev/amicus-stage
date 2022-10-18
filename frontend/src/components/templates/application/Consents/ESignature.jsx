import React from "react";
import { Wrapper } from "./Style";

const Content = () => {
  return (
    <Wrapper>
      <h2 className="header">
        CONSENT TO ELECTRONIC DISCLOSURES, SIGNATURES, AND RECORDS
      </h2>
      <div className="text-wrapper">
        <p>
          Please read this information carefully and print a copy or retain this
          information electronically for future reference.{" "}
        </p>

        <p>
          <b>Your E-Sign Consent.</b> You are submitting a request for a loan
          transaction from (PROVIDE NAME OF LENDER)(&bdquo;Lender&bdquo;), To
          provide services online, the Lender needs your consent to use and
          accept electronic signatures and records (&bdquo;Your E-Sign
          Consent&bdquo;). By furnishing Your E-Sign Consent, you agree that the
          Lender may provide electronically any and all communications
          concerning their decisions on any application you submit, the terms of
          any loan agreement or extension of credit, privacy policies, other
          disclosures provided by the Lender under state and federal law, and
          any other information or notices the Lender provides (collectively
          &bdquo;Documents&bdquo;). The Documents may include, for example,
          disclosures pursuant to: (1) the Equal Credit Opportunity Act and
          Regulation B; (2) the Fair Credit Reporting Act; (3) the Truth in
          Lending Act and Regulation Z; (4) the Electronic Funds Transfer Act
          and Regulation E; (5) the Gramm-Leach-Bliley Act and the FTC Privacy
          Rule; and (6) any other applicable federal, state or local law or
          regulation.{" "}
        </p>

        <p>
          <b>Scope of Consent.</b> Your E-Sign Consent applies to any
          application, any services provided by the Lender, any extension of
          credit from the Lender and any future applications or transactions
          with the Lender. By exercising Your E-Sign Consent, the Lender will
          process your application information and interact during this
          transaction and any future online transaction with you electronically.
          The Lender may also send the Documents electronically.
        </p>

        <p>
          <b>Hardware and Software. </b> Before you decide to do business
          electronically with the Lender, you should consider whether you have
          the required hardware and software capabilities described. To
          electronically access and retain the Documents, you must have the
          following hardware and software: A PC or MAC compatible computer or
          other device capable of accessing the Internet and an Internet Browser
          software program that supports at least 128 bit encryption, such as
          Netscape, Mozilla Firefox, Microsoft Internet Explorer, AOL or any
          later version of these programs, and Adobe Acrobat Reader or (more
          recent version). You also need either a printer, a secure hard drive,
          or other secure storage device to retain a copy of the Documents for
          future reference. If at any time during this transaction these
          requirements change in a way that creates a material risk that you may
          not be able to receive Documents electronically, the Lender as is
          appropriate, will notify you of these changes. For questions regarding
          the hardware and software requirements, you may send your written
          questions by mail to (PROVIDE MAILING ADDRESS) (&bdquo;Lender Mailing
          Address&bdquo;).
        </p>

        <p>
          <b>Withdrawing Consent.</b> You may withdraw Your E-Sign Consent at
          any time. Before submitting your Application, you may withdraw your
          E-Sign Consent by exiting this website. If you withdraw your E-Sign
          Consent before concluding a transaction, this will prevent you from
          obtaining an online loan transaction from Lender. If you wish to
          withdraw Your E-Sign Consent, after submitting your application, you
          can send the Lender your written request by mail to the Lender&prime;s
          Mailing Address. If you decide to withdraw Your E-Sign Consent, the
          legal effectiveness, validity, and enforceability of prior electronic
          Documents will not be affected.
        </p>

        <p>
          <b>Paper Copies.</b> You have the option to receive any information
          that is provided electronically on paper or in non-electronic form at
          no cost to you. You may obtain any Documents on non-electronic paper
          form by logging in and simply printing a paper copy. Alternatively,
          you may mail a written request to the Lender at the Lender&prime;s
          Mailing Address, and the Lender will provide nonelectronic paper
          copies at no charge. The Lender will retain all Documents as required
          by applicable law.
        </p>

        <p>
          <b>Email.</b> You agree that any email address you provide the Lender
          may be used to provide you with Documents . You agree to notify the
          Lender of any changes in your email address by notifying the lender in
          writing at the Lender&prime;s Mailing Address above or via email at
          least FIVE (5) days before your email address changes.
        </p>
        <div className="no-break">
          <p>
            <b>
              BY ELECTRONICALLY SIGNING THIS DOCUMENT, YOU ACKNOWLEDGE THAT YOU:
              (1) HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THIS CONSENT;
              (2) ACKNOWLEDGE THAT YOU CAN ACCESS THE DOCUMENTS IN THE
              DESIGNATED FORMATS DESCRIBED ABOVE (ONCE YOU GIVE YOUR E-SIGN
              CONSENT, YOU CAN LOG INTO THE WEBSITE TO ACCESS THESE DOCUMENTS);
              (3) ACKNOWLEDGE THAT YOUR E-SIGN CONSENT TO ELECTRONIC DOCUMENTS
              IS REQUIRED TO OBTAIN SERVICES WITH THE LENDER OVER THE INTERNET,
              AND TO OBTAIN AN EXTENSION OF CREDIT FROM LENDER OVER THE
              INTERNET; (4) CONSENT TO USING ELECTRONIC SIGNATURES, HAVING ALL
              DOCUMENTS PROVIDED OR MADE AVAILABLE TO YOU IN ELECTRONIC FORM AND
              DOING BUSINESS WITH THE LENDER ELECTRONICALLY; AND (5) ACKNOWLEDGE
              THAT YOU MAY REQUEST A NON-ELECTRONIC PAPER COPY OF THE ELECTRONIC
              RECORDS AND DOCUMENTS, WHICH THE LENDER WILL PROVIDE TO YOU AT NO
              CHARGE. IF YOU CLICK &bdquo;I DO NOT AGREE&bdquo; OR OTHERWISE
              REFRAIN FROM PROCEDING WITH THE TRANSACTION, THEN YOU DO NOT WISH
              TO USE ELECTRONIC SIGNATURES OR CONDUCT THIS TRANSACTION
              ELECTRONICALLY.
            </b>
          </p>
          <table className="signatures">
            <tr>
              <td>
                <div className="cell">
                  <b>Application Date:</b> ______________
                </div>
              </td>
              <td>
                <div className="cell">
                  <b>Application #:</b> ______________
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cell">Customer Signature ______________</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Content;
