describe("Alert demo", function () {
  it("alert validation", function () {
    cy.visit("http://testautomationpractice.blogspot.com/");
    cy.get("#HTML9 > div.widget-content > button").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Press a button!");
    });
  });

  it("table test", function () {
    cy.visit("http://testautomationpractice.blogspot.com/");
    cy.get("table[name=BookTable]")
      .contains("td", "Learn Java")
      .should("be.visible");
    cy.get(
      "table[name=BookTable] > tbody > tr:nth-child(3) > td:nth-child(2)"
    ).contains("Mukesh");

    cy.get("table[name=BookTable] > tbody > tr td:nth-child(2)").each(
      ($e, index, $list) => {
        const text = $e.text();
        if (text.includes("Amod")) {
          cy.get("table[name=BookTable] > tbody > tr td:nth-child(1)")
            .eq(index)
            .then(function (bname) {
              const bookName = bname.text();
              expect(bookName).to.equal("Master In Java");
            });
        }
      }
    );
  });
});
