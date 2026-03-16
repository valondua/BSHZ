import { useTranslations } from 'next-intl'

const content: Record<
  string,
  {
    title: string
    intro: string
    discount: string
    howTo: string
    membership: string
    financing: string
    note: string
    companiesTitle: string
    companiesText: string
  }
> = {
  sq: {
    title: 'Sigurimi Kolektiv',
    intro:
      'Per te arritur nje marreveshje per lirim ne cmimet e sigurimeve shendetesore, per anetaret dhe simpatizantet e saje, «Bashkesia Shqiptare ne Zvicer» per disa vite rresht ka kontaktuar sigurimet me te njohura per nga kualiteti dhe sherbimet. Pas shume takimeve e bisedave ne baze te projektit «AGS \u2013 Kollektiv» te bere nga ana e «Bashkesise Shqiptare ne Zvicer», ne v. 2008 u arrit te nenshkruhet nje marreveshje me sigurimin e Helsana Gruppe!',
    discount:
      'Anetaret pasiv \u2013 simpatizantet e shoqates «Bashkesia Shqiptare ne Zvicer», qe jane te siguruar ose qe duan te sigurohen te njeri nga sigurimet e Helsana Gruppe, mund te kerkojne ulje prej 20% ne sigurimet nepermjet numrit KN30001072 qe i eshte ndare «Bashkesise Shqiptare ne Zvicer». Ulja mund ta kerkohet nga keshilletaret e sigurimeve ose direkt ne nje nga filialet e sigurimit Helsana Gruppe.',
    howTo:
      'Per te perfituar nga kjo ulje mjafton te deshmohet statusi i anetarit pasiv, respektivisht i simpatizantit te shoqates «Bashkesia Shqiptare ne Zvicer». Formulari qe deshmon statusin e antaresise pasive, mund te kerkohet nepermjet E-mailit info@bshz.ch, apo duke plotesuar Formularin perkates ne momentin e nenshkrimit te kontrates me sigurimin HELSANA, formular te cilin e kane edhe keshilltaret e autorizuar te punojne ne baze pjese te projektit «AGS- Kollektiv».',
    membership: 'Mitgliedschaftsbestatigung',
    financing:
      '«Bashkesia Shqiptare ne Zvicer» si organizim kulm (Dachverband) financohet nga sponsoret, donatoret dhe nga realizimi i projekteve te ndryshme ne dobi te komunitetit shqiptar ne Zvicer!',
    note:
      'Shpjegim: Obligime financiare ne shoqate kane vetem anetaret aktiv te shoqates, e jo edhe ata me status te anetarit pasiv \u2013 simpatizantit!',
    companiesTitle: 'Sqarim per Kompanite e Sigurimeve',
    companiesText:
      'Kompanite e sigurimeve qe duan ta kene te drejten e dhenies se zbritjes prej 20%, per anetaret dhe simpatizantet e «Bashkesise Shqiptare ne Zvicer» dhe te kene qasje ne programin kopjuterik ofertues te Helsana Gruppe, s\'pari duhet te marrin nje vertetim bashkepunimi te nenshkruar e te vulosur nga shoqata «Bashkesia Shqiptare ne Zvicer», vertetim ky i cili per miratim i dergohet kompanise Helsana Gruppe. Kompanite e sigurimeve te interesuara per bashkepunim me shoqaten «Bashkesia Shqiptare ne Zvicer» mund t\'na shkruajne ne E-mail: info@bshz.ch dhe kontaktojne ne Tel: 043 5267211 ; 076 3880957',
  },
  de: {
    title: 'Kollektivversicherung',
    intro:
      'Um eine Vereinbarung uber Pramienvergünstigungen bei Krankenversicherungen fur die Mitglieder und Sympathisanten zu erreichen, hat die «Albanische Gemeinschaft in der Schweiz» uber mehrere Jahre hinweg die bekanntesten Versicherungen bezuglich Qualitat und Dienstleistungen kontaktiert. Nach zahlreichen Treffen und Gesprachen auf Basis des Projekts «AGS \u2013 Kollektiv» der «Albanischen Gemeinschaft in der Schweiz» wurde 2008 eine Vereinbarung mit der Helsana Gruppe unterzeichnet!',
    discount:
      'Passivmitglieder \u2013 Sympathisanten des Vereins «Albanische Gemeinschaft in der Schweiz», die bei einer Versicherung der Helsana Gruppe versichert sind oder sich versichern mochten, konnen eine Ermassigung von 20% uber die Nummer KN30001072 beantragen, die der «Albanischen Gemeinschaft in der Schweiz» zugeteilt wurde. Die Ermassigung kann bei Versicherungsberatern oder direkt in einer Filiale der Helsana Gruppe beantragt werden.',
    howTo:
      'Um von dieser Ermassigung zu profitieren, genugt es, den Status des Passivmitglieds bzw. Sympathisanten des Vereins «Albanische Gemeinschaft in der Schweiz» nachzuweisen. Das Formular zum Nachweis der Passivmitgliedschaft kann per E-Mail an info@bshz.ch angefordert oder beim Vertragsabschluss mit der Versicherung HELSANA ausgefullt werden.',
    membership: 'Mitgliedschaftsbestatigung',
    financing:
      'Die «Albanische Gemeinschaft in der Schweiz» als Dachverband finanziert sich durch Sponsoren, Spender und durch die Realisierung verschiedener Projekte zum Wohl der albanischen Gemeinschaft in der Schweiz!',
    note:
      'Hinweis: Finanzielle Verpflichtungen im Verein haben nur die aktiven Mitglieder, nicht die Passivmitglieder \u2013 Sympathisanten!',
    companiesTitle: 'Hinweis fur Versicherungsunternehmen',
    companiesText:
      'Versicherungsunternehmen, die das Recht auf die Gewahrung des 20%-Rabatts fur Mitglieder und Sympathisanten der «Albanischen Gemeinschaft in der Schweiz» erhalten und Zugang zum Angebotsprogramm der Helsana Gruppe haben mochten, mussen zunachst eine unterzeichnete und gestempelte Kooperationsbestatigung des Vereins «Albanische Gemeinschaft in der Schweiz» erhalten. Interessierte Versicherungsunternehmen konnen uns per E-Mail erreichen: info@bshz.ch oder telefonisch: 043 5267211 ; 076 3880957',
  },
  fr: {
    title: 'Assurance collective',
    intro:
      'Afin d\'obtenir un accord sur les reductions des primes d\'assurance maladie pour ses membres et sympathisants, la «Communaute Albanaise en Suisse» a contacte pendant plusieurs annees les assurances les plus reputees en matiere de qualite et de services. Apres de nombreuses reunions et discussions basees sur le projet «AGS \u2013 Kollektiv» de la «Communaute Albanaise en Suisse», un accord a ete signe en 2008 avec le groupe Helsana!',
    discount:
      'Les membres passifs \u2013 sympathisants de l\'association «Communaute Albanaise en Suisse», qui sont assures ou souhaitent s\'assurer aupres de l\'une des assurances du groupe Helsana, peuvent demander une reduction de 20% via le numero KN30001072 attribue a la «Communaute Albanaise en Suisse». La reduction peut etre demandee aupres des conseillers en assurance ou directement dans une filiale du groupe Helsana.',
    howTo:
      'Pour beneficier de cette reduction, il suffit de prouver le statut de membre passif ou sympathisant de l\'association «Communaute Albanaise en Suisse». Le formulaire attestant le statut de membre passif peut etre demande par e-mail a info@bshz.ch ou rempli lors de la signature du contrat avec l\'assurance HELSANA.',
    membership: 'Confirmation d\'adhesion',
    financing:
      'La «Communaute Albanaise en Suisse» en tant qu\'organisation faitiere (Dachverband) est financee par des sponsors, des donateurs et par la realisation de divers projets au benefice de la communaute albanaise en Suisse!',
    note:
      'Remarque: Seuls les membres actifs de l\'association ont des obligations financieres, et non les membres passifs \u2013 sympathisants!',
    companiesTitle: 'Information pour les compagnies d\'assurance',
    companiesText:
      'Les compagnies d\'assurance souhaitant obtenir le droit d\'accorder la reduction de 20% aux membres et sympathisants de la «Communaute Albanaise en Suisse» doivent d\'abord obtenir une attestation de cooperation signee et tamponnee par l\'association. Les compagnies interessees peuvent nous contacter par e-mail: info@bshz.ch ou par telephone: 043 5267211 ; 076 3880957',
  },
  it: {
    title: 'Assicurazione collettiva',
    intro:
      'Per ottenere un accordo sulle riduzioni dei premi dell\'assicurazione sanitaria per i suoi membri e simpatizzanti, la «Comunita Albanese in Svizzera» ha contattato per diversi anni le assicurazioni piu rinomate per qualita e servizi. Dopo numerosi incontri e colloqui basati sul progetto «AGS \u2013 Kollektiv» della «Comunita Albanese in Svizzera», nel 2008 e stato firmato un accordo con il gruppo Helsana!',
    discount:
      'I membri passivi \u2013 simpatizzanti dell\'associazione «Comunita Albanese in Svizzera», che sono assicurati o desiderano assicurarsi presso una delle assicurazioni del gruppo Helsana, possono richiedere una riduzione del 20% tramite il numero KN30001072 assegnato alla «Comunita Albanese in Svizzera». La riduzione puo essere richiesta presso i consulenti assicurativi o direttamente in una filiale del gruppo Helsana.',
    howTo:
      'Per beneficiare di questa riduzione e sufficiente dimostrare lo status di membro passivo o simpatizzante dell\'associazione «Comunita Albanese in Svizzera». Il modulo che attesta lo status di membro passivo puo essere richiesto via e-mail a info@bshz.ch o compilato al momento della firma del contratto con l\'assicurazione HELSANA.',
    membership: 'Conferma di adesione',
    financing:
      'La «Comunita Albanese in Svizzera» come organizzazione mantello (Dachverband) e finanziata da sponsor, donatori e dalla realizzazione di vari progetti a beneficio della comunita albanese in Svizzera!',
    note:
      'Nota: Solo i membri attivi dell\'associazione hanno obblighi finanziari, non i membri passivi \u2013 simpatizzanti!',
    companiesTitle: 'Informazione per le compagnie di assicurazione',
    companiesText:
      'Le compagnie di assicurazione che desiderano ottenere il diritto di concedere lo sconto del 20% ai membri e simpatizzanti della «Comunita Albanese in Svizzera» devono prima ottenere un\'attestazione di cooperazione firmata e timbrata dall\'associazione. Le compagnie interessate possono contattarci via e-mail: info@bshz.ch o per telefono: 043 5267211 ; 076 3880957',
  },
  en: {
    title: 'Collective Insurance',
    intro:
      'To achieve an agreement on health insurance premium reductions for its members and supporters, the "Albanian Community in Switzerland" contacted the most reputable insurance companies for quality and services over several years. After numerous meetings and discussions based on the "AGS \u2013 Kollektiv" project by the "Albanian Community in Switzerland", an agreement was signed with the Helsana Group in 2008!',
    discount:
      'Passive members \u2013 supporters of the association "Albanian Community in Switzerland" who are insured or wish to be insured with one of the Helsana Group insurances can request a 20% discount through the number KN30001072 assigned to the "Albanian Community in Switzerland". The discount can be requested from insurance advisors or directly at a Helsana Group branch.',
    howTo:
      'To benefit from this discount, it is sufficient to prove the status of passive member or supporter of the association "Albanian Community in Switzerland". The form proving passive membership status can be requested via email at info@bshz.ch or filled out when signing the contract with HELSANA insurance.',
    membership: 'Membership Confirmation',
    financing:
      'The "Albanian Community in Switzerland" as an umbrella organisation (Dachverband) is financed by sponsors, donors and through the realisation of various projects for the benefit of the Albanian community in Switzerland!',
    note:
      'Note: Only active members of the association have financial obligations, not passive members \u2013 supporters!',
    companiesTitle: 'Information for Insurance Companies',
    companiesText:
      'Insurance companies wishing to obtain the right to grant the 20% discount to members and supporters of the "Albanian Community in Switzerland" must first obtain a signed and stamped cooperation certificate from the association. Interested insurance companies can write to us at E-mail: info@bshz.ch and contact us at Tel: 043 5267211 ; 076 3880957',
  },
}

export default async function SigurimiKolektivPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const c = content[locale] || content.sq

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{c.title}</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p>{c.intro}</p>

        <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-r-lg">
          <p className="font-semibold text-accent mb-1">20% {locale === 'de' ? 'Ermassigung' : locale === 'fr' ? 'Reduction' : locale === 'it' ? 'Riduzione' : locale === 'en' ? 'Discount' : 'Ulje'} &mdash; KN30001072</p>
          <p className="text-sm text-text-light">{c.discount}</p>
        </div>

        <p>{c.howTo}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:info@bshz.ch"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@bshz.ch
          </a>
        </div>

        <p className="text-text-light italic">{c.financing}</p>

        <div className="bg-gold/10 border border-gold/30 p-4 rounded-lg">
          <p className="text-sm font-medium">{c.note}</p>
        </div>

        <h2 className="text-2xl font-bold mt-10">{c.companiesTitle}</h2>
        <p>{c.companiesText}</p>
      </div>
    </div>
  )
}
