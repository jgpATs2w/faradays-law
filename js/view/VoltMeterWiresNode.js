// Copyright 2002-2014, University of Colorado Boulder

/**
 * Voltmeter wires for 'Faradays Law' simulation model
 *
 * @author Vasily Shakhov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Shape = require( 'KITE/Shape' );
  var Path = require( 'SCENERY/nodes/Path' );
  var Circle = require( 'SCENERY/nodes/Circle' );
  var RadialGradient = require( 'SCENERY/util/RadialGradient' );
  var Color = require( 'SCENERY/util/Color' );

  /**
   * Creates measure pad.
   * @param options
   * @returns {Node}
   */
  var createPad = function( options ) {

    // params
    var baseColor = new Color( '#b4b5b5' );
    var transparentColor = new Color( baseColor.getRed(), baseColor.getGreen(), baseColor.getBlue(), 0 );
    var radius = 7;
    var gradientLength = 2;
    var innerGradientRadius = radius - gradientLength / 2;
    var outerGradientRadius = radius + gradientLength / 2;
    var gradientOffset = gradientLength / 2;

    var pad = new Node();

    // Create the gradient fills
    var highlightFill = new RadialGradient( gradientOffset, gradientOffset, innerGradientRadius, gradientOffset, gradientOffset, outerGradientRadius )
      .addColorStop( 0, baseColor )
      .addColorStop( 1, baseColor.colorUtilsBrighter( 0.7 ) );

    var shadowFill = new RadialGradient( -gradientOffset, -gradientOffset, innerGradientRadius, -gradientOffset, -gradientOffset, outerGradientRadius )
      .addColorStop( 0, transparentColor )
      .addColorStop( 1, baseColor.colorUtilsDarker( 0.5 ) );

    // base circle with white gradient
    var baseCircle = new Circle( radius, {fill: highlightFill} );
    pad.addChild( baseCircle );

    // black gradient
    var overlayForShadowGradient = new Circle( radius, {fill: shadowFill} );
    pad.addChild( overlayForShadowGradient );

    pad.mutate( options );
    return pad;
  };

  /**
   * @constructor
   */
  function VoltMeterWiresNode() {
    Node.call( this );

    var wireColor = '#353a89';
    var wireWidth = 3;
    var wiresTopY = 140;

    // variables, used for measuring pads too
    var leftWireX = 175;
    var rightWireX = 208;
    var leftWireBottom = 221;
    var rightWireBottom = 234;

    this.addChild( new Path( new Shape()
      .moveTo( leftWireX, wiresTopY )
      .lineTo( leftWireX, leftWireBottom ), {
      stroke: wireColor,
      lineWidth: wireWidth
    } ) );

    this.addChild( new Path( new Shape()
      .moveTo( rightWireX, wiresTopY )
      .lineTo( rightWireX, rightWireBottom ), {
      stroke: wireColor,
      lineWidth: wireWidth
    } ) );

    this.addChild( createPad( {
      centerX: leftWireX,
      centerY: leftWireBottom
    } ) );

    this.addChild( createPad( {
      centerX: rightWireX,
      centerY: rightWireBottom
    } ) );

  }

  return inherit( Node, VoltMeterWiresNode );
} )
;
