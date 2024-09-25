'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const CurrencyInput = ({ value, onChange }: CurrencyInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    input = input.replace(/[^\d,]/g, '');
    const parts = input.split(',');
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
      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">R$ </span>
      <Input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        className="pl-7 text-lg"
        placeholder="0,00"
      />
    </div>
  );
};

export function PricingPage() {
  const [totalAmount, setTotalAmount] = useState('')
  const [paymentMode, setPaymentMode] = useState('')

  type asaasComissions = {
    [key: string]: number
  }

  const asaasVariableComissions: asaasComissions = {
    credit_card: 0.0299,
    debit_card: 0.0189,
    boleto: 0,
    pix: 0
  }

  const asaasFixedComissions: asaasComissions = {
    credit_card: 0.49,
    debit_card: 0.35,
    boleto: 0.99,
    pix: 1.99
  }

  // Below this value, no comission will be charged from customers. Value in BRL
  const comissionException = 21

  const numericAmount = parseFloat(totalAmount) || 0

  // If value is below comissionException, comission will be zero, otherwise MicroLoja comission will be charged
  const commissionMicroLoja = comissionException > numericAmount ? 0 : numericAmount * 0.006
  const commissionAsaas = paymentMode === "" || numericAmount === 0 ? 0 : (numericAmount * asaasVariableComissions[paymentMode]) + asaasFixedComissions[paymentMode]
  const sellerReceives = numericAmount - commissionMicroLoja - commissionAsaas

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
              <span className="text-xl">Comissão de 0.6% por venda + taxas do <Link href="https://www.asaas.com/precos-e-taxas">Asaas</Link></span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500" />
              <span className="text-xl">Não cobramos comissão em vendas inferiores a R$21</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500" />
              <span className="text-xl">Pague somente quando houve uma venda</span>
            </div>
            <p className="text-muted-foreground mt-4">
              Estamos juntos nessa! Só ganhamos quando você ganha também. Sem custos adicionais, sem taxas ocultas. Cobramos uma porcentagem única de cada venda.
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
              <Label>Forma de Pagamento</Label>
              <Select onValueChange={setPaymentMode}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha forma de pagamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit_card">Cartão de Crédito</SelectItem>
                  <SelectItem value="debit_card">Cartão de Débito</SelectItem>
                  <SelectItem value="boleto">Boleto</SelectItem>
                  <SelectItem value="pix">PIX</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Comissão Micro Loja (0.6%)</Label>
              <div className="text-2xl font-semibold" aria-live="polite">
                R$ {commissionMicroLoja.toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Comissão Asaas {paymentMode === '' ? '(Escolha meio de pagamento)' : ''}</Label>
              <div className="text-2xl font-semibold" aria-live="polite">
                R$ {paymentMode === '' ? '0,00' : commissionAsaas.toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Vendedor Recebe</Label>
              <div className="text-2xl font-semibold text-green-600" aria-live="polite">
                R$ {sellerReceives.toFixed(2).replace('.', ',')}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Por que usar a Micro Loja?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A Micro Loja permite que vendedores recebam pagamentos através de formulários do Google Forms, com uma taxa única simples e transparente. 
          Comece a vender hoje, sem custos iniciais e mensalidades. 
        </p>
      </div>
    </div>
  )
}

type CurrencyInputProps = {
  value: string;
  onChange: (value: string) => void;
}