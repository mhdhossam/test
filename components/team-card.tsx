import type React from "react"
import "./CSS/Home.css"
import "./CSS/About.css"

interface TeamCardProps {
  name: string
  image: string
  description: string
  role?: string
}

const TeamCard: React.FC<TeamCardProps> = ({ name, image, description, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        {role && <p className="text-primary font-medium mb-2">{role}</p>}
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default TeamCard
