import { useEffect } from 'react'

const linkClass = 'text-emerald-400 underline break-all'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-emerald-400 mb-3">{title}</h2>
      <div className="space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </section>
  )
}

export default function PrivacyPolicy() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Privacy Policy | 7DataWin'
    window.scrollTo(0, 0)
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-gray-200">
      <article className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          7DataWin Privacy Policy
        </h1>
        <p className="text-gray-400 mb-6">Effective Date: October 13, 2026</p>

        <hr className="border-gray-800 mb-8" />

        <Section title="1. Introduction">
          <p>
            Welcome to 7DataWin. We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and protect information when you use our mobile application and related services.
          </p>
          <p>7DataWin provides internet data purchasing services and free educational courses.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p>
            Depending on how you use our services, we may collect your name, email address, phone number, account information, transaction details, technical diagnostic information, and customer support communications.
          </p>
          <p>We aim to collect only the information necessary to provide and improve our services.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We may use your information to:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Create and manage user accounts.</li>
            <li>Process internet data purchases.</li>
            <li>Deliver data packages through relevant providers.</li>
            <li>Provide access to free educational courses.</li>
            <li>Respond to customer support requests.</li>
            <li>Maintain security and improve app performance.</li>
            <li>Comply with applicable laws.</li>
          </ul>
        </Section>

        <Section title="4. Payments and Third-Party Providers">
          <p>
            7DataWin may work with payment providers, telecommunications companies, and internet data suppliers to process purchases and deliver services. These providers may process information necessary to complete transactions under their applicable privacy policies.
          </p>
        </Section>

        <Section title="5. Sharing of Information">
          <p>
            We do not sell users’ personal information. We may share necessary information with trusted service providers to operate our services, process transactions, provide technical support, or comply with legal obligations.
          </p>
        </Section>

        <Section title="6. Data Security and Retention">
          <p>
            We take reasonable measures to protect personal information against unauthorized access, loss, misuse, or disclosure. We retain information only for as long as reasonably necessary for our services, legal obligations, and legitimate business purposes.
          </p>
        </Section>

        <Section title="7. Third-Party Services">
          <p>
            Our app may use third-party services for hosting, authentication, payments, analytics, or technical support.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            We do not knowingly collect children's personal information in violation of applicable law. If you believe a child has provided personal information inappropriately, please contact us.
          </p>
        </Section>

        <Section title="9. Your Privacy Rights">
          <p>
            Depending on applicable law, you may request access to, correction of, or deletion of your personal information. You may also have other privacy rights under the laws applicable to you.
          </p>
        </Section>

        <Section title="10. Account Deletion">
          <p>
            Users may request account deletion and deletion of associated personal information through the account-deletion process provided by 7DataWin, subject to applicable legal requirements.
          </p>
        </Section>

        <Section title="11. International Users">
          <p>
            7DataWin may serve users in Somalia, Kenya, Ethiopia, Uganda, Djibouti, and other countries. Where information is processed internationally, we will take appropriate steps to comply with applicable privacy requirements.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy when our services or legal requirements change. The latest version will be published on our official website.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p>For privacy questions or requests, please contact 7DataWin using the details below.</p>
          <p>App Name: 7DataWin</p>
          <p>
            Official Website:{' '}
            <a href="https://7datawin.com" className={linkClass}>https://7datawin.com</a>
          </p>
          <p>
            Privacy Policy URL:{' '}
            <a href="https://7datawin.com/privacy-policy" className={linkClass}>https://7datawin.com/privacy-policy</a>
          </p>
          <p>Business Address: 4415 128 Ave NW, Edmonton, Alberta T5A 3M9, Canada</p>
          <p>Telephone: 780-399-3908</p>
          <p>
            Privacy Support Email:{' '}
            <a href="mailto:7datawin@gmail.com" className={linkClass}>7datawin@gmail.com</a>
          </p>
        </Section>
      </article>
    </div>
  )
}
