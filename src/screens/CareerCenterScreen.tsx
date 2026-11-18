import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function CareerCenterScreen() {
  return (
    <FeatureScreen
      title="Мансап орталығы"
      subtitle="Мансапты жоспарлау және жұмысқа орналасу."
      icon="briefcase-outline"
      items={[
      { title: 'Бос жұмыс орындары', description: 'Студенттерге арналған бастапқы деңгейдегі ұсыныстар.', icon: 'search-outline' },
      { title: 'Түйіндеме дайындау', description: 'CV құрастыру бойынша кеңестер.', icon: 'document-outline' },
      { title: 'Мансап кеңесі', description: 'Мансап маманымен кеңес алу мүмкіндігі.', icon: 'chatbubbles-outline' }
      ]}
    />
  );
}
