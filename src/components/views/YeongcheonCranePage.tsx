import RegionalPageLayout from '@/components/RegionalPageLayout';
import { RegionalHead } from '@/components/RegionalHead';

const REGION_CONFIG = {
  regionName: '영천',
  regionTitle: '영천 크레인 서비스 | 삼다8476대한크레인',
  keywords: '영천크레인, 영천중량물운송, 영천산업장비운송, 영천건설자재운송, 영천크레인배차, 영천크레인서비스',
  address: '대구광역시 동구 신암남로 145 (신암동)',
  phone: '010-2332-4822',
  url: 'https://www.daehancargocrane.com/yeongcheon-crane',
  galleryImages: [
    {
      src: 'https://static.wixstatic.com/media/6820d4_56cd0a9079a8496cbb8c6edadc705a7f~mv2.jpeg',
      alt: '영천크레인 작업 현장 1'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_6cfe2e0520664c2f857c1ae73d7fbeea~mv2.jpg',
      alt: '영천크레인 작업 현장 2'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a7c6fd8325564b148b6da8f30ebb37be~mv2.jpg',
      alt: '영천크레인 작업 현장 3'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a82e1c0f6008438da039f08ba1155f90~mv2.jpg',
      alt: '영천크레인 작업 현장 4'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_658942be47c843f09ee467b874a84f09~mv2.jpg',
      alt: '영천크레인 작업 현장 5'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_7d5912f902ed458a9ab081d1f54e1ba2~mv2.jpg',
      alt: '영천크레인 작업 현장 6'
    },
  ],
};

export default function YeongcheonCranePage() {
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
      />
    </>
  );
}
