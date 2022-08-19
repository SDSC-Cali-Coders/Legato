import React from "react";
import TopTen from "./TopTen";
import TopThree from "./TopThree";

export default function TopGenre(props) {
    let TopThreeCards = new Array(3);
    let TopTenCards = new Array(10);

    props.topThreeList.forEach((item, index) => {
        TopThreeCards[index] = <TopThree.Genres rank={item.rank} icon={item.icon} genre={item.genre} />;
    })

    props.topTenList.forEach((item, index) => {
        TopTenCards[index] = <TopTen.Genres icon={item.icon} genre={item.genre} />;
    })

    return (
        <div className="container d-flex flex-column p-5 my-5 bg-primary border border-dark Oswald_regular">

            {/* Row: Top [selection]   <4 Weeks | 6 Months | All Time> */}
            <div className="row">
                <div className="col-7 fs-1 fw-bolder">
                    Top {props.selection}
                </div>

                {/* Row: [Top 3 col] [Top 10 col] */}
                <div className="row mt-5">
                    <div className="col d-grid gap-5">
                        {TopThreeCards[0]}
                        {TopThreeCards[1]}
                        {TopThreeCards[2]}
                    </div>
                    <div className="col-9 mx-3">
                        <ol className="list-group fs-4 list-group-numbered">
                            {TopTenCards[0]}
                            {TopTenCards[1]}
                            {TopTenCards[2]}
                            {TopTenCards[3]}
                            {TopTenCards[4]}
                            {TopTenCards[5]}
                            {TopTenCards[6]}
                            {TopTenCards[7]}
                            {TopTenCards[8]}
                            {TopTenCards[9]}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}