import Head from 'next/head';
import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Head>
        <title>Recurring Date Picker</title>
      </Head>
      <DatePicker />
    </div>
  );
}
