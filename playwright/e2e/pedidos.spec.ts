import { test, expect } from '@playwright/test';

///Padrão AAA - Arrange, Act, Assert = Preparar, Agir, Verificar
test('deve consultar um pedido aprovado', async ({ page }) => {
  //Criado no codegen

  //Arrange
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint'); //Checkpoint - no selenium seria xpath="//h1[text]='Velô Sprint'"
  await page.getByRole('link', { name: 'Consultar Pedido' }).click(); 
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido'); //Checkpoint - no selenium seria xpath="//a[text()="Consultar Pedido" ou por cssSelector - a[href="/lookup"] ou por xpath -a[@href="/lookup"]

  //Act
  await page.getByTestId('search-order-id').fill('VLO-QY0HME');
  await page.getByTestId('search-order-button').click(); 

  //Assert
  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-QY0HME');
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');

  //await page.getByTestId('search-order-button').click();
  //Checkpoint - no selenium seria xpath="//p[text()='Pedido Aprovado']"
  //await expect(page.getByRole('heading')).toContainText('Pedido Aprovado');
  //await expect(page.getByTestId('order-result-id')).toContainText('VLO-QY0HME');

});
