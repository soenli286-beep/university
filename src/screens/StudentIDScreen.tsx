import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function StudentIDScreen() {
  return (
    <FeatureScreen
      title="Студенттік билет"
      subtitle="Студенттің электронды жеке кабинеті."
      icon="card-outline"
      items={[
      { title: 'Студент профилі', description: 'Аты-жөні, факультеті және оқу тобы туралы мәлімет.', icon: 'person-outline' },
      { title: 'Электронды билет', description: 'Кампус ішінде студент мәртебесін көрсетуге арналған үлгі.', icon: 'qr-code-outline' },
      { title: 'Кітапхана картасы', description: 'Кітапхана қызметтеріне арналған студенттік дерек.', icon: 'library-outline' }
      ]}
    />
  );
}
