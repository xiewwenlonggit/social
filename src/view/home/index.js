/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import SvgUri from 'react-native-svg-uri';
import {
  friend,
  selectedFriend,
  group,
  selectedGroup,
  message,
  selectedMessage,
  my,
  selectedMy,
} from '../../res/fonts/iconSvg';
import Friend from './pages/Friend.js';
import Group from './pages/Group';
import Message from './pages/Message';
import My from './pages/My';
const Index = props => {
  const [selectedTab, setSelectedTab] = useState('my');
  useEffect(() => {
    let nowSelect = 'my';
    if (props.route.params && props.route.params.pagename) {
      nowSelect = props.route.params.pagename;
    }
    setSelectedTab(nowSelect);
  }, []);
  const [pages] = useState([
    {
      selected: 'friend',
      title: '交友',
      renderIcon: () => <SvgUri width="20" height="20" svgXmlData={friend} />,
      renderSelectedIcon: () => (
        <SvgUri width="20" height="20" svgXmlData={selectedFriend} />
      ),
      onPress: () => setSelectedTab('friend'),
      component: <Friend />,
    },
    {
      selected: 'group',
      title: '圈子',
      renderIcon: () => <SvgUri width="20" height="20" svgXmlData={group} />,
      renderSelectedIcon: () => (
        <SvgUri width="20" height="20" svgXmlData={selectedGroup} />
      ),
      onPress: () => setSelectedTab('group'),
      component: <Group />,
    },
    {
      selected: 'message',
      title: '消息',
      renderIcon: () => <SvgUri width="20" height="20" svgXmlData={message} />,
      renderSelectedIcon: () => (
        <SvgUri width="20" height="20" svgXmlData={selectedMessage} />
      ),
      onPress: () => setSelectedTab('message'),
      component: <Message />,
    },
    {
      selected: 'my',
      title: '我的',
      renderIcon: () => <SvgUri width="20" height="20" svgXmlData={my} />,
      renderSelectedIcon: () => (
        <SvgUri width="20" height="20" svgXmlData={selectedMy} />
      ),
      onPress: () => setSelectedTab('my'),
      component: <My />,
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TabNavigator>
        {pages.map((v, i) => (
          <TabNavigator.Item
            key={i}
            selected={selectedTab === v.selected}
            title={v.title}
            renderIcon={v.renderIcon}
            renderSelectedIcon={v.renderSelectedIcon}
            onPress={v.onPress}
            selectedTitleStyle={{color: '#c863b5'}}
            tabStyle={{
              backgroundColor: '#eee',
              justifyContent: 'center',
            }}>
            {v.component}
          </TabNavigator.Item>
        ))}
      </TabNavigator>
    </View>
  );
};

export default Index;
