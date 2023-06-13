import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const [form, setForm] = useState("");
  const navigate = useNavigate();

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search", {
      state: form,
    });
    setForm("");
  };

  return (
    <div className="bg-gray-50 flex items-center">
      <section
        className="w-full bg-cover bg-center py-32 bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg)",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6">Welcome to My Ecommerce</h1>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae.
          </p>
          <form className="flex justify-center" onSubmit={onSearchSubmit}>
            <div className="relative w-1/2">
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg focus:outline-none"
                placeholder="Search phones, laptops, furnitures ..."
                value={form}
                onChange={(e) => setForm(e.target.value)}
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
