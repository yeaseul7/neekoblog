---
title: 페이지마다 meta 설정하기
date: "2025-12-08T12:40:56.789Z"
description: 꼬순내를 개발하면서 페이지 공유 할때 meta 설정하기
category: Frontend
---

### 개요

![before](../setSeo/before.png)
기존에 어떤 페이지든 위처럼 보이던 방식을
페이지마다 사진과 글이 포함되면 그 내용을 보여주도록 설정한다.

stack: next.js, firebase

useParams에서 Id를 가져와서 firebase에서 검색 후 페이지 데이터를 가져온다.

가져온 데이터로 metadata를 설정해야하는데 이때 metadata는 "use client"를 사용해선 안되고 서버에서 작업이 이루어져야한다.

#### Why?

검색엔진과 소셜미디어 Bot은 javascript를 실행하지 않고 HTML만 읽어간다.

link를 통해 meta데이터를 파악하고 보여줄 때 직접 홈페이지에 들어가서 javascript를 모두 실행하는것을 기다려주지 않는다.
"use client"는 빈 HTML을 받고 javascript 번들을 다운 후 실행한다.
SSR은 서버에서 데이서 fetching을 완료하고 metadata가 포함된 HTML을 생성해서 보낸다.
따라서 봇이 바로 접속하자마자 tag나 meta data를 읽을 수 있다.

Open Graph의 경우
URL에 get 요청을 보낸후 반환되는 head에 포함된 metadata를 긁는다.

### How

"use client"로 되어있는 부분을 client Component로 분리하고 page.tsx에서는 SSR 방식으로 진행했다.

```
import { Metadata } from 'next';
import ReadPostContent from '@/packages/ui/components/home/read/ReadPostContent';
import { getPostById } from '@/lib/api/post';

function extractText(html: string | undefined): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFirstImage(html: string | undefined): string | null {
  if (!html || typeof html !== 'string') {
    return null;
  }
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;
  const match = html.match(imgRegex);
  return match && match[1] ? match[1] : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id: postId } = await params;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    'http://localhost:3001';

  try {
    const post = await getPostById(postId);

    if (post) {
      const title = post.title || '게시물';
      const description =
        extractText(post.content).substring(0, 160) || '꼬순내 게시물';

      let imageUrl = extractFirstImage(post.content);
      if (imageUrl) {
        if (imageUrl.startsWith('/')) {
          imageUrl = `${baseUrl}${imageUrl}`;
        } else if (!imageUrl.startsWith('http')) {
          imageUrl = `${baseUrl}/${imageUrl}`;
        }
      } else {
        imageUrl = `${baseUrl}/static/images/defaultDogImg.png`;
      }

      const url = `${baseUrl}/read/${postId}`;

      return {
        title: `${title} | 꼬순내`,
        description,
        metadataBase: new URL(baseUrl),
        openGraph: {
          title,
          description,
          url,
          siteName: '꼬순내',
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          locale: 'ko_KR',
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          images: [imageUrl],
        },
      };
    }
  } catch (error) {
    console.error('메타데이터 생성 중 오류:', error);
  }

  const defaultImageUrl = `${baseUrl}/static/images/defaultDogImg.png`;

  return {
    title: '게시물 | 꼬순내',
    description: '꼬순내 게시물',
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: '게시물 | 꼬순내',
      description: '꼬순내 게시물',
      url: `${baseUrl}/read/${postId}`,
      siteName: '꼬순내',
      images: [
        {
          url: defaultImageUrl,
          width: 1200,
          height: 630,
          alt: '꼬순내',
        },
      ],
      locale: 'ko_KR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: '게시물 | 꼬순내',
      description: '꼬순내 게시물',
      images: [defaultImageUrl],
    },
  };
}

export default async function ReadPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: postId } = await params;
  const post = await getPostById(postId);

  return <ReadPostContent postId={postId} initialPost={post} />;
}
```
