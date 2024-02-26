import { Badge } from '@/components/ui/badge'
import { ShapesIcon } from 'lucide-react'
import React from 'react'

const Catalog = () => {
  return (
    <div>
      <Badge>
        <ShapesIcon size={16}/>
        Catálogo
      </Badge>
    </div>
  )
}

export default Catalog