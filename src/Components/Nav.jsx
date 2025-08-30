import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { SiSkillshare } from 'react-icons/si';
import { AiFillProject } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';
import './nav.css';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className= {activeNav === '#'? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className= {activeNav === '#about'? 'active' : ''}><FaUserAlt /></a>
      <a href="#skill" onClick={()=> setActiveNav('#skill')} className= {activeNav === '#skill'? 'active' : ''}><SiSkillshare /></a>
      <a href="#project" onClick={()=> setActiveNav('#project')} className= {activeNav === '#project'? 'active' : ''}><AiFillProject /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className= {activeNav === '#contact'? 'active' : ''}><GrContact /></a>
    </nav>
  )
}

export default Nav;