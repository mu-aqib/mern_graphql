const { projects, clients } = require('../dummyData');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
  } = require('graphql');

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});

// projects
const ProjectsType = new GraphQLObjectType({
    name: 'Projects',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
              return clients.find(cl=> parent.clientId == cl.id);
            },
        },
    }),
});

// queries...

const rootQuery = new GraphQLObjectType({
    name: 'root_query',
    fields: ()=> ({

        // get all projects
        allProject: {
            type: new GraphQLList(ProjectsType),
            resolve(parent, arg){
                return projects
            }
        },

        // get all projects
        Project: {
            type: ProjectsType,
            args: { id: { type: GraphQLID } },
            resolve(parent, arg){
                return projects.find(proj=> proj.id === arg.id)
            }
        },

        // all clients data
        allClient: {
            type: new GraphQLList(ClientType),
            resolve(parent, arg){
                return clients
            }
        },
        // specific client by id
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return clients.find( client => client.id === args.id )
            }
        }
    })
}) 

module.exports = new GraphQLSchema({
    query: rootQuery
})