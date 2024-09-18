import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; Micro Loja. Todos os direitos reservados.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="/termos-condicoes" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Termos de Serviço
        </Link>
        <Link href="/privacidade" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Política de Privacidade
        </Link>
        <Link href="/suporte" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Suporte
        </Link>
      </nav>
    </footer>
  )
}