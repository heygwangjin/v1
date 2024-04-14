import GithubIcon from "@/components/GithubIcon";
import IconLinkWrapper from "@/components/IconLinkWrapper";
import MenuWrapper from "@/components/MenuWrapper";
import XIcon from "@/components/XIcon";
import MailIcon from "@/components/MailIcon";

function SocialMenu() {
  return (
    <MenuWrapper showOnMobile={false}>
      <div className="flex items-center justify-between gap-2 rounded-full px-4 py-1 text-neutral-600 sm:gap-4 dark:text-neutral-400">
        <IconLinkWrapper href="https://github.com/heygwangjin" label="github">
          <GithubIcon />
        </IconLinkWrapper>
        <IconLinkWrapper href="https://twitter.com/heygwangjin" label="x">
          <XIcon />
        </IconLinkWrapper>
        <IconLinkWrapper href="mailto:heygwangjin@gmail.com" label="mail">
          <MailIcon />
        </IconLinkWrapper>
      </div>
    </MenuWrapper>
  );
}

export default SocialMenu;
