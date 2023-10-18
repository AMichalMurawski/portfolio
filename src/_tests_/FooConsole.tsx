import React, { useEffect } from 'react';
import { useLang, useMedia, useMode, useStyle } from '../providers/useContext';

interface IsTrue {
  media: boolean;
  lang: boolean;
  mode: boolean;
  style: boolean;
}

const isTrue: IsTrue = {
  media: false,
  lang: false,
  mode: false,
  style: false,
};

export const FooConsole: React.FC = () => {
  const { mobile, tablet, desktop } = useMedia();

  const { lang } = useLang();

  const { mode } = useMode();

  const style: any = useStyle();

  useEffect(() => {
    if (isTrue.media) {
      console.log(
        'mobile:',
        mobile,
        '/',
        'tablet:',
        tablet,
        '/',
        'desktop:',
        desktop
      );
    }

    if (isTrue.lang) {
      console.log('lang:', lang);
    }

    if (isTrue.mode) {
      console.log('mode:', mode);
    }

    if (isTrue.style) {
      console.log('style:', style);
    }
  }, [mobile, tablet, desktop, lang, mode, style]);

  return <></>;
};
