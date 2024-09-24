/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jtJ1rTuc6uU
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { MainHero } from "./main-hero"

export function MainBody() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <MainHero />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-200" id="features">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Você responde mensagens o dia todo para fazer vendas?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agora seus clientes podem concluir a venda sem a sua ajuda. Faça vendas 24 horas por dia, 7 dias por semana.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/images/placeholder.svg"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">A Micro Loja usa Asaas</h3>
                      <p className="text-muted-foreground">
                        Comece a vender sem complicação e com toda a segurança para você e seus clientes
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Livre-se da complicação de ter um site</h3>
                      <p className="text-muted-foreground">
                        Use suas redes sociais para promover o produto e compartilhe o link de um Google Forms para os clientes finalizarem a compra
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Ajudamos a acompanhar as suas vendas</h3>
                      <p className="text-muted-foreground">Todas as vendas ficam organizadas em uma planilha do Google Sheets. Acompanhe a situação dos pedidos e o seu faturamento</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="pricing">
          <div className="container mx-auto grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">O plano é simples. Não cobramos mensalidades</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                E só recebemos quando você vende
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="rounded-lg border bg-background p-6 text-center">
                <h3 className="text-2xl font-bold">Plano Único</h3>
                <p className="text-4xl font-bold">0.06%</p>
                <p className="text-muted-foreground">por venda</p>
                <ul className="my-6 space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Não cobramos taxa em vendas menores que R$20
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Em uma venda de R$100, pague somente R$0,60 de taxa
                  </li>
                  <li className="flex items-center">
                    <XIcon className="mr-2 h-5 w-5 text-red-500 bg-pr" />
                    Sem mensalidades, só pague quando fizer uma venda
                  </li>
                </ul>
                <Link
                  href="/preco"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-400 px-8 text-sm font-medium text-slate-800 shadow transition-colors hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Saiba mais 
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-green-200" id="contact">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Veja como você pode usar a Micro Loja no seu negócio</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Venda produtos, serviços e ingressos sem precisar de maquininha de cartão ou site.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="/exemplos"
                className="inline-flex h-10 items-center justify-center rounded-md bg-orange-400 px-8 text-sm font-medium text-slate-800 shadow transition-colors hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Veja como você pode usar a Micro Loja
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
