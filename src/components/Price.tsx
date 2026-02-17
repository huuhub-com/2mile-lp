import AnimatedSection from "./AnimatedSection";

export default function Price() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between px-6">

      {/* Top spacer + label */}
      {/* Main price block */}
      <AnimatedSection
        delay={40}
        duration={700}
        axis="y"
        distance={20}
        className="mx-auto w-full max-w-[900px]"
      >
        <div className="py-24">
          <div className="mx-auto max-w-[960px]">
            <div className="pt-16">
              <p className="text-center text-[20px] md:text-[30px] font-semibold tracking-[0.22em] uppercase text-black/50">
                PRICE
              </p>
            </div>
          </div>
        </div>

        <div className="mt-0 text-center">
          <p className="text-[clamp(64px,10vw,100px)] font-extrabold tracking-[-0.04em] leading-none">
            980円 / 月
          </p>

          {/* Breakdown */}
          <div className="mt-15 mx-auto max-w-[520px] space-y-10 text-sm leading-7 text-black/60">
            <div>
              <p className="text-black/80">
                API使用料　780円 / 月
              </p>
              <p className="mt-2">
                月1,000回まで含む。1,001 回目以降は 1回あたり0.01円。
              </p>
            </div>

            <div>
              <p className="text-black/80">
                インスタンス使用料　200円 / 月
              </p>
              <p className="mt-2">
                ユーザーごとの作業領域（保存データ・設定）を確保するための料金です。
                メンテナンスやバージョン更新の影響で、インスタンスを解除すると学習履歴や登録したフレーズの記録が消えてしまう恐れがあります。
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
