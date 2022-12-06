import React from "react";

type Props = {};

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target={"_blank"}
      className="text-zinc-500 hover:text-zinc-600 transition"
    >
      {children}
    </a>
  );
};

function Footer({}: Props) {
  return (
    <div className="flex flex-col justify-center my-4">
      <hr className="w-full border-1 border-zinc-200 dark:border-zinc-800 mb-8" />

      {/* website links */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-md font-bold">Social Links</h1>

        {/* youtube */}
        <ExternalLink href="https://www.youtube.com/channel/UCZHC5DaOrrDRoWLrITREpMA">
          Youtube
        </ExternalLink>
        {/* medium */}
        <ExternalLink href="https://medium.com/@nextdevelopment1111">
          Medium
        </ExternalLink>
        {/* twitter */}
        <ExternalLink href="https://twitter.com/NextDev1111">
          Twitter
        </ExternalLink>
      </div>
    </div>
  );
}

export default Footer;
