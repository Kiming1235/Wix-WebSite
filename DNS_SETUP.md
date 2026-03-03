# Cafe24 네임서버 설정 메모

## 현재 네임서버
- ns1.cafe24.com
- ns1.cafe24.co.kr
- ns2.cafe24.com
- ns2.cafe24.co.kr

## 변경할 네임서버
- 1차 네임서버: `ns1.cafe24dns.co.kr` (`175.125.93.196`)
- 2차 네임서버: `ns3.cafe24dns.co.kr` (`175.125.93.197`)

## 적용 체크리스트
1. 도메인 등록업체에서 네임서버를 위 2개로 변경
2. 전파 시간(최대 24~48시간) 동안 기존/신규 DNS 혼재 가능
3. A 레코드 또는 CNAME이 카페24 호스팅 정보와 일치하는지 확인
4. `www` 및 루트 도메인 모두 접속 확인
5. SSL 인증서 재발급/적용 여부 확인

## 빠른 확인 명령어
```bash
# 네임서버 위임 상태 확인
dig NS daehancargocrane.com +short

# A 레코드 확인
dig A daehancargocrane.com +short

# www 레코드 확인
dig A www.daehancargocrane.com +short
```

## .htaccess HTTPS 리디렉션 실패 시 점검
LiteSpeed/Apache 환경에서 플러그인 자동 테스트가 실패하면 아래를 확인하세요.

1. `mod_rewrite` 활성화 여부
2. 프록시(로드밸런서/CDN) 사용 시 `X-Forwarded-Proto` 전달 여부
3. SSL 인증서가 루트/`www` 모두 정상 적용되었는지
4. `.well-known/acme-challenge` 경로가 리디렉션 예외인지

이 저장소 루트의 `.htaccess`는 위 조건을 반영한 HTTPS 강제 리디렉션 예시입니다.


## 워드프레스(Cafe24) 운영 기준 체크
- 워드프레스 고유주소(퍼머링크)를 `/%postname%/` 형태로 설정
- `.htaccess`에 WordPress 리라이트 규칙이 존재하는지 확인
- 플러그인 캐시/리디렉션 규칙과 서버 리디렉션이 충돌하지 않도록 1원칙으로 통일
