# Personal Blog

Astro + React + MDX로 구성한 개인 기술 블로그입니다. 정적 산출물은 Azure Static Web Apps에 배포하고, GitHub Actions로 빌드와 배포를 자동화합니다.

## 기술 구성

- Astro 7 (정적 사이트 생성)
- React 19 (상호작용이 필요한 아일랜드 컴포넌트)
- MDX (Markdown 글 안에서 React/Astro 컴포넌트 사용)
- Azure Static Web Apps
- Git / GitHub Actions

## 로컬 실행

Node.js 22 LTS가 필요합니다. 이 프로젝트가 사용하는 최신 빌드 도구 조합은 현재 Node.js 24.14에서 콘텐츠 동기화 오류가 확인되어 `package.json`과 `.nvmrc`에서 Node 22로 고정했습니다.

```powershell
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:4321`에서 열립니다.

```powershell
npm run build
npm run preview
```

## 글 작성

`src/content/blog`에 `.md` 또는 `.mdx` 파일을 추가합니다. MDX에서는 React 컴포넌트를 가져오고 클라이언트 지시자를 붙일 수 있습니다.

```mdx
import Counter from '../../components/Counter';

<Counter client:visible />
```

## Azure Static Web Apps 배포

1. GitHub 저장소의 기본 브랜치를 `main`으로 사용합니다.
2. Azure Portal에서 **Static Web App** 리소스를 생성하고 배포 원본을 이 GitHub 저장소로 연결합니다.
3. 빌드 설정은 앱 위치 `/`, 출력 위치 `dist`, 빌드 명령 `npm run build`로 지정합니다.
4. Azure가 발급한 배포 토큰을 GitHub 저장소 Secret `AZURE_STATIC_WEB_APPS_API_TOKEN`으로 등록합니다.
5. Azure의 실제 사이트 주소를 빌드 환경 변수 `SITE_URL`에 지정하면 sitemap과 canonical URL에 반영됩니다.
6. `main` 브랜치에 push하면 `.github/workflows/azure-static-web-apps.yml`이 빌드·배포를 실행합니다.

Azure Portal에서 GitHub 연결 시 워크플로 파일을 자동 생성했다면, 두 워크플로가 중복 실행되지 않도록 하나만 유지하세요.

## 주요 명령

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | `dist`에 운영용 정적 파일 생성 |
| `npm run preview` | 운영 빌드 로컬 미리보기 |
