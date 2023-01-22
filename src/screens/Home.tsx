import { Text, View, ScrollView } from "react-native";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimunSummaryDatesSize = 18 * 5;

const amountOfDaysToFill = minimunSummaryDatesSize - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header></Header>
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((wd, i) => (
          <Text
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            key={`${wd} - ${i}`}
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
          >
            {wd}
          </Text>
          // <HabitDay key={`${wd} - ${i}`}></HabitDay>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.toString()}></HabitDay>
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <View
                key={i}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              ></View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
