PROJECT DESCRIPTION
    This is a simple public API that returns:
    a) Registered email address for HNG12.
    b) currentDateTime in ISO 8601 formatted timeStamp.
    c) The GitHub url for this project.

    
SETUP INSTRUCTIONS
  1. Clone the repository
       git clone https://github.com/tolulope23-ops/publicApi.git
       cd publicApi
  2. Install dependencies
       npm install
  3. SetUp environment variables
       create a .env file and add:
         email: yourEmail
         PORT:3000
         gitHubUrl: https://github.com/tolulope23-ops/publicApi.git
  4. Run the Server
       npm app.js

     
API DOCUMENTATION
  Endpoint: get /api/v1/basicInfo
  Response format:
  {
    "success": true,
    "message": "basic information",
    "status": 200,
    "data": {
      "email": "yourEmail",
      "currentDateTime": "2025-01-31T03:00:02.089Z",
      "gitHubUrl": "https://github.com/tolulope23-ops/publicApi.git"
    }
         
     
