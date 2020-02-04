import React from 'react'

class FooterStatic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer role="contentinfo" className="container">
        <div className="block columnSplitter row  using4Columns  " data-cid="1.202278" lang="sv-SE">
          <div className="col c1">
            <div className="block list links defaultTheme" data-cid="1.202279" lang="sv-SE">
              <h2>KTH</h2>
              <ul>
                <li><a href="/utbildning">Utbildning</a></li>
                <li><a href="/forskning">Forskning</a></li>
                <li><a href="/samverkan">Samverkan</a></li>
                <li><a href="/om">Om KTH</a></li>
                <li><a href="/aktuellt">Aktuellt</a></li>
                <li><a href="/student">Student på KTH</a></li>
                <li><a href="/alumni">Alumni</a></li>
                <li><a href="https://intra.kth.se/">KTH Intranät</a></li>
              </ul>
            </div>
          </div>
          <div className="col c2">
            <div className="block list links defaultTheme" data-cid="1.202289" lang="sv-SE">
              <h2>Organisation</h2>
              <ul>
                <li><a href="/biblioteket">KTH Biblioteket</a></li>
                <li><a href="/om/organisation/kompetenscentra-1.11756">Centrumbildningar</a></li>
                <li><a href="/om/organisation/kth-s-ledning-1.15618">Rektor</a></li>
                <li><a href="/om/organisation/gvs-1.887371">Gemensamt verksamhetsstöd</a></li>
              </ul>
            </div>
          </div>
          <div className="col c3">
            <div className="block list links defaultTheme" data-cid="1.202317" lang="sv-SE">
              <h2>Tjänster</h2>
              <ul>
                <li><a href="/student/schema">Schema</a></li>
                <li><a href="https://www.kth.se/social/">Kurs-, program- och gruppwebbar</a></li>
                <li><a href="https://kth.instructure.com">Lärplattformen Canvas</a></li>
                <li><a href="https://webmail.kth.se">Webbmejl</a></li>
              </ul>
            </div>
          </div>
          <div className="col c4">
            <article className="block teaser top white" data-cid="1.865130" lang="sv-SE">
              <div className="teaserBody">
                <div className="lead">
                  <p><strong>KTH</strong><br /> <em>100 44 Stockholm<br /> +46 8 790 60 00</em></p>
                </div>
              </div>
            </article>
            <div className="block list links defaultTheme" data-cid="1.582032" lang="sv-SE">
              <ul>
                <li><a href="/om/kontakt">Kontakta KTH</a></li>
                <li><a href="/om/work-at-kth?utm_source=footer&amp;utm_medium=web&amp;utm_campaign=jobb">Jobba på KTH</a></li>
                <li><a href="/aktuellt/press?utm_source=footer&amp;utm_medium=web&amp;utm_campaign=press">Press och media</a></li>
                <li><a href="/om/kontakt/faktura-och-betalning-1.2317">Faktura och betalning</a></li>
                <li><a href="https://www.facebook.com/KTHuniversitet/">KTH på Facebook</a></li>
                <li><a href="https://www.youtube.com/kth">KTH på YouTube</a></li>
                <li><a href="https://intra.kth.se/administration/kommunikation/webbpublicering/webbansvariga-1.23113">Kontakta webbansvarig</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterStatic
