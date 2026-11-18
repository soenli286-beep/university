import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function StudyMaterialsScreen() {
  return (
    <FeatureScreen
      title="Оқу материалдары"
      subtitle="Пәндер бойынша оқу ресурстары."
      icon="documents-outline"
      items={[
      { title: 'Дәріс материалдары', description: 'Оқытушылар жүктеген дәріс файлдары.', icon: 'document-text-outline' },
      { title: 'Тапсырмалар', description: 'Практикалық және өзіндік жұмыс материалдары.', icon: 'create-outline' },
      { title: 'Бейнесабақтар', description: 'Пәндерге арналған бейне және қосымша ресурстар.', icon: 'play-circle-outline' }
      ]}
    />
  );
}
