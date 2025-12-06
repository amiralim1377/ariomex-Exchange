
```
ariomex
├─ components.json
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animation
│  │  ├─ banner-crypto.json
│  │  └─ crypto.json
│  ├─ AuthFeatureSection
│  │  └─ kyc.svg
│  ├─ banner-2-light.webp
│  ├─ FooterApp
│  │  ├─ android.webp
│  │  ├─ brand-bazzar.webp
│  │  ├─ cafebazaar-svgrepo-com.svg
│  │  ├─ default@2x.png
│  │  ├─ Google_Play_2022_icon.svg
│  │  ├─ iApps.svg
│  │  ├─ myket.webp
│  │  ├─ sibapp-svgrepo-com.svg
│  │  ├─ sibapp.webp
│  │  └─ SibIrani.svg
│  ├─ guid
│  │  ├─ darkbg.webp
│  │  ├─ guide1.svg
│  │  ├─ guide2.svg
│  │  ├─ guide3.svg
│  │  ├─ guide4.svg
│  │  └─ lightbg.webp
│  ├─ logo
│  │  ├─ Ariomex-Dark-Logo.svg
│  │  └─ Ariomex-Light-Logo.svg
│  ├─ MobileAppSection
│  │  ├─ mobile.webp
│  │  └─ QR-code.png
│  ├─ navigationMenu
│  ├─ PlatformBenefits
│  │  ├─ eco1.svg
│  │  ├─ eco2.svg
│  │  ├─ eco3.svg
│  │  └─ eco4.svg
│  ├─ ProfitLossSection
│  │  └─ pnl.svg
│  ├─ ReferralProgram
│  │  └─ referral.svg
│  └─ SecurityFeatureCard
│     ├─ secure.svg
│     ├─ secure2.svg
│     ├─ secure3.svg
│     └─ secure4.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ (protected)
│  │  ├─ (public)
│  │  ├─ about
│  │  │  ├─ components
│  │  │  ├─ hooks
│  │  │  ├─ page.tsx
│  │  │  └─ services
│  │  ├─ api
│  │  ├─ error.tsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ loading.tsx
│  │  ├─ not-found.tsx
│  │  └─ page.tsx
│  ├─ asset
│  ├─ components
│  │  ├─ ArticlesSection
│  │  │  └─ ArticlesSection.tsx
│  │  ├─ AuthFeatureSection
│  │  │  ├─ AuthFeatureSection.tsx
│  │  │  └─ index.ts
│  │  ├─ BannerSection
│  │  │  ├─ BannerAnimation
│  │  │  │  └─ BannerAnimation.tsx
│  │  │  ├─ BannerSection.tsx
│  │  │  ├─ BannerText
│  │  │  │  └─ BannerText.tsx
│  │  │  └─ index.ts
│  │  ├─ ExchangeIntro
│  │  │  ├─ ExchangeIntro.tsx
│  │  │  └─ index.ts
│  │  ├─ FaqSection
│  │  │  └─ FaqSection.tsx
│  │  ├─ Footer
│  │  │  ├─ Footer.tsx
│  │  │  ├─ FooterApp
│  │  │  │  └─ FooterApp.tsx
│  │  │  ├─ FooterColumns
│  │  │  │  └─ FooterColumns.tsx
│  │  │  ├─ FooterCopyright
│  │  │  │  └─ FooterCopyright.tsx
│  │  │  └─ index.ts
│  │  ├─ GuidanceSection
│  │  │  └─ GuidanceSection.tsx
│  │  ├─ Header
│  │  │  ├─ DesktopHeader
│  │  │  │  └─ DesktopHeader.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ HeaderLogo
│  │  │  │  └─ HeaderLogo.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ LanguageSwitcher
│  │  │  │  └─ LanguageSwitcher.tsx
│  │  │  ├─ LoginSignUpButton
│  │  │  │  └─ LoginSignUpButton.tsx
│  │  │  ├─ MobileMenu
│  │  │  │  └─ MobileMenu.tsx
│  │  │  └─ NavigationHeaderMenu
│  │  │     └─ NavigationHeaderMenu.tsx
│  │  ├─ HeroSection
│  │  │  ├─ HeroAnimation
│  │  │  │  └─ HeroAnimation.tsx
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ HeroText
│  │  │  │  └─ HeroText.tsx
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ LatestBlogs
│  │  │  ├─ index.ts
│  │  │  └─ LatestBlogs.tsx
│  │  ├─ LatestCryptoCurrencyPrices
│  │  │  ├─ CoinGrid
│  │  │  │  └─ CoinGrid.tsx
│  │  │  ├─ CoinRow
│  │  │  │  └─ CoinRow.tsx
│  │  │  ├─ CryptoTreemap
│  │  │  │  └─ CryptoTreemap.tsx
│  │  │  └─ LatestCryptoCurrencyPrices.tsx
│  │  ├─ MobileAppSection
│  │  │  ├─ AppContentDownloadBtn
│  │  │  │  └─ AppContentDownloadBtn.tsx
│  │  │  ├─ AppContentQRCode
│  │  │  │  └─ AppContentQRCode.tsx
│  │  │  ├─ AppSectionContent
│  │  │  │  └─ AppSectionContent.tsx
│  │  │  ├─ AppSectionImage
│  │  │  │  └─ AppSectionImage.tsx
│  │  │  ├─ index.ts
│  │  │  └─ MobileAppSection.tsx
│  │  ├─ ModeToggle
│  │  │  ├─ index.ts
│  │  │  └─ ModeToggle.tsx
│  │  ├─ PlatformBenefits
│  │  │  ├─ index.ts
│  │  │  └─ PlatformBenefits.tsx
│  │  ├─ ProfitLossSection
│  │  │  ├─ index.ts
│  │  │  └─ ProfitLossSection.tsx
│  │  ├─ ReferralProgram
│  │  │  ├─ index.ts
│  │  │  ├─ ReferralProgram.tsx
│  │  │  ├─ ReferralProgramContent
│  │  │  │  └─ ReferralProgramContent.tsx
│  │  │  └─ ReferralProgramSvg
│  │  │     └─ ReferralProgramSvg.tsx
│  │  ├─ ReusableComponents
│  │  │  ├─ ExchangeFeatureSection
│  │  │  │  └─ ExchangeFeatureSection.tsx
│  │  │  ├─ FeatureCard
│  │  │  │  ├─ FeatureCard.tsx
│  │  │  │  └─ index.ts
│  │  │  └─ ReusableAccordion
│  │  │     └─ ReusableAccordion.tsx
│  │  ├─ SecurityFeatureCard
│  │  │  ├─ index.ts
│  │  │  └─ SecurityFeatureCard.tsx
│  │  ├─ test
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ button.tsx
│  │     ├─ dropdown-menu.tsx
│  │     └─ navigation-menu.tsx
│  ├─ config
│  ├─ context
│  │  └─ ScrollContext.tsx
│  ├─ css
│  │  └─ brandStyles.css
│  ├─ data
│  │  ├─ exchangeIntroData.ts
│  │  ├─ faq.ts
│  │  ├─ footerContentList.ts
│  │  └─ navigationMenuList.ts
│  ├─ fonts
│  │  ├─ index.ts
│  │  ├─ Vazirmatn-Black.woff2
│  │  ├─ Vazirmatn-Bold.woff2
│  │  ├─ Vazirmatn-ExtraBold.woff2
│  │  ├─ Vazirmatn-ExtraLight.woff2
│  │  ├─ Vazirmatn-Light.woff2
│  │  ├─ Vazirmatn-Medium.woff2
│  │  ├─ Vazirmatn-Regular.woff2
│  │  ├─ Vazirmatn-SemiBold.woff2
│  │  ├─ Vazirmatn-Thin.woff2
│  │  └─ Vazirmatn[wght].woff2
│  ├─ hooks
│  ├─ lib
│  │  └─ utils.ts
│  ├─ mock
│  ├─ providers
│  │  ├─ GlobalProvider.tsx
│  │  ├─ QueryClientProviderWrapper.tsx
│  │  └─ ThemeProvider.tsx
│  ├─ services
│  ├─ types
│  │  ├─ AccordionProps.ts
│  │  ├─ Coin.ts
│  │  ├─ FeatureCardProps.ts
│  │  └─ footerTypes.ts
│  └─ utils
└─ tsconfig.json

```