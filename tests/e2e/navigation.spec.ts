import { expect, test } from "@playwright/test";

test("login demo abre dashboard e navega ao CRM", async ({ page }, testInfo) => {
  await page.goto("/login");
  await page.getByRole("button", { name: /Entrar na demonstração/ }).click();
  await expect(page.getByRole("heading", { name: /Bom dia/ })).toBeVisible();
  if (testInfo.project.name === "mobile") await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.getByRole("link", { name: "CRM" }).click();
  await expect(page.getByRole("heading", { name: "CRM" })).toBeVisible();
});
