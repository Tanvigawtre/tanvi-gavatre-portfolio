'use client'

import type { ElementType, ReactNode, PointerEvent, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type SpotlightProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function Spotlight<T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...rest
}: SpotlightProps<T>) {
  const Tag = (as ?? 'div') as ElementType

  function handleMove(e: PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag onPointerMove={handleMove} className={cn('spotlight', className)} {...rest}>
      {children}
    </Tag>
  )
}
