import './navbar.css';
import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, StarIcon, BriefcaseIcon , UserPlusIcon  } from '@heroicons/react/24/solid';
import { useState } from 'react';
import ScrollSpy from 'react-scrollspy-navigation';

export default function Navbar() {
  const [menu, setMenu] = useState(false) 

  function handleClick(e) {
    console.log("clicked")
    setMenu(prev => !prev)
  }

  const onClickEach = (e, next, container) => {
    console.log('The clicked element:', e.target);
    console.log('The target container element:', container);
    next();
  };

  const Navs = [
    {name: 'Home', icon: HomeIcon, isActive: false, href: '#hero'},
    {name: 'About', icon: UserIcon, isActive: false, href: '#about'},
    {name: 'Skills', icon: StarIcon, isActive: false, href: '#skills'},
    {name: 'Works', icon: BriefcaseIcon, isActive: false, href: '#works'},
    {name: 'Contact', icon: UserPlusIcon, isActive: false, href: '#contact'},
  ]
    return (
        <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <h2>Sangram Kishor</h2> */}
            <img src="images/sk1.svg" width={54} alt="SK" />  
          </a>         
          <button className='menu-btn' onClick={() => handleClick()}>
            {menu ? 
            <XMarkIcon className='bars-icon' /> :
            <Bars3Icon className='bars-icon' /> } 
            </button> 

            <div className={`navbar-nav ${menu ? "show" : ""}`}>
              <ScrollSpy activeClass='active' onClickEach={onClickEach}>
                
              {Navs.map((nav, i) => (
                <a key={i} className={`nav-link`} href={nav.href}>
                <nav.icon id='home' className='nav-icon'/> <span>{nav.name}</span>
                </a>
              ))}
              
              </ScrollSpy>
              
            </div> 
                    
        </div>
      </nav>
    )
}