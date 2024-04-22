import Link from "next/link";
import NavBar from "./components/NavBar";

const menuOptions = [
  "List all ToDos",
  "List API elements",
  "Create information",
  "Update Information",
  "Pagination",
];

function menuLinks(index: number): string {
  switch (index) {
    case 0:
      return "/todos";
    case 1:
      return "/list-elements";
    case 2:
      return "create-element";
    case 3:
      return "update-element";
    case 4:
      return "/pagination";

    default:
      "/";
  }
  return "/";
}

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div className="flex min-h-screen flex-col items-center justify-between pt-7 bg-gradient-to-r from-slate-700 to-green-600">
        <div className="flex h-screen justify-items-center flex-col gap-2">
          <h1 className="justify-center text-white text-4xl font-mono">
            {" "}
            To Do APP
          </h1>
          {menuOptions.map((option, index) => (
            <div
              key={index}
              className="rounded-md border p-1 overflow-auto grid text-center hover:bg-gray-400 text"
            >
              <Link href={menuLinks(index)}>{option}</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
