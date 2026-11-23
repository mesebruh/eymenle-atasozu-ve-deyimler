import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { ArrowLeft, Download, Printer, QrCode } from 'lucide-react';
import { getHomeUrl } from '../utils/url';

export function QrSharePage() {
  const [targetUrl, setTargetUrl] = useState<string>(() => getHomeUrl());
  const [svgMarkup, setSvgMarkup] = useState<string>('');
  const [pngDataUrl, setPngDataUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cleanUrl = targetUrl.trim();
    if (!cleanUrl) {
      setError('Lütfen geçerli bir internet adresi girin.');
      return;
    }

    let cancelled = false;
    setError(null);

    Promise.all([
      QRCode.toString(cleanUrl, {
        type: 'svg',
        errorCorrectionLevel: 'H',
        margin: 2,
        color: {
          dark: '#181B1F',
          light: '#FFFDF9',
        },
      }),
      QRCode.toDataURL(cleanUrl, {
        errorCorrectionLevel: 'H',
        width: 1024,
        margin: 2,
        color: {
          dark: '#181B1F',
          light: '#FFFDF9',
        },
      }),
    ])
      .then(([svg, png]) => {
        if (cancelled) return;
        setSvgMarkup(svg);
        setPngDataUrl(png);
      })
      .catch(() => {
        if (!cancelled) {
          setError('QR kod oluşturulurken bir hata oluştu.');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [targetUrl]);

  const downloadPng = () => {
    if (!pngDataUrl) return;
    const link = document.createElement('a');
    link.href = pngDataUrl;
    link.download = 'eymenle-atasozu-ve-deyimler-qr.png';
    link.click();
  };

  const downloadSvg = () => {
    if (!svgMarkup) return;
    const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'eymenle-atasozu-ve-deyimler-qr.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="no-print mb-6 flex items-center justify-between">
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-[#181B1F] bg-[#FFFDF9] px-4 py-2 text-sm font-bold text-[#181B1F] shadow-[3px_3px_0_#181B1F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#181B1F]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Sözlüğe Dön</span>
          </a>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#181B1F]/20 bg-[#EFE9DC] px-3 py-1 text-xs font-bold text-[#5A564E]">
            <QrCode className="h-3.5 w-3.5" />
            <span>Yönetici Paylaşım Aracı</span>
          </span>
        </div>

        {/* Printable Poster Card */}
        <div className="rounded-[28px] border-2 border-[#181B1F] bg-[#FFFDF9] p-6 shadow-[8px_8px_0_#181B1F] sm:p-10">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#181B1F] bg-[#F2B84B] px-3.5 py-1 text-xs font-bold tracking-wider text-[#181B1F] uppercase">
              Resimli Sözlük QR Kartı
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#181B1F] sm:text-4xl">
              Eymenle Atasözü ve Deyimler
            </h1>
            <p className="mt-2 text-base text-[#5A564E]">
              Kodu telefon kamerasıyla okut, resimli sözlüğü hemen keşfet!
            </p>
          </div>

          {/* QR Code Display */}
          <div className="mx-auto mt-8 flex max-w-[300px] flex-col items-center rounded-3xl border-2 border-[#181B1F] bg-[#FAF6EE] p-5 shadow-[5px_5px_0_#C84B31]">
            {error ? (
              <p className="py-12 text-center text-sm font-semibold text-[#C84B31]">
                {error}
              </p>
            ) : (
              <div
                className="aspect-square w-full overflow-hidden rounded-2xl border border-[#181B1F]/15 bg-[#FFFDF9] p-2 [&>svg]:h-full [&>svg]:w-full"
                dangerouslySetInnerHTML={{ __html: svgMarkup }}
              />
            )}
            <span className="mt-3 max-w-full truncate text-xs font-bold tracking-wide text-[#5A564E]">
              {targetUrl}
            </span>
          </div>

          {/* Controls (hidden when printing) */}
          <div className="no-print mt-8 space-y-5 border-t border-[#181B1F]/12 pt-6">
            <div>
              <label
                htmlFor="qr-target-url"
                className="block text-xs font-bold tracking-wider text-[#5A564E] uppercase"
              >
                Hedef Site Adresi (Canlı site linkin otomatik algılanır)
              </label>
              <input
                id="qr-target-url"
                type="url"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="https://mesebruh.github.io/eymenpepe/"
                className="mt-2 w-full rounded-xl border-[1.5px] border-[#181B1F]/25 bg-[#FAF6EE] px-4 py-2.5 text-sm font-medium text-[#181B1F] transition-colors focus:border-[#181B1F] focus:bg-[#FFFDF9] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={downloadPng}
                disabled={!pngDataUrl}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-[#181B1F] bg-[#C84B31] px-4 py-2.5 text-sm font-bold text-[#FFFDF9] shadow-[3px_3px_0_#181B1F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#181B1F] disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                <span>PNG İndir (1024px)</span>
              </button>

              <button
                type="button"
                onClick={downloadSvg}
                disabled={!svgMarkup}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-[#181B1F] bg-[#1B5E63] px-4 py-2.5 text-sm font-bold text-[#FFFDF9] shadow-[3px_3px_0_#181B1F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#181B1F] disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                <span>SVG İndir (Vektörel)</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-[#181B1F] bg-[#F2B84B] px-4 py-2.5 text-sm font-bold text-[#181B1F] shadow-[3px_3px_0_#181B1F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#181B1F]"
              >
                <Printer className="h-4 w-4" />
                <span>Afiş Yazdır</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
