import React from "react";
import UserCard from "../UserCard";
import defProfileIcon from "../../assets/pfpIcon.svg";

// export default function InterestedAttendees() {
const InterestedAttendees = (props) => {
  return (
    <>
      <div className="container mt-3 min-vw-100 Oswald_regular">
        <div className="container">
          <div className="row">
            <div className="col border">
              <div className="row d-flex justify-content-center">
                <div className="col-10 fs-2 text-center p-4">
                  {props.mutualFriends} Mutual Friends
                </div>
              </div>
            </div>

            <div className="col border">
              <div className="row d-flex justify-content-center">
                <div className="col-10 fs-2 text-center p-4">{props.otherUsers} Others</div>
              </div>
            </div>
            <div className="w-100"></div>

            <div className="vertical-scroll col border p-1">
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
            </div>
            <div className="vertical-scroll col border p-1">
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
              <UserCard
                img={defProfileIcon}
                name="John Doe"
                mutualNumber="5"
                type="Concerts"
              ></UserCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterestedAttendees;
