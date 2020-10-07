import React, { useEffect, useState } from 'react'
import './DateInput.scss'

export const DateInput = () => {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [error, setError] = useState<boolean>(false)

  // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
  function isValidDate (dateString: string): boolean {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
      return false
    }

    // Parse the date parts to integers
    const parts = dateString.split('/')
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10)
    const year = parseInt(parts[2], 10)

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) {
      return false
    }

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1]
  }

  useEffect(() => {
    if (!isValidDate(`${day}/${month}/${year}`)) {
      setError(true)
    } else {
      setError(false)

      const date = new Date(
        year > 0 ? year - 1 : 0,
        month > 0 ? month - 1 : 0,
        day > 0 ? day - 1 : 0,
        0,
        0,
        0,
        0)

      console.log(date);
    }
  }, [day, month, year])

  return (
    <div className="date-input">
      <input placeholder="Day"
             type="number"
             value={day}
             onChange={e => setDay(e.target.value)}
             className={error ? 'error' : ''}/>
      <input placeholder="Month"
             type="number"
             value={month}
             onChange={e => setMonth(e.target.value)}
             className={error ? 'error' : ''}/>
      <input placeholder="Year"
             type="number"
             value={year}
             onChange={e => setYear(e.target.value)}
             className={error ? 'error' : ''}/>
    </div>
  )
}
