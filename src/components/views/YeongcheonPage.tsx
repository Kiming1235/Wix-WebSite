import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Package, Building, Wrench, Shield, Clock, Target, Phone, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Services, CompanyStrengths } from '@/entities';
import { useEffect, useState, useRef } from 'react';

interface YeongcheonPageProps {
  regionName?: string;
  regionDescription?: string;
}

export default function YeongcheonPage({ regionName = '영천', regionDescription }: YeongcheonPageProps) {
  const [services, setServices] = useState<Services[]>([]);
  const [strengths, setStrengths] = useState<CompanyStrengths[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const galleryImages = [
    {
      src: 'https://static.wixstatic.com/media/6820d4_56cd0a9079a8496cbb8c6edadc705a7f~mv2.jpeg',
      alt: '영천 크레인 작업 - 건설 현장'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_6cfe2e0520664c2f857c1ae73d7fbeea~mv2.jpg',
      alt: '영천 크레인 작업 현장 1'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a7c6fd8325564b148b6da8f30ebb37be~mv2.jpg',
      alt: '영천 크레인 작업 현장 2'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a82e1c0f6008438da039f08ba1155f90~mv2.jpg',
      alt: '영천 크레인 작업 현장 3'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_658942be47c843f09ee467b874a84f09~mv2.jpg',
      alt: '영천 크레인 작업 현장 4'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_7d5912f902ed458a9ab081d1f54e1ba2~mv2.jpg',
      alt: '영천 크레인 작업 현장 5'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_baa57dccb97142599f3a5ef455ba392a~mv2.jpg',
      alt: '영천 크레인 작업 현장 6'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_226bebe0ea604698958b4f3ddf87daa7~mv2.jpg',
      alt: '영천 크레인 작업 현장 7'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_d9967036235e430089fc18621661705e~mv2.jpg',
      alt: '영천 크레인 작업 현장 8'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_5302d235bca14224979f68d0a4df5d05~mv2.jpg',
      alt: '영천 크레인 작업 현장 9'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_4b4a4f17c36b42eaad73d8c14d83431d~mv2.jpg',
      alt: '영천 크레인 작업 현장 10'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_814daae2f8cf472aa17d385ef62bc3c8~mv2.jpg',
      alt: '영천 크레인 작업 현장 - 건설 현장'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_c58c26e1d39548328222b2aa54cce8c1~mv2.jpg',
      alt: '영천 크레인 자재 운반 작업 - 석재 운송'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_4a76c5a7343042018acb92e831ea50f7~mv2.jpg',
      alt: '영천 크레인 대형 석재 운반 작업'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a6d63a2f9fe04eb6b908f536f37d9192~mv2.jpeg',
      alt: '영천 크레인 작업 - 중량물 운반'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_c6e57b6001b4421eb9eceda11a24c1fa~mv2.jpeg',
      alt: '영천 크레인 산악 지역 작업 현장'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_68fa81b3d0fe42ae9e231b51b65cba78~mv2.jpeg',
      alt: '영천 크레인 크레인 타워 작업'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_9e9f78e30ffa49b5b140a42f2773aba0~mv2.jpeg',
      alt: '영천 크레인 건설 현장 자재 운반'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_d11cf66412b9475e899f7e164bcd3014~mv2.jpeg',
      alt: '영천 크레인 대형 목재 운반 작업'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_9a63e1839fb946c2bcb64a1453e8e7cd~mv2.jpeg',
      alt: '영천 크레인 도시 지역 크레인 작업'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_c52fea20028348c79d6e77d0477f6e45~mv2.jpeg',
      alt: '영천 크레인 파이프 운반 작업'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_a2b6bca564e64ba98734f824aaee699d~mv2.jpeg',
      alt: '영천 크레인 실내 작업 현장'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_61be87a72ed84a719f5c68b708c99edb~mv2.jpeg',
      alt: '영천 크레인 산악 지역 중량물 운반'
    },
    {
      src: 'https://static.wixstatic.com/media/6820d4_021614c357984edab2601297a18c8145~mv2.jpeg',
      alt: '영천 크레인 작업 - 정밀 운반'
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, strengthsData] = await Promise.all([
          BaseCrudService.getAll<Services>('services'),
          BaseCrudService.getAll<CompanyStrengths>('companystrengths')
        ]);
        
        const sortedServices = servicesData.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        const sortedStrengths = strengthsData.items.sort((a, b) => (a.priorityOrder || 0) - (b.priorityOrder || 0));
        
        setServices(sortedServices);
        setStrengths(sortedStrengths);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const defaultServices = [
    {
      title: '중량물 운송',
      description: '대형 중량물의 안전하고 신속한 운송 서비스',
      image: 'https://static.wixstatic.com/media/6820d4_c9881f26e2eb4484af8fae344801a956~mv2.png?id=truck-transport-icon',
      icon: Truck
    },
    {
      title: '자재 운반',
      description: '건설 현장 자재의 효율적인 운반 솔루션',
      image: 'https://static.wixstatic.com/media/6820d4_41869dc2ff1e46309c274d78f621442b~mv2.png?id=material-transport-icon',
      icon: Package
    },
    {
      title: '장비·설비 이전',
      description: '산업 장비 및 설비의 전문적인 이전 서비스',
      image: 'https://static.wixstatic.com/media/6820d4_a7fc09449ff5488ca3ca62843afc17c4~mv2.png?id=equipment-relocation-icon',
      icon: Building
    },
    {
      title: '장비 연계 운송 지원',
      description: '다양한 장비 연계를 통한 맞춤형 운송 지원',
      image: 'https://static.wixstatic.com/media/6820d4_be75efdbf12a4da1af625e1c1b22f06c~mv2.png?id=equipment-support-icon',
      icon: Wrench
    }
  ];

  const defaultStrengths = [
    {
      title: '안전 우선',
      description: '모든 작업에서 안전을 최우선으로 하는 시스템',
      iconImage: 'https://static.wixstatic.com/media/6820d4_cdb85c16a4b0494085b50da8bc740180~mv2.png',
      icon: Shield
    },
    {
      title: '일정 준수',
      description: '약속된 일정을 철저히 지키는 신뢰성',
      iconImage: 'https://static.wixstatic.com/media/6820d4_ec73d53691cc409ab86a6b81fdda104f~mv2.png',
      icon: Clock
    },
    {
      title: '현장 맞춤 대응력',
      description: '각 현장의 특성에 맞는 최적화된 솔루션 제공',
      iconImage: 'https://static.wixstatic.com/media/6820d4_11181c3b812a4a8da75a7f842e015ba9~mv2.png',
      icon: Target
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;
  const displayStrengths = strengths.length > 0 ? strengths : defaultStrengths;

  const handleImageClick = (index: number) => {
    setSelectedImage(galleryImages[index].src);
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1;
      setSelectedImage(galleryImages[newIndex].src);
      setSelectedImageIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < galleryImages.length - 1) {
      const newIndex = selectedImageIndex + 1;
      setSelectedImage(galleryImages[newIndex].src);
      setSelectedImageIndex(newIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://static.wixstatic.com/media/6820d4_25f1507fa06d4d2f910f93c63873a9ca~mv2.png?originWidth=1920&originHeight=1024"
            alt="영천 크레인 작업 현장"
            className="w-full h-full object-cover"
            width={1920}
          />
        </div>
        <motion.div
          className="absolute inset-0 bg-black z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, transition: { duration: 1 } }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <motion.h1
            className="font-heading font-bold text-white text-4xl md:text-6xl m-0 mt-0 mr-0 mb-[5px] ml-0 whitespace-nowrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          >
            영천 크레인&카고크레인
          </motion.h1>
          <motion.p
            className="text-white font-geotica-w01-four-open font-normal whitespace-nowrap text-base mt-[15px] mr-0 mb-8 ml-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
            dir="ltr">
            믿을 수 있는 중량물 운송 및 장비 연계 서비스
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none z-20"></div>
      </section>
      {/* Company Introduction */}
      <section className="relative py-24 px-6">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-heading font-bold mb-6">{regionName}</h1>
            <div className="max-w-4xl mx-auto">
              <p
                className="font-paragraph text-secondary-foreground text-base writing-mode-vertical-rl writing-mode-horizontal-tb [text-shadow:none] m-0 w-full my-0 mx-auto text-center"
                dir="ltr">
                {regionDescription || `${regionName} 크레인은 중량물, 산업 장비, 건설 자재 운송 전문 기업입니다.`}
              </p>
            </div>
          </motion.div>
        </div>
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-dark-gray pointer-events-none"></div>
      </section>
      {/* Main Services */}
      <section className="relative py-24 px-6 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">주요 서비스</h2>
            <p className="text-lg font-paragraph text-secondary-foreground mx-auto text-center">
              전문적이고 신뢰할 수 있는 운송 솔루션을 제공
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayServices.slice(0, 4).map((service, index) => {
              const IconComponent = service.icon || defaultServices[index]?.icon || Truck;
              return (
                <motion.div
                  key={service._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background border-secondary/20 hover:border-primary/50 transition-colors h-full">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <Image
                          src={(() => {
                            const providedImages = [
                              'https://static.wixstatic.com/media/6820d4_9d1871c95c094a8183560db136be62d8~mv2.png',
                              'https://static.wixstatic.com/media/6820d4_f2e0c7582196418a9762d50bafbce630~mv2.png',
                              'https://static.wixstatic.com/media/6820d4_69cc42045f66443da1ab80d83447cc7b~mv2.png',
                              'https://static.wixstatic.com/media/6820d4_f7cd85d436394680a31c4ed9fcf1d5ab~mv2.png'
                            ];
                            return providedImages[index] || service.image || defaultServices[index]?.image || 'https://static.wixstatic.com/media/6820d4_c9881f26e2eb4484af8fae344801a956~mv2.png?id=default-service-icon';
                          })()}
                          alt={service.title || defaultServices[index]?.title || '서비스 이미지'}
                          className="w-16 h-16 mx-auto object-contain"
                          width={64}
                        />
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3">
                        {service.title || defaultServices[index]?.title}
                      </h3>
                      <p className="font-paragraph text-secondary-foreground">
                        {service.shortDescription || service.description || defaultServices[index]?.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">현장 갤러리</h2>
            <p className="text-lg font-paragraph text-secondary-foreground">
              영천 크레인의 다양한 작업 현장을 확인하세요
            </p>
          </motion.div>

          <div className="grid grid-cols-4 lg:grid-cols-6 gap-3">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={250}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-white text-sm font-paragraph"
                  >
                    클릭하여 확대
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-dark-gray pointer-events-none"></div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={selectedImage}
              alt="확대된 갤러리 이미지"
              className="max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] object-contain rounded-lg"
              width={1200}
            />
            
            {selectedImageIndex > 0 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-background p-2 rounded-full transition-colors z-10"
                aria-label="Previous image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}

            {selectedImageIndex < galleryImages.length - 1 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-background p-2 rounded-full transition-colors z-10"
                aria-label="Next image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary/80 hover:bg-primary text-background p-2 rounded-full transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-paragraph">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* Company Strengths */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-dark-gray to-transparent pointer-events-none"></div>
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">우리의 강점</h2>
            <p className="text-lg font-paragraph text-secondary-foreground">
              영천 크레인만의 차별화된 경쟁력
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayStrengths.slice(0, 3).map((strength, index) => {
              const IconComponent = strength.icon || defaultStrengths[index]?.icon || Shield;
              return (
                <motion.div
                  key={strength._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-dark-gray border-secondary/20 hover:border-primary/50 transition-colors h-full">
                    <CardContent className="p-6 text-center">
                      <div className="mb-6">
                        <Image
                          src={(() => {
                            const providedImages = [
                              'https://static.wixstatic.com/media/6820d4_85d12eef1b2e4ef2bc301c5dac2433fa~mv2.png',
                              'https://static.wixstatic.com/media/6820d4_0ea4fc30b5a44fa38bfee471295e4b81~mv2.png',
                              'https://static.wixstatic.com/media/6820d4_e2bfc3695552481a9f0815e62b09bc51~mv2.png'
                            ];
                            return providedImages[index] || strength.iconImage || 'https://static.wixstatic.com/media/6820d4_c07bcbd2a534420dae7f7da5d9f59354~mv2.png?originWidth=128&originHeight=128';
                          })()}
                          alt={strength.title || defaultStrengths[index]?.title || '강점 아이콘'}
                          className="w-20 h-20 mx-auto object-contain"
                          width={80}
                        />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold mb-4">
                        {strength.title || defaultStrengths[index]?.title}
                      </h3>
                      <p className="font-paragraph text-secondary-foreground text-lg">
                        {strength.shortDescription || strength.detailedDescription || defaultStrengths[index]?.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-dark-gray pointer-events-none"></div>
      </section>
      {/* Contact Section */}
      <section className="py-24 px-6 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">문의하기</h2>
            <p className="text-lg font-paragraph text-secondary-foreground">
              언제든지 연락주시면 신속하게 상담해드리겠습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Phone className="w-12 h-12 mx-auto text-primary mb-4 fill-color-11" />
              <h3 className="text-xl font-heading font-semibold mb-2">연락처</h3>
              <a 
                href="tel:010-2332-4822" 
                className="text-2xl font-paragraph text-primary hover:text-primary/80 transition-colors"
              >
                010-2332-4822
              </a>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">위치</h3>
              <p className="text-base font-paragraph text-primary mb-4">
                경상북도 영천시<br />(영천 지역)
              </p>
              <a href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  위치보기
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
