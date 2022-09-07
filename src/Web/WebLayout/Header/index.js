import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header
      id='listar-header'
      className='listar-header cd-auto-hide-header listar-headervthree listar-haslayout'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <strong className='listar-logo'>
              <Link to='/'>TradeMe</Link>
            </strong>
            <nav className='listar-addnav'>
              <ul>
                <li>
                  <Link
                    id='listar-btnsignin'
                    className='listar-btn listar-btnblue'
                    to='#listar-loginsingup'>
                    <i className='icon-smiling-face'></i>
                    <span>Join Now</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='listar-btn listar-btngreen'
                    to='/dashboard/add'>
                    <i className='icon-plus'></i>
                    <span>Add Listing</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id='listar-nav' className='listar-nav'>
              <div className='navbar-header'>
                <button
                  type='button'
                  className='navbar-toggle collapsed'
                  data-toggle='collapse'
                  data-target='#listar-navigation'
                  aria-expanded='false'>
                  <span className='sr-only'>Toggle navigation</span>
                </button>
              </div>
              <div id='listar-navigation' className='collapse navbar-collapse listar-navigation'>
                <ul>
                    <li className='menu-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='menu-item-has-children'>
                        <Link to='#'>Explore</Link>
                        <ul className='sub-menu'>

                        </ul>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
