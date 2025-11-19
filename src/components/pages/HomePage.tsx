import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Package, Building, Wrench, Shield, Clock, Target, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { Services, CompanyStrengths } from '@/entities';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [services, setServices] = useState<Services[]>([]);
  const [strengths, setStrengths] = useState<CompanyStrengths[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, strengthsData] = await Promise.all([
          BaseCrudService.getAll<Services>('services'),
          BaseCrudService.getAll<CompanyStrengths>('companystrengths')
        ]);
        
        // Sort by display order
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://static.wixstatic.com/media/6820d4_25f1507fa06d4d2f910f93c63873a9ca~mv2.png?originWidth=1920&originHeight=1024"
            alt="대한카고크레인 작업 현장"
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 whitespace-nowrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          >
            대한카고크레인
          </motion.h1>
          <motion.p
            className="text-white mb-8 text-lg font-geotica-w01-four-open font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
            dir="ltr">{"믿을 수 있는 중량물 운송 및 장비 연계 서비스"}</motion.p>

        </div>
      </section>
      {/* Company Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">회사소개</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-paragraph text-secondary-foreground leading-relaxed mb-6">
                대한카고크레인은 중량물, 산업 장비, 건설 자재 운송 전문 기업입니다.
              </p>
              <p className="text-lg font-paragraph text-secondary-foreground leading-relaxed">
                각 현장의 특성과 요구사항을 정확히 파악하여 최적화된 맞춤형 솔루션을 제공하며, 
                안전하고 효율적인 운송 서비스를 통해 고객의 성공적인 프로젝트 완수를 지원합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Main Services */}
      <section className="py-24 px-6 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">주요 서비스</h2>
            <p className="text-lg font-paragraph text-secondary-foreground">
              전문적이고 신뢰할 수 있는 운송 솔루션을 제공합니다
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
      {/* Company Strengths */}
      <section className="py-24 px-6">
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
              대한카고크레인만의 차별화된 경쟁력
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayStrengths.slice(0, 3).map((strength, index) => {
              const IconComponent = strength.icon || defaultStrengths[index]?.icon || Shield;
              return (
                <motion.div
                  key={strength._id || index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
              );
            })}
          </div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Phone className="w-12 h-12 mx-auto text-primary mb-4 fill-color-11" />
              <h3 className="text-xl font-heading font-semibold mb-2">전화 문의</h3>
              <a 
                href="tel:010-0000-0000" 
                className="text-2xl font-paragraph text-primary hover:text-primary/80 transition-colors"
              >
                010-0000-0000
              </a>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">오시는 길</h3>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  위치 보기
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}