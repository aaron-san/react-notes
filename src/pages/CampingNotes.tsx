import React from "react";

const CampingNotes = () => {
  return (
    <div>
      <h1 id="camping">Camping</h1>
      <ul>
        <li>June to September are warm months and good for camping</li>
        <li>
          Mountain climbing, fishing, riverplay, camping, boating, stargazing,
          swimming, campfire, observing insects and plants, collecting rocks and
          shells
        </li>
      </ul>
      <h2 id="items-to-bring">Items to bring</h2>
      <h3 id="survival-">Survival 🧭</h3>
      <ul>
        <li>
          <input type="checkbox">Emergency kit</input>
        </li>
        <li>
          <input type="checkbox">Map (paper and phone(offline))</input>
        </li>
        <li>
          <input type="checkbox">Portable phone charger</input>
        </li>
        <li>
          <input type="checkbox">Batteries</input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Umbrella
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Flashlight (1 small)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Backpack
          </input>
        </li>
        <li>
          <input type="checkbox">Multipurpose knife</input>
        </li>
        <li>
          <input type="checkbox">Pencil and notebook</input>
        </li>
        <li>
          <input type="checkbox">Rope</input>
        </li>
      </ul>
      <h3 id="camp-fire-">Camp fire 🔥</h3>
      <ul>
        <li>
          <input type="checkbox">Fire disc (Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox">Fire shears (Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox">Igniter/torch burner (Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox">Silver Matte</input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Bundle of firewood (softwood / hardwood)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Newspaper
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Work gloves
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Lighter, chuckaman, matches
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Hand fan
          </input>
        </li>
        <li>
          <input type="checkbox">Saw</input>
        </li>
      </ul>
      <h3 id="food-">Food 🍙</h3>
      <ul>
        <li>
          <input type="checkbox">Lunch (instant ramen + sushi)</input>
          <ul>
            <li>
              <input type="checkbox">Bread</input>
            </li>
            <li>
              <input type="checkbox">Sandwich meat</input>
            </li>
            <li>
              <input type="checkbox">Cheese</input>
            </li>
            <li>
              <input type="checkbox">Sausages (pre-cooked)</input>
            </li>
            <li>
              <input type="checkbox">Rice packs</input>
            </li>
            <li>
              <input type="checkbox">Instant ramen</input>
            </li>
            <li>
              <input type="checkbox">Sushi rolls</input>
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox">Snacks (French toast + buttered corn)</input>
          <ul>
            <li>
              <input type="checkbox">Corn</input>
            </li>
            <li>
              <input type="checkbox">Bread</input>
            </li>
            <li>
              <input type="checkbox">Eggs</input>
            </li>
            <li>
              <input type="checkbox">Milk</input>
            </li>
            <li>
              <input type="checkbox">Butter</input>
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox">
            Dinner (adults: herb chicken, kids: kamenbel bacon)
          </input>
          <ul>
            <li>
              <input type="checkbox">Cheese</input>
            </li>
            <li>
              <input type="checkbox">Bacon</input>
            </li>
            <li>
              <input type="checkbox">Potato</input>
            </li>
            <li>
              <input type="checkbox">Butter</input>
            </li>
            <li>
              <input type="checkbox">Weiners/Sausages</input>
            </li>
            <li>
              <input type="checkbox">Yaki onigiri</input>
            </li>
            <li>
              <input type="checkbox">Chicken</input>
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox">Other</input>
          <ul>
            <li>
              <input type="checkbox">
                Rice balls - rice packs (cook rice and make rice balls, can take
                some hiking, etc.)
              </input>
            </li>
            <li>
              <input type="checkbox">Curry and rice</input>
            </li>
            <li>
              <input type="checkbox">
                Vegetables (onions, cucumber, cabbage, tomatoes, apples)
              </input>
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Water
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Drinks
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Snacks
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Cooler box
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Salt, pepper, ketchup, mayonnaise, yakiniku sauce
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Marshmallows
          </input>
        </li>
        <li>
          <input type="checkbox">Canned food + can opener (if necessary)</input>
        </li>
      </ul>
      <h3 id="furniture-">Furniture 💺</h3>
      <ul>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Chairs (2 large)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Tables
          </input>
          <ul>
            <li>
              <input type="checkbox" defaultChecked={true}>
                Large
              </input>
            </li>
            <li>
              <input type="checkbox" defaultChecked={true}>
                Small coffee table
              </input>
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Picnic mat
          </input>
        </li>
      </ul>
      <h3 id="cooking-">Cooking 🔪</h3>
      <ul>
        <li>
          <input type="checkbox">Cast-iron skillet (Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox">Fire shears (Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox">
            Tongs, ladles, and fryers, spatula (Shu 🙏)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Gas stove (windproof cassette gas stove with gas can)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Backpacker&#39;s gas stove
          </input>
        </li>
        <li>
          <input type="checkbox">Charcoal</input>
        </li>
        <li>
          <input type="checkbox">Charcoal starter</input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Work gloves
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Cutting boards, kitchen knives, bowls, colander
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Fying pans and pots (saucepan (two handles, good for making curry or
            stew))
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Sandwich maker
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Paper towels and tissue
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Trash bags (big and small)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Plastic wrap, aluminum foil, paper plates, paper cups
          </input>
        </li>
        <li>
          <input type="checkbox">Splitters, spoons, forks</input>
        </li>
        <li>
          <input type="checkbox">Kettle</input>
        </li>
        <li>
          <input type="checkbox">Cooking forks/chopsticks</input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Skewers (1)
          </input>
        </li>
      </ul>
      <h3 id="site-maintenance-">Site Maintenance 🪓</h3>
      <ul>
        <li>
          <input type="checkbox">Lantern (LED, gas, battery) (Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox">Lantern stand/pole(Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox">Candle + Candle lantern</input>
        </li>
        <li>
          <input type="checkbox">Shovel</input>
        </li>
        <li>
          <input type="checkbox">Rope</input>
        </li>
      </ul>
      <h3 id="cleanup">Cleanup</h3>
      <ul>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Tissues, wet wipes, kitchen paper
          </input>
        </li>
        <li>
          <input type="checkbox">Sponges and scourers</input>
        </li>
        <li>
          <input type="checkbox">Eco detergent for dishwashing</input>
        </li>
      </ul>
      <h3 id="bedding-">Bedding 🛌</h3>
      <ul>
        <li>
          <input type="checkbox">Cot (1 for Aaron) (Shu 🙏)</input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Sleeping bag
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Blankets
          </input>
        </li>
        <li>
          <input type="checkbox">Sleeping mat (inflatable)</input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Pillows (with cover)
          </input>
        </li>
      </ul>
      <h3 id="hygiene-">Hygiene 🧼</h3>
      <ul>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Body soap
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Shampoo
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Toilet paper
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Towels
          </input>
        </li>
      </ul>
      <h3 id="clothes-">Clothes 🧤</h3>
      <ul>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Jackets
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Caps
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Socks
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Shoes/boots
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Shirts (long-sleeve - prevents bug bites and blocks the sun)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Pants (prevents bug bites and blocks the sun)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Underwear
          </input>
        </li>
        <li>
          <input type="checkbox">Gloves</input>
        </li>
      </ul>
      <h3 id="entertainment-">Entertainment 📷</h3>
      <ul>
        <li>
          <input type="checkbox">
            Magnifying glass, board games, playing cards, musical instrument,
            camera, frisbee, pipe cleaners, telescope, etc.
          </input>
        </li>
      </ul>
      <h3 id="shelter-">Shelter ⛺</h3>
      <ul>
        <li>
          <input type="checkbox">
            Tent set (pegs/stakes, guy lines, tent poles)
          </input>
        </li>
        <li>
          <input type="checkbox">Ground sheet (waterproof)</input>
        </li>
        <li>
          <input type="checkbox">Canopy pole</input>
        </li>
        <li>
          <input type="checkbox">
            Tarp (sunshade and rain protection) (covers tent)
          </input>
        </li>
        <li>
          <input type="checkbox" defaultChecked={true}>
            Peg hammer
          </input>
        </li>
        <li>
          <input type="checkbox">Extension cord (10m)</input>
        </li>
      </ul>
      <h2 id="setting-up-a-tent">Setting up a tent</h2>
      <ol>
        <li>Place ground sheet (waterproof) on site</li>
        <li>Place tent on ground sheet and secure with pegs (stakes)</li>
        <li>
          Lift the flysheet with a pole and secure with new pegs (stakes) in
          ground farther from the tent base
        </li>
        <li>Dig moat around tent to prevent water buildup</li>
      </ol>
      <h2 id="sleeping-bag">Sleeping Bag</h2>
      <ul>
        <li>Buy single sleeping bag from Workman for Aaron for next trip</li>
      </ul>
    </div>
  );
};

export default CampingNotes;
