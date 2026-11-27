// src/components/Sections/Training.jsx

import { 
  FaChalkboardTeacher, 
  FaVideo, 
  FaBalanceScale, 
  FaFileInvoice, 
  FaGlobe, 
  FaClock, 
  FaCertificate, 
  FaCheckCircle, 
  FaFileAlt, 
  FaHandsHelping 
} from 'react-icons/fa';

export default function CompanyTrainingWebinarSection() {
  return (
    <section
      id="training"
      className="py-2 md:py-4"
    >
      <div className="w-full">

        {/* Heading with Icon */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-900 rounded-2xl mb-5 shadow-sm">
            <FaChalkboardTeacher className="text-2xl text-white" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 tracking-tight">
            Training &amp; Webinars
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-5 rounded-full"></div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Expert-led training programs and informative webinars to help entrepreneurs 
            understand business structures, company registration, compliance, and day-to-day responsibilities.
          </p>
        </div>

        {/* Training Programs */}
        <div className="mb-14 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center text-navy-900 mb-8 md:mb-10 flex items-center justify-center gap-3">
            <FaChalkboardTeacher className="text-orange-600" aria-hidden="true" />
            Our Training Programs
          </h3>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 group">
              <div className="w-14 h-14 bg-navy-900 text-white rounded-xl flex items-center justify-center mb-5">
                <FaFileInvoice size={26} aria-hidden="true" title="Incorporation Basics" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Company Incorporation Basics</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5">
                Complete training on choosing the right business structure, the registration process, 
                required documents, and what to do right after incorporation.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-sm font-semibold text-orange-700">
                <FaClock aria-hidden="true" /> <span>4 Hours • Practical Session</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 group">
              <div className="w-14 h-14 bg-navy-900 text-white rounded-xl flex items-center justify-center mb-5">
                <FaBalanceScale size={26} aria-hidden="true" title="Annual Compliance" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Annual Compliance &amp; ROC Filings</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5">
                Hands-on guidance on annual filings, financial statements, board and member meetings, 
                and keeping your company or LLP compliant throughout the year.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-sm font-semibold text-orange-700">
                <FaClock aria-hidden="true" /> <span>3.5 Hours • Live Examples</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 group">
              <div className="w-14 h-14 bg-navy-900 text-white rounded-xl flex items-center justify-center mb-5">
                <FaGlobe size={26} aria-hidden="true" title="Director Responsibilities" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Director &amp; Partner Responsibilities</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5">
                In-depth session on the roles, duties and liabilities of directors, designated partners 
                and partners, including DIN, DSC and decision-making basics.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-sm font-semibold text-orange-700">
                <FaClock aria-hidden="true" /> <span>3 Hours • Case Studies</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 group">
              <div className="w-14 h-14 bg-navy-900 text-white rounded-xl flex items-center justify-center mb-5">
                <FaFileAlt size={26} aria-hidden="true" title="Accounts and Tax" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Accounts, GST &amp; Tax Basics</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5">
                Special training for new business owners on bookkeeping, GST registration and 
                returns, income tax basics and other registrations a new company needs.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-sm font-semibold text-orange-700">
                <FaClock aria-hidden="true" /> <span>4 Hours • Real Examples</span>
              </div>
            </div>
          </div>
        </div>

        {/* Webinars Section */}
        <div className="mb-14 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center text-navy-900 mb-8 md:mb-10 flex items-center justify-center gap-3">
            <FaVideo className="text-orange-600" aria-hidden="true" />
            Popular Webinars
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {[
              {
                icon: <FaFileAlt className="text-navy-700" size={22} aria-hidden="true" title="Registration Guide" />,
                title: "Step-by-Step Company Registration Guide",
                desc: "Complete guide to company registration with requirements, process flow and common mistakes to avoid."
              },
              {
                icon: <FaBalanceScale className="text-navy-700" size={22} aria-hidden="true" title="Structure Comparison" />,
                title: "Private Limited vs LLP vs OPC: Which to Choose?",
                desc: "Clear comparison of liability, compliance and funding options to help you pick the right structure."
              },
              {
                icon: <FaFileInvoice className="text-navy-700" size={22} aria-hidden="true" title="Company Structures" />,
                title: "Public Limited vs Private Limited Company",
                desc: "Understand the differences in funding, compliance and control to decide which company structure suits your growth plans."
              },
              {
                icon: <FaCheckCircle className="text-navy-700" size={22} aria-hidden="true" title="Post Incorporation" />,
                title: "Post-Incorporation Checklist for New Companies",
                desc: "Bank account, GST, Udyam and other key steps to complete after your company is registered."
              },
              {
                icon: <FaCertificate className="text-navy-700" size={22} aria-hidden="true" title="Section 8 Company" />,
                title: "How Section 8 Companies Work for NGOs",
                desc: "Easy session for NGOs and charitable organisations on forming and running a Section 8 (non-profit) Company."
              }
            ].map((webinar, index) => (
              <div 
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 group"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-navy-100">
                  {webinar.icon}
                </div>
                <h4 className="font-bold text-lg md:text-xl text-navy-900 mb-3">
                  {webinar.title}
                </h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {webinar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Training Highlights */}
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 shadow-sm">
          <h4 className="text-xl md:text-2xl font-bold text-center text-white mb-8 md:mb-10 flex items-center justify-center gap-3">
            <FaCertificate className="text-orange-400" aria-hidden="true" />
            Why Join Our Training?
          </h4>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 text-orange-400 ring-1 ring-white/15 rounded-xl flex items-center justify-center mb-4">
                <FaVideo size={28} aria-hidden="true" title="Live Sessions" />
              </div>
              <strong className="block text-base md:text-lg text-white">Live Interactive</strong>
              <p className="text-sm text-slate-300 mt-1">Real-time doubt clearing sessions</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 text-orange-400 ring-1 ring-white/15 rounded-xl flex items-center justify-center mb-4">
                <FaHandsHelping size={28} aria-hidden="true" title="Expert Guidance" />
              </div>
              <strong className="block text-base md:text-lg text-white">Expert Trainers</strong>
              <p className="text-sm text-slate-300 mt-1">Professionals with practical company law experience</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 text-orange-400 ring-1 ring-white/15 rounded-xl flex items-center justify-center mb-4">
                <FaCertificate size={28} aria-hidden="true" title="Certificate" />
              </div>
              <strong className="block text-base md:text-lg text-white">Certificate</strong>
              <p className="text-sm text-slate-300 mt-1">Participation certificate provided</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 text-orange-400 ring-1 ring-white/15 rounded-xl flex items-center justify-center mb-4">
                <FaClock size={28} aria-hidden="true" title="Flexible Duration" />
              </div>
              <strong className="block text-base md:text-lg text-white">Flexible Timing</strong>
              <p className="text-sm text-slate-300 mt-1">2 to 4 hour sessions with recordings</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}