import React from 'react';
import Buttons from '../Buttons';

const TopTen = {
    Artists: (props) => {
        return (
            <li className="list-group-item hstack bg-neutral-primary">
                <div className="col-2 px-4 d-flex">
                    <div className="ratio ratio-1x1">
                        <img className="img-fluid rounded-circle" src={props.img} alt="..." />
                    </div>
                </div>
                <div className="col fw-bold fs-4">
                    <div className='invisible'> test</div>
                    {props.name}
                    <div className='invisible'> test</div>
                </div>
                <div className="col d-flex justify-content-end">
                    {props.isSubscribed
                        ? <Buttons.Unsubscribe/>
                        : <Buttons.Subscribe/>
                    }
                    <div className='d-flex align-items-center fs-3 text-success'>
                        <Buttons.Play></Buttons.Play>
                    </div>
                </div>
            </li>
        );
    },

    Tracks: (props) => {
        return (
            <li className="list-group-item hstack bg-neutral-primary">
                <div className="col-2 px-4 d-flex">
                    <div className="ratio ratio-1x1">
                        <img className="img-fluid rounded-circle" src={props.img} alt="..." />
                    </div>
                </div>
                <div className="col fs-4">
                    {props.name}
                </div>
                <div className="col fw-bold fs-4">
                    {props.artist}
                </div>
                <div className="col d-flex justify-content-end">
                    Play Preview
                    <Buttons.Play preview_url={props.preview_url}/>
                </div>
            </li>
        );
    },

    Genres: (props) => {
        return (
            <li className="list-group-item hstack bg-neutral-secondary">
                <div className={`container-fluid hstack bg-neutral-secondary rounded ms-2 w-${props.percentage}`}>
                    {/* <div className="col-2 px-4 d-flex">
                        <img className="img-fluid" src={props.icon} alt="..." />
                    </div>
                    <div className="col fs-4">
                        <div className='invisible'> test</div> */}
                        {props.genre}
                        {/* <div className='invisible'> test</div>
                    </div> */}
                </div>
            </li>
        );
    }
}

export default TopTen;
