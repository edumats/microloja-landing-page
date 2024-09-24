'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function SupportForm() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Fale Conosco</CardTitle>
            <CardDescription>
              Você precisa de ajuda com a Micro Loja? Estamos aqui para te ajudar. Preencha o formulário abaixo e responderemos assim que possível.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Preencha com seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Digite seu e-mail" required type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="issue-type">Qual o motivo do seu contato</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="payment">Problema com pagamento</SelectItem>
                    <SelectItem value="integration">Problema com integração</SelectItem>
                    <SelectItem value="feature">Quero sugerir uma nova função</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descreva o motivo do seu contato</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="description"
                  placeholder="Escreva aqui o motivo do seu contato"
                  required
                />
              </div>
              <Button className="w-full bg-orange-400 hover:bg-orange-300 text-slate-800" type="submit">
                Enviar ao suporte
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}