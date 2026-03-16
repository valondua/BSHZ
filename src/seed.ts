import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  // Create categories
  const [lajmeCategory, aktiviteteCategory, diasporaCategory] = await Promise.all([
    payload.create({
      collection: 'categories',
      data: { title: 'Lajme', slug: 'lajme' },
      locale: 'sq',
    }),
    payload.create({
      collection: 'categories',
      data: { title: 'Aktivitete', slug: 'aktivitete' },
      locale: 'sq',
    }),
    payload.create({
      collection: 'categories',
      data: { title: 'Diaspora', slug: 'diaspora' },
      locale: 'sq',
    }),
  ])

  // Update German translations for categories
  await Promise.all([
    payload.update({
      collection: 'categories',
      id: lajmeCategory.id,
      data: { title: 'Nachrichten' },
      locale: 'de',
    }),
    payload.update({
      collection: 'categories',
      id: aktiviteteCategory.id,
      data: { title: 'Aktivitäten' },
      locale: 'de',
    }),
    payload.update({
      collection: 'categories',
      id: diasporaCategory.id,
      data: { title: 'Diaspora' },
      locale: 'de',
    }),
  ])

  console.log('Categories created.')

  // Create news articles
  const news1 = await payload.create({
    collection: 'news',
    data: {
      title: 'Urime Dita e Pavarësisë së Kosovës!',
      slug: 'urime-dita-e-pavarsise-se-kosoves',
      summary: 'Mesazh urimi me rastin e 17 Shkurtit - Ditës së Pavarësisë së Kosovës nga Bashkësia Shqiptare në Zvicër.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Të dashur miq, zonja dhe zotërinj, në Atdhe e në Diasporë,' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Shfrytëzoj këtë rast që, në emrin tim dhe të «Bashkësisë Shqiptare në Zvicër», t\'ju përcjell urimet më të përzemërta me rastin e 17 Shkurtit – Ditës së Pavarësisë së Kosovës.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Kjo ditë e shenjtë për kombin tonë përfaqëson kurorëzimin e sakrificave të gjeneratave të tëra dhe mbetet një burim krenarie, shprese dhe përgjegjësie për të ardhmen.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Uroj që Kosova të ecë gjithmonë përpara në rrugën e forcimit të shtetit, demokracisë dhe mirëqenies për të gjithë qytetarët e saj.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Urime Dita e Pavarësisë së Kosovës!' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Me respekt të veçantë,' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Kryetari\nDipl. Ing. Ahmet Asani' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2026-02-16T00:00:00.000Z',
      categories: [diasporaCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  // German translation for news1
  await payload.update({
    collection: 'news',
    id: news1.id,
    data: {
      title: 'Herzlichen Glückwunsch zum Unabhängigkeitstag des Kosovo!',
      summary: 'Grussbotschaft anlässlich des 17. Februar - Tag der Unabhängigkeit des Kosovo von der Albanischen Gemeinschaft in der Schweiz.',
    },
    locale: 'de',
  })

  const news2 = await payload.create({
    collection: 'news',
    data: {
      title: 'SIGURIMI HELSANA FLET SHQIP – NËNSHKRUHET MARRËVESHJE E RE PËR KËSHILLIM NË GJUHËN SHQIPE!',
      slug: 'sigurimi-helsana-flet-shqip',
      summary: 'Bashkësia Shqiptare në Zvicër ka aktualizuar marrëveshjen shumëvjeçare me sigurimin më të madh shëndetësor në Zvicër – Helsana.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Të nderuar bashkatdhetarë, zonja dhe zotërinj, shfrytëzojmë rastin t\'ju përshëndesim dhe t\'ju njoftojmë se sot, më datë 15.08.2025, «Bashkësia Shqiptare në Zvicër» ka aktualizuar marrëveshjen shumëvjeçare me sigurimin më të madh shëndetësor në Zvicër – Helsana, duke u mundësuar të gjithë anëtarëve dhe simpatizantëve të «Bashkësisë Shqiptare në Zvicër» përfitime nga zbritja kolektive prej 20% në sigurimet shtesë.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Përveç përfitimit kolektiv prej 20%, të gjithë ata që dëshirojnë të informohen e të këshillohen mbi produktet e sigurimit Helsana në gjuhën shqipe, mund të drejtohen drejtpërdrejt në drejtorinë qendrore në Dübendorf.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Me respekt\nAhmet Asani\nKryetar i Shoqatës\nBashkësia Shqiptare në Zvicër\nTel: 071 508 15 41' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2025-08-15T00:00:00.000Z',
      categories: [aktiviteteCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'news',
    id: news2.id,
    data: {
      title: 'HELSANA VERSICHERUNG SPRICHT ALBANISCH – NEUER BERATUNGSVERTRAG IN ALBANISCHER SPRACHE!',
      summary: 'Die Albanische Gemeinschaft in der Schweiz hat den langjährigen Vertrag mit dem grössten Krankenversicherer der Schweiz – Helsana – erneuert.',
    },
    locale: 'de',
  })

  const news3 = await payload.create({
    collection: 'news',
    data: {
      title: 'NUMRI I SHQIPTARËVE NË MAQEDONI QË NUK U BË I DITUR KURRË!',
      slug: 'numri-i-shqiptareve-ne-maqedoni',
      summary: 'Analiza mbi të dhënat e pabotuara të regjistrimit të popullsisë së vitit 1981 në Maqedoni dhe politikat antishqiptare që ndikuan në statistikat demografike.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Më kujtohet regjistrimi i popullsisë së Maqedonisë në vitin 1981, rezultatet e të cilit regjistrim nuk u publikuan kurrë.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Sipas përllogaritjeve të mia, përqindja reale e shqiptarëve në vitin 1981 ishte diku rreth 34%. Kjo shifër nuk përfshinte shqiptarët ortodoksë.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Sipas të dhënave zyrtare të regjistrimit të fundit, ku shqiptarët përbëjnë rreth 24.3% të popullsisë, del se shqiptaret ne Maqedoni per 40 vite jo vetem që nuk u dyfishuan, por krahasuar me përqindjen reale të vitit 81 ata u pergjysmuan!' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2025-08-14T00:00:00.000Z',
      categories: [lajmeCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'news',
    id: news3.id,
    data: {
      title: 'DIE ZAHL DER ALBANER IN MAZEDONIEN, DIE NIE BEKANNT WURDE!',
      summary: 'Analyse der unveröffentlichten Volkszählungsdaten von 1981 in Mazedonien und die anti-albanischen Politiken, die die demografischen Statistiken beeinflussten.',
    },
    locale: 'de',
  })

  const news4 = await payload.create({
    collection: 'news',
    data: {
      title: 'APEL PËR DEPARTIZIMIN E DIASPORËS!',
      slug: 'apel-per-departizimin-e-diaspores',
      summary: 'Thirrje për heqjen e ndarjeve partiake në diasporën shqiptare dhe organizimin si bashkësi e bashkuar.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Koha e viteve 90-ta kur nëpërmjet pluralizmit u deshtë të demokratizohej mënyra e të menduarit dhe vepruarit monist në diasporë, ka vite që ka kaluar!' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Mërgata nuk ka qenë kurrë dhe nuk është vend për veprimtari e organizime që NDAJNË, por është vend për veprimtari e organizime që e BASHKOJNË mergatën!' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Si një nga themeluesit e shoqatës «Bashkësia Shqiptare në Zvicër», e cila është themeluar më 04.04.1999 në Bernë të Zvicrës, në vazhdimësi kam bërë apele dhe prap nëpërmjet këtij shkrimi bëjë APEL, që diaspora shqiptare në Europë e botë njëherë e përgjithmonë të departizohet!' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2023-05-29T00:00:00.000Z',
      categories: [diasporaCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'news',
    id: news4.id,
    data: {
      title: 'APPELL ZUR ENTPOLITISIERUNG DER DIASPORA!',
      summary: 'Aufruf zur Überwindung parteiischer Spaltungen in der albanischen Diaspora und Organisation als vereinte Gemeinschaft.',
    },
    locale: 'de',
  })

  // p=198 - Informatë për këshillëtarët e sigurimeve
  const news5 = await payload.create({
    collection: 'news',
    data: {
      title: 'INFORMATË ME RËNDËSI PËR KËSHILLËTARËT E SIGURIMEVE SHËNDETËSORE NË ZVICËR!',
      slug: 'informate-per-keshilletaret-e-sigurimeve',
      summary: 'Helsana ofron 20% zbritje në sigurimet shtesë për anëtarët dhe simpatizantët e Bashkësisë Shqiptare në Zvicër, duke filluar nga janari 2022.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Të nderuar bashkatdhetarë, zonja dhe zotërinj,' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Ju njoftojmë se duke filluar nga janari 2022, Helsana u ofron të gjithë anëtarëve dhe simpatizantëve të «Bashkësisë Shqiptare në Zvicër» 20% zbritje në sigurimet shtesë (plotësuese).' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Kompanitë e sigurimeve dhe këshillëtarët që kanë klientë të cilët mbështesin organizatën mund të kenë qasje në programin online të Helsanës përmes verifikimit zyrtar nga Bashkësia Shqiptare.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Kompanitë e interesuara për të pasur qasje në këtë program sigurimesh mund të kontaktojnë në:\nEmail: info@bshz.ch\nTel: 076 388 09 57 ose 071 526 21 83' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2022-02-20T00:00:00.000Z',
      categories: [lajmeCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'news',
    id: news5.id,
    data: {
      title: 'WICHTIGE INFORMATION FÜR KRANKENVERSICHERUNGSBERATER IN DER SCHWEIZ!',
      summary: 'Helsana bietet 20% Rabatt auf Zusatzversicherungen für Mitglieder und Sympathisanten der Albanischen Gemeinschaft in der Schweiz ab Januar 2022.',
    },
    locale: 'de',
  })

  // p=191 - Apel për ruajtjen e diasporës nga asimilimi
  const news6 = await payload.create({
    collection: 'news',
    data: {
      title: 'APEL DREJTUAR QEVERITARËVE NË KOSOVË, SHQIPËRI E MAQEDONINË E VERIUT, PËR RUAJTJEN E DIASPORËS SHQIPTARE NGA ASIMILIMI!',
      slug: 'apel-per-ruajtjen-e-diaspores-nga-asimilimi',
      summary: 'Thirrje drejtuar qeveritarëve për të mbrojtur diasporën shqiptare nga asimilimi, duke kërkuar organizim institucional për ruajtjen e gjuhës, kulturës dhe traditave kombëtare.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Në kohën e Rilindjes Kombëtare, pavarësisht fesë, shqiptarët ishin të bashkuar nga fryma kombëtare. Sot, edhe pse kemi qeveri dhe ministri, nuk ekziston një sistem i organizuar për ruajtjen dhe kultivimin e gjuhës, artit, kulturës dhe traditave tona kombëtare në diasporë.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Stafi i ambasadave dhe konsullatave gëzon pozita komode; klerikët fetarë marrin paga të mira dhe siguri të vendit të punës, por nuk ka mbështetje të krahasueshme institucionale për ruajtjen e trashëgimisë gjuhësore dhe kulturore mes të rinjve jashtë vendit.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Nëse vazhdojmë kështu, pas disa dekadave nipat tanë mund të identifikohen me parti politike ose fe, por me siguri nuk do të flasin shqip e as nuk do të ndihen shqiptarë.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Bëjë APEL drejtuar qeveritarëve dhe intelektualëve në Kosovë, Shqipëri dhe Maqedoninë e Veriut që të bashkojnë përpjekjet për mbrojtjen e diasporës nga erozioni kulturor.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Ahmet Asani\nKryetar i «Bashkësisë Shqiptare në Zvicër»' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2021-12-11T00:00:00.000Z',
      categories: [diasporaCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'news',
    id: news6.id,
    data: {
      title: 'APPELL AN DIE REGIERUNGEN IM KOSOVO, ALBANIEN UND NORDMAZEDONIEN ZUM SCHUTZ DER ALBANISCHEN DIASPORA VOR ASSIMILATION!',
      summary: 'Aufruf an die Regierungen zum Schutz der albanischen Diaspora vor Assimilation, mit der Forderung nach institutioneller Organisation zur Bewahrung von Sprache, Kultur und nationalen Traditionen.',
    },
    locale: 'de',
  })

  // p=131 - Nga shqiptarët për shqiptarët (DUA marketplace)
  const news7 = await payload.create({
    collection: 'news',
    data: {
      title: 'NGA SHQIPTARËT PËR SHQIPTARËT!',
      slug: 'nga-shqiptaret-per-shqiptaret',
      summary: 'Kompania DUA AG lanson marketplace.dua.com – një platformë online ku klientët mund të zbulojnë dhe blejnë produkte nga bizneset shqiptare.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Me moton "nga shqiptarët për shqiptarët", kompania DUA AG, e njohur në mesin e komuniteteve shqiptare për aplikacionin dua.com, ka realizuar projektin më të ri marketplace.dua.com.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Marketplace online në marketplace.dua.com u mundëson klientëve të zbulojnë dhe blejnë artikuj nga biznese të ndryshme shqiptare me motive dalluese kulturore shqiptare.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Ju ftojmë ta shfrytëzoni këtë përvojë të re blerjeje!' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2021-08-10T00:00:00.000Z',
      categories: [lajmeCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'news',
    id: news7.id,
    data: {
      title: 'VON ALBANERN FÜR ALBANER!',
      summary: 'DUA AG lanciert marketplace.dua.com – eine Online-Plattform, auf der Kunden Produkte von albanischen Unternehmen entdecken und kaufen können.',
    },
    locale: 'de',
  })

  // p=107 - Komuniteti shqiptar mbështet kandidaturën e Përparim Avdilit
  const news8 = await payload.create({
    collection: 'news',
    data: {
      title: 'KOMUNITETI SHQIPTAR NË CYRIH MBËSHTET KANDIDATURËN E PËRPARIM AVDILIT!',
      slug: 'komuniteti-shqiptar-mbeshtetet-perparim-avdilin',
      summary: 'Komuniteti shqiptar në Cyrih shpreh mbështetjen për kandidaturën e Përparim Avdilit për zgjedhjet e Parlamentit të Cyrihut.',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Komuniteti shqiptar në Cyrih ka shprehur mbështetjen e tij për kandidaturën e politikanit Përparim Avdili. Avdili, me origjinë nga Kumanova, u rizgjodh kohë më parë si kryetar i degës së Partisë Liberale në rrethin e nëntë dhe u nominua për zgjedhjet e Parlamentit të Cyrihut.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Në zgjedhjet e vitit 2018, me fitoren e tij, duke hyrë si shqiptari i parë në parlamentin e qytetit të Cyrihut, Përparimi na bëri krenarë si komunitet.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Edhe pse Avdili ka gjasa të marrë mbështetje nga komunitete të tjera duke pasur parasysh parimet e tij të qëndrueshme liberale, mbështetja më e fortë pritet nga komuniteti shqiptar në Cyrih.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'I urojmë shëndet, sukses dhe fitore në fushatën e tij për një vend në parlament!' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2021-08-10T00:00:00.000Z',
      categories: [diasporaCategory.id],
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'news',
    id: news8.id,
    data: {
      title: 'ALBANISCHE GEMEINSCHAFT IN ZÜRICH UNTERSTÜTZT KANDIDATUR VON PËRPARIM AVDILI!',
      summary: 'Die albanische Gemeinschaft in Zürich drückt ihre Unterstützung für die Kandidatur von Përparim Avdili für die Zürcher Parlamentswahlen aus.',
    },
    locale: 'de',
  })

  console.log('News articles created.')

  // Create events
  const event1 = await payload.create({
    collection: 'events',
    data: {
      title: 'Mbledhja e Përgjithshme Vjetore e BSHZ',
      slug: 'mbledhja-pergjithshme-vjetore-2026',
      description: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Të nderuar anëtarë të Bashkësisë Shqiptare në Zvicër, ju ftojmë në Mbledhjen e Përgjithshme Vjetore ku do të diskutohen aktivitetet e vitit të kaluar dhe planet për vitin e ardhshëm.' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      eventDate: '2026-04-15T18:00:00.000Z',
      location: 'Zürich, Zvicër',
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'events',
    id: event1.id,
    data: {
      title: 'Jährliche Generalversammlung der BSHZ',
      description: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Liebe Mitglieder der Albanischen Gemeinschaft in der Schweiz, wir laden Sie zur Jährlichen Generalversammlung ein, bei der die Aktivitäten des vergangenen Jahres und die Pläne für das kommende Jahr besprochen werden.' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    locale: 'de',
  })

  const event2 = await payload.create({
    collection: 'events',
    data: {
      title: 'Festa e Pavarësisë së Shqipërisë',
      slug: 'festa-e-pavarsise-se-shqiperise-2026',
      description: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Bashkësia Shqiptare në Zvicër organizon festën tradicionale me rastin e 28 Nëntorit - Ditës së Pavarësisë së Shqipërisë. Program kulturor dhe artistik.' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      eventDate: '2026-11-28T17:00:00.000Z',
      location: 'Bern, Zvicër',
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'events',
    id: event2.id,
    data: {
      title: 'Fest zum Unabhängigkeitstag Albaniens',
      description: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Die Albanische Gemeinschaft in der Schweiz organisiert das traditionelle Fest zum 28. November - dem Unabhängigkeitstag Albaniens. Kulturelles und künstlerisches Programm.' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    locale: 'de',
  })

  const event3 = await payload.create({
    collection: 'events',
    data: {
      title: 'Takimi i Diasporës Shqiptare në Zvicër',
      slug: 'takimi-diaspores-2026',
      description: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Takim i përgjithshëm i diasporës shqiptare në Zvicër për diskutimin e çështjeve të rëndësishme të komunitetit, integrimit dhe bashkëpunimit.' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      eventDate: '2026-06-20T14:00:00.000Z',
      location: 'St. Gallen, Zvicër',
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'events',
    id: event3.id,
    data: {
      title: 'Treffen der albanischen Diaspora in der Schweiz',
      description: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Allgemeines Treffen der albanischen Diaspora in der Schweiz zur Diskussion wichtiger Gemeinschafts-, Integrations- und Kooperationsthemen.' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    locale: 'de',
  })

  console.log('Events created.')

  // Create About Us page
  const aboutPage = await payload.create({
    collection: 'pages',
    data: {
      title: 'Rreth Nesh',
      slug: 'rreth-nesh',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Bashkësia Shqiptare në Zvicër (BSHZ)' }] },
            { type: 'paragraph', children: [{ type: 'text', text: '«Bashkësia Shqiptare në Zvicër» është organizata kryesore që përfaqëson interesat e komunitetit shqiptar në Zvicër. E themeluar më 04.04.1999 në Bernë të Zvicrës, organizata jonë punon për integrimin, kulturën dhe ruajtjen e identitetit kombëtar të shqiptarëve në Zvicër.' }] },
            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Veprimtaria jonë' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Bashkësia Shqiptare në Zvicër organizon aktivitete të ndryshme kulturore, edukative dhe sociale për komunitetin shqiptar. Ne botojmë gazetën ALBFORUM, organizojmë festa kombëtare, takime të diasporës dhe ofrojmë shërbime të ndryshme për anëtarët tanë, përfshirë këshillim për sigurime shëndetësore përmes marrëveshjes sonë me Helsana.' }] },
            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Kontakti' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Bashkësia Shqiptare në Zvicër\nTel: 071 508 15 41\nEmail: info@bshz.ch\nWeb: www.bshz.ch' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'pages',
    id: aboutPage.id,
    data: {
      title: 'Über uns',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Albanische Gemeinschaft in der Schweiz (BSHZ)' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Die «Albanische Gemeinschaft in der Schweiz» ist die führende Organisation, die die Interessen der albanischen Gemeinschaft in der Schweiz vertritt. Gegründet am 04.04.1999 in Bern, arbeitet unsere Organisation für die Integration, Kultur und den Erhalt der nationalen Identität der Albaner in der Schweiz.' }] },
            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Unsere Mission' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Wir arbeiten an der Stärkung der Verbindungen zwischen den Albanern in der Schweiz, der Förderung der albanischen Kultur und Tradition sowie der Unterstützung einer erfolgreichen Integration in die Schweizer Gesellschaft unter Bewahrung unserer nationalen Identität.' }] },
            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Unsere Aktivitäten' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Die Albanische Gemeinschaft in der Schweiz organisiert verschiedene kulturelle, bildungsbezogene und soziale Aktivitäten für die albanische Gemeinschaft. Wir veröffentlichen die Zeitung ALBFORUM, organisieren nationale Feste, Diaspora-Treffen und bieten verschiedene Dienstleistungen für unsere Mitglieder an, einschliesslich Krankenversicherungsberatung durch unsere Vereinbarung mit Helsana.' }] },
            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Kontakt' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Albanische Gemeinschaft in der Schweiz\nTel: 071 508 15 41\nEmail: info@bshz.ch\nWeb: www.bshz.ch' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    locale: 'de',
  })

  console.log('About page created.')

  // Create Feuilleton articles
  const fejton1 = await payload.create({
    collection: 'feuilleton',
    data: {
      title: 'GJERGJ KASTRIOTI i quajtur SKENDERBE: Hero kombëtar i Shqipërisë!',
      slug: 'gjergj-kastrioti-skenderbeu',
      author: 'Prof. Dr. Arif Mati',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'Gjergj Kastrioti, i njohur si Skënderbeu, mbetet figura më e rëndësishme e historisë shqiptare. Heroi kombëtar i Shqipërisë luftoi kundër Perandorisë Osmane për më shumë se 25 vite, duke mbrojtur jo vetëm Shqipërinë por edhe Europën nga pushtimi osman.' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Dokumentet historike, përfshirë veprën e historianit francez Jacques de Laverdin nga viti 1576 me titull "Historia e Gjergj Kastriotit", e identifikojnë qartë Skëndërbeun si shqiptar.' }] },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      publishedAt: '2022-12-17T00:00:00.000Z',
      _status: 'published',
    },
    locale: 'sq',
  })

  await payload.update({
    collection: 'feuilleton',
    id: fejton1.id,
    data: {
      title: 'GJERGJ KASTRIOTI genannt SKANDERBEG: Nationalheld Albaniens!',
      author: 'Prof. Dr. Arif Mati',
    },
    locale: 'de',
  })

  console.log('Feuilleton articles created.')

  // Create ALBFORUM issues
  for (let i = 1; i <= 5; i++) {
    await payload.create({
      collection: 'albforum-issues',
      data: {
        issueNumber: i,
        title: `ALBFORUM Nr. ${i}`,
        description: i === 1
          ? 'Numri i parë i gazetës ALBFORUM - Gazeta e Bashkësisë Shqiptare në Zvicër.'
          : `Numri ${i} i gazetës ALBFORUM.`,
        publishedAt: new Date(2020 + i, 0, 1).toISOString(),
      },
    })
  }

  console.log('ALBFORUM issues created.')

  console.log('\nSeeding complete! Content added:')
  console.log('- 3 categories (sq + de)')
  console.log('- 8 news articles (sq + de)')
  console.log('- 3 events (sq + de)')
  console.log('- 1 about page (sq + de)')
  console.log('- 1 feuilleton article (sq + de)')
  console.log('- 5 ALBFORUM issues')

  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed error:', err)
  process.exit(1)
})
