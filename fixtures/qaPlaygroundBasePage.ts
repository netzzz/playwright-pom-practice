import { test as base } from '@playwright/test';
import FileUploadPage  from '../support/pageobjectmodel/pages/qa-playground-pages/fileUpload.page';

export const test = base.extend<{
    fileUploadPage: FileUploadPage;
}>({
    fileUploadPage: async ({page}, use) => {
        await use(new FileUploadPage(page));
    }
})