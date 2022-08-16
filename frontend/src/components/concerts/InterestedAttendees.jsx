// import React from "react";
// import UserCard from "../UserCard";

// const InterestedAttendees = (props) => {
//   const mutualFriends = props.mutualFriends.map(item => {
//     return <UserCard img={item.img} name={item.name} mutualNumber={item.mutualNumber} type={item.type}/>
//   });

//   const otherUsers = props.otherUsers.map(item => {
//     return <UserCard img={item.img} name={item.name} mutualNumber={item.mutualNumber} type={item.type}/>
//   });

//   return (
//     <div className="container mt-3 Oswald_regular">
//       <div className="row">
//         <div className="col border">
//           <div className="row d-flex justify-content-center">
//             <div className="col-10 fs-2 text-center p-4">
//               {mutualFriends.length} Mutual Friends
//             </div>
//           </div>
//         </div>

//         <div className="col border">
//           <div className="row d-flex justify-content-center">
//             <div className="col-10 fs-2 text-center p-4">
//               {otherUsers.length} Others
//             </div>
//           </div>
//         </div>
//         <div className="w-100"></div>

//         <div className="vertical-scroll col border p-1">
//           {mutualFriends}
//         </div>
//         <div className="vertical-scroll col border p-1">
//           {otherUsers}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InterestedAttendees;

// ---------------------------------
// second version

import React from "react";
import UserCard from "../UserCard";

const InterestedAttendees = (props) => {
  const userList = props.otherList.map((item) => {
    return (
      <div key={item.id} className="col">
        <UserCard
          img={item.img}
          name={item.name}
          mutualNumber={item.mutualNumber}
          type={item.type}
        />
      </div>
    );
  });

  return (
    <div className="container mt-4 px-4 d-grid gap-3 Oswald_regular">
      {/* <div className="col text-start align-self-center">
        Interested Attendees
      </div> */}

      <div className="row">
        <div className="col-4 text-start">Interested Attendees</div>
        <div
          className="btn-group col-8 px-0"
          role="group"
          aria-label="radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check px-0"
            name="userTypeToggle"
            id="selectorMutualFriends"
            autoComplete="off"
            defaultChecked
            onChange={() => {
              props.setUserTypeToggle("mutuals");
            }}
          />
          <label
            htmlFor="selectorMutualFriends"
            className="btn btn-secondary fw-bold mx-2 m-auto"
          >
            Mutual Friends
          </label>
          <input
            type="radio"
            className="btn-check px-0"
            name="userTypeToggle"
            id="selectorOthers"
            autoComplete="off"
            onChange={() => {
              props.setUserTypeToggle("others");
            }}
          />
          <label
            htmlFor="selectorOthers"
            className="btn btn-secondary fw-bold mx-2 m-auto"
          >
            Others
          </label>
        </div>
      </div>

      <div className="col text-start align-self-center fs-3">
        {userList.length} Users:
      </div>
      <a href={`#`} className="userProfileLink">
        <div className="row row-cols-2 g-2 overflow-auto vh-50 align-content-start">
          {userList}
        </div>
      </a>
    </div>
  );
};

export default InterestedAttendees;
