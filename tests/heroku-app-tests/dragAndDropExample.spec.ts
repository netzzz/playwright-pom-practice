import { test } from '../../fixtures/herokuAppBasePage';

test('make sure drag and drop is successful', async ({dragAndDropPage})=> {
    await dragAndDropPage.goto();
    await dragAndDropPage.dragFromTo(dragAndDropPage.columnA(), dragAndDropPage.columnB());
    await dragAndDropPage.checkTextOfFirstColumnToBe("B");
})