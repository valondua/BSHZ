import { getTranslations } from 'next-intl/server'

const sections = [
  'BSHZ në bashkëpunim me subjektet dhe institucionet shtetërore të shtetit të Zvicrës dhe të atyre në atdhe, do të angazhohet në krijimin e kushteve për integrim dhe përparim sa më të shpejtë të diasporës shqiptare në Zvicër.',
  'BSHZ punon vazhdimisht në gjetjen dhe zhvillimin e formave më të mira organizative për ruajtjen e identitetit, kulturës dhe traditave kombëtare shqiptare dhe njëkohësisht integrimin sa me efektiv të diasporës shqiptare në Zvicër. BSHZ punon në ngritjen dhe ruajtjen e vetëdijes kombëtare, njohjen, afrimin dhe bashkimin e mërgimtarëve në mes veti.',
  'BSHZ në bashkëpunim me institucionet shtetërore në atdhe dhe ato në Zvicrës do të angazhohet në zhvillimin dhe ngritjen e bashkëpunimit në sferat e ekonomisë, kulturës, sportit, humanitetit e fushave tjera sipas nevojës.',
  'BSHZ me punën dhe aktivitetin e vet, do të zhvillojë dhe do të thellojë bashkëpunimin dhe miqësinë me organet dhe asociacionet e ngjashme zvicerane në të gjitha fushat me interes dhe dobi të përbashkët duke zhvilluar dhe organizuar programe dhe manifestime të përbashkëta.',
  'BSHZ me aktivitetin dhe veprimtaritë e veta humanitare, solidare dhe gjithëkombëtare, ka një rol të rëndësishëm jo vetëm në prezantimin dhe afirmimin e çështjes kombëtare, por në mënyrë institucionale dhe profesionale do ti kundërvihet keqpërdorimeve dhe dezinformimeve që e dëmtojnë çështjen tonë kombëtare.',
  'BSHZ angazhohet në marrjen e masave për parandalimin e dukurive negative sikur janë: delikuenca, narkomania, kriminaliteti, konfliktet e ndryshme dhe sjelljet tjera devijante. BSHZ angazhohet të bëjë lidhshmërinë institucionale dhe shpirtore te diasporës me atdheun.',
  'BSHZ angazhohet që të fuqizoj aftësitë organizative për kryerjen më efikase të të gjitha obligimeve ndaj vetvetes si diasporë dhe ndaj atdheut si tërësi. Për realizimin e projekteve te veta BSHZ angazhon veprimtarë të dëshmuar të çështjes sonë kombëtare në diasporë, persona profesionist, intelektualë të dalluar e veprimtarë me pervojë disa dekadëshe me punët e diasporës. BSHZ në Keshillat Profeisionale do të angazhoj kryesisht kadro të diaspores shqiptare që kanë kryer shkollimin ose janë specializuar dhe kanë pervojë pune në firma dhe institucione Zvicerane.',
  'BSHZ në kryesi te sajë angazhot te ketë veprimtarë pavarësisht gjinisë, besimit, bindjeve të tyre politike, më rëndesi është që të jenë atdhetar me përvojë shumëvjeçare dhe me bindje të thellë demokratike dhe të jenë të gatshëm për të vepruar.',
  'BSHZ mendon se organizimi i diasporës ne baza partiake, sektare, klanore e formave tjera që e ndajnë e nuk e bashkojnë diasporën është i tejkaluar. BSHZ apelon te institucionet shtetërore të Kosovës, Shqipërisë dhe subjketve shqiptare në Maqedoni, Mal të Zi dhe Luginë të Preshevës, që çdo formë e organizimit e cila e ndanë dhe përçanë mergatën shqiptare, mos të mbështetet.',
]

const historyText = 'Hartimi i Statutit të «Bashkësisë Shqiptare në Zvicër» është bërë me vendimin e Këshillit Themelues të shoqatës "Bashkësia Shqiptare për Zvicër", të datës 31.08.1998, në Bern të Zvicrës. Statuti i shoqatës "Bashkësia Shqiptare në Zvicër" për herë të parë është ndryshuar dhe aprovuar me datë 04.04.1999 në Kuvendin Themelues të BSHZ-ës në Bernë të Zvicrës! Propozimi për ndryshimin e statutit për herë të dytë ka ardhur nga kryetarit dhe Kryesia së BSHZ-ës, pas shpalljes së pavarësisë së Kosovës. Diskutimet rreth ndryshimeve te nevojshme statutare kanë qenë publike dhe kanë zgjatur deri me 30.03.2011.'

const currentStatute = 'Në Kuvendin e dates 04.04.2011 të mbajtur ne Arbon të Zvicrës janë bëre ndryshimet e nevojshme statutare te shoqatës dhe si i tillë Statuti është në fuqi. BSHZ ka për qëllim kërkimin, gjetjen, ruajtjen dhe koordinimin e interesave të përbashkëta të shqiptarëve në Zvicër. BSHZ vepron nëpërmjet Bashkësive Kantonale, shoqatave, klubeve, organzatave afariste dhe veprimtarëve që angazhohen për ralizimin e programit dhe projekteve të BSHZ-ës.'

const cooperation = 'BSHZ, bashkëpunon me gjitha institucionet shtetërore Zvicrane dhe të shtetint të Kosovës e Shqipërisë, me përfaqësuesit e shqiptarëve në Maqedoni, Mal të Zi dhe Luginë te Preshevës dhe me gjitha organizimet që janë të gatshme të ndihmojnë në realizimin e vizionit dhe misionit të BSHZ-ës! Formulimi i Statutit të BSHZ-ës është mbështetur në përcaktimet themelore të Programit të BSHZ-ës. Hartimi i Statutit është mbështetur dhe harmonizuar me Kodin Civil Zviceran, përkatësisht me dispozitat e neneve 60-72. Të gjitha gjërat që nuk janë paraparë me statut rregullohen me rregulloret të posaçme.'

export default async function StatutiPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'statuti' })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-6">{t('program_subtitle')}</h2>

        <p className="font-medium text-primary-dark">
          &laquo;Bashkësia Shqiptare në Zvicër&raquo;, (në tekstin e mëtejmë BSHZ) formohet me qëllim të shprehjes, mbrojtjes dhe realizimit të interesave, të drejtave dhe obligimeve të të gjithë mërgimtarëve shqiptarë nga të gjitha trojet etnike shqiptare që jetojnë dhe punojnë në Zvicër.
        </p>

        {sections.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-6">{t('history_subtitle')}</h2>
        <p>{historyText}</p>
        <p>{currentStatute}</p>
        <p>{cooperation}</p>

        <p className="mt-8 text-sm text-text-muted font-medium">
          Bern 04.04.1999 &mdash; Arbon 04.04.2011
        </p>
      </div>
    </div>
  )
}
