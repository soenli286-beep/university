import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function LostFoundScreen() {
  return (
    <FeatureScreen
      title="Жоғалған заттар"
      subtitle="Кампус аумағындағы жоғалған және табылған заттар."
      icon="search-outline"
      items={[
      { title: 'Табылған заттар', description: 'Табылған заттар туралы хабарландырулар.', icon: 'checkmark-circle-outline' },
      { title: 'Жоғалған зат туралы хабарлау', description: 'Заттың сипаттамасын жіберуге арналған бөлім.', icon: 'add-circle-outline' },
      { title: 'Байланыс', description: 'Әкімшілікке хабарласу ақпараты.', icon: 'call-outline' }
      ]}
    />
  );
}
