<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
<div class="modal" :class="{ 'is-active': isOpen }">
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

<div class="level-item">
  <div class="column is-half">
    <div class="container">
      <div class="card">
  <div class="card-content">
    <div class="content">
      <div>
        <div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="First Name">
  </div>
</div>

<div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Last Name">
  </div>
</div>

<div class="field">
  <label class="label">Date of Birth</label>
  <div class="control">
    <input class="input" type="date" placeholder="Last Name">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email input">
    <span class="icon is-small is-left">
      <i class="far fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left">
    <input class="input" type="password"  placeholder="Enter Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
</div>
</div>

<div class="field">
  <label class="label">Confirm Password</label>
  <div class="control has-icons-left">
    <input class="input" type="password"  placeholder="Enter Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
</div>
</div>

<div class="field">
  <label class="label">Membership Type</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Free Membership</option>
        <option>Standard Membership</option>
        <option>Membership +</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the&nbsp; <!-- &nbsp non break space character -->
    </label>

    <button class="js-modal-trigger"
    :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
        <p class="has-text-weight-bold">terms and conditions</p>
      </button>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <RouterLink to="/">
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</RouterLink>
</div>
</div>
    </div>
  </div>
</div>
    </div>
    </div>
  </div>

</template>

<style scoped>

</style>
