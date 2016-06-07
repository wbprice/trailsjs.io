import React, { Component, PropTypes } from 'react'

class Header extends Component {

  render() {

    return (
      <header className="trails-header">
        <div className="container">
          <a href="/">
            <img className="trails-logo"  src="dist/img/trails-logo-small.svg" alt="Trails logo" />
          </a>

          <nav>

            <a href="#" id="menu-icon"></a>

          <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Features</a></li>
              <li><a href="/docs">Documentation</a></li>
            </ul>

          </nav>

        </div>
      </header>
    )
  }

}

Header.propTypes = {
  smallScreen: PropTypes.bool
}

export default Header
