import React from 'react';

const Rank = ({ name , entries }) => {
    return (
        <div className="pb3">
            <div className="white f1">
                {`${name}, your current entry count is...`}
            </div>
            <div className="white f-subheadline">
                {entries}
            </div>
        </div>
    );
}

export default Rank;