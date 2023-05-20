// import React, { useEffect } from "react";
// import { faker } from "@faker-js/faker";
// import { useState } from "react";
// const Demo = () => {
//   //   const randomName = faker.name.fullName(); // Rowan Nikolaus
//   //   const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//   const [data, setData] = useState([]);
//   const [cnt, setCnt] = useState(0);
//   useEffect(() => {
//     let arr = [];
//     for (let i = 0; i < 12; i++) {
//       const name = faker.name.fullName();
//       const email = faker.internet.email();
//       const avatar = faker.internet.avatar();
//       arr.push({ name, email, avatar });
//     }
//     setData(arr);
//   }, []);
//   console.log("Hi");
//   return (
//     <>
//       <div className="flex flex-wrap m-6 gap-4">
//         {data.map((item) => (
//           <div className="w-72 border border-gray-200 flex flex-col justify-center items-center shadow-lg rounded-lg p-3 bg-slate-100">
//             <h1 className="font-bold text-xl my-2">{item.name}</h1>
//             <img src={item.avatar} alt="avatar" className="rounded-full" />
//             <p className="my-2 text-gray-400">{item.email}</p>
//           </div>
//         ))}
//       </div>
//       <h1>{cnt}</h1>
//       <button onClick={() => setCnt(cnt + 1)}>Increment</button>
//     </>
//   );
// };

// export default Demo;
import { useEffect } from "react";
const Demo = () => {
  const getData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=34579&submitAction=ENTER"
    );
    const data = await response.json();

    data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR.cards?.map(
      (item) => {
        item?.card?.card?.itemCards?.map((innerItem) => {
          // console.log(innerItem?.card?.info);
          const { name, price, imageId, description, itemAttribute } =
            innerItem?.card?.info;
          console.log({ name, price, imageId, description, itemAttribute });
        });
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>Demo</div>;
};

export default Demo;
