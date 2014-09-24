// Copyright 2002-2014, University of Colorado Boulder

/**
 * Coil node for 'Faradays Law' simulation.
 *
 * @author Vasily Shakhov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Image = require( 'SCENERY/nodes/Image' );
  var CoilTypeEnum = require( 'FARADAYS_LAW/view/CoilTypeEnum' );

  // images
  var images_Map = {};
  images_Map[CoilTypeEnum.TWO_COIL] = {
    frontImage: require( 'image!FARADAYS_LAW/images/two-loop-front.png' ),
    backImage: require( 'image!FARADAYS_LAW/images/two-loop-back.png' )
  };
  images_Map[CoilTypeEnum.FOUR_COIL] = {
    frontImage: require( 'image!FARADAYS_LAW/images/four-loop-front.png' ),
    backImage: require( 'image!FARADAYS_LAW/images/four-loop-back.png' )
  };

  /**
   *
   * @param coilType - determines which picture must we add to show coil
   * @param options
   * @constructor
   */
  function CoilNode( coilType, options ) {
    Node.call( this );

    var xOffset = coilType === CoilTypeEnum.TWO_COIL ? CoilNode.twoOffset : 0;

    this.backImage = new Image( images_Map[coilType].backImage, {
      centerX: 16 + xOffset,
      centerY: 0,
      scale: 1 / 3
    } );
    this.addChild( this.backImage );

    this.frontImage = new Image( images_Map[coilType].frontImage, {
      centerX: -16 + xOffset,
      centerY: 0,
      scale: 1 / 3
    } );
    this.addChild( this.frontImage );

    this.mutate( options );
  }

  CoilNode.twoOffset = 8;

  return inherit( Node, CoilNode );
} )
;
