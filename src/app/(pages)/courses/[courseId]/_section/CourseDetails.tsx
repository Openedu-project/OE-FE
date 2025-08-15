"use client"
import React, { useState } from "react"

export function CourseDetails() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="box-border gap-x-1 flex flex-col min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-1 md:min-h-[auto] md:min-w-[auto]">
      <div className="text-lg font-semibold box-border leading-[22.5px] min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] capitalize font-plus_jakarta_sans md:text-xl md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        Thông Tin Chi Tiết
      </div>
      <div className="shadow-[rgb(244,245,246)_0px_4px_30px_0px] box-border min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] border border-[oklab(0.562847_-0.0466164_-0.157356_/_0.2)] p-4 rounded-lg border-solid md:min-h-[auto] md:min-w-[auto] md:p-6">
        <div className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
          <div className="text-[oklab(0.137053_-0.00715154_-0.0352408_/_0.9)] text-sm box-border flow-root leading-[19.6px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] overflow-hidden font-plus_jakarta_sans">
            <p className="box-border leading-[21px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
              <span className="text-black text-[14.6667px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] font-arial">
                Khóa học{" "}
                <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  "Tập huấn kỹ năng GenAI cho cán bộ Đoàn Hội"
                </strong>{" "}
                của{" "}
                <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  Bình Dân Học AI
                </strong>{" "}
                trang bị cán bộ đoàn hội những kỹ năng ứng dụng trí tuệ nhân tạo (GenAI) nhằm nâng cao hiệu quả quản lý,
                giao tiếp, lập kế hoạch và phân tích dữ liệu. Học viên sẽ học cách tận dụng AI an toàn, trách nhiệm để
                tối ưu hóa công việc thực tế. Hoàn thành khóa học, học viên được cấp chứng chỉ xác nhận kỹ năng GenAI,
                thúc đẩy chuyển đổi số và nâng cao năng lực công tác đoàn hội.
              </span>
            </p>

            <p className="box-border leading-[21px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] mb-2">
              <span className="text-black text-[14.6667px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] font-arial">
                Khoá học gồm 4 nội dung chính:
              </span>
            </p>

            <ol className="box-border leading-[21px] list-decimal outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] ml-[6.4px] my-5 px-4">
              <li className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left">
                <p className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  <span className="text-black text-[14.6667px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] font-arial">
                    <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                      Hướng dẫn trước khi tham gia khóa học
                    </strong>
                  </span>
                </p>
              </li>
              <li className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left mt-2">
                <p className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  <span className="text-black text-[14.6667px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] font-arial">
                    <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                      Nội dung tập huấn kỹ năng GenAI
                    </strong>
                  </span>
                </p>
              </li>
              <li className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left mt-2">
                <p className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  <span className="text-black text-[14.6667px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] font-arial">
                    <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                      Bài kiểm tra cuối khóa
                    </strong>
                  </span>
                </p>
              </li>
              <li className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left mt-2">
                <p className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  <span className="text-black text-[14.6667px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] font-arial">
                    <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                      Nhận chứng chỉ khóa học
                    </strong>
                  </span>
                </p>
              </li>
            </ol>

            <p className="box-border leading-[21px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
              <span className="text-black text-[14.6667px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] font-arial">
                <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  Mọi thắc mắc các bạn có thể liên hệ qua:
                </strong>
              </span>
            </p>

            <ul className="box-border leading-[21px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] ml-[6.4px] my-5 px-4">
              <li className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left">
                <p className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  <a
                    href="https://bit.ly/45nwaOm"
                    className="text-blue-600 box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline underline-offset-[3px]"
                  >
                    <span className="text-cyan-600 box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline-offset-[3px]">
                      <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline-offset-[3px]">
                        <u className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline underline-offset-[3px]">
                          Facebook
                        </u>
                      </strong>
                    </span>
                  </a>
                </p>
              </li>
              <li className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left mt-2">
                <p className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                  <a
                    href="https://discord.gg/cPMbZNWmGs"
                    className="text-blue-600 box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline underline-offset-[3px]"
                  >
                    <span className="text-cyan-600 box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline-offset-[3px]">
                      <strong className="font-bold box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline-offset-[3px]">
                        <u className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] underline underline-offset-[3px]">
                          Discord
                        </u>
                      </strong>
                    </span>
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="text-blue-600 text-sm items-center bg-transparent inline-flex h-fit justify-center leading-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-center text-nowrap p-0 rounded-md"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Hiện thêm
          </button>
        </div>
      </div>
    </div>
  )
}
