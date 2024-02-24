import type { ImageProps, ImageSourcePropType } from 'react-native';

export type ImageZoomProps = Omit<ImageProps, 'source'> & {
  /**
   * The image's URI, which can be overridden by the `source` prop.
   * @default ''
   */
  uri?: string;
  /**
   * The minimum scale allowed for zooming.
   * @default 1
   */
  minScale?: number;
  /**
   * The maximum scale allowed for zooming.
   * @default 5
   */
  maxScale?: number;
  /**
   * The minimum number of pointers required to enable panning.
   * @default 2
   */
  minPanPointers?: number;
  /**
   * The maximum number of pointers required to enable panning.
   * @default 2
   */
  maxPanPointers?: number;
  /**
   * Determines whether panning is enabled within the range of the minimum and maximum pan pointers.
   * @default true
   */
  isPanEnabled?: boolean;
  /**
   * Determines whether pinching is enabled.
   * @default true
   */
  isPinchEnabled?: boolean;
  /**
   * A callback triggered when the image interaction starts.
   */
  onInteractionStart?: () => void;
  /**
   * A callback triggered when the image interaction ends.
   */
  onInteractionEnd?: () => void;
  /**
   * A callback triggered when the image pinching starts.
   */
  onPinchStart?: () => void;
  /**
   * A callback triggered when the image pinching ends.
   */
  onPinchEnd?: () => void;
  /**
   * A callback triggered when the image panning starts.
   */
  onPanStart?: () => void;
  /**
   * A callback triggered when the image panning ends.
   */
  onPanEnd?: () => void;
  /**
   * @see https://facebook.github.io/react-native/docs/image.html#source
   * @default undefined
   */
  source?: ImageSourcePropType;
};

export type ImageZoomUseLayoutProps = Pick<ImageZoomProps, 'onLayout'>;

export type ImageZoomLayoutState = {
  /**
   * An object containing the x and y coordinates of the center point of the image, relative to the top-left corner of the container.
   */
  center: {
    /**
     * The x-coordinate of the center point of the image.
     */
    x: number;
    /**
     * The y-coordinate of the center point of the image.
     */
    y: number;
  };
  imageSize: {
    width: number;
    height: number;
  };
  size: {
    width: number;
    height: number;
  };
};

export type ImageZoomUseGesturesProps = ImageZoomLayoutState &
  Pick<
    ImageZoomProps,
    | 'minScale'
    | 'maxScale'
    | 'minPanPointers'
    | 'maxPanPointers'
    | 'isPanEnabled'
    | 'isPinchEnabled'
    | 'onInteractionStart'
    | 'onInteractionEnd'
    | 'onPinchStart'
    | 'onPinchEnd'
    | 'onPanStart'
    | 'onPanEnd'
  >;
