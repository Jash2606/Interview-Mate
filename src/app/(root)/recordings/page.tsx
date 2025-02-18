import useGetCalls from '@/hooks/useGetCalls'
import React from 'react'

function RecordingPage() {
  const { calls , isLoading} = useGetCalls();

  return (
    <div>RecordingPage</div>
  )
}

export default RecordingPage