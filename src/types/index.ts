import type { LucideIcon } from 'lucide-react'

export interface Service {
    id: number
    title: string
    description: string
    image: string
    icon: LucideIcon
    items: string[]
}

export interface Project {
    id: number
    title: string
    category: string
    image: string
}