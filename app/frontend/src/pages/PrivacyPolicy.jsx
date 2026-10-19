import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const linkClass = 'text-emerald-400 underline break-all'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-emerald-400 mb-3">{title}</h2>
      <div className="space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </section>
  )
}

function List({ children }) {
  return <ul className="list-disc pl-5 space-y-2">{children}</ul>
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
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
            This Privacy Policy explains what information the 7DataWin app and website (https://7datawin.com) handle, where that information goes, and the choices you have.
          </p>
          <p>7DataWin provides internet data purchasing services and free educational courses.</p>
          <p>
            You can use 7DataWin without creating an account. The app does not have sign-up or login, and it does not use analytics or advertising tools.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>The app only handles the following information:</p>
          <List>
            <li>
              <strong>Phone numbers for data orders.</strong> On the Buy Data page you enter the phone number you pay from and the phone number that should receive the data. These numbers stay in the app on your device. They are sent to us only if you choose to send your order through WhatsApp (see section 4).
            </li>
            <li>
              <strong>AI chat messages.</strong> When you use the AI support chat on the Contact page, or the AI tutor on the Courses page with your own Gemini API key, your message and the earlier messages in that chat are sent to Google&apos;s Gemini API to generate a reply (see section 7).
            </li>
            <li>
              <strong>IP address.</strong> When the home page loads, your device contacts ipapi.co, which uses your IP address to tell the app which country you are in. The app uses only the country to show the right banner and does not save it.
            </li>
            <li>
              <strong>Messages you send us.</strong> If you contact us by WhatsApp, email, or phone, we receive your phone number or email address and the content of your message.
            </li>
            <li>
              <strong>Information stored on your device.</strong> If you enter your own Gemini API key on the Courses page, it is saved only in your device&apos;s browser storage. The app also saves its own files (such as the home page, icons, and app settings file) on your device so it loads faster.
            </li>
          </List>
          <p>
            We do not ask for your name, precise location, contacts, photos, or payment card details. The app itself does not set cookies. Embedded YouTube and Loom course videos may use their own cookies under their own policies.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information described above only to:</p>
          <List>
            <li>Receive and deliver your internet data orders.</li>
            <li>Show the home page banner for the country you are in.</li>
            <li>Answer your questions through the AI chat.</li>
            <li>Respond to your support requests.</li>
          </List>
        </Section>

        <Section title="4. Payments and Third-Party Providers">
          <p>
            The app does not process payments. It does not collect or store card numbers, bank details, mobile money PINs, or account passwords.
          </p>
          <p>
            The Buy Data page shows our merchant number and dialing instructions for mobile money services: EVC Plus, ZAAD Service, Amtel Pay, Sahal Service, Telebirr, M-PESA, M-PESA Kenya, Airtel Money, T-Kash, D-Money, eDahab, and Evatis Pay. You make the payment yourself with your mobile money provider, outside the app, under that provider&apos;s terms and privacy policy.
          </p>
          <p>
            After you confirm an order, you can tap a button that opens WhatsApp with a message to our WhatsApp number (+254 799 636 342). The message contains the phone number you paid from and the phone number to receive the data. Nothing is sent until you press send in WhatsApp. Messages sent through WhatsApp are handled under the{' '}
            <ExternalLink href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</ExternalLink>.
          </p>
        </Section>

        <Section title="5. Sharing of Information">
          <p>We do not sell personal information.</p>
          <p>Information is shared only in these cases:</p>
          <List>
            <li>AI chat messages are sent to Google (Gemini API) to generate replies.</li>
            <li>Your IP address is received by ipapi.co to detect your country.</li>
            <li>Order and support messages you choose to send through WhatsApp are delivered by WhatsApp.</li>
            <li>Course videos are played from YouTube and Loom, which receive standard connection information from your device when a video loads.</li>
            <li>Our website is hosted by Vercel, which receives standard connection information (such as IP address and browser type) to deliver the pages.</li>
          </List>
        </Section>

        <Section title="6. Data Security and Retention">
          <p>All connections to https://7datawin.com use encrypted HTTPS.</p>
          <p>
            The app does not keep your information on our own servers. Phone numbers you type on the Buy Data page are kept only in the app's memory on your device and are cleared when you leave the Buy Data page or close the app.
          </p>
          <p>
            Order and support messages you send us by WhatsApp or email are kept in our WhatsApp and email accounts. Information handled by the third parties in section 7 is kept according to their own policies.
          </p>
        </Section>

        <Section title="7. Third-Party Services">
          <p>The app uses these third-party services:</p>
          <List>
            <li>
              <strong>Google Gemini API</strong> (AI chat replies):{' '}
              <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink>
            </li>
            <li>
              <strong>ipapi.co</strong> (country detection from IP address):{' '}
              <ExternalLink href="https://ipapi.co/privacy/">ipapi.co Privacy Policy</ExternalLink>
            </li>
            <li>
              <strong>WhatsApp</strong> (orders and support messages):{' '}
              <ExternalLink href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</ExternalLink>
            </li>
            <li>
              <strong>YouTube</strong> (course videos):{' '}
              <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink>
            </li>
            <li>
              <strong>Loom</strong> (course videos):{' '}
              <ExternalLink href="https://www.atlassian.com/legal/privacy-policy">Atlassian Privacy Policy</ExternalLink>
            </li>
            <li>
              <strong>Vercel</strong> (website hosting):{' '}
              <ExternalLink href="https://vercel.com/legal/privacy-notice">Vercel Privacy Notice</ExternalLink>
            </li>
          </List>
          <p>The app also links to our Facebook, TikTok, Telegram, and WhatsApp community pages. Those services apply their own privacy policies when you open them.</p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            We do not knowingly collect personal information from children. If you believe a child has sent us personal information, please contact us using the details in section 13.
          </p>
        </Section>

        <Section title="9. Your Privacy Rights">
          <p>You can:</p>
          <List>
            <li>Use the app without creating an account.</li>
            <li>Choose not to use the AI chat or not to send your order through WhatsApp.</li>
            <li>Remove your saved Gemini API key on the Courses page, or clear the app&apos;s data in your device or browser settings.</li>
            <li>Ask us to access, correct, or delete messages and information you have sent us, by contacting us using the details in section 13.</li>
          </List>
        </Section>

        <Section title="10. Account Deletion">
          <p>
            7DataWin does not have user accounts, so there is no account to delete. To request deletion of order or support messages you have sent us, follow the steps on our{' '}
            <Link to="/delete-account" className={linkClass}>Delete Account page</Link>{' '}
            or email{' '}
            <a href="mailto:7datawin@gmail.com" className={linkClass}>7datawin@gmail.com</a>.
          </p>
        </Section>

        <Section title="11. International Users">
          <p>
            7DataWin may serve users in Somalia, Kenya, Ethiopia, Uganda, Djibouti and other countries. The third-party services listed in section 7 may process information in countries other than your own.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy when the app or our services change. The latest version will always be published at https://7datawin.com/privacy-policy with its effective date at the top.
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
