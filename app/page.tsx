import Image from "next/image";
import { Button } from "@/components/ui/button"
import Tasks from "@/components/task-master/tasks";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Task Master</h1>
      <Button variant="secondary">Button</Button>

    <Tasks />
    </main>
  );
}
