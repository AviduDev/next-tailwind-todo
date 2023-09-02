type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

export default function TodoItem({ id, title }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer p-1 checked:ring-2"
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-gray-500 p-1 capitalize font-bold transition-all ease-in-out cursor-pointer"
      >
        {title}
      </label>
    </li>
  );
}
