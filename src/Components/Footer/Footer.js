import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Developed by:{' '}
        <a className='text-primary' href='https://rijonwd.web.app/'>
          Shahariar Rijon
        </a>
      </div>
    </MDBFooter>
  );
}