<?php
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept' );

 if ( isset($_GET['json']) ) {
    echo 'nice try...';
  // echo file_get_contents( 'plz.json' );
}

if ( isset( $_GET['xml']))
echo file_get_contents( 'gemliste_knz.xml' );
