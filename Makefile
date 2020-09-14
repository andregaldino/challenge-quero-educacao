.PHONY: up
up:
	docker-compose up -d

.PHONY: build
build:
	docker-compose build

.PHONY: attach
attach: up
	docker-compose exec api bash

.PHONY: install
install: up
	docker-compose exec api yarn install

.PHONY: logs
logs:
	docker-compose logs -f --tail 100

.PHONY: stop
stop:
	docker-compose stop

.PHONY: tests
tests: up
	docker-compose exec api yarn test

.PHONY: migrate
migrate: up
	docker-compose exec api yarn sequelize db:migrate

.PHONY: mysql-client
mysql-client: up
	docker-compose exec database mysql -u root -h database -psecret

.PHONY: style-check
style-check: up
	docker-compose exec api yarn lint
