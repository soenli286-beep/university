import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function ScholarshipScreen() {
  return (
    <FeatureScreen
      title="Стипендия"
      subtitle="Стипендиялар мен қаржылай қолдау туралы ақпарат."
      icon="school-outline"
      items={[
      { title: 'Қолжетімді стипендиялар', description: 'Университет және мемлекеттік стипендия бағдарламалары.', icon: 'ribbon-outline' },
      { title: 'Өтінім беру', description: 'Қажетті құжаттар мен өтінім беру кезеңдерін қарау.', icon: 'document-attach-outline' },
      { title: 'Өтінім мәртебесі', description: 'Жіберілген өтінімнің күйін тексеру.', icon: 'time-outline' }
      ]}
    />
  );
}
