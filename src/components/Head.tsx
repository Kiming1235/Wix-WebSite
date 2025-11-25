export const Head = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "대한카고크레인",
    "alternateName": "Daehan Cargo Crane",
    "description": "최적화된 맞춤형 운송 솔루션과 안전하고 효율적인 작업을 통해 고객의 성공적인 프로젝트 완수를 지원하는 중량물·산업 장비 운송 전문 기업",
    "url": "https://daehan-cargo-crane.com",
    "image": "https://static.wixstatic.com/media/6820d4_b8bb9e74216a45bda96bf7cfb92afadd~mv2.png",
    "telephone": "",
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
      <meta name="description" content="최적화된 맞춤형 운송 솔루션과 안전하고 효율적인 작업을 통해 고객의 성공적인 프로젝트 완수를 지원합니다." />
      <meta name="naver-site-verification" content="4775914a9f3ec89f8319d68d878db78083e33fc2" />
      <meta name="naver-site-verification" content="c11cba63c6d7d068d4ad3d7e96912b1392370252" />
      {/* Favicon */}
      <link rel="icon" type="image/png" href="https://static.wixstatic.com/media/6820d4_b8bb9e74216a45bda96bf7cfb92afadd~mv2.png" />
      {/* Fonts */}
      <link rel="preconnect" href="https://static.parastorage.com" />
      {/* LocalBusiness Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </>
  );
};
