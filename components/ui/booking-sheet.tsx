'use client';
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
import { CalendarIcon, CheckCircle2, Mail, Phone, Users, X } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';

type BookingStep = 'selection' | 'form' | 'success';

interface BookingSheetProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function BookingSheet({ setIsOpen }: BookingSheetProps) {
  const [step, setStep] = useState<BookingStep>('selection');
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
    language: 'German',
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
    <div className="flex flex-col h-full font-narrow bg-white rounded-none">
      {/* Custom Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 bg-amber-400 text-black rounded-none">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold font-primary">Big Spuntino</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 cursor-pointer rounded-none bg-gray-900"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </button>
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <SheetHeader className="p-4 sm:p-6 border-b rounded-none">
          {step === 'selection' && (
            <>
              <SheetTitle className="text-lg sm:text-xl font-bold">Book Your Table</SheetTitle>
              <SheetDescription className="text-xs sm:text-sm text-muted-foreground -mt-1 sm:-mt-2">
                Tue, {format(selectedDate || new Date(), 'dd MMM')} •{' '}
                {selectedTime || 'Select Time'} • {selectedGuests} Guests
              </SheetDescription>
            </>
          )}
          {step === 'form' && (
            <>
              <SheetTitle className="text-xl sm:text-2xl uppercase font-primary">
                Your Information
              </SheetTitle>
              <SheetDescription className="text-xs sm:text-sm text-muted-foreground -mt-1 sm:-mt-2">
                Please select an option below to continue checkout:
              </SheetDescription>
            </>
          )}
          {step === 'success' && (
            <>
              <SheetTitle className="text-xl sm:text-2xl font-bold">Booking Confirmed!</SheetTitle>
              <SheetDescription className="text-xs sm:text-sm text-muted-foreground">
                Your table has been successfully booked.
              </SheetDescription>
            </>
          )}
        </SheetHeader>

        <div className="flex-1 p-4 sm:p-6">
          {step === 'selection' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="guests">
                    Guests
                  </Label>
                  <Select value={selectedGuests} onValueChange={setSelectedGuests}>
                    <SelectTrigger
                      id="guests"
                      className="bg-white text-black border-gray-300 rounded-none !py-4 sm:!py-6 w-full text-xs sm:text-sm"
                    >
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black rounded-none text-xs sm:text-sm">
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 1} value={String(i + 1)}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="time">
                    Time
                  </Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger
                      id="time"
                      className="bg-white text-black border-gray-300 rounded-none !py-4 sm:!py-6 w-full text-xs sm:text-sm"
                    >
                      <SelectValue placeholder="All Times" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black rounded-none text-xs sm:text-sm">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="date">
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'justify-start text-left !py-4 sm:!py-6 w-full font-normal bg-white text-black border-gray-300 rounded-none text-xs sm:text-sm',
                          !selectedDate && 'text-muted-foreground',
                        )}
                      >
                        <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        {selectedDate ? format(selectedDate, 'dd MMM') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white rounded-none">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className="rounded-none"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground">
                We are thrilled to have you join us! Secure your spot for up to 8 people 30 days
                ahead of a date; for larger groups (from 9 up to 30), 30 days ahead of a date, with
                a set menu. For reservations beyond 30 people and special occasions, reach out to us
                at info@Big Spuntino.com.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedTime === slot ? 'default' : 'outline'}
                    className={cn(
                      'h-10 sm:h-14 text-sm sm:text-lg font-semibold rounded-none hover:bg-amber-100',
                      selectedTime === slot
                        ? 'bg-amber-500 hover:bg-amber-600 text-black'
                        : 'border-gray-400 text-gray-800 hover:text-amber-600 hover:bg-gray-100 bg-transparent',
                    )}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="h-10 sm:h-14 text-sm sm:text-lg font-semibold border-gray-400 text-gray-800 hover:bg-gray-100 bg-transparent rounded-none"
                >
                  Alert Me
                </Button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold font-primary">Big Spuntino</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9473.194251943753!2d9.999320882146023!3d53.5881341947725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18942c5a586cf%3A0x3676e8aa6ee953ea!2sBIG%20SPUNTINO%20%7C%20Tagesbar!5e0!3m2!1sen!2sbd!4v1752800811621!5m2!1sen!2sbd"
                  width="100%"
                  height="200"
                  className="sm:h-[250px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Mühlenkamp 8, Hamburg, Germany 22303
                </p>
              </div>
            </div>
          )}

          {step === 'form' && (
            <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-12 text-sm sm:text-lg flex items-center gap-2 bg-white text-black border-gray-300 hover:bg-gray-50 rounded-none"
                >
                  <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5">
                    <path
                      fill="currentColor"
                      d="M12.24 10.285V14.4h6.806c-.617 4.135-5.08 7.173-11.153 7.173C4.226 21.573 0 17.925 0 12.18c0-3.7 1.74-6.85 4.304-9.188L7.352 5.64c-1.24 1.36-1.902 3.13-1.902 5.14 0 3.57 2.57 6.47 6.206 6.47 3.48 0 5.113-2.448 5.113-4.98V10.285h-5.82z"
                    />
                  </svg>
                  Sign in with Google
                </Button>
                <Button className="w-full h-10 sm:h-12 text-sm sm:text-lg bg-gray-800 hover:bg-gray-900 text-white flex items-center gap-2 rounded-none">
                  <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5">
                    <path
                      fill="currentColor"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  Login with Facebook
                </Button>
              </div>

              <div className="text-center text-xs sm:text-sm text-muted-foreground">
                Or continue as a guest
              </div>

              <div className="grid gap-3 sm:gap-4">
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="firstName">
                    First Name*
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="John"
                    className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="lastName">
                    Last Name*
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Doe"
                    className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="email">
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john.doe@example.com"
                    className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="phone">
                    Phone Number*
                  </Label>
                  <div className="flex gap-2">
                    <Select
                      defaultValue="+49"
                      onValueChange={(value) => handleSelectChange('phonePrefix', value)}
                    >
                      <SelectTrigger className="w-20 sm:w-24 bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm">
                        <SelectValue placeholder="+49" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black rounded-none text-xs sm:text-sm">
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
                      placeholder="1234567890"
                      className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="birthdayDay">
                      Birthday
                    </Label>
                    <Input
                      id="birthdayDay"
                      placeholder="dd"
                      value={formData.birthdayDay}
                      onChange={handleInputChange}
                      className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="birthdayMonth">
                      &nbsp;
                    </Label>
                    <Input
                      id="birthdayMonth"
                      placeholder="mm"
                      value={formData.birthdayMonth}
                      onChange={handleInputChange}
                      className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="postalCode">
                    Postal Code
                  </Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="10119"
                    className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <Label className="pb-1 sm:pb-2 text-xs sm:text-sm" htmlFor="language">
                    Preferred communication language
                  </Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => handleSelectChange('language', value)}
                  >
                    <SelectTrigger
                      id="language"
                      className="bg-white text-black border-gray-300 rounded-none py-4 sm:py-6 text-xs sm:text-sm"
                    >
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black rounded-none text-xs sm:text-sm">
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="German">German</SelectItem>
                      <SelectItem value="Italian">Italian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="receiveNews"
                    checked={formData.receiveNews}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, receiveNews: !!checked }))
                    }
                    className="mt-1 border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-white rounded-none h-4 w-4"
                  />
                  <Label className="text-xs sm:text-sm" htmlFor="receiveNews">
                    Receive news and offers for this venue
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, agreeTerms: !!checked }))
                    }
                    required
                    className="mt-1 border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-white rounded-none h-4 w-4"
                  />
                  <Label className="text-xs sm:text-sm" htmlFor="agreeTerms">
                    I agree to receive automated text messages, such as reservation reminders, at
                    the phone number provided.
                  </Label>
                </div>
              </div>

              <p className="text-[10px] sm:text-xs text-muted-foreground">
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
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                For SMS, reply STOP to unsubscribe. Reply HELP for help. Message frequency varies.
                Message &amp; data rates may apply.
              </p>

              <Button
                type="submit"
                className="w-full h-10 sm:h-12 text-sm sm:text-lg bg-amber-500 hover:bg-amber-600 text-black rounded-none"
              >
                Submit
              </Button>
            </form>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 py-4 sm:py-8">
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-amber-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 sm:h-12 sm:w-12 text-amber-600" />
                </div>
                <div className="absolute -inset-1 sm:-inset-2 bg-amber-100 rounded-full -z-10 animate-pulse"></div>
              </div>

              <div className="text-center space-y-1 sm:space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Reservation Confirmed
                </h3>
                <p className="text-sm sm:text-lg text-gray-600">
                  Table for {selectedGuests} •{' '}
                  {selectedDate ? format(selectedDate, 'MMM dd') : 'N/A'} • {selectedTime || 'N/A'}
                </p>
              </div>

              <div className="w-full bg-gray-50 rounded-none p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <CalendarIcon className="h-3 w-3 sm:h-5 sm:w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Date & Time</p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {selectedDate ? format(selectedDate, 'EEEE, MMMM do, yyyy') : 'N/A'} at{' '}
                      {selectedTime || 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="h-3 w-3 sm:h-5 sm:w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Party Size</p>
                    <p className="text-xs sm:text-sm text-gray-600">{selectedGuests} guests</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mail className="h-3 w-3 sm:h-5 sm:w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">
                      Confirmation sent to
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">{formData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Phone className="h-3 w-3 sm:h-5 sm:w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Contact</p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">{formData.phone}</p>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 ps-4 sm:ps-6">
                  What&apos;s Next?
                </h4>
                <div className="space-y-2 sm:space-y-3 ps-4 sm:ps-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] sm:text-xs font-bold text-black">1</span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">
                        Check your email
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Confirmation details sent to your inbox
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] sm:text-xs font-bold text-black">2</span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">Arrive on time</p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Please arrive 5-10 minutes early
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] sm:text-xs font-bold text-black">3</span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">
                        Enjoy your meal
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        We can&apos;t wait to welcome you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-2 sm:space-y-3">
                <Button
                  onClick={() => {
                    setStep('selection');
                    setSelectedTime(undefined);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      birthdayDay: '',
                      birthdayMonth: '',
                      postalCode: '',
                      language: 'German',
                      receiveNews: false,
                      agreeTerms: false,
                    });
                  }}
                  className="w-full h-10 sm:h-12 bg-amber-500 hover:bg-amber-600 text-black rounded-none font-medium text-sm sm:text-base"
                >
                  Book Another Table
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  className="w-full h-10 sm:h-12 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none font-medium text-sm sm:text-base"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>

        <SheetFooter className="p-4 sm:p-6 border-t border-gray-200 rounded-none">
          {step === 'selection' && (
            <Button
              className="w-full h-10 sm:h-12 text-sm sm:text-lg bg-amber-500 hover:bg-amber-600 text-black rounded-none"
              onClick={() => selectedTime && setStep('form')}
              disabled={!selectedTime}
            >
              Continue to Details
            </Button>
          )}
        </SheetFooter>
      </div>
    </div>
  );
}
