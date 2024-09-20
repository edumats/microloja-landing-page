'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from 'lucide-react'

const CurrencyInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    let input = e.target.value;
    input = input.replace(/[^\d.]/g, '');
    const parts = input.split('.');
    if (parts.length > 2) {
      input = parts[0] + '.' + parts.slice(1).join('');
    }
    if (parts[1] && parts[1].length > 2) {
      input = parseFloat(input).toFixed(2);
    }
    onChange(input);
  };

  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">R$ </span>
      <Input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        className="pl-7 text-lg"
        placeholder="0.00"
      />
    </div>
  );
};

export function PricingPage() {
  const [totalAmount, setTotalAmount] = useState('')

  const numericAmount = parseFloat(totalAmount) || 0
  const commission = numericAmount * 0.06
  const sellerReceives = numericAmount - commission

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Quanto custa usar a Micro Loja?</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Não cobramos mensalidades</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500" />
              <span className="text-xl">0.6% comissão por venda</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500" />
              <span className="text-xl">Sem mensalidades</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500" />
              <span className="text-xl">Pague somente quando houve uma venda</span>
            </div>
            <p className="text-muted-foreground mt-4">
              Estamos juntos nessa! Só recebemos quando você ganha dinheiro. Sem custos adicionais, sem taxas ocultas. Cobramos uma porcentagem única de cada venda.
            </p>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Simule quanto você pagaria</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="totalAmount">Total da Venda</Label>
              <CurrencyInput
                value={totalAmount}
                onChange={setTotalAmount}
              />
            </div>
            <div className="space-y-2">
              <Label>Comissão Micro Loja (0.6%)</Label>
              <div className="text-2xl font-semibold" aria-live="polite">
                R$ {commission.toFixed(2)}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Vendedor Recebe</Label>
              <div className="text-2xl font-semibold text-green-600" aria-live="polite">
                R$ {sellerReceives.toFixed(2)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Por que usar a Micro Loja?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Micro Loja empowers sellers to receive payments directly through Google Forms,
          with a transparent pricing model that aligns our success with yours. Start selling
          today without any upfront costs or commitments.
        </p>
      </div>
    </div>
  )
}