docker-compose up

-- run migrations with docker
docker-compose exec node npm run db:migrate

-- run migrations
npm run db:migrate
