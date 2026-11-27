// src/components/Footer/MainFooter.jsx

import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Logo from "../../Assest/Bottom.png";
import india from "../../Assest/india.png";

export default function MainFooter() {
  const navigate = useNavigate();
  return (
    <footer className="bg-navy-950 text-slate-400 border-t-4 border-orange-600 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Important Notice */}
          <div className="space-y-5">
            <h3 className="relative pb-3 text-sm font-bold uppercase tracking-wider text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:rounded-full after:bg-orange-500">
              Important Notice
            </h3>

            <p className="text-sm leading-relaxed">
              This is a{" "}
              <span className="font-semibold text-white">
                PRIVATE CONSULTANCY
              </span>{" "}
              portal Owned by <b className="text-white">EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED</b>. We provide professional assistance for{" "}
              <b className="text-white"> Company Registration</b>, application filing,
              document preparation and compliance support.
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="relative pb-3 text-sm font-bold uppercase tracking-wider text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:rounded-full after:bg-orange-500">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Apply for Company Registration", hash: "registration-form" },
                { name: "Types of Business Entities", hash: "company-types" },
                { name: "Procedure", hash: "procedure" },
                { name: "Documents Required", hash: "documents" },
                { name: "Training & Webinars", hash: "training" },
                { name: "Benefits", hash: "benefits" },
                { name: "FAQs", hash: "faq" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        navigate(`/#${item.hash}`, { replace: true });
                      }, 100);
                    }}
                    className="hover:text-white transition-all duration-300 flex items-center gap-2.5 hover:translate-x-1 text-left w-full bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Contact */}
          <div className="space-y-5">
            <h3 className="relative pb-3 text-sm font-bold uppercase tracking-wider text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:rounded-full after:bg-orange-500">
              Policies & Contact
            </h3>

            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Contact Us", path: "/contact" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Terms & Conditions", path: "/term-condition" },
                { name: "About Us", path: "/about" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-all duration-300 flex items-center gap-2.5 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2.5 text-sm">
              <p className="flex items-center gap-3 break-all">
                <FaEnvelope className="shrink-0 text-orange-500 text-base" />
                info@companyregistrationindia.org
              </p>

              <p className="flex items-center gap-3 break-all">
                <FaPhoneAlt className="shrink-0 text-orange-500 text-base" />
                +91-9211037448
              </p>
            </div>
          </div>

          {/* Portal Logo */}
          <div className="space-y-5 flex flex-col items-center md:items-start">
  <h3 className="md:self-start relative pb-3 text-sm font-bold uppercase tracking-wider text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:rounded-full after:bg-orange-500">
    Trusted By
  </h3>

  <div className="flex flex-col items-center md:items-start gap-4">
    <div className="rounded-xl bg-white p-3 shadow-sm">
      <img
        src={india}
        alt="Azadi Ka Amrit Mahotsav"
        className="h-16 sm:h-20 w-auto object-contain"
      />
    </div>

    <div className="rounded-xl bg-white p-3 shadow-sm">
      <img
        src={Logo}
        alt="FSSAI Registration Portal"
        className="h-16 sm:h-20 w-auto object-contain"
      />
    </div>
  </div>
</div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-slate-400">
          <p>
            This is not a Government run website. The form is not the actual 
            government or Ministry of Corporate Affairs (MCA) registration form. It is only to collect information from our 
            clients so that our experts can easily understand their business needs. 
            By proceeding with this website, you acknowledge that we are a private 
            consultancy providing assistance and the fee collected is a consultancy fee.
          </p>
        </div>

        {/* Copyright Line */}
        <div className="mt-5 pt-5 border-t border-white/10 text-center">
          <p className="text-xs text-slate-500">
            Copyright © 2026 Company Registration Portal | All Rights Reserved | 
            Website Design, Developed &amp; Google Promotion by{" "}
            <span className="text-slate-300 font-medium">EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}