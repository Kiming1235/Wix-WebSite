export const Head = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "대한카고크레인",
    "alternateName": "Daehan Cargo Crane",
    "description":
      "대구광역시 동구 신암남로 145(신암동)에 위치한 중량물·산업 장비·건설 자재 운송 전문 기업입니다. 안전하고 효율적인 크레인 연계 운송 솔루션을 제공합니다.",
    "url": "https://www.daehancargocrane.com",
    "image": "https://static.wixstatic.com/media/6820d4_b8bb9e74216a45bda96bf7cfb92afadd~mv2.png",
    "telephone": "010-2332-4822",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "신암남로 145",
      "addressLocality": "동구",
      "addressRegion": "대구광역시",
      "postalCode": "",
      "addressCountry": "KR"
    },
    "areaServed": "KR",
    "priceRange": "$",
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/"
    ]
  };

  return (
    <>
      <title>대한카고크레인 | 중량물·산업 장비 운송 전문 기업</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="대한카고크레인은 중량물, 산업 장비, 건설 자재 운송 전문 기업으로, 안전하고 효율적인 맞춤형 운송 솔루션을 제공합니다."
      />
      <meta
        name="naver-site-verification"
        content="4775914a9f3ec89f8319d68d878db78083e33fc2"
      />
      <meta
        name="naver-site-verification"
        content="c11cba63c6d7d068d4ad3d7e96912b1392370252"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://static.wixstatic.com/media/6820d4_b8bb9e74216a45bda96bf7cfb92afadd~mv2.png"
      />
      <link rel="preconnect" href="https://static.parastorage.com" />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </>
  );
};
