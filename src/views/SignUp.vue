<template>
  <div class="relative h-screen flex items-center justify-center bg-gray-100">
    <div class="relative z-10 w-full max-w-2xl bg-white p-10 rounded-lg shadow-2xl">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
        Create an Account
      </h2>

      <form @submit.prevent="handleSignup">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Full Name</label>
          <input
            v-model="fullName"
            type="text"
            class="w-full h-10 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7A7A]"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full h-10 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7A7A]"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full h-10 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7A7A]"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-[#2A7A7A] text-white py-3 rounded-lg font-semibold text-lg transition"
          :disabled="loading"
        >
          <span v-if="loading">Signing Up...</span>
          <span v-else>Sign Up</span>
        </button>
      </form>

      <p class="text-sm text-gray-600 mt-4 text-center">
        Already have an account?
        <RouterLink to="/signin" class="text-[#2A7A7A] font-semibold hover:underline"
          >Sign in</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/Firebase/Firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useToast } from 'vue-toastification'

const router = useRouter()
const fullName = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const toast = useToast()

const handleSignup = async () => {
  loading.value = true

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user
    await updateProfile(user, {
      displayName: fullName.value,
    })

    await setDoc(doc(db, 'users', user.uid), {
      fullName: fullName.value,
      email: email.value,
      createdAt: new Date(),
    })

    toast.success('Account created successfully! Redirecting...')

    setTimeout(() => {
      router.push('/signin')
    }, 2000)
  } catch (error) {
    console.error('Signup error:', error.message)
    toast.error(error.message)
  } finally {
    loading.value = false
  }
}
</script>
