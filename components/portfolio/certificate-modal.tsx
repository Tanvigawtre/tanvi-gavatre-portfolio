'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export type ModalImage = { src: string; alt: string; title: string }

type CertificateModalProps = {
  image: ModalImage | null
  onClose: () => void
}

export function CertificateModal({ image, onClose }: CertificateModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (image && !dialog.open) dialog.showModal()
    if (!image && dialog.open) dialog.close()
  }, [image])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cert-modal-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="cert-dialog m-auto max-h-[92svh] w-[min(1100px,94vw)] bg-transparent p-0 text-ink-foreground backdrop:bg-transparent"
    >
      {image && (
        <div className="flex max-h-[92svh] flex-col">
          <div className="flex items-center justify-between gap-4 pb-3">
            <h2 id="cert-modal-title" className="text-sm font-semibold uppercase tracking-[0.14em]">
              {image.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink-foreground/30 transition-colors hover:border-accent hover:bg-accent hover:text-background"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element -- natural sizing inside the lightbox */}
          <img
            src={image.src}
            alt={image.alt}
            className="mx-auto max-h-[calc(92svh-4rem)] w-auto max-w-full border border-ink-foreground/20 bg-ink object-contain"
          />
        </div>
      )}
    </dialog>
  )
}
