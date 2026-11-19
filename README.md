# Eymenle Atasözü ve Deyimler

Minimalist karikatürize çizimler, Türk alfabesine (A–Z) göre otomatik sıralı atasözü ve deyim bölümleri, "Bana Bir Söz Seç" şans deneyimi ve paylaşılabilir QR kod afişi içeren resimli sözlük web uygulaması.

---

## 1. Vercel'de Ücretsiz Yayına Alma

1. Bu proje klasörünü GitHub'a yükleyin (veya doğrudan bilgisayarınızdan Vercel CLI kullanın).
2. **GitHub + Vercel ile (Önerilen):**
   - [vercel.com](https://vercel.com) üzerinden ücretsiz hesap açın.
   - **Add New Project** → GitHub deponuzu seçin → **Deploy** butonuna tıklayın.
   - Framework otomatik olarak **Vite** algılanır, ekstra ayar gerekmez.
3. **Tek Komutla Terminalden:**
   ```bash
   npx vercel --prod
   ```

---

## 2. Paylaşılabilir QR Kodu Alma

Ana sayfada kalabalık olmaması için gömülü bir QR kod butonu yoktur; ancak QR kod oluşturmak için iki hazır yolunuz vardır:

1. **Web Üzerinden (Afiş + İndirme):**
   Site yayına alındıktan sonra tarayıcıda adresin sonuna `/qr` ekleyin:
   ```text
   https://<site-adresiniz>.vercel.app/qr
   ```
   Bu gizli sayfadan otomatik olarak sitenizin ana sayfasına yönlendiren yüksek çözünürlüklü **PNG (1024px)**, vektörel **SVG** indirebilir veya **Afiş Yazdır** butonuyla doğrudan çıktı alabilirsiniz.

2. **Bilgisayarınızdan Komutla:**
   ```bash
   npm run qr -- https://<site-adresiniz>.vercel.app
   ```
   Proje ana dizinine `qr-kod.png` ve `qr-kod.svg` dosyalarını oluşturur.

---

## 3. İçerik Ekleme ve Güncelleme

### Yöntem A: Doğrudan Kod Üzerinden
`src/data/entries.ts` dosyasına yeni kayıt ekleyip görselini `public/illustrations/` klasörüne koyabilirsiniz.

### Yöntem B: Google E-Tablolar (Google Sheets) Üzerinden
1. `public/google-sheets-sablon.csv` dosyasını Google E-Tablolar'a içe aktarın (`type,title,meaning,image` sütunları).
2. Google E-Tablolar menüsünden **Dosya → Paylaş → Web'de yayınla** yolunu izleyin.
3. Format olarak **Virgülle ayrılmış değerler (.csv)** seçip **Yayınla** butonuna basın ve verilen linki kopyalayın.
4. Vercel projenizin **Settings → Environment Variables** bölümüne şu değişkeni ekleyin:
   - **Name:** `VITE_GOOGLE_SHEET_CSV_URL`
   - **Value:** Kopyaladığınız CSV linki
5. Vercel'de bir kez **Redeploy** yapın. Artık Google Tablonuza satır ekledikçe site otomatik güncellenecektir!
