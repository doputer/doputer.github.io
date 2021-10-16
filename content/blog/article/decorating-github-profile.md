---
title: 'Github 프로필 꾸미기 👑'
date: 2021-05-08
category: 'article'
draft: false
---

## 기존 프로필을 바꿔보자

![profile-ex](images/github-profile-ex.png)

인턴을 하면서 bitbucket만 사용했더니 github이 되게 초라해진 기분이 들었다. 토이 프로젝트와 코딩 테스트 준비한 것들을 올리기 전에 프로필을 꾸며보기로 했다.

![profile](images/github-profile-image.png)

구글에 검색하면서 이것저것 적용해봤다. 사실 내가 적용한 오픈소스들보다 하지 않은 게 훨씬 많지만 보통 자기소개와 기술 스택 정도를 적는 것 같아서 이 정도만 적용해봤다. 아래에서는 프로필을 꾸미는 방법과 꾸밀 때 사용했던 오픈소스들을 소개해보려고 한다:)

## 1. Github 프로필 설정하기

[공식문서](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)를 참고해서 설정했다.

![github-setting](images/github-setting.png)

본인의 github 계정과 똑같은 이름으로 repository를 생성하면 된다.

> ✔ Add a README file을 체크해주자!

## 2. README.md 파일 수정하기

이제 원하는 대로 README.md 파일을 수정하면 된다. 나는 [typora](https://typora.io/)라는 마크다운 에디터를 이용했다.

![github-markdown](images/github-markdown.png)

## 3. 내가 사용한 오픈 소스들

![capsule-render](images/capsule-render.png)
[capsule-render](https://github.com/kyechan99/capsule-render)

프로필 헤더를 설정해주기 위해 적용했다. 색, 모양, 글꼴, 애니메이션 등 다양한 옵션이 있으니 원하는 대로 적용시키면된다.

![shields](images/shields.png)
[Shield.io](https://shields.io/)

배지를 넣기 위해 적용했다. 배지 안에 들어가는 내용, 배경색, 글꼴 색 등 설정이 가능하다. 아래에 소개할 아이콘도 추가시킬 수 있다.

[Simple Icons](https://simpleicons.org/)

배지에 아이콘을 넣기 위해 적용했다. 원하는 아이콘을 검색해서 적용하면 된다.

사용 방법은 다음과 같다.

아래 코드는 HTML5 아이콘을 배지에 추가하고, 배경색은 E34F26을 적용한 후, 내용은 HTML5로 채운 모양 코드 예시다.

```html
<img
  src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
/>
```

코드를 일반화하면 다음과 같다.

```html
<img
  src="https://img.shields.io/badge/[아이콘 이름]-[배경색]?style=flat-square&logo=[내용]&logoColor=white"
/>
```

> 💡 주소에 +는 %2B로, 공백은 %20로 치환해주자!

이 밖에도 다양하게 설정할 수 있으니 홈페이지를 참고하는 게 좋을 것 같다.

![hits](images/hits.png)
[HITS](https://hits.seeyoufarm.com/)

본인의 github 조회 수를 표시해준다. **오늘 방문자 수 / 모든 방문자 수**로 표시해준다.

## 4. 적용할만한 오픈 소스들

![github-readme-stats](images/github-readme-stats.png)
[github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

본인의 github stats를 표시해주는 오픈 소스

![mazassumnida](images/mazassumnida.png)
[mazassumnida](https://github.com/mazassumnida/mazassumnida)

boj 프로필을 이쁘게 보여주는 오픈 소스

## 5. 내가 적용한 모습

[https://github.com/doputer/doputer](https://github.com/doputer/doputer)
