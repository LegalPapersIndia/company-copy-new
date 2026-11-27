// src/components/Pages/DisclaimerPage.jsx

export default function CompanyDisclaimerPage() {
  return (
    <div>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">

          {/* Header */}
          <div className="bg-navy-900 text-white py-8 md:py-10 px-6 md:px-10 text-center">
            <span className="mx-auto mb-4 block h-1 w-12 rounded-full bg-orange-500"></span>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Disclaimer Policy
            </h1>
            <p className="text-base md:text-lg text-slate-300">
              Important Information Regarding Our Company Registration Consultancy Services
            </p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 lg:p-12 text-slate-700 leading-relaxed">

            {/* Consultancy Notice */}
            <p className="text-base md:text-lg mb-6">
              <strong className="text-orange-700">
                The fees charged on this website are purely consultancy fees
                for professional assistance and guidance related to company
                registration and business compliance.
              </strong>
            </p>

            {/* Main Legal Notice */}
            <div className="bg-navy-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-8">
              <p className="font-semibold text-navy-900 text-base md:text-lg">
                This website is a privately owned portal and is not affiliated
                with the Ministry of Corporate Affairs (MCA), the Registrar of Companies
                (ROC) or any Government department.
              </p>
            </div>

            <div className="space-y-6">

              <p>
                This website is owned and operated by a private consultancy
                firm providing professional services related to company registration
                and business compliance. We do not represent or claim any official 
                association with the Ministry of Corporate Affairs (MCA), 
                the Registrar of Companies (ROC), or any Government authority.
              </p>

              <p>
                This is <strong>not an official Government website</strong>.
                The forms available on this portal are designed only to collect
                basic information from individuals or businesses interested in
                company registration services so that our consultants can provide
                appropriate guidance and assistance.
              </p>

              <p>
                Our consultancy services include assistance with the following
                registration-related services:
              </p>

              <ul className="list-disc pl-6 space-y-2 marker:text-orange-500">
                <li>Private Limited Company Registration</li>
                <li>Limited Liability Partnership (LLP) Registration</li>
                <li>One Person Company (OPC) Registration</li>
                <li>Partnership Firm Registration</li>
                <li>Sole Public Limited Setup</li>
                <li>Section 8 Company Registration</li>
                <li>Application filing and documentation support</li>
              </ul>

              <p>
                Approval of company names and incorporation is decided only by the
                concerned government authority. We do not guarantee the approval of any 
                name or application, and the final decision rests solely with the authority.
              </p>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm md:text-base text-slate-600">
                  All payments made through this portal are strictly for
                  consultancy and professional assistance services. These
                  charges do not include official Government fees, such as
                  registration fees and stamp duty, which are payable
                  separately as applicable.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}