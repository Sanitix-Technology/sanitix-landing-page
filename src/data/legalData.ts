export interface LegalSection {
  id: string;
  number?: string | number;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: Array<{
    title: string;
    paragraphs?: string[];
    bulletPoints?: string[];
  }>;
}

export interface LegalDocument {
  id: 'terms' | 'privacy' | 'cancellation';
  tabName: string;
  badge: string;
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  preamble: string[];
  sections: LegalSection[];
}

export const legalDocuments: Record<'terms' | 'privacy' | 'cancellation', LegalDocument> = {
  terms: {
    id: 'terms',
    tabName: 'Terms of Use',
    badge: 'Statutory Agreement',
    title: 'SANITIX TECHNOLOGIES PRIVATE LIMITED — TERMS OF USE',
    effectiveDate: 'September 2026',
    lastUpdated: 'September 2026',
    preamble: [
      'These Terms of Use (“Terms”) govern your access to and use of the Sanitix website, mobile applications, software, digital platform and related services operated under the corporate name Sanitix Technologies Private Limited (“Sanitix”, “we”, “us” or “our”).',
      'By accessing the Platform, creating an account, requesting a Service, making a Booking or otherwise using Sanitix, you acknowledge that you have read, understood and agreed to these Terms, the Sanitix Privacy Policy and the cancellation and refund provisions contained in these Terms.',
      'If you do not agree with these Terms, please do not access or use the Platform.'
    ],
    sections: [
      {
            "id": "sec-1",
            "number": 1,
            "title": "DEFINITIONS",
            "paragraphs": [
                  "For these Terms, \u201cPlatform\u201d means the Sanitix website, mobile applications, software, digital interfaces, systems and related technology through which Sanitix facilitates access to Services.",
                  "\u201cCustomer\u201d or \u201cyou\u201d means an individual, business, organisation or other person who accesses the Platform to search for, request, book or receive a Service.",
                  "\u201cService Provider\u201d means an independent third-party business, machinery owner, equipment owner, contractor, professional or other service provider offering or fulfilling Services through the Platform.",
                  "\u201cPilot\u201d means the individual assigned by or associated with a Service Provider to drive a vehicle, operate machinery, perform a Service or otherwise fulfil a Booking.",
                  "\u201cServices\u201d means the services made available through Sanitix, including Water Tanker Services, Dumper Services, JCB & Heavy Equipment Services, Septic Tank Cleaning, Sewer & Drain Cleaning, Suction Services, Jetting Services, Deep Cleaning Services and other cleaning, sanitation, equipment or related services made available through the Platform.",
                  "\u201cBooking\u201d means a Service request submitted by a Customer through the Platform and accepted or confirmed through the applicable Sanitix process.",
                  "\u201cService Location\u201d means the location specified by the Customer where the requested Service is to be performed."
            ]
      },
      {
            "id": "sec-2",
            "number": 2,
            "title": "ABOUT SANITIX",
            "paragraphs": [
                  "Sanitix is a technology-enabled marketplace platform designed to connect Customers who require sanitation, cleaning, machinery or related Services with independent Service Providers and Pilots who are available to provide those Services.",
                  "Sanitix provides the digital infrastructure through which Customers and Service Providers can discover Services, submit and manage Bookings, exchange necessary information, facilitate payments where supported, receive Service updates and maintain relevant digital records.",
                  "The actual physical Service is performed by the applicable Service Provider and/or Pilot. Unless expressly stated otherwise for a particular Service, Sanitix does not itself own the machinery, vehicles or equipment used by independent Service Providers and does not itself employ the Pilots performing those Services."
            ]
      },
      {
            "id": "sec-3",
            "number": 3,
            "title": "SANITIX'S ROLE AS A PLATFORM",
            "paragraphs": [
                  "Sanitix operates as a technology platform that facilitates connections between Customers and independent Service Providers.",
                  "Depending on the Service, Sanitix may facilitate Service discovery, Booking requests, Service Provider matching, communication, payment collection or facilitation, Service status, digital verification, invoices, receipts, customer support and other technology-enabled functions.",
                  "Sanitix does not guarantee that every Service, Service Provider, Pilot, vehicle, machine or piece of equipment will be available at every location or at all times.",
                  "The availability and functionality of individual Platform features may vary depending on the Service, location, operational circumstances and applicable law."
            ]
      },
      {
            "id": "sec-4",
            "number": 4,
            "title": "INDEPENDENT SERVICE PROVIDERS",
            "paragraphs": [
                  "Service Providers available through Sanitix are independent third parties. They may independently own, operate, manage or provide water tankers, dumpers, JCBs, heavy equipment, suction equipment, jetting equipment, cleaning equipment and other machinery or resources required to perform Services.",
                  "Service Providers are responsible for fulfilling the Services they accept through the Platform and for maintaining applicable licences, permits, registrations, equipment requirements and legal and safety standards relevant to their Services.",
                  "The use of Sanitix does not, by itself, create an employment relationship, partnership, joint venture or agency relationship between Sanitix and any independent Service Provider or Pilot."
            ]
      },
      {
            "id": "sec-5",
            "number": 5,
            "title": "CUSTOMER AND SERVICE PROVIDER RELATIONSHIP",
            "paragraphs": [
                  "When a Customer submits a Booking and an independent Service Provider accepts or fulfils that Booking, the actual Service is performed by the relevant Service Provider and/or Pilot.",
                  "Sanitix facilitates the digital connection, Booking management, communication and other Platform functions associated with the transaction.",
                  "The specific terms of a Service may additionally depend on the Booking details, applicable pricing, Service requirements, Service Provider arrangements and applicable law."
            ]
      },
      {
            "id": "sec-6",
            "number": 6,
            "title": "ACCOUNT REGISTRATION AND ACCESS",
            "paragraphs": [
                  "Certain features of Sanitix require the Customer or Service Provider to create an Account.",
                  "You must provide accurate and current information during registration and must keep your Account information reasonably up to date.",
                  "You are responsible for maintaining the security of your Account and for activity conducted through your Account, except where such activity results from circumstances beyond your reasonable control and is promptly reported to Sanitix.",
                  "Sanitix may require mobile-number verification or other authentication before allowing access to certain Platform functions."
            ]
      },
      {
            "id": "sec-7",
            "number": 7,
            "title": "OTP VERIFICATION AND ACCOUNT SECURITY",
            "paragraphs": [
                  "Sanitix uses One-Time Passwords (OTPs) as an important authentication and security mechanism.",
                  "OTP verification is primarily used when a user logs into the Sanitix application or performs an action requiring confirmation of the registered mobile number. When a user enters a mobile number and receives an OTP, the OTP helps verify that the person attempting to access the Account has control of that registered mobile number.",
                  "This verification helps Sanitix reduce unauthorised Account access, fraudulent registrations, Account misuse and other security risks. Depending on the Service and Platform functionality, OTP-based verification may also be used for specific Booking or Service-related actions where additional confirmation is required.",
                  "You must keep OTPs confidential and must not intentionally disclose them to another person except where the Platform expressly requires an OTP to be provided as part of an intended Service action."
            ]
      },
      {
            "id": "sec-8",
            "number": 8,
            "title": "SERVICE REQUESTS AND BOOKINGS",
            "paragraphs": [
                  "Customers may request Services by selecting the required Service and providing relevant information such as the Service Location, preferred date and time, quantity, duration and specific Service requirements.",
                  "Submitting a Service request does not necessarily guarantee that a Service Provider will accept or fulfil the request.",
                  "A Booking becomes confirmed when the applicable confirmation process on the Platform is completed. Sanitix may communicate the Booking status through the application, SMS, WhatsApp, email, telephone or other authorised communication channels."
            ]
      },
      {
            "id": "sec-9",
            "number": 9,
            "title": "SERVICE AVAILABILITY",
            "paragraphs": [
                  "Service availability depends on factors including Service Provider availability, equipment availability, Service Location, requested date and time, Service requirements, operational circumstances, weather, access conditions and other factors that may affect Service fulfilment.",
                  "Sanitix may display available Services or Service Providers based on information available to the Platform at the relevant time. Availability may change before a Booking is confirmed."
            ]
      },
      {
            "id": "sec-10",
            "number": 10,
            "title": "SERVICE LOCATION AND CUSTOMER ACCESS RESPONSIBILITIES",
            "paragraphs": [
                  "Customers are responsible for providing an accurate Service Location and ensuring that the Service Provider and Pilot can reasonably and lawfully access the location.",
                  "Where applicable, the Customer is responsible for obtaining building, society, municipal, parking, site or other permissions necessary for the Service.",
                  "Customers must also disclose material access restrictions, hazards, site conditions or other circumstances that may reasonably affect Service performance."
            ]
      },
      {
            "id": "sec-11",
            "number": 11,
            "title": "SITE CONDITIONS AND ADDITIONAL REQUIREMENTS",
            "paragraphs": [
                  "Certain Services involve heavy vehicles, machinery, suction systems, jetting equipment or other specialised equipment and may therefore require suitable physical access.",
                  "Narrow roads, restricted entry, insufficient parking, distance from equipment access, building restrictions, underground utilities, unsafe areas, restricted working hours or other site conditions may affect the Service.",
                  "Where actual site conditions materially differ from the information provided during Booking, the Service may require modification, additional charges or cancellation, depending on the circumstances and applicable Service conditions."
            ]
      },
      {
            "id": "sec-12",
            "number": 12,
            "title": "PRICING",
            "paragraphs": [
                  "Service pricing may depend on the type of Service, Service Location, equipment, quantity, duration, Service Provider, applicable taxes, site conditions and other operational factors.",
                  "Where a price or estimate is displayed before Booking, the final amount may differ where the actual Service requirements materially differ from the information provided by the Customer or where additional work or resources are reasonably required.",
                  "Where reasonably practicable, applicable additional charges will be communicated to the Customer before they are incurred."
            ]
      },
      {
            "id": "sec-13",
            "number": 13,
            "title": "PAYMENT METHODS",
            "paragraphs": [
                  "Sanitix currently supports digital payments through authorised payment infrastructure, including UPI, credit cards, debit cards and net banking, subject to availability.",
                  "Sanitix may use Razorpay or other authorised payment service providers to facilitate digital transactions.",
                  "Payment methods and availability may change from time to time depending on the Service, location, payment provider and applicable requirements."
            ]
      },
      {
            "id": "sec-14",
            "number": 14,
            "title": "PAYMENT FLOW",
            "paragraphs": [
                  "Depending on the Service and operational arrangement, a Customer may make payment through Sanitix or directly to the applicable Service Provider.",
                  "Where Sanitix facilitates or collects a payment, the transaction may be processed through an authorised payment provider and relevant payment records may be maintained for Booking, accounting, reconciliation, support and legal purposes.",
                  "Where payment is made directly to a Service Provider, the Customer remains responsible for paying the applicable amount communicated through the authorised Booking or Service process."
            ]
      },
      {
            "id": "sec-15",
            "number": 15,
            "title": "INVOICES AND PAYMENT RECORDS",
            "paragraphs": [
                  "Sanitix may provide digital invoices, receipts or transaction records for Services or payments facilitated through the Platform.",
                  "Such records may include the Booking ID, Service details, applicable amount, payment status, transaction reference and other relevant information.",
                  "The tax treatment and invoicing entity may vary depending on the Service and the applicable Service Provider arrangement."
            ]
      },
      {
            "id": "sec-16",
            "number": 16,
            "title": "SERVICE COMMENCEMENT AND COMPLETION",
            "paragraphs": [
                  "Sanitix may use digital mechanisms to record significant stages of a Booking, including Service commencement and completion.",
                  "Depending on the Service, these mechanisms may include OTP verification, Customer confirmation, Pilot confirmation, timestamps, photographs, digital Service logs or other reasonable verification methods.",
                  "The applicable verification process may vary according to the nature of the Service."
            ]
      },
      {
            "id": "sec-17",
            "number": 17,
            "title": "CUSTOMER RESPONSIBILITIES",
            "paragraphs": [
                  "Customers are responsible for providing accurate Booking information, ensuring lawful access to the Service Location, disclosing relevant site conditions, following reasonable safety instructions and making payments through authorised channels.",
                  "Customers must not interfere with machinery, operate equipment without authorisation, direct a Pilot to perform unsafe activities, conceal material hazards or obstruct the safe performance of a Service.",
                  "Customers are also expected to treat Service Providers and Pilots respectfully and not use Sanitix for unlawful or abusive purposes."
            ]
      },
      {
            "id": "sec-18",
            "number": 18,
            "title": "SERVICE PROVIDER RESPONSIBILITIES",
            "paragraphs": [
                  "Service Providers are expected to provide accurate information during onboarding, maintain applicable licences and permits, use appropriate equipment, fulfil accepted Bookings professionally and comply with applicable safety and legal requirements.",
                  "Where appropriate, Sanitix may request documentation relating to the Service Provider, its business, vehicles, machinery, equipment or Pilots for onboarding, verification, safety, compliance or operational purposes."
            ]
      },
      {
            "id": "sec-19",
            "number": 19,
            "title": "SERVICE PROVIDER VERIFICATION",
            "paragraphs": [
                  "Sanitix may conduct verification or documentation checks before or during Service Provider onboarding.",
                  "Depending on the nature of the Service, such checks may include identity, business, vehicle, machinery, equipment, licence, permit or other relevant documentation.",
                  "Verification is intended to support Platform operations and does not constitute a permanent guarantee regarding the condition, conduct, performance or continued compliance of any Service Provider or Pilot."
            ]
      },
      {
            "id": "sec-20",
            "number": 20,
            "title": "CUSTOMER CANCELLATION",
            "paragraphs": [
                  "A Customer may cancel a Booking through the available Platform functionality or by contacting Sanitix.",
                  "The financial consequences of cancellation may depend on the stage of the Booking. Where a Pilot or Service Provider has already incurred travel, mobilisation or other reasonable costs, such costs may be recoverable from the Customer where permitted by the applicable Service conditions.",
                  "Where a Booking is cancelled before meaningful fulfilment activity has commenced, the Customer may generally be eligible for a refund of amounts paid, subject to applicable payment-processing charges or other disclosed conditions."
            ]
      },
      {
            "id": "sec-21",
            "number": 21,
            "title": "CANCELLATION AFTER PILOT ARRIVAL",
            "paragraphs": [
                  "If the Customer cancels a Booking after the Pilot has reached the Service Location, or if the Service cannot be performed because of circumstances attributable to the Customer, Sanitix may apply an applicable cancellation or mobilisation charge.",
                  "Where the cancellation results in costs being incurred by the Pilot or Service Provider, the applicable amount may be deducted or charged in accordance with the Booking and applicable Service conditions."
            ]
      },
      {
            "id": "sec-22",
            "number": 22,
            "title": "CANCELLATION AFTER SERVICE COMMENCEMENT",
            "paragraphs": [
                  "Once a Service has commenced, cancellation may not result in a full refund.",
                  "The amount payable may take into account the work already performed, resources deployed, time spent, distance travelled and other reasonable costs incurred in connection with the Service.",
                  "Any refund or adjustment will be determined according to the circumstances of the Booking and applicable law."
            ]
      },
      {
            "id": "sec-23",
            "number": 23,
            "title": "PILOT OR SERVICE PROVIDER CANCELLATION",
            "paragraphs": [
                  "If a Pilot or Service Provider cancels an accepted Booking without a valid operational or safety-related reason, Sanitix may apply applicable deductions, penalties or other consequences under its Service Provider arrangements.",
                  "Where a cancellation results in an applicable deduction, the amount may be determined based on the Booking and costs reasonably incurred.",
                  "Where appropriate, Sanitix may attempt to arrange an alternative Service Provider for the Customer."
            ]
      },
      {
            "id": "sec-24",
            "number": 24,
            "title": "CANCELLATION COSTS AND DEDUCTIONS",
            "paragraphs": [
                  "Where a cancellation results in costs being incurred by a Pilot or Service Provider, Sanitix may recover or adjust such costs in accordance with the applicable Booking and Service conditions.",
                  "For example, where a Customer cancels after the Pilot has arrived at the Service Location, the applicable cancellation amount may reflect the Pilot's reasonable travel, mobilisation and other directly related costs.",
                  "Similarly, where a Pilot cancels an accepted Booking without a valid reason, Sanitix may apply an applicable deduction from the Pilot or Service Provider settlement.",
                  "Any specific deduction or charge communicated through the Platform will apply to that Booking, subject to applicable law."
            ]
      },
      {
            "id": "sec-25",
            "number": 25,
            "title": "REFUNDS",
            "paragraphs": [
                  "Refund eligibility depends on the circumstances of the Booking, including the reason for cancellation, timing of cancellation, Service status, amount paid and costs already incurred.",
                  "Where a refund is approved for an online payment, Sanitix or its authorised payment provider will process the refund through the applicable payment mechanism.",
                  "Banking and payment-network processing times may vary and are outside Sanitix's direct control."
            ]
      },
      {
            "id": "sec-26",
            "number": 26,
            "title": "SERVICE QUALITY AND COMPLAINTS",
            "paragraphs": [
                  "If a Customer believes that a Service was not performed as agreed, the Customer should contact Sanitix as soon as reasonably possible.",
                  "Sanitix may request the Booking ID, photographs, payment information, Service details or other relevant evidence to understand the issue.",
                  "Sanitix may communicate with the relevant Service Provider or Pilot and facilitate a reasonable resolution based on the circumstances, available records, applicable policies and applicable law."
            ]
      },
      {
            "id": "sec-27",
            "number": 27,
            "title": "SAFETY",
            "paragraphs": [
                  "Certain Sanitix Services involve heavy machinery, vehicles, suction systems, high-pressure equipment, waste-handling activities, cleaning operations or other operational risks.",
                  "Customers must not enter restricted operating areas, operate machinery without authorisation, interfere with equipment, conceal material hazards or instruct a Pilot to perform an unsafe activity.",
                  "A Pilot or Service Provider may refuse, suspend or stop a Service where continuing would create a material safety risk."
            ]
      },
      {
            "id": "sec-28",
            "number": 28,
            "title": "PROHIBITED USE",
            "paragraphs": [
                  "You must not use Sanitix to create fraudulent Bookings, manipulate payments or refunds, abuse promotional benefits, impersonate another person, harass Service Providers or Pilots, circumvent authorised Platform charges, access systems without permission, introduce malicious software, scrape Platform information without authorisation or otherwise misuse the Platform.",
                  "Customers and Service Providers must not intentionally use the Platform to bypass Sanitix and establish unauthorised off-platform transactions for the purpose of avoiding applicable Platform charges."
            ]
      },
      {
            "id": "sec-29",
            "number": 29,
            "title": "COMMUNICATIONS",
            "paragraphs": [
                  "Sanitix may communicate with Customers, Service Providers and Pilots through SMS, WhatsApp, email, telephone, push notifications, in-app notifications or other authorised channels.",
                  "Communications may include OTPs, Booking confirmations, Service updates, payment information, invoices, cancellation information, support communications and security-related notices.",
                  "Service-related communications may be sent where necessary to provide or manage the requested Service."
            ]
      },
      {
            "id": "sec-30",
            "number": 30,
            "title": "LOCATION SERVICES",
            "paragraphs": [
                  "Sanitix may use location information where necessary to provide location-based features, identify the Service Location, facilitate navigation, support Service coordination, display Service status, assist with safety and prevent fraud or misuse.",
                  "Where live location functionality is enabled, location information may be shared with the relevant parties to the extent reasonably necessary for Service fulfilment.",
                  "Further details are provided in the Privacy Policy."
            ]
      },
      {
            "id": "sec-31",
            "number": 31,
            "title": "THIRD-PARTY SERVICES",
            "paragraphs": [
                  "Sanitix may use third-party providers for payment processing, maps and navigation, SMS, WhatsApp, email, cloud infrastructure, analytics, authentication, security and other technical functions.",
                  "The use of such third-party services may be subject to their respective terms and privacy policies."
            ]
      },
      {
            "id": "sec-32",
            "number": 32,
            "title": "RATINGS AND FEEDBACK",
            "paragraphs": [
                  "Where enabled, Customers and Service Providers may provide ratings, reviews or feedback concerning their experience on the Platform.",
                  "Feedback must be truthful, relevant and lawful and must not contain abusive, threatening, fraudulent or intentionally misleading content.",
                  "Sanitix may moderate or remove content that violates applicable policies or law."
            ]
      },
      {
            "id": "sec-33",
            "number": 33,
            "title": "INTELLECTUAL PROPERTY",
            "paragraphs": [
                  "All intellectual property rights in the Sanitix Platform and Sanitix-owned content belong to Sanitix or its licensors.",
                  "This includes software, trademarks, logos, designs, interfaces, graphics, text, photographs, databases and other proprietary material.",
                  "Except as permitted by law or expressly authorised by Sanitix, users may not copy, modify, reproduce, distribute, sell, reverse engineer or commercially exploit Sanitix-owned content."
            ]
      },
      {
            "id": "sec-34",
            "number": 34,
            "title": "PRIVACY",
            "paragraphs": [
                  "Your use of Sanitix is also governed by the Sanitix Privacy Policy, which explains how personal information is collected, used, processed, stored and shared.",
                  "The Privacy Policy forms an integral part of these Terms."
            ]
      },
      {
            "id": "sec-35",
            "number": 35,
            "title": "ACCOUNT SUSPENSION OR TERMINATION",
            "paragraphs": [
                  "Sanitix may suspend, restrict or terminate an Account where reasonably necessary because of fraud, misuse, security concerns, unlawful activity, payment abuse, materially false information, repeated violations, harassment, safety concerns, unauthorised off-platform transactions or other circumstances permitted by applicable law.",
                  "Where appropriate and legally permissible, Sanitix may provide notice or an opportunity to address the relevant issue."
            ]
      },
      {
            "id": "sec-36",
            "number": 36,
            "title": "PLATFORM AVAILABILITY",
            "paragraphs": [
                  "Sanitix aims to maintain a reliable Platform but does not guarantee that the Platform will always be available, uninterrupted, error-free or compatible with every device, network or operating environment.",
                  "Sanitix may update, modify, suspend or discontinue Platform features where reasonably necessary for technical, operational, security, legal or business reasons."
            ]
      },
      {
            "id": "sec-37",
            "number": 37,
            "title": "FORCE MAJEURE",
            "paragraphs": [
                  "Sanitix will not be responsible for delays or failures caused by circumstances beyond its reasonable control, including natural disasters, extreme weather, floods, government restrictions, road closures, civil disturbances, strikes, telecommunications failures, infrastructure failures or similar events."
            ]
      },
      {
            "id": "sec-38",
            "number": 38,
            "title": "LIMITATION OF LIABILITY",
            "paragraphs": [
                  "To the maximum extent permitted by applicable law, Sanitix will not be responsible for indirect, incidental, special or consequential losses arising from use of the Platform.",
                  "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited.",
                  "Nothing in these Terms is intended to remove or restrict statutory rights or remedies that cannot lawfully be waived."
            ]
      },
      {
            "id": "sec-39",
            "number": 39,
            "title": "INDEMNIFICATION",
            "paragraphs": [
                  "To the extent permitted by applicable law, you agree to indemnify and hold harmless Sanitix and its officers, directors, employees and representatives against claims, losses, liabilities, costs and expenses arising from your violation of these Terms, unlawful use of the Platform, fraud or misuse, infringement of third-party rights or materially misleading or unlawful information submitted by you."
            ]
      },
      {
            "id": "sec-40",
            "number": 40,
            "title": "CHANGES TO THESE TERMS",
            "paragraphs": [
                  "Sanitix may update these Terms from time to time to reflect changes in Services, technology, business practices or applicable law.",
                  "The revised version will be published on the Platform with an updated Last Updated date. Where required by applicable law, Sanitix may provide additional notice of material changes."
            ]
      },
      {
            "id": "sec-41",
            "number": 41,
            "title": "GOVERNING LAW AND JURISDICTION",
            "paragraphs": [
                  "These Terms shall be governed by the laws of India.",
                  "Subject to mandatory rights available under applicable law, disputes relating to these Terms or use of the Platform shall be subject to the jurisdiction of the competent courts having jurisdiction over Sanitix's registered office.",
                  "Nothing in this section limits any statutory right or remedy available to a Customer under applicable law."
            ]
      },
      {
            "id": "sec-42",
            "number": 42,
            "title": "GRIEVANCE REDRESSAL",
            "paragraphs": [
                  "Sanitix is committed to providing a structured mechanism for receiving and addressing Customer complaints and Service-related concerns.",
                  "Customers may raise complaints through:",
                  "Email: info@sanitix.in",
                  "Phone: +91 22697 10156",
                  "Sanitix will designate and publish the details of its Grievance Officer as required under applicable law. The name, designation and contact details of the designated officer will be made available on the Platform once the appointment is completed."
            ]
      },
      {
            "id": "sec-43",
            "number": 43,
            "title": "LEGAL ENTITY AND CONTACT INFORMATION",
            "paragraphs": [
                  "Legal Entity Name: Sanitix Technologies Private Limited",
                  "The company is incorporated under the Companies Act, 2013 and operates under the corporate name Sanitix Technologies Private Limited.",
                  "Registered Office:",
                  "Building No./Flat No.: 493",
                  "Road/Street: Maruti Kunj, Street No. C-11",
                  "Locality/Sub Locality: Shyam Kunj",
                  "City/Town/Village: Sohna",
                  "District: Gurugram",
                  "State: Haryana",
                  "PIN Code: 122102",
                  "Country: India",
                  "Website: sanitix.in",
                  "Email: info@sanitix.in",
                  "Customer Support: +91 22697 10156"
            ]
      }
]
  },
  privacy: {
    id: 'privacy',
    tabName: 'Privacy Policy',
    badge: 'Compliance & Data Protection',
    title: 'SANITIX TECHNOLOGIES PRIVATE LIMITED — PRIVACY POLICY',
    effectiveDate: 'September 2026',
    lastUpdated: 'September 2026',
    preamble: [
      'Sanitix Technologies Private Limited (“Sanitix”, “we”, “us” or “our”) respects the privacy of individuals who use its Platform.',
      'This Privacy Policy explains how Sanitix collects, uses, processes, stores and shares personal information in connection with its website, mobile applications, Services and related digital platforms.',
      'Sanitix intends to operate its data practices in accordance with applicable Indian data-protection and consumer-protection requirements.'
    ],
    sections: [
      {
            "id": "sec-1",
            "number": 1,
            "title": "INFORMATION WE COLLECT",
            "paragraphs": [
                  "Depending on how you use Sanitix, we may collect Account and contact information, Booking information, payment and transaction information, Service Provider information, location information, device and technical information, communication information and information required for security, fraud prevention and legal compliance.",
                  "The information collected will depend on the Services and features you use."
            ]
      },
      {
            "id": "sec-2",
            "number": 2,
            "title": "ACCOUNT AND CONTACT INFORMATION",
            "paragraphs": [
                  "When you create or use a Sanitix Account, we may collect information such as your name, mobile number, email address, profile information and authentication-related information.",
                  "This information may be used to create and manage your Account, authenticate access, communicate with you and provide Services."
            ]
      },
      {
            "id": "sec-3",
            "number": 3,
            "title": "OTP AND AUTHENTICATION INFORMATION",
            "paragraphs": [
                  "Sanitix uses OTP-based authentication to verify access to Accounts and confirm control over the registered mobile number.",
                  "When you enter your mobile number and receive an OTP, the OTP is used to authenticate the login or other authorised action. This helps reduce unauthorised Account access, fraudulent registrations and misuse of the Platform.",
                  "OTP information may also be used for specific Booking or Service-related verification where the Platform requires additional confirmation."
            ]
      },
      {
            "id": "sec-4",
            "number": 4,
            "title": "BOOKING INFORMATION",
            "paragraphs": [
                  "When you request or receive a Service, Sanitix may collect information such as the selected Service, Booking ID, Service Location, requested date and time, quantity or duration, Service requirements, Booking history, cancellation information and Service completion information.",
                  "This information is necessary to facilitate Bookings, provide support, maintain records and improve Platform operations."
            ]
      },
      {
            "id": "sec-5",
            "number": 5,
            "title": "PAYMENT INFORMATION",
            "paragraphs": [
                  "Sanitix may process information such as payment amount, payment status, payment method, transaction reference, refund information and invoice information.",
                  "Digital payments may be processed through authorised payment providers, including Razorpay.",
                  "Where payment information is processed directly by a third-party payment provider, that provider may handle the relevant information in accordance with its own privacy policy and applicable requirements."
            ]
      },
      {
            "id": "sec-6",
            "number": 6,
            "title": "SERVICE PROVIDER AND PILOT INFORMATION",
            "paragraphs": [
                  "If you register or participate as a Service Provider or Pilot, Sanitix may collect information necessary for onboarding, verification, Service fulfilment, payment, safety and compliance.",
                  "This may include identity information, contact details, business information, vehicle or equipment information, applicable licences, permits, banking information and other documentation reasonably required for the relevant Service."
            ]
      },
      {
            "id": "sec-7",
            "number": 7,
            "title": "LOCATION INFORMATION",
            "paragraphs": [
                  "Sanitix may process location information where necessary to provide location-based Services.",
                  "For Customers, this may include the Service Location and other location information required to facilitate the Booking.",
                  "For Pilots, location information may be used for navigation, Service coordination, Service status, safety, location verification and live tracking where such functionality is enabled.",
                  "Location access may depend on device permissions and the specific features being used."
            ]
      },
      {
            "id": "sec-8",
            "number": 8,
            "title": "DEVICE AND TECHNICAL INFORMATION",
            "paragraphs": [
                  "Sanitix may collect information such as device type, operating system, application version, IP address, browser information, device identifiers, network information, crash reports, diagnostics, security logs and information about interactions with the Platform.",
                  "This information may be used to maintain Platform security, diagnose technical issues, improve performance and understand Platform usage."
            ]
      },
      {
            "id": "sec-9",
            "number": 9,
            "title": "COMMUNICATION AND SUPPORT INFORMATION",
            "paragraphs": [
                  "When you communicate with Sanitix through email, telephone, WhatsApp, SMS, in-app support or other authorised channels, we may process information contained in those communications.",
                  "Such information may be used to provide support, resolve complaints, investigate issues and maintain relevant Service records."
            ]
      },
      {
            "id": "sec-10",
            "number": 10,
            "title": "HOW WE USE PERSONAL INFORMATION",
            "paragraphs": [
                  "Sanitix may use personal information to create and manage Accounts, authenticate users, send OTPs, facilitate Bookings, connect Customers with Service Providers, communicate Service information, facilitate payments, generate invoices, provide customer support, investigate complaints, prevent fraud, maintain security, improve Services, send permitted communications, comply with applicable law and establish or defend legal rights."
            ]
      },
      {
            "id": "sec-11",
            "number": 11,
            "title": "SHARING INFORMATION WITH SERVICE PROVIDERS",
            "paragraphs": [
                  "When a Customer makes a Booking, Sanitix may share information reasonably necessary for the relevant Service Provider or Pilot to fulfil the Booking.",
                  "Depending on the Service, this may include the Customer's name, contact information, Service Location, Booking details and Service requirements.",
                  "Sanitix seeks to limit such sharing to information reasonably necessary for the relevant purpose."
            ]
      },
      {
            "id": "sec-12",
            "number": 12,
            "title": "INFORMATION SHARED WITH CUSTOMERS",
            "paragraphs": [
                  "Where necessary for a Booking, Sanitix may provide Customers with relevant information about the assigned Service Provider or Pilot.",
                  "This may include a name, relevant profile information, Service or equipment information and other details necessary to identify or coordinate with the person fulfilling the Booking."
            ]
      },
      {
            "id": "sec-13",
            "number": 13,
            "title": "PAYMENT AND TECHNOLOGY PROVIDERS",
            "paragraphs": [
                  "Sanitix may share relevant information with authorised third-party providers that support payment processing, maps, navigation, SMS, WhatsApp, email, cloud infrastructure, analytics, authentication, security and customer support.",
                  "Such providers may process information on behalf of Sanitix or as otherwise permitted under applicable law."
            ]
      },
      {
            "id": "sec-14",
            "number": 14,
            "title": "LEGAL AND SECURITY DISCLOSURES",
            "paragraphs": [
                  "Sanitix may disclose personal information where reasonably necessary to comply with applicable law, lawful government requests or court orders, prevent fraud, investigate security incidents, protect users, enforce Platform Terms or establish and defend legal rights."
            ]
      },
      {
            "id": "sec-15",
            "number": 15,
            "title": "DATA RETENTION",
            "paragraphs": [
                  "Sanitix retains personal information for as long as reasonably necessary to provide Services, maintain Account and Booking records, process payments, resolve disputes, prevent fraud, maintain security and comply with applicable legal, accounting or regulatory requirements.",
                  "When information is no longer required, Sanitix may delete, anonymise or securely dispose of it, subject to applicable retention obligations."
            ]
      },
      {
            "id": "sec-16",
            "number": 16,
            "title": "DATA SECURITY",
            "paragraphs": [
                  "Sanitix uses reasonable technical and organisational measures designed to protect personal information against unauthorised access, disclosure, loss, misuse, alteration and destruction.",
                  "Security measures may include access controls, authentication, secure infrastructure, monitoring, logging and encryption where appropriate.",
                  "No electronic system or method of transmission can guarantee absolute security."
            ]
      },
      {
            "id": "sec-17",
            "number": 17,
            "title": "COOKIES AND SIMILAR TECHNOLOGIES",
            "paragraphs": [
                  "The Sanitix website and applications may use cookies and similar technologies for security, session management, preferences, analytics, performance and Platform functionality.",
                  "Where required by applicable law, Sanitix will provide appropriate notices and choices concerning such technologies."
            ]
      },
      {
            "id": "sec-18",
            "number": 18,
            "title": "SERVICE AND PROMOTIONAL COMMUNICATIONS",
            "paragraphs": [
                  "Sanitix may send communications necessary to operate an Account or fulfil a Booking, including OTPs, Booking confirmations, Service updates, payment notifications, invoices, security alerts and support messages.",
                  "Sanitix may also send promotional communications regarding Services, offers or campaigns where permitted by applicable law."
            ]
      },
      {
            "id": "sec-19",
            "number": 19,
            "title": "DATA RIGHTS",
            "paragraphs": [
                  "Subject to applicable law, individuals may have rights relating to their personal data, including rights to access information, request correction, request deletion where applicable, withdraw consent where processing is based on consent and raise grievances.",
                  "The scope and manner of exercising such rights will depend on applicable law and the nature of the relevant processing."
            ]
      },
      {
            "id": "sec-20",
            "number": 20,
            "title": "WITHDRAWAL OF CONSENT",
            "paragraphs": [
                  "Where processing is based on consent, an individual may withdraw consent in accordance with applicable law.",
                  "Withdrawal of consent may affect Sanitix's ability to provide certain features or Services where the relevant information is necessary for those Services.",
                  "Withdrawal does not affect processing that is otherwise permitted or required by law."
            ]
      },
      {
            "id": "sec-21",
            "number": 21,
            "title": "ACCOUNT DELETION",
            "paragraphs": [
                  "Where Account deletion is available, users may request deletion through available Platform functionality or by contacting Sanitix.",
                  "Certain information may be retained where necessary for legal compliance, taxation, accounting, dispute resolution, fraud prevention, security or other lawful purposes."
            ]
      },
      {
            "id": "sec-22",
            "number": 22,
            "title": "CHILDREN'S INFORMATION",
            "paragraphs": [
                  "Sanitix Services are not intended to be independently used by children where applicable law requires parental or guardian involvement.",
                  "Sanitix does not knowingly seek to collect children's personal information where such collection is prohibited by applicable law."
            ]
      },
      {
            "id": "sec-23",
            "number": 23,
            "title": "THIRD-PARTY SERVICES AND LINKS",
            "paragraphs": [
                  "The Platform may contain links to third-party websites, applications or services.",
                  "Sanitix does not control the privacy practices of third parties and users should review the applicable privacy policies of those services separately."
            ]
      },
      {
            "id": "sec-24",
            "number": 24,
            "title": "INTERNATIONAL PROCESSING",
            "paragraphs": [
                  "Certain technology, infrastructure or service providers used by Sanitix may process information outside India.",
                  "Where such processing occurs, Sanitix will handle personal information in accordance with applicable legal requirements."
            ]
      },
      {
            "id": "sec-25",
            "number": 25,
            "title": "BUSINESS TRANSFERS",
            "paragraphs": [
                  "If Sanitix becomes involved in a merger, acquisition, restructuring, financing, sale of assets or similar transaction, relevant information may be transferred as part of the transaction, subject to applicable law and appropriate safeguards."
            ]
      },
      {
            "id": "sec-26",
            "number": 26,
            "title": "CHANGES TO THIS PRIVACY POLICY",
            "paragraphs": [
                  "Sanitix may update this Privacy Policy periodically to reflect changes in Services, technology, business practices or applicable law.",
                  "The revised Policy will be published on the Platform with an updated Last Updated date. Where required by law, Sanitix may provide additional notice of material changes."
            ]
      },
      {
            "id": "sec-27",
            "number": 27,
            "title": "PRIVACY AND GRIEVANCE CONTACT",
            "paragraphs": [
                  "Sanitix Technologies Private Limited",
                  "Building No./Flat No.: 493",
                  "Road/Street: Maruti Kunj, Street No. C-11",
                  "Locality/Sub Locality: Shyam Kunj",
                  "Sohna, Gurugram, Haryana \u2013 122102",
                  "India",
                  "Email: info@sanitix.in",
                  "Phone: +91 22697 10156",
                  "The details of the designated Grievance Officer will be published on the Platform once the appointment is completed."
            ]
      }
]
  },
  cancellation: {
    id: 'cancellation',
    tabName: 'Cancellation & Refund Policy',
    badge: 'Fair Cancellation Framework',
    title: 'SANITIX TECHNOLOGIES PRIVATE LIMITED — CANCELLATION & REFUND POLICY',
    effectiveDate: 'September 2026',
    lastUpdated: 'September 2026',
    preamble: [
      'Sanitix operates a technology-enabled marketplace through which Customers can connect with independent Service Providers and Pilots.',
      'Cancellation and refund treatment therefore depends on the stage of the Booking, the party initiating the cancellation and the costs already incurred in connection with the Service.'
    ],
    sections: [
      {
            "id": "sec-1",
            "number": 1,
            "title": "CUSTOMER CANCELLATION",
            "paragraphs": [
                  "A Customer may cancel a Booking through the Platform or by contacting Sanitix.",
                  "If cancellation occurs before the Pilot or Service Provider has incurred meaningful fulfilment costs, the Customer may generally receive a refund of the amount paid, subject to applicable payment-processing charges or disclosed Booking conditions.",
                  "If the Pilot has already started travelling, arrived at the Service Location or commenced the Service, applicable costs may be deducted from the amount refundable to the Customer."
            ]
      },
      {
            "id": "sec-2",
            "number": 2,
            "title": "CANCELLATION AFTER PILOT ARRIVAL",
            "paragraphs": [
                  "If a Customer cancels after the Pilot has reached the Service Location, or if the Service cannot be performed because of circumstances attributable to the Customer, Sanitix may apply a cancellation or mobilisation charge.",
                  "The charge may reflect reasonable costs incurred by the Pilot or Service Provider, including travel, mobilisation, waiting time or other directly related costs."
            ]
      },
      {
            "id": "sec-3",
            "number": 3,
            "title": "CANCELLATION AFTER SERVICE COMMENCEMENT",
            "paragraphs": [
                  "Once the Service has commenced, cancellation will generally not result in a full refund.",
                  "The final amount payable or refundable may take into account work already performed, resources deployed, time spent, distance travelled and other reasonable costs incurred in connection with the Service."
            ]
      },
      {
            "id": "sec-4",
            "number": 4,
            "title": "PILOT CANCELLATION",
            "paragraphs": [
                  "If a Pilot cancels an accepted Booking without a valid operational, safety-related or other legitimate reason, Sanitix may apply an applicable deduction from the Pilot or Service Provider settlement.",
                  "As a general Platform policy, Sanitix may apply a 1% cancellation deduction in circumstances where the Pilot cancels an accepted Booking without a valid reason, subject to the applicable Service Provider arrangement and applicable law."
            ]
      },
      {
            "id": "sec-5",
            "number": 5,
            "title": "CUSTOMER CANCELLATION AFTER PILOT ARRIVAL",
            "paragraphs": [
                  "Where a Customer cancels after the Pilot has reached the Service Location, Sanitix may apply a 1% cancellation charge where applicable.",
                  "Where the Pilot or Service Provider has incurred costs exceeding the standard cancellation amount, the applicable Booking conditions may permit recovery of reasonable additional costs directly attributable to the cancellation, subject to applicable law."
            ]
      },
      {
            "id": "sec-6",
            "number": 6,
            "title": "SERVICE PROVIDER OR PILOT FAILURE",
            "paragraphs": [
                  "If a Pilot or Service Provider is unable to fulfil a confirmed Booking because of equipment failure, unavailability, access restrictions, safety concerns or another legitimate operational circumstance, Sanitix may attempt to arrange an alternative Service Provider where reasonably possible.",
                  "If the Service cannot be fulfilled, an applicable refund may be processed."
            ]
      },
      {
            "id": "sec-7",
            "number": 7,
            "title": "CUSTOMER-CAUSED SERVICE FAILURE",
            "paragraphs": [
                  "If the Pilot reaches the Service Location but cannot perform the Service because the Customer has provided an incorrect location, failed to provide access, failed to obtain required permission, materially misrepresented the Service requirement or otherwise prevented the Service from being performed, applicable cancellation, mobilisation or waiting charges may apply."
            ]
      },
      {
            "id": "sec-8",
            "number": 8,
            "title": "REFUND PROCESSING",
            "paragraphs": [
                  "Where a refund is approved for a digital payment, Sanitix or its authorised payment provider will process the refund through the applicable payment mechanism.",
                  "The time required for the refund to appear in the Customer's account may vary depending on the payment provider, bank or payment network."
            ]
      },
      {
            "id": "sec-9",
            "number": 9,
            "title": "CASH BOOKINGS",
            "paragraphs": [
                  "Where cash payment is permitted for a Booking, any approved refund or adjustment will be handled through a method communicated by Sanitix based on the circumstances of the Booking."
            ]
      },
      {
            "id": "sec-10",
            "number": 10,
            "title": "DISPUTED CANCELLATIONS",
            "paragraphs": [
                  "Where a Customer or Service Provider disputes a cancellation charge, Sanitix may review relevant Booking records, timestamps, location information, communication records, payment information, Service status and other available information before determining the applicable adjustment.",
                  "Any determination will remain subject to applicable law and the rights available to the relevant parties."
            ]
      },
      {
            "id": "sec-11",
            "number": 11,
            "title": "FRAUDULENT OR ABUSIVE CANCELLATIONS",
            "paragraphs": [
                  "Sanitix may investigate repeated, fraudulent or abusive cancellation activity, including cancellation manipulation intended to avoid legitimate charges or misuse refund mechanisms.",
                  "Where appropriate, Sanitix may suspend or restrict the relevant Account in accordance with the Terms of Use and applicable law."
            ]
      },
      {
            "id": "sec-12",
            "number": 12,
            "title": "CONTACT",
            "paragraphs": [
                  "Sanitix Technologies Private Limited",
                  "Building No./Flat No.: 493",
                  "Maruti Kunj, Street No. C-11",
                  "Shyam Kunj, Sohna",
                  "Gurugram, Haryana \u2013 122102",
                  "India",
                  "Email: info@sanitix.in",
                  "Phone: +91 22697 10156"
            ]
      }
]
  }
};
