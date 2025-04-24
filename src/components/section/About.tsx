"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import SectionTitle from "../title/SectionTitle";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col px-14 min-h-screen"
    >
      <SectionTitle id="about" ref={ref} title="ABOUT ME" isInView />
      <div className="flex flex-col gap-20 pb-60 justify-between items-center xl:flex-row xl:gap-0">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-start mb-10 gap-4 text-4xl md:text-5xl xl:text-6xl">
            <span>안녕하세요,</span>
            <span>프론트엔드 개발자</span>
            <span>
              <span className="text-blue-500">김영준</span>입니다.
            </span>
          </div>
          <div className="text-base sm:text-lg md:text-xl">
            기술적인 <span className="text-blue-500">도전</span>에 즐거움을 느끼며
          </div>
          <div className="text-base sm:text-lg md:text-xl">
            더 나은 <span className="text-blue-500">사용자 경험</span>을 제공하기 위해 노력하는
            개발자입니다.
          </div>
        </motion.div>
        <motion.div
          className="flex gap-20 justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={"/images/profile/profile.jpeg"}
            alt="profile"
            width={300}
            height={300}
            className="rounded-md w-50 sm:w-[240px] xl:w-[300px]"
          />
          <div className="flex flex-col gap-4">
            <div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">김영준</h3>
                <p className="text-sm sm:text-lg text-foreground/70 tracking-widest">
                  KIM YEONG JUN
                </p>
              </div>
            </div>
            <div className="p-2 bg-blue-500/10">
              <p className="text-blue-500 font-medium text-sm sm:text-lg text-center">
                Front-End Developer
              </p>
            </div>
            <div className="text-sm sm:text-lg xl:text-xl flex gap-4 group">
              <Image
                src="/images/profile/mail.svg"
                alt="mail"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 invert-75 group-hover:invert-100"
              />
              <span>kyjun519@gmail.com</span>
            </div>
            <div className="text-sm sm:text-lg xl:text-xl flex gap-4 group">
              <Image
                src="/images/profile/phone.svg"
                alt="velog"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 invert-75 group-hover:invert-100 p-[1px]"
              />
              <span>010-2747-4729</span>
            </div>
            <Link href="https://github.com/dudwns" className="flex gap-4 group">
              <Image
                src="/images/profile/github.svg"
                alt="github"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 invert-75 group-hover:invert-100"
              />
              <span className="text-sm sm:text-lg xl:text-xl">github.com/dudwns</span>
            </Link>
            <Link href="https://velog.io/@dudwns/posts" className="flex gap-4 group">
              <Image
                src="/images/profile/velog.svg"
                alt="velog"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 invert-75 group-hover:invert-100"
              />
              <span className="text-sm sm:text-lg xl:text-xl">velog.io/@dudwns</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
