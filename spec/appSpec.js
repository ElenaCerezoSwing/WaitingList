describe("the application", function () {

    var app;

    beforeEach(function () {
        app = application();
        app.start();

    });

    it("contains something or nothing", function () {
        let users = [];
        const addNewUserButton = document.getElementById('addNewUserButton');

        expect(app.users.length).toEqual(0);
        addNewUserButton.click();
        expect(app.users.length).toEqual(1);


    });
});



