import React from 'react';
import FeatureScreen from './FeatureScreen';

export default function AcademicCalendarScreen() {
  return (
    <FeatureScreen
      title="Академиялық күнтізбе"
      subtitle="Оқу жылының маңызды күндері мен кезеңдері."
      icon="calendar-outline"
      items={[
      { title: 'Семестр күндері', description: 'Семестрдің басталу және аяқталу мерзімдері.', icon: 'calendar-number-outline' },
      { title: 'Демалыс күндері', description: 'Академиялық демалыс кезеңдері.', icon: 'sunny-outline' },
      { title: 'Маңызды мерзімдер', description: 'Пән тіркеу, емтихан және құжат тапсыру күндері.', icon: 'alarm-outline' }
      ]}
    />
  );
}
