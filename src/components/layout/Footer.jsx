export default function Footer() {
    const footerYear = new Date().getFullYear()


  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width='50px'>
                <path
                    d="M 10,30
                    A 20,20 0,0,1 50,30
                    A 20,20 0,0,1 90,30
                    Q 90,60 50,90
                    Q 10,60 10,30 z" />
            </svg>
            <p>Copyright &copy; {footerYear} All rights reserved</p>
        </div>
    </footer>
  )
}
