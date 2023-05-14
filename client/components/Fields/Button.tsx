import Link from 'next/link'
import React from 'react'
interface Props {
  loading?: boolean
  label?: string
  variant?: string
  disable?: boolean
  size?: string
  type?: string
  href?: any

  onClick?: () => void
}

function Button({
  loading = false,
  label = '',
  variant = 'primary',
  disable = false,
  size = 'sm',
  type = 'button',
  href = null,
  onClick,
}: Props) {
  const handleClassName = (): string => {
    switch (variant) {
      case 'primary':
        return 'btn btn-primary w-full'

      case 'orange':
        return 'btn btn-orange w-full'

      default:
        break
    }
    return variant
  }

  return (
    <React.Fragment>
      {href === null ? (
        <button onClick={onClick} className={handleClassName()}>
          <div className="flex items-center space-x-2">
            <span> {label} </span>
            {loading && <i className="gg-spinner"></i>}
          </div>
        </button>
      ) : null}

      {href != null ? (
        <Link
          href={href}
          className="inline-flex items-center justify-center space-x-2 font-semibold tracking-widest uppercase transition rounded cursor-pointer disabled:opacity-25 focus:outline-none"
        >
          {loading && <i className="gg-spinner"></i>}
          <div>
            <span> {label} </span>
          </div>
        </Link>
      ) : null}
    </React.Fragment>
  )
}

export default Button
