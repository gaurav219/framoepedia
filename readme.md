## Creating an new create-react app when global installation of CRA fails

```shell
npx create-react-app@latest your-project-name --use-npm
```

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
docker run -p 3001:3000 -it <id>
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

## Starting NGINX using Dockerfile only

cd nginx

```shell
docker build -f Dockerfile.dev .
docker run -p 4000:80 -it <id>
```

visit http://localhost:4000 to view the NGINX app

---

## Running all applications simultaneously using docker-compose

```shell
docker-compose -f docker-compose-dev.yml up --build
# or
docker-compose -f docker-compose-dev.yml up
```

## View client frontend app after running docker-compose

visit localhost:4000 to view the client-frontend app

---

## View admin frontend app after running docker-compose

visit localhost:4000/admin to view the admin-frontend app

---

## View client backend app after running docker-compose

visit localhost:4000/client-backend/graphql to view the client-backend app

---

## View admin backend app after running docker-compose

visit localhost:4000/admin-backend/graphql to view the admin-backend app

## Service Level commands (specific to postgres) in shell

---

```bash
# Stopping a running postgres service
systemctl stop postgresql
```

```bash
# Starting a stopped postgres service
systemctl start postgresql
```

```bash
# Show status of an already running service
systemctl status postgresql
```

```bash
# Disable service(not auto-start any more)
systemctl disable postgresql
```

```bash
# enable service postgresql(auto-start)
systemctl enable postgresql
```

## Handling lib/[packages] Git Submodules

1. Make changes to specific lib submodules
2. Add those changes
3. Commit those changes
4. Push those changes to seperate repo of submodule
5. Update root repo with all the changes so that latest submodules changes can be referenced in main .git file
