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
import toast from "react-hot-toast";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
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
import { useRouter } from "next/navigation";
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
  consent: z
    .boolean()
    .refine((val) => val === true, "You must agree to explore an AI solution."),
});

function HeroSection() {
  // const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
 
  // const toggleEdit = () => setIsEditing((current) => !current);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      officialEmail: "",
      industry: "",
      consent: false,
    },
  });
  const { isSubmitting, isValid } = form.formState;
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    try {
      // await axios.post(`/api/courses/${courseId}/announcements`, values);
      toast.success("Announcement Added");
      form.reset();
      // toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-16 overflow-x-hidden">
      <div className="overflow-hidden absolute -z-10 bottom-[-4rem] -right-[0rem] h-[30rem] w-[8.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-r from-blue-100 to-violet-400 "></div>

      <div className="flex flex-col items-start justify-center space-y-4 sm:max-w-[300px] md:max-w-[580px]  sm:-mt-36">
        <h1 className="text-2xl sm:text-3xl md:text-6xl text-black font-bold">
          Think Tank by <span className="text-custom-primary">Myraa</span>{" "}
          Technologies
        </h1>
        <p className="text-gray-500 text-lg font-medium pl-2">
          Future Proof Your Business
        </p>
        <div className="flex flex-col md:flex-row  space-y-3 md:space-y-0 sm:space-x-4 justify-center items-start sm:items-center pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary" className="text-lg" size="lg">
                <ArrowBigRight className="mr-2 h-4 w-4 hover:translate-x-1" />{" "}
                Register Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xs sm:max-w-lg md:max-w-xl bg-white">
              <DialogHeader>
                <DialogTitle>Think Tank by Myraa Technologies </DialogTitle>
                <DialogDescription>
                Please register your interest and our team shall get in touch with you to collect more details and initiate the next steps.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                  >
                    {/* First Name Field */}
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
                              placeholder="First Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage  />
                        </FormItem>
                      )}
                    />

                    {/* Last Name Field */}
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
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
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
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
                          <FormLabel>Official Email</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
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
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              disabled={isSubmitting}
                              className="w-full border rounded-md p-2"
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
                          Choose &apos;Other&apos; if you cannot find the closest match.
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
                            <FormLabel>
                            By submitting this form, you express your intent to explore an AI solution for a meaningful problem in your organization.
                            </FormLabel>
                            
                          </div>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant="primary" disabled={!isValid || isSubmitting}>
                      Submit
                    </Button>
                    {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="text-md sm:text-lg border-t-4" size="lg">
            AI Innovative Program
          </Button>
        </div>
      </div>
      <div className="min-w-[300px] mt-5 sm:mt-0">
        <Image
          src="/hero-image.svg"
          alt="hero-image"
          height={500}
          width={600}
        />
      </div>
    </div>
  );
}

export default HeroSection;
