import React from "react";

import LegacyImage from "next/legacy/image"; // old image component
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
  legacy?: boolean;
};

const WebImage = ({ legacy = true, ...props }: Props) => {
  return legacy ? (
    <LegacyImage
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
      layout="responsive"
      className={`object-cover ${props.className} rounded-lg  bg-zinc-200 dark:bg-zinc-800`}
    />
  ) : (
    <Image
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
      layout="responsive"
      className={`${props.className} rounded-md  bg-zinc-200 dark:bg-zinc-800`}
    />
  );
};

export default WebImage;
