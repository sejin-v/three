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
            item: '소갈비 1kg, 양파 1개, 당근 1개, 감자 2개, 대파 2대, 마늘 6~7쪽, 간장 1/2컵, 설탕 2큰술, 미림 3큰술, 맛술 3큰술, 다시마육수 1L, 후추, 참기름 1큰술, 들기름 1큰술, 청주 2큰술, 소금, 통깨',
            description:
              '소갈비는 찬물에 30분 담가 핏물 빼기\n다시마육수(물 1L + 다시마 1장) 끓여 준비\n갈비, 다시마육수, 청주 넣고 중불에서 30분 삶기\n양념장(간장, 설탕, 미림, 맛술, 다진 마늘, 후추, 참기름) 준비\n삶은 갈비에 양념장, 썬 야채(당근, 감자, 양파, 대파) 넣고 20분 더 끓이기\n불 끄고 들기름 1큰술 추가, 소금으로 간 맞추고 통깨 뿌려 마무리',
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
          {
            name: '삼계탕',
            item: `닭, 통마늘 10개, 대파 1대, 한방 한포`,
            description:
              '여름 보양식\n물1.5L에 닭을 넣고 30분 푹 끓인다.\n통마늘, 한방 한포를 넣고 10~15분 더 끟여준다.\n간을 본후 모자란 간을 소금으로 맞춰주고 후추, 고명용 대파를 올려 먹는다.',
          },
          {
            name: '비지찌개',
            item: `비지 200g, 돼지고기 200g(국거리), 양파 1/2, 신김치 200g, 다진마늘 1스푼, 고추가루, 간장, 식용유, 소금, 후추, 액젓`,
            description: `돼지고기를 양간의 기름과 함꼐 볶아준다 \n다진양파, 다진마늘을 넣고 함꼐 볶는다. \n 김치를 넣고 고추가루를 넣어서 약불에 볶아준다. \n고추기름이 나오면 액젓을 반스푼 넣고 같이 볶아준다.\n물을 500ml넣고 끓여준 후 비지를 넣는다\n간장을 반스푼 넣고 모자란간은 소금으로 맞춘후 후추를 적당량 뿌려준다`,
          },
          {
            name: '명란비지찌개',
            item: `콩비지 400g,명란젓 1개, 김치 200g, 파 1대, 멸치 육수 코인 1개, 다시마 1조각, 고추가루 1스푼, 양파 1/2개, 다진마늘 1스푼, 들기름 1스푼,육수 3스푼, 고추가루 1스푼, 간장 3스푼, 쪽파 2줄`,
            description: `물 550mL, 코인, 다시마를 끓여 육수를 만든다 감치는 물에 행궈 잘게 다진다.\n명란은 껍질을 벗겨 참기름을 실짝 부려준다. \n양파 반개를 찹해준다.\n육수에 콩비지를 넣고 끓기 시작하면 다시마를 건지고\n 김치, 양파, 마늘, 고추가루, 명간젓을 넣는다 들기름 1스푼을 넣고 파를 뿌려준다`,
          },
        ],
      },
      {
        name: '전',
        children: [
          {
            name: '김치감자전',
            item: `감자, 김치, 햄, 전분가루, 식용유`,
            description: `감자를 믹서기에 갈아준뒤 채에 받쳐 물기를 뺴준다.\n김치(감자의 반정도)와 햄을 준비해 잘게 잘라준다.\n감자와 김치를 섞은후 감자에서 나온 전분도 섞어준다.\n전분가루를 조금 넣어 반죽의 농도를 맞춰준다.(약간 흐르는 정도)\n예열된 프라이팬에 구워준다.`,
          },
          {
            name: '닭전',
            item: '닭다리살 300g, 마늘 9개, 소금, 후추, 전분가루 6T, 물 3T, 우유, 파채, 간장, 미림, 올리고당, 설탕, 다진마늘',
            description: `닭다리살을 한입 크기로 잘라 우유에 10분 재운다.\n마늘을 편으로 썰어준다.\n물에 행군 후, 물 3T + 마늘 + 전분가루 6T + 소금 2꼬집 + 후추를 섞는다.\n기름 두른 중약불에 반죽을 올리고 꾹꾹 펴준다.\n앞뒤로 노릇하게 구워 접시에 옮겨 파채를 올리고 소스를 듬뿍 뿌린다.\n소스: 간장 2T, 미림 2T, 올리고당 2T, 설탕 1T, 다진마늘 1T를 전자레인지에 30초 돌려 끓어오르면 불을 끈다.`,
          },

          {
            name: '감자채전',
            item: '감자 2개, 양파 1/4개, 부침가루 3큰술, 전분가루 1큰술, 소금 1/2작은술, 후추 약간, 식용유',
            description:
              '감자의 껍질을 벗기고 채 썰어 찬물에 담가 전분을 제거한 후 물기를 짠다.\n양파를 채 썬다.\n큰 그릇에 감자, 양파, 부침가루, 전분가루, 소금, 후추를 넣고 잘 섞는다.\n팬에 기름을 두르고 중간 불로 예열한 뒤, 반죽을 한 숟가락씩 떠서 팬에 올리고 평평하게 눌러준다.\n한쪽이 노릇하게 익으면 뒤집어서 반대쪽도 노릇하게 구워준다.\n완성된 감자채전은 기름을 빼고, 먹기 좋은 크기로 잘라서 접시에 담아낸다.',
          },
          {
            name: '김치전',
            item: '김치, 햄, 전분가루, 설탕',
            description:
              '김치와 햄을 잘게 자른다.\n볼에 넣어 전분가루랑 물을 넣어 꿀정도 농도를 맞춰준다.\n설탕을 1/4스푼 정도 넣어준다.\n예열된 팬에 앞뒤로 잘구워준다.',
          },
          {
            name: '애호박새우전',
            item: '애호박, 양파, 새우, 소금, 전분가루',
            description:
              '애호박과 양파를 얇게 채썰고 소금을 뿌려 물기를 뽑아준다.\n전분가루를 넣어준다.\n새우도 작게 자르고 재료를 모두섞는다.\n예열된 팬에 앞뒤로 잘구워준다.',
          },
          {
            name: '양배추전',
            item: '양배추, 양파, 계란, 소금, 후추',
            description: '',
          },
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
