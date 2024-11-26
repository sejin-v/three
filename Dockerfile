# 1. Nginx의 공식 이미지를 기반으로 한다.
FROM nginx:alpine

# 2. 빌드된 Vue.js 애플리케이션 파일을 Nginx의 HTML 디렉토리로 복사
# 현재 프로젝트의 dist 폴더를 컨테이너의 /usr/share/nginx/html로 복사
COPY ./dist /usr/share/nginx/html

# 3. 사용자 지정 Nginx 설정 파일을 컨테이너에 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 4. 컨테이너의 8080 포트를 열기
EXPOSE 8080

# 5. Nginx를 실행하여 요청을 처리하도록 설정
CMD ["nginx", "-g", "daemon off;"]
