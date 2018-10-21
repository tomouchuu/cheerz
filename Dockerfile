# Use Node.js version 10
FROM mhart/alpine-node:10

# Set the working directory
WORKDIR /usr/src

# Copy package manager files to the working directory and run install
COPY .npmrc package.json yarn.lock ./
RUN yarn install

# Copy all files to the working directory
COPY . .

# Build the app and move the resulting build to the `/public` directory
RUN yarn run build:web
RUN yarn run build:docs
RUN mv ./build /public
RUN mv ./styleguide/build /public/build
RUN mkdir ./public/docs
RUN mv ./styleguide/index.html /public/docs