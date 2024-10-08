import { test } from '../../fixtures/basePage';

test('make sure drag and drop is successful', async ({dragAndDropPage})=> {
    await dragAndDropPage.goto();
    await dragAndDropPage.dragFromTo(dragAndDropPage.columnA(), dragAndDropPage.columnB());
    await dragAndDropPage.checkTextOfFirstColumnToBe("B");
})