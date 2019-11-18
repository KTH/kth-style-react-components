import React from 'react'
import cortina from 'kth-node-cortina-block'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      secondaryMenu: '',
      megaMenu: '',
      image: '',
      title: '',
      search: ''
    }
  }

  componentDidUpdate() {
    this.componentDidMount()
  }

  componentDidMount() {
    cortina({ url: this.props.url, language: this.props.language }).then(blocks => {
      return this.setState({
        secondaryMenu: blocks.secondaryMenu,
        megaMenu: blocks.megaMenu,
        image: blocks.image,
        title: this.modifyTitle(blocks.title, this.props.appTitle, this.props.appLink),
        search: blocks.search
      })
    })
  }

  modifyTitle(cortinaBlock, appTitle, appLink) {
    if (appTitle) {
      return cortinaBlock.replace(/href=[^.]+<\/a>/, `href="${appLink}">${appTitle}</a>`)
    }
    return cortinaBlock
  }

  concatinateHTML(section) {
    if (section === 'top') {
      return this.state.image + this.state.title + this.state.secondaryMenu
    } else if (section === 'bottom') {
      return this.state.megaMenu + this.state.search
    } else {
      return ''
    }
  }

  render() {
    return (
      <header role="banner">
        <div className="container-fluid">
          <div className="container">
            <div
              className="header-container__top"
              dangerouslySetInnerHTML={{ __html: this.concatinateHTML('top') }}
            />
            <div
              className="header-container__bottom"
              dangerouslySetInnerHTML={{ __html: this.concatinateHTML('bottom') }}
            />
          </div>
        </div>
        <div id="gradientBorder" />
      </header>
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
