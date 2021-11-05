import { WebSocket, WebSocketServer, Server, RawData } from 'ws'
import defaults from './defaults'
import { ServerConfig } from '../types'

class RealSyncServer {
  ws: WebSocketServer
  connections: WebSocket[] = []

  constructor(srvcnf: ServerConfig) {
    let config = { ...srvcnf }
    config.port = config.port || defaults.port // set deaults port if not provided

    this.ws = new Server({ port: config.port })
    this.ws.on('connection', (socket) => {
      socket.on('message', (message) => {
        this.handler(message, socket)
      })
    })
  }

  handler(message: RawData, socket: WebSocket) {}

  set(name: string, value: string | number | boolean) {}

  register(name: string, func: Function) {}
}

export { RealSyncServer }
