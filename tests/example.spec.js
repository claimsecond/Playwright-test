//@ts-check
const { test, expect } = require('@playwright/test');

// test.use({ headless: false });

test("Go to Google", async({page}) => {
    await page.goto('https://google.com/ncr'); 
    await page.locator('[name=q]').type('Playwright'); 
    await page.locator('[name=q]').press("Enter"); 

    await page.waitForSelector('#rso>div');
    const results = await page.locator('#rso>div');
    const length = await results.count();
    // Проверяем, что результатов поиска на странице больше 5
    expect(length).toBeGreaterThan(5);
    // Находим первый результат поиска и кликаем на него
    const firstResult = await page.locator('#rso a >> nth=0');
    await firstResult.click(); 

    const title = await page.title(); // получаем заголовок страницы
    expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright'); // проверяем его значение
    
})
