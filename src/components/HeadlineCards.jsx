import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Winter Special, spare 30%
          </p>
          <p className="px-2">Vom 20.12 - 30.12</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Bestelle jetzt
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Kebab in bread with vegetables"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Jeden Tag</p>
          <p className="px-2">Neue Restaurants</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Bestelle jetzt
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Different sushi"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Wir liefern auch</p>
          <p className="px-2">köstliche Süßspeisen</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Bestelle jetzt
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1650802315766-f8a74cbde8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJha2xhdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Baklava"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
