import React from 'react';
import ButtonPhone from './ButtonPhone';

const navigation = [
  { name: 'Qui suis-je ?', href: '#qui' },
  { name: 'blog', href: '#' },
  { name: 'Contact', href: '#' },
]

const NavBar = () => {
    return (
        <header className='text-text'>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Trouver-mon-chantier</span>
                        <img className="h-12 w-auto" src="/logo/logo.png" alt="trouver-mon-chantier" />
                    </a>
                </div>
                <div>
                    {navigation.map((item) => (
                        <a href={item.href} className='mr-7'>{item.name}</a>    
                    ))
                    }
                </div>
                <ButtonPhone />
            </nav>
        </header>
    );
};

export default NavBar;