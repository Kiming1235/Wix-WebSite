import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useRef, ReactNode } from 'react';

interface RegionalPageLayoutProps {
  regionName: string;
  regionTitle: string;
  address: string;
  phone: string;
  galleryImages: Array<{ src: string; alt: string }>;
  heroImage?: string;
  children?: ReactNode;
  customDescription?: string;
}

export default function RegionalPageLayout({
  regionName,
  regionTitle,
  address,
  phone,
  galleryImages,
  heroImage = 'https://static.wixstatic.com/media/6820d4_25f1507fa06d4d2f910f93c63873a9ca~mv2.png?originWidth=1920&originHeight=1024',
  children,
  customDescription
}: RegionalPageLayoutProps) {
  // customDescription이 있으면 사용, 없으면 자동으로 소개 문구 생성
  const description = customDescription || `${regionName}크레인, ${regionName}카고크레인 중량물, 산업 장비, 건설 자재 운송 전문 기업으로, 안전하고 효율적인 맞춤형 운송 솔루션을 제공합니다.`;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

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
            src={heroImage}
            alt={`${regionName} 크레인 작업 현장`}
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
            className="font-heading font-bold text-white text-4xl md:text-6xl m-0 mt-0 mr-0 mb-[5px] ml-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          >
            {regionTitle}
          </motion.h1>
          <motion.p
            className="text-white font-paragraph font-normal text-base mt-[15px] mr-0 mb-8 ml-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
          >
            {regionName} 지역 전문 크레인 서비스
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none z-20"></div>
      </section>

      {/* Region Introduction */}
      <section className="relative py-24 px-6">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">{regionName} 크레인 서비스</h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-paragraph text-secondary-foreground text-base text-center">
                {description}
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
            <h2 className="text-4xl font-heading font-bold mb-6">서비스 특징</h2>
            <p className="text-lg font-paragraph text-secondary-foreground mx-auto text-center">
              {regionName} 지역에 최적화된 크레인 서비스
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '24시간 배차',
                description: '언제든지 신속한 크레인 배차 서비스를 제공합니다'
              },
              {
                title: '안전 관리',
                description: '최고 수준의 안전 기준을 준수하는 전문 팀'
              },
              {
                title: '맞춤형 솔루션',
                description: '각 현장에 맞는 최적화된 운송 솔루션 제공'
              }
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
            <h2 className="text-4xl font-heading font-bold mb-6">작업 현장</h2>
            <p className="text-lg font-paragraph text-secondary-foreground">
              {regionName} 지역의 다양한 크레인 작업 현장
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

      {/* Custom Content Section */}
      {children && (
        <section className="relative py-24 px-6">
          <div className="max-w-[100rem] mx-auto">
            {children}
          </div>
        </section>
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
            <h2 className="text-4xl font-heading font-bold mb-6">문의하기</h2>
            <p className="text-lg font-paragraph text-secondary-foreground">
              {regionName} 지역 크레인 서비스 상담
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
              <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">연락처</h3>
              <a 
                href={`tel:${phone}`}
                className="text-2xl font-paragraph text-primary hover:text-primary/80 transition-colors"
              >
                {phone}
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
                {address}
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
