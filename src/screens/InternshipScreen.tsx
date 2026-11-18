import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function InternshipScreen() {
  return (
    <FeatureScreen
      title="Практика және тағылымдама"
      subtitle="Өндірістік практикаға қатысты ақпарат."
      icon="business-outline"
      items={[
      { title: 'Практика орындары', description: 'Серіктес ұйымдар туралы мәліметтер.', icon: 'location-outline' },
      { title: 'Құжаттар', description: 'Практикаға қажетті құжаттар тізімі.', icon: 'folder-outline' },
      { title: 'Практика күнделігі', description: 'Практика барысын белгілеуге арналған бөлім.', icon: 'book-outline' }
      ]}
    />
  );
}
