import { FastifyPlugin, FastifyPluginAsync } from "fastify"
import { registerClassRoutes } from "./classes/classes.routes.js"

const apiRoutes: FastifyPluginAsync = async (fastify, options) => {
	fastify.register(registerClassRoutes)
}

export const registerAPIRoutes: FastifyPluginAsync = async (fastify, options) => {
	fastify.register(apiRoutes, {prefix: '/api'})
}