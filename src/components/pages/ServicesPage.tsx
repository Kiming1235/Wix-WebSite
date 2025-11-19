import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Package, Building, Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Services>('services');
        const sortedServices = items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        setServices(sortedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const defaultServices = [
    {
      _id: '1',
      title: '중량물 운송',
      shortDescription: '대형 중량물의 안전하고 신속한 운송 서비스',
      description: '대형 크레인과 전문 장비를 활용하여 초대형 중량물부터 정밀 장비까지 안전하게 운송합니다. 경험 많은 전문 인력이 현장 상황을 면밀히 분석하여 최적의 운송 계획을 수립하고 실행합니다.',
      image: 'https://static.wixstatic.com/media/6820d4_ec73d53691cc409ab86a6b81fdda104f~mv2.png',
      icon: Truck
    },
    {
      _id: '2',
      title: '자재 운반',
      shortDescription: '건설 현장 자재의 효율적인 운반 솔루션',
      description: '건설 현장에서 필요한 다양한 자재들을 효율적으로 운반합니다. 철골, 콘크리트 구조물, 프리캐스트 등 건설 자재의 특성을 고려한 맞춤형 운반 서비스를 제공합니다.',
      image: 'https://static.wixstatic.com/media/6820d4_11181c3b812a4a8da75a7f842e015ba9~mv2.png',
      icon: Package
    },
    {
      _id: '3',
      title: '장비·설비 이전',
      shortDescription: '산업 장비 및 설비의 전문적인 이전 서비스',
      description: '공장 이전, 설비 교체 시 필요한 대형 산업 장비 및 설비의 안전한 이전 작업을 수행합니다. 정밀한 계획과 전문 기술로 장비 손상 없이 이전 작업을 완료합니다.',
      image: 'https://static.wixstatic.com/media/6820d4_cdb85c16a4b0494085b50da8bc740180~mv2.png',
      icon: Building
    },
    {
      _id: '4',
      title: '장비 연계 운송 지원',
      shortDescription: '다양한 장비 연계를 통한 맞춤형 운송 지원',
      description: '크레인, 트레일러, 지게차 등 다양한 장비를 연계하여 복합적인 운송 작업을 지원합니다. 현장 여건에 맞는 최적의 장비 조합으로 효율적인 작업을 보장합니다.',
      image: 'https://static.wixstatic.com/media/6820d4_aa23ac23b83d44cab003a745707b7728~mv2.png',
      icon: Wrench
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-24 px-6 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              홈으로 돌아가기
            </Link>
            <h1 className="text-5xl font-heading font-bold mb-6">서비스</h1>
            <p className="text-xl font-paragraph text-secondary-foreground max-w-3xl">
              대한카고크레인의 전문적이고 신뢰할 수 있는 운송 솔루션을 확인해보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayServices.map((service, index) => {
              const IconComponent = service.icon || defaultServices[index]?.icon || Truck;
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-dark-gray border-secondary/20 hover:border-primary/50 transition-colors h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          {service.image ? (
                            <Image
                              src={service.image}
                              alt={service.title || '서비스 이미지'}
                              className="w-20 h-20 object-contain"
                              width={80}
                            />
                          ) : (
                            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-10 h-10 text-primary" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-heading font-semibold mb-4">
                            {service.title}
                          </h3>
                          <p className="font-paragraph text-secondary-foreground mb-4 text-lg leading-relaxed">
                            {service.shortDescription}
                          </p>
                          <p className="font-paragraph text-secondary-foreground leading-relaxed">
                            {service.description || defaultServices[index]?.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              맞춤형 솔루션이 필요하신가요?
            </h2>
            <p className="text-xl font-paragraph text-secondary-foreground mb-8 max-w-3xl mx-auto">
              각 프로젝트의 특성에 맞는 최적의 운송 솔루션을 제안해드립니다. 
              언제든지 연락주시면 전문 상담을 받으실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:010-0000-0000">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  전화 상담: 010-0000-0000
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  오시는 길 보기
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}