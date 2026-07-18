import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "知命六爻｜东方决策工作台",
  description: "四种起卦方式、完整六爻排盘与结构化决策提示。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
