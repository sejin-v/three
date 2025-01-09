export const menuCategory = [
  {
    categoryName: '한식',
    categoryCode: 'korean',
    categoryDescription: '찌개, 전, 안주, 식사 등',
    imageUrl:
      'https://media.istockphoto.com/id/1364658843/ko/%EC%82%AC%EC%A7%84/pibimbap-%EB%8F%BC%EC%A7%80-%EA%B0%88%EB%B9%84-%ED%8A%80%EA%B8%B4-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EB%91%90%EB%B6%80-%ED%95%9C%EC%8B%9D-%EC%B5%9C%EA%B3%A0-%EB%B3%B4%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=6Sfqfv_hA1bvrrZ5CYe7QDRuRxH5B5VbLFtJdnvNjO4=',
  },
  {
    categoryName: '중식',
    categoryCode: 'chinese',
    categoryDescription: '요리, 식사',
    imageUrl:
      'https://media.istockphoto.com/id/913931820/ko/%EC%82%AC%EC%A7%84/%EB%86%92%EC%9D%80-%EB%B6%88%ED%83%80-%ED%99%94-%EC%97%BC%EC%97%90-%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91-%EC%A3%BC%EB%B0%A9%EC%97%90%EC%84%9C-%EC%9A%94%EB%A6%AC%EC%82%AC-%EB%82%9C%EB%A1%9C.jpg?s=2048x2048&w=is&k=20&c=Zci9gsKETGYjet6y590kniPT8e6Nu6mEpeO1_jsDT9U=',
  },
  {
    categoryName: '양식',
    categoryCode: 'western',
    categoryDescription: '에피타이저, 스프, 메인, 파스타 등',
    imageUrl:
      'https://images.unsplash.com/photo-1642524255315-bf1f27f5a885?q=80&w=4128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    categoryName: '일식',
    categoryCode: 'japanese',
    categoryDescription: '식사, 안주',
    imageUrl:
      'https://images.unsplash.com/photo-1679279726937-122c49626802?q=80&w=4740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const menus: any = {
  korean: {
    name: '한식',
    description: '찌개, 전, 안주, 식사 등',
    imageUrl:
      'https://media.istockphoto.com/id/1364658843/ko/%EC%82%AC%EC%A7%84/pibimbap-%EB%8F%BC%EC%A7%80-%EA%B0%88%EB%B9%84-%ED%8A%80%EA%B8%B4-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EB%91%90%EB%B6%80-%ED%95%9C%EC%8B%9D-%EC%B5%9C%EA%B3%A0-%EB%B3%B4%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=6Sfqfv_hA1bvrrZ5CYe7QDRuRxH5B5VbLFtJdnvNjO4=',

    menus: [
      {
        name: '찌개',
        children: [
          {
            name: '김치찌개',
            item: `돼지고기 600g, 김치 300g, 액젓, 간장, 고추가루, 다진마늘, 설탕, 파`,
            description: `돼지고기+액젓1 20분 끓이기\n물 보충후 김치, 간장 1스푼, 고추가루 1.5스푼, 다진마늘 1스푼, 설탕 조금\n불끄고 파`,
          },
          {
            name: '김치찜',
            item: `돼지고기 600g, 김치 600g, 소금, 액젓, 간장, 통마늘, 다진마늘, 설탕, 파, 후추`,
            description: `소금을 뿌린 돼지고기 겉면을 모두 굽고 같은양의 김치 넣기(김치국물)\n재료가 잠기게 물, 간장 1스푼, 설탕 3스푼, 액젓 3스푼, 통마늘, 파, 후추 \n뚜껑 닫고 중약 불에서 30분 다진마늘 넣고 20분 졸이기 
            `,
          },
          {
            name: '갈비찜',
            description: '소고기 or 돼지고기, 간장양념을 이용한 찜',
          },
          {
            name: '알배추찜',
            item: `알배추, 양파, 다진마늘, 대파삼겹살, 소주(미림), 참소스, 참기름, 고추가루`,
            description: `알배추, 양파, 다진마늘을 냄비에 넉넉히 깔고 얇은고기 \n소주 약간 붓고 뚜껑열고 끓이다가 끓어오르면 뚜껑닫고 10분\n참소스, 참기름, 고추가루 소스에 찍먹`,
          },
          {
            name: '등뼈찜',
            item: `돼지고기 등뼈, 마늘, 고추가루, 간장, 맛술, 설탕, 고추장, 된장, 다진마늘, 후추, 양파, 다시다, 떡, 당면, 대파, 청양고추, 참꺠`,
            description:
              '등뼈에 소주, 월계수, 후추 등을 넣고 30분 삶기\n한번 씻어내고 물1L 고추가루 3스푼, 간장 3스푼, 맛술 2스푼, 설탕 1스푼, 고추장 1스푼, 된장 0.2스푼, 다진마늘 2스푼, 후추, 다시다 0.5 스푼, 양파 채썰어 올린다\n약불로 2시간정도 천천히 졸여주기\n고기 뺴고 당면 떡 넣고 익혀주기',
          },
          {
            name: '부대찌개',
            item: `스팸, 양배추, 야ㅇ파, 다진마늘, 베이크드 빈, 고추장, 고추가루, 간장, 액젓, 설탕, 후추, 캐첩, 사골코인`,
            description: `스팸, 양배추, 양파, 대파, 다진마늘 2스푼, 베이크드 빈 듬뿍 4스푼, 떡을 냄비에 넣고 \n고추장 듬뿍 1스푼, 고추가루 1.5 스푼, 간장 1스푼, 액젓 1스푼, 설탕 1스푼, 후추, 캐첩 2 스푼\n물 1L에 사골 코인을 넣고 끓인다`,
          },
          {
            name: '버섯찌개',
            item: `소고기 목심, 버섯 종류별, 쑥갓, 양파, 다진마늘, 파, 사골코인, 고추장, 된장, 고추가루, 매운고추가루, 간장, 다시다, 표고버섯 가루`,
            description:
              '소고기 목심, 다진마늘 1스푼을 기름에 살짝 볶아준다 \n 물1L, 사골코인, 된장 0.5, 고추장 1, 고추가루 1, 매운 고추가루 0.5, 양파 0.5, 간장 1, 버섯 넣고 끓여주기 \n 졸아들면 물 700ml 추가, 표고버섯 가루 2 \n 15분 끓인후 쑥갓넣어 5분, 모자란간은 소금으로 맞추기',
          },
          {
            name: '된장찌개',
            item: `감자, 고기, 두부, 버섯, 양파, 애호박`,
            description:
              '돼지고기에 액젓1을 넣고 10분 끓여주기 \n감자 넣고 10분더 끓여주기\n물 보충후 양파, 애호박, 두부, 버섯 넣고 10분 더끓이고 고추가루 살짝 뿌려주기',
          },
          {
            name: '순두부찌개',
            item: `돼지고기, 순두부, 양파, 파, 액젓, 간장, 고추가루, 굴소스, 설텅, 애호박, 후추설탕`,
            description:
              '기름을 두르고 돼지고기를 볶아준다\n고추가루를 넣고 고추기름을 내준다\n액젓 1을 넣어 같이 볶아준다\n굴소스를 넣고 한번 더 볶아준다\n물을 넣고 다진마늘 1, 간장 1, 설탕 조금, 호박, 파, 양파를 넣고 끓인다\n순두부, 후추 넣어 끓인후 마무리',
          },
          {
            name: '샤브샤브',
            item: `멸치육수, 각종 버섯, 청경채, 소고기, 양파`,
            description:
              '물 1L에 멸치육수 코인을 넣고 끓여준다.(다진마늘 0.5 선택)\n야채넣고 끓이면서 고기넣고 먹기',
          },
          {
            name: '닭도리탕',
            item: `닭, 양파 1개, 당근 반개,감자 2개, 진간장 5스푼, 고춧가루 2스푼, 매운 고춧가루 1스푼, 설탕 2스푼, 미림 1스푼, 다진마늘 1스푼, 고추장 1스푼`,
            description: '닭, 감자',
          },
          { name: '삼계탕', description: '여름 보양식' },
          { name: '비지찌개', description: '비지, 돼지고기' },
          { name: '명란비지찌개', description: '비지, 명란' },
        ],
      },
      {
        name: '전',
        children: [
          { name: '김치감자전', description: '' },
          { name: '닭전', description: '' },
          { name: '감자전', description: '' },
          { name: '김치전', description: '' },
          { name: '애호박새우전', description: '' },
          { name: '양배추전', description: '' },
          { name: '육전', description: '' },
          { name: '부추전', description: '' },
          { name: '파전', description: '' },
          { name: '배추전', description: '' },
        ],
      },
      {
        name: '식사',
        children: [
          { name: '삼겹살&목살', description: '' },
          { name: '수육', description: '' },
          { name: '제육볶음', description: '' },
          { name: '불고기전골', description: '' },
          { name: '만두전골', description: '' },
          { name: '족발국수', description: '' },
          { name: '고기국수', description: '' },
          { name: '닭다리살 스테이크', description: '' },
          { name: '매운갈비찜', description: '' },
          { name: '쭈꾸미삼겹살', description: '' },
          { name: '국물제육', description: '' },
          { name: '명란밥', description: '' },
          { name: '명란솥밥', description: '' },
          { name: '연어솥밥', description: '' },
          { name: '불닭', description: '' },
          { name: '비빔국수', description: '' },
          { name: '간장국수', description: '' },
          { name: '애호박국수', description: '' },
          { name: '우동', description: '' },
        ],
      },
      {
        name: '안주',
        children: [
          { name: '배추찜', description: '' },
          { name: '두부김치', description: '' },
          { name: '골뱅이무침', description: '' },
          { name: '허니갈릭치킨', description: '' },
          { name: '집코바', description: '' },
          { name: '고추바사삭', description: '' },
          { name: '양념치킨', description: '' },
          { name: '콘치즈', description: '' },
        ],
      },
      {
        name: '반찬',
        children: [
          { name: '계란말이', description: '' },
          { name: '두부부침', description: '' },
          { name: '떡갈비', description: '' },
          { name: '깻잎무침', description: '' },
        ],
      },
      {
        name: '간식',
        children: [
          { name: '떡볶이', description: '' },
          { name: '국물 떡볶이', description: '' },
          { name: '즉석 떡볶이', description: '' },
          { name: '한판 떡꼬치', description: '' },
        ],
      },
    ],
  },
  chinese: {
    imageUrl:
      'https://media.istockphoto.com/id/913931820/ko/%EC%82%AC%EC%A7%84/%EB%86%92%EC%9D%80-%EB%B6%88%ED%83%80-%ED%99%94-%EC%97%BC%EC%97%90-%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91-%EC%A3%BC%EB%B0%A9%EC%97%90%EC%84%9C-%EC%9A%94%EB%A6%AC%EC%82%AC-%EB%82%9C%EB%A1%9C.jpg?s=2048x2048&w=is&k=20&c=Zci9gsKETGYjet6y590kniPT8e6Nu6mEpeO1_jsDT9U=',

    name: '중식',
    description: '요리, 식사',
    menus: [
      {
        name: '식사류',
        children: [
          { name: '짜장면', description: '' },
          { name: '짬뽕', description: '' },
          { name: '볶음짬뽕', description: '' },
          { name: '볶음밥', description: '' },
          { name: '새우볶음밥', description: '' },
          { name: '짜장밥', description: '' },
          { name: '짬뽕밥', description: '' },
        ],
      },
      {
        name: '요리류',
        children: [
          { name: '마라샹궈', description: '' },
          { name: '깐쇼새우', description: '' },
          { name: '크림새우', description: '' },
          { name: '탕수육', description: '' },
          { name: '동파육', description: '' },
          { name: '유린기', description: '' },
          { name: '깐풍기', description: '' },
          { name: '마파두부', description: '' },
          { name: '어향가지', description: '' },
        ],
      },
    ],
  },
  japanese: {
    imageUrl:
      'https://images.unsplash.com/photo-1679279726937-122c49626802?q=80&w=4740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    name: '일식',
    description: '식사, 안주',
    menus: [
      {
        name: '식사',
        children: [
          { name: '부타동', description: '' },
          { name: '일본식 커리', description: '' },
          { name: '야끼소바', description: '' },
        ],
      },
      {
        name: '안주',
        children: [
          { name: '소고기 숙주볶음', description: '' },
          { name: '치킨난반', description: '' },
          { name: '소고기 야키니꾸', description: '' },
        ],
      },
    ],
  },
  western: {
    name: '양식',
    description: '에피타이저, 스프, 메인, 파스타 등',
    imageUrl:
      'https://images.unsplash.com/photo-1642524255315-bf1f27f5a885?q=80&w=4128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    menus: [
      {
        name: '에피타이져',
        children: [
          { name: '브루스케타', description: '' },
          { name: '새우 샌드위치', description: '' },
          { name: '잠봉 샌드위치', description: '' },
          { name: '치킨 샌드위치', description: '' },
          { name: '계란 샌드위치', description: '' },
          { name: '부라타치즈', description: '' },
          { name: '웨지감자', description: '' },
          { name: '프렌치 토스트', description: '' },
        ],
      },
      {
        name: '파스타',
        children: [
          { name: '알리오올리오', description: '' },
          { name: '봉골레', description: '' },
          { name: '크림 파스타', description: '' },
          { name: '아마트리치아나', description: '' },
          { name: '뇨끼', description: '' },
          { name: '라자냐', description: '' },
          { name: '브리치즈 파스타', description: '' },
          { name: '아몬드 파스타', description: '' },
          { name: '바질페스토 파스타', description: '' },
          { name: '스칼렛요한슨 파스타', description: '' },
        ],
      },
      {
        name: '메인',
        children: [
          { name: '안심 스테이크', description: '' },
          { name: '등심 스테이크', description: '' },
          { name: '스테이크&시금치 크림', description: '' },
          { name: '연어파피요트', description: '' },
          { name: '연어&시금치 크림', description: '' },
          { name: '감바스', description: '' },
          { name: '꿀대구', description: '' },
          { name: '문어 새비체', description: '' },
          { name: '수제버거', description: '' },
          { name: '레몬크림치킨', description: '' },
          { name: '풀드포크', description: '' },
          { name: '피자', description: '' },
          { name: '피자(또띠아)', description: '' },
          { name: '샥슈카(에그인헬)', description: '' },
          { name: '찹스테이크', description: '' },
          { name: '미트볼', description: '' },
          { name: '코코넛새우', description: '' },
        ],
      },
      {
        name: '스프',
        children: [
          { name: '감자스프', description: '' },
          { name: '단호박스프', description: '' },
          { name: '양파스프', description: '' },
          { name: '클램차우더', description: '' },
        ],
      },
    ],
  },
};
