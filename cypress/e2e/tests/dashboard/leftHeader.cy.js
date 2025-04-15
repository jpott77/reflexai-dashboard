import DashboardPage from '../../pages/dashboard';
import { headerIcons } from '../../data/headerIcons.data';

describe('Header Icons Navigation', () => {
    beforeEach(() => {
        DashboardPage.visit();
    });

    headerIcons.forEach((icon) => {
        it(`should verify and navigate through ${icon.name} icon`, () => {
            DashboardPage[icon.selector]
                .should('be.visible')
                .and('have.attr', 'href', icon.path)
                .click();
            cy.url().should('include', icon.path);
            
            // Verify page heading
            if (icon.name === 'Calendar') {
                DashboardPage.calendarHeading.should('have.text', 'Calendar');
            } else if (icon.name === 'Todo List') {
                DashboardPage.todoListHeading.should('have.text', 'Todo list');
            }
            
            cy.go('back');
        });
    });
});
