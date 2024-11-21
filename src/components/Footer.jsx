function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow my-2 mx-1 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021 {""} 
          <a href="https://flowbite.com/" className="hover:underline">
           Pizzería MammaMia! - Todoslosderechos reservados
          </a>
        </span>
      
      </div>
    </footer>
  );
}

export default Footer;
