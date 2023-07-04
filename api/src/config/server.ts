import fastify from "fastify"

const PORT = 3000

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

export const ServerConfig = {
	server, PORT
}