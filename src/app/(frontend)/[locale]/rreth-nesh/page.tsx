import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { RichText } from '@/components/RichText'

const visionMission: Record<string, { sectionTitle: string; visionTitle: string; visionText: string; missionTitle: string; missionParagraphs: string[] }> = {
  sq: {
    sectionTitle: 'Vizioni dhe Misioni',
    visionTitle: 'Vizioni',
    visionText: 'Qëllimi i shoqatës "Bashkësia Shqiptare në Zvicër" është organizimi i komunitetit shqiptar në drejtim të ruajtjes dhe zhvillimit të gjuhës, kulturës, artit dhe traditave kombetare, për gjithë shqiptarët që jetojnë e veprojnë në teritorin e shtetit të Zvicrës, pavarësisht nga cila pjesë e atdheut janë, pavarësisht bindjeve politike dhe përkatesisë konfesionale.',
    missionTitle: 'Misioni',
    missionParagraphs: [
      'Per arritjen e qëllimit të lartshënuara "Bashkësia Shqiptare në Zvicër" si një orgnizimi kulm, perdorë gjitha format legale te organizimit siç janë, takimet, tubimet, manifestimet, kuvendet, simpoziumet dhe format tjera organizative që kryesisht kanë të bejne me koordinimin e aktiviteteve të komunitetit shqiptar ne nivel te Kantoneve dhe shtetit të Zvicres. Një prej instrumenteve me rëndesi, të cilin BSHZ punon që ta realizoj janë Qendrat Kulturore Shqiptare, qendra të cilat mendohet te ngriten nëpër disa kantone te ndryshme të Zvicrës.',
      'Element tjetër me rendesi që do të perdoret per arritjen e vizionit është bashkëpunimi me institucionet perkatëse të shtetit të Zvicrës, Kosovës, Shqiperisë, Maqedonise së Veriut dhe të komunave shqiptare në Serbi e Mal të Zi, institucione për te cilat arrihet besimi se janë të gatshme për bashkëpunim në drejtim të ruajtjes dhe kultivimit të vlerave kombëtare shqiptare.',
      'Element tjeter me rendesi eshte bashkepunimi me shoqatat dhe personalitetet e ndryshme ne Zvicer, atdhe e botë, që kanë vizione te njejta rreth organizimit te diasporës shqiptare si Bashkësi – Komunitet (Gemeinschaft- Communaute – Comunita – Community).',
    ],
  },
  de: {
    sectionTitle: 'Vision und Mission',
    visionTitle: 'Vision',
    visionText: 'Das Ziel des Vereins «Albanische Gemeinschaft in der Schweiz» ist die Organisation der albanischen Gemeinschaft im Hinblick auf die Bewahrung und Entwicklung der Sprache, Kultur, Kunst und nationalen Traditionen für alle Albaner, die im Gebiet des Schweizer Staates leben und wirken, unabhängig davon, aus welchem Teil der Heimat sie stammen, unabhängig von politischen Überzeugungen und konfessioneller Zugehörigkeit.',
    missionTitle: 'Mission',
    missionParagraphs: [
      'Zur Erreichung des oben genannten Ziels nutzt die «Albanische Gemeinschaft in der Schweiz» als Dachorganisation alle legalen Organisationsformen wie Treffen, Versammlungen, Veranstaltungen, Kongresse, Symposien und andere Organisationsformen, die hauptsächlich mit der Koordination der Aktivitäten der albanischen Gemeinschaft auf Kantons- und Bundesebene zu tun haben. Eines der wichtigsten Instrumente, an dessen Verwirklichung die BSHZ arbeitet, sind die Albanischen Kulturzentren, die in verschiedenen Kantonen der Schweiz errichtet werden sollen.',
      'Ein weiteres wichtiges Element zur Erreichung der Vision ist die Zusammenarbeit mit den entsprechenden Institutionen der Schweiz, des Kosovo, Albaniens, Nordmazedoniens und der albanischen Gemeinden in Serbien und Montenegro – Institutionen, bei denen davon ausgegangen werden kann, dass sie zur Zusammenarbeit bei der Bewahrung und Pflege der albanischen nationalen Werte bereit sind.',
      'Ein weiteres wichtiges Element ist die Zusammenarbeit mit verschiedenen Vereinen und Persönlichkeiten in der Schweiz, in der Heimat und weltweit, die die gleiche Vision bezüglich der Organisation der albanischen Diaspora als Gemeinschaft – Community (Gemeinschaft – Communauté – Comunità – Community) teilen.',
    ],
  },
  fr: {
    sectionTitle: 'Vision et Mission',
    visionTitle: 'Vision',
    visionText: 'L\'objectif de l\'association «Communauté Albanaise en Suisse» est l\'organisation de la communauté albanaise en vue de la préservation et du développement de la langue, de la culture, de l\'art et des traditions nationales, pour tous les Albanais qui vivent et travaillent sur le territoire de l\'État suisse, indépendamment de leur région d\'origine, de leurs convictions politiques et de leur appartenance confessionnelle.',
    missionTitle: 'Mission',
    missionParagraphs: [
      'Pour atteindre l\'objectif susmentionné, la «Communauté Albanaise en Suisse», en tant qu\'organisation faîtière, utilise toutes les formes légales d\'organisation telles que les réunions, les rassemblements, les manifestations, les congrès, les symposiums et autres formes organisationnelles qui concernent principalement la coordination des activités de la communauté albanaise au niveau des cantons et de l\'État suisse. L\'un des instruments les plus importants que la BSHZ travaille à réaliser sont les Centres Culturels Albanais, des centres qui sont prévus dans plusieurs cantons de la Suisse.',
      'Un autre élément important pour la réalisation de la vision est la coopération avec les institutions respectives de la Suisse, du Kosovo, de l\'Albanie, de la Macédoine du Nord et des communes albanaises en Serbie et au Monténégro – des institutions dont on peut estimer qu\'elles sont disposées à coopérer pour la préservation et la cultivation des valeurs nationales albanaises.',
      'Un autre élément important est la coopération avec diverses associations et personnalités en Suisse, dans la patrie et dans le monde, qui partagent la même vision concernant l\'organisation de la diaspora albanaise en tant que Communauté (Gemeinschaft – Communauté – Comunità – Community).',
    ],
  },
  it: {
    sectionTitle: 'Visione e Missione',
    visionTitle: 'Visione',
    visionText: 'L\'obiettivo dell\'associazione «Comunita Albanese in Svizzera» e l\'organizzazione della comunita albanese in vista della preservazione e dello sviluppo della lingua, della cultura, dell\'arte e delle tradizioni nazionali, per tutti gli albanesi che vivono e operano nel territorio dello Stato svizzero, indipendentemente dalla regione di provenienza, dalle convinzioni politiche e dall\'appartenenza confessionale.',
    missionTitle: 'Missione',
    missionParagraphs: [
      'Per raggiungere l\'obiettivo sopra menzionato, la «Comunita Albanese in Svizzera», in quanto organizzazione mantello, utilizza tutte le forme legali di organizzazione come incontri, assemblee, manifestazioni, congressi, simposi e altre forme organizzative che riguardano principalmente il coordinamento delle attivita della comunita albanese a livello cantonale e federale. Uno degli strumenti piu importanti che la BSHZ sta lavorando per realizzare sono i Centri Culturali Albanesi, centri previsti in diversi cantoni della Svizzera.',
      'Un altro elemento importante per la realizzazione della visione e la cooperazione con le rispettive istituzioni della Svizzera, del Kosovo, dell\'Albania, della Macedonia del Nord e dei comuni albanesi in Serbia e Montenegro - istituzioni che si ritiene siano disposte a cooperare per la preservazione e la coltivazione dei valori nazionali albanesi.',
      'Un altro elemento importante e la cooperazione con diverse associazioni e personalita in Svizzera, in patria e nel mondo, che condividono la stessa visione riguardo all\'organizzazione della diaspora albanese come Comunita (Gemeinschaft - Communaute - Comunita - Community).',
    ],
  },
  en: {
    sectionTitle: 'Vision and Mission',
    visionTitle: 'Vision',
    visionText: 'The goal of the association "Albanian Community in Switzerland" is the organisation of the Albanian community towards the preservation and development of language, culture, art and national traditions, for all Albanians who live and work in the territory of the Swiss state, regardless of their region of origin, political convictions and confessional affiliation.',
    missionTitle: 'Mission',
    missionParagraphs: [
      'To achieve the above-mentioned goal, the "Albanian Community in Switzerland", as an umbrella organisation, uses all legal forms of organisation such as meetings, assemblies, events, congresses, symposia and other organisational forms that mainly concern the coordination of Albanian community activities at cantonal and federal level. One of the most important instruments that BSHZ is working to realise are the Albanian Cultural Centres, centres that are planned in several cantons of Switzerland.',
      'Another important element for achieving the vision is cooperation with the respective institutions of Switzerland, Kosovo, Albania, North Macedonia and Albanian municipalities in Serbia and Montenegro - institutions that are believed to be willing to cooperate in the preservation and cultivation of Albanian national values.',
      'Another important element is cooperation with various associations and personalities in Switzerland, in the homeland and worldwide, who share the same vision regarding the organisation of the Albanian diaspora as a Community (Gemeinschaft - Communaute - Comunita - Community).',
    ],
  },
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const payload = await getPayload()

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'rreth-nesh' } },
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
    limit: 1,
  })

  const page = result.docs[0]
  const vm = visionMission[locale] || visionMission.sq

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{page?.title as string || t('title')}</h1>

      {page?.content ? (
        <div className="prose prose-lg max-w-none">
          <RichText content={page.content as any} />
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-text-light text-lg">
            {{ sq: 'Përmbajtja do të shtohet së shpejti.', de: 'Inhalt wird in Kürze hinzugefügt.', fr: 'Le contenu sera ajoute prochainement.', it: 'Il contenuto sara aggiunto presto.', en: 'Content will be added soon.' }[locale]}
          </p>
        </div>
      )}

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-6">{vm.sectionTitle}</h2>

        <h3 className="text-xl font-semibold mt-8 mb-3">{vm.visionTitle}</h3>
        <p>{vm.visionText}</p>

        <h3 className="text-xl font-semibold mt-8 mb-3">{vm.missionTitle}</h3>
        {vm.missionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
