import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../values/colors';
import variables from '../../../values/variables';

const styles = StyleSheet.create({
  eventsTitle: {
    fontSize: variables.mediumFontSize,
    fontWeight: '600',
    color: colors.textColor,
    paddingLeft: variables.horizontalPadding,
    marginBottom: 10,
  },
  cardContainer: {
    padding: 15,
    marginBottom: 47,
    height: 160,
  },
  seeAllEventsButton: {
    marginBottom: 37,
    paddingBottom: 10,
  },
  seeAllEventsText: {
    fontSize: variables.smallFontSize,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primaryColor,
  },
});

const EventItem = ({color, spacementRight}) => {
  const colorStyle = useMemo(() => {
    const style = {
      backgroundColor: color,
    };

    if (spacementRight) {
      style.marginRight = variables.horizontalPadding;
      style.borderTopEndRadius = 11;
      style.borderBottomEndRadius = 11;
    } else {
      style.marginLeft = variables.horizontalPadding;
      style.borderTopStartRadius = 11;
      style.borderBottomStartRadius = 11;
    }

    return style;
  }, [color, spacementRight]);

  return (
    <View style={[styles.cardContainer, colorStyle]}>
      <Text>Evento</Text>
    </View>
  );
};

const Events = ({}) => {
  return (
    <View>
      <View>
        <Text style={styles.eventsTitle}>Eventos</Text>
      </View>
      <EventItem color={colors.lightBlue} />
      <EventItem color={colors.lightPink} spacementRight />
      <EventItem color={colors.lightGreen} />
      <TouchableOpacity style={styles.seeAllEventsButton}>
        <Text style={styles.seeAllEventsText}>Ver todos...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Events;
