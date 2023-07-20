/* eslint-disable no-undef */
/// < require type="Cypress" />
const { FRONTEND_URL } = require('../../env-test.js');

before(('Reset clubs', () => {
  cy.visit('/');

  cy.get('#reset-clubs-main-button').click();

  cy.get('#reset-clubs-confirmation-main-button-modal').click();

  cy.wait(1000);

  cy.get('#reset-clubs-notification-main-button-modal').click();
}));

describe('Check that the main ui is shown correctly', () => {
  it('Check that the navigation is shown', () => {
    cy.get('.navbar');

    cy.get('.navbar div img');

    cy.get('.navbar div a').contains('Football Clubs');
  });

  it('Check that the title is shown', () => {
    cy.get('h1').contains('There are 22 clubs');
  });

  it('Check that the buttons are shown', () => {
    cy.get('#create-club-main-button');

    cy.get('#reset-clubs-main-button');
  });

  it('Check that the clubs table is shown', () => {
    const TOTAL_CLUBS = 22;

    cy.get('tr.w-100').should('have.length', TOTAL_CLUBS);
  });
});

describe('Check that the main links are working correctly', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the create club link', () => {
    cy.get('#create-club-main-button').click();

    cy.url().should('eq', `${FRONTEND_URL}/pages/create.html`);
  });

  it('Check a random club logo link', () => {
    cy.get('#ARS-logo').click();

    cy.url().should('eq', `${FRONTEND_URL}/pages/view.html?tla=ARS`);
  });

  it('Check a random view club link', () => {
    cy.get('#view-EVE').click();

    cy.url().should('eq', `${FRONTEND_URL}/pages/view.html?tla=EVE`);
  });

  it('Check a random update club link', () => {
    cy.get('#update-TOT').click();

    cy.url().should('eq', `${FRONTEND_URL}/pages/update.html?tla=TOT`);
  });
});

describe('Check that the main buttons are working correctly', () => {
  it('Visit the main page', () => {
    cy.visit('/');
  });

  it('Check that the delete club button needs confirmation', () => {
    cy.get('#delete-LIV').click();

    cy.get('#delete-club-confirmation-secondary-button-modal').click();

    cy.reload();

    cy.get('#delete-LIV');
  });

  it('Check a random delete club button', () => {
    cy.get('#delete-LIV').click();

    cy.get('#delete-club-confirmation-main-button-modal').click();

    cy.wait(1000);

    cy.get('#delete-club-notification-main-button-modal').click();

    cy.get('#delete-LIV').should('not.exist');
  });

  it('Check that the reset clubs button needs confirmation', () => {
    cy.get('#reset-clubs-main-button').click();

    cy.get('#reset-clubs-confirmation-secondary-button-modal').click();

    cy.visit('/');

    cy.get('#delete-LIV').should('not.exist');
  });

  it('Check the reset clubs button', () => {
    cy.get('#reset-clubs-main-button').click();

    cy.get('#reset-clubs-confirmation-main-button-modal').click();

    cy.wait(1000);

    cy.get('#reset-clubs-notification-main-button-modal').click();

    cy.get('#delete-LIV');
  });
});

describe('Check that the view ui is shown correctly', () => {
  it('Visit the Arsenal view page', () => {
    cy.visit('/pages/view.html?tla=ARS');
  });

  it('Check that the navigation is shown', () => {
    cy.get('.navbar');

    cy.get('.navbar div img');

    cy.get('.navbar div a').contains('Football Clubs');
  });

  it('Check that the header is shown', () => {
    cy.get('header');

    cy.get('header img');

    cy.get('header h1');

    cy.get('header p');
  });

  it('Check that the club info list is shown', () => {
    const INFO_SECTIONS = 7;

    cy.get('li.list-group-item').should('have.length', INFO_SECTIONS);
  });

  it('Check that the buttons are shown', () => {
    cy.get('#edit-club-main-button');

    cy.get('#delete-club-main-button');
  });
});

describe('Check that the view links are working correctly', () => {
  it('Check the edit club button', () => {
    cy.get('#edit-club-main-button').click();

    cy.url().should('eq', `${FRONTEND_URL}/pages/update.html?tla=ARS`);
  });
});

describe('Check that the view buttons are working correctly', () => {
  it('Check that the delete club button needs confirmation', () => {
    cy.get('#delete-club-main-button').click();

    cy.get('#delete-club-confirmation-secondary-button-modal');

    cy.visit('/');

    cy.get('#ARS-logo');
  });

  it('Check the delete club button', () => {
    cy.visit('/pages/view.html?tla=ARS');

    cy.get('#delete-club-main-button').click();

    cy.get('#delete-club-confirmation-main-button-modal').click();

    cy.wait(1000);

    cy.get('#delete-club-notification-main-button-modal').click();

    cy.get('#ARS-logo').should('not.exist');
  });
});

