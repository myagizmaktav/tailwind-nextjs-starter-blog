# Use the official Node.js Alpine image as the base image
FROM node:20
# FROM  ubuntu:22.04

# Set the working directory inside the container
WORKDIR /app/project

# Copy package.json and package-lock.json to the working directory
COPY package*.json .
# COPY ./.next ./.next

COPY . .


     
RUN ls && \
    chmod -R 755 ./ && \
    # echo "deb https://ftp.halifax.rwth-aachen.de/debian bookworm main" >> /etc/apt/temp.list && \
    # echo "deb https://ftp.halifax.rwth-aachen.de/debian bookworm-updates main " >> /etc/apt/temp.list && \
    # cat /etc/apt/temp.list /etc/apt/sources.list > /etc/apt/sources.list.new && mv /etc/apt/sources.list.new /etc/apt/sources.list && \
    # apt install curl git procps sudo -y && \  
    sleep 5 && \
    node -v && \
    # npm uninstall tsc && \
    # npm install -D typescript && \
    # npm i -g yarn && \
    yarn 

    # yarn -v && \
    # yarn && \
    # rm -rf ./clone && \
    # rm -rf ./dist/cache 
RUN chmod -R a+rx ./

EXPOSE 3000 3001

# CMD ["npm" , "run", "start" ]

# VOLUME [ "/app/project" ]
# EXPOSE 3001

