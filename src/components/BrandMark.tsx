export function BrandMark() {
  return (
    <a
      href={import.meta.env.BASE_URL}
      className="group inline-flex items-center gap-3.5 text-left focus:outline-none"
      aria-label="Eymenle Atasözü ve Deyimler Ana Sayfa"
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[#181B1F] bg-[#FAF6EE] shadow-[3px_3px_0_#181B1F] transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0_#181B1F]">
        <svg
          viewBox="0 0 48 48"
          className="h-8 w-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Open illustrated book left page (Terracotta) */}
          <path
            d="M8 14.5C8 13.1193 9.11929 12 10.5 12H20C22.2091 12 24 13.7909 24 16V35C22.2 33.6 19.9 33 17.2 33H10.5C9.11929 33 8 31.8807 8 30.5V14.5Z"
            fill="#C84B31"
            stroke="#181B1F"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Open illustrated book right page (Deep Teal) */}
          <path
            d="M40 14.5C40 13.1193 38.8807 12 37.5 12H28C25.7909 12 24 13.7909 24 16V35C25.8 33.6 28.1 33 30.8 33H37.5C38.8807 33 40 31.8807 40 30.5V14.5Z"
            fill="#1B5E63"
            stroke="#181B1F"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Minimalist page rule hints */}
          <path
            d="M12.5 19H19.5M12.5 24H18.5"
            stroke="#FAF6EE"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M28.5 19H35.5M29.5 24H35.5"
            stroke="#FAF6EE"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Golden editorial spark above spine */}
          <path
            d="M24 4.5L25.6 8.4L29.5 10L25.6 11.6L24 15.5L22.4 11.6L18.5 10L22.4 8.4L24 4.5Z"
            fill="#E39D28"
            stroke="#181B1F"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-display text-xl font-bold tracking-tight text-[#181B1F] sm:text-[1.65rem] sm:leading-none">
          Eymenle Atasözü ve Deyimler
        </span>
        <span className="mt-1 text-xs font-semibold tracking-[0.14em] text-[#5A564E] uppercase">
          Resimli Sözlük · A&apos;dan Z&apos;ye
        </span>
      </div>
    </a>
  );
}
