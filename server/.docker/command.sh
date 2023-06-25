#!/bim/bash

npm install
npx prisma generate
npx prisma migrate dev
npm run dev
tail -f /dev/null