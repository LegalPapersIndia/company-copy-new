const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  // Exact raw payload jo frontend bhej raha hai
  rawPayload: {
    type: Object,
    required: true
  },

  // Clean fields for easy searching/filtering in admin dashboard
  application_type: String,
  company_type: String,
  applicant_name: String,
  email: String,
  mobile: String,
  nature_of_business: String,
  designation: String,
  house_no: String,
  area_locality: String,
  city: String,
  district: String,
  state: String,
  pin: String,

  // ⚠️ Frontend ke RegistrationForm.jsx ke SERVICE_CATEGORY / LEAD_SOURCE se match rakhna
  leadSource: { type: String, default: 'companyregistrationindia.org' },
  serviceCategory: { type: String, default: 'companyReg' },
  ip: String,
  userAgent: String,
  submittedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['new', 'contacted', 'paid', 'completed'],
    default: 'new'
  }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);