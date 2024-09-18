import { CheckCircle2, CreditCard, FileSpreadsheet, ShoppingBag, Ticket, Users } from "lucide-react"

export const useCases = [
  {
    "slug": "eventos-esportivos",
    "name": "Eventos esportivos",
    "title": "Venda inscrições para eventos esportivos",
    "subtitle": "Venda ingressos, faça o controle das inscrições",
    "description": "Venda ingressos para eventos e competições esportivas. Faça o controle dos inscritos através de planilhas e códigos de identificação",
    "icon": "",
    "action": "Saiba como vender inscrições",
    "image": "...",
    "benefits": [
      {
        "title": "Venda ingressos sem trabalho manual",
        "description": "Permita que seus clientes façam a inscrição e pagamento sem a sua ajuda",
        "icon": Ticket
      },
      {
        "title": "Integração com planilhas do Google Sheets",
        "description": "Controle as inscrições com códigos únicos para cada inscrito",
        "icon": FileSpreadsheet
      },
      {
        "title": "Venda produtos com as inscrições",
        "description": "Venda produtos relacionados ao evento, como camisetas, acessórios e bonés",
        "icon": ShoppingBag
      },
      {
        "title": "Colete e organize dados dos inscritos",
        "description": "Tenha em mãos informações importantes dos inscritos, como telefones de emergência e restrições médicas",
        "icon": Users
      },
      {
        "title": "Pagamentos Seguros",
        "description": "Aceite pagamentos por cartão de crédito, boleto e PIX",
        "icon": CreditCard
      },
      {
        "title": "Livre-se de mensalidades",
        "description": "Sem mensalidades. Você só pagará a nossa taxa ao realizar uma venda",
        "icon": FileSpreadsheet
      }
    ]
  },
  {
    "slug": "eventos-sociais",
    "name": "Eventos sociais",
    "title": "Venda Ingressos para Eventos Sociais",
    "subtitle": "Venda ingressos, faça o controle das inscrições",
    "description": "Venda ingressos para festas, encontros e eventos temáticos",
    "icon": "",
    "action": "Veja como criar um evento",
    "image": "...",
    "benefits": []
  }
]


