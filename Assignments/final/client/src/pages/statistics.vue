<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { useUserStore } from "@/models/userStore"; // Adjust path if necessary
import statisticsData from "@/data/statistics.json"; // Adjust path if necessary

const { state } = useUserStore();
const user = state.user;

// Get the logged-in user's statistics
const userStats = statisticsData.statistics.find((stat) => stat.userID === user?.id);

// Define maximum values for progress bar normalization
const MAX_CALORIES_BURNED = 500;
const MAX_CALORIES_CONSUMED = 2500;
const MAX_EXERCISE_TIME = 180; // minutes
const MAX_EXERCISE_COUNT = 10;
const MAX_WEEKLY_EXERCISE_TIME = 1000; // minutes
</script>

<template>
  <div class="statistics-page">
    <div class="container">
      <!-- Page Header -->
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">{{ user?.profileName }}'s Statistics</p>
        </div>
      </section>

      <!-- Statistics Content -->
      <div class="columns mt-5">
        <!-- Daily Stats -->
        <div class="column is-half">
          <div class="box">
            <h2 class="title is-4">Daily Stats</h2>
            <div v-if="userStats">
              <div class="stat-item">
                <p class="has-text-weight-bold">Calories Burned</p>
                <progress
                  class="progress is-success"
                  :value="userStats.dailyStats.caloriesBurned"
                  :max="MAX_CALORIES_BURNED"
                >
                </progress>
                <p>{{ userStats.dailyStats.caloriesBurned }} / {{ MAX_CALORIES_BURNED }}</p>
              </div>

              <div class="stat-item">
                <p class="has-text-weight-bold">Calories Consumed</p>
                <progress
                  class="progress is-info"
                  :value="userStats.dailyStats.caloriesConsumed"
                  :max="MAX_CALORIES_CONSUMED"
                >
                </progress>
                <p>{{ userStats.dailyStats.caloriesConsumed }} / {{ MAX_CALORIES_CONSUMED }}</p>
              </div>

              <div class="stat-item">
                <p class="has-text-weight-bold">Exercise Time (minutes)</p>
                <progress
                  class="progress is-warning"
                  :value="userStats.dailyStats.exerciseTimeMinutes"
                  :max="MAX_EXERCISE_TIME"
                >
                </progress>
                <p>{{ userStats.dailyStats.exerciseTimeMinutes }} / {{ MAX_EXERCISE_TIME }}</p>
              </div>

              <div class="stat-item">
                <p class="has-text-weight-bold">Exercise Count</p>
                <progress
                  class="progress is-danger"
                  :value="userStats.dailyStats.exerciseCount"
                  :max="MAX_EXERCISE_COUNT"
                >
                </progress>
                <p>{{ userStats.dailyStats.exerciseCount }} / {{ MAX_EXERCISE_COUNT }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Weekly Stats -->
        <div class="column is-half">
          <div class="box">
            <h2 class="title is-4">Weekly Stats</h2>
            <div v-if="userStats">
              <div class="stat-item">
                <p class="has-text-weight-bold">Total Exercise Time (minutes)</p>
                <progress
                  class="progress is-primary"
                  :value="userStats.weeklyStats.totalExerciseTimeMinutes"
                  :max="MAX_WEEKLY_EXERCISE_TIME"
                >
                </progress>
                <p>{{ userStats.weeklyStats.totalExerciseTimeMinutes }} / {{ MAX_WEEKLY_EXERCISE_TIME }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Stats Fallback -->
      <div v-if="!userStats" class="notification is-warning">
        <p>No statistics available for this user.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistics-page {
  padding: 20px;
}

.hero-body {
  text-align: center;
}

.box {
  padding: 20px;
}

.stat-item {
  margin-bottom: 20px;
}
</style>
