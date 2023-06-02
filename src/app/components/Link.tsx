'use client';
import { AppProps } from 'next/app';
import React from 'react';

export default function Link({
  text,
  url = '#',
  onClick = null,
}: {
  text: string;
  url: string;
  onClick?: Function | null;
}) {
  return (
    <a
      href={url}
      {...(onClick && {
        onClick: onClick,
      })}
    >
      {text}
    </a>
  );
}
