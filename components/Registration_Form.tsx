"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios"
import { ArrowBigRight, Loader } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast"

const industryOptions = [
    "automotive",
    "banking",
    "construction",
    "consumer-goods",
    "financial-services",
    "government",
    "healthcare",
    "hospitality",
    "information-technology",
    "insurance",
    "manufacturing",
    "media",
    "pharmaceutical",
    "real-estate",
    "retail",
    "telecommunications",
    "Other",
  ];
  
  const formSchema = z.object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    companyName: z.string().min(1, "Company name is required."),
    officialEmail: z.string().email("Enter a valid email address."),
    industry: z
      .string()
      .min(1, "Please select your industry.")
      .refine((value) => industryOptions.includes(value), {
        message: "Please select a valid industry.",
      }),
      problemStatement: z
    .string()
    .min(1, "Problem statement is required.")
    .max(500, "Problem statement cannot exceed 500 words."), // Limit to 500 words
    consent: z
      .boolean()
      .refine((val) => val === true, "You must agree to explore an AI solution."),
  });
  
export default function Registration_Form() {
    const { toast } = useToast()
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        companyName: "",
        officialEmail: "",
        industry: "",
        problemStatement: "",
        consent: false,
      },
    });
    const { isSubmitting, isValid } = form.formState;
  
    const onSubmit= async(values: z.infer<typeof formSchema>) =>{
      try {
        // Send the form data to the API endpoint.
        const response= await axios.post('/api/send-email',values)
        console.log(response);
          toast({
            title: "Registration Email sent successfully!",
            description: "",
            className: "z-99 bg-white text-green-700"
          })
  
          form.reset(); // Reset the form if successful
          // window.location.reload();
      } catch (error) {
        console.error("Error sending email:", error);
        toast({
          title: "Error sending email",
          description: "",
          variant: "destructive",
          className: "z-999 "
        })
      }
    }
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary" className="text-lg" size="lg">
        <ArrowBigRight className="mr-2 h-4 w-4 hover:translate-x-1" />{" "}
        Register Now
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-xs sm:max-w-lg md:max-w-xl bg-white overflow-y-auto max-h-[90vh]">
      <DialogHeader>
        <DialogTitle className="text-black">
          Think Tank by Myraa Technologies{" "}
        </DialogTitle>
        <DialogDescription>
          Please register your interest and our team shall get in touch
          with you to collect more details and initiate the next steps.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-1 sm:space-y-3"
          >
            {/* First Name Field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className="text-black"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name Field */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className="text-black"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name Field */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className="text-black"
                      placeholder="Company Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Official Email Field */}
            <FormField
              control={form.control}
              name="officialEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Official Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className="text-black"
                      placeholder="Email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Industry Select Field */}
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Industry</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      disabled={isSubmitting}
                      className="w-full border rounded-md p-2 text-black"
                    >
                      <option value="">Choose</option>
                      <option value="automotive">Automotive</option>
                      <option value="banking">Banking</option>
                      <option value="construction">Construction</option>
                      <option value="consumer-goods">
                        Consumer Goods
                      </option>
                      <option value="financial-services">
                        Financial Services
                      </option>
                      <option value="government">Government</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="information-technology">
                        Information Technology
                      </option>
                      <option value="insurance">Insurance</option>
                      <option value="manufacturing">
                        Manufacturing
                      </option>
                      <option value="media">Media</option>
                      <option value="pharmaceutical">
                        Pharmaceutical
                      </option>
                      <option value="real-estate">Real Estate</option>
                      <option value="retail">Retail</option>
                      <option value="telecommunications">
                        Telecommunications
                      </option>
                      <option value="Other">Other</option>
                      {/* Add more industries here */}
                    </select>
                  </FormControl>
                  <FormDescription>
                    Choose &apos;Other&apos; if you cannot find the
                    closest match.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Consent Checkbox */}
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start justify-center space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-black">
                      By submitting this form, you express your intent
                      to explore an AI solution for a meaningful problem
                      in your organization.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? (
                // <span className="loader"></span> // Spinner icon or component
                <Loader className="animate-spin h-4 w-4 mr-2 text-white" />
              ) : (
                "Submit"
              )}
            </Button>
            {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
          </form>
        </Form>
      </div>
    </DialogContent>
  </Dialog>
  )
}
