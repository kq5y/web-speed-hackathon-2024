import ReactDOM from 'react-dom/client';

import { AdminApp } from '@wsh-2024/admin/src/index';

//import { preloadImages } from './utils/preloadImages';
import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (!rootElement) throw new Error('Root element not found');
    ReactDOM.createRoot(rootElement).render(<AdminApp />);
  });

  await registerServiceWorker();
};

main().catch(console.error);
