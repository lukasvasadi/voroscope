# Voroscope Beta
Source code for the Voroscope server and client projects.

## Contents
* [Server](#server)
* [Client](#client)
* [Helpful Links](#helpful-links)

## Server
Server code is based on the picamera module for controlling the Raspberry Pi camera module, and the websockets module for transmitting data over a remote connection.

## Client
Client code is a desktop application built with Electron and React. The initial application configuration was based on the instructions from [Matteo Mazzarolo](https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/).

To run the app in development mode:
```bash
yarn electron:start
```

## Helpful Links
* [Fontawesome for React](https://fontawesome.com/v5/docs/web/use-with/react)