interface RegionalHeadProps {
  regionName: string;
  regionTitle: string;
  keywords: string;
  address: string;
  phone: string;
  url: string;
}

export const RegionalHead = ({
  regionName,
  regionTitle,
  keywords,
  address,
  phone,
  url,
}: RegionalHeadProps) => {
  // 지역명에 맞게 자동으로 소개 문구 생성
  const description = `${regionName}크레인, ${regionName}카고크레인 중량물, 산업 장비, 건설 자재 운송 전문 기업으로, 안전하고 효율적인 맞춤형 운송 솔루션을 제공합니다.`;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `삼다8476대한크레인 ${regionName}`,
    alternateName: `Daehan Cargo Crane ${regionName}`,
    description: description,
    url: url,
    image: "https://static.wixstatic.com/media/6820d4_b8bb9e74216a45bda96bf7cfb92afadd~mv2.png",
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: regionName,
      addressRegion: "대구광역시",
      postalCode: "",
      addressCountry: "KR",
    },
    areaServed: "KR",
    priceRange: "$",
  };

  return (
    <>
      <title>{regionTitle} | 삼다8476대한크레인, 대한카고크레인</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="naver-site-verification"
        content="4775914a9f3ec89f8319d68d878db78083e33fc2"
      />
      <meta
        name="naver-site-verification"
        content="c11cba63c6d7d068d4ad3d7e96912b1392370252"
      />
      <meta
        name="google-site-verification"
        content="V_Dy82B1500RiHa5FShJi7-d07BCH05W-UTlqrYMLLs"
      />

      {/* Favicon - Standard */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

      {/* Apple Icons - iOS */}
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="apple-touch-icon-precomposed" href="/apple-icon-precomposed.png" />

      {/* Android Icons */}
      <link rel="icon" type="image/png" sizes="36x36" href="/android-icon-36x36.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/android-icon-48x48.png" />
      <link rel="icon" type="image/png" sizes="72x72" href="/android-icon-72x72.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/android-icon-96x96.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="/android-icon-144x144.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />

      {/* Microsoft Icons - Windows */}
      <link rel="icon" type="image/png" sizes="70x70" href="/ms-icon-70x70.png" />
      <link rel="icon" type="image/png" sizes="150x150" href="/ms-icon-150x150.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="/ms-icon-144x144.png" />
      <link rel="icon" type="image/png" sizes="310x310" href="/ms-icon-310x310.png" />

      {/* Manifest & Browser Config */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#1E293B" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#1E293B" />

      {/* Open Graph (SNS / 네이버 프리뷰용) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={regionTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.daehancargocrane.com/favicon-192.png" />

      <link rel="preconnect" href="https://static.parastorage.com" />

      {/* 구조화 데이터 (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};
