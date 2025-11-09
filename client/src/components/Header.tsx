import { Link, useLocation } from 'wouter';
import { ThemeToggle } from './ThemeToggle';
import { Terminal } from 'lucide-react';

export function Header() {
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/projects', label: 'projects' },
    { path: '/skills', label: 'skills' },
    { path: '/testimonials', label: 'testimonials' },
    { path: '/contact', label: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" data-testid="header-main">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-logo">
            <Terminal className="w-5 h-5 text-primary" data-testid="icon-terminal-logo" />
            <span className="font-mono font-bold text-primary" data-testid="text-logo">MacMoment</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-mono text-sm px-4 py-2 rounded-md transition-colors hover-elevate active-elevate-2 ${
                  location === item.path
                    ? 'text-primary bg-muted'
                    : 'text-muted-foreground'
                }`}
                data-testid={`link-nav-${item.label}`}
              >
                $ {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
