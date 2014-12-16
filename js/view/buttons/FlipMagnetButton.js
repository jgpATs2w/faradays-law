// Copyright 2002-2014, University of Colorado Boulder

/**
 * Flip Magnet button for 'Faradays Law' simulation, contains magnet image node.
 *
 * @author Vasily Shakhov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var Node = require( 'SCENERY/nodes/Node' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var MagnetNode = require( 'FARADAYS_LAW/view/MagnetNode' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Shape = require( 'KITE/Shape' );
  var Path = require( 'SCENERY/nodes/Path' );

  /**
   * Create curved arrow for button
   * @param options
   * @returns {Node}
   */
  var createCurvedArrow = function( options ) {
    var node = new Node();

    // variables for arrow and arc
    var radius = 20;
    var lineWidth = 2.3;
    var arcStartAngle = -Math.PI * 0.90;
    var arcEndAngle = -Math.PI * 0.18;

    //arc
    var shape = new Shape();
    shape.moveTo( (radius + lineWidth / 2) * Math.cos( arcStartAngle ), (radius + lineWidth / 2) * Math.sin( arcStartAngle ) ); // Inner edge of end.
    shape.arc( 0, 0, radius, arcStartAngle, arcEndAngle, false ); // Outer curve.
    node.addChild( new Path( shape, {
      stroke: '#000',
      lineWidth: lineWidth
    } ) );

    // arrow head
    var headShape = new Shape().moveTo( 0, 8 )
                               .lineTo( 4, 0 )
                               .lineTo( -4, 0 )
                               .close();
    headShape = headShape.transformed( Matrix3.translation( radius * Math.cos( arcEndAngle ), radius * Math.sin( arcEndAngle ) ).timesMatrix( Matrix3.rotation2( arcEndAngle ) ) );
    node.addChild( new Path( headShape, {
      fill: '#000'
    } ) );

    node.mutate( options );
    return node;
  };

  /**
   * @param options
   * @constructor
   */
  function FlipMagnetButton( options ) {
    var children = [
      createCurvedArrow(),
      new MagnetNode( false /*flipped*/, {
        width: 74,
        height: 16,
        font: new PhetFont( 14 )
      } ),
      createCurvedArrow( { rotation: Math.PI } )
    ];

    var contentNode = new VBox( {
      children: children,
      spacing: 1
    } );

    RectangularPushButton.call( this, _.extend( {
      content: contentNode,
      baseColor: 'rgb(205,254,195)',
      minWidth: 118,
      minHeight: 65,
      xTouchExpansion: 10,
      yTouchExpansion: 10
    }, options ) );

  }

  return inherit( RectangularPushButton, FlipMagnetButton );
} );