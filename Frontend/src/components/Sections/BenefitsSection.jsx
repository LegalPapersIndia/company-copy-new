// src/components/Sections/BenefitsSection.jsx

export default function CompanyBenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-2 md:py-4"
    >
      <div className="w-full">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            Learn More About Company Registration in India
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-4 lg:gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "Why should I register my business?",
                content: (
                  <>
                    <p>Registering your business gives it a proper legal identity and many practical advantages:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li>Builds trust with customers, banks, suppliers and investors</li>
                      <li>Makes it easier to open a current account and get business loans</li>
                      <li>Allows you to bid for tenders and sign contracts in the business name</li>
                      <li>Helps you separate personal and business finances</li>
                      <li>Companies and LLPs also get limited liability protection</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Which business structure is right for me?",
                content: (
                  <>
                    <p>The right choice depends on your plans:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li><strong>Private Limited:</strong> growing businesses and startups that may raise funds</li>
                      <li><strong>LLP:</strong> professionals and service firms wanting flexibility with limited liability</li>
                      <li><strong>OPC:</strong> a single founder who wants a company structure</li>
                      <li><strong>Partnership Firm:</strong> a small business run by two or more people</li>
                     <li><strong>Public Limited:</strong> large businesses planning to raise funds from the public or list on a stock exchange</li>
                      <li><strong>Section 8 Company:</strong> NGOs and charitable organisations working for social causes</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the benefits of a Private Limited Company?",
                content: (
                  <>
                    <p>A Private Limited Company is popular because it offers:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li>Limited liability for its shareholders</li>
                      <li>A separate legal identity, independent of its owners</li>
                      <li>Easier access to funding by issuing shares</li>
                      <li>Continuity of the business even if owners change</li>
                      <li>Strong credibility with banks, vendors and customers</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the benefits of an LLP?",
                content: (
                  <>
                    <p>A Limited Liability Partnership combines flexibility and protection:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li>Partners have limited liability</li>
                      <li>Flexible internal management through an LLP agreement</li>
                      <li>No minimum capital requirement</li>
                      <li>Generally lighter compliance than a company</li>
                      <li>A separate legal entity that continues despite changes in partners</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What documents are required for company registration?",
                content: (
                  <>
                    <p>Common documents needed include:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li>PAN and Aadhaar of directors, partners or the owner</li>
                      <li>Passport size photographs</li>
                      <li>Address proof of directors / partners</li>
                      <li>Registered office address proof with NOC from the owner (and rent agreement if rented)</li>
                      <li>Proposed business names and main business activities</li>
                    </ul>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {item.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "What is the difference between a Private Limited and a Public Limited company?",
                content:
                  "A Private Limited Company restricts the transfer of its shares, cannot invite the public to subscribe to them, and needs a minimum of 2 directors and 2 shareholders. A Public Limited Company can offer its shares to the public and list on a stock exchange, but needs at least 3 directors and 7 shareholders and follows stricter compliance.",
              },
              {
                title: "Can one person start a company?",
                content:
                  "Yes. A One Person Company (OPC) allows a single individual to run a company with limited liability. A nominee has to be named at the time of registration.",
              },
              {
                title: "How long does company registration take?",
                content:
                  "The time depends on the entity type, name availability, correctness of your documents and government approvals. Our team will share an expected timeline once your company type and details are confirmed.",
              },
              {
                title: "What happens after my company is registered?",
                content:
                  "You receive your incorporation or registration documents. Companies and LLPs generally also get a PAN and TAN along with incorporation. After that, you typically open a bank account and complete other registrations such as GST or Udyam, as applicable to your business.",
              },
              {
               title: "Is a Section 8 Company different from a normal company?",
                content: (
                  <>
                   <p>Yes. A Section 8 Company is a not-for-profit company formed to promote objects such as charity, education, science, sports or social welfare. Its profits are used only to promote these objects and cannot be paid out as dividends to members. It is registered under the Companies Act and needs a licence under Section 8.</p>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {item.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}