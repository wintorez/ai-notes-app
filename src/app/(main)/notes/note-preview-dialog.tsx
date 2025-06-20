'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Trash2 } from 'lucide-react'
import { Doc } from '../../../../convex/_generated/dataModel'
import { useSearchParams } from 'next/navigation'
import { useMutation } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { useState } from 'react'
import { toast } from 'sonner'

interface NotePreviewDialogPros {
  note: Doc<'notes'>
}

export function NotePreviewDialog({ note }: NotePreviewDialogPros) {
  const searchParams = useSearchParams()
  const isOpen = searchParams.get('noteId') === note._id

  const deleteNote = useMutation(api.notes.deleteNote)
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    if (isDeleting) return

    setIsDeleting(true)

    try {
      await deleteNote({ noteId: note._id })
      toast.success('Note deleted')
      handleClose()
    } catch (error) {
      console.error('Failed to delete note:', error)
      toast.error('Failed to delete note. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  function handleClose() {
    if (isDeleting) return
    window.history.pushState(null, '', window.location.pathname)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{note.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 whitespace-pre-wrap">{note.body}</div>
        <DialogFooter className="mt-6">
          <Button variant="destructive" className="gap-2" onClick={handleDelete} disabled={isDeleting}>
            <Trash2 size={16} />
            {isDeleting ? 'Deleting...' : 'Delete Note'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
