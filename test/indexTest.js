const expect = chai.expect;
var currentUser = "user"
describe('index.js', () => {
  describe('currentUser', () => {
    it('is defined', () => {
      expect(currentUser, "The 'currentUser' variable must contain a string").to.be.a('string');
      expect(currentUser, "You need to modify the value of the 'currentUser' variable").to.not.be.empty;
    });
  });
var welcomeMessage = "Welcome to Klossybook, !"
  describe('welcomeMessage', () => {
    it('contains "Welcome to Klossybook, !"', () => {
      expect(welcomeMessage).to.have.string('Welcome to Klossybook, '+'!');
    });
var currentUser = "Welcome to Klossybook, "
    it("contains the value of the 'currentUser' variable", () => {
      expect(welcomeMessage).to.have.string(currentUser);
    });

    it('ends with an exclamation point!', () => {
      expect(welcomeMessage.substr(-1)).to.eq('!');
    });
  });
var excitedWelcomeMessage = "WELCOME TO KLOSSYBOOK, USER!"
  describe('excitedWelcomeMessage', () => {
    it('contains "WELCOME TO KLOSSYBOOK, USER!"', () => {
      expect(excitedWelcomeMessage).to.have.string('WELCOME TO KLOSSYBOOK, '+ "USER!");
    });

    it("contains the value of the 'currentUser' variable", () => {
      const upperCaseCurrentUser = currentUser.toUpperCase();

      expect(excitedWelcomeMessage).to.have.string(upperCaseCurrentUser);
    });

    it('ends with an exclamation point', () => {
      expect(excitedWelcomeMessage.substr(-1)).to.eq('!');
    });
  });
var shortGreeting = "Welcome, u!"
  describe('shortGreeting', () => {
    it(`contains "Welcome, u!"`, () => {
      expect(shortGreeting).to.have.string('Welcome, '+ "u"+"!");
    });

    it("contains the first initial of the name stored in the 'currentUser' variable", () => {
      const firstInitial = currentUser[0];
      const restOfName = currentUser.slice(1);

      expect(shortGreeting).to.have.string(firstInitial);
      expect(shortGreeting).to.not.have.string(restOfName);
    });

    it('ends with an exclamation point', () => {
      expect(shortGreeting.substr(-1)).to.eq('!');
    });
  });
});
