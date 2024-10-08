import { test as base } from '@playwright/test';
import CheckboxPracticePage  from '../support/pageobjectmodel/pages/heroku-app-pages/checkbox.page';
import DropdownPracticePage  from '../support/pageobjectmodel/pages/heroku-app-pages/dropdown.page';
import EntryAdPage  from '../support/pageobjectmodel/pages/heroku-app-pages/entryAd.page';
import DragAndDropPage  from '../support/pageobjectmodel/pages/heroku-app-pages/dragAndDrop.page';
import DownloadPage from '../support/pageobjectmodel/pages/heroku-app-pages/download.page';

export const test = base.extend<{
    checkboxPracticePage: CheckboxPracticePage;
    dropdownPracticePage: DropdownPracticePage;
    entryAdPage: EntryAdPage;
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
    dragAndDropPage: async ({page}, use) => {
        await use(new DragAndDropPage(page));
    },
    downloadPage: async ({page}, use) => {
        await use(new DownloadPage(page));
    }
})