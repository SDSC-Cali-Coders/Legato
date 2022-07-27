import React from 'react';
import Buttons from '../Buttons';

const UserProfile = (props) => {
    return (
        <div className="container mt-4 bg-warning">
            {/* Row: Invite button */}
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <Buttons.Invite/>
                </div>
            </div>

            {/* Row: Username - followers | following cnt */}
            {/* Row: Socials icons w/ links */}
            {/* Row: My Top Artists title */}
            {/* Row: Dynamic amnt of ArtistCards [see more] button */}
            {/* Row: [Top songs col] [Top genres col] */}
            {/* Top songs col: title row; 5SongCard; [see more] button*/}
            {/* Top genres col: title row; 5GenreCards; [see more] button*/}
            {/* Row: [Log out] button */}
        </div>
    );
}

export default UserProfile;