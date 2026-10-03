# Running the application locally

1. start the database
```bash
cd database
docker compose up -d
```
2. connect to db using dbeaver (use dev credentials stored in compose.yml)

3. initialize schema and seed sample data using dbeaver script functionality

4. run the springboot api
```bash
cd springboot-api
./mvnw spring-boot:run
```

5. run the react application
```bash
cd react-app
npm run dev
```