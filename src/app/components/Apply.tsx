import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { submitForm } from '../lib/submitForm';

export function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    try {
      const ok = await submitForm({ ...formData, formType: 'application' });
      if (!ok) throw new Error('Submission failed');
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', stage: '', message: '' });
      setTimeout(() => setIsSuccess(false), 4000);
    } catch {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200';

  return (
    <section id="apply" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="apply-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#apply-dots)" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-blue-200 dark:text-blue-400 bg-white/10 dark:bg-blue-500/10 border border-white/20 dark:border-blue-500/20 rounded-full"
          >
            Join Us
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Partner with D2DX2 Capital
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 dark:text-gray-400 max-w-2xl mx-auto">
            Join our ecosystem and access the infrastructure, capital, and execution support you need to scale
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative p-8 md:p-10 bg-white dark:bg-gray-900 border border-white/20 dark:border-gray-800 rounded-3xl shadow-2xl shadow-black/10">
            {/* Success overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white dark:bg-gray-900 rounded-3xl z-10 flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our team will contact you within 48 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {isError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-400 text-sm">Something went wrong. Please try again.</p>
              </motion.div>
            )}

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Submit Your Application</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Company/Venture Name *</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required className={inputClasses} placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Business Stage *</label>
                  <select name="stage" value={formData.stage} onChange={handleChange} required className={inputClasses}>
                    <option value="">Select stage</option>
                    <option value="idea">Idea Stage</option>
                    <option value="mvp">MVP Built</option>
                    <option value="early-revenue">Early Revenue</option>
                    <option value="scaling">Scaling</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Tell us about your venture *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Describe your venture, the problem you're solving, and what kind of support you're looking for..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-gray-500 dark:text-gray-500 text-sm mt-6 text-center">
              Our team will review your application and contact you within 48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
