interface RegionalHeadProps {
  regionName: string;
  regionTitle: string; // ❗ "청도 크레인" 처럼 | 없이
  keywords: string;
  streetAddress: string;
  addressRegion: string;
  phone: string;
  url: string;
  ogImage?: string;
  areaServed?: string[];
  canonical?: string;
}

export const RegionalHead = ({
  regionName,
  regionTitle,
  keywords,
  streetAddress,
  addressRegion,
  phone,
  url,
  ogImage = "https://static.wixstatic.com/media/6820d4_b8bb9e74216a45bda96bf7cfb92afadd~mv2.png",
  areaServed,
  canonical,
}: RegionalHeadProps) => {

  const fullTitle = `${regionTitle} 크레인 | 삼다8476대한크레인, 대한카고크레인`;

  const description =
    `${regionName} 크레인, ${regionName} 카고크레인, ` +
    `중량물·산업 장비·건설 자재 운송 전문 기업으로 ` +
    `안전하고 효율적인 맞춤형 운송 솔루션을 제공합니다.`;

  const localBusinessSchema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `삼다8476대한크레인 ${regionName}`,
    alternateName: `Daehan Cargo Crane ${regionName}`,
    description,
    url,
    image: ogImage,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: regionName,
      addressRegion,
      addressCountry: "KR",
    },
    priceRange: "$",
  };

  if (areaServed && areaServed.length > 0) {
    localBusinessSchema.areaServed = areaServed;
  }

  return (
    <>
      <title>{fullTitle}</title>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};
