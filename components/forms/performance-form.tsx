"use client";

import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
 

const formSchema = z.object({
  name: z.string()
  .min(3, "Name must be at least 3 characters long")
  .max(25, "Name must not exceed 23 characters."),

  runScored: z.number(),
  oversPlayed: z.number(),
  oversDelivered: z.number(),
  wicketsTaken: z.number(),
  sixes_count: z.number(),
  fours_count: z.number(),
  award: z.string(),
})

export function PerformanceForm() {

  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      runScored: 0,
      oversPlayed: 0,
      oversDelivered: 0,
      wicketsTaken: 0,
      sixes_count: 0,
      fours_count: 0,
      award: "None"
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values)
    // check if email and pwd exist and login user, else error messages
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 p-4 rounded-xl container flex flex-col md:flex-row justify-between items-center w-4/5 border">
        <div className="w-2/5 flex flex-col items-start gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Babar Azam" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="oversDelivered"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Overs Delivered</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="wicketsTaken"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wickets Taken</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="award"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Awards</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Award received" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="None">None</SelectItem>
                  <SelectItem value="Man of the Match">Man of the Match</SelectItem>
                  <SelectItem value="Hattrick">Hattrick</SelectItem>
                  <SelectItem value="Best Fielder">Best Fielder</SelectItem>
                  <SelectItem value="Fastest Fifty">Fastest Fifty</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
          
        </div>
        
        <div className="w-2/5 flex flex-col items-start gap-4">
          <FormField
            control={form.control}
            name="runScored"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Runs Scored</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="oversPlayed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Overs Played</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sixes_count"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sixes Count</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fours_count"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fours Count</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button type="submit" className="mt-4">Add Data</Button>
        </div>
        
      </form>
    </Form>
  )
}
