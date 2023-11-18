"use client";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
 

const formSchema = z.object({
  
  password: z.string()
  .min(8, "Password must be at least 8 characters"),

  confirmPassword: z.string(),

  address: z.string()
  .min(8, "address should be at least 8 characters long")
  .max(40, "address should not exceed 40 characters"),

  role: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export function UpdateForm() {

  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      address: "Flat #101, PQR Street, Karachi",
      role: "Left-arm Leg Spin Bowler",
      // add date of birth etc here
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 p-4 rounded-xl container flex flex-col md:flex-row justify-between items-center w-4/5 border">
        <div className="w-2/5 flex flex-col items-start gap-4">
          
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="w-2/5 flex flex-col items-start gap-4">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="street #13, XYZ city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Right-Handed Batsman">Right-Handed Batsman</SelectItem>
                  <SelectItem value="Left-Handed Batsman">Left-Handed Batsman</SelectItem>
                  <SelectItem value="Left-arm Fast Bowler">Left-arm Fast Bowler</SelectItem>
                  <SelectItem value="Right-arm Fast Bowler">Right-arm Fast Bowler</SelectItem>
                  <SelectItem value="Right-arm Off Spin Bowler">Right-arm Off Spin Bowler</SelectItem>
                  <SelectItem value="Left-arm Off Spin Bowler">Left-arm Off Spin Bowler</SelectItem>
                  <SelectItem value="Right-arm Leg Spin Bowler">Right-arm Leg Spin Bowler</SelectItem>
                  <SelectItem value="Left-arm Leg Spin Bowler">Left-arm Leg Spin Bowler</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">Update</Button>
        </div>
        
      </form>
    </Form>
  )
}
