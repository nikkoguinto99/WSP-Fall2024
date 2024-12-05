<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/models/userStore'; // import your user store

// Router instance
const router = useRouter();

// Reactive state for Step 1
const step = ref(1);
const isOpen = ref(false);
const accountInfo = ref({
  firstName: '',
  lastName: '',
  dob: '',
  sex: '',
  email: '',
  password: '',
  confirmPassword: '',
  membershipType: '',
  agreeTerms: false,
});

// Reactive state for Step 2
const profileInfo = ref({
  profileName: '',
  profilePicture: '',
  bio: '',
  fitnessGoals: '',
  height: '',
  weight: '',
  calorieGoal: '',
  dietaryPreference: '',
});

// Reactive error state for each field
const errors = ref<Record<keyof typeof accountInfo.value | keyof typeof profileInfo.value, string>>({
  firstName: '',
  lastName: '',
  dob: '',
  sex: '',
  email: '',
  password: '',
  confirmPassword: '',
  membershipType: '',
  agreeTerms: '',
  profileName: '',
  profilePicture: '',
  bio: '',
  fitnessGoals: '',
  height: '',
  weight: '',
  calorieGoal: '',
  dietaryPreference: ''
});

// Validation Function for Step 1
const validateStep1 = () => {
  let isValid = true;

  // Reset error messages
  Object.keys(errors.value).forEach((key) => {
    errors.value[key as keyof typeof errors.value] = '';
  });

  // Check fields
  if (!accountInfo.value.firstName) {
    errors.value.firstName = 'First name is required.';
    isValid = false;
  }
  if (!accountInfo.value.lastName) {
    errors.value.lastName = 'Last name is required.';
    isValid = false;
  }
  if (!accountInfo.value.dob) {
    errors.value.dob = 'Date of birth is required.';
    isValid = false;
  }
  if (!accountInfo.value.sex) {
    errors.value.sex = 'Please select your sex.';
    isValid = false;
  }
  if (!accountInfo.value.email || !/\S+@\S+\.\S+/.test(accountInfo.value.email)) {
    errors.value.email = 'A valid email is required.';
    isValid = false;
  }
  if (!accountInfo.value.password) {
    errors.value.password = 'Password is required.';
    isValid = false;
  }
  if (accountInfo.value.password !== accountInfo.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords must match.';
    isValid = false;
  }
  if (!accountInfo.value.membershipType) {
    errors.value.membershipType = 'Please select a membership type.';
    isValid = false;
  }
  if (!accountInfo.value.agreeTerms) {
    errors.value.agreeTerms = 'You must agree to the terms and conditions.';
    isValid = false;
  }

  return isValid;
};

// Validation Function for Step 2
const validateStep2 = () => {
  let isValid = true;

  // Reset error messages
  errors.value.profileName = '';

  if (!profileInfo.value.profileName) {
    errors.value.profileName = 'Profile name is required.';
    isValid = false;
  }

  return isValid;
};

// Handle step progression
const nextStep = () => {
  if (step.value === 1 && validateStep1()) {
    step.value++;
  }
};

const previousStep = () => {
  step.value--;
};

// Final submission
const submitSignUp = () => {
  if (validateStep2()) {
    console.log('Account Info:', accountInfo.value);
    console.log('Profile Info:', profileInfo.value);

    // Get the user store
    const userStore = useUserStore();

    // Set user data in the store
    userStore.setUser({
      ...accountInfo.value,
      ...profileInfo.value,
      id: 0,
      profilePic: '',
      caloriegoal: '',
      dietaryPreferences: '',
      isAdmin: false
    });

    // Redirect to the dashboard
    router.push({ name: '/dashboard/' });
  }
};
</script>

