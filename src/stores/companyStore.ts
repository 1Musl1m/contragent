import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCompanyStore = defineStore('companyStore', () => {
  const selectedCompany = ref(null)
  const companyFinances = ref(null)

  const setSelectedCompany = async (inn: number) => {
    if (!inn) return
    const myHeaders = new Headers()
    myHeaders.append('Authorization', 'Basic YXNoYWJAZ21haWwuY29tOjRFS2ZqRFZN')
    const requestOptions = {
      method: 'GET',
      headers: myHeaders
    }

    try {
      // Запрос на получение общей информации о компании
      const response = await fetch(
        `https://infoglobal.group/api/v1/company/?query=${inn}`,
        requestOptions
      )
      const data = await response.json()
      selectedCompany.value = data

      // Запрос на получение финансовой информации о компании
      const financeResponse = await fetch(
        `https://infoglobal.group/api/v1/company-finances/?query=${inn}`,
        requestOptions
      )
      const financeData = await financeResponse.json()
      console.log(financeData)
      companyFinances.value = financeData
    } catch (error) {
      console.error(error)
    }
  }

  return {
    selectedCompany,
    companyFinances,
    setSelectedCompany
  }
})
