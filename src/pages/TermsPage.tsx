import { Page } from '~/components'
import classNames from 'classnames'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './TermsPage.module.scss'

export function TermsPage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <Page className={styles.TermsPage} title="Terms and Conditions">
      <div className={styles.LastUpdated}>Last updated: 01/11/2022</div>
      <p>
        Please read these Terms and Conditions (the “Terms”) and our Privacy Policy{' '}
        <a
          href="/privacy"
          onClick={(event: MouseEvent): void => {
            event.preventDefault()
            navigate('/privacy')
          }}
        >
          AptosNFT.Market/privacy
        </a>{' '}
        (“Privacy Policy”) carefully because they govern your use of the website located at www.AptosNFT.Market (the
        “Site”) and the curated blockchain explorer and other functionalities made available on the Site (collectively,
        the “Services”) offered by AptosNFT.Market (“AptosNFT,” “we,” “our”).
      </p>
      <p>
        IMPORTANT NOTICE REGARDING ARBITRATION: WHEN YOU AGREE TO THESE TERMS YOU ARE AGREEING (WITH LIMITED EXCEPTION)
        TO RESOLVE ANY DISPUTE BETWEEN YOU AND APTOSNFT MARKET THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN IN
        COURT. PLEASE REVIEW CAREFULLY SECTION 18 “DISPUTE RESOLUTION” BELOW FOR DETAILS REGARDING ARBITRATION. HOWEVER,
        IF YOU ARE A RESIDENT OF A JURISDICTION WHERE APPLICABLE LAW PROHIBITS ARBITRATION OF DISPUTES, THE AGREEMENT TO
        ARBITRATE IN SECTION 18 WILL NOT APPLY TO YOU BUT THE PROVISIONS OF SECTION 17 (GOVERNING LAW) WILL APPLY
        INSTEAD.
      </p>
      <ul className={styles.List}>
        <li>
          <h2>1. Agreement to Terms</h2>
          By using our Services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms,
          you are not authorized to use the Services.
        </li>
        <li>
          <h2>2. Privacy Policy</h2>
          Please review our Privacy Policy, which also governs your use of the Services, for information on how we
          collect, use and share your information.
        </li>
        <li>
          <h2>3. Changes to these Terms or the Services</h2>
          We may update these Terms from time to time at our sole discretion. If we do, we’ll let you know by posting
          the updated Terms on the Site, and/or may also send other communications. It’s important that you review the
          Terms whenever we update them or you use the Services. If you continue to use the Services after we have
          posted updated Terms, it means that you accept and agree to the changes. If you don’t agree to be bound by the
          changes, you may not use the Services anymore. Because our Services are evolving over time, we may change or
          discontinue all or any part of the Services, at any time and without notice, at our sole discretion.
        </li>
        <li>
          <h2>4. Who May Use the Services?</h2>
          <ul className={styles.ListAbc}>
            <li>
              <h3>Eligibility</h3>
              You may use the Services only if you are 18 years or older and capable of forming a binding contract with
              AptosNFT Market, and not otherwise barred from using the Services under applicable law.
            </li>
            <li>
              <h3>Compliance</h3>
              The Services are only available to users in certain jurisdictions who can use the Services as permitted
              under applicable law. You certify that you will comply with all applicable laws (e.g., local, state,
              federal and other laws) when using the Services. Without limiting the foregoing, by using the Services,
              you represent and warrant that: (a) you are not located in a country that is subject to a U.S. Government
              embargo; and (b) you are not listed on any U.S. Government list of prohibited, sanctioned, or restricted
              parties. If you access or use the Services outside the United States, you are solely responsible for
              ensuring that your access and use of the Services in such country, territory or jurisdiction does not
              violate any applicable laws. We reserve the right, but have no obligation, to monitor where our Services
              are accessed from. Furthermore, we reserve the right, at any time, in our sole discretion, to block access
              to the Services, in whole or in part, from any geographic location, IP addresses and unique device
              identifiers or to any user who we believe is in breach of these Terms.
            </li>
          </ul>
        </li>
        <li>
          <h2>5. About the Services</h2>
          <ul className={styles.ListAbc}>
            <li>
              <h3>Our Services</h3>
              Our Services facilitate interaction with certain decentralized cryptographic protocols (“Protocols”) to
              help users craft and execute transactions on the decentralized blockchain(s) supported by the Services
              (“Blockchain”) to: (i) create (aka “mint”) non-fungible tokens (“NFTs”) (the “AptosNFT Market Launchpad”),
              and (ii) purchase, trade, and sell NFTs.
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  You may participate in the Services by linking your digital wallet(s) on supported bridge extensions,
                  which allows you to purchase, store, and engage in transactions using supported digital assets. Before
                  putting up your unique digital asset for sale or putting in an offer to purchase a unique digital
                  asset from another user, we will ask you to download a supported electronic wallet extension and
                  connect and unlock your digital wallets with that extension. Once you submit an order to sell or
                  purchase a unique digital asset, your order is passed on to the applicable extension, which completes
                  the transaction on your behalf.
                </li>
                <li>
                  THE SERVICES ARE ONLY AN INTERFACE WITH THE PROTOCOLS AND BLOCKCHAIN, WHICH WE DO NOT OWN OR CONTROL.
                  WE ARE NOT A MARKETPLACE FACILITATOR, A BROKER, FINANCIAL INSTITUTION, OR CREDITOR. WE ARE NOT A PARTY
                  TO ANY AGREEMENT BETWEEN THE PURCHASER AND SELLER (AS DEFINED BELOW) OF NFTs OR BETWEEN ANY USERS OF
                  THE SERVICES.
                </li>
                <li>
                  YOU BEAR FULL RESPONSIBILITY FOR VERIFYING THE LEGITIMACY AND AUTHENTICITY OF NTFS YOU PURCHASE.
                  NOTWITHSTANDING INDICATORS AND MESSAGES THAT SUGGEST VERIFICATION, APTOSNFT MARKET MAKES NO CLAIMS
                  ABOUT THE LEGITIMACY OR AUTHENTICITY OF ANY NFTS.
                </li>
              </ul>
            </li>
            <li>
              <h3>Transactions Are Conducted on the Blockchain</h3>
              We do not buy, sell or take custody or possession of any NFTs, or act as an agent or custodian for any
              user of the Services. To list an NFT for sale, such NFT must be sent to a Blockchain-based listing smart
              contract, which is deployed by a third-party Protocol. Each such NFT is released automatically upon
              consummation of its sale through the Blockchain, and we do have any insight into or control over this
              process. If you elect to mint, purchase, trade or sell any NFTs, any transactions that you engage in will
              be conducted solely through the Blockchain on which such NFT is recorded. You will be required to make or
              receive payments exclusively through the digital wallet you have connected to the Services. We will have
              no insight into or control over these payments. We do not have the ability to reverse any payments or
              transactions. Accordingly, we will have no liability to you or to any third party for any claims or
              damages that may arise as a result of any transactions that you engage in via the Services. There may be
              royalties associated with the secondary sale of any NFT. You acknowledge and agree that the payment of any
              such royalty shall, in certain circumstances, be programmed to be self-executing via a Blockchain’s
              nonfungible token standard and AptosNFT Market does not have any control or ability to direct such funds
              or the obligation to collect such fees.
            </li>
            <li>
              <h3>Terms Applicable to Purchasers and Sellers</h3>
              If you are using the Services to facilitate the purchase of NFTs, you are a “Purchaser,” and if you are
              using the Services to facilitate the sale of NFTs, you are a “Seller.” If you are either a Purchaser or
              Seller, you agree to the following additional terms:
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Purchase Terms</h3>
                  NFTs are subject to terms agreed upon directly between Purchasers and Sellers (e.g., with respect to
                  the use of the NFT Content (as defined below), or utility associated with a given NFT) (“Purchase
                  Terms”). Seller is also responsible for defining the price to be paid for the NFT. AptosNFT Market is
                  not a party to any such Purchase Terms, which are solely between the Purchaser and the Seller, and is
                  not responsible for ensuring compliance with such the Purchase Terms or mediating or resolving any
                  disputes with respect to the Purchase Terms. Purchaser and Seller are entirely responsible for
                  communicating, agreeing to, and enforcing Purchase Terms. Seller must comply with and fulfill the
                  Purchase Terms with respect to any NFTs that it sells. When you purchase an NFT, you own all personal
                  property rights to the electronic record that comprises the NFT (i.e., the right to sell or otherwise
                  dispose of that NFT). Unless expressly specified in the Purchase Terms, such rights, however, do not
                  include the ownership of the intellectual property rights in any artwork, digital content or other
                  intellectual property to which the NFTs are linked (“NFT Content”). Rather, unless specified otherwise
                  in the Purchase Terms, you have a license to use the NFT Content solely for the following purposes:
                  (1) for Purchaser’s own personal, non-commercial use; (2) attempts to sell or otherwise dispose of the
                  NFT consistent with the ownership of it; and (3) as part of a third party offering compatible with the
                  purchased NFT in the normal course of the permitted end-use of such offering.
                </li>
                <li>
                  <h3>Transaction Fees</h3>
                  Transactions facilitated by the Services may be subject to fees that AptosNFT Market collects to
                  support the NFT creators and the Services, as posted on the Site or otherwise set forth in these
                  Terms, and you agree to pay such fees. You further agree to pay all other fees applicable to the
                  transactions facilitated by the Services, including Gas Fees (as defined below) and hosting fees. “Gas
                  Fees” mean the fees that fund the network of computers that run the decentralized blockchain network,
                  meaning that you will need to pay a Gas Fee for each transaction that occurs via the blockchain
                  network. If you are a Seller, you authorize AptosNFT Market to automatically charge you for any fees
                  due to AptosNFT Market under these Terms or deduct such fees (including the Transaction Fee defined
                  below) directly from your amounts paid to you by the Purchaser.
                </li>
                <li>
                  <h3>Payments due to Seller</h3>
                  If you are a Seller, will receive Revenue less the Transaction Fee for each initial sale of your NFT
                  facilitated by the Services, where “Revenue” means the gross amount paid by the Purchaser for the NFT,
                  and “Transaction Fee” means the percentage of the Revenue generated from the initial sale of your NFT
                  that is determined and listed by you on the Services listing interface, when listing your NFT for
                  sale. The Transaction Fee may be changed from time to time prior to being agreed to on the listing
                  interface with respect to such NFT.
                </li>
                <li>
                  <h3>Taxes</h3>
                  Each party shall be responsible for all Taxes imposed on its income or property. Purchasers will be
                  responsible for paying all such fees.
                </li>
              </ul>
            </li>
            <li>
              <h3>Terms Applicable to Creators</h3>
              If you are using the Services to facilitate the creation of NFTs, you are a “Creator” and agree to the
              following additional terms:
              <ul className={classNames(styles.ListAbc, styles.sublist)}>
                <li>
                  <h3>Royalties</h3>
                  In each sale by other Sellers following your initial sale of your NFT, you will receive the percentage
                  of Revenue with respect to each such sale set forth in the applicable field of the NFT smart contract
                  at the time of creation (“Artist Royalty Fee”).
                </li>
                <li>
                  <h3>NFT Content</h3>
                  As between AptosNFT Market and you, you exclusively own all right, title and interest in and to the
                  NFT Content linked to the NFTs you create. Notwithstanding the foregoing, you grant to AptosNFT Market
                  a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, fully paid-up, license, with the
                  right to sublicense through multiple tiers, to use NFT Content for the purpose of performing AptosNFT
                  Market’s obligations under these Terms, including hosting the NFT Content, and marketing or promoting
                  the Services.
                </li>
                <li>
                  <h3>Creator Obligations</h3>
                  You shall obtain all rights to the NFT Content and comply with all applicable obligations in
                  connection with the use thereof by AptosNFT Market as contemplated in these Terms, and, if applicable,
                  the awarding and administration of any utility offered in connection with your NFT(s), including, but
                  not limited to: (i) clearing and obtaining any rights in connection with the NFT Content, including
                  any music performance rights and payment of royalties to any performing rights organizations; (ii)
                  acquiring any services or materials needed in connection with the NFTs and utility offered to
                  purchasers of the NFTs; and (iii) the costs and compliance for the utility.
                </li>
                <li>
                  <h3>Warranties</h3>
                  You represent and warrant that (A) you have the full right, power and authority to grant the rights
                  granted or agreed to be granted hereunder, including, but not limited to, fully cleared permissions,
                  consents, rights and licenses to the NFT Content in these Terms; (B) the NFT Content, your NFTs, and
                  the listing and sale of your NFTs as contemplated by these Terms, comply with all, and do not and will
                  not violate any applicable law, statute, rule, or regulation, will perform in accordance with the
                  intended specifications and without material error, and will be delivered free and clear of any
                  claims, liens or rights of third parties; (C) the NFT Content and AptosNFT Market’s use thereof in
                  accordance with these Terms does not and will not infringe any intellectual property rights of any
                  third party or any right of privacy or publicity, or contain any libelous, defamatory, obscene or
                  unlawful material, or otherwise violate or infringe any other right of any third party; (D) you will
                  fulfill your obligations under any terms with a Purchaser of your NFTs, as applicable; (E) any
                  advertising or promotion of your NFTs by you or on your behalf will not constitute false, deceptive or
                  unfair advertising or disparagement under any applicable laws and will not suggest a likely increase
                  in value of the NFTs; and (F) you will not use the proceeds retained from sales of the NFT, whether
                  through the Services or any other platform for capital raising purposes.
                </li>
              </ul>
            </li>
            <li>
              <h3>Premint</h3>
              As a Seller, you may be able to determine who is eligible to participate in the initial sale of your NFT
              and receive special perks, experiences, or opportunities as determined by you (“Premint Perks”).
              Individuals may need to sign up on the Site or purchase an applicable NFT in order to receive the Premint
              Perks (the “Premint NFT”), or the Premint Perks may be provided to individuals on a randomized basis. If a
              user purchases a Premint NFT, then that user is a Purchaser, and the Purchaser’s activities are subject to
              Section 5(c). AptosNFT Market does not make any representation, warranty, or guarantee that any Premint
              NFT holder or user will receive any Premint Perks or achieve any particular outcome as a result of owning
              any Premint NFT. AptosNFT Market reserves the right, at its sole discretion, to restrict, limit, or deny
              any Premint Perks to any Premint NFT holder or any user, including to limit the period of time when a
              Premint Perk is available, for any reason, at any time. Premint Perks are not intended to be an
              endorsement of any project, Creator, NFT, individual or any other thing, and AptosNFT Market makes no
              recommendation and provides no investment advice in connection with any Premint Perks or otherwise as a
              result of holding a Premint NFT.
            </li>
            <li>
              <h3>Suspension or Termination</h3>
              We may suspend or terminate your access to the Services at any time in connection with any transaction as
              required by applicable law, any governmental authority, or if we in our sole and reasonable discretion
              determine you are violating these Terms or the terms of any third-party service provider. Such suspension
              or termination shall not constitute a breach of these Terms by AptosNFT Market. In accordance with its
              anti-money laundering, anti-terrorism, anti-fraud, and other compliance policies and practices, we may
              impose reasonable limitations and controls on the ability of you or any beneficiary to utilize the
              Services. Such limitations may include where good cause exists, rejecting transaction requests, freezing
              funds, or otherwise restricting you from using the Services.
            </li>
          </ul>
        </li>
        <li>
          <h2>6. Feedback</h2>
          We appreciate feedback, comments, ideas, proposals and suggestions for improvements to the Services
          (“Feedback”). If you choose to submit Feedback, you agree that we are free to use it without any restriction
          or compensation to you.
        </li>
        <li>
          <h2>7. Your Content</h2>
          <ul className={styles.ListAbc}>
            <li>
              <h3>Posting Content</h3>
              Our Services may allow you to store or share content such as text (in posts or communications with
              others), files, documents, graphics, images, music, software, audio and video. Anything (other than
              Feedback) that you post or otherwise make available through the Services is referred to as “User Content”.
              User Content includes the NFT Content. AptosNFT Market does not claim any ownership rights in any User
              Content and nothing in these Terms will be deemed to restrict any rights that you may have to your User
              Content.
            </li>
            <li>
              <h3>Permissions to Your User Content</h3>
              By making any User Content available through the Services, you hereby grant to AptosNFT Market a
              non-exclusive, transferable, worldwide, royalty-free license, with the right to sublicense, to use, copy,
              modify, create derivative works based upon, distribute, publicly display, and publicly perform your User
              Content in connection with operating and providing the Services.
            </li>
            <li>
              <h3>Your Responsibility for User Content</h3>
              You are solely responsible for all your User Content. You represent and warrant that you have (and will
              have) all rights that are necessary to grant us the license rights in your User Content under these Terms.
              You represent and warrant that neither your User Content, nor your use and provision of your User Content
              to be made available through the Services, nor any use of your User Content by AptosNFT Market on or
              through the Services will infringe, misappropriate or violate a third party’s intellectual property
              rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.
            </li>
            <li>
              <h3>Removal of User Content</h3>
              You can remove certain of your User Content by specifically deleting it. You should know that in certain
              instances, some of your User Content (such as posts or comments you make, or your NFT Content) may not be
              completely removed and copies of your User Content may continue to exist on the Services or NFT. To the
              maximum extent permitted by law, we are not responsible or liable for the removal or deletion of (or the
              failure to remove or delete) any of your User Content.
            </li>
            <li>
              <h3>AptosNFT Market’s Intellectual Property</h3>
              We may make available through the Services content that is subject to intellectual property rights. We
              retain all rights to that content.
            </li>
          </ul>
        </li>
        <li>
          <h2>8. Acceptable Use Policy and AptosNFT Market’s Enforcement Rights</h2>
          You agree not to do any of the following:
          <ul className={styles.ListAbc}>
            <li>
              Post, upload, publish, submit or transmit any User Content that: (i) infringes, misappropriates or
              violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual
              property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would
              violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent,
              false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v)
              promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi)
              is violent or threatening or promotes violence or actions that are threatening to any person or entity; or
              (vii) promotes illegal or harmful activities or substances;
            </li>
            <li>
              Use, display, mirror or frame the Services or any individual element within the Services, AptosNFT
              Market’s name, any AptosNFT Market trademark, logo or other proprietary information, or the layout and
              design of any page or form contained on a page, without AptosNFT Market’s express written consent;
            </li>
            <li>
              Access, tamper with, or use non-public areas of the Services, AptosNFT Market’s computer systems, or the
              technical delivery systems of AptosNFT Market’s providers;
            </li>
            <li>
              Attempt to probe, scan or test the vulnerability of any AptosNFT Market system or network or breach any
              security or authentication measures;
            </li>
            <li>
              Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure
              implemented by AptosNFT Market or any of AptosNFT Market’s providers or any other third party (including
              another user) to protect the Services;
            </li>
            <li>
              Attempt to access or search the Services or download content from the Services using any engine, software,
              tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like)
              other than the software and/or search agents provided by AptosNFT Market or other generally available
              third-party web browsers;
            </li>
            <li>
              Send any unsolicited or unauthorized advertising, promotional materials, email, junk mail, spam, chain
              letters or other form of solicitation;
            </li>
            <li>
              Use the Services, or any portion thereof, for any commercial purpose or for the benefit of any third party
              or in any manner not permitted by these Terms;
            </li>
            <li>
              Forge any TCP/IP packet header or any part of the header information in any email or newsgroup posting, or
              in any way use the Services to send altered, deceptive or false source- identifying information;
            </li>
            <li>
              Attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the
              Services;
            </li>
            <li>
              Interfere with, or attempt to interfere with, the access of any user, host or network, including, without
              limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Services;
            </li>
            <li>
              Collect or store any personally identifiable information from the Services from other users of the
              Services without their express permission;
            </li>
            <li>Impersonate or misrepresent your affiliation with any person or entity;</li>
            <li>Create or list counterfeit items (including any NFTs);</li>
            <li>
              Engage or assist in any activity that violates any law, statute, ordinance, regulation, or sanctions
              program, including but not limited to the U.S. Department of Treasury’s Office of Foreign Assets Control
              (“OFAC”), or that involves proceeds of any unlawful activity (including but not limited to money
              laundering, terrorist financing or deliberately engaging in activities designed to adversely affect the
              performance of the Services);
            </li>
            <li>
              Engage in wash trading, front running, pump and dump trading, ramping, cornering, or other deceptive or
              manipulative trading activities, including but not limited to: (i) trading an NFT at successively lower or
              higher prices for the purpose of creating or inducing a false, misleading or artificial appearance of
              activity in such NFT; (ii) unduly or improperly influencing the market price for such NFT or establishing
              a price which does not reflect the true state of the market in such NFT; (iii) executing or causing the
              execution of any transaction in an NFT which involves no material change in the beneficial ownership
              thereof; and (iv) participating in, facilitating, assisting or knowingly transacting with any pool,
              syndicate or joint account organized for the purpose of unfairly or deceptively influencing the market
              price of an NFT.
            </li>
            <li>
              Use the Services to participate in fundraising for a business, protocol, or platform, including but not
              limited to creating, listing, or buying assets that are redeemable for financial instruments, assets that
              give owners the rights to participate in an ICO or any securities offering, or assets that entitle owners
              to financial rewards, including but not limited to, DeFi (or decentralized finance) yield bonuses, staking
              bonuses, and burn discounts;
            </li>
            <li>Fabricate in any way any transaction or process related thereto;</li>
            <li>Place misleading bids or offers;</li>
            <li>
              Disguise or interfere in any way with the IP address of the computer you are using to access or use the
              Services or that otherwise prevents us from correctly identifying the IP address of the computer you are
              using to access the Services;
            </li>
            <li>
              Transmit, exchange, or otherwise support the direct or indirect proceeds of criminal or fraudulent
              activity;
            </li>
            <li>Violate any applicable law or regulation; or</li>
            <li>Encourage or enable any other individual to do any of the foregoing.</li>
          </ul>
          AptosNFT Market is not obligated to monitor access to or use of the Services or to review or edit any content.
          However, we have the right to do so for the purpose of operating the Services, to ensure compliance with these
          Terms and to comply with applicable law or other legal requirements. We reserve the right, but are not
          obligated, to remove or disable access to any content, including User Content, at any time and without notice,
          including, but not limited to, if we, at our sole discretion, consider it objectionable or in violation of
          these Terms. We have the right to investigate violations of these Terms or conduct that affects the Services.
          We may also consult and cooperate with law enforcement authorities to prosecute users who violate the law. The
          sale of stolen assets, assets taken without authorization, and otherwise illegally obtained assets using the
          Service is prohibited. If you have reason to believe that an asset listed using the Service was illegally
          obtained, please contact us immediately. Listing illegally obtained assets may result in your listings being
          canceled, your assets being hidden, or you being suspended from the Services.
        </li>
        <li>
          <h2>9. Copyright Policy</h2>
          AptosNFT Market respects copyright law and expects its users to do the same. It is AptosNFT Market’s policy to
          terminate in appropriate circumstances users who repeatedly infringe or are believed to be repeatedly
          infringing the rights of copyright holders.
        </li>
        <li>
          <h2>10. Links to Third Party Websites or Resources</h2>
          The Services (including the App) may allow you to access third-party websites or other resources. We provide
          access only as a convenience and are not responsible for the content, products or services on or available
          from those resources or links displayed on such websites. You acknowledge sole responsibility for and assume
          all risk arising from your use of any third-party resources.
        </li>
        <li>
          <h2>11. Termination</h2>
          We may suspend or terminate your access to and use of the Services at our sole discretion, at any time and
          without notice to you. You may disconnect your digital wallet at any time. You acknowledge and agree that we
          shall have no liability or obligation to you in such an event and that you will not be entitled to a refund of
          any amounts that you have already paid to us or any third party, to the fullest extent permitted by applicable
          law. Upon any termination, discontinuation or cancellation of the Services, the following Sections will
          survive: 5(c)(ii) and 5(d)(i) (only for payments due and owing to AptosNFT Market prior to the termination),
          5(c)(iv), 7(b), 7(c), 7(e), 9, 12, 13, 15, 16, 17, 18 and 19.
        </li>
        <li>
          <h2>12. Warranty Disclaimers</h2>
          <p>
            THE SERVICES, ANY CONTENT CONTAINED THEREIN, AND ANY NFTS (INCLUDING ASSOCIATED NFT CONTENT) CREATED,
            CLAIMED, PURCHASED, SOLD OR TRADED USING THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. APTOSNFT MARKET (AND ITS SUPPLIERS)
            MAKE NO WARRANTY THAT THE SERVICES (INCLUDING ANY MATERIAL, INFORMATION OR CONTENT THEREIN): (I) WILL MEET
            YOUR REQUIREMENTS; (II) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (III)
            WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (IV) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR
            SAFE. APTOSNFT MARKET DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT
            LIMITATION, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
            ENJOYMENT OR NON- INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AS TO THE SERVICES, ANY
            MATERIAL, INFORMATION OR CONTENT CONTAINED THEREIN, AND ANY NFTS CREATED, CLAIMED, PURCHASED, SOLD OR TRADED
            VIA THE SERVICES.
          </p>
          <p>
            WE FURTHER EXPRESSLY DISCLAIM ALL LIABILITY OR RESPONSIBILITY IN CONNECTION WITH THIRD PARTY SERVICES.
            NOTHING HEREIN NOR ANY USE OF OUR SERVICES IN CONNECTION WITH THIRD PARTY SERVICES CONSTITUTES OUR
            ENDORSEMENT, RECOMMENDATION OR ANY OTHER AFFILIATION OF OR WITH ANY THIRD PARTY SERVICES.
          </p>
          <p>
            WE CANNOT GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT SECURITY
            RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY
            BREACH OF SECURITY.
          </p>
          <p>
            APTOSNFT MARKET WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND TAKES NO RESPONSIBILITY FOR, AND
            WILL NOT BE LIABLE TO YOU FOR ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN
            PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED WALLET ADDRESSES;
          </p>
          <p>
            (II) SERVER FAILURE OR DATA LOSS; (III) BLOCKCHAIN NETWORKS, CRYPTOCURRENCY WALLETS OR CORRUPT FILES; (IV)
            UNAUTHORIZED ACCESS TO SERVICES; OR (V) ANY THIRD PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF
            VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK.
          </p>
          <p>
            NFTS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE
            APPLICABLE BLOCKCHAIN NETWORK. ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL ASSET OCCURS ON
            THE DECENTRALIZED LEDGER WITHIN SUCH BLOCKCHAIN NETWORK. WE DO NOT GUARANTEE THAT WE CAN EFFECT THE TRANSFER
            OF TITLE OR RIGHT IN ANY NFTS OR OTHER DIGITAL ASSETS, OR THAT ANY ASSOCIATED PAYMENT WILL BE SUCCESSFUL.
          </p>
          <p>
            PERFORMANCE OF THE SERVICES CAUSED BY SUCH FACTORS. WE DO NOT MAKE ANY REPRESENTATIONS OR WARRANTIES AGAINST
            THE POSSIBILITY OF DELETION, MISDELIVERY OR FAILURE TO STORE COMMUNICATIONS, PERSONALIZED SETTINGS OR OTHER
            DATA.
          </p>
          <p>
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. ACCORDINGLY, SOME OF THE ABOVE
            DISCLAIMERS OF WARRANTIES MAY NOT APPLY TO YOU.
          </p>
        </li>
        <li>
          <h2>13. Assumption of Risk</h2>
          You accept, acknowledge, and assume the following risks:
          <ul className={styles.ListAbc}>
            <li>
              The prices and liquidity of digital assets (including any NFTs) are extremely volatile. Fluctuations in
              the price of other digital assets could materially and adversely affect the NFTs made available through
              the Services, which may also be subject to significant price volatility.
            </li>
            <li>
              You are solely responsible for determining what, if any, Taxes and Gas Fees apply to your transactions
              through the Services. AptosNFT Market is not responsible for determining the Taxes that apply to such
              transactions.
            </li>
            <li>
              NFTs are digital assets recorded and transferable on the supporting Blockchain. Any transfer of digital
              assets occurs within the supporting Blockchain and not on the Services, which is not controlled in any
              capacity by AptosNFT Market. Transactions involving NFTs may be irreversible, and, accordingly, losses due
              to fraudulent or accidental transactions may not be recoverable. Some transactions involving NFTs shall be
              deemed to be made when recorded on a public ledger, which is not necessarily the date or time that you
              initiated the transaction.
            </li>
            <li>
              The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and
              new regulations or policies may materially adversely affect the development of the Services and the
              utility of NFTs
            </li>
            <li>
              There are risks associated with using Internet-based digital asset, including but not limited to, the risk
              of hardware, software and Internet connections, the risk of malicious software introduction, and the risk
              that third parties may obtain unauthorized access to information stored within your wallet. AptosNFT
              Market will not be responsible for any communication failures, disruptions, errors, distortions or delays
              you may experience when effecting transactions involving NFTs and other supported digital assets, however
              caused, including Gas Fees paid or payable in connection therewith.
            </li>
            <li>
              By accessing and using the Services, you represent that you understand the inherent risks associated with
              using cryptographic and blockchain-based systems, and that you have a working knowledge of digital assets.
              Such systems may have vulnerabilities or other failures, or other abnormal behavior. AptosNFT Market is
              not responsible for any issues with the Blockchains, including forks, technical node issues or any other
              issues having fund losses as a result. You acknowledge that the cost and speed of transacting with
              cryptographic and blockchain-based systems such as Ethereum are variable and may increase at any time. You
              further acknowledge the risk that your digital assets may lose some or all of their value while they are
              supplied to or from the Services. You further acknowledge that we are not responsible for any of these
              variables or risks and cannot be held liable for any resulting losses that you experience while accessing
              Services. Accordingly, you understand and agree to assume full responsibility for all of the risks of
              accessing and using and interacting with the Services.
            </li>
          </ul>
        </li>
        <li>
          <h2>14. Indemnity</h2>
          You will indemnify, defend (at AptosNFT Market’s option) and hold AptosNFT Market and its officers, directors,
          employees and agents, harmless from and against any claims, disputes, demands, liabilities, damages, losses,
          and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or
          in any way connected with (a) your access to or use of the Services, (b) your User Content, or (c) your
          violation of these Terms. You may not settle or otherwise compromise any claim subject to this Section without
          AptosNFT Market’s prior written approval.
        </li>
        <li>
          <h2>15. Limitation of Liability</h2>
          <ul className={styles.ListAbc}>
            <li>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER APTOSNFT MARKET NOR ITS SERVICE PROVIDERS INVOLVED IN
              CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR
              CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS
              OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST
              OF SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR
              INABILITY TO USE THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT
              LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT APTOSNFT MARKET OR ITS SERVICE PROVIDERS HAVE BEEN
              INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE
              FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY
              FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
            </li>
            <li>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE AGGREGATE TOTAL LIABILITY OF APTOSNFT MARKET
              AND ITS AGENT, REPRESENTATIVES, AND AFFILIATES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM
              THE USE OF OR INABILITY TO USE THE SERVICES EXCEED THE AMOUNTS YOU HAVE PAID OR ARE PAYABLE BY YOU TO
              APTOSNFT MARKET FOR USE OF THE SERVICES OR ONE HUNDRED U.S. DOLLARS ($100), IF YOU HAVE NOT HAD ANY
              PAYMENT OBLIGATIONS TO APTOSNFT MARKET, AS APPLICABLE.
            </li>
            <li>
              THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE
              BARGAIN BETWEEN APTOSNFT MARKET AND YOU.
            </li>
          </ul>
        </li>
        <li>
          <h2>16. Governing Law and Forum Choice</h2>
          These Terms and any action related thereto will be governed by the U.S. Federal Arbitration Act, federal
          arbitration law, and the laws of the State of Delaware, without regard to its conflict of laws provisions.
          Except as otherwise expressly set forth in Section 18 “Dispute Resolution,” the exclusive jurisdiction for all
          Disputes (defined below) that you and AptosNFT Market are not required to arbitrate will be the state and
          federal courts located in Delaware, and you and AptosNFT Market each waive any objection to jurisdiction and
          venue in such courts
        </li>
        <li>
          <h2>17. Dispute Resolution</h2>
          <ul className={styles.ListAbc}>
            <li>
              Informal Resolution of Disputes. You and AptosNFT Market must first attempt to resolve any dispute, claim
              or controversy arising out of or relating to these Terms or the breach, termination, enforcement,
              interpretation or validity thereof or the use of the Services (collectively, “Disputes”) informally.
              Accordingly, neither you nor AptosNFT Market may start a formal arbitration proceeding for at least sixty
              (60) days after one party notifies the other party of a claim in writing. As part of this informal
              resolution process, you must deliver your written notices via email to contact@AptosNFT.Market.
              Notwithstanding the foregoing, we each retain the right to seek injunctive or other equitable relief from
              a court to prevent (or enjoin) the infringement or misappropriation of our intellectual property rights at
              any time.
            </li>
            <li>
              Mandatory Arbitration of Disputes. We each agree that any Dispute will be resolved solely by binding,
              individual arbitration and not in a class, representative or consolidated action or proceeding. You and
              AptosNFT Market agree that the U.S. Federal Arbitration Act governs the interpretation and enforcement of
              these Terms, and that you and AptosNFT Market are each waiving the right to a trial by jury or to
              participate in a class action. This arbitration provision shall survive termination of these Terms.
            </li>
            <li>
              Exceptions. As limited exceptions to Section 18(b) above: (i) we both may seek to resolve a Dispute in
              small claims court if it qualifies; and (ii) we each retain the right to seek injunctive or other
              equitable relief from a court to prevent (or enjoin) the infringement or misappropriation of our
              intellectual property rights.
            </li>
            <li>
              Conducting Arbitration and Arbitration Rules. The arbitration will be conducted by the American
              Arbitration Association (“AAA”) under its Consumer Arbitration Rules (the “AAA Rules”) then in effect,
              except as modified by these Terms. The AAA Rules are available at www.adr.org or by calling
              1-800-778-7879. A party who wishes to start arbitration must submit a written Demand for Arbitration to
              AAA and give notice to the other party as specified in the AAA Rules. The AAA provides a form Demand for
              Arbitration at www.adr.org.
              <br />
              <br />
              Any arbitration hearings will take place in the county (or parish) where you live, unless we both agree to
              a different location. The parties agree that the arbitrator shall have exclusive authority to decide all
              issues relating to the interpretation, applicability, enforceability and scope of this arbitration
              agreement.
            </li>
            <li>
              Arbitration Costs. Payment of all filing, administration and arbitrator fees will be governed by the AAA
              Rules, and we won’t seek to recover the administration and arbitrator fees we are responsible for paying,
              unless the arbitrator finds your Dispute frivolous. If we prevail in arbitration, we’ll pay all of our
              attorneys’ fees and costs and won’t seek to recover them from you. If you prevail in arbitration, you will
              be entitled to an award of attorneys’ fees and expenses to the extent provided under applicable law.
            </li>
            <li>
              Injunctive and Declaratory Relief. Except as provided in Section 18(c) above, the arbitrator shall
              determine all issues of liability on the merits of any claim asserted by either party and may award
              declaratory or injunctive relief only in favor of the individual party seeking relief and only to the
              extent necessary to provide relief warranted by that party’s individual claim. To the extent that you or
              we prevail on a claim and seek public injunctive relief (that is, injunctive relief that has the primary
              purpose and effect of prohibiting unlawful acts that threaten future injury to the public), the
              entitlement to and extent of such relief must be litigated in a civil court of competent jurisdiction and
              not in arbitration. The parties agree that litigation of any issues of public injunctive relief shall be
              stayed pending the outcome of the merits of any individual claims in arbitration.
            </li>
            <li>
              Class Action Waiver. YOU AND APTOSNFT MARKET AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN
              YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
              REPRESENTATIVE PROCEEDING. Further, if the parties’ Dispute is resolved through arbitration, the
              arbitrator may not consolidate another person’s claims with your claims, and may not otherwise preside
              over any form of a representative or class proceeding. If this specific provision is found to be
              unenforceable, then the entirety of this Dispute Resolution section shall be null and void.
            </li>
            <li>
              Severability. With the exception of any of the provisions in Section 18(g) of these Terms (“Class Action
              Waiver”), if an arbitrator or court of competent jurisdiction decides that any part of these Terms is
              invalid or unenforceable, the other parts of these Terms will still apply.
            </li>
          </ul>
        </li>
        <li>
          <h2>18. General Terms</h2>
          <ul className={styles.ListAbc}>
            <li>
              <h3>Reservation of Rights</h3>
              AptosNFT Market and its licensors exclusively own all right, title and interest in and to the Services,
              including all associated intellectual property rights. You acknowledge that the Services are protected by
              copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove,
              alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated
              in or accompanying the Services.
            </li>
            <li>
              <h3>Entire Agreement</h3>
              These Terms constitute the entire and exclusive understanding and agreement between AptosNFT Market and
              you regarding the Services, and these Terms supersede and replace all prior oral or written understandings
              or agreements between AptosNFT Market and you regarding the Services. If any provision of these Terms is
              held invalid or unenforceable by an arbitrator or a court of competent jurisdiction, that provision will
              be enforced to the maximum extent permissible, and the other provisions of these Terms will remain in full
              force and effect. Except where provided by applicable law in your jurisdiction, you may not assign or
              transfer these Terms, by operation of law or otherwise, without AptosNFT Market’s prior written consent.
              Any attempt by you to assign or transfer these Terms absent our consent or your statutory right, without
              such consent, will be null. AptosNFT Market may freely assign or transfer these Terms without restriction.
              Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors
              and permitted assigns.
            </li>
            <li>
              <h3>Notices</h3>
              Any notices or other communications provided by AptosNFT Market under these Terms will be given: (i) via
              email; or (ii) by posting to the Services. For notices made by email, the date of receipt will be deemed
              the date on which such notice is transmitted.
            </li>
            <li>
              <h3>Waiver of Rights</h3>
              AptosNFT Market’s failure to enforce any right or provision of these Terms will not be considered a waiver
              of such right or provision. The waiver of any such right or provision will be effective only if in writing
              and signed by a duly authorized representative of AptosNFT Market. Except as expressly set forth in these
              Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to
              its other remedies under these Terms or otherwise.
            </li>
          </ul>
        </li>
        <li>
          <h2>19. Contact Information</h2>
          If you have any questions about these Terms or the Services, please contact AptosNFT Market at{' '}
          <a href="mailto:contact@AptosNFT.Market">contact@AptosNFT.Market</a>
        </li>
      </ul>
    </Page>
  )
}
