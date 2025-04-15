import DashboardPage from '../../pages/dashboard';
import { topSellingProducts, sourceColors } from '../../data/topSellingProducts.data';

describe('Sales Dashboard Categories', () => {
    beforeEach(() => {
        DashboardPage.visit();
    });

    describe('Revenue Section', () => {
        it('should display revenue section with correct data', () => {
            DashboardPage.revenueSection.should('be.visible');
            DashboardPage.totalProfit.should('contain', '$10,840');
            DashboardPage.revenueChart.should('be.visible');
        });

        describe('Revenue Sorting Dropdown', () => {
            beforeEach(() => {
                DashboardPage.revenueSortingDropdown.should('be.visible');
            });

            it('should show dropdown menu on click', () => {
                DashboardPage.revenueSortingButton.click();
                DashboardPage.revenueSortingMenu.should('be.visible');
            });

            it('should contain Weekly, Monthly, and Yearly options', () => {
                DashboardPage.revenueSortingButton.click();
                DashboardPage.revenueSortingOptions.should('have.length', 3);
                DashboardPage.revenueSortingOptions.should('contain', 'Weekly')
                    .and('contain', 'Monthly')
                    .and('contain', 'Yearly');
            });

            it('should be able to select different timeframes', () => {
                // Test Weekly selection
                DashboardPage.selectRevenueTimeframe('Weekly');
                DashboardPage.revenueChart.should('be.visible');

                // Test Monthly selection
                DashboardPage.selectRevenueTimeframe('Monthly');
                DashboardPage.revenueChart.should('be.visible');

                // Test Yearly selection
                DashboardPage.selectRevenueTimeframe('Yearly');
                DashboardPage.revenueChart.should('be.visible');
            });
        });
    });

    describe('Sales By Category Section', () => {
        it('should display sales by category section with correct data', () => {
            DashboardPage.salesByCategorySection.should('be.visible');
            DashboardPage.salesByCategoryChart.should('be.visible');
            DashboardPage.categoryTotal.should('contain', '1992');
        });

        it('should display all category segments', () => {
            DashboardPage.salesByCategoryLegendItems.should('have.length', 3);
            DashboardPage.salesByCategoryLegendItems.should('contain', 'Apparel')
                .and('contain', 'Sports')
                .and('contain', 'Others');
        });
    });

    describe('Daily Sales Section', () => {
        it('should display daily sales section with chart', () => {
            DashboardPage.dailySalesSection.should('be.visible');
            DashboardPage.dailySalesChart.should('be.visible');
        });
    });

    describe('Summary Section', () => {
        it('should display summary section with correct values', () => {
            DashboardPage.summarySection.should('be.visible');
            DashboardPage.incomeValue.should('contain', '$92,600');
            DashboardPage.profitValue.should('contain', '$37,515');
            DashboardPage.expensesValue.should('contain', '$55,085');
        });

        describe('Summary Dropdown', () => {
            beforeEach(() => {
                DashboardPage.summaryDropdown.should('be.visible');
            });

            it('should show dropdown menu on click', () => {
                DashboardPage.summaryDropdownButton.click();
                DashboardPage.summaryDropdownMenu.should('be.visible');
            });

            it('should contain View Report, Edit Report, and Mark as Done options', () => {
                DashboardPage.summaryDropdownButton.click();
                DashboardPage.summaryDropdownOptions.should('have.length', 3);
                DashboardPage.summaryDropdownOptions.should('contain', 'View Report')
                    .and('contain', 'Edit Report')
                    .and('contain', 'Mark as Done');
            });
        });
    });

    describe('Total Orders Section', () => {
        it('should display correct total orders', () => {
            DashboardPage.totalOrdersSection.should('be.visible');
            DashboardPage.totalOrdersValue.should('contain', '3,192');
        });
    });

    describe('Recent Activities Section', () => {
        it('should display recent activities with items', () => {
            DashboardPage.recentActivitiesSection.should('be.visible');
            DashboardPage.activityItems.should('have.length.at.least', 1);
        });
    });

    describe('Transactions Section', () => {
        it('should display transactions with correct data', () => {
            DashboardPage.transactionsSection.should('be.visible');
            DashboardPage.transactionItems.should('have.length.at.least', 1);
        });
    });

    describe('Recent Orders Section', () => {
        it('should display recent orders table with data', () => {
            DashboardPage.recentOrdersSection.should('be.visible');
            DashboardPage.recentOrderRows.should('have.length.at.least', 1);
        });

        it('validates invoice format in each row', () => {
            DashboardPage.recentOrderRows.each((_, index) => {
                DashboardPage.getRecentOrderInvoiceCell(index)
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim()).to.match(/^#\d{5}$/);
                    });
            });
        });

        it('validates price format in each row', () => {
            DashboardPage.recentOrderRows.each((_, index) => {
                DashboardPage.getRecentOrderPriceCell(index)
                    .invoke('text')
                    .then((price) => {
                        expect(price.trim()).to.match(/^\$\d+\.\d{2}$/);
                    });
            });
        });

        it('validates status value in each row', () => {
            DashboardPage.recentOrderRows.each((_, index) => {
                DashboardPage.getRecentOrderStatusCell(index)
                    .invoke('text')
                    .then((status) => {
                        expect(status.trim()).to.be.oneOf(['Paid', 'Shipped']);
                    });
            });
        });

        it('validates status badge colors', () => {
            DashboardPage.recentOrderRows.each((_, index) => {
                DashboardPage.getRecentOrderStatusCell(index)
                    .then(($badge) => {
                        const status = $badge.text().trim();
                        if (status === 'Paid') {
                            expect($badge).to.have.class('bg-success');
                        } else if (status === 'Shipped') {
                            expect($badge).to.have.class('bg-secondary');
                        }
                    });
            });
        });

        it('validates customer information', () => {
            DashboardPage.recentOrderRows.each((_, index) => {
                // Check customer name
                DashboardPage.getRecentOrderCustomerCell(index)
                    .should('not.be.empty');

                // Check customer avatar
                DashboardPage.getRecentOrderCustomerAvatar(index)
                    .should('have.attr', 'src')
                    .and('include', '/images/profile-');
            });
        });

        it('validates product names is not empty', () => {
            DashboardPage.recentOrderRows.each((_, index) => {
                DashboardPage.getRecentOrderProductCell(index)
                    .should('not.be.empty');
            });
        });
    });

    describe('Top Selling Product Section', () => {
        beforeEach(() => {
            DashboardPage.topSellingSection.should('be.visible');
        });

        it('should display top selling products table with data', () => {
            DashboardPage.topSellingRows.should('have.length', 5);
        });

        it('validates product information format', () => {
            DashboardPage.topSellingRows.each((_, index) => {
                // Check product image
                DashboardPage.getTopSellingProductImage(index)
                    .should('have.attr', 'src')
                    .and('include', '/images/product-');

                // Check product name and category
                DashboardPage.getTopSellingProductCell(index).should('not.be.empty');
                DashboardPage.getTopSellingProductCategory(index).should('not.be.empty')
                    .and('have.class', 'text-xs');
            });
        });

        it('validates price format', () => {
            DashboardPage.topSellingRows.each((_, index) => {
                DashboardPage.getTopSellingPriceCell(index)
                    .invoke('text')
                    .then((price) => {
                        expect(price.trim()).to.match(/^\$\d+\.\d{2}$/);
                    });
            });
        });

        it('validates discount format', () => {
            DashboardPage.topSellingRows.each((_, index) => {
                DashboardPage.getTopSellingDiscountCell(index)
                    .invoke('text')
                    .then((discount) => {
                        expect(discount.trim()).to.match(/^\$\d+\.\d{2}$/);
                    });
            });
        });

        it('validates sold quantity is a number', () => {
            DashboardPage.topSellingRows.each((_, index) => {
                DashboardPage.getTopSellingSoldCell(index)
                    .invoke('text')
                    .then((sold) => {
                        expect(Number(sold.trim())).to.be.a('number');
                        expect(Number(sold.trim())).to.be.greaterThan(0);
                    });
            });
        });

        it('validates source types and their colors', () => {
            DashboardPage.topSellingRows.each((_, index) => {
                DashboardPage.getTopSellingSourceCell(index).then(($source) => {
                    const sourceText = $source.text().trim();
                    expect(Object.keys(sourceColors)).to.include(sourceText);
                    expect($source).to.have.class(sourceColors[sourceText]);
                });
            });
        });

        it('validates specific product data', () => {
            topSellingProducts.forEach((expected, index) => {
                DashboardPage.getTopSellingProductCell(index).should('contain', expected.name);
                DashboardPage.getTopSellingProductCategory(index).should('contain', expected.category);
                DashboardPage.getTopSellingPriceCell(index).should('contain', expected.price);
                DashboardPage.getTopSellingDiscountCell(index).should('contain', expected.discount);
                DashboardPage.getTopSellingSoldCell(index).should('contain', expected.sold);
                DashboardPage.getTopSellingSourceCell(index).should('contain', expected.source);
            });
        });
    });
});
