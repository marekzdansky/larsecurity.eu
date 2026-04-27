/* ── Translations ── */
const i18n = {
  cz: {
    nav_sluzby:'Služby', nav_kurzy:'Kurzy', nav_aktuality:'Aktuality', nav_partneri:'Partneři', nav_onas:'O nás', nav_kontakt:'Kontakt', nav_cta:'Nezávazná poptávka', nav_cta_arrow:'Nezávazná poptávka →',
    hero_tag:'BOZP & Požární ochrana',
    hero_h1:'odbornost,<br>jednoduchost,<br><span class="accent">rychlost.</span>',
    hero_sub:'Bezpečnost práce a požární ochrana pro Vaši firmu — od konzultace po úplnou dokumentaci.',
    hero_btn_contact:'Kontaktujte nás', hero_btn_services:'Naše služby',
    sluzby_label:'Co nabízíme', sluzby_title:'Komplexní služby<br><span class="accent">bezpečnosti práce</span>',
    sluzby_lead:'Pokrýváme celé spektrum BOZP, požární ochrany i bezpečnostních služeb — vše pod jednou střechou.',
    s1_name:'BOZP — Bezpečnost a ochrana zdraví', s1_desc:'Odborné konzultace a poradenství v oblasti bezpečnosti práce. Zajišťujeme prověrky pracovišť, šetření pracovních úrazů a kompletní dokumentaci.',
    s1_t1:'Konzultace', s1_t2:'Poradenství', s1_t3:'Prověrky pracovišť', s1_t4:'Šetření úrazů', s1_t5:'Dokumentace',
    s2_name:'Školení první pomoci', s2_desc:'Praktická i teoretická výuka první pomoci pro firmy i jednotlivce. Přizpůsobíme obsah konkrétním potřebám Vašeho pracoviště.',
    s2_t1:'Pro firmy', s2_t2:'Pro jednotlivce', s2_t3:'Praktické cvičení',
    s3_name:'Bezpečnostní činnost', s3_desc:'Detektivní činnost, ochrana majetku a osob. Přistupujeme ke každému případu s maximální diskrétností a profesionalitou.',
    s3_t1:'Detektivní činnost', s3_t2:'Ochrana majetku', s3_t3:'Ochrana osob', s3_t4:'Diskrétnost',
    s4_name:'E-learning / Školení online', s4_desc:'Online forma školení splňující zákonné požadavky. Ideální řešení pro firmy v době nouzového stavu nebo pro vzdálené pracovníky.',
    s4_t1:'Online forma', s4_t2:'Zákonné požadavky', s4_t3:'Nouzový stav',
    s5_name:'Požární ochrana', s5_desc:'Kompletní agenda PO — dokumentace, prověřování, školení zaměstnanců a tvorba únikových plánů dle platné legislativy.',
    s5_t1:'Dokumentace', s5_t2:'Prověřování', s5_t3:'Školení PO', s5_t4:'Únikové plány',
    kurzy_badge:'Nově nabízíme', kurzy_heading:'Odborné kurzy<br>pro vaše zaměstnance',
    kurzy_sub:'Certifikované kurzy BOZP, požární ochrany a první pomoci — online i prezenčně. Vyberte termín, který vám vyhovuje.', kurzy_cta:'Prohlédnout kurzy',
    akt_label:'Co je nového', akt_title:'Aktuality <span class="accent">a články</span>',
    akt_lead:'Tipy, novinky a změny v legislativě z oblasti BOZP a požární ochrany.',
    read_more:'Číst více',
    part_label:'Spolupracujeme s', part_title:'Naši <span class="accent">partneři</span>',
    p1_desc:'Odborníci v oblasti facility management a správy budov. Komplexní řešení pro provoz a údržbu nemovitostí.',
    p2_desc:'Marketingová agentura specializující se na digitální komunikaci a budování značky. Profesionální přístup k online prezentaci.', p_link:'Navštívit web',
    p3_role:'Odborně způsobilá osoba v BOZP',
    p3_desc:'Téměř třicet let praxe v prevenci rizik a požární ochraně. Od roku 1998 svazový inspektor BOZP v OS UNIOS, člen Rady vlády pro BOZP a předseda Stálého výboru pro legislativu. Autor řady odborných publikací.',
    onas_label:'Za firmou stojí', onas_title:'Odbornost<br>potvrzená <span class="accent">licencí</span>',
    onas_lead:'LarSecurity.cz provozuje Roman Bis, certifikovaný Safety Manager s mnohaletou praxí v oblasti BOZP, požární ochrany a bezpečnostních služeb.',
    onas_f1_title:'Individuální přístup', onas_f1_text:'Každý klient dostane řešení šité na míru jeho konkrétní situaci a odvětví.',
    onas_f2_title:'Rychlá reakce', onas_f2_text:'Jsme k dispozici pro urgentní konzultace a šetření bez zbytečného čekání.',
    onas_f3_title:'Jasná cena předem', onas_f3_text:'Transparentní ceník bez skrytých poplatků. Vždy víte, co dostanete a za kolik.',
    badge1_strong:'BOZP — zákon 361/2006 § 10', badge1_text:'Odborně způsobilá osoba v prevenci rizik',
    badge2_strong:'PO — zákon 133/1985 § 11', badge2_text:'Požární bezpečnost staveb',
    badge3_strong:'Licence SBS', badge3_text:'Soukromé bezpečnostní služby',
    badge4_strong:'IČ: 08882185', badge4_text:'Registrovaný podnikatelský subjekt',
    kont_label:'Napište nám', kont_title:'Nezávazná<br><span class="accent">poptávka</span>',
    kont_lead:'Máte zájem o naše služby nebo potřebujete poradit? Ozvěte se — odpovíme co nejdříve.',
    kont_email_label:'E-mail', kont_phone_label:'Telefon', kont_fb_label:'Facebook',
    form_name_label:'Jméno a příjmení', form_name_ph:'Jan Novák', form_email_label:'E-mail', form_email_ph:'vas@email.cz',
    form_subject_label:'Předmět', form_subject_ph:'Zájem o BOZP konzultaci...', form_message_label:'Zpráva',
    form_message_ph:'Popište prosím Vaši situaci nebo dotaz...', form_submit:'Odeslat poptávku',
    form_notice:'Odesláním formuláře souhlasíte se zpracováním osobních údajů pro účely odpovědi na Váš dotaz.',
    footer_privacy:'Zásady zpracování osobních údajů', toast_msg:'Zpráva odeslána — ozveme se co nejdříve!',
    page_title:'LarSecurity.cz — BOZP a PO školení', html_lang:'cs',
  },
  en: {
    nav_sluzby:'Services', nav_kurzy:'Courses', nav_aktuality:'News', nav_partneri:'Partners', nav_onas:'About Us', nav_kontakt:'Contact', nav_cta:'Free Inquiry', nav_cta_arrow:'Free Inquiry →',
    hero_tag:'OSH & Fire Protection',
    hero_h1:'expertise,<br>simplicity,<br><span class="accent">speed.</span>',
    hero_sub:'Workplace safety and fire protection for your company — from consultation to complete documentation.',
    hero_btn_contact:'Contact Us', hero_btn_services:'Our Services',
    sluzby_label:'What We Offer', sluzby_title:'Comprehensive<br><span class="accent">Workplace Safety Services</span>',
    sluzby_lead:'We cover the full spectrum of OSH, fire protection and security services — all under one roof.',
    s1_name:'OSH — Occupational Safety & Health', s1_desc:'Expert consultations and advisory in occupational safety. We provide workplace audits, accident investigations and complete documentation.',
    s1_t1:'Consultations', s1_t2:'Advisory', s1_t3:'Workplace Audits', s1_t4:'Accident Investigations', s1_t5:'Documentation',
    s2_name:'First Aid Training', s2_desc:'Practical and theoretical first aid instruction for companies and individuals. We tailor the content to the specific needs of your workplace.',
    s2_t1:'For Companies', s2_t2:'For Individuals', s2_t3:'Practical Exercises',
    s3_name:'Security Services', s3_desc:'Detective services, property and personal protection. We approach every case with maximum discretion and professionalism.',
    s3_t1:'Detective Services', s3_t2:'Property Protection', s3_t3:'Personal Protection', s3_t4:'Discretion',
    s4_name:'E-learning / Online Training', s4_desc:'Online training that meets legal requirements. Ideal for companies during emergencies or for remote workers.',
    s4_t1:'Online Format', s4_t2:'Legal Compliance', s4_t3:'Remote Workers',
    s5_name:'Fire Protection', s5_desc:'Complete fire protection agenda — documentation, inspections, employee training and evacuation plan creation in compliance with current legislation.',
    s5_t1:'Documentation', s5_t2:'Inspections', s5_t3:'FP Training', s5_t4:'Evacuation Plans',
    kurzy_badge:'New Offering', kurzy_heading:'Professional Courses<br>for Your Employees',
    kurzy_sub:'Certified OSH, fire protection and first aid courses — online and in person. Choose a date that suits you.', kurzy_cta:'Browse Courses',
    akt_label:"What's New", akt_title:'News <span class="accent">&amp; Articles</span>',
    akt_lead:'Tips, updates and legislative changes in OSH and fire protection.',
    read_more:'Read More',
    part_label:'We Collaborate With', part_title:'Our <span class="accent">Partners</span>',
    p1_desc:'Experts in facility management and building administration. Comprehensive solutions for property operation and maintenance.',
    p2_desc:'A marketing agency specialising in digital communication and brand building. Professional approach to online presence.', p_link:'Visit Website',
    p3_role:'Qualified Person in OHS & Fire Protection',
    p3_desc:'Nearly thirty years of experience in risk prevention and fire protection. Union OHS inspector at OS UNIOS since 1998, member of the Government Council for OHS and chair of its Standing Committee on Legislation. Author of numerous professional publications.',
    onas_label:'Behind the Company', onas_title:'Expertise<br>confirmed by <span class="accent">licence</span>',
    onas_lead:'LarSecurity.cz is operated by Roman Bis, a certified Safety Manager with many years of experience in OSH, fire protection and security services.',
    onas_f1_title:'Individual Approach', onas_f1_text:'Every client receives a solution tailored to their specific situation and industry.',
    onas_f2_title:'Fast Response', onas_f2_text:'We are available for urgent consultations and investigations without unnecessary delays.',
    onas_f3_title:'Clear Pricing Upfront', onas_f3_text:'Transparent pricing with no hidden fees. You always know what you get and how much it costs.',
    badge1_strong:'OSH — Act 361/2006 § 10', badge1_text:'Qualified person in risk prevention',
    badge2_strong:'FP — Act 133/1985 § 11', badge2_text:'Fire safety of buildings',
    badge3_strong:'SBS Licence', badge3_text:'Private security services',
    badge4_strong:'ID: 08882185', badge4_text:'Registered business entity',
    kont_label:'Get in Touch', kont_title:'Non-binding<br><span class="accent">Inquiry</span>',
    kont_lead:'Interested in our services or need advice? Reach out — we will respond as soon as possible.',
    kont_email_label:'E-mail', kont_phone_label:'Phone', kont_fb_label:'Facebook',
    form_name_label:'Full Name', form_name_ph:'John Smith', form_email_label:'E-mail', form_email_ph:'your@email.com',
    form_subject_label:'Subject', form_subject_ph:'Interested in OSH consultation...', form_message_label:'Message',
    form_message_ph:'Please describe your situation or question...', form_submit:'Send Inquiry',
    form_notice:'By submitting the form you agree to the processing of your personal data for the purpose of responding to your query.',
    footer_privacy:'Privacy Policy', toast_msg:'Message sent — we will get back to you shortly!',
    page_title:'LarSecurity.cz — OSH & Fire Protection', html_lang:'en',
  },
  de: {
    nav_sluzby:'Leistungen', nav_kurzy:'Kurse', nav_aktuality:'Aktuelles', nav_partneri:'Partner', nav_onas:'Über uns', nav_kontakt:'Kontakt', nav_cta:'Unverbindliche Anfrage', nav_cta_arrow:'Unverbindliche Anfrage →',
    hero_tag:'ASA & Brandschutz',
    hero_h1:'Kompetenz,<br>Einfachheit,<br><span class="accent">Schnelligkeit.</span>',
    hero_sub:'Arbeitssicherheit und Brandschutz für Ihr Unternehmen — von der Beratung bis zur vollständigen Dokumentation.',
    hero_btn_contact:'Kontakt aufnehmen', hero_btn_services:'Unsere Leistungen',
    sluzby_label:'Unser Angebot', sluzby_title:'Umfassende<br><span class="accent">Arbeitssicherheitsleistungen</span>',
    sluzby_lead:'Wir decken das gesamte Spektrum von ASA, Brandschutz und Sicherheitsdienstleistungen ab — alles aus einer Hand.',
    s1_name:'ASA — Arbeitssicherheit und Gesundheitsschutz', s1_desc:'Fachkundige Beratung im Bereich Arbeitssicherheit. Wir führen Arbeitsplatzprüfungen, Unfalluntersuchungen und vollständige Dokumentationen durch.',
    s1_t1:'Beratung', s1_t2:'Consulting', s1_t3:'Arbeitsplatzprüfungen', s1_t4:'Unfalluntersuchungen', s1_t5:'Dokumentation',
    s2_name:'Erste-Hilfe-Schulung', s2_desc:'Praktische und theoretische Erste-Hilfe-Ausbildung für Unternehmen und Einzelpersonen. Wir passen die Inhalte an Ihren Arbeitsplatz an.',
    s2_t1:'Für Unternehmen', s2_t2:'Für Einzelpersonen', s2_t3:'Praktische Übungen',
    s3_name:'Sicherheitsdienst', s3_desc:'Detektivdienste, Objekt- und Personenschutz. Wir gehen jeden Fall mit größter Diskretion und Professionalität an.',
    s3_t1:'Detektivdienste', s3_t2:'Objektschutz', s3_t3:'Personenschutz', s3_t4:'Diskretion',
    s4_name:'E-Learning / Online-Schulung', s4_desc:'Online-Schulungen, die den gesetzlichen Anforderungen entsprechen. Ideal für Unternehmen in Ausnahmesituationen oder für Remote-Mitarbeiter.',
    s4_t1:'Online-Format', s4_t2:'Gesetzliche Anforderungen', s4_t3:'Remote-Mitarbeiter',
    s5_name:'Brandschutz', s5_desc:'Vollständige Brandschutzagenda — Dokumentation, Prüfungen, Mitarbeiterschulungen und Evakuierungspläne gemäß geltender Gesetzgebung.',
    s5_t1:'Dokumentation', s5_t2:'Prüfungen', s5_t3:'Brandschutzschulung', s5_t4:'Evakuierungspläne',
    kurzy_badge:'Neu im Angebot', kurzy_heading:'Fachkurse<br>für Ihre Mitarbeiter',
    kurzy_sub:'Zertifizierte ASA-, Brandschutz- und Erste-Hilfe-Kurse — online und in Präsenz. Wählen Sie Ihren Wunschtermin.', kurzy_cta:'Kurse ansehen',
    akt_label:'Was gibt es Neues', akt_title:'Aktuelles <span class="accent">und Artikel</span>',
    akt_lead:'Tipps, Neuigkeiten und gesetzliche Änderungen im Bereich ASA und Brandschutz.',
    read_more:'Mehr lesen',
    part_label:'Wir arbeiten mit', part_title:'Unsere <span class="accent">Partner</span>',
    p1_desc:'Experten im Bereich Facility Management und Gebäudeverwaltung. Umfassende Lösungen für Betrieb und Instandhaltung von Immobilien.',
    p2_desc:'Eine Marketingagentur spezialisiert auf digitale Kommunikation und Markenaufbau. Professioneller Ansatz für Online-Präsenz.', p_link:'Website besuchen',
    p3_role:'Fachkundige Person für Arbeitssicherheit und Brandschutz',
    p3_desc:'Fast dreißig Jahre Erfahrung in der Risikoprävention und im Brandschutz. Seit 1998 Gewerkschaftsinspektor für Arbeitssicherheit bei OS UNIOS, Mitglied des Regierungsrats für Arbeitssicherheit und Vorsitzender des Ständigen Ausschusses für Gesetzgebung. Autor zahlreicher Fachpublikationen.',
    onas_label:'Hinter dem Unternehmen', onas_title:'Kompetenz<br>bestätigt durch <span class="accent">Lizenz</span>',
    onas_lead:'LarSecurity.cz wird von Roman Bis betrieben, einem zertifizierten Safety Manager mit langjähriger Erfahrung in ASA, Brandschutz und Sicherheitsdiensten.',
    onas_f1_title:'Individueller Ansatz', onas_f1_text:'Jeder Kunde erhält eine Lösung, die auf seine konkrete Situation und Branche zugeschnitten ist.',
    onas_f2_title:'Schnelle Reaktion', onas_f2_text:'Wir stehen für dringende Beratungen und Untersuchungen ohne unnötige Wartezeiten zur Verfügung.',
    onas_f3_title:'Klare Preise im Voraus', onas_f3_text:'Transparente Preisgestaltung ohne versteckte Gebühren. Sie wissen immer, was Sie bekommen und was es kostet.',
    badge1_strong:'ASA — Gesetz 361/2006 § 10', badge1_text:'Fachkundige Person in der Risikoprävention',
    badge2_strong:'BS — Gesetz 133/1985 § 11', badge2_text:'Brandschutz von Gebäuden',
    badge3_strong:'SBS-Lizenz', badge3_text:'Private Sicherheitsdienste',
    badge4_strong:'UIN: 08882185', badge4_text:'Eingetragenes Unternehmen',
    kont_label:'Schreiben Sie uns', kont_title:'Unverbindliche<br><span class="accent">Anfrage</span>',
    kont_lead:'Interesse an unseren Leistungen oder brauchen Sie Rat? Melden Sie sich — wir antworten so schnell wie möglich.',
    kont_email_label:'E-Mail', kont_phone_label:'Telefon', kont_fb_label:'Facebook',
    form_name_label:'Vor- und Nachname', form_name_ph:'Max Mustermann', form_email_label:'E-Mail', form_email_ph:'ihre@email.de',
    form_subject_label:'Betreff', form_subject_ph:'Interesse an ASA-Beratung...', form_message_label:'Nachricht',
    form_message_ph:'Bitte beschreiben Sie Ihre Situation oder Frage...', form_submit:'Anfrage senden',
    form_notice:'Mit dem Absenden des Formulars stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten zur Beantwortung Ihrer Anfrage zu.',
    footer_privacy:'Datenschutzrichtlinie', toast_msg:'Nachricht gesendet — wir melden uns so schnell wie möglich!',
    page_title:'LarSecurity.cz — ASA und Brandschutz', html_lang:'de',
  },
  pl: {
    nav_sluzby:'Usługi', nav_kurzy:'Kursy', nav_aktuality:'Aktualności', nav_partneri:'Partnerzy', nav_onas:'O nas', nav_kontakt:'Kontakt', nav_cta:'Zapytanie ofertowe', nav_cta_arrow:'Zapytanie ofertowe →',
    hero_tag:'BHP & Ochrona przeciwpożarowa',
    hero_h1:'profesjonalizm,<br>prostota,<br><span class="accent">szybkość.</span>',
    hero_sub:'Bezpieczeństwo pracy i ochrona przeciwpożarowa dla Twojej firmy — od konsultacji po pełną dokumentację.',
    hero_btn_contact:'Skontaktuj się', hero_btn_services:'Nasze usługi',
    sluzby_label:'Co oferujemy', sluzby_title:'Kompleksowe usługi<br><span class="accent">bezpieczeństwa pracy</span>',
    sluzby_lead:'Obejmujemy pełne spektrum BHP, ochrony przeciwpożarowej i usług ochroniarskich — wszystko pod jednym dachem.',
    s1_name:'BHP — Bezpieczeństwo i higiena pracy', s1_desc:'Profesjonalne konsultacje i doradztwo w zakresie bezpieczeństwa pracy. Przeprowadzamy kontrole stanowisk, dochodzenia powypadkowe i kompleksową dokumentację.',
    s1_t1:'Konsultacje', s1_t2:'Doradztwo', s1_t3:'Kontrole stanowisk', s1_t4:'Dochodzenia powypadkowe', s1_t5:'Dokumentacja',
    s2_name:'Szkolenie z pierwszej pomocy', s2_desc:'Praktyczna i teoretyczna nauka pierwszej pomocy dla firm i osób prywatnych. Dostosowujemy treści do konkretnych potrzeb Twojego miejsca pracy.',
    s2_t1:'Dla firm', s2_t2:'Dla osób prywatnych', s2_t3:'Ćwiczenia praktyczne',
    s3_name:'Działalność ochroniarska', s3_desc:'Działalność detektywistyczna, ochrona mienia i osób. Do każdej sprawy podchodzimy z maksymalną dyskrecją i profesjonalizmem.',
    s3_t1:'Działalność detektywistyczna', s3_t2:'Ochrona mienia', s3_t3:'Ochrona osób', s3_t4:'Dyskrecja',
    s4_name:'E-learning / Szkolenie online', s4_desc:'Szkolenia online spełniające wymogi prawne. Idealne rozwiązanie dla firm w sytuacjach kryzysowych lub dla pracowników zdalnych.',
    s4_t1:'Format online', s4_t2:'Wymogi prawne', s4_t3:'Pracownicy zdalni',
    s5_name:'Ochrona przeciwpożarowa', s5_desc:'Kompleksowa obsługa ppoż. — dokumentacja, kontrole, szkolenia pracowników i tworzenie planów ewakuacyjnych zgodnie z obowiązującymi przepisami.',
    s5_t1:'Dokumentacja', s5_t2:'Kontrole', s5_t3:'Szkolenia ppoż.', s5_t4:'Plany ewakuacyjne',
    kurzy_badge:'Nowość w ofercie', kurzy_heading:'Profesjonalne kursy<br>dla Twoich pracowników',
    kurzy_sub:'Certyfikowane kursy BHP, ochrony przeciwpożarowej i pierwszej pomocy — online i stacjonarnie. Wybierz termin, który Ci odpowiada.', kurzy_cta:'Przeglądaj kursy',
    akt_label:'Co nowego', akt_title:'Aktualności <span class="accent">i artykuły</span>',
    akt_lead:'Porady, nowości i zmiany legislacyjne w zakresie BHP i ochrony przeciwpożarowej.',
    read_more:'Czytaj więcej',
    part_label:'Współpracujemy z', part_title:'Nasi <span class="accent">partnerzy</span>',
    p1_desc:'Eksperci w dziedzinie facility management i zarządzania budynkami. Kompleksowe rozwiązania dla eksploatacji i utrzymania nieruchomości.',
    p2_desc:'Agencja marketingowa specjalizująca się w komunikacji cyfrowej i budowaniu marki. Profesjonalne podejście do obecności online.', p_link:'Odwiedź stronę',
    p3_role:'Osoba wykwalifikowana w BHP i ochronie ppoż.',
    p3_desc:'Niemal trzydzieści lat doświadczenia w zapobieganiu zagrożeniom i ochronie ppoż. Od 1998 r. związkowy inspektor BHP w OS UNIOS, członek Rady rządu ds. BHP i przewodniczący Stałego Komitetu ds. Legislacji. Autor licznych publikacji specjalistycznych.',
    onas_label:'Za firmą stoi', onas_title:'Kompetencje<br>potwierdzone <span class="accent">licencją</span>',
    onas_lead:'LarSecurity.cz prowadzi Roman Bis, certyfikowany Safety Manager z wieloletnim doświadczeniem w BHP, ochronie przeciwpożarowej i usługach ochroniarskich.',
    onas_f1_title:'Indywidualne podejście', onas_f1_text:'Każdy klient otrzymuje rozwiązanie skrojone na miarę jego konkretnej sytuacji i branży.',
    onas_f2_title:'Szybka reakcja', onas_f2_text:'Jesteśmy dostępni dla pilnych konsultacji i dochodzeń bez zbędnego czekania.',
    onas_f3_title:'Jasna cena z góry', onas_f3_text:'Przejrzysty cennik bez ukrytych opłat. Zawsze wiesz, co otrzymujesz i za ile.',
    badge1_strong:'BHP — ustawa 361/2006 § 10', badge1_text:'Osoba wykwalifikowana w zapobieganiu zagrożeniom',
    badge2_strong:'PPOŻ — ustawa 133/1985 § 11', badge2_text:'Bezpieczeństwo pożarowe budynków',
    badge3_strong:'Licencja SBS', badge3_text:'Prywatne usługi ochroniarskie',
    badge4_strong:'NIP: 08882185', badge4_text:'Zarejestrowany podmiot gospodarczy',
    kont_label:'Napisz do nas', kont_title:'Niewiążące<br><span class="accent">zapytanie</span>',
    kont_lead:'Interesujesz się naszymi usługami lub potrzebujesz porady? Odezwij się — odpowiemy jak najszybciej.',
    kont_email_label:'E-mail', kont_phone_label:'Telefon', kont_fb_label:'Facebook',
    form_name_label:'Imię i nazwisko', form_name_ph:'Jan Kowalski', form_email_label:'E-mail', form_email_ph:'twoj@email.pl',
    form_subject_label:'Temat', form_subject_ph:'Zainteresowanie konsultacją BHP...', form_message_label:'Wiadomość',
    form_message_ph:'Opisz proszę swoją sytuację lub pytanie...', form_submit:'Wyślij zapytanie',
    form_notice:'Wysyłając formularz, zgadzasz się na przetwarzanie danych osobowych w celu udzielenia odpowiedzi na Twoje zapytanie.',
    footer_privacy:'Polityka prywatności', toast_msg:'Wiadomość wysłana — odezwiemy się jak najszybciej!',
    page_title:'LarSecurity.cz — Szkolenia BHP i ppoż.', html_lang:'pl',
  },
  ua: {
    nav_sluzby:'Послуги', nav_kurzy:'Курси', nav_aktuality:'Новини', nav_partneri:'Партнери', nav_onas:'Про нас', nav_kontakt:'Контакт', nav_cta:'Безкоштовний запит', nav_cta_arrow:'Безкоштовний запит →',
    hero_tag:'ОХПТ та Пожежна охорона',
    hero_h1:'компетентність,<br>простота,<br><span class="accent">швидкість.</span>',
    hero_sub:'Охорона праці та пожежна безпека для Вашої компанії — від консультації до повної документації.',
    hero_btn_contact:'Зв\'яжіться з нами', hero_btn_services:'Наші послуги',
    sluzby_label:'Що ми пропонуємо', sluzby_title:'Комплексні послуги<br><span class="accent">охорони праці</span>',
    sluzby_lead:'Ми охоплюємо весь спектр охорони праці, пожежної безпеки та охоронних послуг — все під одним дахом.',
    s1_name:'ОХПТ — Охорона здоров\'я та праці', s1_desc:'Фахові консультації та порадництво у сфері охорони праці. Проводимо перевірки робочих місць, розслідування нещасних випадків і повну документацію.',
    s1_t1:'Консультації', s1_t2:'Порадництво', s1_t3:'Перевірки робочих місць', s1_t4:'Розслідування нещасних випадків', s1_t5:'Документація',
    s2_name:'Навчання першої допомоги', s2_desc:'Практичне та теоретичне навчання першої допомоги для компаній і фізичних осіб. Адаптуємо зміст до конкретних потреб Вашого робочого місця.',
    s2_t1:'Для компаній', s2_t2:'Для фізичних осіб', s2_t3:'Практичні вправи',
    s3_name:'Охоронна діяльність', s3_desc:'Детективна діяльність, охорона майна та осіб. До кожного випадку підходимо з максимальною дискретністю та професіоналізмом.',
    s3_t1:'Детективна діяльність', s3_t2:'Охорона майна', s3_t3:'Охорона осіб', s3_t4:'Дискретність',
    s4_name:'E-learning / Онлайн-навчання', s4_desc:'Онлайн-навчання, що відповідає законодавчим вимогам. Ідеальне рішення для компаній під час надзвичайних ситуацій або для дистанційних працівників.',
    s4_t1:'Онлайн-формат', s4_t2:'Законодавчі вимоги', s4_t3:'Дистанційна робота',
    s5_name:'Пожежна охорона', s5_desc:'Повна agenda ПО — документація, перевірки, навчання співробітників і розробка планів евакуації відповідно до чинного законодавства.',
    s5_t1:'Документація', s5_t2:'Перевірки', s5_t3:'Навчання ПО', s5_t4:'Плани евакуації',
    kurzy_badge:'Нова пропозиція', kurzy_heading:'Фахові курси<br>для Ваших співробітників',
    kurzy_sub:'Сертифіковані курси охорони праці, пожежної безпеки та першої допомоги — онлайн і очно. Оберіть зручний для Вас термін.', kurzy_cta:'Переглянути курси',
    akt_label:'Що нового', akt_title:'Новини <span class="accent">та статті</span>',
    akt_lead:'Поради, новини та зміни в законодавстві у сфері охорони праці та пожежної безпеки.',
    read_more:'Читати далі',
    part_label:'Співпрацюємо з', part_title:'Наші <span class="accent">партнери</span>',
    p1_desc:'Експерти у сфері facility management та управління будівлями. Комплексні рішення для експлуатації та обслуговування нерухомості.',
    p2_desc:'Маркетингове агентство, що спеціалізується на цифровій комунікації та побудові бренду. Професійний підхід до онлайн-присутності.', p_link:'Відвідати сайт',
    p3_role:'Кваліфікована особа у сфері ОХПТ та пожежної охорони',
    p3_desc:'Майже тридцять років досвіду у сфері запобігання ризикам та пожежної охорони. З 1998 року — профспілковий інспектор охорони праці в OS UNIOS, член Ради уряду з ОХПТ та голова Постійного комітету з законодавства. Автор численних фахових публікацій.',
    onas_label:'За компанією стоїть', onas_title:'Компетентність,<br>підтверджена <span class="accent">ліцензією</span>',
    onas_lead:'LarSecurity.cz керує Роман Біс, сертифікований Safety Manager з багаторічним досвідом у сфері охорони праці, пожежної безпеки та охоронних послуг.',
    onas_f1_title:'Індивідуальний підхід', onas_f1_text:'Кожен клієнт отримує рішення, пристосоване до конкретної ситуації та галузі.',
    onas_f2_title:'Швидка реакція', onas_f2_text:'Ми готові до термінових консультацій та розслідувань без зайвого очікування.',
    onas_f3_title:'Прозора ціна заздалегідь', onas_f3_text:'Прозорий прайс без прихованих платежів. Ви завжди знаєте, що отримаєте і скільки це коштує.',
    badge1_strong:'ОХПТ — закон 361/2006 § 10', badge1_text:'Кваліфікована особа у сфері запобігання ризикам',
    badge2_strong:'ПО — закон 133/1985 § 11', badge2_text:'Пожежна безпека будівель',
    badge3_strong:'Ліцензія SBS', badge3_text:'Приватні охоронні послуги',
    badge4_strong:'ІД: 08882185', badge4_text:'Зареєстрований суб\'єкт підприємництва',
    kont_label:'Напишіть нам', kont_title:'Безкоштовний<br><span class="accent">запит</span>',
    kont_lead:'Цікавитесь нашими послугами або потребуєте поради? Зв\'яжіться з нами — відповімо якнайшвидше.',
    kont_email_label:'E-mail', kont_phone_label:'Телефон', kont_fb_label:'Facebook',
    form_name_label:'Ім\'я та прізвище', form_name_ph:'Іван Іваненко', form_email_label:'E-mail', form_email_ph:'vasha@poshta.ua',
    form_subject_label:'Тема', form_subject_ph:'Цікавить консультація з охорони праці...', form_message_label:'Повідомлення',
    form_message_ph:'Будь ласка, опишіть Вашу ситуацію або питання...', form_submit:'Надіслати запит',
    form_notice:'Надсилаючи форму, Ви погоджуєтесь на обробку персональних даних з метою відповіді на Ваш запит.',
    footer_privacy:'Політика конфіденційності', toast_msg:'Повідомлення надіслано — ми зв\'яжемося з Вами якнайшвидше!',
    page_title:'LarSecurity.cz — Охорона праці та пожежна безпека', html_lang:'uk',
  }
};

