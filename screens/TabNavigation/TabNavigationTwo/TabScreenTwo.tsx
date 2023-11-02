import { FC } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';

import colors from '../../../colors';

const videos = [
  'https://www.youtube.com/watch?v=NeQM1c-XCDc',
  'https://www.youtube.com/watch?v=hskJv3gmI5Q',
  'https://www.youtube.com/watch?v=GkaFFlBZk5k',
];

interface ListElementProps {
  uri: string;
}

const TabScreenTwo: FC = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.heading]}>Videos</Text>
      </View>
      <ScrollView horizontal={true}>
        {videos.map(item => (
          <VideoWebView key={item} uri={item} />
        ))}
      </ScrollView>
    </>
  );
};

const VideoWebView: FC<ListElementProps> = ({ uri }) => {
  return <WebView source={{ uri }} style={styles.videoView} />;
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
  },
  text: {
    color: colors.dark,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  videoView: {
    width: Dimensions.get('window').width,
  },
});

export default TabScreenTwo;
