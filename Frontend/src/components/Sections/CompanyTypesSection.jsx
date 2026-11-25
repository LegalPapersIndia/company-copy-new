// src/components/Sections/CompanyTypesSection.jsx

import {
  FaBuilding,
  FaUsers,
  FaUser,
  FaHandshake,
  FaStore,
  FaSeedling,
  FaCheckCircle,
  FaInfoCircle,
} from 'react-icons/fa';

const companyTypes = [
  {
    title: "Private Limited Company",
    icon: <FaBuilding size={24} aria-hidden="true" />,
    description:
      "A separate legal entity with limited liability, popular with startups and growing businesses that want to raise funds.",
    points: [
      "Minimum 2 directors and 2 shareholders",
      "Liability limited to the shares held",
      "Easy to raise investment and add shareholders",
    ],
    bestFor: "Startups, growing businesses, investor-backed ventures",
  },
  {
    title: "Limited Liability Partnership (LLP)",
    icon: <FaUsers size={24} aria-hidden="true" />,
    description:
      "A mix of a company and a partnership: partners enjoy limited liability with flexible internal management.",
    points: [
      "Minimum 2 designated partners",
      "No minimum capital requirement",
      "Lower compliance than a company in many cases",
    ],
    bestFor: "Professionals, consultants and small service firms",
  },
  {
    title: "One Person Company (OPC)",
    icon: <FaUser size={24} aria-hidden="true" />,
    description:
      "Lets a single person run a company with limited liability and a separate legal identity.",
    points: [
      "Only 1 member (with a nominee) needed",
      "Owner keeps full control of the business",
      "Separate legal entity with limited liability",
    ],
    bestFor: "Solo entrepreneurs who want a company structure",
  },
  {
    title: "Partnership Firm",
    icon: <FaHandshake size={24} aria-hidden="true" />,
    description:
      "Two or more people run a business together under a partnership deed that sets out their rights and profit sharing.",
    points: [
      "Minimum 2 partners, governed by a partnership deed",
      "Simple and low-cost to set up",
      "Partners have unlimited liability",
    ],
    bestFor: "Small family or friends-run businesses",
  },
  {
    title: "Sole Proprietorship",
    icon: <FaStore size={24} aria-hidden="true" />,
    description:
      "The simplest form of business, owned and run by one person, with no separate legal identity from the owner.",
    points: [
      "Single owner, quickest to start",
      "Minimal compliance and low cost",
      "Owner has unlimited liability",
    ],
    bestFor: "Small shops, freelancers and local traders",
  },
  {
    title: "Producer Company",
    icon: <FaSeedling size={24} aria-hidden="true" />,
    description:
      "A company owned by primary producers such as farmers, formed to improve their income through collective activity.",
    points: [
      "10 or more producers, or 2 producer institutions",
      "Limited liability with a separate legal identity",
      "Suited to farm produce, processing and marketing",
    ],
    bestFor: "Farmers, artisans and other primary producers",
  },
];

const comparison = [
  {
    type: "Private Limited",
    law: "Companies Act, 2013",
    people: "2 directors & 2 shareholders",
    liability: "Limited",
    entity: "Yes",
    registeredWith: "Registrar of Companies (MCA)",
  },
  {
    type: "LLP",
    law: "LLP Act, 2008",
    people: "2 designated partners",
    liability: "Limited",
    entity: "Yes",
    registeredWith: "Registrar of Companies (MCA)",
  },
  {
    type: "OPC",
    law: "Companies Act, 2013",
    people: "1 member (plus 1 nominee)",
    liability: "Limited",
    entity: "Yes",
    registeredWith: "Registrar of Companies (MCA)",
  },
  {
    type: "Partnership Firm",
    law: "Indian Partnership Act, 1932",
    people: "2 partners",
    liability: "Unlimited",
    entity: "No",
    registeredWith: "Registrar of Firms (optional)",
  },
  {
    type: "Sole Proprietorship",
    law: "No separate incorporation law",
    people: "1 owner",
    liability: "Unlimited",
    entity: "No",
    registeredWith: "Licences such as GST / Udyam / Shop Act, as applicable",
  },
  {
    type: "Producer Company",
    law: "Companies Act, 2013 (Producer Companies chapter)",
    people: "10 producers or 2 producer institutions",
    liability: "Limited",
    entity: "Yes",
    registeredWith: "Registrar of Companies (MCA)",
  },
];

export default function CompanyTypesSection() {
  return (
    <section id="company-types" className="py-2 md:py-4">
      <div className="w-full">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            Choose the Right Type of Business Entity
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            We help you register any of these six business structures. Not sure which one suits you?
            Submit the form and our team will guide you.
          </p>
        </div>

        {/* Type cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {companyTypes.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-navy-900 leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-4">
                {item.description}
              </p>

              <ul className="space-y-2 mb-5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-orange-600" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-xs md:text-sm text-slate-500">
                  <span className="font-semibold text-navy-800">Best for:</span> {item.bestFor}
                </p>
                <a
                  href="#registration-form"
                  className="mt-4 inline-flex items-center justify-center w-full rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                >
                  Register Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center text-navy-900 mb-6 md:mb-8">
            Quick Comparison
          </h3>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] text-sm text-left">
                <thead className="bg-navy-900 text-white">
                  <tr className="text-xs uppercase tracking-wider">
                    <th className="px-4 py-3.5 font-semibold whitespace-nowrap">Type</th>
                    <th className="px-4 py-3.5 font-semibold">Governing Law</th>
                    <th className="px-4 py-3.5 font-semibold">Minimum People</th>
                    <th className="px-4 py-3.5 font-semibold">Liability</th>
                    <th className="px-4 py-3.5 font-semibold whitespace-nowrap">Separate Legal Entity</th>
                    <th className="px-4 py-3.5 font-semibold">Registered With</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {comparison.map((row) => (
                    <tr key={row.type} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3.5 font-semibold text-navy-900 whitespace-nowrap">{row.type}</td>
                      <td className="px-4 py-3.5">{row.law}</td>
                      <td className="px-4 py-3.5">{row.people}</td>
                      <td className="px-4 py-3.5">{row.liability}</td>
                      <td className="px-4 py-3.5">{row.entity}</td>
                      <td className="px-4 py-3.5">{row.registeredWith}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 mx-auto max-w-3xl flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50 p-4 text-xs sm:text-sm text-orange-900">
            <FaInfoCircle className="mt-0.5 shrink-0 text-orange-600" aria-hidden="true" />
            <p>
              This information is general and for guidance only. Rules and requirements can change,
              and the right structure depends on your business, so please confirm details with our
              team or your professional advisor before deciding.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}