let aktualityIds = [];

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  document.documentElement.lang = t.html_lang;
  document.title = t.page_title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (t[el.dataset.i18nHtml] !== undefined) el.innerHTML = t[el.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    if (t[el.dataset.i18nPh] !== undefined) el.placeholder = t[el.dataset.i18nPh];
  });
  const flagSrc = { cz: 'cz', pl: 'pl', de: 'de', en: 'gb', ua: 'ua' };
  const fc = flagSrc[lang] || 'cz';
  document.getElementById('langLabel').innerHTML = `<img src="https://flagcdn.com/20x15/${fc}.png" alt="${lang.toUpperCase()}" class="flag-img">`;
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
  renderAktuality(lang);
}

/* ── Lang switcher ── */
const langSwitcher = document.getElementById('langSwitcher');
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', e => {
  e.stopPropagation();
  langSwitcher.classList.toggle('open');
});
document.addEventListener('click', () => langSwitcher.classList.remove('open'));
document.querySelectorAll('.lang-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    langSwitcher.classList.remove('open');
  });
});

const savedLang = localStorage.getItem('lang') || 'cz';
applyLang(savedLang);

/* ── Dark mode ── */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (saved === 'dark' || (!saved && prefersDark)) root.setAttribute('data-theme', 'dark');

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

