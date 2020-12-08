import React from 'react';

// Component
function Copyright() {
  return (
    <div>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}


// Main component
function Footer(props) {
  // propTypes

  return (
    <div>
      {/* <hr />
      <h3>CiviCali</h3>
      <Copyright />
      <h3>Una App para tu ciudad</h3> */}
    </div>
  );
}

export default Footer;