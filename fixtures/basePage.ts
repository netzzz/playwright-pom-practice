import { test as base } from '@playwright/test';
import CheckboxPracticePage  from '../support/pageobjectmodel/pages/heroku-app-pages/checkbox.page';
import DropdownPracticePage  from '../support/pageobjectmodel/pages/heroku-app-pages/dropdown.page';
import EntryAdPage  from '../support/pageobjectmodel/pages/heroku-app-pages/entryAd.page';
import FileUploadPage  from '../support/pageobjectmodel/pages/qa-playground-pages/fileUpload.page';
import LoginPracticePage  from '../support/pageobjectmodel/pages/practice-test-automation-pages/login.page';
import LoginLandingPage  from '../support/pageobjectmodel/pages/practice-test-automation-pages/loginLanding.page';
import DragAndDropPage  from '../support/pageobjectmodel/pages/heroku-app-pages/dragAndDrop.page';
import DownloadPage from '../support/pageobjectmodel/pages/heroku-app-pages/download.page';

export const test = base.extend<{
    checkboxPracticePage: CheckboxPracticePage;
    dropdownPracticePage: DropdownPracticePage;
    entryAdPage: EntryAdPage;
    fileUploadPage: FileUploadPage;
    loginPracticePage: LoginPracticePage;
    loginLandingPage: LoginLandingPage;
    dragAndDropPage: DragAndDropPage;
    downloadPage: DownloadPage;
}>({
    checkboxPracticePage: async ({page}, use) => {
        await use(new CheckboxPracticePage(page));
    },
    dropdownPracticePage: async ({page}, use) => {
        await use(new DropdownPracticePage(page));
    },
    entryAdPage: async ({page}, use) => {
        await use(new EntryAdPage(page));
    },
    fileUploadPage: async ({page}, use) => {
        await use(new FileUploadPage(page));
    },
    loginPracticePage: async ({page}, use) => {
        await use(new LoginPracticePage(page));
    },
    loginLandingPage: async ({page}, use) => {
        await use(new LoginLandingPage(page));
    },
    dragAndDropPage: async ({page}, use) => {
        await use(new DragAndDropPage(page));
    },
    downloadPage: async ({page}, use) => {
        await use(new DownloadPage(page));
    }
})