import React from 'react'
import classNames from 'classnames'
import i18n from '../i18n'

class FooterStatic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const LANGUAGE = this.props.language
    const MSG = i18n.getMessages()
    return (
      <footer role="contentinfo" className="container">
        <div className="block columnSplitter row  using4Columns  " data-cid="1.202278" lang={LANGUAGE}>
          <div className="col c1">
            <div className="block list links defaultTheme" data-cid="1.202279" lang={LANGUAGE}>
              <h2>{MSG.KTH_title}</h2>
              <ul>
                <li><a href={MSG.footer.kth.education.url}>{MSG.footer.kth.education.title}</a></li>
                <li><a href={MSG.footer.kth.research.url}>{MSG.footer.kth.research.title}</a></li>
                <li><a href={MSG.footer.kth.cooperation.url}>{MSG.footer.kth.cooperation.title}</a></li>
                <li><a href={MSG.footer.kth.about.url}>{MSG.footer.kth.about.title}</a></li>
                <li><a href={MSG.footer.kth.current.url}>{MSG.footer.kth.current.title}</a></li>
                <li><a href={MSG.footer.kth.studentonkth.url}>{MSG.footer.kth.studentonkth.title}</a></li>
                <li><a href={MSG.footer.kth.alumni.url}>{MSG.footer.kth.alumni.title}</a></li>
                <li><a href={MSG.footer.kth.kthintranet.url}>{MSG.footer.kth.kthintranet.title}</a></li>
              </ul>
            </div>
          </div>
          <div className="col c2">
            <div className="block list links defaultTheme" data-cid="1.202289" lang={LANGUAGE}>
              <h2>{MSG.footer.organisation_header_title}</h2>
              <ul>
                <li><a href={MSG.footer.organisation.library.url}>{MSG.footer.organisation.library.title}</a></li>
                <li><a href={MSG.footer.organisation.library.url}>{MSG.footer.organisation.centers.title}</a></li>
                <li><a href={MSG.footer.organisation.library.url}>{MSG.footer.organisation.president.title}</a></li>
                <li><a href={MSG.footer.organisation.library.url}>{MSG.footer.organisation.joint_business_support.title}</a></li>
              </ul>
            </div>
          </div>
          <div className="col c3">
            <div className="block list links defaultTheme" data-cid="1.202317" lang={LANGUAGE}>
              <h2>{MSG.footer.services_header_title}</h2>
              <ul>
                <li><a href={MSG.footer.services.timetables.url}>{MSG.footer.services.timetables.title}</a></li>
                <li><a href={MSG.footer.services.timetables.url}>{MSG.footer.services.course_programe_and_group_webs.title}</a></li>
                <li><a href={MSG.footer.services.timetables.url}>{MSG.footer.services.canvas_learning_platform.title}</a></li>
                <li><a href={MSG.footer.services.timetables.url}>{MSG.footer.services.webmail.title}</a></li>
              </ul>
            </div>
          </div>
          <div className="col c4">
            <article className="block teaser top white" data-cid="1.865130" lang={LANGUAGE}>
              <div className="teaserBody">
                <div className="lead">
                  <p><strong>{MSG.footer.kth_information.address.name}</strong><br /> <em>{MSG.footer.kth_information.address.post_address}<br /> {MSG.footer.kth_information.address.phone_number}</em></p>
                </div>
              </div>
            </article>
            <div className="block list links defaultTheme" data-cid="1.582032" lang={LANGUAGE}>
              <ul>
                <li><a href={MSG.footer.kth_information.kth_on_youtube.url}>{MSG.footer.kth_information.contact_kth.title}</a></li>
                <li><a href={MSG.footer.kth_information.kth_on_youtube.url}>{MSG.footer.kth_information.work_at_kth.title}</a></li>
                <li><a href={MSG.footer.kth_information.kth_on_youtube.url}>{MSG.footer.kth_information.press_and_media.title}</a></li>
                <li><a href={MSG.footer.kth_information.kth_on_youtube.url}>{MSG.footer.kth_information.invoice_and_payment.title}</a></li>
                <li><a href={MSG.footer.kth_information.kth_on_youtube.url}>{MSG.footer.kth_information.kth_on_facebook.title}</a></li>
                <li><a href={MSG.footer.kth_information.kth_on_youtube.url}>{MSG.footer.kth_information.kth_on_youtube.title}</a></li>
                <li><a href={MSG.footer.kth_information.contact_the_webmaster.url}>{MSG.footer.kth_information.contact_the_webmaster.title}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

FooterStatic.defaultProps = {
  language: 'sv'
}

export default FooterStatic
