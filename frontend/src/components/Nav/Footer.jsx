import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
         <MDBFooter bgColor='#4caf50' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: ' #4caf50' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer