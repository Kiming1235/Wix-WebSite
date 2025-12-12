import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useRef } from 'react';

export default function GyeongsanCranePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const galleryImages = [
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
  ];

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
            alt="경산크레인 작업 현장"
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
            경산크레인&카고크레인
          </motion.h1>
          <motion.p
            className="text-white font-geotica-w01-four-open font-normal whitespace-nowrap text-base mt-[15px] mr-0 mb-8 ml-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
            dir="ltr">
            경산 전지역 크레인 임대 및 카고크레인 전문 서비스
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
            <h2 className="text-4xl font-heading font-bold mb-6">경산크레인 서비스</h2>
            <div className="max-w-4xl mx-auto">
              <p
                className="text-secondary-foreground writing-mode-vertical-rl writing-mode-horizontal-tb indent-0.5 normal-case not-italic no-underline font-bold text-xl font-heading m-0 text-center mt-0 mr-0 mb-6 ml-[5px]"
                dir="ltr">
                대한카고크레인은 경산 전지역에서 크레인 및 카고크레인 서비스를 제공합니다.
              </p>
              <p
                className="font-paragraph text-secondary-foreground text-base writing-mode-vertical-rl writing-mode-horizontal-tb [text-shadow:none] m-0 w-full my-0 mx-auto text-center"
                dir="ltr">
                경산크레인, 경산카고크레인 작업은 모두 숙련된 기사로 안전하게 진행됩니다. 하양, 진량, 압량, 자인 등 어디든 신속 배차 가능합니다. 반나절·일·월 단위 임대 가능하며, 숙련 기사 즉시 배치로 안전하고 효율적인 작업을 보장합니다.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-dark-gray pointer-events-none"></div>
      </section>

      {/* Service Features */}
      <section className="relative py-24 px-6 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">경산 지역 서비스</h2>
            <p className="text-lg font-paragraph text-secondary-foreground mx-auto text-center">
              경산 전지역에서 신속하고 안전한 크레인 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '신속한 배차', description: '경산 전지역 즉시 배차 가능' },
              { title: '숙련 기사', description: '경험 많은 전문 기사 배치' },
              { title: '다양한 임대 기간', description: '반나절·일·월 단위 임대 가능' },
              { title: '안전 작업', description: '안전을 최우선으로 하는 시스템' },
              { title: '지역 특화', description: '하양, 진량, 압량, 자인 등 모든 지역' },
              { title: '24시간 상담', description: '언제든지 문의 가능' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background border-secondary/20 hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-paragraph text-secondary-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-heading font-bold mb-6">경산 작업 현장</h2>
            <p className="text-lg font-paragraph text-secondary-foreground">
              경산크레인의 다양한 작업 현장을 확인하세요
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
            <h2 className="text-4xl font-heading font-bold mb-6">경산크레인 문의</h2>
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
                대구광역시 동구 신암남로 145<br />(신암동)
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
