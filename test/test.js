
describe("test to check validation of form fields ", function () {

  beforeEach(function () {
    var fixture = '<div id="test"><title>jQuery Demo</title>' +
        '<form>' +
        'First name:<br>' +
        ' <input class="test" id="name" type="text" name="firstname">' +
        '</br>' +
        '<p> Last name:</p>' +
        '<input class="test" id="lastname"  type="text" name="lastname">' +
        '<br><br>' +
        '</form> </div>';

    document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
});

afterEach(function() {
  document.body.removeChild(document.getElementById('test'));
});

    it("Should detect failed vailation status", function () {
      //given
       document.getElementById('name').value = "valuse";

       //when 
       $('.test').validate(/^[A-Z]/).mark();
       $('#name').keyup();

       //then
        expect(document.getElementById('name').classList).toContain("invalid");
        expect(document.getElementById('name').style.backgroundColor).toBe("red");
    });

    it("Should detect positive vailation status", function () {
      //given
       document.getElementById('name').value = "Valuse";

       //when 
       $('.test').validate(/^[A-Z]/).mark();
       $('#name').keyup();
        //then
        expect(document.getElementById('name').classList).toContain("valid");
        expect(document.getElementById('name').style.backgroundColor).toBe("green");
    });

    it("Should detect both vailation status", function () {
      //given
       document.getElementById('name').value = "Valuse";
       document.getElementById('lastname').value = "valuse";

       //when 
       $('.test').validate(/^[A-Z]/).mark();
       $('#name').keyup();
       $('#lastname').keyup();

       //then
        expect(document.getElementById('name').classList).toContain("valid");
        expect(document.getElementById('name').style.backgroundColor).toBe("green");

        expect(document.getElementById('lastname').classList).toContain("invalid");
        expect(document.getElementById('lastname').style.backgroundColor).toBe("red");
    });
});
