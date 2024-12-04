import { expect, test } from "@playwright/test";
import * as testData from "client-e2e/data/testData.json";
import { login } from "client-e2e/helpers/ui/login";
import { HEADER_TITLE } from "client-e2e/selectors/header-selectors";

testData.testCases.forEach(({ projectName, column, taskName, tags }) => {
  test(`Verify "${taskName}" is in "${column}" under "${projectName}"`, async ({
    page,
  }) => {
    const columnLocator = page
      .locator(`h2:has-text('${column}')`)
      .locator("..");
    const taskLocator = columnLocator.locator(`h3:has-text("${taskName}")`);
    await login(page);
    await page.pause()

    await test.step(`Navigate to "${projectName}" project`, async () => {
      await page.locator(`button:has-text("${projectName}")`).click();
      await expect(page.locator(HEADER_TITLE)).toHaveText(projectName);
    });

    await test.step(`Verify "${taskName}" is in the "${column}" column`, async () => {
      await expect(taskLocator).toBeVisible();
    });

    await test.step("Confirm tags", async () => {
      for (const tag of tags) {
        await expect(
          taskLocator.locator("..").locator(`span:has-text("${tag}")`)
        ).toBeVisible();
      }
    });
  });
});
