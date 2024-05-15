import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:5500/", id: 67890 }];

describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it(`Add mobilesData is working properly`, () => {
      cy.visit(url);
      cy.get("#product_name").type("Shoe-1");
      cy.get("#product_brand").type("Puma");
      cy.get("#product_price").type(1200);
      cy.get("#product_image").type(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn0_ujBbgMfsiQph_NC7B2wy90NNmGdKPFVdVCxy7&s"
      );
      cy.get("#product_data").submit();

      cy.get("#product_name").type("Shoe-2");
      cy.get("#product_brand").type("Nike");
      cy.get("#product_price").type(3000);
      cy.get("#product_image").type(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn0_ujBbgMfsiQph_NC7B2wy90NNmGdKPFVdVCxy7&s"
      );

      cy.get("#product_data").submit();

      cy.get("#product_name").type("Shoe-3");
      cy.get("#product_brand").type("Puma");
      cy.get("#product_price").type(8000);
      cy.get("#product_image").type(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn0_ujBbgMfsiQph_NC7B2wy90NNmGdKPFVdVCxy7&s"
      );

      cy.get("#product_data").submit();

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Adding product data is working properly in local storage-2`, () => {
      cy.visit(url);
      let items = JSON.parse(localStorage.getItem("data"));
      expect(items.length).to.equal(3);
      expect(items[0].name.trim()).to.equal("Shoe-1");
      expect(items[0].brand.trim()).to.equal("Puma");
      expect(items[0].price).to.equal(1200);
      expect(items[0].image.trim()).to.equal(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn0_ujBbgMfsiQph_NC7B2wy90NNmGdKPFVdVCxy7&s"
      );

      cy.get("#product_name").type("Shoe-4");
      cy.get("#product_brand").type("Reebok");
      cy.get("#product_price").type(999);
      cy.get("#product_image").type(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn0_ujBbgMfsiQph_NC7B2wy90NNmGdKPFVdVCxy7&s"
      );

      cy.get("#product_data").submit();

      cy.get("#product_name").type("Shoe-5");
      cy.get("#product_brand").type("Puma");
      cy.get("#product_price").type(4999);
      cy.get("#product_image").type(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn0_ujBbgMfsiQph_NC7B2wy90NNmGdKPFVdVCxy7&s"
      );

      cy.get("#product_data").submit();

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("All data in Local-Storage is showing properly on DOM", () => {
      cy.visit(url);
      cy.get("#inventory").click();

      cy.location("pathname").should("eq", "/inventory.html");
      cy.get("#container").children().should("have.length", 5);
      cy.get(".card").should("have.length", 5);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Clicking remove button should remove product from Local-Storage", () => {
      cy.visit(url + "inventory.html");

      cy.get(".remove")
        .eq(1)
        .click()
        .then(() => {
          const items = JSON.parse(localStorage.getItem("data"));
          expect(items.length).to.equal(4);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Clicking remove button should remove product from DOM`, () => {
      cy.get(".remove")
        .eq(0)
        .click()
        .then(() => {
          cy.get("#container").children().should("have.length", 3);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Clicking Filter Price > 1000 is working properly on DOM`, () => {
      cy.visit(url + "inventory.html");
      cy.get("#filterGreater").click();
      cy.wait(5000);
      cy.get(".price").then((x) => {
        let sorted = true;
        for (const el of x) {
          if (+el.innerText < 1000) {
            sorted = false;
          }
        }

        assert.isTrue(sorted);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Clicking Filter Price < 1000 is working properly on DOM`, () => {
      cy.visit(url + "inventory.html");
      cy.get("#filterLess").click();
      cy.wait(5000);
      cy.get(".price").then((x) => {
        let sorted = true;
        for (const el of x) {
          if (+el.innerText > 1000) {
            sorted = false;
          }
        }

        assert.isTrue(sorted);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });

      console.log(acc_score);
      //////////////////
    });
  });
});
