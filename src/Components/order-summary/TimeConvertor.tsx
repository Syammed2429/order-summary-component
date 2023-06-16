import React, { useState } from 'react';
import moment from 'moment-timezone';

const TimeConverter = () => {
  const [time, setTime] = useState('');
  const [fromZone, setFromZone] = useState('');
  const [toZone, setToZone] = useState('');
  const [convertedTime, setConvertedTime] = useState('');

  const handleConvert = () => {
    if (time && fromZone && toZone) {
      const converted = moment(time, 'h:mm A')
        .tz(fromZone)
        .clone()
        .tz(toZone)
        .format('h:mm A');
      setConvertedTime(converted);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter time (e.g., 8:00 AM)"
      />
      <input
        type="text"
        value={fromZone}
        onChange={(e) => setFromZone(e.target.value)}
        placeholder="Enter source time zone (e.g., Asia/Jakarta)"
      />
      <input
        type="text"
        value={toZone}
        onChange={(e) => setToZone(e.target.value)}
        placeholder="Enter target time zone (e.g., Asia/Bangkok)"
      />
      <button onClick={handleConvert}>Convert</button>
      {convertedTime && <p>Converted time: {convertedTime}</p>}
    </div>
  );
};

export default TimeConverter;
