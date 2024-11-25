import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-white text-center text-[#303030] dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-10 border-t border-gray-200 ">
      <div className="mx-6 pt-10 pb-2 text-center md:text-left px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="col-span-2 grid gap-8 md:grid-cols-3">
            <div className="col-span-1">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                SÂN CHƠI GIỚI TRẺ
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-span-1">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <Link to={'/'} className="text-[#303030] dark:text-neutral-200">
                  NIKE
                </Link>
              </p>
              <p className="mb-4">
                <Link to={'/'} className="text-[#303030] dark:text-neutral-200">
                  Adidas
                </Link>
              </p>
              <p className="mb-4">
                <Link to={'/'} className="text-[#303030] dark:text-neutral-200">
                  Vans
                </Link>
              </p>
              <p>
                <Link
                  to={'/'}
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  MLB
                </Link>
              </p>
            </div>
            <div className="col-span-1">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Hà Nội, Việt Nam
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                0987654321
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <iframe
              width="100%"
              height="200"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=hai%20b%C3%A0%20tr%C6%B0ng,%20h%C3%A0%20N%E1%BB%99i%20+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 p-6 text-center dark:bg-neutral-700">
        <span>© 2024 Copyright: </span>
        <a
          className="font-semibold text-[#303030] dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          {' '}
          CHƯA CÓ
        </a>
      </div>
    </div>
  );
}
