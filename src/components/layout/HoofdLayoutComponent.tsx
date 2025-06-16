import React from 'react';
import KoptekstComponent from './KoptekstComponent';
import VoettekstComponent from './VoettekstComponent';
import { ScrollToTopOnMount } from '../ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <ScrollToTopOnMount />
      <KoptekstComponent />
      <main className="flex-grow w-full pt-12 sm:pt-16 transition-all duration-300">
        <div className="opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]">
          {children}
        </div>
      </main>



      <VoettekstComponent />
    </div>
  );
};

export default Layout;
