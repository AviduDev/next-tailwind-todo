import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server"

    // getting the form data
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title")
    }

    // adding above value to the database
    await prisma.todo.create({ data: {title, complete: false} })
    // after completion redirect back to the homepage
    redirect("/")
} 

export default function todo() {
  return (
    <main>
      <header>
        <h1>New Todo</h1>
      </header>

      {/* -----form----- */}
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border bg-transparent rounded-sm border-blue-900 p-1 outline-none focus-within:border-blue-300 transition-all ease-in-out capitalize"
        />

        <div className="flex w-full items-center justify-end align-middle">
            <Link href=".." className="scale-90 text-red-800 p-2 rounded-sm font-normal hover:scale-100 hover:font-bold ease-in transition-all m-1">Cancel</Link>
            <button type="submit" className="border border-blue-800 text-blue-800 p-2 px-5 rounded-sm font-bold hover:bg-blue-800 focus-within:bg-blue-800 focus-within:text-blue-50 hover:text-blue-50 ease-in transition-all m-1">Add</button>
        </div>
      </form>
    </main>
  );
}
