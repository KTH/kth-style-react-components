import React from 'react'
import cortina from 'kth-node-cortina-block'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = { footer: '' }
  }

  componentDidMount() {
    cortina({url: this.props.url})
      .then(blocks => this.setState({ footer: blocks.footer }))
  }

  render () {
    return <footer role="contentinfo" className="container">
      <div dangerouslySetInnerHTML={{__html: this.state.footer}} />
    </footer>
  }
}

Footer.defaultProps = {
  url: 'https://www-r.referens.sys.kth.se/cm/',
};

export default Footer