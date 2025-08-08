import { footerData } from "@/app/_data/footer";
import React from "react";
export function Footer() {
  return (
    <footer className="bg-[linear-gradient(rgb(0,93,214)_0px,rgb(0,93,214)_60%,oklab(0.510862_-0.0373517_-0.1971_/_0.8)_100%)] box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full px-4 py-8 md:py-16">
      <div className="box-border max-w-[1440px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full mx-auto px-6">
        <div className="box-border gap-x-8 flex flex-col grid-cols-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-8 md:grid md:grid-cols-[repeat(12,minmax(0px,1fr))]">
          <div className="box-border col-end-auto col-start-auto outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:col-end-[span_4] md:col-start-[span_4]">
            <a
              href="/vi"
              className="text-blue-700 text-sm items-center box-border gap-x-2 flex justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 underline-offset-4 text-nowrap mb-6 rounded-md"
            >
              <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap mr-auto">
                <div className="box-border flex justify-start outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full border-2 border-solid border-transparent">
                  <img
                    alt="OpenEdu"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="https://c.animaapp.com/me27583zvcNERL/assets/56.png"
                    className="text-transparent aspect-[auto_260_/_40] box-border h-full max-w-full min-w-[140px] object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-[140px] md:w-[260px]"
                  />
                </div>
              </div>
            </a>
            <div className="text-indigo-50 box-border leading-[22.4px] max-w-sm outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] font-lexend">
              Chúng tôi tin vào sức mạnh của{" "}
              <br className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" />
              <span className="text-cyan-400 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></span>
              đổi mới để thay đổi giáo dục,
              <br className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" />
              <span className="text-cyan-400 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></span>
              trao quyền cho người học và giảng viên,
              <br className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" />
              <span className="text-cyan-400 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></span>
              hợp tác minh bạch đảm bảo tính công bằng,
              <br className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" />
              <span className="text-cyan-400 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></span>
              mạng lưới kết nối giúp lan tỏa tri thức,
              <br className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" />
              <span className="text-cyan-400 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></span>
              và những giải pháp bền vững giúp bảo vệ tương lai.
            </div>
          </div>

          <div className="box-border gap-x-8 grid col-end-auto col-start-auto grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-8 md:col-end-[span_8] md:col-start-[span_8] md:grid-cols-[repeat(8,minmax(0px,1fr))]">
            {footerData.sections.map((section) => (
              <div
                key={section.id}
                className={
                  section.id === "social"
                    ? "box-border col-end-auto col-start-auto outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:col-end-[span_2] md:col-start-[span_2]"
                    : "box-border col-end-auto col-start-auto outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:col-end-[span_3] md:col-start-[span_3]"
                }
              >
                <h3 className="text-indigo-50 font-semibold box-border leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-4 font-lexend">
                  {section.title}
                </h3>
                <ul className="box-border list-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] pl-0">
                  {section.links.map((link, index) => (
                    <li
                      key={link.id}
                      className={
                        index === section.links.length - 1
                          ? "box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left"
                          : "box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left mb-1"
                      }
                    >
                      <a
                        href={link.href}
                        className="text-[oklab(0.960202_0.00659806_-0.0189339_/_0.8)] text-sm items-center box-border inline-flex h-10 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap rounded-md font-lexend"
                      >
                        {link.icon && (
                          <img
                            src={link.icon}
                            alt="Icon"
                            className="box-border h-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-5 mr-2"
                          />
                        )}
                        <span className="box-border block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[oklab(0.968188_-0.00253725_-0.00633895_/_0.8)] box-border h-px outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full mt-8 mb-4"></div>
        <div className="text-indigo-50 text-sm box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
          Copyright © 2025. Powered by Openedu
        </div>
      </div>
    </footer>
  );
}
