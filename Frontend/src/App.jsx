// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import TopBar from './components/Header/HeaderTop';
import Navbar from './components/Header/Navbar';
import RegistrationForm from './components/Form/RegistrationForm';
import InstructionsSidebar from './components/Form/InstructionsSidebar';
import CompanyTypesSection from './components/Sections/CompanyTypesSection';
import ProcedureSection from './components/Sections/ProcedureSection';
import DocumentsRequiredSection from './components/Sections/DocumentsRequiredSection';
import CompanyTrainingWebinarSection from './components/Sections/Training';
import BenefitsSection from './components/Sections/BenefitsSection';
import FaqSection from './components/Sections/FaqSection';
import HeroCarousel from './components/Sections/HeroCarousel';
import MainFooter from './components/Footer/MainFooter';
import PaymentSummary from './components/Payment/PaymentSummary';
import CompanyAboutUsPage from './components/Pages/About';
import ContactPage from './components/Pages/ContactPage';
import DisclaimerPage from './components/Pages/DisclaimerPage';
import PrivacyPolicyPage from './components/Pages/PrivacyPolicyPage';
import RefundPolicyPage from './components/Pages/RefundPolicyPage';
import TermsAndConditionsPage from './components/Pages/TermsAndConditionsPage';
import ScrollToHash from './components/common/ScrollToHash';
import GlobalMarquee from './components/common/GlobalMarquee';

import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }
  return children;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <FaArrowUp size={16} />
    </button>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      <TopBar />

      {/* Navbar - Only on Home */}
      {isHome && (
        <Navbar
          navItems={[
            { label: "COMPANY REGISTRATION", to: "#registration-form" },
            { label: "COMPANY TYPES", to: "#company-types" },
            { label: "ABOUT US", to: "/about" },
            { label: "PROCEDURE", to: "#procedure" },
            { label: "DOCUMENTS", to: "#documents" },
            { label: "TRAINING & Webinar", to: "#training" },
            { label: "BENEFITS", to: "#benefits" },
            { label: "FAQ'S", to: "#faq" },
          ]}
          handleScroll={(e, target) => {
            if (target.startsWith('#')) {
              e.preventDefault();
              const element = document.querySelector(target);
              if (element) {
                const headerOffset = 140;
                const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }
          }}
        />
      )}

      {/* Private Consultancy Marquee - Only on Home */}
      {isHome && <GlobalMarquee />}

      {/* HeroCarousel */}
      {isHome && (
        <div>
          <HeroCarousel />
        </div>
      )}

      {!isHome && <HeroCarousel />}

      <ScrollToTop />
      <ScrollToHash />

      <main className="flex-grow">
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-8 pb-10 md:pt-10 md:pb-14">
                <div className="mx-auto max-w-screen-2xl">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                      <RegistrationForm />
                    </div>
                    <div className="lg:col-span-1">
                      <InstructionsSidebar />
                    </div>
                  </div>
                </div>

                <div className="mx-auto max-w-screen-2xl mt-14 md:mt-20 space-y-16 md:space-y-24">
                  <CompanyTypesSection />
                  <ProcedureSection />
                  <DocumentsRequiredSection />
                  <CompanyTrainingWebinarSection />
                  <BenefitsSection />
                  <FaqSection />
                </div>
              </div>
            }
          />

          {/* Other Routes */}
          <Route path="/payment-summary" element={<PaymentSummary />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<CompanyAboutUsPage />} />
          <Route path="/term-condition" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex items-center justify-center px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 text-center tracking-tight">
                  404 — Page Not Found
                </h1>
              </div>
            }
          />

        </Routes>
      </main>

      <MainFooter />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;