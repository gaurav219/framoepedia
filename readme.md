## Starting admin-frontend using Dockerfile only

cd admin-frontend

```shell
docker build -f Dockerfile.dev .
docker run -p 3000:3000 -it <id>
```

visit localhost:3000 to view the admin-frontend app

---

## Starting client-frontend using Dockerfile only

cd client-frontend

```shell
docker build -f Dockerfile.dev .
docker run -p 3001:3001 -it <id>
```

visit localhost:3001 to view the client-frontend app

---

## Starting admin-backend using Dockerfile only

cd admin-backend

```shell
docker build -f Dockerfile.dev .
docker run -p 5000:5000 -it <id>
```

visit localhost:5000 to view the admin-backend app

---

---

## Starting client-backend using Dockerfile only

cd client-backend

```shell
docker build -f Dockerfile.dev .
docker run -p 5001:5001 -it <id>
```

visit http://0.0.0.0:5001 to view the client-backend app

---

## Starting storage-broker using Dockerfile only

cd client-backend

```shell
docker build -f Dockerfile.dev .
docker run -p 5005:5005 -it <id>
```

visit http://localhost:5005 to view the storage-broker app

---
