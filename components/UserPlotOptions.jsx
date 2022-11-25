import { useEffect, useState } from 'react';
import { fetchPlotList } from '../firebase/firestoreClient';

export default function UserPlotOptions(user) {
  const [plotList, setPlotList] = useState([]);

  useEffect(() => {
    fetchPlotList(user.user).then(setPlotList);
  }, [user]);

  return plotList.map((plot) => (
    <option key={plot.id} value={plot.plotId}>
      {plot.plotId}
    </option>
  ));
}
