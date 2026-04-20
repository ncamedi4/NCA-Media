import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

const IMAGES = [
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5793%202.png?alt=media&token=e0ea7c32-be99-4785-a430-ad0c7c3aa3ae",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5798.PNG?alt=media&token=d4f4dcee-356d-41ab-b473-507ebd637cae",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5803.PNG?alt=media&token=b8bfc27c-3912-418d-949d-2da95dd752ab",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5805.PNG?alt=media&token=08fbd938-7905-4f67-9145-42a98e554fe1",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5809.PNG?alt=media&token=aa87d3d1-8f0c-44b6-adfa-daf8c331da3e",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5816.PNG?alt=media&token=5962ade3-1a27-4f56-8580-cf800392dd61",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5813.PNG?alt=media&token=eb860c24-5948-48b5-ad82-299b329216d6",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5811.PNG?alt=media&token=23b59488-2cee-45f9-be37-ab8574da826b",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5797.jpg?alt=media&token=9def209b-3b5c-40ee-a356-982a9916d186",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5800.PNG?alt=media&token=98c7b6ad-0cdb-40d8-86d5-ebf6f545a219",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5801.PNG?alt=media&token=09aa22e4-eff5-4931-a3c9-a379034dd656",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5804.PNG?alt=media&token=c62b8773-4563-4379-a62f-7318f2f8f2dd",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5794%202.PNG?alt=media&token=0d5f4338-d737-41d8-9afa-f35eb2905160",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2F41d197f0-2568-4aa0-9fe6-73de013e9cae.JPG?alt=media&token=1dbaaba5-1f00-404d-8ef3-2eeb7c2741b3",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_0467.jpg?alt=media&token=f5f484bb-c08c-452c-b479-42c484a99ea5",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FIMG_5064.JPG?alt=media&token=6a3faff2-3181-4f31-8c00-42696f59f352",
  "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FTest%2FIMG_5129.png?alt=media&token=a3781bb0-15d4-41fc-badf-d2d8f7820271"
];

export const WhyChooseUs = () => {
  const { t } = useTranslation();
  const doubledImages = [...IMAGES, ...IMAGES, ...IMAGES];

  return (
    <>
      {/* White Section */}
      <section className="w-full py-32 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 mb-16 flex flex-col items-center text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 mb-6">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
              <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">{t('why.tagline')}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-[#111111]">
              <span className="block">{t('why.title1')}</span>
              <span className="font-medium text-gradient-primary">{t('why.title2')}</span>
            </h2>
          </div>
          <p className="text-[#111111]/80 text-base md:text-lg leading-relaxed max-w-4xl" dangerouslySetInnerHTML={{ __html: t('why.desc') }} />
        </div>

        <div className="relative w-full flex overflow-hidden">
          <motion.div 
            className="flex gap-6 pr-6"
            animate={{ x: "-33.333%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ width: "max-content" }}
          >
            {doubledImages.map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-[160px] md:w-[200px] lg:w-[240px] aspect-[3/4] md:aspect-[4/5] rounded-md overflow-hidden">
                <img src={src} alt="Behind the scenes" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="w-full py-32 bg-[#09102b] flex justify-center items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center w-full">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/30 bg-[#1b54ff]/10 mb-6">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                {t('why.darkTagline')}
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-white">
              <span className="block">{t('why.darkTitle1')}</span>
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1b54ff]">{t('why.darkTitle2')}</span>
            </h2>
          </div>
          
          <div className="w-full flex justify-center">
            <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
              {t('why.darkDesc')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
