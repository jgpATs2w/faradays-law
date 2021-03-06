// Copyright 2002-2014, University of Colorado Boulder

/**
 * The 'Faradays Law' screen.
 *
 * Author: Vasily Shakhov (mlearner.com)
 */

define( function( require ) {
  'use strict';

  // modules
  var FaradaysLawConstants = require( 'FARADAYS_LAW/FaradaysLawConstants' );
  var FaradaysLawView = require( 'FARADAYS_LAW/view/FaradaysLawView' );
  var FaradaysLawModel = require( 'FARADAYS_LAW/model/FaradaysLawModel' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var titleString = require( 'string!FARADAYS_LAW/faradays-law.name' );

  function FaradaysLawScreen() {
    Screen.call( this, titleString, null /* no icon, single-screen sim */,
      function() { return new FaradaysLawModel( FaradaysLawConstants.LAYOUT_BOUNDS.width, FaradaysLawConstants.LAYOUT_BOUNDS.height ); },
      function( model ) { return new FaradaysLawView( model ); },
      {
        backgroundColor: 'rgb( 151, 208, 255 )'
      }
    );
  }

  return inherit( Screen, FaradaysLawScreen );
} );
