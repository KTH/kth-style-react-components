const MESSAGES = {
    title: 'Hantera e-post',
    description: {
        part1: 'Studerar du på KTH får du e-post från KTH, Ladok och Antagningen som gäller din utbildning. Läs mer om',
        link: {
            url: 'https://www.kth.se/student/studok/studiedokumentation-och-studenttjansterna-1.373670',
            displayText: 'Studiedokumentation och studenttjänsterna'
        },
    },
    primaryKTHaddress: 'E-post från KTH använder din KTH e-postadress:',
    ladokAntagningAddress: 'E-post från Ladok och Antagningen använder e-postadresser angivna i de systemen och behöver ändras där.',
    stepGuide: {
        title: 'Tre steg för att få all e-post för din KTH utbildning till en e-postadress',
        subtitle: 'Steg',
        checkBox: 'Jag är medveten om att vidarebefordran endast gäller e-post till min KTH e-postadress och har tagit del av informationen i steg 1 och 2 ovan',
        ladok: {
            heading: 'Ändra din e-postadress i Ladok (e-post om registrering, resultat, ...)',
            description: 'Ändra till din KTH e-postadress eller en extern e-postadress om du använder det.',
            link: {
                url: 'https://www.student.ladok.se/student/#/installningar',
                displayText: 'Kontaktuppgifter i Ladok'
            }
        },
        antagning: {
            heading: 'Ändra din e-postadress på Antagningen (e-post om kursval)',
            description: 'Ändra till din KTH e-postadress eller en extern e-postadress om du använder det.',
            link: {
                url: 'https://www.antagning.se',
                displayText: 'Ändra e-post på Antagning.se'
            }
        },
        kth: {
            heading: 'Sätt eller ta bort vidarebefordran av e-post till din KTH e-postadress',
            description: 'Om du vill använda en extern e-posttjänst i stället för KTH:s kan du sätta en vidarebefordran av den e-post som går till din KTH e-postadress.',
        }
    },
    forwardEmail: {
        title: 'Vidarebefordran av din KTH e-post',
        description: 'Du kan välja att skicka vidare den e-post som går till din KTH e-postadress till en extern e-postadress. Läs mer om',
        link: {
            url: 'http://www.kth.se/mailforward',
            displayText: 'regler för vidarebefordran av e-post.',
        },
        forwardSetTo: 'Vidarebefordran av din KTH e-post är satt till:',
        noForwardSet: 'Ingen vidarebefordran är satt.',
        button: 'Vidarebefordra KTH e-post',
        checkEmail: 'Du behöver kontrollera e-postadresser i steg 1 och 2 samt klarmarkera det (se röd markering nedan).'
    },
    emailForm: {
        label: 'Ange e-postadress för vidarebefordran:',
        submit: 'Sätt vidarebefordran',
        remove: 'Ta bort vidarebefordran',
        invalidFormat: 'Ej giltigt format'
    },
    modal: {
        title: 'Ta bort vidarebefordran',
        body: {
            info: 'När du tar bort vidarebefordran så innebär det att e-post som går till din KTH e-postadress inte längre skickas vidare till en extern e-postadress',
            verify: 'Vill du fortsätta att ta bort vidarebefordran?'
        },
        cancel: 'Nej, gå tillbaka',
        confirm: 'Ja, ta bort',
    },
    setEmailForward: {
        successMsg: 'Vidarebefordran av din KTH e-post är satt',
        errorMsg: 'E-postadressen nedan är inte giltig.',
    },
    removeEmailForward: {
        successMsg: 'Vidarebefordran av din KTH e-post är borttagen. Det kan ta några minuter innan du kan återgå till KTH:s e-posttjänst.'
    },
    goBack: 'Tillbaka',
    generalError: 'Något gick fel och uppdateringen misslyckades',
    switchLanguage: 'This page in English',
    KTH_title: 'KTH',
    emailforward: 'Vidarebefordran av e-post',
    mega_menu: {
        title: 'Stäng megameny',
        aria_label: 'Stäng'
    },
    header: {
        student: {
            title: 'Student',
            url: '/student'
        },
        alumn: {
            title: 'Alumn',
            url: '/alumni'
        },
        employee: {
            title: 'Anställd',
            url: 'https://intra.kth.se/'
        },
        international_website: {
            title: 'International website',
            url: 'https://www.kth.se/en'
        },
        mobileMenu: {
            home: {
                title: 'Hem',
                url: 'https://www.kth.se/'
            },
            education: {
                title: 'Utbildning',
                url: 'https://www.kth.se/utbildning'
            },
            research: {
                title: 'Forskning',
                url: 'https://www.kth.se/forskning'
            },
            cooperation: {
                title: 'Samverkan',
                url: 'https://www.kth.se/samverkan'
            },
            about_kth: {
                title: 'Om KTH',
                url: 'https://www.kth.se/om'
            },
            library: {
                title: 'Bibliotek',
                url: 'https://www.kth.se/biblioteket'
            },
            secondaryMenu: {
                student: {
                    title: 'Student',
                    url: 'https://www.kth.se/student'
                },
                alumn: {
                    title: 'Alumn',
                    url: 'https://www.kth.se/alumni'
                }
            }
        },
        home: {
            title: 'Hem'
        },
        undergraduate: {
            title: 'Grundnivå',
            architect: {
                title: 'Arkitekt',
                url: '/utbildning/arkitekt'
            },
            civil_engineer: {
                title: 'Civilingenjör',
                url: '/utbildning/civilingenjor'
            },
            bachelor: {
                title: 'Högskoleingenjör',
                url: '/utbildning/hogskoleingenjor'
            },
            candidate_education: {
                title: 'Kandidatutbildning',
                url: '/utbildning/kandidatutbildning'
            },
            teacher_education: {
                title: 'Lärarutbildning',
                url: '/utbildning/lararutbildningar'
            },
            higher_education: {
                title: 'Högskoleutbildning',
                url: '/utbildning/hogskoleutbildning'
            },
            technical_basic_training: {
                title: 'Teknisk basutbildning',
                url: '/utbildning/teknisk-basutbildning'
            },
            supplementary_education: {
                title: 'Kompletterande utbildning',
                url: '/utbildning/kompletterande-utbildning'
            }
        },
        advanced_level: {
            title: 'Avancerad nivå',
            master_and_magister_education: {
                title: 'Master- och magisterutbildning',
                url: '/utbildning/master-magisterutbildning'
            }
        },
        research_level: {
            title: 'Forskarnivå',
            doctorate: {
                title: 'Forskarutbildning',
                url: '/utbildning/forskarutbildning'
            }
        },
        other_courses: {
            title: 'Övriga utbildningar',
            standalone_courses: {
                title: 'Fristående kurser',
                url: '/utbildning/kurser'
            },
            massive_open_online_courses: {
                title: 'Massive Open Online Courses',
                url: '/utbildning/kurser/mooc'
            },
            assignment_education_for_companies_and_individuals: {
                title: 'Uppdragsutbildning för företag och individ',
                url: '/utbildning/foretagsutbildning'
            }
        },
        contact_kth: {
            title: 'Kontakta KTH',
            questions_about_studies: {
                title: 'Frågor om studier',
                url: '/utbildning/kontakt'
            },
            kth_five_campus: {
                title: 'KTH:s 5 campus',
                url: '/utbildning/kontakt/campus'
            },
            meet_kth: {
                title: 'Träffa KTH',
                url: '/utbildning/traffakth'
            },
            collaboration_with_primary_and_secondary_schools: {
                title: 'Samverkan med grund- och gymnasieskolor',
                url: '/utbildning/grund-gymnasieskola'
            }
        },
        training_catalog: {
            title: 'Utbildningskatalog',
            order_catalog: {
                title: 'Beställ katalog 2020/2021',
                url: '/utbildning/bestall'
            }
        },
        research: {
            title: 'Forskning',
            url: '/forskning'
        },
        platforms_for_research: {
            title: 'Plattformar för forskning',
            about_platforms: {
                title: 'Om plattformarna',
                url: '/forskning/forskningsplattformar'
            },
            digitization: {
                title: 'Digitalisering',
                url: '/forskning/forskningsplattformar/digitalisering'
            },
            energy: {
                title: 'Energi',
                url: '/forskning/forskningsplattformar/energi'
            },
            industrial_transformation: {
                title: 'Industriell transformation',
                url: '/forskning/forskningsplattformar/industriell-transformation'
            },
            Life_Science_Technology: {
                title: 'Life Science Technology',
                url: '/forskning/forskningsplattformar/lst'
            },
            material: {
                title: 'Material',
                url: '/forskning/forskningsplattformar/material'
            },
            transport: {
                title: 'Transport',
                url: '/forskning/forskningsplattformar/transport'
            }
        },
        Schools_research_areas: {
            title: 'Skolornas forskningsområden',
            about_the_schools: {
                title: 'Om skolorna',
                url: '/forskning/omraden/skolornas-forskningsomraden-1.659410'
            },
            Architecture_and_the_built_environment: {
                title: 'Arkitektur och samhällsbyggnad',
                url: '/forskning/omraden/arkitektur-och-samhallsbyggnad-1.659429'
            },
            electrical_engineering_and_computer_science: {
                title: 'Elektroteknik och datavetenskap',
                url: '/forskning/omraden/elektroteknik-och-datavetenskap-1.787823'
            },
            Industrial_engineering_and_management: {
                title: 'Industriell teknik och management',
                url: '/forskning/omraden/industriell-teknik-och-management-1.659466'
            },
            engineering_sciences_in_chemistry_biotechnology_and_health: {
                title: 'Kemi, bioteknologi och hälsa',
                url: '/forskning/omraden/kemi-bioteknologi-och-halsa-1.787800'
            },
            engineering_science: {
                title: 'Teknikvetenskap',
                url: 'https://www.kth.se/forskning/omraden/teknikvetenskap-1.659551'
            }
        },
        strategic_research_and_competence_centres: {
            title: 'Forskningssatsningar',
            european_institute_of_innovation_and_technology: {
                title: 'EIT - European Institute of Innovation and Technology',
                url: '/forskning/sarskilda-forskningssatsningar/eit-1.63977'
            },
            competence_centres: {
                title: 'Kompetenscentra',
                url: '/forskning/sarskilda-forskningssatsningar/kompetenscentra-1.11756'
            },
            kth_strategic_research_areas: {
                title: 'KTH:s strategiska forskningsområden (SFO)',
                url: '/forskning/sarskilda-forskningssatsningar/strategiska-forskningsomraden'
            },
            environment_and_sustainable_development: {
                title: 'Miljö och hållbar utveckling',
                url: '/forskning/forskning-miljo-hallbar-utveckling'
            },
            assessment_of_kth_research: {
                title: 'Utvärdering av KTH:s forskning (RAE 2020)',
                url: '/forskning/sarskilda-forskningssatsningar/utvardering-av-kth-s-forskning-rae-2020-1.945425'
            }
        },
        infrastructures_and_resources: {
            title: 'Infrastruktur och resurser',
            doctoral_studies: {
                title: 'Forskarutbildning',
                url: '/utbildning/forskarutbildning'
            },
            research_publications: {
                title: 'Forskningspublikationer',
                url: '/forskning/publikationer'
            },
            find_researchers: {
                title: 'Hitta forskare',
                url: 'https://www.kth.se/directory'
            },
            innovation_and_commercialization: {
                title: 'Innovation och kommersialisering (KTH Innovation)',
                url: '/forskning/forska/kth-innovation-kommersialisering-av-ny-teknik-1.4573'
            },
            ranking: {
                title: 'Ranking',
                url: '/om/fakta/ranking/ranking-1.530636'
            },
            cooperation: {
                title: 'Samverkan',
                url: '/samverkan'
            },
            funding_support_external: {
                title: 'Stöd för extern finansiering',
                url: '/forskning/research-office'
            },
            research_infrastructure: {
                title: 'Tillgängliga miljöer för forskning',
                url: '/forskning/tillgangliga-forskni'
            }
        },
        cooperation: {
            title: 'Samverkan',
            url: '/samverkan',
            collaborate_with_kth: {
                title: 'Samarbeta med KTH',
                collaborate_with_us: {
                    title: 'Samarbeta med oss',
                    url: '/samverkan/samarbeta-med-oss'
                },
                collaboration_in_education: {
                    title: 'Samverkan i utbildningen',
                    url: '/samverkan/samarbeta-med-oss/samverka-med-student'
                },
                collaborate_with_researchers: {
                    title: 'Forskningssamarbeten',
                    url: '/samverkan/samarbeta-med-oss/samverka-med-forskar'
                },
                collaborate_in_innovation_projects: {
                    title: 'Samverka i innovationsprojekt',
                    url: '/samverkan/samarbeta-med-oss/samverka-i-innovationsprojekt-1.957185'
                },
                strategic_partnering: {
                    title: 'Strategiska partnerskap',
                    url: '/samverkan/partnerskap'
                },
                personal_mobility: {
                    title: 'Personrörlighet',
                    url: '/samverkan/partnerskap/personrorlighet'
                },
                kth_kompetence_centres: {
                    title: 'KTH:s centrumbildningar',
                    url: '/forskning/sarskilda-forskningssatsningar/kompetenscentra-1.11756'
                },
                kth_goldmedal_in_industrial_cooperation: {
                    title: 'KTH:s guldmedalj i industrisamverkan',
                    url: '/samverkan/partnerskap/kth-s-guldmedalj-i-industrisamverkan-1.429634'
                },
                contact_us: {
                    title: 'Kontakta oss',
                    url: '/samverkan/kontakta-oss'
                }
            }
        },
        recruit_students: {
            title: 'Rekrytering och kompetensförsörjning',
            develop_your_company_with_young_talents: {
                title: 'Nå våra studenter',
                url: '/samverkan/samarbeta-med-oss/samverka-med-student'
            },
            recruit_international_talents: {
                title: 'Rekrytera internationella talanger',
                url: '/samverkan/foretagsfinansierade'
            },
            advertise_degree_projects: {
                title: 'Annonsera exjobb',
                url: '/samverkan/exjobb'
            }
        },
        further_education: {
            title: 'Utvecklas med KTH',
            further_education_for_professionals: {
                title: 'Vidareutbildning för yrkesverksamma',
                url: '/samverkan/kompetensutveckling'
            },
            open_courses: {
                title: 'Öppna kurser',
                url: 'https://www.kth.se/utbildning/kurser/fovkurser'
            },
            kth_executive_school: {
                title: 'KTH Executive School',
                url: 'https://kthexecutiveschool.se/'
            },
            massive_online_open_course: {
                title: 'MOOC-kurs (Massive Online Open Course)',
                url: '/utbildning/kurser/mooc'
            },
            available_lab_environment_for_businesses: {
                title: 'Tillgängliga labbmiljöer för företag',
                url: '/samverkan/samarbeta-med-oss/infrastruktur'
            }
        },
        support_kth: {
            title: 'Stöd KTH',
            support_kth_reaserch_and_education: {
                title: 'Stöd KTH:s forskning och utbildning',
                url: '/om/stod-kth/kontakt-1.205758'
            },
            support_students_and_young_researchers: {
                title: 'KTH Opportunities Fund - stöd KTH:s studenter och unga forskare',
                url: '/alumni/engagemang/ge-en-gava'
            },
            engage_as_kth_almuni: {
                title: 'Engagera dig som KTH-alumn',
                url: '/alumni'
            }
        },
        about_kth: {
            title: 'Om KTH',
            url: '/om',
            facts_about_kth: {
                title: 'Fakta om KTH',
                url: '/om/fakta'
            },
            kth_organisation: {
                title: 'KTH:s organisation',
                url: '/om/organisation'
            },
            president: {
                title: 'Rektor',
                url: '/om/rektor'
            },
            competence_centres: {
                title: 'Centrumbildningar',
                url: '/forskning/sarskilda-forskningssatsningar/kompetenscentra-1.11756'
            },
            environment_and_sustainable_development: {
                title: 'Miljö och hållbar utveckling',
                url: '/om/miljo-hallbar-utveckling'
            },
            gender_equality_diversity_and_equal_opportunities: {
                title: 'Jämställdhet, mångfald och lika villkor',
                url: '/om/equality'
            },
            news_and_events: {
                title: 'Aktuellt på KTH',
                url: '/aktuellt'
            }
        },
        kth_schools: {
            title: 'KTH:s skolor',
            architecture_and_the_built_environment: {
                title: 'Arkitektur och samhällsbyggnad',
                url: '/abe'
            },
            electrical_engineering_and_computer_science: {
                title: 'Elektroteknik och datavetenskap',
                url: 'https://www.kth.se/eecs'
            },
            industrial_engineering_and_management: {
                title: 'Industriell teknik och management',
                url: 'https://www.kth.se/itm'
            },
            engineering_sciences_in_chemistry_biotechnology_and_health: {
                title: 'Kemi, bioteknologi och hälsa',
                url: 'https://www.kth.se/cbh'
            },
            engineering_sciences: {
                title: 'Teknikvetenskap',
                url: '/sci'
            }
        },
        cooperation: {
            title: 'Samarbete',
            support_kth: {
                title: 'Stöd KTH',
                url: '/om/stod-kth'
            },
            collaboration_with_primary_and_secondary_schools: {
                title: 'Samverkan med grund- och gymnasieskolan',
                url: '/om/grund-gymnasieskola'
            },
            internationalisation: {
                title: 'Internationalisering',
                url: '/om/internationellt'
            },
            business_and_society: {
                title: 'Näringsliv och samhälle',
                url: '/om/naringsliv'
            }
        },
        contact: {
            title: 'Kontakt',
            contact_with_kth: {
                title: 'Kontakt med KTH',
                url: '/om/kontakt'
            },
            work_at_kth: {
                title: 'Jobba på KTH',
                url: '/om/work-at-kth'
            },
            press_and_media: {
                title: 'Press och media',
                url: '/om/press'
            },
            our_campuses_and_maps: {
                title: 'Våra campus och kartor',
                url: '/om/kontakt/campus'
            },
            invoice_and_payment: {
                title: 'Faktura och betalning',
                url: '/om/fakta/faktura-och-betalning-1.2317'
            },
            the_president_thoughts: {
                title: 'Rektors blogg',
                url: 'http://www.kth.se/blogs/rektor'
            }
        },
        library: {
            title: 'Bibliotek',
            url: '/biblioteket',
            use_the_library: {
                title: 'Använda biblioteket'
            },
            my_library_account: {
                title: 'Mitt bibliotekskonto',
                url: '/biblioteket/anvanda-biblioteket/mitt-bibliotekskonto-1.853001'
            },
            borrow_and_request: {
                title: 'Låna &amp; beställa',
                url: '/biblioteket/anvanda-biblioteket/lana-och-bestalla-1.853035'
            },
            price_list: {
                title: 'Prislista',
                url: '/biblioteket/anvanda-biblioteket/prislista-1.856222'
            },
            study_at_the_library: {
                title: 'Studera i biblioteket',
                url: '/biblioteket/anvanda-biblioteket/studera-i-biblioteket-1.953572'
            },
            opening_hour_and_contact: {
                title: 'Öppettider &amp; kontakt',
                url: '/biblioteket/anvanda-biblioteket/oppettider-kontakt'
            },
            our_collections: {
                title: 'Våra samlingar',
                url: '/biblioteket/anvanda-biblioteket/vara-samlingar-1.852976'
            },
            talking_books: {
                title: 'Talböcker',
                url: '/biblioteket/anvanda-biblioteket/talbocker'
            },
            events: {
                title: 'På gång',
                url: '/biblioteket/anvanda-biblioteket/pa-gang'
            },
            about_the_library: {
                title: 'Om biblioteket',
                url: '/biblioteket/anvanda-biblioteket/om-biblioteket-1.884618'
            },
            search_and_evaluate: {
                title: 'Söka &amp; värdera',
                search_evaluate_information: {
                    title: 'Sök och värdera information',
                    url: '/biblioteket/soka-vardera/sok-och-vardera-information-1.942624'
                },
                use_databases_and_search_tools: {
                    title: 'Använd databaser och söktjänster',
                    url: '/biblioteket/soka-vardera/databaser-och-soktjanster-1.851404'
                },
                learn_about_patents: {
                    title: 'Lär dig om patent',
                    url: '/biblioteket/soka-vardera/patent-juridiska-dokument-med-tekniskt-innehall-1.853005'
                },
                book_a_consultation: {
                    title: 'Boka handledning',
                    url: '/biblioteket/soka-vardera/boka-handledning-1.853064'
                },
                book_a_teaching_activity: {
                    title: 'Boka undervisning',
                    url: '/biblioteket/soka-vardera/bibliotekets-undervisning-1.853008'
                }
            },
            write_and_cite: {
                title: 'Skriva &amp; referera',
                centre_for_cademic_writing_and_rhetoric: {
                    title: 'Centrum för akademiskt skrivande &amp; retorik',
                    url: '/biblioteket/skriva-referera/skrivande-retorik'
                },
                write_references: {
                    title: 'Skriv referenser',
                    url: '/biblioteket/skriva-referera/skriv-referenser-1.856564'
                },
                reference_management_software: {
                    title: 'Referenshanteringsprogram',
                    url: '/biblioteket/skriva-referera/referenshanteringsprogram'
                },
                spelling_and_grammar: {
                    title: 'Rättstavningsprogram',
                    url: '/biblioteket/skriva-referera/rattstavningsprogram-1.939989'
                }
            },
            publish_and_analyse: {
                title: 'Publicera &amp; analysera',
                guidance_for_publishing: {
                    title: 'Vägledning för publicering',
                    url: '/biblioteket/publicera-analysera/vagledning-for-publicering'
                },
                publish_open_access: {
                    title: 'Publicera Open Access – vi betalar',
                    url: '/biblioteket/publicera-analysera/vagledning-for-publicering/publicera-open-access-vi-betalar-1.859196'
                },
                manage_publications: {
                    title: 'Hantera publikationer',
                    url: '/biblioteket/publicera-analysera/hantera-publikationer'
                },
                manage_research_data: {
                    title: 'Hantera forskningsdata',
                    url: '/biblioteket/publicera-analysera/hantera-forskningsdata'
                },
                bibliometrics: {
                    title: 'Bibliometri',
                    url: '/biblioteket/publicera-analysera/bibliometriska-analyser'
                }
            }
        },
        search_the_kth_website: {
            title: 'Sök på KTH:s webbplats',
            search: {
                title: 'Sök'
            }
        }
    },
    footer: {
        kth: {
            education: {
                title: 'Utbildning',
                url: '/utbildning'
            },
            research: {
                title: 'Forskning',
                url: '/en/forskning'
            },
            cooperation: {
                title: 'Samverkan',
                url: '/samverkan'
            },
            about: {
                title: 'Om KTH',
                url: '/om'
            },
            current: {
                title: 'Aktuellt',
                url: '/aktuellt'
            },
            studentonkth: {
                title: 'Student på KTH',
                url: '/student'
            },
            alumni: {
                title: 'Alumni',
                url: '/alumni'
            },
            kthintranet: {
                title: 'KTH Intranät',
                url: 'https://intra.kth.se/'
            }
        },
        organisation_header_title: 'Organisation',
        organisation: {
            library: {
                title: 'KTH Biblioteket',
                url: '/biblioteket'
            },
            centers: {
                title: 'Centrumbildningar',
                url: '/om/organisation/kompetenscentra-1.11756'
            },
            president: {
                title: 'Rektor',
                url: '/om/organisation/kth-s-ledning-1.15618'
            },
            joint_business_support: {
                title: 'Gemensamt verksamhetsstöd',
                url: '/om/organisation/gvs-1.887371'
            }
        },
        services_header_title: 'Tjänster',
        services: {
            timetables: {
                title: 'Schema',
                url: '/student/schema'
            },
            course_programe_and_group_webs: {
                title: 'Kurs-, program- och gruppwebbar',
                url: 'https://www.kth.se/social/'
            },
            canvas_learning_platform: {
                title: 'Lärplattformen Canvas',
                url: 'https://kth.instructure.com'
            },
            webmail: {
                title: 'Webbmejl',
                url: 'https://webmail.kth.se'
            }
        },
        kth_information: {
            address: {
                name: 'KTH',
                post_address: '100 44 Stockholm',
                phone_number: '+46 8 790 60 00'
            },
            contact_kth: {
                title: 'Kontakta KTH',
                url: '/om/kontakt'
            },
            work_at_kth: {
                title: 'Jobba på KTH',
                url: '/om/work-at-kth?utm_source=footer&amp;utm_medium=web&amp;utm_campaign=jobb'
            },
            press_and_media: {
                title: 'Press och media',
                url: '/aktuellt/press?utm_source=footer&amp;utm_medium=web&amp;utm_campaign=press'
            },
            invoice_and_payment: {
                title: 'Faktura och betalning',
                url: '/om/kontakt/faktura-och-betalning-1.2317'
            },
            kth_on_facebook: {
                title: 'KTH på Facebook',
                url: 'https://www.facebook.com/KTHuniversitet/'
            },
            kth_on_youtube: {
                title: 'KTH på YouTube',
                url: 'https://www.youtube.com/kth'
            },
            contact_the_webmaster: {
                title: 'Kontakta webbansvarig',
                url: 'https://intra.kth.se/administration/kommunikation/webbpublicering/webbansvariga-1.23113'
            }
        }
    }
}
export default MESSAGES