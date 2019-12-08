import React from 'react'
import cortina from 'kth-node-cortina-block'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { footer: '' }
  }

  componentDidMount() {
    cortina({ url: this.props.url, language: this.props.language }).then(blocks =>
      this.setState({ footer: blocks.footer })
    )
  }

  render() {
    return (
      <footer role="contentinfo" className="container">
        <div dangerouslySetInnerHTML={{ __html: this.state.footer }} />
      </footer>
    )
  }
}

Footer.defaultProps = {
  url: 'https://www.kth.se/cm/',
  language: 'sv'
}

export default Footer
