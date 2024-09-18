'use client'

import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  return (
    <nav className="bg-green-400 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <ShoppingCart className="h-6 w-6 text-gray-900 mr-2" />
            <Link href="/" className="text-xl font-bold text-gray-900">
              MicroLoja
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/exemplos">Exemplos de uso</NavLink>
            <NavLink href="/instalar">Como instalar</NavLink>
            <NavLink href="/preco">Preço</NavLink>
            <NavLink href="/contato">Contato</NavLink>
          </div>
          <div className="sm:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <nav className="flex flex-col space-y-4 mt-4">
                  <NavLink href="/exemplos">Exemplos de uso</NavLink>
                  <NavLink href="/instalar">Como instalar</NavLink>
                  <NavLink href="/preco">Preço</NavLink>
                  <NavLink href="/contato">Contato</NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition duration-150 ease-in-out relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </Link>
  )
}