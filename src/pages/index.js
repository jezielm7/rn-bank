import React, { useState, useRef } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity } from 'react-native';

import { Modalize } from 'react-native-modalize';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-community/picker';

import Ages from '../components';

import styles from './styles';

const Home = () => {
  const modalizeRef = useRef(null);
  const [agePickerLabel, setAgePickerLabel] = useState();
  const [sexPickerLabel, setSexPickerLabel] = useState();
  const [thumbColor, setThumbColor] = useState('#00796B');
  const [progressiveBar, setProgressiveBar] = useState(0);
  const [progressiveSwitch, setProgressiveSwitch] = useState(false);

  function setThColor () {
    progressiveSwitch === true ? setThumbColor("#00FF66") : setThumbColor("#00796B");
  };

  function showModal() {
    modalRef.current?.open();
  }

  function hideModal() {
    modalRef.current?.close();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Bank  ⚛</Text>

      <View style={styles.dataView}>
        <TextInput
          style={styles.input}
          placeholder="Type your name"
          placeholderTextColor="#e4b02b"
        />

        <Picker
          selectedValue={agePickerLabel}
          mode='dropdown'
          style={styles.agePicker}
          onValueChange={(itemValue, itemIndex) => setAgePickerLabel(itemValue)}
        >
          <Picker.Item color="#1F618D" label="Age" value={undefined} />

          {Ages && Ages.map(({ id, age }) => (
            <Picker.Item label={age} key={id} value={age} />
          ))}
        </Picker>
      </View>

      <View style={styles.sexView}>
        <Text style={styles.sexLabel}>Inform Your Gender: </Text>

        <Picker
          selectedValue={sexPickerLabel}
          mode='dropdown'
          style={styles.sexPicker}
          onValueChange={(itemValue, itemIndex) => setSexPickerLabel(itemValue)}
        >
          <Picker.Item color="#1F618D" label="Sex" value={undefined} />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Feminine" value="Fem" />
        </Picker>
      </View>

      <View style={styles.sliderView}>

        <Text style={styles.sliderLabel}>Limit: </Text>

        <Slider
          style={styles.slider}
          value={progressiveBar}
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(selectedValue) => setProgressiveBar(selectedValue)}
          minimumTrackTintColor="#66FF00"
          maximumTrackTintColor="#00FF99"
        />

      </View>

      <Text style={styles.priceLabel}>
        R$: <Text style={{ fontWeight: 'bold', color: '#66FF33' }}>
          {progressiveBar.toFixed(2)}
          </Text>
      </Text>

      <View style={styles.switchView}>
        <Text style={styles.studentLabel}>Are you student?</Text>


        <Switch
          style={styles.switch}
          thumbColor="#00FF66"
          value={progressiveSwitch}
          onValueChange={(switchValue) => setProgressiveSwitch(switchValue)}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Home;