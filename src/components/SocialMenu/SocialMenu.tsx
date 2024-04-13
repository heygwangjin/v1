import MenuWrapper from '@/components/MenuWrapper';
import GithubIcon from '@/components/GithubIcon';
import XIcon from '@/components/XIcon';
import IconLinkWrapper from '@/components/IconLinkWrapper';

function SocialMenu() {
  return (
    <MenuWrapper showOnMobile={false}>
      <div className="flex items-center justify-between gap-2 sm:gap-4 rounded-full py-1 px-4 text-neutral-600 dark:text-neutral-400">
        <IconLinkWrapper href="https://github.com/heygwangjin" label="github">
          <GithubIcon />
        </IconLinkWrapper>
        <IconLinkWrapper href="https://twitter.com/heygwangjin" label="x">
          <XIcon />
        </IconLinkWrapper>
      </div>
    </MenuWrapper>
  );
}

export default SocialMenu;
