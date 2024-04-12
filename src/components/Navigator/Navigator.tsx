import MainMenu from '@/components/MainMenu';
import ThemeToggle from '@/components/ThemeToggle';

function Navigator({ theme }: { theme: string }) {
  return (
    <nav className="fixed bottom-8 lg:top-8 left-1/2 -translate-x-1/2 h-fit max-w-screen-lg z-50 flex justify-center items-center gap-2 md:gap-4 flex-nowrap">
      <MainMenu />
      {/* TODO: Social Media (GitHub, X) */}
      <ThemeToggle initialTheme={theme as 'light' | 'dark'} />
    </nav>
  );
}

export default Navigator;
