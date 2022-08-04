import React from "react";
import UserCard from "../UserCard";

const InterestedAttendees = (props) => {
  // const newArray = array.map(item => {return //what you want to return for each corresponding item in the array})
  const mutualFriends = props.mutualFriends.map(item => {
    return <UserCard img={item.img} name={item.name} mutualNumber={item.mutualNumber} type={item.type}/>
  });

  const otherUsers = props.otherUsers.map(item => {
    return <UserCard img={item.img} name={item.name} mutualNumber={item.mutualNumber} type={item.type}/>
  });

  return (
    <div className="container mt-3 Oswald_regular">
      <div className="row">
        <div className="col border">
          <div className="row d-flex justify-content-center">
            <div className="col-10 fs-2 text-center p-4">
              {mutualFriends.length} Mutual Friends
            </div>
          </div>
        </div>

        <div className="col border">
          <div className="row d-flex justify-content-center">
            <div className="col-10 fs-2 text-center p-4">
              {otherUsers.length} Others
            </div>
          </div>
        </div>
        <div className="w-100"></div>

        <div className="vertical-scroll col border p-1">
          {mutualFriends}
        </div>
        <div className="vertical-scroll col border p-1">
          {otherUsers}
        </div>
      </div>
    </div>
  );
}

export default InterestedAttendees;