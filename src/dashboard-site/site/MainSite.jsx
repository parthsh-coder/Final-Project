import React from 'react'
import Admin from './admin/Admin';
import Hr from './hr/Hr';
import Employee from './employee/Employee';

const MainSite = () => {

    const data = localStorage.getItem('role');

    let renderComponent = () => { 
        if(data === 'admin'){
            return <Admin />
        } else if(data === 'hr'){
            return <Hr />
        } else if(data === 'employee'){
            return <Employee />
        }
    }

  return (
    <div>
      {renderComponent()}
    </div>
  )
}

export default MainSite;