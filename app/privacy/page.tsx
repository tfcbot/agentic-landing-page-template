'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="bg-[#0A0118] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-medium mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Privacy Policy
            </h1>

            <p className="text-gray-400 mb-8">
              Last updated: January 1st, 2024
            </p>

            <div className="space-y-8">
              <p className="text-gray-400">
                Your privacy is important to us. It is the policy of Agentic TeamOS ("Agentic TeamOS") to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, https://www.agenticteamos.com, and other sites we own and operate.
              </p>

              <p className="text-gray-400">
                Personal information is any information about you which can be used to identify you. This includes information about you as a person (such as name, address, and date of birth), your devices, payment details, and even information about how you use a website or online service.
              </p>

              <p className="text-gray-400">
                In the event our site contains links to third-party sites and services, please be aware that those sites and services have their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy information about how they collect and use personal information. This Privacy Policy does not apply to any of your activities after you leave our site.
              </p>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">Information We Collect</h2>
                <p className="text-gray-400">
                  Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">Log Data</h2>
                <p className="text-gray-400">
                  When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details about your visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">How We Use Your Information</h2>
                <p className="text-gray-400">
                  We use the information we collect to provide and maintain our service, to notify you about changes to our service, to provide customer support, to gather analysis or valuable information to improve our service, to monitor the usage of our service, and to detect, prevent and address technical issues.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">Data Security</h2>
                <p className="text-gray-400">
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">Security of Your Personal Information</h2>
                <p className="text-gray-400">
                  When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
                </p>
                <p className="text-gray-400 mt-4">
                  Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">Your Rights and Controlling Your Personal Information</h2>
                <p className="text-gray-400">
                  You have certain rights in relation to your personal information. These include: the right to object to the processing of your information for certain purposes, the right to access and rectify your personal information, and the ability to erase, restrict or receive a machine-readable copy of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">Changes to This Privacy Policy</h2>
                <p className="text-gray-400">
                  We may change this privacy policy at any time. The new privacy policy will be displayed on our website. The date this privacy policy was last updated appears at the top.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 text-white">Contact Us</h2>
                <p className="text-gray-400">
                  Questions and comments regarding this privacy policy should be sent to: admin@blurware.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 