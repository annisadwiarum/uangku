import { supabase } from "@/lib/supabase";

export default function Home() {
  const setView = async () => {
    const { data, error } = await supabase
      .from("views")
      .insert({ name: "anonym 2" });
    if (data) console.log(data);
    if (error) console.log(error);
  };

  setView();
  return <div>Hello World! yeaa</div>;
}
