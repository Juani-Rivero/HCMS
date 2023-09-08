DOCKER_USERNAME ?= hcms
APPLICATION_NAME ?= patient

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

run:
	docker run -ti -p 3000:3000 ${DOCKER_USERNAME}/${APPLICATION_NAME}