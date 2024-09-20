'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCases } from "@/data/useCases"
import Link from "next/link"

export function PaymentUseCases() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Como você pode usar a Micro Loja?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubra como usar formulários do Google Forms para receber pagamentos e simplificar como suas vendas são feitas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span role="img" aria-label={useCase.title} className="text-2xl">
                    {useCase.icon}
                  </span>
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full" ><Link href={`/${useCase.slug}`}>{useCase.action}</Link></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            E muitas outras possibilidades!
          </Badge>
        </div>
      </div>
    </section>
  )
}