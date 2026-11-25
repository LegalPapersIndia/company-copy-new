// src/components/Form/InstructionsSidebar.jsx
import { FaInfoCircle } from 'react-icons/fa';

export default function InstructionsSidebar() {
  return (
    <aside className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden lg:sticky lg:top-20">
      <div className="bg-navy-50 border-b border-navy-100 px-6 py-5 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-navy-900">
          Important Instructions
        </h2>
      </div>

      <div className="p-6 md:p-8">
        <ol className="steps-list space-y-5 text-sm text-slate-700 leading-relaxed">
          <li>
            <strong className="text-slate-900">Company Type :</strong> Select the type of entity you want to register — 
            <strong className="text-slate-900"> Private Limited</strong>, <strong className="text-slate-900">LLP</strong>, <strong className="text-slate-900">OPC</strong>, <strong className="text-slate-900">Partnership</strong>, <strong className="text-slate-900">Sole Proprietorship</strong> or <strong className="text-slate-900">Producer Company</strong>.
          </li>

          <li>
            <strong className="text-slate-900">Applicant Name :</strong> Enter the full legal name of the applicant / 
            promoter exactly as it appears on your PAN Card and other identity documents.
          </li>

          <li>
            <strong className="text-slate-900">Proposed Company / Firm Name :</strong> Enter the name you would like for 
            your company or firm (optional at this stage). Final name is subject to availability and approval by the authority.
          </li>

          <li>
            <strong className="text-slate-900">PAN Number :</strong> Enter the valid 10-digit Permanent Account Number (PAN) 
            of the applicant. This is optional at this stage.
          </li>

          <li>
            <strong className="text-slate-900">Email Id :</strong> Provide a valid and active email address of the applicant. 
            All updates, document requests and registration communication will be sent here.
          </li>

          <li>
            <strong className="text-slate-900">Mobile Number :</strong> Enter the correct 10-digit mobile number. 
            Our team will use it to contact you and share important updates.
          </li>

          <li>
            <strong className="text-slate-900">Nature of Business :</strong> Choose the appropriate nature of your business 
            (Manufacturer, Trader, Service Provider, Importer, Exporter, IT / Software, etc.). This helps us prepare the correct business objects.
          </li>

          <li>
            <strong className="text-slate-900">Designation / Role :</strong> Select your role in the proposed entity 
            (Director, Partner, Proprietor, Promoter, Authorised Signatory, etc.).
          </li>

          <li>
            <strong className="text-slate-900">Proposed Registered Office Address :</strong> Fill in the complete and accurate address, 
            including city, district, state and PIN code. This address is where your company or firm will be registered, 
            and the state you select decides the jurisdiction.
          </li>
        </ol>

        <div className="mt-8 flex gap-3 rounded-lg border border-orange-100 bg-orange-50 p-4 text-xs sm:text-sm text-orange-900">
          <FaInfoCircle className="mt-0.5 shrink-0 text-orange-600" />
          <div>
            <p>
              Note: This is a private consultancy assisted form — not the official website of the Ministry of Corporate Affairs (MCA) 
              or any Government department. The fees charged on this portal are consultancy charges and not government fees.
            </p>
            <p className="mt-3">
              Ensure all information entered matches exactly with your PAN, Aadhaar 
              and other official documents to avoid rejection or delay in your registration.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}