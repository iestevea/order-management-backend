import express from 'express';
import path from 'path';
import { envConstants } from 'core/constants';
import { createApp } from 'core/servers';
import { connectToDB } from 'core/database';
import { orderApi } from 'pods/order';

const app = createApp();

app.use('/orders', orderApi);

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
app.use('/', express.static(staticFilesPath));

app.listen(envConstants.PORT, async () => {
  await connectToDB(envConstants.MONGODB_URI);
  console.log(`Server ready at PORT ${envConstants.PORT}`);
});
