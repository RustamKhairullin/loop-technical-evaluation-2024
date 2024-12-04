import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { BASE_URL, ADMIN_USERNAME, ADMIN_PASSWORD } from "client-e2e/config";
import {
  USERNAME_INPUT_FIELD,
  PASSWORD_INPUT_FIELD,
  SIGN_IN_BUTTON,
} from "client-e2e/selectors/login-selectors";
import { LOGOUT_BUTTON } from "client-e2e/selectors/header-selectors";

export async function login(
  page: Page,
  username: string = ADMIN_USERNAME,
  password: string = ADMIN_PASSWORD
) {
  await page.goto(BASE_URL);
  await page.locator(USERNAME_INPUT_FIELD).fill(username);
  await page.locator(PASSWORD_INPUT_FIELD).fill(password);
  await page.locator(SIGN_IN_BUTTON).click();
  await expect(page.locator(LOGOUT_BUTTON)).toBeVisible();
}
