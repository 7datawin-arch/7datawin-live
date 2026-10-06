import React from 'react';

export default function DeleteAccount() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-200">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-4">
          7DataWin — Account & Data Deletion Request
        </h1>
        <p className="text-gray-400 mb-6">
          Codsi Tirtiridda Koontada iyo Xogta ee 7DataWin (Developer: Faashe / 7DataWin Team)
        </p>

        <hr className="border-gray-800 mb-8" />

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">
            1. Sida aad u codsan karto tirtiridda koontadaada (Steps to request account deletion)
          </h2>
          <p className="mb-4">
            Isticmaaleyaasha app-ka <strong>7DataWin</strong> waxay xaq u leeyihiin inay tirtiraan koontadooda iyo xog kasta oo la xiriirta wakhti kasta. Waxaad ku codsan kartaa mid ka mid ah siyaabaha soo socda:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>
              <strong>Email toos ah:</strong> Noo soo dir email ku socda{' '}
              <a href="mailto:suxufi34@gmail.com" className="text-emerald-400 underline">
                suxufi34@gmail.com
              </a>{' '}
              adigoo cinwaanka (Subject) uga dhigaya: <em>"Request Account Deletion - 7DataWin"</em>. Fadlan ku soo dar lambarkaaga taleefanka ama email-ka aad ku diiwaangashatay.
            </li>
            <li>
              <strong>WhatsApp Support:</strong> Noogala soo xiriir WhatsApp:+254 799 636 342 si laguu caawiyo isla markiiba.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">
            2. Xogta la tirtirayo (Data that is deleted)
          </h2>
          <p className="mb-2">Marka codsigaaga la helo lana xaqiijiyo, xogta soo socota si joogto ah ayaa loo tirtirayaa 7 maalmood gudahood:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li>Magacaaga iyo Profile-kaaga.</li>
            <li>Email-ka iyo Lambarka taleefanka.</li>
            <li>Taariikhda koorsooyinka aad baratay iyo horumarkaaga (Course progress).</li>
            <li>Dookhyada shakhsiyadeed iyo kaydka abaalmarinta.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">
            3. Xogta la hayn karo (Data that is kept)
          </h2>
          <p className="text-gray-300">
            Xogta la xiriirta risiidhada lacag bixinta ee iibka data-da internet-ka (Financial transaction logs) waxaa loo hayn karaa ilaa 90 maalmood si waafaqsan sharciyada canshuuraha, xisaab-xirka maaliyadeed, iyo ka hortagga wax-is-daba-marinta, ka dibna si toos ah ayaa loo tirtiraa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">
            4. Xilliga Tirtiridda (Retention Period)
          </h2>
          <p className="text-gray-300">
            Dhammaan codsiyada tirtiridda koontada waxaa lagu dhammeystiraa ugu badnaan <strong>7 ilaa 14 maalmood</strong> gudahood laga bilaabo maalinta codsiga la helo.
          </p>
        </section>
      </div>
    </div>
  );
}
