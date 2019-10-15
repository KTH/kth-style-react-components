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
      search: '',
    }
  }
  componentDidMount() {
    cortina({url: this.props.url})
      .then(blocks => {
        return this.setState({
          secondaryMenu: blocks.secondaryMenu,
          megaMenu: blocks.megaMenu,
          image: blocks.image,
          title: blocks.title,
          search: blocks.search,
        })
      })
  }

  render () {
    return <header role="banner">
      <div className="container-fluid">
        <div className="container">
          <div className="header-container__top">
            <div dangerouslySetInnerHTML={{__html: this.state.image}} />
            <div dangerouslySetInnerHTML={{__html: this.state.title}} />
            <div dangerouslySetInnerHTML={{__html: this.state.secondaryMenu}} />
          </div>
          <div className="header-container__bottom">
            <div dangerouslySetInnerHTML={{__html: this.state.megaMenu}} />
            <div dangerouslySetInnerHTML={{__html: this.state.search}} />
          </div>
        </div>
      </div>
      <div id="gradientBorder" />
    </header>
  }
}

Header.defaultProps = {
  url: 'https://www-r.referens.sys.kth.se/cm/',
}

export default Header