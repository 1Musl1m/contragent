import axios from 'axios'
import { useUserStore } from '@/stores/user'

const API_URL = import.meta.env.VITE_API_URL

export const registerUser = async (
  fullName: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    await axios.post(
      `${API_URL}/auth/users/`,
      {
        full_name: fullName,
        email,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    await authenticateUser(email, password)
  } catch (error: unknown) {
    console.error(error)
  }
}

export const authenticateUser = async (email: string, password: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/jwt/create/`,
      {
        email,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const { access, refresh } = response.data

    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)

    await fetchUserProfile()
  } catch (error: unknown) {
    console.error(error)
  }
}

export const fetchUserProfile = async (): Promise<void> => {
  try {
    const accessToken = localStorage.getItem('access_token');
    console.log('Access token:', accessToken);

    const userStore = useUserStore();

    if (!accessToken) {
      console.log('No access token found, skipping fetch');
      return;
    }

    const response = await axios.get(`${API_URL}/auth/users/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    const userData = response.data;

    if (Array.isArray(userData) && userData.length > 0) {
      userStore.setUserProfiles(userData);
      localStorage.setItem('user_profiles', JSON.stringify(userData));
    } else {
      console.error('No user data found or invalid response', userData);
    }
  } catch (error: unknown) {
    console.error('Error fetching user profile:', error);
  }
};


export const requestWithAuth = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any
): Promise<any> => {
  const accessToken = localStorage.getItem('access_token')

  try {
    const response = await axios({
      url: `${API_URL}${url}`,
      method,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error: unknown) {
    console.error('Request error:', error)
  }
}