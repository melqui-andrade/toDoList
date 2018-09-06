import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import '../template/custon.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routers'

export default props => (
    <div className='container'>
        <Menu/>
        <Routes/>
    </div>
)