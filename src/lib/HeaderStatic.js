import React from 'react'
import cortina from 'kth-node-cortina-block'
import i18n from './i18n'

class HeaderStatic extends React.Component {
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
                                    <li><a href={MSG.header.international_website.url} hreflang={LANGUAGE}>{MSG.header.international_website.title}</a></li>
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
                                                    <li class="item nav-item secondaryItem"><a class="secondaryMenu" href={MSG.header.international_website.url} hreflang={LANGUAGE}>{MSG.header.international_website.title}</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <div class="header-container__bottom">
                            <nav class="block megaMenu navbar navbar-expand-lg navbar-light" data-cid="1.855134" lang={LANGUAGE}>
                                <span id="propertiesMegaMenu"></span>
                                <div class="collapse navbar-collapse" id="megaMenuContent">
                                    <ul class="menu navbar-nav mr-auto" id="megaMenu">

                                        {/* size-${policy.size} */}
                                        <li class="item nav-item megaItem homeItem" data-content-id="1.863181" data-id="menu-group-1-855134-306788234">
                                            <div class="headerItem showLabel">
                                                <a class="nav-link" href="/"> {MSG.header.home.title}</a>
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
                                                <a class="nav-link" href={MSG.footer.kth.education.url}> {MSG.footer.kth.education.title}</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-1038053073" data-left="-115.594px" style="width: 1228px; left: -115.594px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-1038053073">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.881422" lang={LANGUAGE}>
                                                                <div class="col c1">
                                                                    <div class="block list links" data-cid="1.881622" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.undergraduate.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.undergraduate.architect.url}>{MSG.header.undergraduate.architect.title}</a></li>
                                                                            <li><a href={MSG.header.undergraduate.civil_engineer.url}>{MSG.header.undergraduate.civil_engineer.title}</a></li>
                                                                            <li><a href={MSG.header.undergraduate.bachelor.url}>{MSG.header.undergraduate.bachelor.title}</a></li>
                                                                            <li><a href={MSG.header.undergraduate.candidate_education.url}>{MSG.header.undergraduate.candidate_education.title}</a></li>
                                                                            <li><a href={MSG.header.undergraduate.teacher_education.url}>{MSG.header.undergraduate.teacher_education.title}</a></li>
                                                                            <li><a href={MSG.header.undergraduate.higher_education.url}>{MSG.header.undergraduate.higher_education.title}</a></li>
                                                                            <li><a href={MSG.header.undergraduate.technical_basic_training.url}>{MSG.header.undergraduate.technical_basic_training.title}</a></li>
                                                                            <li><a href={MSG.header.undergraduate.supplementary_education.url}>{MSG.header.undergraduate.supplementary_education.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links" data-cid="1.889362" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.advanced_level.title} </h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.advanced_level.master_and_magister_education.url}>{MSG.header.advanced_level.master_and_magister_education.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="block list links" data-cid="1.939406" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.research_level.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.research_level.doctorate.url}>{MSG.header.research_level.doctorate.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links" data-cid="1.895293" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.other_courses.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.other_courses.standalone_courses.url}>{MSG.header.other_courses.standalone_courses.title}</a></li>
                                                                            <li><a href="/utbildning/kurser/mooc">{MSG.header.other_courses.massive_open_online_courses.title}</a></li>
                                                                            <li><a href={MSG.header.other_courses.assignment_education_for_companies_and_individuals.url}>{MSG.header.other_courses.assignment_education_for_companies_and_individuals.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links" data-cid="1.889345" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.contact_kth.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.contact_kth.questions_about_studies.url}>{MSG.header.contact_kth.questions_about_studies.title}</a>
                                                                            </li><li><a href={MSG.header.contact_kth.kth_five_campus.url}>{MSG.header.contact_kth.kth_five_campus.title}</a>
                                                                            </li><li><a href={MSG.header.contact_kth.meet_kth.url}>{MSG.header.contact_kth.meet_kth.title}</a>
                                                                            </li><li><a href={MSG.header.contact_kth.collaboration_with_primary_and_secondary_schools.url}>{MSG.header.contact_kth.collaboration_with_primary_and_secondary_schools.title}</a>
                                                                            </li></ul>
                                                                    </div>
                                                                    <div class="block list links" data-cid="1.962408" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.training_catalog.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.training_catalog.order_catalog.url}>{MSG.header.training_catalog.order_catalog.title}</a></li>
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
                                                <a class="nav-link" href={MSG.header.research.url}> {MSG.header.research.title}</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-380186713" data-left="-242.422px" style="width: 1228px; left: -242.422px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-380186713">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.202244" lang={LANGUAGE}>
                                                                <div class="col c1">
                                                                    <div class="block list links" data-cid="1.894607" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.platforms_for_research.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.platforms_for_research.about_platforms.url}>{MSG.header.platforms_for_research.about_platforms.title}</a></li>
                                                                            <li><a href={MSG.header.platforms_for_research.digitization.url}>{MSG.header.platforms_for_research.digitization.title}</a></li>
                                                                            <li><a href={MSG.header.platforms_for_research.energy.url}>{MSG.header.platforms_for_research.energy.title}</a></li>
                                                                            <li><a href={MSG.header.platforms_for_research.industrial_transformation.url}>{MSG.header.platforms_for_research.industrial_transformation.title}</a></li>
                                                                            <li><a href={MSG.header.platforms_for_research.Life_Science_Technology.url}>{MSG.header.platforms_for_research.Life_Science_Technology.title}</a></li>
                                                                            <li><a href={MSG.header.platforms_for_research.material.url}>{MSG.header.platforms_for_research.material.title}</a></li>
                                                                            <li><a href={MSG.header.platforms_for_research.transport.url}>{MSG.header.platforms_for_research.transport.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links" data-cid="1.894605" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.Schools_research_areas.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.Schools_research_areas.about_the_schools.url}>{MSG.header.Schools_research_areas.about_the_schools.title}</a></li>
                                                                            <li><a href={MSG.header.Schools_research_areas.Architecture_and_the_built_environment.url}>{MSG.header.Schools_research_areas.Architecture_and_the_built_environment.title}</a></li>
                                                                            <li><a href={MSG.header.Schools_research_areas.electrical_engineering_and_computer_science.url}>{MSG.header.Schools_research_areas.electrical_engineering_and_computer_science.title}</a></li>
                                                                            <li><a href={MSG.header.Schools_research_areas.Industrial_engineering_and_management.url}>{MSG.header.Schools_research_areas.Industrial_engineering_and_management.title}</a></li>
                                                                            <li><a href={MSG.header.Schools_research_areas.engineering_sciences_in_chemistry_biotechnology_and_health.url}>{MSG.header.Schools_research_areas.engineering_sciences_in_chemistry_biotechnology_and_health.title}</a></li>
                                                                            <li><a href={MSG.header.Schools_research_areas.engineering_science.url}>{MSG.header.Schools_research_areas.engineering_science.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links" data-cid="1.897116" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.strategic_research_and_competence_centres.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.strategic_research_and_competence_centres.european_institute_of_innovation_and_technology.url}>{MSG.header.strategic_research_and_competence_centres.european_institute_of_innovation_and_technology.title}</a></li>
                                                                            <li><a href={MSG.header.strategic_research_and_competence_centres.competence_centres.url}>{MSG.header.strategic_research_and_competence_centres.competence_centres.title}</a></li>
                                                                            <li><a href={MSG.header.strategic_research_and_competence_centres.kth_strategic_research_areas.url}>{MSG.header.strategic_research_and_competence_centres.kth_strategic_research_areas.title}</a></li>
                                                                            <li><a href={MSG.header.strategic_research_and_competence_centres.environment_and_sustainable_development.url}>{MSG.header.strategic_research_and_competence_centres.environment_and_sustainable_development.title}</a></li>
                                                                            <li><a href={MSG.header.strategic_research_and_competence_centres.assessment_of_kth_research.url}>{MSG.header.strategic_research_and_competence_centres.assessment_of_kth_research.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links" data-cid="1.897121" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.infrastructures_and_resources.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.doctoral_studies.url}>{MSG.header.infrastructures_and_resources.doctoral_studies.title}</a></li>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.research_publications.url}>{MSG.header.infrastructures_and_resources.research_publications.title}</a></li>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.find_researchers.url}>{MSG.header.infrastructures_and_resources.find_researchers.title}</a></li>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.innovation_and_commercialization.url}>{MSG.header.infrastructures_and_resources.innovation_and_commercialization.title}</a></li>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.ranking.url}>{MSG.header.infrastructures_and_resources.ranking.title}</a></li>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.cooperation.url}>{MSG.header.infrastructures_and_resources.cooperation.title}</a></li>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.funding_support_external.url}>{MSG.header.infrastructures_and_resources.funding_support_external.title}</a></li>
                                                                            <li><a href={MSG.header.infrastructures_and_resources.research_infrastructure.url}>{MSG.header.infrastructures_and_resources.research_infrastructure.title}</a></li>
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
                                                <a class="nav-link" href={MSG.header.cooperation.url}> {MSG.header.cooperation.title}</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-519128715" data-left="-363.594px" style="width: 1228px; left: -363.594px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-519128715">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.202245" lang={LANGUAGE}>
                                                                <div class="col c1">
                                                                    <div class="block list links" data-cid="1.876641" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.cooperation.collaborate_with_kth.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.collaborate_with_us.url}>{MSG.header.cooperation.collaborate_with_kth.collaborate_with_us.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.collaboration_in_education.url}>{MSG.header.cooperation.collaborate_with_kth.collaboration_in_education.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.collaborate_with_researchers.url}>{MSG.header.cooperation.collaborate_with_kth.collaborate_with_researchers.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.collaborate_in_innovation_projects.url}>{MSG.header.cooperation.collaborate_with_kth.collaborate_in_innovation_projects.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.strategic_partnering.url}>{MSG.header.cooperation.collaborate_with_kth.strategic_partnering.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.personal_mobility.url}>{MSG.header.cooperation.collaborate_with_kth.personal_mobility.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.kth_kompetence_centres.url}>{MSG.header.cooperation.collaborate_with_kth.kth_kompetence_centres.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.kth_goldmedal_in_industrial_cooperation.url}>{MSG.header.cooperation.collaborate_with_kth.kth_goldmedal_in_industrial_cooperation.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaborate_with_kth.contact_us.url}>{MSG.header.cooperation.collaborate_with_kth.contact_us.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links" data-cid="1.876655" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.recruit_students.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.recruit_students.develop_your_company_with_young_talents.url}>{MSG.header.recruit_students.develop_your_company_with_young_talents.title}</a></li>
                                                                            <li><a href={MSG.header.recruit_students.recruit_international_talents.url}>{MSG.header.recruit_students.recruit_international_talents.title}</a></li>
                                                                            <li><a href={MSG.header.recruit_students.advertise_degree_projects.url}>{MSG.header.recruit_students.advertise_degree_projects.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links defaultTheme" data-cid="1.703479" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.further_education.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.further_education.further_education_for_professionals.url}>{MSG.header.further_education.further_education_for_professionals.title}</a></li>
                                                                            <li><a href={MSG.header.further_education.open_courses.url}>{MSG.header.further_education.open_courses.title}</a></li>
                                                                            <li><a href={MSG.header.further_education.kth_executive_school.url}>{MSG.header.further_education.kth_executive_school.title}</a></li>
                                                                            <li><a href={MSG.header.further_education.massive_online_open_course.url}>{MSG.header.further_education.massive_online_open_course.title}</a></li>
                                                                            <li><a href={MSG.header.further_education.available_lab_environment_for_businesses.url}>{MSG.header.further_education.available_lab_environment_for_businesses.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links" data-cid="1.921689" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.support_kth.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.support_kth.support_kth_reaserch_and_education.url}>{MSG.header.support_kth.support_kth_reaserch_and_education.title}</a></li>
                                                                            <li><a href={MSG.header.support_kth.support_students_and_young_researchers.url}>{MSG.header.support_kth.support_students_and_young_researchers.title}</a></li>
                                                                            <li><a href={MSG.header.support_kth.engage_as_kth_almuni.url}>{MSG.header.support_kth.engage_as_kth_almuni.title}</a></li>
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
                                                <a class="nav-link" href={MSG.header.about_kth.url}> {MSG.header.about_kth.title}</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-312073618" data-left="-497.609px" style="width: 1228px; left: -497.609px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-312073618">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.863186" lang={LANGUAGE}>
                                                                <div class="col c1">
                                                                    <div class="block list links defaultTheme" data-cid="1.863213" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.about_kth.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.about_kth.facts_about_kth.url}>{MSG.header.about_kth.facts_about_kth.title}</a></li>
                                                                            <li><a href={MSG.header.about_kth.kth_organisation.url}>{MSG.header.about_kth.kth_organisation.title}</a></li>
                                                                            <li><a href={MSG.header.about_kth.president.url}>{MSG.header.about_kth.president.title}</a></li>
                                                                            <li><a href={MSG.header.about_kth.competence_centres.url}>{MSG.header.about_kth.competence_centres.title}</a></li>
                                                                            <li><a href={MSG.header.about_kth.environment_and_sustainable_development.url}>{MSG.header.about_kth.environment_and_sustainable_development.title}</a></li>
                                                                            <li><a href={MSG.header.about_kth.gender_equality_diversity_and_equal_opportunities.url}>{MSG.header.about_kth.gender_equality_diversity_and_equal_opportunities.title}</a></li>
                                                                            <li><a href={MSG.header.about_kth.news_and_events.url}>{MSG.header.about_kth.news_and_events.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links defaultTheme intraHeader" data-cid="1.204825" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.kth_schools.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.kth_schools.architecture_and_the_built_environment.url}>{MSG.header.kth_schools.architecture_and_the_built_environment.title}</a></li>
                                                                            <li><a href={MSG.header.kth_schools.electrical_engineering_and_computer_science.url}>{MSG.header.kth_schools.electrical_engineering_and_computer_science.title}</a></li>
                                                                            <li><a href={MSG.header.kth_schools.industrial_engineering_and_management.url}>{MSG.header.kth_schools.industrial_engineering_and_management.title}</a></li>
                                                                            <li><a href={MSG.header.kth_schools.engineering_sciences_in_chemistry_biotechnology_and_health.url}>{MSG.header.kth_schools.engineering_sciences_in_chemistry_biotechnology_and_health.title}</a></li>
                                                                            <li><a href={MSG.header.kth_schools.engineering_sciences.url}>{MSG.header.kth_schools.engineering_sciences.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">

                                                                    <div class="block list links defaultTheme" data-cid="1.205839" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.cooperation.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.cooperation.support_kth.url}>{MSG.header.cooperation.support_kth.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.collaboration_with_primary_and_secondary_schools.url}>{MSG.header.cooperation.collaboration_with_primary_and_secondary_schools.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.internationalisation.url}>{MSG.header.cooperation.internationalisation.title}</a></li>
                                                                            <li><a href={MSG.header.cooperation.business_and_society.url}>{MSG.header.cooperation.business_and_society.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links defaultTheme" data-cid="1.205784" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.contact.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.contact.contact_with_kth.url}>{MSG.header.contact.contact_with_kth.title}</a></li>
                                                                            <li><a href={MSG.header.contact.work_at_kth.url}>{MSG.header.contact.work_at_kth.title}</a></li>
                                                                            <li><a href={MSG.header.contact.press_and_media.url}>{MSG.header.contact.press_and_media.title}</a></li>
                                                                            <li><a href={MSG.header.contact.our_campuses_and_maps.url}>{MSG.header.contact.our_campuses_and_maps.title}</a></li>
                                                                            <li><a href={MSG.header.contact.invoice_and_payment.url}>{MSG.header.contact.invoice_and_payment.title}</a></li>
                                                                            <li><a href={MSG.header.contact.the_president_thoughts.url}>{MSG.header.contact.the_president_thoughts.title}</a></li>
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
                                                <a class="nav-link" href={MSG.header.library.url}> {MSG.header.library.title}</a>
                                            </div>
                                            <div class="menuItemContent" id="dropdownmenu-group-1-855134-927522555" data-left="-605.094px" style="width: 1228px; left: -605.094px; animation: 1s ease 0s infinite normal none running hue;">
                                                <div class="megaMenuBody">
                                                    <button class="closeButton" name="closeButton" title="Stäng megameny" type="button" aria-label="Stäng"></button>
                                                    <div class="megaMenuBodyInner">
                                                        <div id="dropdown-placeholdermenu-group-1-855134-927522555">
                                                            <div class="block columnSplitter row  using4Columns  " data-cid="1.853601" lang={LANGUAGE}>
                                                                <div class="col c1">
                                                                    <div class="block list links defaultTheme" data-cid="1.853600" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.library.use_the_library.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.library.my_library_account.url}>{MSG.header.library.my_library_account.title}</a></li>
                                                                            <li><a href={MSG.header.library.borrow_and_request.url}>{MSG.header.library.borrow_and_request.title}</a></li>
                                                                            <li><a href={MSG.header.library.price_list.url}>{MSG.header.library.price_list.title}</a></li>
                                                                            <li><a href={MSG.header.library.study_at_the_library.url}>{MSG.header.library.study_at_the_library.title}</a></li>
                                                                            <li><a href={MSG.header.library.opening_hour_and_contact.url}>{MSG.header.library.opening_hour_and_contact.title}</a></li>
                                                                            <li><a href={MSG.header.library.our_collections.url}>{MSG.header.library.our_collections.title}</a></li>
                                                                            <li><a href={MSG.header.library.talking_books.url}>{MSG.header.library.talking_books.title}</a></li>
                                                                            <li><a href={MSG.header.library.events.url}>{MSG.header.library.events.title}</a></li>
                                                                            <li><a href={MSG.header.library.about_the_library.url}>{MSG.header.library.about_the_library.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c2">
                                                                    <div class="block list links defaultTheme" data-cid="1.853614" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.library.search_and_evaluate.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.library.search_and_evaluate.search_evaluate_information.url}>{MSG.header.library.search_and_evaluate.search_evaluate_information.title}</a></li>
                                                                            <li><a href={MSG.header.library.search_and_evaluate.use_databases_and_search_tools.url}>{MSG.header.library.search_and_evaluate.use_databases_and_search_tools.title}</a></li>
                                                                            <li><a href={MSG.header.library.search_and_evaluate.learn_about_patents.url}>{MSG.header.library.search_and_evaluate.learn_about_patents.title}</a></li>
                                                                            <li><a href={MSG.header.library.search_and_evaluate.book_a_consultation.url}>{MSG.header.library.search_and_evaluate.book_a_consultation.title}</a></li>
                                                                            <li><a href={MSG.header.library.search_and_evaluate.book_a_teaching_activity.url}>{MSG.header.library.search_and_evaluate.book_a_teaching_activity.title} </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c3">
                                                                    <div class="block list links defaultTheme" data-cid="1.853615" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.library.write_and_cite.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.library.write_and_cite.centre_for_cademic_writing_and_rhetoric.url}>{MSG.header.library.write_and_cite.centre_for_cademic_writing_and_rhetoric.title}</a></li>
                                                                            <li><a href={MSG.header.library.write_and_cite.write_references.url}>{MSG.header.library.write_and_cite.write_references.title}</a></li>
                                                                            <li><a href={MSG.header.library.write_and_cite.reference_management_software.url}>{MSG.header.library.write_and_cite.reference_management_software.title}</a></li>
                                                                            <li><a href={MSG.header.library.write_and_cite.spelling_and_grammar.url}>{MSG.header.library.write_and_cite.spelling_and_grammar.title}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col c4">
                                                                    <div class="block list links defaultTheme" data-cid="1.853616" lang={LANGUAGE}>
                                                                        <h2>{MSG.header.library.publish_and_analyse.title}</h2>
                                                                        <ul>
                                                                            <li><a href={MSG.header.library.publish_and_analyse.guidance_for_publishing.url}>{MSG.header.library.publish_and_analyse.guidance_for_publishing.title}</a></li>
                                                                            <li><a href={MSG.header.library.publish_and_analyse.publish_open_access.url}>{MSG.header.library.publish_and_analyse.publish_open_access.title}</a></li>
                                                                            <li><a href={MSG.header.library.publish_and_analyse.manage_publications.url}>{MSG.header.library.publish_and_analyse.manage_publications.title}</a></li>
                                                                            <li><a href={MSG.header.library.publish_and_analyse.manage_research_data.url}>{MSG.header.library.publish_and_analyse.manage_research_data.title}</a></li>
                                                                            <li><a href={MSG.header.library.publish_and_analyse.bibliometrics.url}>{MSG.header.library.publish_and_analyse.bibliometrics.title}</a></li>
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
                            <div class="block search  default-size" data-cid="1.77262" lang={LANGUAGE}>
                                <div class="SearchWidget">
                                    <div class="SearchInputBar">
                                        <form class="SearchInputForm" method="GET" role="search" action="https://www.kth.se/search">
                                            <div class="InfernoFormlib-AutoCompleteField">
                                                <div class="label-container">
                                                    <label class="" for="search__Field">{MSG.header.search_the_kth_website.title}</label>
                                                </div>
                                                <div class="input-group">
                                                    <input class="InfernoFormlib-TextField form-control" id="search__Field" name="q" autocomplete="off" type="text" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary search-widget-button" type="submit" value="Sök">{MSG.header.search_the_kth_website.search.title}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="hidden" name="urlFilter" />
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

HeaderStatic.defaultProps = {
    url: 'https://www.kth.se/cm/',
    language: 'sv',
    appTitle: '',
    appLink: '/'
}

export default HeaderStatic
