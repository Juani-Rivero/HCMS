DOCKER_USERNAME ?= hcms
APPLICATION_NAME ?= patient
MONGO_CONTAINER_NAME = mongo

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .


.PHONY: run

run:
	@# Verify if mongo docker already exist
	@if docker ps -a --format '{{.Names}}' | grep -q '^$(MONGO_CONTAINER_NAME)$$'; then \
		echo "El contenedor Docker '$(MONGO_CONTAINER_NAME)' ya existe."; \
	else \
		echo "El contenedor Docker '$(MONGO_CONTAINER_NAME)' no existe. Creando..."; \
		docker run -ti -d --name $(MONGO_CONTAINER_NAME) mongo:7.0; \
		echo "Contenedor Docker '$(MONGO_CONTAINER_NAME)' creado con éxito."; \
	fi
	@# Run patient microservice
	docker run -ti -p 3000:3000 --name patient-service --link mongo ${DOCKER_USERNAME}/${APPLICATION_NAME}
