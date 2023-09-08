# Patient Backend


### Execute it

```
make build - to create docker image
make run   - to create mongo db docker and patient docker


En caso de no poder cerrar el contenedor de la aplicacion, correr:
docker rm -f patient-service
```

### Endpoint
- http://localhost:3000/patient

### Tests
```
// Get patients
curl http://localhost:3000/patient

// Get patient by id
curl http://localhost:3000/patient/:id

// Create new patient
curl -X POST http://localhost:3000/patient \
   -H 'Content-Type: application/json' \
   -d '{"name":"Juan", "lastname":"Rivero", "birthday": "01/01/01"}'
```
