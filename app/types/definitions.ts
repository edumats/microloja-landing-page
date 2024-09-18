import { LucideIcon } from "lucide-react"

export type useCase = {
  slug: string
  name: string
  title: string
  subtitle: string
  description: string
  icon: string
  action: string
  image: string
  benefits: benefit[]
}

export type benefit = {
  title: string
  description: string
  icon: LucideIcon
}