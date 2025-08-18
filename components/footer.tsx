import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold text-black dark:text-white">
              Adarsh A Inamdar
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Computer Science Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              &copy; {currentYear} Adarsh A Inamdar. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Designed and built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
