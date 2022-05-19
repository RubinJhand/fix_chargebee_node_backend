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
### If your originating local environment is not from:
```
https://localhost:3000
```
#### In .env file, change the value of:
```
CORS_ORIGIN=
```
## Available Scripts

### Install required dependencies.
 ```
 npm i
 ```

### To run in development mode (nodemon):
*Note: The combination of* ```babel``` *and* ```nodemon``` *may prevent* ```nodemon``` *from auto-restarting the server on some Windows computers.*
*In this case, build and run using the instruction below.* 

```
npm run dev
```

### To build and run:
```
npm run start
```

## Routes
- Test route to check is Node/Express server is running: 
	<http://localhost:5000>
	 

- Generates a payment intent: 
 	<http://localhost:5000/billing/details/payment/generate>


	-  Returns this response:
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