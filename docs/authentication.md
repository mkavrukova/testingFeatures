#<a name="authentication"></a>Authentication

##<a name="create-user-with-email-and-password"></a>Create user account with email and password

* **URL**

  `POST` 
  
  /users/
  
* **Data Json Payload**

```json
{
  "firstname": "",
  "lastname": "",
  "email": "",
  "password" : ""
}
```

|Name|Type|Required|Description|
|----|----|--------|-----------|
|`email`|*string*|true| User's email |
|`password`|*string*|true| User's password |
|`firstname`|*string*|| User's firstname |
|`lastname`|*string*|| User's lastname |


* **Success Response:**

  * **Code:** 201
  * **Headers:**
  
	|Name|Description|
  |----|-----------|
  |`Authorization`|Authorization token for secure communication between a client and the REST API|
 	  
   * **Content:**
  ```json
	{
	  "id":1,
	  "firstname": "",
	  "lastname": "",
	  "email": "",
	  "alias": "",
	  "imageUrl": "",
	  "phone": null,
	  "experience": "",
      "location": {
        "name": "",
        "lat": 0,
        "lon": 0
      },
	  "emailVerified": false,
	  "phoneVerified": false,
	  "rate": 0,
	  "rateCount": 0,
	  "birthYear": 1984,
	  "createdDate": "2015-06-24T10:10:12.571Z"
	}
  ```
 
* **Error Response:**
	
	* **Code:** 400 BAD REQUEST
    * **Content:** 
    ```json
    {
	  "error": "Invalid parameters",
	  "details": {
		  "email": "Invalid email"
	  }
	}
    ```
    
##<a name="login-user-with-email-and-password">Login a user with email and password

* **URL**

  `POST` 
  
  /login/
  
* **Data Json Payload**
		
```json
{
  "email": "",
  "password": ""
}
```


|Name|Type|Required|Description|
|----|----|--------|-----------|
|`email`|*string*|true| User's email |
|`password`|*string*|true| User's password |

* **Success Response:**

  * **Code:** 200
  * **Headers:**
  
|Name|Description|
|----|-----------|
|`Authorization`|Authorization token for secure communication between a client and the REST API|
  
  * **Content:**
  ```json
	{
	  "id":1,
	  "firstname": "",
	  "lastname": "",
	  "email": "",
	  "imageUrl": ""
	}
  ```
 
* **Error Response:**
	
	* **Code:** 400 BAD REQUEST
    	* **Content:** 
	    ```json
	    {
		  "error": "Invalid parameters",
		  "details": {
			  "email": "Invalid email"
		  }
		}
	    ```
