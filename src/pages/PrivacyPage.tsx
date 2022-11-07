import { Page } from '~/components'
import classNames from 'classnames'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './TermsPage.module.scss'

export function PrivacyPage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <Page className={styles.TermsPage} title="Privacy Policy">
      <div className={styles.LastUpdated}>Last updated: 01/11/2022</div>
      <p>
        This Privacy Notice is designed to help you understand how AptosNFT Market (“AptosNFT Market,” “we,” “us,” or
        “our”) collects, uses, processes, and shares your personal information, and to help you understand and exercise
        your privacy rights.
      </p>
      <ul className={styles.List}>
        <li>
          <h2>1. SCOPE AND UPDATES TO THIS PRIVACY NOTICE</h2>
          <p>
            This Privacy Notice applies to personal information processed by us when providing our NFT launchpad and
            marketplace, including on our websites, mobile applications, and other online or offline offerings (the
            “AptosNFT Market Services”).
          </p>
          <p>
            Changes to our Privacy Notice. We may revise this Privacy Notice from time to time in our sole discretion.
            If there are any material changes to this Privacy Notice, we will notify you as required by applicable law.
            You understand and agree that you will be deemed to have accepted the updated Privacy Notice if you continue
            to use our AptosNFT Market Services after the new Privacy Notice takes effect.
          </p>
        </li>
        <li>
          <h2>2. PERSONAL INFORMATION WE COLLECT</h2>
          <p>
            The categories of personal information we collect depend on how you interact with us, our AptosNFT Market
            Services, and the requirements of applicable law. We collect information that you provide to us, information
            we obtain automatically when you use our AptosNFT Market Services, and information from other sources such
            as third-party services and organizations, as described below.
          </p>
          <ul className={styles.ListAbc}>
            <li>
              <h3>Personal Information You Provide to Us Directly</h3>
              We may collect personal information that you provide to us.
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Account Creation</h3>
                  We may collect personal information when you create an account, such as wallet address, name, and
                  account name.
                </li>
                <li>
                  <h3>Protocol Payloads, Wallet and other Output Information</h3>
                  In order to utilize some of the AptosNFT Market Services, you may need to provide us with information
                  about your wallet including the types and amounts of digital assets on the blockchain you possess and
                  details about Protocol payloads into which you have entered. We will never ask you for or collect your
                  private keys.
                </li>
                <li>
                  <h3>Your Communications with Us</h3>
                  We may collect personal information, such as email address, phone number, or mailing address when you
                  request information about our AptosNFT Market Services, register for our newsletter, request customer
                  or technical support, or otherwise communicate with us.
                </li>
                <li>
                  <h3>Surveys</h3>
                  We may contact you to participate in surveys. If you decide to participate, we may collect personal
                  information from you in connection with the survey.
                </li>
                <li>
                  <h3>Interactive Features</h3>
                  We and others who use our AptosNFT Market Services may collect personal information that you submit or
                  make available through our interactive features. Any information you provide using the public sharing
                  features of the AptosNFT Market Services will be considered “public,” unless otherwise required by
                  applicable law, and is not subject to the privacy protections referenced herein.
                </li>
              </ul>
            </li>
            <li>
              <h3>Personal Information Collected Automatically</h3>
              We may collect personal information automatically when you use our AptosNFT Market Services.
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Automatic Collection of Personal Information</h3>
                  We may collect certain information automatically when you use our AptosNFT Market Services, such as
                  your Internet protocol (IP) address, user settings, MAC address, browser or device information,
                  location information (including approximate location derived from IP address, and Internet service
                  provider. We may also automatically collect information regarding your use of our AptosNFT Market
                  Services, such as pages that you visit before, during and after using our AptosNFT Market Services,
                  information about the links you click, the types of content you interact with, the frequency and
                  duration of your activities, and other information about how you use our AptosNFT Market Services.
                  <ul className={classNames(styles.ListAbc, styles.sublist)}>
                    <li>
                      <h3>Crash Reports</h3>
                      If you provide crash reports, we may collect personal information related to such crash reports,
                      including detailed diagnostic information about your device and the activities that led to the
                      crash.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>Cookie Policy (and Other Technologies)</h3>
                  We, as well as third parties that provide content, advertising, or other functionality on the AptosNFT
                  Market Services, may use cookies, pixel tags, and other technologies (“Technologies”) to automatically
                  collect information through your use of the AptosNFT Market Services.
                  <ul className={classNames(styles.ListAbc, styles.sublist)}>
                    <li>
                      <h3>Cookies</h3>
                      Cookies are small text files placed in device browsers that store preferences and facilitate and
                      enhance your experience.
                    </li>
                    <li>
                      <h3>Pixel Tags/Web Beacons</h3>A pixel tag (also known as a web beacon) is a piece of code
                      embedded in the AptosNFT Market Services that collects information about engagement on the
                      AptosNFT Market Services. The use of a pixel tag allows us to record, for example, that a user has
                      visited a particular web page or clicked on a particular advertisement. We may also include web
                      beacons in e-mails to understand whether messages have been opened, acted on, or forwarded.
                    </li>
                  </ul>
                </li>
              </ul>
              Our uses of these Technologies fall into the following general categories:
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Operationally Necessary</h3>
                  This includes Technologies that allow you access to the AptosNFT Market Services, applications, and
                  tools that are required to identify irregular website behavior, prevent fraudulent activity, improve
                  security, or allow you to make use of our functionality;
                </li>
                <li>
                  <h3>Performance-Related</h3>
                  We may use Technologies to assess the performance of the AptosNFT Market Services, including as part
                  of our analytic practices to help us understand how individuals use the AptosNFT Market Services (see
                  Analytics below);
                </li>
                <li>
                  <h3>Functionality-Related</h3>
                  We may use Technologies that allow us to offer you enhanced functionality when accessing or using the
                  AptosNFT Market Services. This may include identifying you when you sign into our Services or keeping
                  track of your specified preferences, interests, or past items viewed;
                </li>
                <li>
                  <h3>Advertising- or Targeting-Related</h3>
                  We may use first party or third-party Technologies to deliver content, including ads relevant to your
                  interests, on the AptosNFT Market Services or on third-party digital properties.
                </li>
              </ul>
              See “Your Privacy Choices and Rights” below to understand your choices regarding these Technologies.
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Analytics</h3>
                  We may use Technologies and other third-party tools to process analytics information on the AptosNFT
                  Market Services. These Technologies allow us to better understand how our digital AptosNFT Market
                  Services are used and to continually improve and personalize the AptosNFT Market Services. Some of our
                  analytics partners include:
                  <ul className={classNames(styles.ListAbc, styles.sublist)}>
                    <li>
                      <h3>Google Analytics</h3>
                      For more information about how Google uses your personal information (including for its own
                      purposes, e.g., for profiling or linking it to other data), please visit{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                        Google Analytics’ Privacy Policy
                      </a>
                      .
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <h3>Personal Information Collected from Other Sources</h3>
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Third-Party Services and Sources</h3>
                  We may obtain personal information about you from other sources, including through third-party
                  services and organizations. For example, if you access our AptosNFT Market Services through a
                  third-party application, such as an app store, a third-party login service, or a social networking
                  site, we may collect personal information about you from that third-party application that you have
                  made available via your privacy settings.
                </li>
                <li>
                  <h3>Blockchain Networks</h3>
                  We may independently collect personal information from blockchain networks that we have access to.
                  This personal information may include public wallet addresses and details about transactions carried
                  out on the applicable blockchain network.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2>3. HOW WE USE YOUR PERSONAL INFORMATION</h2>
          <p>
            We use your personal information for a variety of business purposes, including to provide our AptosNFT
            Market Services, for administrative purposes, and to market our products and AptosNFT Market Services, as
            described below.
          </p>
          <ul className={styles.ListAbc}>
            <li>
              <h3>Provide Our AptosNFT Market Services</h3>
              We use your information to fulfil our contract with you and provide you with our AptosNFT Market Services,
              such as:
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>Managing your information and accounts;</li>
                <li>
                  Providing access to certain areas, functionalities, and features of our AptosNFT Market Services;
                </li>
                <li>Answering requests for customer or technical support;</li>
                <li>
                  Communicating with you about your account, activities on our AptosNFT Market Services, and policy
                  changes; and
                </li>
                <li>
                  Processing your financial information and other payment methods to facilitate purchases and transfers
                  via the AptosNFT Market Services.
                </li>
                <li>Administrative Purposes</li>
              </ul>
              We use your information for various administrative purposes, such as:
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  Pursuing our legitimate interests such as direct marketing, research and development (including
                  marketing research), network and information security, and fraud prevention;
                </li>
                <li>
                  Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity,
                  and prosecuting those responsible for that activity;
                </li>
                <li>Measuring interest and engagement in our AptosNFT Market Services;</li>
                <li>Improving, upgrading, or enhancing our AptosNFT Market Services;</li>
                <li>Developing new products and services;</li>
                <li>Ensuring internal quality control and safety;</li>
                <li>
                  Authenticating and verifying individual identities, including requests to exercise your rights under
                  this Privacy Notice;
                </li>
                <li>Debugging to identify and repair errors with our AptosNFT Market Services;</li>
                <li>Auditing relating to interactions, transactions, and other compliance activities;</li>
                <li>
                  Sharing personal information with third parties as needed to provide the AptosNFT Market Services;
                </li>
                <li>Enforcing our agreements and policies; and</li>
                <li>Carrying out activities that are required to comply with our legal obligations.</li>
              </ul>
            </li>
            <li>
              <h3>Marketing and Advertising our Products and AptosNFT Market Services</h3>
              <p>
                We may use personal information to tailor and provide you with content. We may provide you with these
                materials as permitted by applicable law.
              </p>
              <p>
                Some of the ways we may market to you include email campaigns, text messages, custom audiences
                advertising, and “interest-based” or “personalized advertising,” including through cross-device
                tracking.
              </p>
              <p>
                If you have any questions about our marketing practices or if you would like to opt out of the use of
                your personal information for marketing purposes, you may contact us at any time as set forth in
                “Contact Us” below.
              </p>
            </li>
            <li>
              <h3>With Your Consent</h3>
              We may use personal information for other purposes that are clearly disclosed to you at the time you
              provide personal information or with your consent.
            </li>
            <li>
              <h3>Other Purposes</h3>
              We also use your personal information for other purposes as requested by you or as permitted by applicable
              law.
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>De-identified and Aggregated Information.</h3>
                  We may use personal information to create de-identified and/or aggregated information, such as
                  demographic information, information about the device from which you access our AptosNFT Market
                  Services, or other analyses we create.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2>4. HOW WE DISCLOSE YOUR PERSONAL INFORMATION</h2>
          <p>
            We disclose your personal information to third parties for a variety of business purposes, including to
            provide our AptosNFT Market Services, to protect us or others, or in the event of a major business
            transaction such as a merger, sale, or asset transfer, as described below.
          </p>
          <ul className={styles.ListAbc}>
            <li>
              <h3>Disclosures to Provide our AptosNFT Market Services</h3>
              The categories of third parties with whom we may share your personal information are described below.
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Notice Regarding Use of Blockchain Networks</h3>Information about transactions you enter into via
                  the AptosNFT Market Services will be recorded on the blockchain and may be accessible to third parties
                  due to the public nature of the blockchain. Because entries to the blockchain are, by their nature,
                  public, and because it may be possible for someone to identify you through your pseudonymous, public
                  wallet address using external sources of information, any transaction you enter onto the blockchain
                  could possibly be used to identify you, or information about you.
                </li>
                <li>
                  <h3>Other Users of the AptosNFT Market Services and Parties You Transact With</h3>Some of your
                  personal information may be visible to other users of the AptosNFT Market Services (e.g., information
                  featured on generally accessible parts of the contracts or on a user profile). In addition, to
                  complete transfers via the AptosNFT Market Services, we will need to share some of your personal
                  information with the party that you are transacting with.
                </li>
                <li>
                  <h3>Service Providers</h3>We may share your personal information with our third-party service
                  providers and vendors that assist us with the provision of our AptosNFT Market Services. This includes
                  service providers and vendors that provide us with IT support, third party Protocol participants,
                  services that provide compliance risk assessments, hosting, payment processing, customer service, and
                  related services.
                </li>
                <li>
                  <h3>Third-Party Services You Share or Interact With</h3>Certain features and functionalities of the
                  AptosNFT Market Services may link to or allow you to interface, interact, or share information with,
                  access and/or use third-party websites, services, products, and technology (collectively, “Third-Party
                  Services”). Any information shared with or otherwise collected by a Third-Party Service may be subject
                  to the Third- Party Service’s privacy policy. We are not responsible for the processing of personal
                  information by Third-Party Services.
                </li>
                <li>
                  <h3>Business Partners</h3>We may share your personal information with business partners to provide you
                  with a product or service you have requested. We may also share your personal information with
                  business partners with whom we jointly offer products or services.
                </li>
                <li>
                  <h3>Affiliates</h3>We may share your personal information with our company affiliates.
                </li>
                <li>
                  <h3>Advertising Partners</h3>We may share your personal information with third-party advertising
                  partners. These third-party advertising partners may set Technologies and other tracking tools on the
                  AptosNFT Market Services to collect information regarding your activities and your device (e.g., your
                  IP address, cookie identifiers, page(s) visited, location, time of day). These advertising partners
                  may use this information (and similar information collected from other services) for purposes of
                  delivering personalized advertisements to you when you visit digital properties within their networks.
                  This practice is commonly referred to as “interest-based advertising” or “personalized advertising.”
                </li>
                <li>
                  <h3>APIs/SDKs</h3>We may use third-party application program interfaces (“APIs”) and software
                  development kits (“SDKs”) as part of the functionality of our AptosNFT Market Services. For more
                  information about our use of APIs and SDKs, please contact us as set forth in “Contact Us” below.
                </li>
              </ul>
            </li>
            <li>
              <h3>Disclosures to Protect Us or Others</h3>
              We may access, preserve, and disclose any information we store associated with you to external parties if
              we, in good faith, believe doing so is required or appropriate to: comply with law enforcement or national
              security requests and legal process, such as a court order or subpoena; protect your, our, or others’
              rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with
              an investigation or prosecution of suspected or actual illegal activity.
            </li>
            <li>
              <h3>Disclosure in the Event of Merger, Sale, or Other Asset Transfers</h3>
              If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy,
              receivership, purchase or sale of assets, or transition of service to another provider, your information
              may be sold or transferred as part of such a transaction, as permitted by law and/or contract.
            </li>
          </ul>
        </li>
        <li>
          <h2>5. YOUR PRIVACY CHOICES AND RIGHTS</h2>
          <ul className={classNames(styles.ListAbc, styles.sublist)}>
            <li>
              <h3>Your Privacy Choices</h3>
              The privacy choices you may have about your personal information are determined by applicable law and are
              described below.
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Email Communications</h3>If you receive an unwanted email from us, you can use the unsubscribe
                  link found at the bottom of the email to opt out of receiving future emails. Note that you will
                  continue to receive transaction-related emails regarding products or AptosNFT Market Services you have
                  requested. We may also send you certain non-promotional communications regarding us and our AptosNFT
                  Market Services, and you will not be able to opt out of those communications (e.g., communications
                  regarding our AptosNFT Market Services or updates to our Terms or this Privacy Notice).
                </li>
                <li>
                  <h3>Text Messages</h3>If you receive an unwanted text message from us, you may opt out of receiving
                  future text messages from us by following the instructions in the text message you have received from
                  us or by otherwise contacting us as set forth in “Contact Us” below.
                </li>
                <li>
                  <h3>Mobile Devices</h3>We may send you push notifications through our mobile application. You may opt
                  out from receiving these push notifications by changing the settings on your mobile device. With your
                  consent, we may also collect precise location-based information via our mobile application. You may
                  opt out of this collection by changing the settings on your mobile device.
                </li>
                <li>
                  <h3>“Do Not Track”</h3>Do Not Track (“DNT”) is a privacy preference that users can set in certain web
                  browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted
                  by web browsers.
                </li>
                <li>
                  <h3>Cookies and Personalized Advertising</h3>You may stop or restrict the placement of Technologies on
                  your device or remove them by adjusting your preferences as your browser or device permits. However,
                  if you adjust your preferences, the AptosNFT Market Services may not work properly. Please note that
                  cookie-based opt-outs are not effective on mobile applications. However, you may opt-out of
                  personalized advertisements on some mobile applications by following the instructions for Android,
                  iOS, and others.
                </li>
              </ul>
              <p>
                The online advertising industry also provides websites from which you may opt out of receiving targeted
                ads from data partners and other advertising partners that participate in self-regulatory programs. You
                can access these and learn more about targeted advertising and consumer choice and privacy by visiting
                the Network Advertising Initiative, the Digital Advertising Alliance, the European Digital Advertising
                Alliance, and the Digital Advertising Alliance of Canada.
              </p>
              Please note you must separately opt out in each browser and on each device.
            </li>
            <li>
              <h3>Your Privacy Rights</h3>
              In accordance with applicable law, you may have the right to:
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  Access to and Portability of Your Personal Information, including: (i) confirming whether we are
                  processing your personal information; (ii) obtaining access to or a copy of your personal information;
                  and (iii) receiving an electronic copy of personal information that you have provided to us, or asking
                  us to send that information to another company in a structured, commonly used, and machine readable
                  format (also known as the “right of data portability”);
                </li>
                <li>
                  Request Correction of your personal information where it is inaccurate or incomplete. In some cases,
                  we may provide self-service tools that enable you to update your personal information;
                </li>
                <li>Request Deletion of your personal information;</li>
                <li>Request Restriction of or Object to our processing of your personal information; and</li>
                <li>
                  Withdraw your Consent to our processing of your personal information. Please note that your withdrawal
                  will only take effect for future processing, and will not affect the lawfulness of processing before
                  the withdrawal.
                </li>
              </ul>
              If you would like to exercise any of these rights, please contact us as set forth in “Contact Us” below.
              We will process such requests in accordance with applicable laws.
            </li>
          </ul>
        </li>
        <li>
          <h2>6. SECURITY OF YOUR INFORMATION</h2>
          <p>
            We take steps to ensure that your information is treated securely and in accordance with this Privacy
            Notice. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any
            information you provide to us. To the fullest extent permitted by applicable law, we do not accept liability
            for unauthorized access, use, disclosure, or loss of personal information.
          </p>
          By using our AptosNFT Market Services or providing personal information to us, you agree that we may
          communicate with you electronically regarding security, privacy, and administrative issues relating to your
          use of our AptosNFT Market Services. If we learn of a security system’s breach, we may attempt to notify you
          electronically by posting a notice on our AptosNFT Market Services, by mail, or by sending an email to you.
        </li>
        <li>
          <h2>7. INTERNATIONAL DATA TRANSFERS</h2>
          <p>
            All information processed by us may be transferred, processed, and stored anywhere in the world, including,
            but not limited to, the United States or other countries, which may have data protection laws that are
            different from the laws where you live. We endeavor to safeguard your information consistent with the
            requirements of applicable laws.
          </p>
          <p>
            If we transfer personal information which originates in the European Economic Area, Switzerland, and/or the
            United Kingdom to a country that has not been found to provide an adequate level of protection under
            applicable data protection laws, one of the safeguards we may use to support such transfer is the EU
            Standard Contractual Clauses.
          </p>
          For more information about the safeguards we use for international transfers of your personal information,
          please contact us as set forth below.
        </li>
        <li>
          <h2>8. RETENTION OF PERSONAL INFORMATION</h2>
          We store the personal information we collect as described in this Privacy Notice for as long as you use our
          AptosNFT Market Services, or as necessary to fulfill the purpose(s) for which it was collected, provide our
          AptosNFT Market Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate
          business purposes, enforce our agreements, and comply with applicable laws.
        </li>
        <li>
          <h2>9. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS</h2>
          <p>
            This Supplemental Notice for California Residents only applies to our processing of personal information
            that is subject to the California Consumer Privacy Act of 2018 (“CCPA”). The CCPA provides California
            residents with the right to know what categories of personal information AptosNFT Market has collected about
            them, and whether AptosNFT Market disclosed that personal information for a business purpose (e.g., to a
            service provider) in the preceding twelve months. California residents can find this information below:
          </p>
          <table>
            <thead>
              <tr>
                <th>Category of Personal Information Collected by AptosNFT Market</th>
                <th>Category of Third Parties Personal Information is Disclosed to for a Business Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identifiers</td>
                <td>
                  <ul className={classNames(styles.ListAbc, styles.dense)}>
                    <li>Blockchain Networks</li>
                    <li>Other Users of the AptosNFT Market Services and Parties You Transact With</li>
                    <li>Service Providers</li>
                    <li>Third Party Services You Share or Interact With</li>
                    <li>Business Partners</li>
                    <li>Affiliates</li>
                    <li>Advertising Partners</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Personal information categories listed in the California Customer Records statute (Cal. Civ. Code §
                  1798.80(e))
                </td>
                <td>
                  <ul className={classNames(styles.ListAbc, styles.dense)}>
                    <li>Blockchain Networks</li>
                    <li>Other Users of the AptosNFT Market Services and Parties You Transact With</li>
                    <li>Service Providers</li>
                    <li>Third Party Services You Share or Interact With</li>
                    <li>Business Partners</li>
                    <li>Affiliates</li>
                    <li>Advertising Partners</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Commercial information</td>
                <td>
                  <ul className={classNames(styles.ListAbc, styles.dense)}>
                    <li>Blockchain Networks</li>
                    <li>Other Users of the AptosNFT Market Services and Parties You Transact With</li>
                    <li>Service Providers</li>
                    {/*<li>Third Party Services You Share or Interact With</li>*/}
                    <li>Business Partners</li>
                    <li>Affiliates</li>
                    <li>Advertising Partners</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Internet or other electronic network activity</td>
                <td>
                  <ul className={classNames(styles.ListAbc, styles.dense)}>
                    <li>Blockchain Networks</li>
                    <li>Other Users of the AptosNFT Market Services and Parties You Transact With</li>
                    <li>Service Providers</li>
                    <li>Third Party Services You Share or Interact With</li>
                    <li>Business Partners</li>
                    <li>Affiliates</li>
                    <li>Advertising Partners</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            The categories of sources from which we collect personal information and our business and commercial
            purposes for using personal information are set forth in “Personal Information We Collect” and “How We Use
            Your Personal Information” above, respectively.
          </p>
          <h3>Additional Privacy Rights for California Residents</h3>
          <p>
            “Sales” of Personal Information under the CCPA. For purposes of the CCPA, AptosNFT Market does not “sell”
            personal information, nor do we have actual knowledge of any “sale” of personal information of minors under
            16 years of age.
          </p>
          <p>
            Non-Discrimination. California residents have the right not to receive discriminatory treatment by us for
            the exercise of their rights conferred by the CCPA.
          </p>
          <p>
            Authorized Agent. Only you, or someone legally authorized to act on your behalf, may make a verifiable
            consumer request related to your personal information. You may also make a verifiable consumer request on
            behalf of your minor child. To authorize an agent, provide written authorization signed by you and your
            designated agent and contact us as set forth in “Contact Us” below for additional instructions.
          </p>
          <p>
            Verification. To protect your privacy, we will take steps to reasonably verify your identity before
            fulfilling your request. These steps may involve asking you to provide sufficient information that allows us
            to reasonably verify you are the person about whom we collected personal information or an authorized
            representative, or to answer questions regarding your account and use of our AptosNFT Market Services.
          </p>
          <p>
            If you are a California resident and would like to exercise any of your rights under the CCPA, please
            contact us as set forth in “Contact Us” below. We will process such requests in accordance with applicable
            laws.
          </p>
          <p>
            De-Identified Information. If we create or receive de-identified information, we will not attempt to
            reidentify such information, except to comply with applicable law.
          </p>
        </li>
        <li>
          <h2>10. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS</h2>
          If you are a resident of Nevada, you have the right to opt-out of the sale of certain personal information to
          third parties who intend to license or sell that personal information. To the extent applicable, you can
          exercise this right by contacting us at the email address listed in Contact Us below with the subject line
          “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your
          account. Please note that we do not currently sell your personal information as sales are defined in Nevada
          Revised Statutes Chapter 603A. If you have any questions, please contact us as set forth in Contact Us below.
        </li>
        <li>
          <h2>11. CHILDREN’S INFORMATION</h2>
          <p>
            The AptosNFT Market Services are not directed to children under 16 (or other age as required by local law),
            and we do not knowingly collect personal information from children.
          </p>
          If you are a parent or guardian and believe your child has uploaded personal information to our site without
          your consent, you may contact us as described in “Contact Us” below. If we become aware that a child has
          provided us with personal information in violation of applicable law, we will delete any personal information
          we have collected, unless we have a legal obligation to keep it, and terminate the child’s account, if
          applicable.
        </li>
        <li>
          <h2>12. OTHER PROVISIONS</h2>
          <p>
            Third-Party Websites/Applications. The AptosNFT Market Services may contain links to other
            websites/applications and other websites/applications may reference or link to our AptosNFT Market Services.
            These third-party services are not controlled by us. We encourage our users to read the privacy policies of
            each website and application with which they interact. We do not endorse, screen, or approve, and are not
            responsible for, the privacy practices or content of such other websites or applications. Providing personal
            information to third-party websites or applications is at your own risk.
          </p>
          Supervisory Authority. If your personal information is subject to the applicable data protection laws of the
          European Economic Area, Switzerland, or the United Kingdom, you have the right to lodge a complaint with the
          competent supervisory authority if you believe our processing of your personal information violates applicable
          law.
        </li>
        <li>
          <h2>13. CONTACT US</h2>
          <p>AptosNFT Market is the controller of the personal information we process under this Privacy Notice.</p>
          If you have any questions about our privacy practices or this Privacy Notice, or to exercise your rights as
          detailed in this Privacy Notice, please contact us at:{' '}
          <a href="mailto:contact@AptosNFT.Market">contact@AptosNFT.Market</a>.
        </li>
      </ul>
    </Page>
  )
}
