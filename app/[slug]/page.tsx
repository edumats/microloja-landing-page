import type { Metadata } from "next"
import { UseCaseDetails } from "@/components/use-case-details"
import { useCases } from "@/data/useCases"

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const { slug } = params

//   const useCase = useCases.find(useCase => useCase.slug === slug)

//   if (!useCase) {
//     return {}
//   }

//   return (
//     title: useCase.title,
//     description: useCase.description,
//     openGraph: {
//       title: useCase.name,
//       description: useCase.description,
//       url: `https://microloja.com.br/${slug}`,
//       images: useCase.image
//     },
//     robots: {
//       index: true,
//       follow: false,
//     },
//   )
// }

export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug
  }))
}


export default function UseCaseDetailsPage({ params }: {params: { slug: string }}) {
  const { slug } = params

  const useCase = useCases.find(useCase => useCase.slug === slug)

  if (!useCase) {
    return <div>Not found</div>
  }

  return (
    <UseCaseDetails useCase={useCase} />
  )
}