<template>
<div class="modal" :class="{ 'is-active': isOpen }" id="TOS">
  <div class="modal-background"></div>

  <div class="modal-content">
    <div class="box">
      <!-- Your content -->

      <section id="terms-and-conditions">
    <div class="container">
        <h2>Terms and Conditions for Samurai Fitness Membership</h2>

        <h3>1. Membership Eligibility</h3>
        <p>
            1.1. By signing up for a membership at Samurai Fitness, you confirm that you are at least 18 years of age.
            Members under 18 must have a parent or legal guardian consent to their membership.
        </p>
        <p>
            1.2. All members must complete a health and fitness waiver before using any Samurai Fitness facilities.
        </p>

        <h3>2. Membership Agreement</h3>
        <p>
            2.1. Membership is non-transferable and non-refundable, except under certain conditions outlined in these terms.
        </p>
        <p>
            2.2. Samurai Fitness reserves the right to modify membership fees, hours of operation, class schedules, and
            facility offerings at any time. Members will be informed of any significant changes in advance.
        </p>

        <h3>3. Cancellation and Termination Policy</h3>
        <p>
            3.1. Members may cancel their membership at any time with a written notice of at least 30 days prior to the
            desired cancellation date.
        </p>
        <p>
            3.2. Samurai Fitness may terminate a membership if a member violates any of the gym’s rules or engages in
            illegal or inappropriate behavior on the premises.
        </p>

        <h3>4. Payment and Billing</h3>
        <p>
            4.1. Membership fees are due monthly and will be automatically debited from the member’s designated payment method.
        </p>
        <p>
            4.2. Samurai Fitness is not responsible for any bank or transaction fees incurred by the member as a result of
            membership payments.
        </p>

        <h3>5. Facility Usage</h3>
        <p>
            5.1. Members must follow all posted rules and staff instructions when using Samurai Fitness equipment and facilities.
        </p>
        <p>
            5.2. Samurai Fitness is not responsible for lost or stolen personal items. Lockers are provided, but it is the
            member’s responsibility to secure their belongings.
        </p>
        <p>
            5.3. Members must wear appropriate gym attire, including non-marking shoes and proper workout gear, at all times
            while using the facility.
        </p>

        <h3>6. Health and Safety</h3>
        <p>
            6.1. Members must inform Samurai Fitness staff of any pre-existing health conditions that may affect their ability to exercise.
        </p>
        <p>
            6.2. Samurai Fitness strongly recommends that all members consult a doctor before starting any fitness program.
        </p>
        <p>
            6.3. The gym reserves the right to refuse entry or terminate the membership of any individual who appears to be unfit
            to use the facilities due to illness, injury, or for the safety of others.
        </p>

        <h3>7. Liability Waiver</h3>
        <p>
            7.1. By signing up for a membership, you acknowledge that there are inherent risks associated with physical activity and
            the use of gym equipment.
        </p>
        <p>
            7.2. Samurai Fitness will not be held liable for any injury, illness, or death that occurs while using the gym’s facilities
            or participating in any of its programs.
        </p>
        <p>
            7.3. Members agree to use the gym equipment and facilities at their own risk and release Samurai Fitness from any liability
            for accidents or injuries.
        </p>

        <h3>8. Personal Trainers and Classes</h3>
        <p>
            8.1. Only Samurai Fitness-approved personal trainers may provide personal training services within the gym.
            Members are not permitted to bring outside trainers into the facility.
        </p>
        <p>
            8.2. Class schedules and instructors are subject to change without notice. Samurai Fitness does not guarantee
            a specific instructor or class time.
        </p>

        <h3>9. Privacy Policy</h3>
        <p>
            9.1. Samurai Fitness respects your privacy and will only use personal information for administrative purposes
            and communication related to your membership.
        </p>
        <p>
            9.2. Your information will not be shared with third parties without your explicit consent unless required by law.
        </p>

        <h3>10. Changes to Terms and Conditions</h3>
        <p>
            10.1. Samurai Fitness reserves the right to modify these terms and conditions at any time. Members will be notified of
            significant changes via email or on the gym's website. Continued use of the membership after such notification constitutes
            acceptance of the updated terms.
        </p>

        <h3>Agreement</h3>
        <p>
            By signing up for a membership at Samurai Fitness, you agree to comply with these terms and conditions. You understand
            that any violation of these terms may result in the suspension or termination of your membership.
        </p>
    </div>
</section>

    </div>
  </div>

  <button class="modal-close is-large" aria-label="close"
    @click="isOpen = false"></button>
</div>

