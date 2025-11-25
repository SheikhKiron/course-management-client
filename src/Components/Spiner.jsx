import React from 'react'
import { GridLoader } from 'react-spinners'

export default function Spiner() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-289px)] items-center">
      <GridLoader color='#3b82f6'></GridLoader>
    </div>
  );
}
