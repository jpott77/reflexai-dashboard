class DashboardPage {
   
    get dashboardMenuItem() {
        return cy.get('li.menu.nav-item button.nav-link').first();
    }

    get dashboardMenuItemText() {
        return this.dashboardMenuItem.find('span');
    }

    get collapseIcon() {
        return cy.get('.horizontal-logo .collapse-icon');
    }

    get salesMenuItem() {
        return cy.contains('.sub-menu a', 'Sales');
    }

    get analyticsMenuItem() {
        return cy.contains('.sub-menu a', 'Analytics');
    }

    get financeMenuItem() {
        return cy.contains('.sub-menu a', 'Finance');
    }

    get cryptoMenuItem() {
        return cy.contains('.sub-menu a', 'Crypto');
    }

    get activeBreadcrumb() {
        return cy.get('.sub-menu a.active');
    }

    get calendarIcon() {
        return cy.get('ul.flex.items-center.space-x-2 li:first-child a[href="/apps/calendar"]');
    }

    get todoListIcon() {
        return cy.get('ul.flex.items-center.space-x-2 li:nth-child(2) a[href="/apps/todolist"]');
    }

    get chatIcon() {
        return cy.get('ul.flex.items-center.space-x-2 li:last-child a[href="/apps/chat"]');
    }

    get calendarHeading() {
        return cy.get('div.text-center.text-lg.font-semibold.ltr\\:sm\\:text-left.rtl\\:sm\\:text-right');
    }

    get todoListHeading() {
        return cy.get('h3.text-lg.font-semibold.ltr\\:ml-3.rtl\\:mr-3');
    }

    // Revenue section
    get revenueSection() {
        return cy.get('h5').contains('Revenue').closest('.panel');
    }
    get revenueChart() {
        return this.revenueSection.find('.apexcharts-canvas');
    }
    get totalProfit() {
        return this.revenueSection.find('.text-lg').contains('Total Profit').find('span.ml-2');
    }
    get revenueSortingDropdown() {
        return this.revenueSection.find('.dropdown');
    }
    get revenueSortingButton() {
        return this.revenueSortingDropdown.find('button').first();
    }
    get revenueSortingOptions() {
        return this.revenueSortingDropdown.find('ul li');
    }
    get revenueSortingMenu() {
        return this.revenueSortingDropdown.find('div[data-popper-placement="bottom-end"]');
    }

    // Sales By Category section
    get salesByCategorySection() {
        return cy.get('h5').contains('Sales By Category');
    }
    get salesByCategoryChart() {
        return this.salesByCategorySection.closest('.panel').find('.apexcharts-canvas');
    }
    get salesByCategoryLegendItems() {
        return this.salesByCategorySection.closest('.panel').find('.apexcharts-legend-text');
    }
    get categoryTotal() {
        return this.salesByCategorySection.closest('.panel').find('.apexcharts-datalabel-value');
    }

    // Daily Sales section
    get dailySalesSection() {
        return cy.get('h5').contains('Daily Sales');
    }
    get dailySalesChart() {
        return this.dailySalesSection.closest('.panel').find('.apexcharts-canvas');
    }

    // Summary section
    get summarySection() {
        return cy.get('h5').contains('Summary').closest('.panel');
    }
    get incomeValue() {
        return this.summarySection.contains('h6', 'Income').closest('.flex').find('p');
    }
    get profitValue() {
        return this.summarySection.contains('h6', 'Profit').closest('.flex').find('p');
    }
    get expensesValue() {
        return this.summarySection.contains('h6', 'Expenses').closest('.flex').find('p');
    }
    get summaryDropdown() {
        return this.summarySection.find('.dropdown');
    }
    get summaryDropdownButton() {
        return this.summaryDropdown.find('button').first();
    }
    get summaryDropdownMenu() {
        return this.summaryDropdown.find('div[data-popper-placement="bottom-end"]');
    }
    get summaryDropdownOptions() {
        return this.summaryDropdown.find('ul li');
    }

    // Total Orders section
    get totalOrdersSection() {
        return cy.contains('Total Orders').closest('.panel');
    }
    
    get totalOrdersValue() {
        return this.totalOrdersSection.find('.text-3xl, h5');
    }

    // Recent Activities section
    get recentActivitiesSection() {
        return cy.get('h5').contains('Recent Activities');
    }
    get activityItems() {
        return cy.get('.group.relative.flex.items-center.py-1\\.5');
    }

    // Transactions section
    get transactionsSection() {
        return cy.get('h5').contains('Transactions');
    }
    get transactionItems() {
        return cy.get('.space-y-6 .flex');
    }

    // Recent Orders section
    get recentOrdersSection() {
        return cy.get('h5').contains('Recent Orders').closest('.panel');
    }
    get recentOrderRows() {
        return this.recentOrdersSection.find('tbody tr');
    }
    getRecentOrderInvoiceCell(index) {
        return this.recentOrderRows.eq(index).find('td').eq(2);
    }
    getRecentOrderPriceCell(index) {
        return this.recentOrderRows.eq(index).find('td').eq(3);
    }
    getRecentOrderStatusCell(index) {
        return this.recentOrderRows.eq(index).find('td').eq(4).find('.badge');
    }
    getRecentOrderCustomerCell(index) {
        return this.recentOrderRows.eq(index).find('td').eq(0).find('.whitespace-nowrap');
    }
    getRecentOrderCustomerAvatar(index) {
        return this.recentOrderRows.eq(index).find('td').eq(0).find('img');
    }
    getRecentOrderProductCell(index) {
        return this.recentOrderRows.eq(index).find('td').eq(1);
    }

    // Top Selling Product section
    get topSellingSection() {
        return cy.get('h5').contains('Top Selling Product').closest('.panel');
    }
    get topSellingRows() {
        return this.topSellingSection.find('tbody tr');
    }
    getTopSellingProductCell(index) {
        return this.topSellingRows.eq(index).find('td').eq(0).find('p.whitespace-nowrap');
    }
    getTopSellingProductImage(index) {
        return this.topSellingRows.eq(index).find('td').eq(0).find('img');
    }
    getTopSellingPriceCell(index) {
        return this.topSellingRows.eq(index).find('td').eq(1);
    }
    getTopSellingDiscountCell(index) {
        return this.topSellingRows.eq(index).find('td').eq(2);
    }
    getTopSellingSoldCell(index) {
        return this.topSellingRows.eq(index).find('td').eq(3);
    }
    getTopSellingSourceCell(index) {
        return this.topSellingRows.eq(index).find('td').eq(4).find('button');
    }
    getTopSellingProductCategory(index) {
        return this.topSellingRows.eq(index).find('td').eq(0).find('span.text-xs');
    }

    visit() {
        cy.visit('/');
    }

    selectRevenueTimeframe(timeframe) {
        this.revenueSortingButton.click();
        this.revenueSortingOptions.contains(timeframe).click();
    }
}

export default new DashboardPage();
