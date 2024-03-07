<<<<<<< HEAD
import React from 'react';


const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    )
}

=======
import React from 'react';


const Rank = () => {
    return (
        <div>
            {/* <div className='white f3'>
                {'Your current rank is...'}
            </div>
            <div className='white f1'>
                {'#5'}
            </div> */}
        </div>
    )
}

>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
export default Rank;