import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          draggable={true}
          coordinate={pin}
          onDragEnd={e => {
            setPin(e.nativeEvent.coordinate);
          }}
        />
      </MapView>
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
});
