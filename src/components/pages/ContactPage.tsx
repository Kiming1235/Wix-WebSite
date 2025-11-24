import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const handleMapClick = () => {
    // 네이버 지도로 연결
    window.open('https://map.naver.com/p/entry/place/1343980670?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202511240941&locale=ko&svcName=map_pcv5', '_blank');
  };

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
            <h1 className="text-5xl font-heading font-bold mb-6">연락처</h1>
            <p className="text-xl font-paragraph text-secondary-foreground max-w-3xl">
              언제든지 연락주시면 신속하고 정확한 상담을 제공해드리겠습니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-6">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-dark-gray border-secondary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold">전화 문의</h3>
                    </div>
                    <p className="font-paragraph text-secondary-foreground mb-4">
                      운송 관련 문의사항이나 견적 요청은 언제든지 전화로 연락해주세요.
                    </p>
                    <a 
                      href="tel:010-2332-4822" 
                      className="text-3xl font-paragraph text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      010-2332-4822
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-dark-gray border-secondary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold">운영 시간</h3>
                    </div>
                    <div className="space-y-2 font-paragraph text-secondary-foreground">
                      <p><span className="text-foreground font-semibold">평일:</span> 오전 8:00 - 오후 6:00</p>
                      <p><span className="text-foreground font-semibold">토요일:</span> 오전 8:00 - 오후 1:00</p>
                      <p><span className="text-foreground font-semibold">일요일 및 공휴일:</span> 휴무</p>
                      <p className="text-sm text-primary mt-4">* 긴급 상황 시 24시간 대응 가능</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-dark-gray border-secondary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold">이메일</h3>
                    </div>
                    <p className="font-paragraph text-secondary-foreground mb-4">
                      자세한 견적서나 문서가 필요하시면 이메일로 연락해주세요.
                    </p>
                    <a 
                      href="mailto:kkh2772@naver.com" 
                      className="text-xl font-paragraph text-primary hover:text-primary/80 transition-colors"
                    >
                      kkh2772@naver.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dark-gray border-secondary/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold">오시는 길</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="font-paragraph text-secondary-foreground mb-2">
                        <span className="text-foreground font-semibold">주소:</span>
                      </p>
                      <p className="font-paragraph text-secondary-foreground">
                        대구광역시 동구 신암남로 145(신암동)<br />
                        대한카고크레인 본사
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-paragraph text-secondary-foreground mb-2">
                        <span className="text-foreground font-semibold">교통편:</span>
                      </p>
                      <p className="font-paragraph text-secondary-foreground text-sm">
                        • 버스: 신암역 인근 버스 정류장<br />
                        • 주차: 건물 인근 주차 가능<br />
                        • 문의: 전화 또는 이메일로 상세 위치 안내
                      </p>
                    </div>
                  </div>

                  <Button 
                    onClick={handleMapClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    네이버 지도에서 보기
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-24 px-6 bg-dark-gray">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              지금 바로 상담받으세요
            </h2>
            <p className="text-xl font-paragraph text-secondary-foreground mb-8 max-w-3xl mx-auto">
              프로젝트 규모와 상관없이 최적의 솔루션을 제안해드립니다. 
              무료 견적 상담을 통해 정확한 비용과 일정을 확인하세요.
            </p>
            <div className="flex justify-center">
              <a href="tel:010-2332-4822">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  지금 전화하기
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}