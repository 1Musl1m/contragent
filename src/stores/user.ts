import { defineStore } from 'pinia'

export interface UserProfile {
  id: number
  email: string
  full_name: string
  role: string
  avatar: string | null
  position: string
  birth_date: string
  location: string
  phone_number: string
  membership_exists: boolean
  active_membership: number
  name_membership: string
}

interface UserState {
  profiles: UserProfile[]
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    profiles: JSON.parse(localStorage.getItem('user_profiles') || '[]')
  }),
  actions: {
    setUserProfiles(profiles: UserProfile[]) {
      this.profiles = profiles
      localStorage.setItem('user_profiles', JSON.stringify(profiles))
    },
    clearUserProfiles() {
      console.log('Clearing user profiles');
      this.profiles = [];
      localStorage.removeItem('user_profiles');
      console.log('User profiles cleared:', this.profiles);
    }
  }
})
