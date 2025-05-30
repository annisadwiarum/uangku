import { supabaseAdmin } from "@/lib/supabase";

export default function Home() {
  const setView = async () => {
    const { data, error } = await supabaseAdmin
      .from("views")
      .insert({ name: "anonym 3" });
    if (data) console.log(data);
    if (error) console.log(error);
  };

  setView();
  return <div>Logged in</div>;
}
