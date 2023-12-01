import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  checkmark: {
    width: 30,
    height: 30,
  },
});

/**
 * チェックマークコンポーネント
 *
 * @export
 * @param {boolean} complete タスク完了フラグ　true: 完了　false: 未完了
 * @param {(complete: boolean) => void} onPress タップ時のコールバック関数)
 * @return {Checkmark}
 */
export default function Checkmark({ complete, onPress }) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => onPress(complete)}>
      {/* 未チェック */}
      {complete == true && <Image style={styles.checkmark} source={require('../../assets/images/checkmark.png')}></Image>}
      {/* チェック */}
      {complete == false && <Image style={styles.checkmark} source={require('../../assets/images/un_checkmark.png')}></Image>}
    </TouchableOpacity>
  );
}
