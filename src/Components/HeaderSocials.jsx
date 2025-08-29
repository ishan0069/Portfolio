import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="http://linkedin.com" target="_blank"><AiFillLinkedin /></a>
      <a href="http://github.com" target="_blank"><AiFillGithub /></a>
      <a href="http://dribble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials;
