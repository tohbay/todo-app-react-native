import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
  
  
  const todos = useQuery(api.todos.getTodos);
  console.log({ todos });

  const addTodo = useMutation(api.todos.addTodo);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

      <TouchableOpacity
        onPress={() =>
          addTodo({ text: "Learn to code react native professionally" })
        }
      >
        <Text>Add a New Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>Clear All Todos</Text>
      </TouchableOpacity>