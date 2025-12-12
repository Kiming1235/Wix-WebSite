import RegionalPageLayout from '@/components/RegionalPageLayout';
import { RegionalHead } from '@/components/RegionalHead';

const REGION_CONFIG = {
  regionName: '경산',
  regionTitle: '경산 크레인 서비스 | 삼다8476대한크레인',
  keywords: '경산크레인, 경산중량물운송, 경산산업장비운송, 경산건설자재운송, 경산크레인배차, 경산크레인서비스',
  address: '대구광역시 동구 신암남로 145 (신암동)',
  phone: '010-2332-4822',
  url: 'https://www.daehancargocrane.com/gyeongsan-crane',
  customDescription: '각 현장의 특성과 요구사항을 정확히 파악하여 최적화된 맞춤형 솔루션을 제공합니다. 경산 크레인을 비롯해 하양·진량·압량·자인 등 경산 전역의 현장 특성에 맞춘 전문 장비를 활용하여, 안전하고 효율적인 운송 서비스를 통해 고객의 성공적인 프로젝트 완수를 지원합니다.',
  galleryImages: [
    {
      src: 'https://static.wixstatic.com/media/6820d4_56cd0a9079a8496cbb8c6edadc705a7f~mv2.jpeg',
      alt: '경산크레인 작업 현장 1'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_6cfe2e0520664c2f857c1ae73d7fbeea~mv2.jpg',
      alt: '경산크레인 작업 현장 2'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a7c6fd8325564b148b6da8f30ebb37be~mv2.jpg',
      alt: '경산크레인 작업 현장 3'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a82e1c0f6008438da039f08ba1155f90~mv2.jpg',
      alt: '경산크레인 작업 현장 4'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_658942be47c843f09ee467b874a84f09~mv2.jpg',
      alt: '경산크레인 작업 현장 5'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_7d5912f902ed458a9ab081d1f54e1ba2~mv2.jpg',
      alt: '경산크레인 작업 현장 6'
    },
  ],
};

export default function GyeongsanCranePage() {
  return (
    <>
      <RegionalHead
        regionName={REGION_CONFIG.regionName}
        regionTitle={REGION_CONFIG.regionTitle}
        keywords={REGION_CONFIG.keywords}
        address={REGION_CONFIG.address}
        phone={REGION_CONFIG.phone}
        url={REGION_CONFIG.url}
      />
      <RegionalPageLayout
        regionName={REGION_CONFIG.regionName}
        regionTitle={REGION_CONFIG.regionTitle}
        address={REGION_CONFIG.address}
        phone={REGION_CONFIG.phone}
        galleryImages={REGION_CONFIG.galleryImages}
        customDescription={REGION_CONFIG.customDescription}
        showServices={true}
        showStrengths={true}
      />
    </>
  );
}
