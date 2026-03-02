import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  organisationName: z.string().trim().min(1, "Organisation name is required").max(200),
  domain: z.string().trim().min(1, "Industry / domain is required").max(200),
  organisationSize: z.string().min(1, "Please select organisation size"),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  contactEmail: z.string().trim().email("Enter a valid email").max(255),
  contactPhone: z.string().trim().max(30).optional(),
  jobTitle: z.string().trim().min(1, "Job title is required").max(100),
  message: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface PilotRequestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PilotRequestForm = ({ open, onOpenChange }: PilotRequestFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organisationName: "",
      domain: "",
      organisationSize: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      jobTitle: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Pilot Request from ${values.organisationName}`
    );
    const body = encodeURIComponent(
      [
        `Organisation: ${values.organisationName}`,
        `Industry / Domain: ${values.domain}`,
        `Organisation Size: ${values.organisationSize}`,
        `Contact Person: ${values.contactName}`,
        `Job Title: ${values.jobTitle}`,
        `Email: ${values.contactEmail}`,
        values.contactPhone ? `Phone: ${values.contactPhone}` : "",
        values.message ? `\nMessage:\n${values.message}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:vdhimar@cognikord.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client",
      description: "Your pilot request details have been pre-filled.",
    });

    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Request a Pilot
          </DialogTitle>
          <DialogDescription>
            Tell us about your organisation and we'll get in touch.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="organisationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organisation Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Corp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="domain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry / Domain *</FormLabel>
                    <FormControl>
                      <Input placeholder="Manufacturing, Logistics…" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organisationSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organisation Size *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-50">1 – 50</SelectItem>
                        <SelectItem value="51-200">51 – 200</SelectItem>
                        <SelectItem value="201-1000">201 – 1,000</SelectItem>
                        <SelectItem value="1001-5000">1,001 – 5,000</SelectItem>
                        <SelectItem value="5001+">5,001+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person *</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title *</FormLabel>
                    <FormControl>
                      <Input placeholder="VP Supply Chain" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jane@acme.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 555 000 0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your use case or any specific requirements…"
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting…" : "Submit Request"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PilotRequestForm;
