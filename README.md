## Available Scripts

### In the project directory run:
#### Installs all the required dependencies.
 ```npm i```

### To run in development mode (nodemon):
```npm run dev```

### To run:
```npm run start```

### Routes:
#### GET:
```http://localhost:5000/billing```

### Test route to check is Node/Express server is running:
#### GET:
```http://localhost:5000```

### Makes an API call to:
```http://localhost:8080/dashboard/api```

#### Returns reponse:
```
data: {
		id:,
		status: ,
		gateway: ,
		currencyCode: ,
		modifiedAt: ,
		createdAt:,
		expiresAt: ,
		gatewayAccountId: ,
		amount: ,
		paymentMethodType: ,
	}
  ```