import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "./components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}


export default async function Home() {
  const todos = await getTodos();
  // await prisma.todo.create({ data: { title: "check for errors", complete: false } })

  return (
    <main className="flex min-h-screen flex-col items-center justify-top">
      {/* -----header----- */}
      <header className="flex justify-between items-center flex-row w-full">
        <h1 className="">Add Your ToDos</h1>
        <Link
          href="/todo"
          className="border border-blue-900 text-blue-900 p-2 rounded-sm font-bold hover:bg-blue-950 focus-within:text-blue-50 focus-within:bg-blue-950 hover:text-blue-50 ease-in transition-all"
        >
          New Todo
        </Link>
      </header>

      {/* -----todo list----- */}
      <ol className="pl-5">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ol>
    </main>
  );
}