<div class="level-item" id="signup-form">
  <div class="column is-half">
    <div class="container">
       <!-- Step 1: Account Information -->
       <div v-if="step === 1">
    <h2 class="title">Create Your Account</h2>
    <br>

    <!-- First Name -->
    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input v-model="accountInfo.firstName" class="input" type="text" placeholder="First Name" />
      </div>
      <p class="help is-danger">{{ errors.firstName }}</p>
    </div>

    <!-- Last Name -->
    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input v-model="accountInfo.lastName" class="input" type="text" placeholder="Last Name" />
      </div>
      <p class="help is-danger">{{ errors.lastName }}</p>
    </div>

    <!-- Date of Birth -->
    <div class="field">
      <label class="label">Date of Birth</label>
      <div class="control">
        <input v-model="accountInfo.dob" class="input" type="date" />
      </div>
      <p class="help is-danger">{{ errors.dob }}</p>
    </div>

    <!-- Sex -->
    <div class="field">
      <label class="label">Sex</label>
      <div class="control">
        <label class="radio">
          <input v-model="accountInfo.sex" type="radio" value="Male" />
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          Male&nbsp
        </label>
        <label class="radio">
          <input v-model="accountInfo.sex" type="radio" value="Female" />
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          Female&nbsp
        </label>
        <label class="radio">
          <input v-model="accountInfo.sex" type="radio" value="Female" />
          Prefer not to answer
        </label>
      </div>
      <p class="help is-danger">{{ errors.sex }}</p>
    </div>

    <!-- Email -->
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input v-model="accountInfo.email" class="input" type="email" placeholder="Email" />
      </div>
      <p class="help is-danger">{{ errors.email }}</p>
    </div>

    <!-- Password -->
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input v-model="accountInfo.password" class="input" type="password" placeholder="Enter Password" />
      </div>
      <p class="help is-danger">{{ errors.password }}</p>
    </div>

    <!-- Confirm Password -->
    <div class="field">
      <label class="label">Confirm Password</label>
      <div class="control">
        <input v-model="accountInfo.confirmPassword" class="input" type="password" placeholder="Confirm Password" />
      </div>
      <p class="help is-danger">{{ errors.confirmPassword }}</p>
    </div>

    <!-- Membership Type -->
    <div class="field">
      <label class="label">Membership Type</label>
      <div class="control">
        <div class="select">
          <select v-model="accountInfo.membershipType">
            <option value="">Select Membership</option>
            <option value="Free Membership">Free Membership</option>
            <option value="Standard Membership">Standard Membership ($9.99)</option>
            <option value="Membership+">Membership+ ($15.99)</option>
          </select>
        </div>
      </div>
      <p class="help is-danger">{{ errors.membershipType }}</p>
    </div>

      <!-- Agree Terms -->
    <div class="field">
      <label class="checkbox">
        <input v-model="accountInfo.agreeTerms" type="checkbox" />
        I agree to the <button class="js-modal-button" @click="isOpen = true"><i>terms and conditions</i></button>.
      </label>
      <p class="help is-danger">{{ errors.agreeTerms }}</p>
    </div>

      <button class="button is-link" @click="nextStep">Next</button>
    </div>

    <!-- Step 2: Profile Information -->
    <div v-if="step === 2">
  <h2 class="title">Build Your Profile</h2>

  <!-- Profile Name -->
  <div class="field">
    <label class="label">Profile Name</label>
    <div class="control">
      <input v-model="profileInfo.profileName" class="input" type="text" placeholder="Profile Name" />
    </div>
    <p class="help is-danger">{{ errors.profileName }}</p>
  </div>

  <!-- Profile Picture -->
  <div class="field">
    <label class="label">Profile Picture</label>
    <div class="control">
      <input v-model="profileInfo.profilePicture" class="input" type="url" placeholder="Profile Picture URL" />
    </div>
  </div>

  <!-- Bio -->
  <div class="field">
    <label class="label">Bio</label>
    <div class="control">
      <textarea v-model="profileInfo.bio" class="textarea" placeholder="Tell us about yourself"></textarea>
    </div>
  </div>

  <!-- Fitness Goals -->
  <div class="field">
    <label class="label">Fitness Goals</label>
    <div class="control">
      <textarea v-model="profileInfo.fitnessGoals" class="textarea" placeholder="What are your fitness goals?"></textarea>
    </div>
  </div>

  <!-- Height -->
  <div class="field">
    <label class="label">Height (cm)</label>
    <div class="control">
      <input v-model="profileInfo.height" class="input" type="number" min="0" placeholder="Enter height in cm" />
    </div>
  </div>

  <!-- Weight -->
  <div class="field">
    <label class="label">Weight (kg)</label>
    <div class="control">
      <input v-model="profileInfo.weight" class="input" type="number" min="0" placeholder="Enter weight in kg" />
    </div>
  </div>

  <!-- Calorie Goal -->
  <div class="field">
    <label class="label">Daily Calorie Goal</label>
    <div class="control">
      <input v-model="profileInfo.calorieGoal" class="input" type="number" min="0" placeholder="Enter daily calorie goal" />
    </div>
  </div>

  <!-- Dietary Preference -->
  <div class="field">
    <label class="label">Dietary Preference</label>
    <div class="control">
      <div class="select">
        <select v-model="profileInfo.dietaryPreference">
          <option value="">Select dietary preference</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Keto">Keto</option>
          <option value="Paleo">Paleo</option>
          <option value="No Preference">No Preference</option>
        </select>
      </div>
    </div>
  </div>

  <div class="buttons">
    <button class="button is-link is-light" @click="previousStep">Back</button>
    <button class="button is-link" @click="submitSignUp">Submit</button>
  </div>
</div>
  </div>
  </div>
  </div>

</template>

<style scoped>

</style>
