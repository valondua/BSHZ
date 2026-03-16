import Link from 'next/link'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'

function tx(locale: string, texts: { sq: string; de: string; fr: string; it: string; en: string }): string {
  return texts[locale as keyof typeof texts] || texts.sq
}

export default async function ShqiptaretNeZvicerPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const prefix = `/${locale}`

  // Fetch related news
  const payload = await getPayload()
  const newsResult = await payload.find({
    collection: 'news',
    limit: 3,
    sort: '-publishedAt',
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
    where: { _status: { equals: 'published' } },
  })

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/images/topic-shqiptaret.png"
          alt={tx(locale, { sq: 'Shqiptaret ne Zvicer', de: 'Albaner in der Schweiz', fr: 'Les Albanais en Suisse', it: 'Gli albanesi in Svizzera', en: 'Albanians in Switzerland' })}
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
              {tx(locale, { sq: 'Shqiptaret ne Zvicer', de: 'Albaner in der Schweiz', fr: 'Les Albanais en Suisse', it: 'Gli albanesi in Svizzera', en: 'Albanians in Switzerland' })}
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
              <h2>
                {tx(locale, {
                  sq: 'Komuniteti shqiptar ne Zvicer',
                  de: 'Die albanische Gemeinschaft in der Schweiz',
                  fr: 'La communaute albanaise en Suisse',
                  it: 'La comunita albanese in Svizzera',
                  en: 'The Albanian community in Switzerland',
                })}
              </h2>
              <p>
                {tx(locale, {
                  sq: 'Shqiptaret perbejne nje nga komunitetet me te medha te huaja ne Zvicer, me rreth 250,000 persona me origjine shqiptare qe jetojne ne vend. Kjo perfshin shtetas nga Kosova, Shqiperia, Maqedonia e Veriut dhe rajonet e tjera ku flitet shqip. Komuniteti eshte i shperndare ne te gjithe Zvicren, me perqendrime te vecanta ne kantonet gjermanofone si Zurich, Bern, St. Gallen, Aargau dhe Lucerne.',
                  de: 'Albanerinnen und Albaner bilden eine der grössten ausländischen Gemeinschaften in der Schweiz. Rund 250\'000 Personen albanischer Herkunft leben im Land. Dazu gehören Staatsangehörige aus dem Kosovo, Albanien, Nordmazedonien und weiteren albanischsprachigen Regionen. Die Gemeinschaft ist über die gesamte Schweiz verteilt, mit besonderen Schwerpunkten in den deutschsprachigen Kantonen Zürich, Bern, St. Gallen, Aargau und Luzern.',
                  fr: 'Les Albanais constituent l\'une des plus grandes communautes etrangeres en Suisse, avec environ 250 000 personnes d\'origine albanaise vivant dans le pays. Cela inclut des ressortissants du Kosovo, d\'Albanie, de Macedoine du Nord et d\'autres regions albanophones. La communaute est repartie dans toute la Suisse, avec des concentrations particulieres dans les cantons germanophones comme Zurich, Berne, Saint-Gall, Argovie et Lucerne.',
                  it: 'Gli albanesi costituiscono una delle piu grandi comunita straniere in Svizzera, con circa 250.000 persone di origine albanese che vivono nel paese. Questo include cittadini del Kosovo, dell\'Albania, della Macedonia del Nord e di altre regioni albanofone. La comunita e distribuita in tutta la Svizzera, con concentrazioni particolari nei cantoni germanofoni come Zurigo, Berna, San Gallo, Argovia e Lucerna.',
                  en: 'Albanians form one of the largest foreign communities in Switzerland, with around 250,000 people of Albanian origin living in the country. This includes citizens from Kosovo, Albania, North Macedonia and other Albanian-speaking regions. The community is spread across all of Switzerland, with particular concentrations in the German-speaking cantons such as Zurich, Bern, St. Gallen, Aargau and Lucerne.',
                })}
              </p>

              <h2>
                {tx(locale, {
                  sq: 'Historia e migrimit',
                  de: 'Migrationsgeschichte',
                  fr: 'Histoire de la migration',
                  it: 'Storia della migrazione',
                  en: 'Migration history',
                })}
              </h2>
              <p>
                {tx(locale, {
                  sq: 'Migrimi i shqiptareve ne Zvicer filloi ne vitet 1960 me punetoret sezonale, kryesisht nga Kosova dhe Maqedonia e Veriut. Faza e dyte e migrimit ndodhi ne vitet 1980 dhe 1990, kur shume shqiptare u larguan per shkak te shtypjes politike dhe konflikteve ne ish-Jugosllavi. Lufta e Kosoves (1998-1999) solli nje vale te madhe refugjatesh, shume prej te cileve u vendosen pergjithmone ne Zvicer. Sot, brezi i dyte dhe i trete jane te integruar mire ne shoqerine zvicerane, duke dhene kontribut te rendesishem ne fushat ekonomike, kulturore dhe sportive.',
                  de: 'Die Migration von Albanerinnen und Albanern in die Schweiz begann in den 1960er-Jahren mit Saisonarbeitern, hauptsächlich aus dem Kosovo und Nordmazedonien. Eine zweite Migrationsphase folgte in den 1980er- und 1990er-Jahren, als viele Albaner wegen politischer Unterdrückung und den Konflikten im ehemaligen Jugoslawien flohen. Der Kosovokrieg (1998-1999) brachte eine grosse Flüchtlingswelle, von denen sich viele dauerhaft in der Schweiz niederliessen. Heute sind die zweite und dritte Generation gut in die Schweizer Gesellschaft integriert und leisten bedeutende Beiträge in den Bereichen Wirtschaft, Kultur und Sport.',
                  fr: 'La migration des Albanais en Suisse a debute dans les annees 1960 avec des travailleurs saisonniers, principalement du Kosovo et de Macedoine du Nord. Une deuxieme phase migratoire a eu lieu dans les annees 1980 et 1990, lorsque de nombreux Albanais ont fui la repression politique et les conflits en ex-Yougoslavie. La guerre du Kosovo (1998-1999) a entraine une grande vague de refugies, dont beaucoup se sont installes definitivement en Suisse. Aujourd\'hui, les deuxieme et troisieme generations sont bien integrees dans la societe suisse, contribuant de maniere significative dans les domaines economique, culturel et sportif.',
                  it: 'La migrazione degli albanesi in Svizzera e iniziata negli anni \'60 con i lavoratori stagionali, principalmente dal Kosovo e dalla Macedonia del Nord. Una seconda fase migratoria si e verificata negli anni \'80 e \'90, quando molti albanesi sono fuggiti a causa della repressione politica e dei conflitti nell\'ex Jugoslavia. La guerra del Kosovo (1998-1999) ha portato una grande ondata di rifugiati, molti dei quali si sono stabiliti permanentemente in Svizzera. Oggi la seconda e la terza generazione sono ben integrate nella societa svizzera, dando contributi significativi nei settori economico, culturale e sportivo.',
                  en: 'The migration of Albanians to Switzerland began in the 1960s with seasonal workers, mainly from Kosovo and North Macedonia. A second migration phase occurred in the 1980s and 1990s, when many Albanians fled due to political repression and conflicts in the former Yugoslavia. The Kosovo War (1998-1999) brought a large wave of refugees, many of whom settled permanently in Switzerland. Today, the second and third generations are well integrated into Swiss society, making significant contributions in economic, cultural and sporting fields.',
                })}
              </p>

              <h2>
                {tx(locale, {
                  sq: 'Integrimi dhe kontributi',
                  de: 'Integration und Beitrag',
                  fr: 'Integration et contribution',
                  it: 'Integrazione e contributo',
                  en: 'Integration and contribution',
                })}
              </h2>
              <p>
                {tx(locale, {
                  sq: 'Shqiptaret ne Zvicer jane te njohur per etiken e tyre te forte te punes dhe per kontributin aktiv ne shoqeri. Ne fushen e sportit, shume futbolliste me origjine shqiptare kane perfaqesuar Zvicren ne nivel nderkombetar, duke u bere ambasadore te integrimit te suksesshem. Ne biznes, shume shqiptare kane themeluar ndermarrje te suksesshme ne sektore te ndryshem, duke krijuar vende pune dhe duke kontribuar ne ekonomine zvicerane. Ne kulture, festivale, organizata dhe ngjarje te shumta promovojne trashegiminine e pasur shqiptare duke ndertuar ura mes dy kulturave.',
                  de: 'Albanerinnen und Albaner in der Schweiz sind bekannt für ihre starke Arbeitsmoral und ihren aktiven Beitrag zur Gesellschaft. Im Sportbereich haben zahlreiche Fussballspieler albanischer Herkunft die Schweiz auf internationaler Ebene vertreten und sind zu Botschaftern gelungener Integration geworden. In der Wirtschaft haben viele Albaner erfolgreiche Unternehmen in verschiedenen Branchen gegründet, Arbeitsplätze geschaffen und zur Schweizer Wirtschaft beigetragen. Im kulturellen Bereich fördern zahlreiche Festivals, Organisationen und Veranstaltungen das reiche albanische Erbe und bauen Brücken zwischen den beiden Kulturen.',
                  fr: 'Les Albanais en Suisse sont reconnus pour leur forte ethique de travail et leur contribution active a la societe. Dans le domaine sportif, de nombreux footballeurs d\'origine albanaise ont represente la Suisse au niveau international, devenant des ambassadeurs d\'une integration reussie. Dans les affaires, beaucoup d\'Albanais ont fonde des entreprises prosperes dans divers secteurs, creant des emplois et contribuant a l\'economie suisse. Sur le plan culturel, de nombreux festivals, organisations et evenements promeuvent le riche patrimoine albanais tout en construisant des ponts entre les deux cultures.',
                  it: 'Gli albanesi in Svizzera sono riconosciuti per la loro forte etica del lavoro e il loro contributo attivo alla societa. Nel campo dello sport, numerosi calciatori di origine albanese hanno rappresentato la Svizzera a livello internazionale, diventando ambasciatori di un\'integrazione riuscita. Nel mondo degli affari, molti albanesi hanno fondato imprese di successo in vari settori, creando posti di lavoro e contribuendo all\'economia svizzera. Sul piano culturale, numerosi festival, organizzazioni ed eventi promuovono il ricco patrimonio albanese costruendo ponti tra le due culture.',
                  en: 'Albanians in Switzerland are known for their strong work ethic and active contribution to society. In sports, many footballers of Albanian origin have represented Switzerland at the international level, becoming ambassadors of successful integration. In business, many Albanians have founded successful enterprises in various sectors, creating jobs and contributing to the Swiss economy. In culture, numerous festivals, organizations and events promote the rich Albanian heritage while building bridges between the two cultures.',
                })}
              </p>

              <h2>
                {tx(locale, {
                  sq: 'Roli i BSHZ-se',
                  de: 'Die Rolle der BSHZ',
                  fr: 'Le role de la BSHZ',
                  it: 'Il ruolo della BSHZ',
                  en: 'The role of the BSHZ',
                })}
              </h2>
              <p>
                {tx(locale, {
                  sq: 'Bashkesia Shqiptare ne Zvicer (BSHZ) eshte organizata kryesore qe perfaqeson interesat e komunitetit shqiptar ne Zvicer. E themeluar me qellimin per te forcuar zerin e shqiptareve ne shoqerine zvicerane, BSHZ punon ne disa drejtime kryesore: promovimin e integrimit duke ruajtur identitetin kulturor, perfaqesimin e komunitetit ne dialog me institucionet zvicerane, organizimin e aktiviteteve kulturore dhe arsimore, si dhe mbeshtetjen e te rinjve ne zhvillimin e tyre profesional dhe personal. BSHZ eshte e angazhuar per nje bashkejetese harmonike dhe per perforcimin e lidhjeve mes komunitetit shqiptar dhe shoqerise zvicerane.',
                  de: 'Die Albanische Gemeinschaft in der Schweiz (BSHZ) ist die führende Organisation, die die Interessen der albanischen Gemeinschaft in der Schweiz vertritt. Gegründet mit dem Ziel, die Stimme der Albanerinnen und Albaner in der Schweizer Gesellschaft zu stärken, arbeitet die BSHZ in mehreren Schwerpunktbereichen: Förderung der Integration bei gleichzeitiger Bewahrung der kulturellen Identität, Vertretung der Gemeinschaft im Dialog mit Schweizer Institutionen, Organisation kultureller und Bildungsveranstaltungen sowie Unterstützung der Jugend in ihrer beruflichen und persönlichen Entwicklung. Die BSHZ setzt sich für ein harmonisches Zusammenleben und die Stärkung der Verbindungen zwischen der albanischen Gemeinschaft und der Schweizer Gesellschaft ein.',
                  fr: 'La Communaute albanaise en Suisse (BSHZ) est la principale organisation representant les interets de la communaute albanaise en Suisse. Fondee dans le but de renforcer la voix des Albanais dans la societe suisse, la BSHZ travaille dans plusieurs domaines cles : la promotion de l\'integration tout en preservant l\'identite culturelle, la representation de la communaute dans le dialogue avec les institutions suisses, l\'organisation d\'activites culturelles et educatives, ainsi que le soutien aux jeunes dans leur developpement professionnel et personnel. La BSHZ est engagee pour une coexistence harmonieuse et le renforcement des liens entre la communaute albanaise et la societe suisse.',
                  it: 'La Comunita albanese in Svizzera (BSHZ) e l\'organizzazione principale che rappresenta gli interessi della comunita albanese in Svizzera. Fondata con l\'obiettivo di rafforzare la voce degli albanesi nella societa svizzera, la BSHZ lavora in diversi ambiti chiave: la promozione dell\'integrazione preservando l\'identita culturale, la rappresentanza della comunita nel dialogo con le istituzioni svizzere, l\'organizzazione di attivita culturali ed educative e il sostegno ai giovani nel loro sviluppo professionale e personale. La BSHZ si impegna per una convivenza armoniosa e il rafforzamento dei legami tra la comunita albanese e la societa svizzera.',
                  en: 'The Albanian Community in Switzerland (BSHZ) is the leading organization representing the interests of the Albanian community in Switzerland. Founded with the aim of strengthening the voice of Albanians in Swiss society, the BSHZ works in several key areas: promoting integration while preserving cultural identity, representing the community in dialogue with Swiss institutions, organizing cultural and educational activities, and supporting young people in their professional and personal development. The BSHZ is committed to harmonious coexistence and strengthening ties between the Albanian community and Swiss society.',
                })}
              </p>
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
                    {tx(locale, { sq: 'Popullsia', de: 'Bevölkerung', fr: 'Population', it: 'Popolazione', en: 'Population' })}
                  </dt>
                  <dd className="text-2xl font-bold text-primary mt-1">~250,000</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {tx(locale, { sq: 'Vendet e origjines', de: 'Herkunftsländer', fr: 'Pays d\'origine', it: 'Paesi d\'origine', en: 'Countries of origin' })}
                  </dt>
                  <dd className="text-sm text-text mt-1">
                    {tx(locale, { sq: 'Kosova, Shqiperia, Maqedonia e Veriut, Mali i Zi, Serbia', de: 'Kosovo, Albanien, Nordmazedonien, Montenegro, Serbien', fr: 'Kosovo, Albanie, Macedoine du Nord, Montenegro, Serbie', it: 'Kosovo, Albania, Macedonia del Nord, Montenegro, Serbia', en: 'Kosovo, Albania, North Macedonia, Montenegro, Serbia' })}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {tx(locale, { sq: 'Kantonet kryesore', de: 'Hauptkantone', fr: 'Cantons principaux', it: 'Cantoni principali', en: 'Main cantons' })}
                  </dt>
                  <dd className="text-sm text-text mt-1">
                    {tx(locale, { sq: 'Zurich, Bern, St. Gallen, Aargau, Lucerne', de: 'Zürich, Bern, St. Gallen, Aargau, Luzern', fr: 'Zurich, Berne, Saint-Gall, Argovie, Lucerne', it: 'Zurigo, Berna, San Gallo, Argovia, Lucerna', en: 'Zurich, Bern, St. Gallen, Aargau, Lucerne' })}
                  </dd>
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
                    {tx(locale, { sq: 'Rreth BSHZ-se', de: 'Über die BSHZ', fr: 'A propos de la BSHZ', it: 'Informazioni sulla BSHZ', en: 'About the BSHZ' })}
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
                    {tx(locale, { sq: 'Aktivitetet tona', de: 'Unsere Aktivitäten', fr: 'Nos activites', it: 'Le nostre attivita', en: 'Our activities' })}
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
                <li>
                  <Link
                    href={`${prefix}/regjistrimi`}
                    className="text-primary hover:text-primary-light text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {tx(locale, { sq: 'Behu anetare', de: 'Mitglied werden', fr: 'Devenir membre', it: 'Diventa membro', en: 'Become a member' })}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Related news */}
            {newsResult.docs.length > 0 && (
              <div className="bg-bg-alt rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4 text-text">
                  {tx(locale, { sq: 'Lajme te lidhura', de: 'Verwandte Nachrichten', fr: 'Actualites liees', it: 'Notizie correlate', en: 'Related news' })}
                </h3>
                <ul className="space-y-4">
                  {newsResult.docs.map((article: any) => (
                    <li key={article.id}>
                      <Link
                        href={`${prefix}/lajme/${article.slug}`}
                        className="group block"
                      >
                        <h4 className="text-sm font-semibold text-text group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h4>
                        {article.publishedAt && (
                          <p className="text-xs text-text-muted mt-1">
                            {formatDate(article.publishedAt, locale)}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${prefix}/lajme`}
                  className="text-primary hover:text-primary-light text-sm font-semibold mt-4 inline-block transition-colors"
                >
                  {tx(locale, { sq: 'Te gjitha lajmet', de: 'Alle Nachrichten', fr: 'Toutes les actualites', it: 'Tutte le notizie', en: 'All news' })} &rarr;
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  )
}
