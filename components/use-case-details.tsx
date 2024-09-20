'use client'

import { useCase } from "@/app/types/definitions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CircleDollarSign,
  ThumbsUp,
  Calendar,
  CheckCircle2,
  CreditCard,
  FileSpreadsheet,
  Heart,
  LucideIcon, 
  ShoppingBag,
  ShoppingCart,
  Ticket,
  Users,
  CalendarCheck,
  MilkOff,
  Frown,
  CopyPlus,
  Repeat,
  AlarmCheck,
  Cake,
  Smile,
  Box } from "lucide-react"

const IconConversion: { [key: string]: LucideIcon } = {
  "CheckCircle2": CheckCircle2,
  "CreditCard": CreditCard,
  "FileSpreadsheet": FileSpreadsheet,
  "ShoppingBag": ShoppingBag,
  "Ticket": Ticket,
  "Users": Users,
  "Calendar": Calendar,
  "ShoppingCart": ShoppingCart,
  "Heart": Heart,
  "ThumbsUp": ThumbsUp,
  "CircleDollarSign": CircleDollarSign,
  "CalendarCheck": CalendarCheck,
  "MilkOff": MilkOff,
  "Frown": Frown,
  "CopyPlus": CopyPlus,
  "Repeat": Repeat,
  "AlarmCheck": AlarmCheck,
  "Cake": Cake,
  "Smile": Smile,
  "Box": Box
}

export function UseCaseDetails({ useCase }: { useCase: useCase }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{useCase.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">
          {useCase.subtitle}
        </p>
        <Button size="lg">{useCase.action}</Button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {useCase.benefits.map((benefit, index) => {
          const Icon = IconConversion[benefit.icon]; // Assign icon component to a variable
          if (!Icon) {
            throw new Error(`Icon "${benefit.icon}" not found in IconConversion`);
          }
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <Icon className="w-12 h-12 text-primary mb-4" /> {/* Use the variable as JSX */}
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Principais Funções</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCase.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


const benefits = [
  {
    icon: Ticket,
    title: "Automated Ticket Sales",
    description: "Allow customers to purchase tickets directly, eliminating manual work for organizers."
  },
  {
    icon: FileSpreadsheet,
    title: "Google Sheets Integration",
    description: "Manage registrations effortlessly using Google Sheets with unique ID codes for each participant."
  },
  {
    icon: ShoppingBag,
    title: "Product Sales",
    description: "Sell event-related merchandise like T-shirts or uniforms alongside ticket purchases."
  },
  {
    icon: Users,
    title: "Participant Information",
    description: "Collect crucial data such as medical conditions and emergency contact numbers during registration."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Process payments securely within Google Forms, ensuring a smooth transaction experience."
  },
  {
    icon: FileSpreadsheet,
    title: "Real-time Updates",
    description: "Access up-to-date event information and participant data in your Google Sheets."
  }
]

const features = [
  {
    title: "Easy Setup",
    description: "Integrate our payment system into your Google Forms with just a few clicks."
  },
  {
    title: "Customizable Forms",
    description: "Create tailored registration forms for different types of sports events."
  },
  {
    title: "Automatic Confirmations",
    description: "Send automated confirmation emails with tickets and event details to participants."
  },
  {
    title: "Reporting and Analytics",
    description: "Generate insightful reports on ticket sales, participant demographics, and more."
  }
]