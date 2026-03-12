import type { User } from '../types'
import { BuildingOfficeIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

type Props = { user: User }

export const UserCard = ({ user }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-14 h-14 rounded-full object-cover shrink-0"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-gray-900 text-base leading-tight">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 whitespace-nowrap">
              {user.age} лет
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-0.5">@{user.username}</p>
        </div>
      </div>

      <ul className="space-y-2">
        <li className="flex items-start gap-2 text-sm text-gray-600">
          <BuildingOfficeIcon className="w-4 h-4 shrink-0 text-gray-400 mt-0.5" />
          <span className="truncate">
            {user.company.title} в {user.company.name}
          </span>
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-600">
          <EnvelopeIcon className="w-4 h-4 shrink-0 text-gray-400" />
          <span className="truncate">{user.email}</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-600">
          <PhoneIcon className="w-4 h-4 shrink-0 text-gray-400" />
          <span className="truncate">{user.phone}</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-600">
          <MapPinIcon className="w-4 h-4 shrink-0 text-gray-400" />
          <span className="truncate">
            {user.address.city}, {user.address.state}
          </span>
        </li>
      </ul>
    </div>
  )
}
