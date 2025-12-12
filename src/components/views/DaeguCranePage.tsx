import RegionalPageLayout from '@/components/RegionalPageLayout';
import { RegionalHead } from '@/components/RegionalHead';

export default function DaeguCranePage() {
  const galleryImages = [
    {
      src: 'https://static.wixstatic.com/media/6820d4_56cd0a9079a8496cbb8c6edadc705a7f~mv2.jpeg',
      alt: '대구크레인 작업 현장 1'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_6cfe2e0520664c2f857c1ae73d7fbeea~mv2.jpg',
      alt: '대구크레인 작업 현장 2'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a7c6fd8325564b148b6da8f30ebb37be~mv2.jpg',
      alt: '대구크레인 작업 현장 3'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a82e1c0f6008438da039f08ba1155f90~mv2.jpg',
      alt: '대구크레인 작업 현장 4'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_658942be47c843f09ee467b874a84f09~mv2.jpg',
      alt: '대구크레인 작업 현장 5'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_7d5912f902ed458a9ab081d1f54e1ba2~mv2.jpg',
      alt: '대구크레인 작업 현장 6'
    },
  ];

  return (
    <>
      <RegionalHead
        regionName="대구"
        regionTitle="대구 크레인 서비스 | 삼다8476대한크레인"
        description="대구 지역의 모든 건설 현장, 산업 시설, 물류 센터에서 필요한 크레인 서비스를 제공합니다. 24시간 배차 시스템으로 언제든지 신속한 대응이 가능하며, 대구 지역 전문가 팀이 안전하고 효율적인 솔루션을 제공합니다."
        keywords="대구크레인, 대구중량물운송, 대구산업장비운송, 대구건설자재운송, 대구크레인배차, 대구크레인서비스"
        address="대구광역시 동구 신암남로 145 (신암동)"
        phone="010-2332-4822"
        url="https://www.daehancargocrane.com/daegu-crane"
      />
      <RegionalPageLayout
        regionName="대구"
        regionTitle="대구 크레인 서비스"
        description="대구 지역의 모든 건설 현장, 산업 시설, 물류 센터에서 필요한 크레인 서비스를 제공합니다. 24시간 배차 시스템으로 언제든지 신속한 대응이 가능하며, 대구 지역 전문가 팀이 안전하고 효율적인 솔루션을 제공합니다."
        address="대구광역시 동구 신암남로 145 (신암동)"
        phone="010-2332-4822"
        galleryImages={galleryImages}
      />
    </>
  );
}
