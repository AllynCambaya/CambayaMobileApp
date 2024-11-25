import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

export default function DrawerLayout() {
  const router = useRouter();
  const year = new Date().getFullYear();
  const { top, bottom } = useSafeAreaInsets();

  // Handle logout action
  const handleLogout = async () => {
    router.replace('/');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => (
          <View style={{ flex: 1, backgroundColor: '#1c1c1c' }}>
            <DrawerContentScrollView
              {...props}
              scrollEnabled={true}
              contentContainerStyle={{ paddingTop: top }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 50 + top,
                  paddingBottom: 20,
                }}
              >
                {/* Avatar container */}
                <View style={styles.avatarContainer}>
                  <Image source={require('../../assets/AppLogo.png')} style={styles.avatar} />
                </View>
              </View>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Logout"
                icon={() => <Icon name="sign-out" color="#ffffff" size={25} />}
                labelStyle={styles.drawerLabel}
                onPress={handleLogout}
              />
            </DrawerContentScrollView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 20 + bottom,
              }}
            >
              <Text style={styles.footerText}>© {year} LinKings. All rights reserved.</Text>
            </View>
          </View>
        )}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'LinKings',
            drawerIcon: () => <Icon name="home" size={25} color="#ffffff" />,
            drawerLabelStyle: styles.drawerLabel,
            headerStyle: {
              backgroundColor: '#000', // Set header background to black
            },
            headerTitleStyle: {
              color: '#FFF', // Set header text color to white
            },
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            headerShown: false, // Hides the header
            drawerIcon: () => <Icon name="cogs" size={25} color="#ffffff" />,
            drawerLabelStyle: styles.drawerLabel,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// Dark theme styles
const styles = StyleSheet.create({
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Dark background for avatar container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  drawerLabel: {
    fontSize: 18,
    color: '#ffffff', // White text for drawer labels
  },
  footerText: {
    color: '#b5b5b5', // Light gray text for footer
    fontSize: 14,
  },
});
