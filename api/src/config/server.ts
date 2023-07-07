import fastify from "fastify"
import { registerAPIRoutes } from "../api/api.routes.js"

const register = async () => {
	const server = fastify({logger: true})
	server.register(registerAPIRoutes)
	server.get('/ping', async (request, reply) => {
  return 'pong\n'
})
	return server
}
const PORT = 3000

const server = await register()



export const ServerConfig = {
	server, PORT
}