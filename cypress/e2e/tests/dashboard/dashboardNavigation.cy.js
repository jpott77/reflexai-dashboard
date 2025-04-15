import DashboardPage from '../../pages/dashboard';

describe('Dashboard', () => {
    const viewports = [
        { name: 'macbook-16'},
        { name: 'macbook-11'},
        { name: 'ipad-2'},
        { name: 'samsung-note9'},
        { name: 'iphone-x'},
        { name: 'iphone-8'},
        { name: 'iphone-3'},
    ];

    const mobileViewports = ['samsung-note9', 'iphone-x', 'iphone-8', 'iphone-3', 'ipad-2'];
    
    const handleMobileMenu = (viewportName) => {
        if (mobileViewports.includes(viewportName)) {
            DashboardPage.collapseIcon.should('be.visible').click();
        }
        DashboardPage.dashboardMenuItemText.click();
    };

    beforeEach(() => {
        DashboardPage.visit();
    });

    it('should load the dashboard page', () => {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
    });

    it('should have the dashboard menu item with correct text', () => {
        DashboardPage.dashboardMenuItem.should('exist');
        DashboardPage.dashboardMenuItemText.should('contain', 'Dashboard');
    });

    describe('Dashboard Navigation', () => {
        viewports.forEach((viewport) => {
            describe(`${viewport.name} viewport`, () => {
                beforeEach(() => {
                    cy.viewport(viewport.name);
                    DashboardPage.visit();
                    handleMobileMenu(viewport.name);
                });

                it('should navigate to Sales dashboard', () => {
                    DashboardPage.salesMenuItem.should('be.visible').click({ force: true });
                    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
                    DashboardPage.activeBreadcrumb.should('contain', 'Sales');
                });

                it('should navigate to Analytics dashboard', () => {
                    DashboardPage.analyticsMenuItem.should('be.visible').click({ force: true });
                    cy.url().should('eq', `${Cypress.config('baseUrl')}/analytics`);
                    DashboardPage.activeBreadcrumb.should('contain', 'Analytics');
                });

                it('should navigate to Finance dashboard', () => {
                    DashboardPage.financeMenuItem.should('be.visible').click({ force: true });
                    cy.url().should('eq', `${Cypress.config('baseUrl')}/finance`);
                    DashboardPage.activeBreadcrumb.should('contain', 'Finance');
                });

                it('should navigate to Crypto dashboard', () => {
                    DashboardPage.cryptoMenuItem.should('be.visible').click({ force: true });
                    cy.url().should('eq', `${Cypress.config('baseUrl')}/crypto`);
                    DashboardPage.activeBreadcrumb.should('contain', 'Crypto');
                });
            });
        });
    });
});