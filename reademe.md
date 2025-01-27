Step 1: Set Up Your Project
Create a New Folder:

Name the folder something like backend-server.
Initialize a Node.js Project:

Open a terminal and navigate to the folder.
Run the following command to create a package.json file:

npm init -y

Install Express as a dependency:

npm install express
Create a Server File:

In the folder, create a file named server.js.
Copy the following code into server.js:
javascript
l

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Kalvians! Your backend server is live!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

Add a Start Script:

Open the package.json file and update the scripts section to include:

"scripts": {
    "start": "node server.js"
}
Test Locally:

Start the server locally by running:

npm start
Visit http://localhost:3000 in your browser to see the message.


Step 2: Push Code to GitHub
Initialize a Git Repository:

Run the following commands:

git init
git add .
git commit -m "Initial commit"
Create a GitHub Repository:

Go to GitHub and create a new repository.
Follow the instructions provided by GitHub to link your local repository:
bash
Copy
Edit
git remote add origin <your-repository-URL>
git branch -M main
git push -u origin main
Step 3: Deploy on Render
Create a Render Account:

Go to Render and sign up or log in.
Create a New Web Service:

Click on "New" and select "Web Service".
Connect Your GitHub Repository:

Link Render to your GitHub account.
Select the repository you just pushed.
Configure Deployment:

Branch: Select main (or the branch where your code is).
Root Directory: Leave it blank unless your code is in a subfolder.
Build Command: Leave it blank (not required for this project).
Start Command: Enter:
bash
Copy
Edit
npm start
Set Up Environment Variables:

Click on Advanced Settings and add an environment variable for PORT (optional, as Render automatically assigns a port).
Deploy the Service:

Click Create Web Service.
Render will begin the deployment process.
Step 4: Test Your Deployed Server
Access the Live URL:

Once deployment is complete, Render will provide a URL for your server (e.g., https://your-service.onrender.com).
Test in a Browser:

Open the URL in your browser. You should see the message:
csharp
Copy
Edit
Hello, Kalvians! Your backend server is live!
Test with Postman (Optional):

Use Postman to send a GET request to the deployed URL to ensure everything works.
Step 5: Update and Redeploy
Make Changes to Your Code:

Update the server.js file or other files as needed.
Push Changes to GitHub:

Commit and push your changes:
bash
Copy
Edit
git add .
git commit -m "Update server"
git push
Trigger a Redeploy on Render:

Render will automatically detect changes and redeploy your service.
