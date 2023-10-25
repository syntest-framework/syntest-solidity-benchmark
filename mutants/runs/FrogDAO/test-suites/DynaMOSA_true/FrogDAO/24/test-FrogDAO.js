const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOPLCJ4U = await FrogDAO.new({from: accounts[3]});
		const addressu6mZyFk = accounts[0]
		const uintXvNC88X = BigInt("410")
		const uintPEoArcE = BigInt("1788")
		const uintn5Psghr = await FrogDAOPLCJ4U.balanceOf.call(addressu6mZyFk, {from: accounts[4]});
		const uintCzZ4sJ = await FrogDAOPLCJ4U.safeMul.call(uintPEoArcE, uintXvNC88X, {from: accounts[5]});
		const uintT9OKGi = await FrogDAOPLCJ4U.totalSupply.call({from: accounts[5]});

		assert.equal(uintCzZ4sJ, BigInt("733080"))
		assert.equal(uintT9OKGi, BigInt("1000000000000000000000000"))
		assert.equal(uintn5Psghr, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAObAqVqsQ = await FrogDAO.new({from: accounts[3]});
		const addressD6e1Et = accounts[2]
		const addressLouU2Xk = accounts[3]
		const uintkJxeoD = BigInt("967")
		const addressjApinsQ = "0x0000000000000000000000000000000000000001"
		const addressA4sgUE = "0x0000000000000000000000000000000000000001"
		const addressQXLh47z = accounts[5]
		const uintzJ3Knd = await FrogDAObAqVqsQ.allowance.call(addressLouU2Xk, addressD6e1Et, {from: accounts[1]});
		const boolryP4RBv = await FrogDAObAqVqsQ.approve.call(addressjApinsQ, uintkJxeoD, {from: accounts[0]});
		const uinteDMZtdB = await FrogDAObAqVqsQ.balanceOf.call(addressA4sgUE, {from: "0x0000000000000000000000000000000000000001"});
		const uintttMrDX = await FrogDAObAqVqsQ.balanceOf.call(addressQXLh47z, {from: accounts[3]});

		assert.equal(boolryP4RBv, true)
		assert.equal(uinteDMZtdB, BigInt("0"))
		assert.equal(uintttMrDX, BigInt("0"))
		assert.equal(uintzJ3Knd, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOinwiHo = await FrogDAO.new({from: accounts[5]});
		const uinttmLd1WW = BigInt("1793")
		const addressvxT6k4E = accounts[3]
		const uintPawujVS = BigInt("914")
		const addressamerbC9 = accounts[1]
		const addresse6dcjD = "0x0000000000000000000000000000000000000001"
		const uintTRYeGjy = BigInt("950")
		const uintpscBmK5 = BigInt("1201")
		const boolWWAA83D = await FrogDAOinwiHo.transfer.call(addressvxT6k4E, uinttmLd1WW, {from: accounts[3]});
		const boolEpQTInL = await FrogDAOinwiHo.transferFrom.call(addresse6dcjD, addressamerbC9, uintPawujVS, {from: accounts[0]});
		const uintnsjBsCm = await FrogDAOinwiHo.safeMul.call(uintpscBmK5, uintTRYeGjy, {from: accounts[1]});

		await expect(FrogDAOinwiHo.transfer.call(addressvxT6k4E, uinttmLd1WW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcY3DepJ = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjNaGBgX = BigInt("530")
		const addressrAbsyx = "0x0000000000000000000000000000000000000001"
		const uintAj0jjRC = BigInt("1799")
		const uintuSICY7G = BigInt("271")
		const uintJIjh6P = BigInt("1996")
		const addressJgPJwm = accounts[3]
		const uintkzZ4O0g = BigInt("125")
		const uintobUZJLM = BigInt("658")
		const addressetE5Uvs = accounts[2]
		const addresssun9Jxk = accounts[1]
		const boolXgxyO9a = await FrogDAOcY3DepJ.transfer.call(addressrAbsyx, uintjNaGBgX, {from: accounts[4]});
		const uintAwYf79y = await FrogDAOcY3DepJ.safeDiv.call(uintuSICY7G, uintAj0jjRC, {from: accounts[4]});
		const boolRWACoZ8 = await FrogDAOcY3DepJ.approve.call(addressJgPJwm, uintJIjh6P, {from: accounts[1]});
		const uintFrQFgkE = await FrogDAOcY3DepJ.safeMul.call(uintobUZJLM, uintkzZ4O0g, {from: accounts[1]});
		const uintbMuJ4rm = await FrogDAOcY3DepJ.allowance.call(addresssun9Jxk, addressetE5Uvs, {from: accounts[2]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOGoQtRVb = await FrogDAO.new({from: accounts[1]});
		const uintd97qq6f = BigInt("1784")
		const uintpIaOUU0 = BigInt("1832")
		const uintZ8geRH9 = BigInt("1078")
		const uintRuSCnrH = BigInt("1351")
		const addressk5kTPtd = accounts[2]
		const addressffNLrRr = accounts[4]
		const uintVZwmz1F = BigInt("981")
		const uintdvcYAUY = BigInt("832")
		const uintePvUfOz = BigInt("1937")
		const uintyHYp4cS = BigInt("1010")
		const uintcD5DnoJ = await FrogDAOGoQtRVb.safeDiv.call(uintpIaOUU0, uintd97qq6f, {from: accounts[1]});
		const uintUPRQZXQ = await FrogDAOGoQtRVb.safeSub.call(uintRuSCnrH, uintZ8geRH9, {from: accounts[4]});
		const uint7SnW92 = await FrogDAOGoQtRVb.allowance.call(addressffNLrRr, addressk5kTPtd, {from: accounts[2]});
		const uintbtiE6ci = await FrogDAOGoQtRVb.safeAdd.call(uintdvcYAUY, uintVZwmz1F, {from: accounts[3]});
		const uintsoLYOdc = await FrogDAOGoQtRVb.safeMul.call(uintyHYp4cS, uintePvUfOz, {from: accounts[2]});

		assert.equal(uint7SnW92, BigInt("0"))
		assert.equal(uintUPRQZXQ, BigInt("273"))
		assert.equal(uintbtiE6ci, BigInt("1813"))
		assert.equal(uintcD5DnoJ, BigInt("1"))
		assert.equal(uintsoLYOdc, BigInt("1956370"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOzRXkDT = await FrogDAO.new({from: accounts[2]});
		const uintGoj9qoH = BigInt("872")
		const addresswJMpvY = accounts[1]
		const addressta569iH = accounts[1]
		const uinty5TBwRp = BigInt("1033")
		const addressFJhhu0O = accounts[3]
		const uintmpj8SLX = BigInt("426")
		const addressIigp6Z = accounts[0]
		const addressxpdV0uy = accounts[6]
		const addressCrvQck3 = accounts[3]
		const uintscnHUg1 = await FrogDAOzRXkDT.totalSupply.call({from: accounts[2]});
		const boolGmfKcTL = await FrogDAOzRXkDT.transferFrom.call(addressta569iH, addresswJMpvY, uintGoj9qoH, {from: "0x0000000000000000000000000000000000000001"});
		const boolQYEYZ5b = await FrogDAOzRXkDT.approve.call(addressFJhhu0O, uinty5TBwRp, {from: accounts[1]});
		const booloaFqxwU = await FrogDAOzRXkDT.approve.call(addressIigp6Z, uintmpj8SLX, {from: accounts[4]});
		const uintJYv5X2w = await FrogDAOzRXkDT.allowance.call(addressCrvQck3, addressxpdV0uy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintscnHUg1, BigInt("1000000000000000000000000"))
		await expect(FrogDAOzRXkDT.transferFrom.call(addressta569iH, addresswJMpvY, uintGoj9qoH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})