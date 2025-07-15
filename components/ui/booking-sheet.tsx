'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type BookingStep = 'info' | 'selection' | 'form' | 'success';

export default function BookingSheet() {
  const [step, setStep] = useState<BookingStep>('info');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [selectedGuests, setSelectedGuests] = useState<string>('2');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthdayDay: '',
    birthdayMonth: '',
    postalCode: '',
    language: 'English',
    receiveNews: false,
    agreeTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend API
    console.log('Booking submitted:', {
      selectedDate: selectedDate?.toISOString(),
      selectedTime,
      selectedGuests,
      formData,
    });
    setStep('success');
  };

  const timeSlots = [
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '17:30',
    '17:45',
    '21:15',
    '21:30',
    '21:45',
    '22:00',
  ];

  return (
    <div className="flex flex-col h-full font-narrow">
      <SheetHeader className="p-6 border-b">
        {step === 'info' && (
          <>
            <SheetTitle className="text-2xl font-bold">
              WICHTIGE INFO FÜR EURE RESERVIERUNG BEI COCCODRILLO
            </SheetTitle>
            <SheetDescription className="text-sm text-muted-foreground">
              Tue, {format(selectedDate || new Date(), 'dd MMM')} • {selectedTime || 'Select Time'}{' '}
              • {selectedGuests} Guests
            </SheetDescription>
          </>
        )}
        {step === 'selection' && (
          <>
            <SheetTitle className="text-2xl font-bold">Book Your Table</SheetTitle>
            <SheetDescription className="text-sm text-muted-foreground">
              Tue, {format(selectedDate || new Date(), 'dd MMM')} • {selectedTime || 'Select Time'}{' '}
              • {selectedGuests} Guests
            </SheetDescription>
          </>
        )}
        {step === 'form' && (
          <>
            <SheetTitle className="text-2xl font-bold">Your Information</SheetTitle>
            <SheetDescription className="text-sm text-muted-foreground">
              Please select an option below to continue checkout:
            </SheetDescription>
          </>
        )}
        {step === 'success' && (
          <>
            <SheetTitle className="text-2xl font-bold">Booking Confirmed!</SheetTitle>
            <SheetDescription className="text-sm text-muted-foreground">
              Your table has been successfully booked.
            </SheetDescription>
          </>
        )}
      </SheetHeader>

      <div className="flex-1 overflow-y-auto p-6">
        {step === 'info' && (
          <div className="space-y-4 text-sm">
            <p className="font-semibold">About</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Wir bitten Sie freundlich darum, sich an die Personenzahl Ihrer Reservierung zu
                halten. Warnen Sie uns daher, teilen Sie uns das bitte im Voraus mit, indem Sie Ihre
                Reservierung über die Bestätigungsmail der Buchung anpassen oder indem Sie uns per
                E-Mail kontaktieren: coccodrillo@bigsquadra.com.
              </li>
              <li>
                Sie können Ihren Tisch 2 Stunden lang genießen, was Ihnen genug Zeit gibt, um mit
                uns im Coccodrillo zu genießen.
              </li>
              <li>Bitte stellen Sie sicher, dass Sie rechtzeitig ankommen.</li>
              <li>
                Wir halten Ihre Plätze für 15 Minuten warm. Danach werden sie an andere Gäste
                vergeben.
              </li>
              <li>
                Für spezielle Anfragen hinterlassen Sie bitte eine Nachricht in den
                Reservierungsanmerkungen.
              </li>
              <li>
                Bitte beachten Sie, dass wir keine Tische an bestimmten Plätzen garantieren können,
                aber wir werden unser Bestes tun, um Ihren Wünschen gerecht zu werden.
              </li>
            </ul>
            <p className="font-semibold">Con amore,</p>
            <p className="font-semibold">La Squadra di Coccodrillo</p>

            <p className="font-semibold pt-4">Important information regarding your reservation !</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                We kindly ask to respect the number of people on your reservation. If the number of
                guests changes, please let us know in advance by adapting your reservation through
                your booking confirmation email or contact us via email: coccodrillo@bigsquadra.com.
              </li>
              <li>
                You will be able to enjoy your table for 2 hours, which will allow you enough time
                to enjoy with us at Coccodrillo.
              </li>
              <li>
                We will keep your seats warm for 15 minutes. After that, they will be designed to
                someone else.
              </li>
              <li>
                If you have any special request, please write it in the reservation&apos;s notes.
              </li>
              <li>
                Please note we do not guarantee tables in specific locations but we will try our
                best to accomodate your requests.
              </li>
            </ul>
            <p className="font-semibold">Con amore,</p>
            <p className="font-semibold">La Squadra di Coccodrillo</p>
          </div>
        )}

        {step === 'selection' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="guests">Guests</Label>
                <Select value={selectedGuests} onValueChange={setSelectedGuests}>
                  <SelectTrigger id="guests">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="All Times" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !selectedDate && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, 'dd MMM') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              We are thrilled to have you join us! Secure your spot for up to 8 people 30 days ahead
              of a date; for larger groups (from 9 up to 30), 30 days ahead of a date, with a set
              menu. For reservations beyond 30 people and special occasions, reach out to us at
              coccodrillo@bigsquadra.com.
            </p>
            <p className="text-sm text-muted-foreground">
              *Please note: we don&apos;t accept normal reservations via email. For more
              information, please visit
              <Link
                href="https://www.bigsquadra.com/"
                className="text-blue-600 hover:underline ml-1"
              >
                https://www.bigsquadra.com/
              </Link>
            </p>

            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={selectedTime === slot ? 'default' : 'outline'}
                  className={cn(
                    'h-14 text-lg font-semibold',
                    selectedTime === slot
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'border-red-600 text-red-600 hover:bg-red-50',
                  )}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </Button>
              ))}
              <Button
                variant="outline"
                className="h-14 text-lg font-semibold border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Alert Me
              </Button>
            </div>
          </div>
        )}

        {step === 'form' && (
          <form onSubmit={handleBookingSubmit} className="space-y-6">
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full h-12 text-lg flex items-center gap-2 bg-transparent"
              >
                <svg role="img" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M12.24 10.285V14.4h6.806c-.617 4.135-5.08 7.173-11.153 7.173C4.226 21.573 0 17.925 0 12.18c0-3.7 1.74-6.85 4.304-9.188L7.352 5.64c-1.24 1.36-1.902 3.13-1.902 5.14 0 3.57 2.57 6.47 6.206 6.47 3.48 0 5.113-2.448 5.113-4.98V10.285h-5.82z"
                  />
                </svg>
                Sign in with Google
              </Button>
              <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                <svg role="img" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                Login with Facebook
              </Button>
            </div>
            <div className="text-center text-muted-foreground">Or continue as a guest</div>

            <div className="grid gap-4">
              <div>
                <Label htmlFor="firstName">First Name*</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name*</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number*</Label>
                <div className="flex gap-2">
                  <Select
                    defaultValue="+49"
                    onValueChange={(value) => handleSelectChange('phonePrefix', value)}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="+49" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+49">🇩🇪 +49</SelectItem>
                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birthdayDay">Birthday</Label>
                  <Input
                    id="birthdayDay"
                    placeholder="dd"
                    value={formData.birthdayDay}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="birthdayMonth">&nbsp;</Label> {/* Placeholder for alignment */}
                  <Input
                    id="birthdayMonth"
                    placeholder="mm"
                    value={formData.birthdayMonth}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" value={formData.postalCode} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="language">Preferred communication language</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => handleSelectChange('language', value)}
                >
                  <SelectTrigger id="language">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                    <SelectItem value="Italian">Italian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="robot" />
                <Label htmlFor="robot">I&apos;m not a robot</Label>
                {/* Placeholder for reCAPTCHA */}
                <img
                  src="/placeholder.svg?height=30&width=100"
                  alt="reCAPTCHA"
                  className="ml-auto"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="receiveNews"
                  checked={formData.receiveNews}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, receiveNews: !!checked }))
                  }
                />
                <Label htmlFor="receiveNews">Receive news and offers for this venue</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agreeTerms: !!checked }))
                  }
                  required
                />
                <Label htmlFor="agreeTerms">
                  I agree to receive automated text messages, such as reservation reminders, at the
                  phone number provided.
                </Label>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              By clicking &quot;submit&quot; you agree to SevenRooms&apos;{' '}
              <Link href="#" className="underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="underline">
                GDPR Policy
              </Link>{' '}
              and Privacy Policy{' '}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-xs text-muted-foreground">
              For SMS, reply STOP to unsubscribe. Reply HELP for help. Message frequency varies.
              Message &amp; data rates may apply.
            </p>

            <Button
              type="submit"
              className="w-full h-12 text-lg bg-red-600 hover:bg-red-700 text-white"
            >
              Submit
            </Button>
          </form>
        )}

        {step === 'success' && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <CheckCircle2 className="h-20 w-20 text-green-500" />
            <h3 className="text-3xl font-bold">Booking Successful!</h3>
            <p className="text-lg text-muted-foreground">
              Your table for {selectedGuests} guests on {format(selectedDate || new Date(), 'PPP')}{' '}
              at {selectedTime} has been confirmed.
            </p>
            <p className="text-muted-foreground">
              A confirmation email has been sent to {formData.email}.
            </p>
            <Button
              onClick={() => {
                setStep('info');
                setSelectedTime(undefined);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  birthdayDay: '',
                  birthdayMonth: '',
                  postalCode: '',
                  language: 'English',
                  receiveNews: false,
                  agreeTerms: false,
                });
              }}
              className="mt-4"
            >
              Book Another Table
            </Button>
          </div>
        )}
      </div>

      <SheetFooter className="p-6 border-t">
        {step === 'info' && (
          <Button
            className="w-full h-12 text-lg bg-red-600 hover:bg-red-700 text-white"
            onClick={() => setStep('selection')}
          >
            Select
          </Button>
        )}
        {step === 'selection' && (
          <Button
            className="w-full h-12 text-lg bg-red-600 hover:bg-red-700 text-white"
            onClick={() => selectedTime && setStep('form')}
            disabled={!selectedTime}
          >
            Continue to Details
          </Button>
        )}
        {/* Form and Success steps have their own submit/action buttons */}
      </SheetFooter>
    </div>
  );
}
