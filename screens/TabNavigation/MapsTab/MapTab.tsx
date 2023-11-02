import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapsTab = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 20.654897712974535,
          longitude: -103.32545144403733,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}>
        <Marker
          coordinate={{
            latitude: 20.654897712974535,
            longitude: -103.32545144403733,
          }}
          title="CUCEI"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default MapsTab;
