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
  features: feature[]
}

type benefit = {
  title: string
  description: string
  icon: string
}

type feature = {
  title: string
  description: string
}