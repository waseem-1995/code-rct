import data from "../../submissionData.json";
const { default: axios } = require("axios");
const getAppReducer = (win) => win.store.getState();

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Evaluation RCT-201-B23-C3", () => {
    let acc_score = 1;

    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) !== "/") {
        url = url + "/";
      }
    });

    afterEach(() => {
      acc_score = Number(acc_score.toFixed(2));
    });

    //READ - Get request
    it("should have correct redux structure format", () => {
      cy.window().then(getAppReducer).should("deep.equal", {
        posts: [],
        isLoading: false,
        isError: false,
        activePage: 1,
        perPage: 5,
      });
    });

    //1 mark
    it("should make the GET request to show the posts in the UI", () => {
      cy.intercept("GET", "**/posts", { fixture: "boilerplatedb.json" }).as(
        "posts"
      );
      cy.visit(url);
      cy.wait("@posts");
      cy.then(() => {
        acc_score += 0.5;
      });
      cy.get("[data-testid=perPostWrapper]").should("exist");
      cy.window().then(getAppReducer).its("posts").should("have.length", 50);
      cy.then(() => {
        acc_score += 0.5;
      });
    });

    //POST request
    //1 mark
    it("should be able to add a post to the db.json file", () => {
      cy.intercept("POST", "**/posts", {
        id: 100,
        title: "Testing 1",
        liked: false,
      }).as("postRequest");

      cy.get("[data-testid=addTextArea]").clear().type("Testing 1");
      cy.get("[data-testid=addPostBtn]").click();
      cy.wait("@postRequest");
      cy.then(() => {
        acc_score += 1;
      });
    });

    //2 mark
    it("should add the post at the very first of the list in the UI", () => {
      cy.intercept("POST", "**/posts", {
        id: 100,
        title: "Testing 1",
        liked: false,
      }).as("postRequest");
      cy.visit(url);
      cy.get("[data-testid=addTextArea]").clear().type("Testing 1");
      cy.get("[data-testid=addPostBtn]").click();
      cy.wait("@postRequest");
      cy.get("[data-testid=perPostWrapper]")
        .first()
        .should("have.text", "Testing 1");
      cy.then(() => {
        acc_score += 2;
      });
    });

    //PATCH
    //1 marks
    it("should make a PATCH request to toggle the like icon", () => {
      cy.intercept("PATCH", "**/posts/*", {
        id: 1,
        title: "First post",
        liked: true,
      }).as("patchRequest");
      cy.get("[data-testid=likePostDiv]").first().click();
      cy.wait("@patchRequest");
      cy.then(() => {
        acc_score += 1;
      });
    });

    //1 marks
    it("should show the red color liked icon, if the liked status is true", () => {
      cy.intercept("PATCH", "**/posts/*", {
        id: 2,
        title: "qui est esse",
        liked: true,
      }).as("patchRequest");
      cy.get("[data-testid=likePostDiv]").eq(1).click();
      cy.wait("@patchRequest");
      cy.get("[data-testid=likedIcon]")
        .should("exist")
        .should("have.length", 1);
      cy.then(() => {
        acc_score += 1;
      });
    });

    //Pagination
    //1 marks
    it("By default: 10 buttons should be rendered. Page 1 should be active. Prev button should not be present in the UI: Next button should be present in the UI ", () => {
      cy.get("[data-testid=btn]").should("have.length", 10);
      cy.get("[data-testid=btn]").eq(0).should("have.class", "activeBtn");
      cy.get("[data-testid=prevBtn]").should("not.exist");
      cy.get("[data-testid=nextBtn").should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    //1 mark
    it("should have working prev and next buttons", () => {
      cy.get("[data-testid=btn]").eq(5).click();
      cy.get("[data-testid=btn]").eq(5).should("have.class", "activeBtn");
      cy.get("[data-testid=nextBtn]").click();
      cy.get("[data-testid=nextBtn]").click();
      cy.get("[data-testid=btn]").eq(7).should("have.class", "activeBtn");
      cy.window().then(getAppReducer).its("activePage").should("equal", 8);
      cy.then(() => {
        acc_score += 0.5;
      });
      cy.get("[data-testid=prevBtn]").click();
      cy.get("[data-testid=btn]").eq(6).should("have.class", "activeBtn");
      cy.then(() => {
        acc_score += 0.5;
      });
    });

    //1 mark
    it('should show the "page" query in the URL, when someone clicks on any pagination button', () => {
      cy.get("[data-testid=btn]").eq(3).click();
      cy.url().should("contain", "page=4");
      cy.get("[data-testid=btn]").eq(6).click();
      cy.url().should("contain", "page=7");
      cy.window().then(getAppReducer).its("activePage").should("equal", 7);
      cy.then(() => {
        acc_score += 1;
      });
    });

    //2 marks
    it("should persist the activePage and the query on the URL with page refresh as well", () => {
      cy.get("[data-testid=btn]").eq(5).click();
      cy.url().should("contain", "page=6");
      cy.visit(`${url}?page=9`);
      cy.url().should("contain", "page=9");
      cy.get("[data-testid=btn]").eq(8).should("have.class", "activeBtn");
      cy.window().then(getAppReducer).its("activePage").should("equal", 9);
      cy.then(() => {
        acc_score += 2;
      });
    });

    //1 marks
    it("should increase the pagination buttons, incase new posts are added", () => {
      cy.intercept("POST", "**/posts", {
        id: 100,
        title: "Testing 1",
        liked: false,
      }).as("postRequest");

      cy.get("[data-testid=addTextArea]").clear().type("Testing 1");
      cy.get("[data-testid=addPostBtn]").click();
      cy.wait("@postRequest");
      cy.get("[data-testid=btn]").should("have.length", 11);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Generate Score", async () => {
      console.log(`Final Score:`, acc_score);
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
