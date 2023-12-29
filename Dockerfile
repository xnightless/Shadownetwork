# use a specific Node.js version based on your appplication requirements
FROM node:14-apline

# Set the NODE_ENV to production
ENV NODE_ENV=production

# Set the working directory in the container 
WORKDIR /app

# Copy only the package.json and package-lock.json files to leverage Docker layer caching
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies
RUN npm install --production

# Expose the port that the application will run on
EXPOSE 8080

# Copy the entire application code to the container
COPY . .

# Command to run the application
CMD [ "npm", "start" ]
