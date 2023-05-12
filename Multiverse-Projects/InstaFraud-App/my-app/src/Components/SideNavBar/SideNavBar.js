import React from 'react'
import './SideNavStyle.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {InstFraudContext} from '../../Context/Context'
import { Link } from 'react-router-dom';

function SideNavBar() {

  const {isTwittClicked, setIsTwittClicked} = React.useContext(InstFraudContext)

  return (
     <div className='sidebarNav'>
            <Link to='/dashboard'>
              <HomeIcon/>
            </Link>
            <SearchOutlinedIcon/>
            <PostAddIcon onClick={()=>setIsTwittClicked(true)}/>
            <Link to='/profile'>
              <PersonPinIcon/>
            </Link>
            <Link to='/login'>
              <PowerSettingsNewIcon/>
            </Link>
     </div>
  )
}

export default SideNavBar