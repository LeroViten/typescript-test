import Counter from './Counter';
import Colorpicker from './Colorpicker';
import TodosView from './Todos/TodosView';

const colorPickerOptions = [
  { label: 'Veri-Peri', color: '#6667ab' },
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <>
      <Counter />
      <Colorpicker options={colorPickerOptions} />
      <TodosView />
    </>
  );
}
