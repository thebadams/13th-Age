import { FastifyPluginAsync, RouteOptions } from "fastify";
import { getAllClasses } from "./classes.handler.js";

const getAllClassesOptions: RouteOptions = {
	method: 'GET',
	url: '/',
	handler: getAllClasses,
	// schema: {
	// 	response: {
	// 	200: 'string'
	// }
//}
}

const classRoutes: FastifyPluginAsync = async (fastify, options) => {
	fastify.route(getAllClassesOptions)
}

export const registerClassRoutes: FastifyPluginAsync = async (fastify, options) => {
	fastify.register(classRoutes, {prefix: '/classes'})
}