describe('Check that the update ui is shown correctly', () => {
  it('Visit the Aston Villa update page', () => {
    cy.visit('/pages/update.html?tla=AST');
  });

  it('Check that the navigation is shown', () => {
    cy.get('.navbar');

    cy.get('.navbar div img');

    cy.get('.navbar div a').contains('Football Clubs');
  });

  it('Check that the title is shown', () => {
    cy.get('h1.title').contains('Update Aston Villa');
  });

  it('Check that the form is shown', () => {
    cy.get('#update-form');
  });

  it('Check that the inputs are shown', () => {
    cy.get('#update-form #name');

    cy.get('#update-form #short-Name');

    cy.get('#update-form #TLA');

    cy.get('#update-form #address');

    cy.get('#update-form #venue');

    cy.get('#update-form #club-Colors');

    cy.get('#update-form #founded');

    cy.get('#update-form #website');

    cy.get('#update-form #phone');

    cy.get('#update-form #email');

    cy.get('#update-form #crest');
  });

  it('Check that the selects are shown', () => {
    cy.get('#update-form #area');
  });

  it('Check that the default values are shown', () => {
    cy.get('#update-form #name').should('have.value', 'Aston Villa FC');

    cy.get('#update-form #area').find(':selected').contains('United Kingdom');

    cy.get('#update-form #short-Name').should('have.value', 'Aston Villa');

    cy.get('#update-form #TLA').should('have.value', 'AST');

    cy.get('#update-form #address').should('have.value', 'Villa Park Birmingham B6 6HE');

    cy.get('#update-form #venue').should('have.value', 'Villa Park');

    cy.get('#update-form #club-Colors').should('have.value', 'Claret / Sky Blue');

    cy.get('#update-form #founded').should('have.value', '1872');

    cy.get('#update-form #website').should('have.value', 'http://www.avfc.co.uk');

    cy.get('#update-form #phone').should('have.value', '+44 (0121) 3272299');
  });

  it('Check that the buttons are shown', () => {
    cy.get('#update-club-main-button');

    cy.get('#delete-club-main-button');
  });
});

describe('Check that the update button is working correctly', () => {
  it("Check that isn't working if there are invalid inputs", () => {
    cy.get('#update-form #email').clear();

    cy.get('#update-club-main-button').click();

    cy.get('#update-club-confirmation-modal').should('not.be.visible');
  });

  it('Check that it needs confirmation', () => {
    cy.get('#update-form #email').type('fake@email.com');

    cy.get('#update-club-main-button').click();

    cy.get('#update-club-confirmation-secondary-button-modal').click();

    cy.reload();

    cy.get('#update-form #email').should('have.value', '');
  });

  it("Check that it works if there aren't invalid inputs", () => {
    cy.get('#update-form #email').type('fake@email.com');

    cy.get('#update-club-main-button').click();

    cy.get('#update-club-confirmation-main-button-modal').click();

    cy.wait(1000);

    cy.reload();

    cy.get('#update-form #email').should('have.value', 'fake@email.com');
  });

  it('Check that it stops working if there are invalid inputs', () => {
    cy.get('#update-club-main-button').click();

    cy.get('#update-club-confirmation-modal').should('be.visible');

    // For some reason bootstrap modals can't open and close so fast in this case
    cy.wait(500);

    cy.get('#update-club-confirmation-secondary-button-modal').click();

    cy.get('#update-form #email').clear();

    cy.reload();

    cy.get('#update-club-main-button').click();

    cy.get('#update-club-confirmation-modal').should('not.be.visible');
  });
});

describe('Check that the other buttons are working correctly', () => {
  it('Visit the Aston Villa update page', () => {
    cy.visit('/pages/update.html?tla=AST');
  });

  it('Check that the delete buttons need confirmation', () => {
    cy.get('#delete-club-main-button').click();

    cy.get('#delete-club-confirmation-secondary-button-modal').click();

    cy.reload();

    cy.get('#update-form');
  });

  it('Check the delete button', () => {
    cy.get('#delete-club-main-button').click();

    cy.get('#delete-club-confirmation-main-button-modal').click();

    cy.wait(1000);

    cy.get('#delete-club-notification-main-button-modal').click();

    cy.get('#AST-logo').should('not.exist');
  });
});

