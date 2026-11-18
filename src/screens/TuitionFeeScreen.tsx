import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function TuitionFeeScreen() {
  return (
    <FeatureScreen
      title="Оқу ақысы"
      subtitle="Оқу төлемдері туралы ақпарат бөлімі."
      icon="wallet-outline"
      items={[
      { title: 'Төлем сомасы', description: 'Оқу бағдарламасы бойынша төлем мәліметтері.', icon: 'cash-outline' },
      { title: 'Төлем тарихы', description: 'Жасалған төлемдерді қарау.', icon: 'receipt-outline' },
      { title: 'Төлем мерзімдері', description: 'Төлем күндері мен еске салғыштар.', icon: 'calendar-outline' }
      ]}
    />
  );
}
