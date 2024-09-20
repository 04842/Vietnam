// src/components/DateRangePicker.tsx

import React from 'react'
import { DateRangePicker as ReactDateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import 'react-datepicker/dist/react-datepicker.css'

interface DateRangePickerProps {
  onChange: (range: { startDate: Date | null; endDate: Date | null }) => void
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const handleSelect = (ranges: any) => {
    onChange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate
    })
  }

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  return (
    <ReactDateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
    />
  )
}

export default DateRangePicker