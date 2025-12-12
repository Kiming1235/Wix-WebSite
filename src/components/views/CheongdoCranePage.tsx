import RegionalPageLayout from '@/components/RegionalPageLayout';
import { RegionalHead } from '@/components/RegionalHead';

const REGION_CONFIG = {
  regionName: '청도',
  regionTitle: '청도 크레인 서비스 | 삼다8476대한크레인',
  keywords: '청도크레인, 청도중량물운송, 청도산업장비운송, 청도건설자재운송, 청도크레인배차, 청도크레인서비스',
  address: '대구광역시 동구 신암남로 145 (신암동)',
  phone: '010-2332-4822',
  url: 'https://www.daehancargocrane.com/cheongdo-crane',
  galleryImages: [
    {
      src: 'https://static.wixstatic.com/media/6820d4_56cd0a9079a8496cbb8c6edadc705a7f~mv2.jpeg',
      alt: '청도크레인 작업 현장 1'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_6cfe2e0520664c2f857c1ae73d7fbeea~mv2.jpg',
      alt: '청도크레인 작업 현장 2'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a7c6fd8325564b148b6da8f30ebb37be~mv2.jpg',
      alt: '청도크레인 작업 현장 3'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a82e1c0f6008438da039f08ba1155f90~mv2.jpg',
      alt: '청도크레인 작업 현장 4'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_658942be47c843f09ee467b874a84f09~mv2.jpg',
      alt: '청도크레인 작업 현장 5'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_7d5912f902ed458a9ab081d1f54e1ba2~mv2.jpg',
      alt: '청도크레인 작업 현장 6'
    },
  ],
};

export default function CheongdoCranePage() {
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
