# BE1020

#### Install dependencies:
```
npm install
```

#### Launch server:
```
npm run start
```

#### Access server API via web browser:
```
http://localhost:3000/<API>
```
<i>Example: </i>
```
http://localhost:3000/timestamp
```

#### POST Request to /registrations via shell:
```
curl --request POST \
--url http://localhost:3000/registrations \
--header 'content-type: application/json' \
--data '{
    "username": string,
    "displayed_name": string,
    "password": string
}'
```
<i>Example: </i>
```
curl --request POST \
--url http://localhost:3000/registrations \
--header 'content-type: application/json' \
--data '{
    "username": "minhhuy",
    "displayed_name": "Huy Do",
    "password": "12345"
}'
```