import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Our Services | IceEdge Refrigeration',
  description: 'Explore our range of cold storage, industrial refrigeration, chillers, freezers, and AMC services.',
}

export default function ServicesPage() {
  return <ServicesClient />
}