import React, { useState } from 'react';
import CollegeFormCompo from '../../Components/Admin/CollegeFormCompo';

function RegisterCollege() {
  

  return (
    <div className='flex-center-center'>
        <div className="color-strip"></div>
        <div className='strip-color-up'>
            {/* <span> */}
                <CollegeFormCompo />
            {/* </span> */}
        </div>
    </div>
  );
}

export default RegisterCollege;
