import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Settings() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <Text style={styles.sectionLabel}>Tools and Resources</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="cogs" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="key" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Privacy Checkup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="home" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Supervision</Text>
      </TouchableOpacity>

    
      <Text style={styles.sectionLabel}>Preferences</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="moon-o" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Darkmode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="bell" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="language" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="universal-access" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Accessibility</Text>
      </TouchableOpacity>

 
      <Text style={styles.sectionLabel}>More Settings</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="cloud" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Cloud Backup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="shield" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="wifi" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Network</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="mobile" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Mobile Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="download" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Downloads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="gear" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>System Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="camera" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Camera Preferences</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="volume-up" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Volume Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="clock-o" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Time Zone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="tablet" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Device Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="refresh" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Reset Settings</Text>
      </TouchableOpacity>

 
      <Text style={styles.sectionLabel}>Legal Policies</Text>
      <TouchableOpacity style={styles.settingOption}>
        <Icon name="file" size={18} color="#ffffff" style={styles.icon} />
        <Text style={styles.settingText}>Terms of Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000', 
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginVertical: 10,
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333333', 
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#ffffff', 
  },
  icon: {
    marginRight: 10,
  },
});
