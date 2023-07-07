import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function getAllClasses(this: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
	try {
		return 'All Classes'
	} catch (error) {
		reply.statusCode = 500;
		return error
	}
}