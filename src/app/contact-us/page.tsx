'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast({
                title: 'Message sent!',
                description: 'Thank you for contacting us. We will get back to you soon.',
            });
            setIsSubmitting(false);
            (e.target as HTMLFormElement).reset();
        }, 1000);
    };

    return (
        <div className="container py-12 md:py-16">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Get In Touch
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Have a question or want to discuss your project? We're here to help
                        you grow your business with digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="h-5 w-5 text-primary" />
                                    Phone
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="tel:+919825247312"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    +91 9825247312
                                </a>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                    Email
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="mailto:ommarketing.weighingscale1@gmail.com"
                                    className="text-muted-foreground hover:text-foreground transition-colors break-all"
                                >
                                    ommarketing.weighingscale1@gmail.com
                                </a>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    Location
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Ahmedabad, Gujarat
                                    <br />
                                    India
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Send us a message</CardTitle>
                            <CardDescription>
                                Fill out the form below and we'll get back to you as soon as
                                possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject *</Label>
                                    <Select name="subject" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">General Inquiry</SelectItem>
                                            <SelectItem value="web-development">
                                                Web Development
                                            </SelectItem>
                                            <SelectItem value="inventory-management">
                                                Inventory Management
                                            </SelectItem>
                                            <SelectItem value="whatsapp-automation">
                                                WhatsApp Automation
                                            </SelectItem>
                                            <SelectItem value="digital-marketing">
                                                Digital Marketing
                                            </SelectItem>
                                            <SelectItem value="hire-developers">
                                                Hire Software Engineers
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project or question..."
                                        rows={6}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full btn-glow-hover"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
