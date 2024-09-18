'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PaymentUseCases() {
  const useCases = [
    {
      title: "Venda inscrições para eventos esportivos",
      description: "Venda ingressos para eventos e competições esportivas. Faça o controle dos inscritos através de planilhas e códigos de identificação",
      icon: "🏅",
      action: "Saiba como vender inscrições",
    },
    {
      title: "Venda ingressos para eventos sociais",
      description: "Venda ingressos para festas, encontros e eventos temáticos. Controle a entrada dos convidados através da planilha e códigos gerados para cada ingresso",
      icon: "🎉",
      action: "Veja como criar um evento",
    },
    {
      title: "Venda aulas particulares ou em grupo",
      description: "Receba pagamentos por aulas, workshops e cursos, sejam elas presenciais ou online",
      icon: "📚",
      action: "Saiba como receber pelas aulas",
    },
    {
      title: "Venda serviços",
      description: "Receba realizando serviços, como o de passeador de cães ou realizando pequenos reparos residenciais",
      icon: "💼",
      action: "Veja como oferecer serviços",
    },
    {
      title: "Crie assinaturas",
      description: "Ao finalizar a compra pelo formulário, seus clientes pagam uma mensalidade para você. A cobrança é feita todo mês automaticamente, ninguém precisa lembrar de pagar ou cobrar",
      icon: "🔄",
      action: "Saiba como criar uma assinatura",
    },
    {
      title: "Receba doações",
      description: "Receba mais doações para a sua causa tornando o processo de doação mais fácil",
      icon: "🎗️",
      action: "Saiba como receber doações",
    },
    {
      title: "Faça reservas",
      description: "Seus produtos têm quantidades limitadas? Permita que seus clientes façam reservas e já paguem pelo produto, garantindo tranquilidade para você e os seus clientes",
      icon: "📅",
      action: "Saiba como fazer reservas",
    },
    {
      title: "Venda produtos",
      description: "Venda produtos que você produz ou então faça uma venda antecipada para garantir que todos os produtos sejam vendidos",
      icon: "🛍️",
      action: "Saiba como começar a vender",
    },
    {
      title: "Venda doces e salgados",
      description: "Evite deixar o seu cliente esperando uma resposta no chat. Quanto mais fácil para o cliente, mais vendas para você",
      icon: "🍽️",
      action: "Saiba como receber pedidos",
    },
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Como você pode usar a Micro Loja?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubra como a Micro Loja pode simplificar o processo de pagamento dos seus clientes e administrar pagamentos através dos formulários do Google Forms
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
                <Button className="w-full">{useCase.action}</Button>
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