describe('Check that the create ui is shown correctly', () => {
  it('Visit the create page', () => {
    cy.visit('/pages/create.html');
  });

  it('Check that the navigation is shown', () => {
    cy.get('.navbar');

    cy.get('.navbar div img');

    cy.get('.navbar div a').contains('Football Clubs');
  });

  it('Check that the title is shown', () => {
    cy.get('h1.title').contains('Create club');
  });

  it('Check that the form is shown', () => {
    cy.get('#create-form');
  });

  it('Check that the inputs are shown', () => {
    cy.get('#create-form #name');

    cy.get('#create-form #short-Name');

    cy.get('#create-form #TLA');

    cy.get('#create-form #address');

    cy.get('#create-form #venue');

    cy.get('#create-form #club-Colors');

    cy.get('#create-form #founded');

    cy.get('#create-form #website');

    cy.get('#create-form #phone');

    cy.get('#create-form #email');

    cy.get('#create-form #crest');
  });

  it('Check that the selects are shown', () => {
    cy.get('#create-form #area');
  });

  it('Check that no default values are shown', () => {
    cy.get('#create-form #name').should('have.value', '');

    cy.get('#create-form #area').find(':selected').contains('--- Select country ---');

    cy.get('#create-form #short-Name').should('have.value', '');

    cy.get('#create-form #TLA').should('have.value', '');

    cy.get('#create-form #address').should('have.value', '');

    cy.get('#create-form #venue').should('have.value', '');

    cy.get('#create-form #club-Colors').should('have.value', '');

    cy.get('#create-form #founded').should('have.value', '');

    cy.get('#create-form #website').should('have.value', '');

    cy.get('#create-form #phone').should('have.value', '');

    cy.get('#create-form #email').should('have.value', '');
  });

  it('Check that the buttons are shown', () => {
    cy.get('#create-club-main-button');

    cy.get('#discard-changes-main-button');
  });
});

describe('Check that the create button is working correctly', () => {
  it("Check that isn't working if there are invalid inputs", () => {
    cy.get('#create-club-main-button').click();

    cy.get('#create-club-confirmation-modal').should('not.be.visible');
  });

  it('Check that it needs confirmation', () => {
    cy.get('#create-form #name').type('FC Bayern Munich');

    cy.get('#create-form #area').select('Germany');

    cy.get('#create-form #short-Name').type('Bayern Munich');

    cy.get('#create-form #TLA').type('BAY');

    cy.get('#create-form #address').type('Säbener Straße, Munich, Bavaria');

    cy.get('#create-form #venue').type('Allianz Arena');

    cy.get('#create-form #club-Colors').type('Red / White');

    cy.get('#create-form #founded').type('1900');

    cy.get('#create-form #website').type('https://fcbayern.com/');

    cy.get('#create-form #email').type('service@fcbayern.com');

    cy.get('#create-form #phone').type('+49 89 699 31-0');

    cy.get('#create-form #crest').selectFile('cypress/fixtures/Bayern.png');

    cy.get('#create-club-main-button').click();

    cy.get('#create-club-confirmation-secondary-button-modal').click();

    cy.visit('/');

    cy.get('#BAY-logo').should('not.exist');
  });

  it('Visit the create page', () => {
    cy.visit('/pages/create.html');
  });

  it('Check that it stops working if there are invalid inputs', () => {
    cy.get('#create-form #name').type('FC Bayern Munich');

    cy.get('#create-form #area').select('Germany');

    cy.get('#create-form #short-Name').type('Bayern Munich');

    cy.get('#create-form #TLA').type('BAY');

    cy.get('#create-form #address').type('Säbener Straße, Munich, Bavaria');

    cy.get('#create-form #venue').type('Allianz Arena');

    cy.get('#create-form #club-Colors').type('Red / White');

    cy.get('#create-form #founded').type('1900');

    cy.get('#create-form #website').type('https://fcbayern.com/');

    cy.get('#create-form #email').type('service@fcbayern.com');

    cy.get('#create-form #phone').type('+49 89 699 31-0');

    cy.get('#create-form #crest').selectFile('cypress/fixtures/Bayern.png');

    cy.get('#create-club-main-button').click();

    cy.get('#create-club-confirmation-modal').should('be.visible');

    // For some reason bootstrap modals can't open and close so fast in this case
    cy.wait(500);

    cy.get('#create-club-confirmation-secondary-button-modal').click();

    cy.get('#create-form #name').clear();

    cy.get('#create-club-main-button').click();

    cy.get('#create-club-confirmation-modal').should('not.be.visible');
  });

  it("Check that work if there aren't invalid inputs", () => {
    cy.get('#create-form #name').type('FC Bayern Munich');

    cy.get('#create-club-main-button').click();

    cy.get('#create-club-confirmation-modal').should('be.visible');

    cy.get('#create-club-confirmation-main-button-modal').click();

    cy.wait(1000);

    cy.get('#create-club-notification-main-button-modal').click();

    cy.get('#BAY-logo');
  });
});

describe('Check that the other buttons are working correctly', () => {
  it('Visit the create page', () => {
    cy.visit('/pages/create.html');
  });

  it('Check the discard button', () => {
    cy.get('#discard-changes-main-button').click();

    cy.url().should('eq', `${FRONTEND_URL}/`);
  });
});

describe('After test cleaning', () => {
  it('Reset clubs', () => {
    cy.visit('/');

    cy.get('#reset-clubs-main-button').click();

    cy.get('#reset-clubs-confirmation-main-button-modal').click();

    cy.wait(1000);

    cy.get('#reset-clubs-notification-main-button-modal').click();
  });
});
