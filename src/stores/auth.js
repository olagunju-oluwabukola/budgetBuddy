import { defineStore } from 'pinia'
import { auth, db, storage } from '@/Firebase/Firebase.js'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    profile: { fullName: '', photoURL: '' },
  }),

  actions: {
    async fetchUser() {
      try {
        const currentUser = auth.currentUser
        if (!currentUser) {
          console.warn('No authenticated user found.')
          return
        }

        this.user = currentUser
        const userRef = doc(db, 'users', currentUser.uid)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
          this.profile = userSnap.data()
        } else {
          console.warn('User document does not exist in Firestore.')
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message)
      }
    },

    async updateProfile({ fullName, photo }) {
      if (!this.user) return

      const userRef = doc(db, 'users', this.user.uid)
      let photoURL = this.profile.photoURL

      if (photo) {
        const imageRef = storageRef(storage, `profiles/${this.user.uid}`)
        await uploadBytes(imageRef, photo)
        photoURL = await getDownloadURL(imageRef)
      }

      await updateDoc(userRef, { fullName, photoURL })

      this.profile.fullName = fullName
      this.profile.photoURL = photoURL
    },

    async logout() {
      await auth.signOut()
      this.user = null
      this.profile = { fullName: '', photoURL: '' }
    },
  },
})

onAuthStateChanged(auth, async (user) => {
  const authStore = useAuthStore()
  if (user) {
    await authStore.fetchUser()
  } else {
    authStore.user = null
    authStore.profile = { fullName: '', photoURL: '' }
  }
})
