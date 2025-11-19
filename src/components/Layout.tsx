import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '홈', href: '/' },
    { name: '연락처', href: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary/20">
        <nav className="max-w-[100rem] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-heading font-bold text-primary">
              대한카고크레인
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-paragraph transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:010-0000-0000">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="w-4 h-4 mr-2" />
                  010-0000-0000
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-4 pb-4 border-t border-secondary/20"
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-paragraph transition-colors ${
                        location.pathname === item.href
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a href="tel:010-0000-0000" className="pt-2">
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      010-0000-0000
                    </Button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark-gray border-t border-secondary/20 py-16 px-6">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">대한카고크레인</h3>
              <p className="font-paragraph text-secondary-foreground mb-4">
                믿을 수 있는 중량물 운송 및 장비 연계 서비스
              </p>
              <p className="font-paragraph text-secondary-foreground text-sm">
                안전하고 신속한 운송 솔루션으로<br />
                고객의 성공적인 프로젝트를 지원합니다.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="font-paragraph text-secondary-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">연락처</h4>
              <div className="space-y-2 font-paragraph text-secondary-foreground">
                <p>
                  <span className="text-foreground">전화:</span>{' '}
                  <a href="tel:010-0000-0000" className="text-primary hover:text-primary/80">
                    010-0000-0000
                  </a>
                </p>
                <p>
                  <span className="text-foreground">이메일:</span>{' '}
                  <a href="mailto:info@daehancargo.co.kr" className="text-primary hover:text-primary/80">
                    info@daehancargo.co.kr
                  </a>
                </p>
                <p>
                  <span className="text-foreground">주소:</span><br />
                  서울특별시 강남구 테헤란로 123
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-secondary-foreground text-sm">
              © 2024 대한카고크레인. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}