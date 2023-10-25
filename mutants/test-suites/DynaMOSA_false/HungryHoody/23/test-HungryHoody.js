const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodydmeKSi8 = await HungryHoody.new({from: accounts[3]});
		const uint68s77x = BigInt("1669")
		const addressJK1wDc2 = accounts[1]
		const addressFiyoBF = accounts[2]
		const addressy8uw2KY = accounts[3]
		const addressQ9zPp0 = "0x0000000000000000000000000000000000000001"
		const addressaEzbHWS = accounts[2]
		const uintiq7vTZX = BigInt("59")
		const uintSVUeOW = BigInt("719")
		const uintFHvKO4 = BigInt("1562")
		const uintFIu3rpX = BigInt("146")
//		const boolyJovKXP = await HungryHoodydmeKSi8.transfer.call(addressJK1wDc2, uint68s77x, {from: accounts[2]});
//		const uintaZuTGcN = await HungryHoodydmeKSi8.allowance.call(addressy8uw2KY, addressFiyoBF, {from: accounts[4]});
//		const uintFqNQw0 = await HungryHoodydmeKSi8.allowance.call(addressaEzbHWS, addressQ9zPp0, {from: accounts[0]});
//		const uintUKCjMuC = await HungryHoodydmeKSi8.safeAdd.call(uintSVUeOW, uintiq7vTZX, {from: accounts[5]});
//		const uintGPCORi = await HungryHoodydmeKSi8.safeMul.call(uintFIu3rpX, uintFHvKO4, {from: accounts[2]});

		await expect(HungryHoodydmeKSi8.transfer.call(addressJK1wDc2, uint68s77x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyfyuLih4 = await HungryHoody.new({from: accounts[4]});
		const uintkB4MO7F = BigInt("5")
		const address647Flm = accounts[1]
		const uintAocmsog = BigInt("37")
		const uintzI3heZ = BigInt("1612")
		const boolKv2B4P = await HungryHoodyfyuLih4.approve.call(address647Flm, uintkB4MO7F, {from: accounts[4]});
		const uintQIFoXgW = await HungryHoodyfyuLih4.safeSub.call(uintzI3heZ, uintAocmsog, {from: accounts[0]});

		assert.equal(boolKv2B4P, true)
		assert.equal(uintQIFoXgW, BigInt("1575"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyhtCXAPG = await HungryHoody.new({from: accounts[0]});
		const addressWh9SAS = "0x0000000000000000000000000000000000000001"
		const uintN0Piv2T = BigInt("1142")
		const uintThrhAA3 = BigInt("1656")
		const uintwKk4cxb = BigInt("1245")
		const addressGt2fof = accounts[0]
		const addressrtWyAJT = accounts[2]
		const uintFc6bjjk = await HungryHoodyhtCXAPG.balanceOf.call(addressWh9SAS, {from: accounts[0]});
		const uintgLEAyz = await HungryHoodyhtCXAPG.safeDiv.call(uintThrhAA3, uintN0Piv2T, {from: accounts[2]});
//		const boolunxEMzw = await HungryHoodyhtCXAPG.transfer.call(addressGt2fof, uintwKk4cxb, {from: "0x0000000000000000000000000000000000000001"});
//		const uintbQMQ0vS = await HungryHoodyhtCXAPG.balanceOf.call(addressrtWyAJT, {from: accounts[2]});

		assert.equal(uintFc6bjjk, BigInt("0"))
		assert.equal(uintgLEAyz, BigInt("1"))
		await expect(HungryHoodyhtCXAPG.transfer.call(addressGt2fof, uintwKk4cxb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyvdH0Y65 = await HungryHoody.new({from: accounts[0]});
		const uintFEDqKv6 = BigInt("1420")
		const uintG9ypb5 = BigInt("1118")
		const addresswps4kz = accounts[2]
		const uintKjExrs = await HungryHoodyvdH0Y65.safeDiv.call(uintG9ypb5, uintFEDqKv6, {from: accounts[3]});
		const uintPreJFe = await HungryHoodyvdH0Y65.totalSupply.call({from: accounts[0]});
		const uintPmaXGXG = await HungryHoodyvdH0Y65.balanceOf.call(addresswps4kz, {from: accounts[4]});

		assert.equal(uintKjExrs, BigInt("0"))
		assert.equal(uintPmaXGXG, BigInt("0"))
		assert.equal(uintPreJFe, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyAQc64AX = await HungryHoody.new({from: accounts[0]});
		const uintF6cxejb = BigInt("1781")
		const addressxo6hv6U = accounts[4]
		const addressweah6il = accounts[2]
		const addressV55ueE5 = accounts[3]
		const boolysD8BIA = await HungryHoodyAQc64AX.approve.call(addressxo6hv6U, uintF6cxejb, {from: accounts[0]});
		const uintOG5hg8r = await HungryHoodyAQc64AX.allowance.call(addressV55ueE5, addressweah6il, {from: accounts[3]});
		const uintyAkooHx = await HungryHoodyAQc64AX.totalSupply.call({from: accounts[0]});
		const uintFaVvvfq = await HungryHoodyAQc64AX.totalSupply.call({from: accounts[2]});
		const uintYjNJwS2 = await HungryHoodyAQc64AX.totalSupply.call({from: accounts[4]});

		assert.equal(boolysD8BIA, true)
		assert.equal(uintFaVvvfq, BigInt("25000000000000000000"))
		assert.equal(uintOG5hg8r, BigInt("0"))
		assert.equal(uintYjNJwS2, BigInt("25000000000000000000"))
		assert.equal(uintyAkooHx, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyE0X1F5I = await HungryHoody.new({from: accounts[0]});
		const addressgRuLOgC = accounts[0]
		const uintHBle7T4 = BigInt("612")
		const addressvomA6fH = accounts[2]
		const uintharweRR = BigInt("1506")
		const addressrxvOjTS = accounts[1]
		const uintpLqWnMo = BigInt("34")
		const uintkOfNNHl = BigInt("1884")
		const uintEk6pxQj = await HungryHoodyE0X1F5I.balanceOf.call(addressgRuLOgC, {from: accounts[1]});
		const boolLpPcOe = await HungryHoodyE0X1F5I.transfer.call(addressvomA6fH, uintHBle7T4, {from: accounts[0]});
		const boolLM9Qz3B = await HungryHoodyE0X1F5I.transfer.call(addressrxvOjTS, uintharweRR, {from: accounts[0]});
		const uintheXDhTY = await HungryHoodyE0X1F5I.safeSub.call(uintkOfNNHl, uintpLqWnMo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLM9Qz3B, true)
		assert.equal(boolLpPcOe, true)
		assert.equal(uintEk6pxQj, BigInt("25000000000000000000"))
		assert.equal(uintheXDhTY, BigInt("1850"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyAQc64AX = await HungryHoody.new({from: accounts[0]});
		const uintCrMZqyP = BigInt("1781")
		const addressn6aMO05 = accounts[4]
		const uintb9kFcc4 = BigInt("1871")
		const uintzFRsNZM = BigInt("1232")
		const uinteX1d05M = BigInt("1285")
		const uintjK2B8sg = BigInt("1018")
		const addressNOZEPY6 = accounts[2]
		const addressT3GE8Oy = accounts[4]
		const uintTb2JjRU = BigInt("829")
		const addressUOiOCAT = accounts[3]
		const addressjzRLht0 = accounts[2]
		const boolysD8BIA = await HungryHoodyAQc64AX.approve.call(addressn6aMO05, uintCrMZqyP, {from: accounts[0]});
		const uinth0Dhk0J = await HungryHoodyAQc64AX.safeMul.call(uintzFRsNZM, uintb9kFcc4, {from: accounts[0]});
		const uintD0HKsaM = await HungryHoodyAQc64AX.safeDiv.call(uintjK2B8sg, uinteX1d05M, {from: accounts[4]});
		const uintOG5hg8r = await HungryHoodyAQc64AX.allowance.call(addressT3GE8Oy, addressNOZEPY6, {from: accounts[3]});
		const uintyAkooHx = await HungryHoodyAQc64AX.totalSupply.call({from: accounts[0]});
		const uintFaVvvfq = await HungryHoodyAQc64AX.totalSupply.call({from: accounts[2]});
//		const bool5yyeF5 = await HungryHoodyAQc64AX.transferFrom.call(addressjzRLht0, addressUOiOCAT, uintTb2JjRU, {from: accounts[1]});
//		const uintYjNJwS2 = await HungryHoodyAQc64AX.totalSupply.call({from: accounts[4]});

		assert.equal(boolysD8BIA, true)
		assert.equal(uintD0HKsaM, BigInt("0"))
		assert.equal(uintFaVvvfq, BigInt("25000000000000000000"))
		assert.equal(uintOG5hg8r, BigInt("0"))
		assert.equal(uinth0Dhk0J, BigInt("2305072"))
		assert.equal(uintyAkooHx, BigInt("25000000000000000000"))
		await expect(HungryHoodyAQc64AX.transferFrom.call(addressjzRLht0, addressUOiOCAT, uintTb2JjRU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyCzES2is = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM5tSJk6 = BigInt("462")
		const uinteqdnRnL = BigInt("1732")
		const addressfCkQOSP = accounts[0]
		const addressLb1O7OC = accounts[3]
		const addresspW68FF = accounts[1]
		const uintXwLSuno = BigInt("629")
		const uintoMvZIc = BigInt("1952")
		const uinthXCgsWi = BigInt("542")
		const uintx9TY6lA = BigInt("72")
		const uintxLcHM3e = await HungryHoodyCzES2is.safeDiv.call(uinteqdnRnL, uintM5tSJk6, {from: accounts[1]});
		const uintngkPLXN = await HungryHoodyCzES2is.allowance.call(addressLb1O7OC, addressfCkQOSP, {from: accounts[2]});
		const uintzPXqojZ = await HungryHoodyCzES2is.balanceOf.call(addresspW68FF, {from: "0x0000000000000000000000000000000000000001"});
		const uintwyIgzUf = await HungryHoodyCzES2is.safeSub.call(uintoMvZIc, uintXwLSuno, {from: accounts[4]});
		const uintgn02IrV = await HungryHoodyCzES2is.safeMul.call(uintx9TY6lA, uinthXCgsWi, {from: accounts[5]});
	});
})