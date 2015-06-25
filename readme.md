#Overview

####This document contains description of all the REST API calls for the GoGoFish application

###Content:

 * [**Authentication, Registration and Login**](#authentication) - calls and model structure related to user authentication
  * [Create user account with email and password](#create-user-with-email-and-password)
  * [Login a user with email and password](#login-user-with-email-and-password)
 * [**User**](user) - calls and model structure related updating a user
 * [**Search**](search) - calls and model structure related to returning a list of trips, based on criteria
 * [**Trip**](trip) - calls and model structure related to creating, updating and managing a trip
 * [**Places**](place) - calls and model structure related to creating and retrieving places
 * [**Booking**](bookings) - calls and model structure related to requesting/accepting/declining managing bookings for a trip
 
 
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



 
