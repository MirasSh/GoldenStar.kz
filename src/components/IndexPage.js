import React from 'react';

const IndexPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
             (function (m, e, t, r, i, k, a) {
               m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
               m[i].l = 1 * new Date();
               for (var j = 0; j < document.scripts.length; j++) {
                 if (document.scripts[j].src === r) {
                   return;
                 }
               }
               k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
             })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

             ym(89496981, "init", {
               clickmap: true,
               trackLinks: true,
               accurateTrackBounce: true,
               webvisor: true
             });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/89496981"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body>
        {/* Yandex.Metrika informer */}
        <a
          href="https://metrika.yandex.ru/stat/?id=89496981&amp;from=informer"
          target="_blank"
          rel="nofollow"
        >
          <img
            src="https://informer.yandex.ru/informer/89496981/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
            style={{ width: '88px', height: '31px', border: '0' }}
            alt="Яндекс.Метрика"
            title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
            className="ym-advanced-informer"
            data-cid="89496981"
            data-lang="ru"
          />
        </a>
        {/* /Yandex.Metrika informer */}
      </body>
    </html>
  );
};

export default IndexPage;
