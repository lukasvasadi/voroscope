# Voroscope Beta

Source code for the Voroscope server and client projects.

## Contents

- [Introduction](#introduction)
- [Server](#server)
- [Client](#client)
- [Helpful Links](#helpful-links)

## Introduction

This project provides the client and server scripts to control the Voroscope automated imaging system. Move commands are sent to the Raspberry Pi controller and imaging data is received to the host PC through a web socket connection.

This project uses the Raspberry Pi as a control board that shuttles data between a remote client and the motion control board. **Note:** To run this application using a remote machine, ensure that the network firewall allows peer-to-peer connections. However, it is possible to run the client interface direct from the Raspberry Pi. In this case, the server and client become the same machine communicating via localhost. While convenient, this results in a relatively inefficient means of handling the imaging data, as there are faster inter-process communication (IPC) protocols for data transfer within the same machine than network sockets.

To simplify the intercommunication protocol, the Raspberry Pi runs one threaded server that connects two separate client sockets, one dedicated to receiving image streams and the other for g-code and miscellaneous data transfer. The reason for this design choice was to eliminate the need to send headers before each image transmission, thus improving data transfer efficiency. In other words, since we assume each subsequent image in the stream contains the same amount of data, we can break out that transmission to a dedicated client socket that only reads incoming data with that byte size.

## Server

Server code is based on the picamera module for controlling the Raspberry Pi camera module, and the websockets module for transmitting data over a remote connection.

## Client

Client code is a desktop application built with Electron and React. The initial application configuration was based on the instructions from [Matteo Mazzarolo](https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/).

Node.js and npm are base requirements to setup the development environment.

### Windows

1. Install the Node.js version manager for Windows ([nvm-windows](https://github.com/coreybutler/nvm-windows)). The github page includes a link to the executable installer. _This requires that all previous versions of Node.js be removed from the user profile_.

2. Install the latest stable version of Node.js:

```ps
nvm install stable
```

3. Confirm successful Node.js installation:

```ps
node --version
```

4. Clone the repository, navigate to the project directory, and install the package dependencies:

```ps
npm install
```

### Mac/Linux

1. Install the Node.js version manager ([nvm](https://github.com/nvm-sh/nvm)):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. Verify installation:

```bash
command -v nvm
```

If the nvm command is missing, you may need to refresh your environment:

```bash
source ~/.bashrc
```

2. Install the latest stable version of Node.js:

```bash
nvm install stable
```

3. Confirm successful Node.js installation:

```bash
node --version
```

3. Clone the repository, navigate to the project directory, and install the package dependencies:

```bash
npm install
```

### Raspberry Pi

1. Install the Node.js version manager:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

2. Load nvm:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3. In a new terminal, confirm successful nvm installation:

```bash
command -v nvm
```

4. Install the latest stable version of Node.js:

```bash
nvm install stable
```

5. Clone the repository, navigate to the project directory, and install the package dependencies:

```bash
npm install
```

### Install package dependencies

To install dependencies:

```bash
yarn install
```

To run the app in development mode:

```bash
yarn electron:start
```

## Helpful Links

- [Fontawesome for React](https://fontawesome.com/v5/docs/web/use-with/react)
- [Convert blob to base64 encoding](https://www.geeksforgeeks.org/how-to-convert-blob-to-base64-encoding-using-javascript/)
