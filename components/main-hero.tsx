import Link from "next/link";

export function MainHero() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Aceite Pagamentos no Google Forms.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Aceite cartão de crédito, boleto e PIX nos formulários do Google Forms! Quanto mais fácil de comprar, mais vendas para você!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Instale o App no Google Marketplace
                </Link>
              </div>
            </div>
            <img
              src="/images/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              width="550"
              height="550"
            />
          </div>
        </div>
      </section>
    )
}