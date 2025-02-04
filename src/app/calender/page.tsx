"use client";
import { Calendar } from "@/components/ui/calendar";
import { split } from "postcss/lib/list";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  console.log("Date you pick: " + date);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold leading-tight mb-1">Calender</h1>
      <div className="text-1xl font-bold mt-1 mb-1">
        {date
          ?.toLocaleDateString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\//g, "-")}
      </div>
      <div className="h-[340px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-2"
        />
      </div>
    </div>
  );
}
