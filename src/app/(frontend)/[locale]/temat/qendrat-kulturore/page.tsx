import Link from 'next/link'

function tx(locale: string, texts: { sq: string; de: string; fr: string; it: string; en: string }): string {
  return texts[locale as keyof typeof texts] || texts.sq
}

export default async function QendratKulturorePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const prefix = `/${locale}`

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/images/topic-kultura.png"
          alt={tx(locale, { sq: 'Qendrat Kulturore', de: 'Kulturzentren', fr: 'Centres culturels', it: 'Centri culturali', en: 'Cultural Centres' })}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
          <div>
            <Link
              href={prefix}
              className="text-white/70 hover:text-white text-sm mb-3 inline-flex items-center gap-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tx(locale, { sq: 'Ballina', de: 'Startseite', fr: 'Accueil', it: 'Home', en: 'Home' })}
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {tx(locale, { sq: 'Qendrat Kulturore', de: 'Kulturzentren', fr: 'Centres culturels', it: 'Centri culturali', en: 'Cultural Centres' })}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main article */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2>Qendrat Kulturore</h2>
              <p>
                Idea per ngritjen e Qendrave Kulturore Shqiptare ne Zvicer eshte nje ide e vjeter e cila shpesh nga veprimtare te shumte te kultures kombetare eshte permendur si nevoje, por per te ndermarr dicka konkrete nuk dihet se eshte marr.
              </p>
              <p>
                Duke u nisur nga gjendja e rende e shoqatave kulturore shqiptare, ku drejtuesit e shoqatava, udheheqesit artistik dhe anetaresia, ne vend se te merren me ceshtje te Kultures, ata cdo muaj perballen me probleme te ndryshme infrastrukturore e financiare, ne vitin 2018 Bashkesia Shqiptare ne Zvicer, morri iniciative per themelimin e nje FONDACIONI i cili do te merrej me ndertimin dhe financimin e Qendrave Kulturore dhe te aktiviteteve Kulturore ne Keto Qendra te Kultures Shqiptare ne Zvicer.
              </p>
              <p>
                Ceshtja e ruajtjes dhe zhvillimit te kutures, gjuhes, artit e traditave kombetare ne diaspore thjesht eshte lene sikur te jete ceshtje private e disa aktivisteve e jo si ceshtje gjithekombetare! Aktivistet shqiptare qe me dekada merren dhe vazhdojne te merren me rujtjen kultivimin dhe zhvillimin e kultures shqiptare, qe kane provuar te bejne Qendra Kulturore, me gjitha seksionet qe duhet ti kete nje Qender Kulturore, ata thellesisht jane deshpruar nga sjellja e komuniteti i cili per momentin eshte orientuar vetem ne ndertimin e objekteve fetare dhe nga sjellja e shteteve te origjines qe ne kete dretim fare nuk jane bashkepunues!
              </p>
              <p>
                Duke u nisur nga ky realitet, idea per themelimin e &laquo;FONDACIONIT TE QENDRAVE KULTURORE SHQIPTARE NE ZVICER&raquo; doli si nevoje per te dalur nga kjo gjendje kulturore jo e mire e komunitetit shqiptar ne Zvicer!
              </p>

              <h2>Vizioni</h2>
              <p>
                Vizioni eshte ruajtja dhe zhvillimi i kultures nder gjeneratat e reja me qellim te integrimit, ruajtjes dhe zhvillimit te kultures, gjuhes e traditave shqiptare te komunitetit shqiptar ne Zvicer!
              </p>
              <p>
                Qellimi i fundit eshte qe nepermjet edukimit dhe frymezimit te rinise shqiptare me gjithe pasurine shpirterore kombetare qe ka kultura shqiptare, ne kontinuitet rinia e diaspores te jete e pergaditur qe te beje plane e projekte per kethim nga dhe investime ne atdhe, me MISION te ndertimit e forcimit te shteteve dhe trojeve tona etnike shqiptare!
              </p>
              <p>
                Kohe e fundit eshte qe komuniteti shqiptar ne Zvicer te filloje krijimin e nje sistemi te sigurt te mbrojtjes nga asimilimi, sistemi te ruajtjes, kultivimit e zhvillimit te vlerave kombetare. Jemi te sigurt se Komuniteti shqiptar ne Zvicer, nepermjet sistemit te Qendrave Kulturore do te mund te krijoj kushte qe te edukoj gjenerata te shqiptareve qe me vullnet, dije e pergaditje profesionale perendimore, ne vazhdimesi gjenerata pas gjenerate do t&apos;i ndihmonin shtetet dhe trojet tona etnike qe te behen politikisht dhe ekonomikisht funksionale dhe stabile!
              </p>

              <h2>Projekti Ideor i Qendres Kulturore</h2>
              <p>
                Teksti i pershkrimit te nje Qendre Kulturore Shqiptare ne Zvicer, ne baze te cilit tekst eshte punuar Projekti Ideor:
              </p>
              <ol>
                <li>Numri maksimal i vizitoreve qe frekuentojne ne Qender parashihet te jete rreth 50.000 veta/vit!</li>
                <li>Numri maksimal i vendeve me tavolina rreth 500 veta, kurse pa tavolina - vetem me karriga rreth 1000 veta.</li>
                <li>Qendra e pare Kulturore Shqiptare ne Zvicer, do te kete sallen e shtruar me parket e cila do te perdoret per ushtrime te ndryshme kulturore e sportive, per tubime e manifestime, per festa kombetare e familjare.</li>
                <li>Salla do ta kete binen e madhe ku mund te vallezohet dhe te ipen koncerte e shfaqje teatrale. Bina do te jete e ngritur mbi dysheme sipas standardeve me hapsirat ne prapaskene per veshje-pergaditje te artisteve si dhe hapsiren per vendosjen e paisjeve.</li>
                <li>Ne hyrje Qendra do ta kete hollin e pritjes me gjitha kushtet per pritje dhe taulete te mjaftueshme per meshkuj e femra.</li>
                <li>Parashihet qe Qendra Kulturore ta kete nje restoran me rreth 200 ulese.</li>
                <li>Qendra Kulturore do ta kete nje biblioteke dhe nje salle leximi me 50 ulese me tavolina.</li>
                <li>Qendra Kulturore do ta kete nje hapsire muze ku do te ekspozohen eksponate me rendesi te historise, te kultures e traditave kombetare shqiptare.</li>
                <li>Qendra Kulturore do t&apos;i kete dy hapsira te paisura per kurse e seminare te ndryshme qe do te organizohen ne Qendren Kulturore. Dy hapsira adekuate per kurse e seminare me nga 50 vende dhe nje hapsire ku ligjeruesit do te mund t&apos;i bejne pergaditjet dhe pauzat.</li>
                <li>Qendra Kulturore do ta kete nje zyre per nevoja te Kryesise - menaxhmentit te Qendres Kulturore.</li>
                <li>Qendra do ta kete nje punetori (dhome) ku do te mbahen gjitha veglat e paisjet per mirembajtjen e Qendres.</li>
                <li>Ne kuader te Qendres Kulturore do te funksionoje edhe nje shitore me produkte te prodhuesve shqiptar nga Shqiperia, Kosova, Maqedonia, Lugina e Presheves, Mai i Zi si dhe prodhues te ndryshem te diaspores shqiptare. Kjo hapsire sikur edhe restorani do te jipen me qira.</li>
                <li>Qendra Kulturore do ta kete nje punonjes mirembajtese - shtepiak (Hauswart - Concierge)</li>
                <li>Qendra Kulturore do te kete dhoma gjumi per musafire te Qendres.</li>
                <li>Ne oborron e Qendres Kulturore duhet te kete vend per parkim te rreth 100 makinave dhe hapsire te mjaftueshme per levizje pa pengesa te njerezve.</li>
                <li>Qendrat Kulturore Shqiptare ne Zvicer do te mbajne emra te heronjeve, deshmoreve e figurave te deshmuara nga historia e lavdishme e historise dhe krijimtarise shqiptare.</li>
              </ol>

              <h2>Pershkrimi Arkitektonik i Projektit</h2>
              <p>
                Nga arkitekt Florent Berisha - &laquo;Projekti Ideor i Qendres se Pare Kulturore Shqiptare ne Zvicer&raquo;
              </p>
              <p>
                Ky projekt i pari i keti lloji eshte realizuar ne baze te tekstit te mesiperm dhe ne baze te sqarimeve plotesuese nga ana e kryetarit te shoqates inxh.dipl. Ahmet Asani.
              </p>
              <p>
                Faza e pare ajo e planifikimit dhe analizave per kete objekt ka qene sfiduese duke patur parasyshe rendesine e ketij objekti kulturor me rendesi kombetare! Misioni i keti objekti ishte nje motivacion per te ofruar zgjidhje sa me te qendrueshme, funksionale dhe estetike te objektit.
              </p>

              <h3>Pershkrimi i Parceles</h3>
              <p>
                Parcela ku eshte projektuar eshte nje teren i rrafshet, hapsira e shfrytzuar (projektuar) ne kete percele eshte 56 ari (5600 m&sup2;). Qasjet dhe ckyçjet per kembesoret dhe veturat jane te perbera prej dy arterieve, nje per hyrje ne objekt dhe nje per dalje.
              </p>
              <p>Sipas konceptit hapsira eshte e ndare ne 2 zona:</p>
              <ol>
                <li>Objekti, Sheshi (Shtatorja, Hapsira gjelbruese, lule, Shetirore)</li>
                <li>Trotuaret dhe parkingjet (rreth 100 parkingje)</li>
              </ol>

              <h3>Pershkrimi i Objektit</h3>
              <p>
                Objekti i Qendres Kulturore ka hyrjen kryesore ku mund te perceptohet leht nga volumetria dhe nuk krijon kunfuzion tek vizitoret ne qasjen e pare me objektin. Objekti permban edhe nje hyrje dytesore per zyrtaret, artistet, nxenesit, seminaristet, po ashtu edhe nje hyrje emergjente.
              </p>
              <p>
                Sa i perket fasades dhe formes arkitekturore jemi munduar te percjellim frymen moderne te arkitektures duke e dizajnuar nje fasade me ritem perserites me hapje te rregullta te cilat krijojne efekt te mire ne perceptimin vizel dhe njekohesisht ndriçim te mjaftueshem.
              </p>

              <h3>Perdhesa</h3>
              <p>
                Ne hyrje e kemi hollin i percjellur me recepcion dhe pjesen e garderobes. Si pjese e hollit jane wc-te per femra dhe meshkuj.
              </p>
              <p>
                Perdhesa numron njeren nga hapsirat kryesore ku eshte edhe salla shumperdorimeshe e shtruar ne parket druri e percjellur me skenen dhe hapsirat veshtore e te makiazhit per artistet. Kapaciteti i salles eshte per 400 persona me tavolina dhe diku afer 1000 vende pa tavolina. Per shkak te qasjes me te lehte dhe frekuentimit me te shpeshte ne perdhese eshte edhe restoranti me kuzhine dhe me hapsire te mjaftueshme per ahengje te ndryshme. Ne perdhese eshte edhe nje lokal i cili mund te sherbej si lokal afarist ne fushen e financave ose sigurimeve ose si dyqan ku mund te shiten produkte te ndryshme.
              </p>

              <h3>Kati 1</h3>
              <p>
                Permes hollit kryesor dhe hollit mbrapa ngjitemi ne katin e pare ku permes koridorit ne forme te shkronjes C jane te radhitura hapsirat te cilat gjithashtu kane mjaft frekuentim dhe kane aktivitete te ndryshme. Ne katin e pare jane planifikuar te jene zyret per kryesine e Qendres, hapsire kjo qe ofron nje komoditet te mire te percjellur nga: Salla per mbledhje te kryesise, arkiva, holli prites dhe WC.
              </p>
              <p>
                Si pjese e aktiviteteve ne katin e pare jane: Galeria per ekspozita te ndryshme, Muzeu ku mund te vendosen artefakte te ndryshme, objekte dhe gjera te tjera tradicionale shqiptare, salla e konferencave me 50 ulese e cila do te sherbej per konferenca te ndryshme, seminare, ligjerata, promovime etj. Gjithashtu ne hapsirat e katit te pare jane planifikuar te jene edhe 5 dhoma, dy nga te cilat mund te sherbejne si dhoma te fjetjes per musafiret dhe tri tjera si zyre qe mund te ipen me qira!
              </p>

              <h3>Kati 2</h3>
              <p>
                Ne katin e dyte eshte respektuar vija e levizjes se koridoreve duke organizuar kthina pergjate gjithe koridorit. Kati i dyte gjithashtu numron nje numer te madh te hapsirave per aktivitete te ndryshme te destinuara kryesisht per dashamiret e librit, lexuesit, nxenesit dhe studentet.
              </p>
              <p>
                Si ide eshte planifikuar te jene tri klasa me nga 50 ulese ku mund te mbahen kurse te ndryshme, seminare, etj. Ne katin e dyte eshte vendosur biblioteka dhe salla e leximit, hapsira keto te cilat ofrojne kushte te mira per te studiuar dhe per te punar ne grup. Gjithashtu ne katin e dyte eshte dhe nje hapsire prej 190 m&sup2; ku mund te mbahen kurse te vallezimit, aktrimit etj.
              </p>

              <h2>Siperfaqet</h2>
              <p className="font-semibold">Siperfaqja totale e objektit: 4200 m&sup2;</p>

              <h3>Perdhesa (1800 m&sup2;)</h3>
              <div className="overflow-x-auto">
                <table>
                  <tbody>
                    <tr><td>Holli</td><td>256 m&sup2;</td></tr>
                    <tr><td>Salla</td><td>500 m&sup2;</td></tr>
                    <tr><td>Skena</td><td>109 m&sup2;</td></tr>
                    <tr><td>Veshtoret per artistet dhe gjerat e skenes</td><td>270 m&sup2;</td></tr>
                    <tr><td>Restoranti</td><td>420 m&sup2;</td></tr>
                    <tr><td>Lokali</td><td>50 m&sup2;</td></tr>
                    <tr><td>Holli mbrapa</td><td>75 m&sup2;</td></tr>
                    <tr><td>WC M&amp;F</td><td>60 m&sup2;</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>Kati 1 (1200 m&sup2;)</h3>
              <div className="overflow-x-auto">
                <table>
                  <tbody>
                    <tr><td>Tri zyre nga 60 m&sup2;</td><td>3&times;60 m&sup2;</td></tr>
                    <tr><td>Salla per mbledhje</td><td>80 m&sup2;</td></tr>
                    <tr><td>Salla e konferencave</td><td>100 m&sup2;</td></tr>
                    <tr><td>Holli i pritjes</td><td>100 m&sup2;</td></tr>
                    <tr><td>Arkivi</td><td>60 m&sup2;</td></tr>
                    <tr><td>Galeria per ekspozita</td><td>100 m&sup2;</td></tr>
                    <tr><td>Muzeu</td><td>100 m&sup2;</td></tr>
                    <tr><td>WC F&amp;M</td><td>60 m&sup2;</td></tr>
                    <tr><td>Nyjet sanitare pastruesit</td><td>60 m&sup2;</td></tr>
                    <tr><td>5 dhoma gjumi</td><td>5&times;30 m&sup2;</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>Kati 2 (1200 m&sup2;)</h3>
              <div className="overflow-x-auto">
                <table>
                  <tbody>
                    <tr><td>3 klase</td><td>3&times;100 m&sup2;</td></tr>
                    <tr><td>Biblioteka dhe salla e leximit</td><td>200 m&sup2;</td></tr>
                    <tr><td>Hapsira per ushtrime, vallezime etj</td><td>190 m&sup2;</td></tr>
                    <tr><td>WC F&amp;M</td><td>60 m&sup2;</td></tr>
                    <tr><td>Nyjet sanitare</td><td>30 m&sup2;</td></tr>
                    <tr><td>Dy zyre (njera per ligjeruesit, tjetra me qira)</td><td>2&times;50 m&sup2;</td></tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Key facts */}
            <div className="bg-bg-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-text">
                {tx(locale, { sq: 'Fakte kryesore', de: 'Wichtige Fakten', fr: 'Faits cles', it: 'Fatti chiave', en: 'Key facts' })}
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {tx(locale, { sq: 'Siperfaqja totale', de: 'Gesamtfläche', fr: 'Surface totale', it: 'Superficie totale', en: 'Total area' })}
                  </dt>
                  <dd className="text-2xl font-bold text-primary mt-1">4,200 m&sup2;</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {tx(locale, { sq: 'Vizitore ne vit', de: 'Besucher pro Jahr', fr: 'Visiteurs par an', it: 'Visitatori all\'anno', en: 'Visitors per year' })}
                  </dt>
                  <dd className="text-2xl font-bold text-primary mt-1">~50,000</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {tx(locale, { sq: 'Kapaciteti i salles', de: 'Saalkapazität', fr: 'Capacite de la salle', it: 'Capacita della sala', en: 'Hall capacity' })}
                  </dt>
                  <dd className="text-sm text-text mt-1">
                    {tx(locale, { sq: '400 me tavolina / 1000 pa tavolina', de: '400 mit Tischen / 1000 ohne Tische', fr: '400 avec tables / 1000 sans tables', it: '400 con tavoli / 1000 senza tavoli', en: '400 with tables / 1000 without tables' })}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {tx(locale, { sq: 'Parkingu', de: 'Parkplätze', fr: 'Parking', it: 'Parcheggio', en: 'Parking' })}
                  </dt>
                  <dd className="text-sm text-text mt-1">~100</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {tx(locale, { sq: 'Viti i iniciatives', de: 'Jahr der Initiative', fr: "Annee de l'initiative", it: "Anno dell'iniziativa", en: 'Year of initiative' })}
                  </dt>
                  <dd className="text-2xl font-bold text-primary mt-1">2018</dd>
                </div>
              </dl>
            </div>

            {/* Further information */}
            <div className="bg-bg-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-text">
                {tx(locale, { sq: 'Informacione te metejshme', de: 'Weitere Informationen', fr: 'Informations complementaires', it: 'Ulteriori informazioni', en: 'Further information' })}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`${prefix}/rreth-nesh`}
                    className="text-primary hover:text-primary-light text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {tx(locale, { sq: 'Rreth BSHZ-se', de: 'Uber die BSHZ', fr: 'A propos de la BSHZ', it: 'Informazioni sulla BSHZ', en: 'About the BSHZ' })}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${prefix}/aktivitete`}
                    className="text-primary hover:text-primary-light text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {tx(locale, { sq: 'Aktivitetet tona', de: 'Unsere Aktivitaten', fr: 'Nos activites', it: 'Le nostre attivita', en: 'Our activities' })}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${prefix}/kontakt`}
                    className="text-primary hover:text-primary-light text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {tx(locale, { sq: 'Na kontaktoni', de: 'Kontaktieren Sie uns', fr: 'Contactez-nous', it: 'Contattateci', en: 'Contact us' })}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
