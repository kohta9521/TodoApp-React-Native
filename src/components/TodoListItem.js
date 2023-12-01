import { StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

// components import
import Checkmark from './Checkmark';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listItemTitle: {
    flex: 1,
    marginLeft: 10,
  },
});

/**
 * Todoリストアイテムコンポーネント
 *
 * @export
 * @param {string} todoTitle タスク名
 * @return {TodoListItem}
 */
export default function TodoListItem({ todoTitle }) {
  return (
    <ListItem topDivider style={{ width: '100%' }}>
      <ListItem.Content style={styles.listItem}>
        <Checkmark complete={true} onPress={() => {}}></Checkmark>
        <ListItem.Title style={styles.listItemTitle}>{`${todoTitle}`}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}
