## Before you begin
#### In terminal:
```
cp .env.local .env
``` 
#### Add corresponding values to .env file
```
API_KEY=
SITE_NAME=
GATEWAY_ID=
```

## Available Scripts

### In the project directory run:
#### Installs all the required dependencies.
 ```
 npm i
 ```

### To run in development mode (nodemon):
```
npm run dev
```

### To build and run:
```
npm run start
```

### Routes
#### GET:
```
http://localhost:5000/billing/details/payment/generate
```

### Test route to check is Node/Express server is running
#### GET:
```
http://localhost:5000
```

### Able to make an API call to:
```http://localhost:8080/dashboard/api``` 
### and ```chargebee```

#### Returns this response:
```
{
	id:,
	status: ,
	gateway: ,
	currencyCode: ,
	modifiedAt: ,
	createdAt:,
	expiresAt: ,
	gatewayAccountId: ,
	amount: ,
	paymentMethodType: 
}
```