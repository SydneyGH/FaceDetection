<<<<<<< HEAD
import React from 'react';
import './FaceRecognition.css'



const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

=======
import React from 'react';
import './FaceRecognition.css'



const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
export default FaceRecognition;