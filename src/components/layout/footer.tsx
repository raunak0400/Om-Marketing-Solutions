'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { APP_NAME, NAV_LINKS, SERVICES } from '@/lib/constants';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export function Footer() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Inquiry Received',
      description: 'Thank you for your interest. A member of our team will contact you within one business day.',
    });
    form.reset();
  }
  return (
    <footer className="border-t border-border/60 bg-card" id="contact">
      <div className="container grid grid-cols-1 gap-12 py-12 md:grid-cols-3 lg:grid-cols-5">
        <div className="md:col-span-3 lg:col-span-2">
          <Logo />
          <p className="mt-4 text-muted-foreground">
            Your trusted partner in AI automation.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Solutions</h4>
          <ul className="space-y-2">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Company</h4>
          <ul className="space-y-2">
            {NAV_LINKS.filter(
              (l) => !l.children && !['Solutions', 'Services'].includes(l.label)
            ).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3 lg:col-span-5 xl:col-span-1">
           <h4 className="font-semibold">Get in Touch</h4>
           <p className="text-sm text-muted-foreground mt-2 mb-4">Send us a message to start the conversation.</p>
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
           </Form>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
