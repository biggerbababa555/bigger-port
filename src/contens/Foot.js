import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import "../Styles/Foot.css"

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#202020' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='nameinfooter' style={{ backgroundColor: '#202020' }}>
        © 2023 By:   
        <a className='nameinfooter' >
             Kritsada Prasertsin
        </a>
      </div>
    </MDBFooter>
  );
}