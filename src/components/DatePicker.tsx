'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type DatePickerDemoProps = {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
};

export function DatePickerDemo({ value, onChange }: DatePickerDemoProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);

  const handleSelect = (selectDate: Date | undefined) => {
    setDate(selectDate);
    onChange?.(selectDate);
  };

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant={'outline'}
            data-empty={!date}
            className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
          >
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
            <ChevronDownIcon data-icon="inline-end" />
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={handleSelect} defaultMonth={date} />
      </PopoverContent>
    </Popover>
  );
}
