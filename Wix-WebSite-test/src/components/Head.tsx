export const Head = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "삼다8476대한크레인, 대한카고크레인",
    alternateName: "Daehan Cargo Crane",
    description:
      "대구광역시 동구 신암남로 145(신암동)에 위치한 중량물·산업 장비·건설 자재 운송 전문 기업입니다. 안전하고 효율적인 크레인 연계 운송 솔루션을 제공합니다.",
    url: "https://www.daehancargocrane.com",
    image:
      "https://static.wixstatic.com/media/6820d4_b8bb9e74216a45bda96bf7cfb92afadd~mv2.png",
    telephone: "010-2332-4822",
    address: {
      "@type": "PostalAddress",
      streetAddress: "신암남로 145",
      addressLocality: "동구",
      addressRegion: "대구광역시",
      postalCode: "",
      addressCountry: "KR",
    },
    areaServed: "KR",
    priceRange: "$",
  };

  return (
    <>
      <title>삼다8476대한크레인, 대한카고크레인 | 중량물·산업 장비 운송 전문 기업</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="삼다8476대한크레인, 대한카고크레인은 중량물, 산업 장비, 건설 자재 운송 전문 기업으로, 안전하고 효율적인 맞춤형 운송 솔루션을 제공합니다."
      />
      <meta
        name="keywords"
        content="삼다8476대한크레인, 대한카고크레인, 경산크레인, 대구크레인, 경주크레인, 구미크레인, 성주크레인, 중량물 운송, 산업 장비 운송"
      />
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

      {/* ✅ Open Graph (SNS / 네이버 프리뷰용) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.daehancargocrane.com" />
      <meta property="og:title" content="삼다8476대한크레인, 대한카고크레인 | 중량물·산업 장비 운송 전문 기업" />
      <meta property="og:description" content="삼다8476대한크레인, 대한카고크레인은 대구·경산·경주·구미·성주 지역에서 중량물, 산업 장비, 건설 자재 운송을 전문으로 하는 기업입니다." />
      <meta property="og:image" content="https://www.daehancargocrane.com/favicon-192.png" />

      <link rel="preconnect" href="https://static.parastorage.com" />

      {/* ✅ 구조화 데이터 (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};
