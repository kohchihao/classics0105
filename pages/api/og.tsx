import {
  backgroundSrc,
  DEFAULT_SUBTITLE,
  DEFAULT_TITLE,
  interExtraBold,
  interLight,
} from '@lib/og/assets';
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

function queryValue(value: string | null) {
  return (value || '').replace(/\s+/g, ' ').trim().slice(0, 200);
}

export default async function handler(req: NextRequest) {
  if (req.method !== 'GET') {
    return new Response('Method not allowed', {
      status: 405,
      headers: { Allow: 'GET' },
    });
  }

  const { searchParams } = new URL(req.url);
  const title = queryValue(searchParams.get('title')) || DEFAULT_TITLE;
  const subtitle = queryValue(searchParams.get('subtitle')) || DEFAULT_SUBTITLE;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#111111',
        }}
      >
        {/* Satori renders a plain img; next/image cannot run inside ImageResponse. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={backgroundSrc}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: 'flex',
            background:
              'linear-gradient(to right, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0))',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 1200,
            height: 630,
            padding: 48,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: 1104,
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: 'white',
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: 1104,
              marginTop: 16,
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: 32,
              fontWeight: 300,
              letterSpacing: '-0.05em',
              color: 'white',
              lineHeight: 1.3,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interLight,
          weight: 300,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interExtraBold,
          weight: 800,
          style: 'normal',
        },
      ],
      headers: {
        'cache-control': 'public, max-age=3600, s-maxage=86400',
      },
    },
  );
}
