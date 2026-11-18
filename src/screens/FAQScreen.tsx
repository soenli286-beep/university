import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function FAQScreen() {
  return (
    <FeatureScreen
      title="Жиі қойылатын сұрақтар"
      subtitle="Университет қызметтері бойынша қысқаша анықтама."
      icon="help-circle-outline"
      items={[
      { title: 'Оқу процесі', description: 'Сабақ, емтихан және бағалау туралы сұрақтар.', icon: 'school-outline' },
      { title: 'Жеке кабинет', description: 'Кіру және профильге қатысты сұрақтар.', icon: 'person-circle-outline' },
      { title: 'Техникалық көмек', description: 'Қосымша жұмысына қатысты көмек.', icon: 'construct-outline' }
      ]}
    />
  );
}
