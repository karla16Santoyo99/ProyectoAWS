import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../graphql/mutations";
import { getTodo, listTodos } from "../graphql/queries";
import { onCreateTodo } from "../graphql/subscriptions";

const list = async () =>{
	try{
		const todo = await API.graphql(graphqlOperation(listTodos));
		return todo.data.listTodos.items;
	}catch(error){
		console.error(error)
	}
}

const create = async (todo) => {
	try{
		const nuevoTodo = await 
		API.graphql(graphqlOperation(createTodo, { input: todo })
		);
	} catch(error){
		console.log(error);
	}
}
//update

//delete

const onCreate = async (subscriptionFunction) => {
	const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
		next: (todoDatos) => {
			subscriptionFunction;
		},
	});
	return subscription;
}
export { list, create, onCreate};