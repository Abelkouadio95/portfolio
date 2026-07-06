'use client';

import { useState, FormEvent } from 'react';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/layout';
import { LinkedInIcon } from '@/components/icons';
import { useTranslations } from 'next-intl';

const EMAIL = 'abelkouadio195@gmail.com';
const WHATSAPP = 'https://wa.me/212694996559';
const LINKEDIN = 'https://www.linkedin.com/in/abel-bekanti%C3%A9-kouadio-50333527b/';

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all';

export default function ContactClient() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const type = data.get('type') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;

    const body = `${t('form.type')}: ${type}\n${t('form.name')}: ${name}\n${t('form.email')}: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const contactLinks = [
    {
      href: `mailto:${EMAIL}`,
      label: t('emailLabel'),
      value: EMAIL,
      icon: <MdEmail size={22} />,
      iconBg: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
      hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-600',
    },
    {
      href: WHATSAPP,
      label: t('whatsappLabel'),
      value: '+212 6 94 99 65 59',
      icon: <FaWhatsapp size={22} />,
      iconBg: 'bg-green-100 dark:bg-green-900/40 text-green-600',
      hoverBorder: 'hover:border-green-300 dark:hover:border-green-600',
      external: true,
    },
    {
      href: LINKEDIN,
      label: t('linkedinLabel'),
      value: 'Abel Bekantie Kouadio',
      icon: <span className="w-5 h-5 block"><LinkedInIcon /></span>,
      iconBg: 'bg-[#0A66C2]/10 text-[#0A66C2]',
      hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-600',
      external: true,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-100/80 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950"
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 w-[min(520px,80vw)] h-[min(520px,80vw)] rounded-full bg-blue-400/10 dark:bg-blue-500/5 blur-3xl -translate-y-1/3 translate-x-1/4"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[min(400px,70vw)] h-[min(400px,70vw)] rounded-full bg-slate-400/10 dark:bg-slate-500/5 blur-3xl translate-y-1/3 -translate-x-1/4"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.35)_1px,transparent_0)] bg-[length:28px_28px]"
        aria-hidden
      />

      <Layout className="relative z-10 bg-transparent">
      <div className="w-full max-w-5xl mx-auto pt-12 md:pt-20 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            {t('label')}
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {t('title')}
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid — col-span on direct children, NOT inside AnimatedSection */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Form — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm shadow-slate-200/50 dark:shadow-none p-6 md:p-8">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {t('form.title')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{t('responseTime')}</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t('form.name')}
                    </label>
                    <input id="name" name="name" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t('form.email')}
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t('form.type')}
                    </label>
                    <select id="type" name="type" className={inputClass}>
                      <option value={t('form.types.job')}>{t('form.types.job')}</option>
                      <option value={t('form.types.mission')}>{t('form.types.mission')}</option>
                      <option value={t('form.types.other')}>{t('form.types.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t('form.subject')}
                    </label>
                    <input id="subject" name="subject" type="text" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className={`${inputClass} resize-y min-h-[140px]`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <FaPaperPlane className="text-xs" />
                    {t('form.send')}
                  </button>
                  {submitted && (
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">{t('form.success')}</p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Sidebar — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-4">
              {t('directContact')}
            </p>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-4 md:p-5 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm shadow-slate-200/40 dark:shadow-none ${link.hoverBorder} hover:shadow-md transition-all duration-300 group`}
                >
                  <div className={`flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl ${link.iconBg} group-hover:scale-105 transition-transform`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Info card */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700/50 shadow-lg shadow-slate-900/10">
              <p className="text-sm font-semibold text-white mb-1">Data Engineer & Analyst</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      </Layout>
    </div>
  );
}
