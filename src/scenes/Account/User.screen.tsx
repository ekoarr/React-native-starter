import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchUsers, selectAllUsers } from '../../redux/store/users';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const Users = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.users);
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <SafeAreaView>
      <View>
        <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} />
        {users.map((user) => {
          return (
            <View style={styles.container} key={user.id}>
              <View>
                <View style={styles.dataContainer}>
                  <Text>
                    {user.first_name} {user.last_name}
                  </Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text>{user.email}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Users;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  dataContainer: {
    flexDirection: 'row'
  }
});