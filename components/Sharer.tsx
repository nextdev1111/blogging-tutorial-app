import React, { SVGProps } from "react";
import { ShareIcon } from "@heroicons/react/24/outline";
import { BsWhatsapp, BsTwitter, BsTelegram } from "react-icons/bs";

type Props = { blog: Blog };

export const ShareButton = ({
  Icon,
  title,
  onClick,
  className,
}: {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`text-white w-full items-center justify-center flex space-x-2 px-3 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {/* logo */}
      <div>
        <Icon className="w-5 h-5" />
      </div>
      {/* text */}
      <div>{title}</div>
    </button>
  );
};

const Sharer = ({ blog }: Props) => {
  const blogLink = `https://blogging-tutorial-app.vercel.app/blog/${blog.slug}`;

  // native share
  const nativeShare = () => {
    navigator.share({
      title: blog.title,
      url: blogLink,
      text: blog.description,
    });
  };

  //   whatsapp share
  const whatsappShare = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${blogLink} ${blog.title}`,
      "_blank"
    );
  };

  //   telegram share
  const telegramShare = () => {
    window.open(
      `https://t.me/share/url?url=${blogLink}&text=${blog.title}`,
      "_blank"
    );
  };

  //   twitter share
  const twitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet/?url=${blogLink}&text=${blog.title}&via=NextDev1111`,
      "_blank"
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {/* native share */}
      <div className="cols-span-1">
        <ShareButton
          Icon={ShareIcon}
          title="Share"
          className="bg-zinc-800"
          onClick={nativeShare}
        />
      </div>

      {/* whatsapp share */}
      <div className="cols-span-1">
        <ShareButton
          Icon={BsWhatsapp}
          title="Whatsapp"
          className="bg-green-500"
          onClick={whatsappShare}
        />
      </div>

      {/* telegram share */}
      <div className="cols-span-1">
        <ShareButton
          Icon={BsTelegram}
          title="Telegram"
          className="bg-blue-500"
          onClick={telegramShare}
        />
      </div>

      {/* twitter share */}
      <div className="cols-span-1">
        <ShareButton
          Icon={BsTwitter}
          title="Twitter"
          className="bg-sky-500"
          onClick={twitterShare}
        />
      </div>
    </div>
  );
};

export default Sharer;
