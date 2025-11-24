# 대한카고크레인 SEO 최적화 가이드

## 📋 목차
1. [구현된 SEO 기능](#구현된-seo-기능)
2. [메타 태그 최적화](#메타-태그-최적화)
3. [구조화된 데이터](#구조화된-데이터)
4. [사이트맵 및 Robots.txt](#사이트맵-및-robotstxt)
5. [추가 최적화 권장사항](#추가-최적화-권장사항)
6. [모니터링 및 분석](#모니터링-및-분석)

---

## 구현된 SEO 기능

### ✅ 완료된 항목

#### 1. **향상된 메타 태그**
- ✅ 페이지 제목 (Title Tag)
- ✅ 메타 설명 (Meta Description)
- ✅ 키워드 최적화
- ✅ Open Graph 태그 (소셜 미디어 공유)
- ✅ Twitter Card 태그
- ✅ Canonical URL
- ✅ 언어 및 로케일 설정
- ✅ Robots 메타 태그

#### 2. **구조화된 데이터 (Schema.org)**
- ✅ LocalBusiness 스키마 (조직 정보)
- ✅ Service 스키마 (서비스 정보)
- ✅ OpeningHoursSpecification (영업 시간)
- ✅ PostalAddress (주소 정보)

#### 3. **기술적 SEO**
- ✅ Robots.txt 파일
- ✅ XML Sitemap
- ✅ Preconnect 및 DNS Prefetch
- ✅ Favicon 설정
- ✅ Mobile-friendly 메타 태그
- ✅ Naver 및 Google 검색 엔진 최적화

---

## 메타 태그 최적화

### 현재 설정된 메타 태그

```html
<!-- 기본 메타 태그 -->
<meta name="title" content="대한카고크레인 - 중량물 운송 및 장비 연계 서비스" />
<meta name="description" content="대구 지역 중량물 운송, 카고크레인, 건설 자재 운반, 산업 장비 이전 전문 기업..." />
<meta name="keywords" content="중량물 운송, 카고크레인, 장비 운송, 건설 자재 운반, 대구 운송, 산업 장비 이전, 대구 크레인..." />

<!-- Open Graph (소셜 미디어) -->
<meta property="og:type" content="website" />
<meta property="og:title" content="대한카고크레인 - 중량물 운송 및 장비 연계 서비스" />
<meta property="og:image" content="https://static.wixstatic.com/media/6820d4_25f1507fa06d4d2f910f93c63873a9ca~mv2.png" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="대한카고크레인 - 중량물 운송 및 장비 연계 서비스" />
```

### 메타 태그 최적화 팁

1. **제목 (Title Tag)**
   - 길이: 50-60자 권장
   - 주요 키워드 포함
   - 브랜드명 포함

2. **설명 (Meta Description)**
   - 길이: 150-160자 권장
   - 행동 유도 문구 포함
   - 고유한 가치 제안 명시

3. **키워드**
   - 관련성 높은 키워드 5-10개
   - 검색 의도와 일치
   - 자연스러운 배치

---

## 구조화된 데이터

### LocalBusiness 스키마
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "대한카고크레인",
  "telephone": "010-2332-4822",
  "email": "kkh2772@naver.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "신암남로 145",
    "addressLocality": "대구광역시",
    "addressRegion": "동구"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
}
```

### Service 스키마
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "중량물 운송",
  "description": "대형 중량물의 안전하고 신속한 운송 서비스",
  "provider": {
    "@type": "LocalBusiness",
    "name": "대한카고크레인"
  }
}
```

---

## 사이트맵 및 Robots.txt

### Robots.txt 위치
- 파일: `/src/pages/robots.txt`
- 목적: 검색 엔진 크롤러에게 사이트 크롤링 지침 제공

### XML Sitemap 위치
- 파일: `/src/pages/sitemap.xml`
- 포함 페이지:
  - 홈페이지 (우선순위: 1.0)
  - 연락처 페이지 (우선순위: 0.8)
  - 서비스 섹션 (우선순위: 0.7)

### 검색 엔진에 등록
1. **Google Search Console**
   - https://search.google.com/search-console
   - Sitemap 제출: https://www.daehancargocranes.com/sitemap.xml

2. **Naver Search Advisor**
   - https://searchadvisor.naver.com
   - Sitemap 제출: https://www.daehancargocranes.com/sitemap.xml

3. **Bing Webmaster Tools**
   - https://www.bing.com/webmasters
   - Sitemap 제출: https://www.daehancargocranes.com/sitemap.xml

---

## 추가 최적화 권장사항

### 🔧 즉시 구현 가능한 항목

#### 1. **Google Search Console 설정**
```
1. Google Search Console 접속
2. 속성 추가: https://www.daehancargocranes.com
3. 소유권 확인 (메타 태그 또는 DNS)
4. Sitemap 제출
5. 색인 생성 요청
```

#### 2. **Naver Search Advisor 설정**
```
1. Naver Search Advisor 접속
2. 사이트 등록
3. Sitemap 제출
4. RSS 피드 제출 (블로그 운영 시)
```

#### 3. **페이지 속도 최적화**
- Google PageSpeed Insights 확인: https://pagespeed.web.dev
- 이미지 최적화
- 캐싱 설정
- CDN 활용

#### 4. **모바일 최적화**
- ✅ 반응형 디자인 (이미 구현됨)
- ✅ 터치 친화적 인터페이스
- ✅ 모바일 메타 태그

#### 5. **콘텐츠 최적화**
- 각 페이지마다 고유한 제목과 설명
- 헤딩 태그 (H1, H2, H3) 계층 구조
- 내부 링크 구조 개선
- 이미지 alt 텍스트 최적화

### 📈 장기 최적화 전략

#### 1. **콘텐츠 마케팅**
- 블로그 포스트 작성 (운송 팁, 산업 뉴스)
- FAQ 페이지 추가
- 케이스 스터디 작성
- 동영상 콘텐츠 추가

#### 2. **백링크 구축**
- 업계 디렉토리 등록
- 지역 비즈니스 목록 최적화
- 관련 웹사이트와의 협력
- 게스트 포스팅

#### 3. **로컬 SEO 최적화**
- Google My Business 최적화
- Naver 플레이스 등록
- 지역 키워드 타겟팅
- 지역 리뷰 관리

#### 4. **기술적 SEO 개선**
- Core Web Vitals 최적화
- SSL 인증서 (HTTPS) ✅
- 구조화된 데이터 확장
- AMP 구현 (선택사항)

---

## 모니터링 및 분석

### 📊 모니터링 도구

#### 1. **Google Analytics 4**
```
설정 단계:
1. Google Analytics 계정 생성
2. 추적 ID 받기
3. 웹사이트에 추적 코드 추가
4. 목표 설정 (전화 문의, 이메일 등)
```

#### 2. **Google Search Console**
- 검색 성능 모니터링
- 색인 상태 확인
- 크롤링 오류 해결
- 모바일 사용성 확인

#### 3. **Naver Search Advisor**
- 검색 트래픽 분석
- 크롤링 상태 확인
- 키워드 순위 추적

### 📈 추적할 주요 지표

1. **검색 성능**
   - 클릭 수 (CTR)
   - 노출 수
   - 평균 순위
   - 검색 쿼리

2. **사이트 성능**
   - 페이지 로드 시간
   - 이탈률
   - 평균 세션 시간
   - 전환율

3. **사용자 행동**
   - 가장 인기 있는 페이지
   - 사용자 흐름
   - 클릭 위치
   - 스크롤 깊이

### 🎯 SEO 개선 체크리스트

- [ ] Google Search Console 설정 및 Sitemap 제출
- [ ] Naver Search Advisor 설정
- [ ] Google Analytics 4 설정
- [ ] Google My Business 최적화
- [ ] 페이지 속도 최적화 (90점 이상 목표)
- [ ] 모바일 사용성 확인
- [ ] 내부 링크 구조 개선
- [ ] 이미지 alt 텍스트 최적화
- [ ] 콘텐츠 업데이트 일정 수립
- [ ] 월간 SEO 성과 분석

---

## 🚀 다음 단계

### 우선순위 1 (이번 주)
1. Google Search Console에 사이트 등록
2. Sitemap 제출
3. Google Analytics 설정

### 우선순위 2 (이번 달)
1. Naver Search Advisor 등록
2. Google My Business 최적화
3. 페이지 속도 최적화

### 우선순위 3 (장기)
1. 블로그 시작
2. 백링크 구축
3. 콘텐츠 마케팅 전략 수립

---

## 📞 지원 및 문의

SEO 최적화에 대한 추가 질문이나 지원이 필요하신 경우:
- 전화: 010-2332-4822
- 이메일: kkh2772@naver.com

---

**마지막 업데이트**: 2024년 11월 24일
**SEO 최적화 상태**: ✅ 기본 최적화 완료
