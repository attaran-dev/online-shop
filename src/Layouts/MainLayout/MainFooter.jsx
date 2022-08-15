import React from "react";
import { SiInstagram, SiTwitter, SiSpotify } from "react-icons/si";
import {GiMusicalNotes} from "react-icons/gi"

function MainFooter() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content flex flex-row-reverse justify-around fixed bottom-0">
      <div className="flex flex-row gap-8 text-right">
        <div className="flex flex-col gap-2">
          <span className="footer-title">قوانین</span>
          <a className="link link-hover">شرایط استفاده</a>
          <a className="link link-hover">حریم خصوصی</a>
          <a className="link link-hover">رویه‌های بازگرداندن</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="footer-title">با ملودیکا</span>
          <a className="link link-hover">درباره‌ی ما</a>
          <a className="link link-hover">تماس با ما</a>
          <a className="link link-hover">وبلاگ</a>
        </div>
      </div>
      <div className="flex self-center text-3xl">
        <div className="flex flex-row gap-4  text-center">
          <span>
            <SiInstagram />
          </span>
          <span>
            <SiTwitter />
          </span>
          <span>
            <SiSpotify />
          </span>
        </div>
      </div>

      <div>
        <GiMusicalNotes className="text-5xl"/>
        <p>ملودیکا</p>
      </div>
    </footer>
  );
}

export default MainFooter;
