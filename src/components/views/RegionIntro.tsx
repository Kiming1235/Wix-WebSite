import { motion } from 'framer-motion';

interface RegionIntroProps {
  regionName: string;
  description: string;
}

export default function RegionIntro({ regionName, description }: RegionIntroProps) {
  return (
    <section className="relative py-24 px-6">
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
            <p
              className="text-secondary-foreground writing-mode-vertical-rl writing-mode-horizontal-tb indent-0.5 normal-case not-italic no-underline font-bold text-xl font-heading m-0 text-center mt-0 mr-0 mb-6 ml-[5px]"
              dir="ltr">
              {regionName} 크레인은 중량물, 산업 장비, 건설 자재 운송 전문 기업입니다.
            </p>
            <p
              className="font-paragraph text-secondary-foreground text-base writing-mode-vertical-rl writing-mode-horizontal-tb [text-shadow:none] m-0 w-full my-0 mx-auto text-center"
              dir="ltr">
              <span className="whitespace-nowrap sm:whitespace-normal">각 현장의 특성과 요구사항을 정확히 파악하여 최적화된</span> {description}
            </p>
          </div>
        </motion.div>
      </div>
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-dark-gray pointer-events-none"></div>
    </section>
  );
}
