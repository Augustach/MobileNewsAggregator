import {StyleSheet} from 'react-native';

// 0086b3 - default
// 336b87 - stone, 6fb98f - greenery, 5bc8ac - turquoise, 52958b - lichen, 5ea8a7 - lagoon
// 6eb5c0 - blue topaz, 7ba4a8 - 7ba4a8
//#6eb5c0'

//97CAE5
export const clr = '#E0E0E0';
export const INDIGO = '#36465d';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    //borderColor: '#0086b3',
    borderColor: clr,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    color: clr
  },
  input: {
    fontSize: 16
    //underlineColorAndroid: clr
  }
});
