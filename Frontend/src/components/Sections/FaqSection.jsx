// src/components/Sections/FaqSection.jsx

export default function CompanyFAQSection() {
  return (
    <section id="faq" className="py-2 md:py-4">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            Company Registration – Frequently Asked Questions
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-4 lg:gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "Can I choose any name for my company?",
                content:
                  "Not any name. The name must be unique, should not be too similar to an existing company or trademark, and should follow the naming rules. We usually suggest 2 to 3 options, and the final name is subject to approval by the authority.",
              },
              {
                title: "What are DSC and DIN?",
                content: (
                  <>
                    <ul className="list-disc pl-6 space-y-1 marker:text-orange-500">
                      <li>
                        <b>DSC (Digital Signature Certificate):</b> an
                        electronic signature used to sign and file documents
                        online. Directors and designated partners generally need
                        one.
                      </li>
                      <li>
                        <b>DIN (Director Identification Number):</b> a unique
                        number for every director or designated partner, which
                        is usually applied for during incorporation.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Is there a minimum capital requirement?",
                content:
                  "There is no minimum paid-up capital requirement for a Private Limited Company, OPC or LLP. The amount you start with depends on your business needs. The authorised capital you choose can affect the government fees.",
              },
              {
                title: "Can an NRI or foreign national be a director?",
                content:
                  "Generally yes, subject to Indian laws and foreign investment rules. For companies, at least one director must be a resident of India. Please share your details with our team so we can guide you correctly.",
              },
              {
                title: "Do I need a commercial office to register?",
                content:
                  "You need a registered office address with proper proof. It does not always have to be a commercial property, and a residential address can often be used with the owner's NOC and a recent utility bill, subject to the applicable rules.",
              },
              {
                title: "What compliance is required after registration?",
                content: (
                  <>
                    <p>It depends on the entity type:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 marker:text-orange-500">
                      <li>
                        <b>Companies:</b> maintain accounts, appoint an auditor,
                        file annual returns and financial statements, and file
                        income tax returns
                      </li>
                      <li>
                        <b>LLPs:</b> file annual returns and a statement of
                        accounts, and file income tax returns
                      </li>
                      <li>
                        <b>Partnership Firm:</b> file income tax returns and
                        follow the licences and tax rules applicable to the
                        business
                      </li>
                      <li>
                        <b>Section 8 Companies:</b> file annual returns and
                        financial statements like other companies, and follow
                        the conditions of the Section 8 licence and any
                        tax-exemption registrations
                      </li>
                    </ul>
                  </>
                ),
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {faq.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {faq.content}
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "Is registering a Partnership Firm compulsory?",
                content:
                  "Registration of a partnership firm is not compulsory, but an unregistered firm faces limits when it tries to enforce its rights in court. Registering also makes the firm look more credible to banks and customers.",
              },
              {
                title: "Do I need GST registration for my business?",
                content:
                  "It depends on your turnover, the nature of your business and the state rules. Some businesses, such as certain e-commerce sellers and inter-state suppliers of goods, have special provisions. Our team can guide you after reviewing your business.",
              },
              {
                title: "Are the portal fees the same as government fees?",
                content:
                  "No. Portal fees are our consultancy charges for guidance and application support. Government fees, such as registration fees and stamp duty, are separate and payable as applicable.",
              },
              {
                title: "Can I convert my business to another type later?",
                content:
                 "In many cases yes. For example, a partnership firm can be converted into a Private Limited Company or LLP, a Private Limited Company can be converted into a Public Limited Company, and an LLP or OPC can be converted as per the rules. The process and conditions differ, so please speak to our team before planning a conversion.",
              },
              {
                title: "Can I change the company name or address later?",
                content:
                  "Yes. A company or LLP can change its name or registered office through the prescribed procedure, which usually involves approvals and filings with the authority.",
              },
              {
                title: "Is a Section 8 Company only for NGOs?",
                content:
                 "A Section 8 Company is meant for not-for-profit objects such as charity, education, science, sports, social welfare, research or protection of the environment. Its profits must be used to promote these objects and cannot be distributed to members as dividends.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {faq.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {faq.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
