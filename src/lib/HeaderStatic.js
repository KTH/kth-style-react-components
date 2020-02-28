import React from 'react'
import cortina from 'kth-node-cortina-block'
import i18n from '../../i18n'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondaryMenu: '',
            megaMenu: '',
            image: '',
            title: '',
            search: ''
        }
    }

    render() {
        const LANGUAGE = this.props.language
        const MSG = i18n.getMessages()
        return (
            <header role="banner">
                <div className="container-fluid">
                    <div className="container">
                        <div class="header-container__top">
                            <figure class="block figure defaultTheme mainLogo" data-cid="1.77257" lang={LANGUAGE}>
                                <a href="/"><img class="figure-img img-fluid" src="/polopoly_fs/1.77257.1550147376!/KTH_Logotyp_RGB_2013-2.svg" alt="KTH:s logotyp" height="70" width="70" /></a>
                            </figure>
                            <h1 class="block siteName" data-cid="1.260060">
                                <a data-cid="1.260060" href="/">{MSG.emailforward}</a>
                            </h1>
                            <div class="block list links defaultTheme secondaryMenu" data-cid="1.865038" lang={LANGUAGE}>
                                <ul>
                                    <li><a href={MSG.header.student.url}>{MSG.header.student.title}</a></li>
                                    <li><a href={MSG.header.alumn.url}>{MSG.header.alumn.title}</a></li>
                                    <li><a href={MSG.header.employee.url}>{MSG.header.employee.title}</a></li>
                                    <li><a href={MSG.header.international_website.url} hreflang="en-UK">{MSG.header.international_website.title}</a></li>
                                </ul>
                            </div>
                            <div id="mobileMenuWrapper">
                                <button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <nav id="mobileMenu" class="block navbar navbar-expand-lg navbar-light">
                                    <div id="mobileMenuContent" class="navbar-collapse collapse">
                                        <ul id="mobileMenuList" class="menu navbar-nav mr-auto">
                                            <li class="item nav-item megaItem homeItem"><a href={MSG.header.mobileMenu.home.url} class="nav-link"> {MSG.header.mobileMenu.home.title}</a></li>
                                            <li class="item nav-item megaItem"><a href={MSG.header.mobileMenu.education.url} class="nav-link"> {MSG.header.mobileMenu.education.title}</a></li>
                                            <li class="item nav-item megaItem"><a href={MSG.header.mobileMenu.research.url} class="nav-link"> {MSG.header.mobileMenu.research.title}</a></li>
                                            <li class="item nav-item megaItem"><a href={MSG.header.mobileMenu.cooperation.url} class="nav-link"> {MSG.header.mobileMenu.cooperation.title}</a></li>
                                            <li class="item nav-item megaItem"><a href={MSG.header.mobileMenu.about_kth.url} class="nav-link"> {MSG.header.mobileMenu.about_kth.title}</a></li>
                                            <li class="item nav-item megaItem"><a href={MSG.header.mobileMenu.library.url} class="nav-link"> {MSG.header.mobileMenu.library.title}</a></li>
                                            <li class="secondaryMenuWrap">
                                                <ul class="secondaryMenuContainer"><li class="item nav-item secondaryItem"><a class="secondaryMenu" href={MSG.header.mobileMenu.secondaryMenu.student.url}>{MSG.header.mobileMenu.secondaryMenu.student.title}</a></li>
                                                    <li class="item nav-item secondaryItem"><a class="secondaryMenu" href={MSG.header.mobileMenu.secondaryMenu.alumn.url}>{MSG.header.mobileMenu.secondaryMenu.alumn.title}</a></li>
                                                    <li class="item nav-item secondaryItem"><a class="secondaryMenu" href={MSG.header.employee.url}>{MSG.header.employee.title}</a></li>
                                                    <li class="item nav-item secondaryItem"><a class="secondaryMenu" href={MSG.header.international_website.url} hreflang="en-UK">{MSG.header.international_website.title}</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <div class="header-container__bottom">
                            <nav class="block megaMenu navbar navbar-expand-lg navbar-light" data-cid="1.855134" lang="sv-SE">
                                <span id="propertiesMegaMenu"></span>
                                <div class="collapse navbar-collapse" id="megaMenuContent">
                                    <ul class="menu navbar-nav mr-auto" id="megaMenu">

                                        {/* size-${policy.size} */}
                                        <li class="item nav-item megaItem homeItem" data-content-id="1.863181" data-id="menu-group-1-855134-306788234">
                                            <div class="headerItem showLabel">
                                                <a class="nav-link" href="/"> Hem</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-306788234" data-left="-30px" style="width: 1228px; left: -30px;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-306788234"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item nav-item megaItem" data-content-id="1.881422" data-id="menu-group-1-855134-1038053073">
                                            <div class="headerItem">
                                                <a class="nav-link" href="/utbildning"> Utbildning</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-1038053073" data-left="-115.594px" style="width: 1228px; left: -115.594px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-1038053073">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.881422" lang="sv-SE">
                                                                <div class="col c1">
                                                                    <div class="block list links" data-cid="1.881622" lang="sv-SE">
                                                                        <h2>Grundnivå</h2>
                                                                        <ul>
                                                                            <li><a href="/utbildning/arkitekt">Arkitekt</a></li>
                                                                            <li><a href="/utbildning/civilingenjor">Civilingenjör</a></li>
                                                                            <li><a href="/utbildning/hogskoleingenjor">Högskoleingenjör</a></li>
                                                                            <li><a href="/utbildning/kandidatutbildning">Kandidatutbildning</a></li>
                                                                            <li><a href="/utbildning/lararutbildningar">Lärarutbildning</a></li>
                                                                            <li><a href="/utbildning/hogskoleutbildning">Högskoleutbildning</a></li>
                                                                            <li><a href="/utbildning/teknisk-basutbildning">Teknisk basutbildning</a></li>
                                                                            <li><a href="/utbildning/kompletterande-utbildning">Kompletterande utbildning</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links" data-cid="1.889362" lang="sv-SE">
                                                                        <h2>Avancerad nivå </h2>
                                                                        <ul>
                                                                            <li><a href="/utbildning/master-magisterutbildning">Master- och magisterutbildning</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="block list links" data-cid="1.939406" lang="sv-SE">
                                                                        <h2>Forskarnivå</h2>
                                                                        <ul>
                                                                            <li><a href="/utbildning/forskarutbildning">Forskarutbildning</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links" data-cid="1.895293" lang="sv-SE">
                                                                        <h2>Övriga utbildningar</h2>
                                                                        <ul>
                                                                            <li><a href="/utbildning/kurser">Fristående kurser</a></li>
                                                                            <li><a href="/utbildning/kurser/mooc">Massive Open Online Courses</a></li>
                                                                            <li><a href="/utbildning/foretagsutbildning">Uppdragutbildning för företag och individ</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links" data-cid="1.889345" lang="sv-SE">
                                                                        <h2>Kontakta KTH</h2>
                                                                        <ul>
                                                                            <li><a href="/utbildning/kontakt">Frågor om studier</a>
                                                                            </li><li><a href="/utbildning/kontakt/campus">KTH:s 5 campus</a>
                                                                            </li><li><a href="/utbildning/traffakth">Träffa KTH</a>
                                                                            </li><li><a href="/utbildning/grund-gymnasieskola">Samverkan med grund- och gymnasieskolor</a>
                                                                            </li></ul>
                                                                    </div>
                                                                    <div class="block list links" data-cid="1.962408" lang="sv-SE">
                                                                        <h2>Utbildningskatalog</h2>
                                                                        <ul>
                                                                            <li><a href="/utbildning/bestall">Beställ katalog 2020/2021</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item nav-item megaItem" data-content-id="1.202244" data-id="menu-group-1-855134-380186713">
                                            <div class="headerItem">
                                                <a class="nav-link" href="/forskning"> Forskning</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-380186713" data-left="-242.422px" style="width: 1228px; left: -242.422px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-380186713">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.202244" lang="sv-SE">
                                                                <div class="col c1">
                                                                    <div class="block list links" data-cid="1.894607" lang="sv-SE">
                                                                        <h2>Plattformar för forskning</h2>
                                                                        <ul>
                                                                            <li><a href="/forskning/forskningsplattformar">Om plattformarna</a></li>
                                                                            <li><a href="/forskning/forskningsplattformar/digitalisering">Digitalisering</a></li>
                                                                            <li><a href="/forskning/forskningsplattformar/energi">Energi</a></li>
                                                                            <li><a href="/forskning/forskningsplattformar/industriell-transformation">Industriell transformation</a></li>
                                                                            <li><a href="/forskning/forskningsplattformar/lst">Life Science Technology</a></li>
                                                                            <li><a href="/forskning/forskningsplattformar/material">Material</a></li>
                                                                            <li><a href="/forskning/forskningsplattformar/transport">Transport</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links" data-cid="1.894605" lang="sv-SE">
                                                                        <h2>Skolornas forskningsområden</h2>
                                                                        <ul>
                                                                            <li><a href="/forskning/omraden/skolornas-forskningsomraden-1.659410">Om skolorna</a></li>
                                                                            <li><a href="/forskning/omraden/arkitektur-och-samhallsbyggnad-1.659429">Arkitektur och samhällsbyggnad</a></li>
                                                                            <li><a href="/forskning/omraden/elektroteknik-och-datavetenskap-1.787823">Elektroteknik och datavetenskap</a></li>
                                                                            <li><a href="/forskning/omraden/industriell-teknik-och-management-1.659466">Industriell teknik och management</a></li>
                                                                            <li><a href="/forskning/omraden/kemi-bioteknologi-och-halsa-1.787800">Kemi, bioteknologi och hälsa</a></li>
                                                                            <li><a href="https://www.kth.se/forskning/omraden/teknikvetenskap-1.659551">Teknikvetenskap</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links" data-cid="1.897116" lang="sv-SE">
                                                                        <h2>Forskningssatsningar</h2>
                                                                        <ul>
                                                                            <li><a href="/forskning/sarskilda-forskningssatsningar/eit-1.63977">EIT - European Institute of Innovation and Technology</a></li>
                                                                            <li><a href="/forskning/sarskilda-forskningssatsningar/kompetenscentra-1.11756">Kompetenscentra</a></li>
                                                                            <li><a href="/forskning/sarskilda-forskningssatsningar/strategiska-forskningsomraden">KTH:s strategiska forskningsområden (SFO)</a></li>
                                                                            <li><a href="/forskning/forskning-miljo-hallbar-utveckling">Miljö och hållbar utveckling</a></li>
                                                                            <li><a href="/forskning/sarskilda-forskningssatsningar/utvardering-av-kth-s-forskning-rae-2020-1.945425">Utvärdering av KTH:s forskning (RAE 2020)</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links" data-cid="1.897121" lang="sv-SE">
                                                                        <h2>Infrastruktur och resurser</h2>
                                                                        <ul>
                                                                            <li><a href="/utbildning/forskarutbildning">Forskarutbildning</a></li>
                                                                            <li><a href="/forskning/publikationer">Forskningspublikationer</a></li>
                                                                            <li><a href="https://www.kth.se/directory">Hitta forskare</a></li>
                                                                            <li><a href="/forskning/forska/kth-innovation-kommersialisering-av-ny-teknik-1.4573">Innovation och kommersialisering (KTH Innovation)</a></li>
                                                                            <li><a href="/om/fakta/ranking/ranking-1.530636">Ranking</a></li>
                                                                            <li><a href="/samverkan">Samverkan</a></li>
                                                                            <li><a href="/forskning/research-office">Stöd för extern finansiering</a></li>
                                                                            <li><a href="/forskning/tillgangliga-forskni">Tillgängliga miljöer för forskning</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item nav-item megaItem" data-content-id="1.202245" data-id="menu-group-1-855134-519128715">
                                            <div class="headerItem">
                                                <a class="nav-link" href="/samverkan"> Samverkan</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-519128715" data-left="-363.594px" style="width: 1228px; left: -363.594px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-519128715">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.202245" lang="sv-SE">
                                                                <div class="col c1">
                                                                    <div class="block list links" data-cid="1.876641" lang="sv-SE">
                                                                        <h2>Samarbeta med KTH</h2>
                                                                        <ul>
                                                                            <li><a href="/samverkan/samarbeta-med-oss">Samarbeta med oss</a></li>
                                                                            <li><a href="/samverkan/samarbeta-med-oss/samverka-med-student">Samverkan i utbildningen</a></li>
                                                                            <li><a href="/samverkan/samarbeta-med-oss/samverka-med-forskar">Forskningssamarbeten</a></li>
                                                                            <li><a href="/samverkan/samarbeta-med-oss/samverka-i-innovationsprojekt-1.957185">Samverka i innovationsprojekt</a></li>
                                                                            <li><a href="/samverkan/partnerskap">Strategiska partnerskap</a></li>
                                                                            <li><a href="/samverkan/partnerskap/personrorlighet">Personrörlighet</a></li>
                                                                            <li><a href="/forskning/sarskilda-forskningssatsningar/kompetenscentra-1.11756">KTH:s centrumbildningar</a></li>
                                                                            <li><a href="/samverkan/partnerskap/kth-s-guldmedalj-i-industrisamverkan-1.429634">KTH:s guldmedalj i industrisamverkan</a></li>
                                                                            <li><a href="/samverkan/kontakta-oss">Kontakta oss</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links" data-cid="1.876655" lang="sv-SE">
                                                                        <h2>Rekrytering och kompetensförsörjning</h2>
                                                                        <ul>
                                                                            <li><a href="/samverkan/samarbeta-med-oss/samverka-med-student">Nå våra studenter</a></li>
                                                                            <li><a href="/samverkan/foretagsfinansierade">Rekrytera internationella talanger</a></li>
                                                                            <li><a href="/samverkan/exjobb">Annonsera exjobb</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links defaultTheme" data-cid="1.703479" lang="sv-SE">
                                                                        <h2>Utvecklas med KTH</h2>
                                                                        <ul>
                                                                            <li><a href="/samverkan/kompetensutveckling">Vidareutbildning för yrkesverksamma</a></li>
                                                                            <li><a href="https://www.kth.se/utbildning/kurser/fovkurser">Öppna kurser</a></li>
                                                                            <li><a href="https://kthexecutiveschool.se/">KTH Executive School</a></li>
                                                                            <li><a href="/utbildning/kurser/mooc">MOOC-kurs (Massive Online Open Course)</a></li>
                                                                            <li><a href="/samverkan/samarbeta-med-oss/infrastruktur">Tillgängliga labbmiljöer för företag</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links" data-cid="1.921689" lang="sv-SE">
                                                                        <h2>Stöd KTH</h2>
                                                                        <ul>
                                                                            <li><a href="/om/stod-kth/kontakt-1.205758">Stöd KTH:s forskning och utbildning</a></li>
                                                                            <li><a href="/alumni/engagemang/ge-en-gava">KTH Opportunities Fund - stöd KTH:s studenter och unga forskare</a></li>
                                                                            <li><a href="/alumni">Engagera dig som KTH-alumn</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item nav-item megaItem" data-content-id="1.863186" data-id="menu-group-1-855134-312073618">
                                            <div class="headerItem">
                                                <a class="nav-link" href="/om"> Om KTH</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-312073618" data-left="-497.609px" style="width: 1228px; left: -497.609px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-312073618">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.863186" lang="sv-SE">
                                                                <div class="col c1">
                                                                    <div class="block list links defaultTheme" data-cid="1.863213" lang="sv-SE">
                                                                        <h2>Om KTH</h2>
                                                                        <ul>
                                                                            <li><a href="/om/fakta">Fakta om KTH</a></li>
                                                                            <li><a href="/om/organisation">KTH:s organisation</a></li>
                                                                            <li><a href="/om/rektor">Rektor</a></li>
                                                                            <li><a href="/forskning/sarskilda-forskningssatsningar/kompetenscentra-1.11756">Centrumbildningar</a></li>
                                                                            <li><a href="/om/miljo-hallbar-utveckling">Miljö och hållbar utveckling</a></li>
                                                                            <li><a href="/om/equality">Jämställdhet, mångfald och lika villkor</a></li>
                                                                            <li><a href="/aktuellt">Aktuellt på KTH</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links defaultTheme intraHeader" data-cid="1.204825" lang="sv-SE">
                                                                        <h2>KTH:s skolor</h2>
                                                                        <ul>
                                                                            <li><a href="/abe">Arkitektur och samhällsbyggnad</a></li>
                                                                            <li><a href="https://www.kth.se/eecs">Elektroteknik och datavetenskap</a></li>
                                                                            <li><a href="https://www.kth.se/itm">Industriell teknik och management</a></li>
                                                                            <li><a href="https://www.kth.se/cbh">Kemi, bioteknologi och hälsa</a></li>
                                                                            <li><a href="/sci">Teknikvetenskap</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">

                                                                    <div class="block list links defaultTheme" data-cid="1.205839" lang="sv-SE">
                                                                        <h2>Samarbete</h2>
                                                                        <ul>
                                                                            <li><a href="/om/stod-kth">Stöd KTH</a></li>
                                                                            <li><a href="/om/grund-gymnasieskola">Samverkan med grund- och gymnasieskolan</a></li>
                                                                            <li><a href="/om/internationellt">Internationalisering</a></li>
                                                                            <li><a href="/om/naringsliv">Näringsliv och samhälle</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links defaultTheme" data-cid="1.205784" lang="sv-SE">
                                                                        <h2>Kontakt</h2>
                                                                        <ul>
                                                                            <li><a href="/om/kontakt">Kontakt med KTH</a></li>
                                                                            <li><a href="/om/work-at-kth">Jobba på KTH</a></li>
                                                                            <li><a href="/om/press">Press och media</a></li>
                                                                            <li><a href="/om/kontakt/campus">Våra campus och kartor</a></li>
                                                                            <li><a href="/om/fakta/faktura-och-betalning-1.2317">Faktura och betalning</a></li>
                                                                            <li><a href="http://www.kth.se/blogs/rektor">Rektors blogg</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item nav-item megaItem" data-content-id="1.853601" data-id="menu-group-1-855134-927522555">
                                            <div class="headerItem">
                                                <a class="nav-link" href="/biblioteket"> Bibliotek</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-927522555" data-left="-605.094px" style="width: 1228px; left: -605.094px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-927522555">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.853601" lang="sv-SE">
                                                                <div class="col c1">
                                                                    <div class="block list links defaultTheme" data-cid="1.853600" lang="sv-SE">
                                                                        <h2>Använda biblioteket</h2>
                                                                        <ul>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/mitt-bibliotekskonto-1.853001">Mitt bibliotekskonto</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/lana-och-bestalla-1.853035">Låna &amp; beställa</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/prislista-1.856222">Prislista</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/studera-i-biblioteket-1.953572">Studera i biblioteket</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/oppettider-kontakt">Öppettider &amp; kontakt</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/vara-samlingar-1.852976">Våra samlingar</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/talbocker">Talböcker</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/pa-gang">På gång</a></li>
                                                                            <li><a href="/biblioteket/anvanda-biblioteket/om-biblioteket-1.884618">Om biblioteket</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links defaultTheme" data-cid="1.853614" lang="sv-SE">
                                                                        <h2>Söka &amp; värdera</h2>
                                                                        <ul>
                                                                            <li><a href="/biblioteket/soka-vardera/sok-och-vardera-information-1.942624">Sök och värdera information</a></li>
                                                                            <li><a href="/biblioteket/soka-vardera/databaser-och-soktjanster-1.851404">Använd databaser och söktjänster</a></li>
                                                                            <li><a href="/biblioteket/soka-vardera/patent-juridiska-dokument-med-tekniskt-innehall-1.853005">Lär dig om patent</a></li>
                                                                            <li><a href="/biblioteket/soka-vardera/boka-handledning-1.853064">Boka handledning</a></li>
                                                                            <li><a href="/biblioteket/soka-vardera/bibliotekets-undervisning-1.853008">Boka undervisning </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links defaultTheme" data-cid="1.853615" lang="sv-SE">
                                                                        <h2>Skriva &amp; referera</h2>
                                                                        <ul>
                                                                            <li><a href="/biblioteket/skriva-referera/skrivande-retorik">Centrum för akademiskt skrivande &amp; retorik</a></li>
                                                                            <li><a href="/biblioteket/skriva-referera/skriv-referenser-1.856564">Skriv referenser</a></li>
                                                                            <li><a href="/biblioteket/skriva-referera/referenshanteringsprogram">Referenshanteringsprogram</a></li>
                                                                            <li><a href="/biblioteket/skriva-referera/rattstavningsprogram-1.939989">Rättstavningsprogram</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links defaultTheme" data-cid="1.853616" lang="sv-SE">
                                                                        <h2>Publicera &amp; analysera</h2>
                                                                        <ul>
                                                                            <li><a href="/biblioteket/publicera-analysera/vagledning-for-publicering">Vägledning för publicering</a></li>
                                                                            <li><a href="/biblioteket/publicera-analysera/vagledning-for-publicering/publicera-open-access-vi-betalar-1.859196">Publicera Open Access – vi betalar</a></li>
                                                                            <li><a href="/biblioteket/publicera-analysera/hantera-publikationer">Hantera publikationer</a></li>
                                                                            <li><a href="/biblioteket/publicera-analysera/hantera-forskningsdata">Hantera forskningsdata</a></li>
                                                                            <li><a href="/biblioteket/publicera-analysera/bibliometriska-analyser">Bibliometri</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </nav>
                            <div class="block search  default-size" data-cid="1.77262" lang="sv-SE">
                                <div class="SearchWidget">
                                    <div class="SearchInputBar">
                                        <form class="SearchInputForm" method="GET" role="search" action="https://www.kth.se/search">
                                            <div class="InfernoFormlib-AutoCompleteField">
                                                <div class="label-container">
                                                    <label class="" for="search__Field">Sök på KTH:s webbplats</label>
                                                </div>
                                                <div class="input-group">
                                                    <input class="InfernoFormlib-TextField form-control" id="search__Field" name="q" autocomplete="off" type="text" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary search-widget-button" type="submit" value="Sök">Sök</button>
                                                    </div>
                                                </div>
                                            </div
                                            ><input type="hidden" name="urlFilter" />
                                            <input type="hidden" name="entityFilter" />
                                            <input type="hidden" name="documentFilter" />
                                            <input type="hidden" value="" name="filterLabel" />
                                            <input type="hidden" value="sv" name="l" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gradientBorder"></div>
            </header >
        )
    }
}

Header.defaultProps = {
    url: 'https://www.kth.se/cm/',
    language: 'sv',
    appTitle: '',
    appLink: '/'
}

export default Header
