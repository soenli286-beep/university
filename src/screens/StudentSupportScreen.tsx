import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function StudentSupportScreen() {
  return (
    <FeatureScreen
      title="Студенттерге қолдау"
      subtitle="Студенттерге арналған кеңес және қолдау қызметтері."
      icon="heart-outline"
      items={[
      { title: 'Психологиялық қолдау', description: 'Маманнан кеңес алу туралы ақпарат.', icon: 'chatbox-ellipses-outline' },
      { title: 'Әлеуметтік қолдау', description: 'Әлеуметтік көмек бағдарламалары туралы мәлімет.', icon: 'people-outline' },
      { title: 'Өтініш қалдыру', description: 'Студенттік мәселелер бойынша өтініш жіберу.', icon: 'mail-outline' }
      ]}
    />
  );
}
