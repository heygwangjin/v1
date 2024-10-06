import MainMenu from '@/components/MainMenu';
import SocialMenu from '@/components/SocialMenu';
import ThemeToggle from '@/components/ThemeToggle';

function Navigator({ theme }: { theme: string }) {
  return (
    <nav
      className="fixed bottom-8 left-1/2 z-50 flex h-fit max-w-screen-lg
        -translate-x-1/2 flex-nowrap items-center justify-center gap-2 md:gap-4
        lg:top-8"
    >
      <MainMenu />
      <SocialMenu />
      <ThemeToggle initialTheme={theme as 'light' | 'dark'} />
    </nav>
  );
}

export default Navigator;
