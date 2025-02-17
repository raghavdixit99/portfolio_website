import Image from "next/image"
import { motion } from "framer-motion"

export default function ProfileImage() {
  return (
    <motion.div 
      className="relative w-48 h-48 mx-auto mb-4 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 animate-tilt transition-all duration-300 group-hover:from-purple-500 group-hover:to-blue-500 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400" />
      <div className="relative h-full p-[3px]">
        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4338-3raaboL8Xf7UEzFpm9gnzd812k64uR.jpeg"
              alt="Profile"
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
} 