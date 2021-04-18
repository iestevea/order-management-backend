mkdir -p ./dist/public

cd ../front
export BASE_API_URL=http://localhost:8081
npm install
npm run build
cp -r ./dist/. ../back/dist/public
