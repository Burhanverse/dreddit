import { Image } from 'expo-image';

type Props = {
  size: number;
  nsfw: boolean;
  icon: string | undefined | null;
};

export const defaultSubredditIcon = require('../../../assets/images/reddit_default_sub_alpha.svg');
export const defaultSubredditIconNSFW = require('../../../assets/images/reddit_default_sub_alpha_nsfw.svg');

const SubredditIcon = (props: Props) => {
  const shouldUsePlaceholder =
    !props.icon ||
    !props.icon?.startsWith ||
    !props.icon?.startsWith('http') ||
    props.icon === defaultSubredditIcon;

  return (
    <Image
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        flex: 0,
      }}
      source={
        shouldUsePlaceholder
          ? props.nsfw
            ? defaultSubredditIconNSFW
            : defaultSubredditIcon
          : props.icon?.replaceAll('&amp;', '&')
      }
    />
  );
};

export default SubredditIcon;
