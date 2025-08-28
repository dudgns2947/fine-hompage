import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationMenu } from '@/data/dummyData';

const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $isScrolled }) => 
    $isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)'};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ $isScrolled }) => 
    $isScrolled ? 'rgba(233, 236, 239, 0.8)' : 'var(--border-color)'};
  transition: var(--transition);
  box-shadow: ${({ $isScrolled }) => 
    $isScrolled ? 'var(--shadow)' : 'none'};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 70px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;

  img {
    width: 160px;
    height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    
    img {
      width: 120px;
      height: 30px;
    }
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
    background: rgba(255, 107, 53, 0.1);
  }
`;

const SubMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-hover);
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 1001;
`;

const SubMenuItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    background: var(--bg-secondary);
    color: var(--primary-color);
  }
`;

interface MobileMenuButtonProps {
  $isOpen: boolean;
}

const MobileMenuButton = styled.button<MobileMenuButtonProps>`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: var(--transition);
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $isOpen }) => 
        $isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => 
        $isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 1rem 2rem;
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    background: var(--bg-secondary);
    color: var(--primary-color);
  }
`;

const MobileSubMenu = styled.div`
  background: var(--bg-secondary);
`;

const MobileSubMenuItem = styled(Link)`
  display: block;
  padding: 0.75rem 3rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <HeaderContent>
        <Logo href="/">
          <Image 
            src="/image/logo.png" 
            alt="FINE 로고" 
            width={160} 
            height={40}
          />
        </Logo>

        <DesktopNav>
          {navigationMenu.map((item) => (
            <NavItem
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink href={item.href}>
                {item.title}
              </NavLink>
              
              <AnimatePresence>
                {hoveredItem === item.id && item.subMenu.length > 0 && (
                  <SubMenu
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.subMenu.map((subItem) => (
                      <SubMenuItem key={subItem.href} href={subItem.href}>
                        {subItem.title}
                      </SubMenuItem>
                    ))}
                  </SubMenu>
                )}
              </AnimatePresence>
            </NavItem>
          ))}
        </DesktopNav>

        <MobileMenuButton
          $isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>
      </HeaderContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navigationMenu.map((item) => (
              <MobileNavItem key={item.id}>
                <MobileNavLink 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </MobileNavLink>
                {item.subMenu.length > 0 && (
                  <MobileSubMenu>
                    {item.subMenu.map((subItem) => (
                      <MobileSubMenuItem 
                        key={subItem.href} 
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </MobileSubMenuItem>
                    ))}
                  </MobileSubMenu>
                )}
              </MobileNavItem>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
