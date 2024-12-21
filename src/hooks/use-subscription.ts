import axios from 'axios'
import { useState } from 'react'

export const useSubscription = () => {
  const [isProcessing, setIsProcessing] = useState(false)

  const onSubscribe = async () => {
    try {
      setIsProcessing(true)
      const response = await axios.get('/api/payment')
      if (response.data.status === 200) {
        window.location.href = `${response.data.session_url}`
        return // Ensure to exit after redirect
      }
    } catch (error) {
      console.error('Subscription failed:', error)
      // Optionally, show a user-friendly message
      alert('An error occurred during subscription. Please try again.')
    } finally {
      setIsProcessing(false) // Ensure state is reset even if an error occurs
    }
  }

  return { onSubscribe, isProcessing }
}
