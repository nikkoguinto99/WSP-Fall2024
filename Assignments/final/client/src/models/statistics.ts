// Importing JSON file
import statisticsData from '../data/statistics.json';

// Define types (ensure that the imported JSON matches the type defined below)
export interface DailyStats {
  caloriesBurned: number;
  caloriesConsumed: number;
  exerciseTimeMinutes: number;
  exerciseCount: number;
}

export interface WeeklyStats {
  totalExerciseTimeMinutes: number;
}

export interface UserStatistics {
  userID: number;
  dailyStats: DailyStats;
  weeklyStats: WeeklyStats;
}

// The imported JSON can be typed directly
export const statistics: UserStatistics[] = statisticsData.statistics;