/* ── Hamburger ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
  });
});

/* ── Sticky nav ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ── Hero reveals immediately ── */
document.querySelectorAll('#hero .reveal').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 100);
});

/* ── Contact form ── */
const toast = document.getElementById('toast');
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const required = form.querySelectorAll('[required]');
  let valid = true;
  required.forEach(f => {
    if (!f.value.trim()) { f.style.borderColor = '#BE1622'; valid = false; }
    else f.style.borderColor = '';
  });
  if (!valid) return;
  toast.classList.add('show');
  form.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});

document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(f => {
  f.addEventListener('input', () => { f.style.borderColor = ''; });
});

/* ── Aktuality: dynamic loading ── */
const _arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
const _delays = ['reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-4','reveal-delay-5'];

function renderAktuality(lang) {
  if (!aktualityIds.length) return;
  const grid = document.getElementById('aktualityGrid');
  if (!grid) return;
  const t = i18n[lang] || i18n['cz'];
  const readMore = t.read_more || 'Číst více';
  grid.innerHTML = aktualityIds.map((id, i) => {
    const data = (window.aktualityData || {})[id];
    if (!data) return '';
    const art = data[lang] || data['cz'];
    return '<div class="clanek-card reveal ' + (_delays[i] || '') + '">' +
      '<div class="clanek-header">' +
        '<span class="clanek-kategorie">' + art.kat + '</span>' +
        '<span class="clanek-datum">' + art.date + '</span>' +
      '</div>' +
      '<div class="clanek-body">' +
        '<div class="clanek-title">' + art.title + '</div>' +
        '<p class="clanek-perex">' + art.perex + '</p>' +
        '<a href="clanek.html?id=' + id + '" class="clanek-link">' +
          '<span>' + readMore + '</span>' + _arrowSvg +
        '</a>' +
      '</div>' +
    '</div>';
  }).join('');
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function _loadScript(src, onload, onerror) {
  const s = document.createElement('script');
  s.src = src; s.onload = onload; s.onerror = onerror || function(){};
  document.head.appendChild(s);
}

_loadScript('aktuality/index.js', function() {
  const ids = window.aktualityIndex || [];
  if (!ids.length) { document.getElementById('aktualityGrid').innerHTML = ''; return; }
  let done = 0;
  ids.forEach(function(id) {
    _loadScript('aktuality/aktualita-' + id + '.js',
      function() { done++; if (done === ids.length) { aktualityIds = ids; renderAktuality(savedLang); } },
      function() { done++; if (done === ids.length) { aktualityIds = ids.filter(function(i){ return !!(window.aktualityData||{})[i]; }); renderAktuality(savedLang); } }
    );
  });
}, function() {
  document.getElementById('aktualityGrid').innerHTML = '';
});
