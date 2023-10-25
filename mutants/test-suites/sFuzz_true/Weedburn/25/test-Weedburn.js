const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const string9xqDB0 = "qQc8rzhmnmnhxRJ6YRwApUuWBVg3EjAHSCyDyKQP1WjzIH3VHcH7czpSNehGLrM6CHRkUYNmyk"
		const stringNWf8CV = "4EOalDM8mQPR1XKya4p5VTWM0rJbGyUPDzG6k1eCxWGTzY4mxinVEmQAm2gEMbME"
		const uintmof5z6 = BigInt("130")
		const WeedburnVJOpPG5 = await Weedburn.new(string9xqDB0, stringNWf8CV, uintmof5z6, {from: accounts[3]});
		const addressuWqQu1m = accounts[1]
		const addressuPtqyFA = accounts[4]
		const uintdAmyIz = BigInt("561")
		const addressQNEM3y4 = accounts[0]
		const uint256Sgg0U8 = await WeedburnVJOpPG5.allowance.call(addressuPtqyFA, addressuWqQu1m, {from: accounts[3]});
		const stringInZ0Gr = await WeedburnVJOpPG5.name.call({from: accounts[0]});
		const boolaHM94Zf = await WeedburnVJOpPG5.approve.call(addressQNEM3y4, uintdAmyIz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Weedburn', async () => {
		const Weedburnexpx6A2 = await Weedburn.new({from: accounts[3]});
		const addressRpBqT3w = accounts[1]
		const uintBKgU3j = BigInt("34")
		const addressHMcXP9Y = accounts[2]
		const addressF65djwm = "0x0000000000000000000000000000000000000001"
		const uintZjVTwv8 = BigInt("1086")
		const addressaH9mP1H = accounts[1]
		const uintuV6zsvz = BigInt("16")
		const addresszPjCl6 = accounts[2]
		const uint256mDLBVJ = await Weedburnexpx6A2.balanceOf.call(addressRpBqT3w, {from: accounts[0]});
//		const boolozKva3i = await Weedburnexpx6A2.transferFrom.call(addressF65djwm, addressHMcXP9Y, uintBKgU3j, {from: accounts[5]});
//		const addressgjJbPu = await Weedburnexpx6A2.burnFrom.call(addressaH9mP1H, uintZjVTwv8, {from: accounts[3]});
//		const boolJLjLFX = await Weedburnexpx6A2.increaseAllowance.call(addresszPjCl6, uintuV6zsvz, {from: accounts[4]});
//		await Weedburnexpx6A2.disableLimitMode.call({from: accounts[1]});

		assert.equal(uint256mDLBVJ, BigInt("0"))
		await expect(Weedburnexpx6A2.transferFrom.call(addressF65djwm, addressHMcXP9Y, uintBKgU3j, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnD7ES0Wt = await Weedburn.new({from: accounts[4]});
		const uintdyMS7R = BigInt("563")
		const addresse9qe2Ax = accounts[2]
		const uintMXpc1Gi = BigInt("1980")
		const addresshREsNxD = accounts[4]
		const uintsQFmHYk = BigInt("1758")
		const addressIXEJY4y = accounts[0]
//		const boolCJcmTKx = await WeedburnD7ES0Wt.decreaseAllowance.call(addresse9qe2Ax, uintdyMS7R, {from: accounts[0]});
//		const booloeDh0d0 = await WeedburnD7ES0Wt.increaseAllowance.call(addresshREsNxD, uintMXpc1Gi, {from: accounts[1]});
//		const boolghaoT5e = await WeedburnD7ES0Wt.approve.call(addressIXEJY4y, uintsQFmHYk, {from: accounts[0]});

		await expect(WeedburnD7ES0Wt.decreaseAllowance.call(addresse9qe2Ax, uintdyMS7R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJ9M0cYC = await Weedburn.new({from: accounts[2]});
		const uintJR9ioMo = BigInt("77")
		const uintYMWQ39I = BigInt("963")
		const addressP1z17mx = accounts[1]
		const uintyZemf8t = BigInt("3")
//		const uint256WXzA2t = await WeedburnJ9M0cYC.burn.call(uintJR9ioMo, {from: accounts[5]});
//		const boolhgd39TJ = await WeedburnJ9M0cYC.transfer.call(addressP1z17mx, uintYMWQ39I, {from: accounts[0]});
//		const uint256D01Ul9Y = await WeedburnJ9M0cYC.burn.call(uintyZemf8t, {from: accounts[3]});
//		const uint8rb5MBtg = await WeedburnJ9M0cYC.decimals.call({from: accounts[0]});

		await expect(WeedburnJ9M0cYC.burn.call(uintJR9ioMo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNryw4S = await Weedburn.new({from: accounts[3]});
		const addressFW3hJfM = accounts[0]
		const addresszbWU26n = accounts[1]
		const uintQS52CIe = BigInt("552")
		const addressZUiewrY = accounts[1]
		const uintgEtWDLA = BigInt("771")
		const addressAqbymcV = accounts[1]
		const uint256dmU5NY = await WeedburnNryw4S.allowance.call(addresszbWU26n, addressFW3hJfM, {from: accounts[5]});
//		const addressp7JwRP = await WeedburnNryw4S.burnFrom.call(addressZUiewrY, uintQS52CIe, {from: accounts[2]});
//		await WeedburnNryw4S.disableLimitMode.call({from: accounts[3]});
//		const boolsBHUXRq = await WeedburnNryw4S.decreaseAllowance.call(addressAqbymcV, uintgEtWDLA, {from: accounts[4]});

		assert.equal(uint256dmU5NY, BigInt("0"))
		await expect(WeedburnNryw4S.burnFrom.call(addressZUiewrY, uintQS52CIe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJ9M0cYC = await Weedburn.new({from: accounts[2]});
		const uintjqIiF62 = BigInt("77")
		const uintA4z10t9 = BigInt("963")
		const addressJT5PR7C = accounts[1]
		const uintZtnYmx5 = BigInt("3")
		const uint8ZQCcKo4 = await WeedburnJ9M0cYC.decimals.call({from: accounts[3]});
		const uint256q0rElhD = await WeedburnJ9M0cYC.totalSupply.call({from: accounts[2]});
//		const uint256WXzA2t = await WeedburnJ9M0cYC.burn.call(uintjqIiF62, {from: accounts[5]});
//		const boolhgd39TJ = await WeedburnJ9M0cYC.transfer.call(addressJT5PR7C, uintA4z10t9, {from: accounts[0]});
//		const uint256D01Ul9Y = await WeedburnJ9M0cYC.burn.call(uintZtnYmx5, {from: accounts[3]});
//		await WeedburnJ9M0cYC.enableDevMode.call({from: accounts[1]});
//		const uint8rb5MBtg = await WeedburnJ9M0cYC.decimals.call({from: accounts[0]});

		assert.equal(uint256q0rElhD, BigInt("100000000000000000000000"))
		assert.equal(uint8ZQCcKo4, BigInt("18"))
		await expect(WeedburnJ9M0cYC.burn.call(uintjqIiF62, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJ9M0cYC = await Weedburn.new({from: accounts[2]});
		const uintmi3RTLD = BigInt("77")
		const uintYpcXA2y = BigInt("999")
		const addressubvpLBj = accounts[1]
		const uintQKBRwO = BigInt("3")
		const stringDmjnVj = await WeedburnJ9M0cYC.symbol.call({from: accounts[0]});
//		const uint256WXzA2t = await WeedburnJ9M0cYC.burn.call(uintmi3RTLD, {from: accounts[5]});
//		const boolhgd39TJ = await WeedburnJ9M0cYC.transfer.call(addressubvpLBj, uintYpcXA2y, {from: accounts[0]});
//		const uint256D01Ul9Y = await WeedburnJ9M0cYC.burn.call(uintQKBRwO, {from: accounts[3]});
//		const uint8rb5MBtg = await WeedburnJ9M0cYC.decimals.call({from: accounts[0]});

		assert.equal(stringDmjnVj, "Weedburn")
		await expect(WeedburnJ9M0cYC.burn.call(uintmi3RTLD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNryw4S = await Weedburn.new({from: accounts[3]});
		const addressEI4RjB = accounts[0]
		const addresstgCW0hg = accounts[1]
		const uinteqTrhEd = BigInt("521")
		const addressRrPBbF0 = accounts[1]
		const uintFjthQP = BigInt("552")
		const addressU0ZIDl2 = accounts[1]
		const uintYDp2xA8 = BigInt("771")
		const addresse6xwU4u = accounts[1]
		const uint256dmU5NY = await WeedburnNryw4S.allowance.call(addresstgCW0hg, addressEI4RjB, {from: accounts[5]});
//		const boolSiX0oxK = await WeedburnNryw4S.transfer.call(addressRrPBbF0, uinteqTrhEd, {from: accounts[2]});
//		const addressp7JwRP = await WeedburnNryw4S.burnFrom.call(addressU0ZIDl2, uintFjthQP, {from: accounts[2]});
//		await WeedburnNryw4S.disableLimitMode.call({from: accounts[3]});
//		const boolsBHUXRq = await WeedburnNryw4S.decreaseAllowance.call(addresse6xwU4u, uintYDp2xA8, {from: accounts[4]});

		assert.equal(uint256dmU5NY, BigInt("0"))
		await expect(WeedburnNryw4S.transfer.call(addressRrPBbF0, uinteqTrhEd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNryw4S = await Weedburn.new({from: accounts[3]});
		const addressLaoc2aH = accounts[0]
		const addressPkiqZFI = accounts[1]
		const uintCGIwkf = BigInt("771")
		const addresshQiqOIJ = accounts[1]
		const uint256dmU5NY = await WeedburnNryw4S.allowance.call(addressPkiqZFI, addressLaoc2aH, {from: accounts[5]});
//		await WeedburnNryw4S.disableLimitMode.call({from: accounts[3]});
//		const boolsBHUXRq = await WeedburnNryw4S.decreaseAllowance.call(addresshQiqOIJ, uintCGIwkf, {from: accounts[4]});

		assert.equal(uint256dmU5NY, BigInt("0"))
		await expect(WeedburnNryw4S.disableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnPoL4InU = await Weedburn.new({from: accounts[4]});
//		await WeedburnPoL4InU.enableLimitMode.call({from: accounts[5]});
//		const uint256UbdmA4T = await WeedburnPoL4InU.totalSupply.call({from: accounts[2]});

		await expect(WeedburnPoL4InU.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNryw4S = await Weedburn.new({from: accounts[3]});
		const addressa3u6t13 = accounts[0]
		const addressDl4AxbT = accounts[1]
		const uintfXl5tVb = BigInt("444")
		const addressFlUxiPl = "0x0000000000000000000000000000000000000001"
		const uintFK7DKwx = BigInt("521")
		const addressCJAwbes = accounts[1]
		const uintY09fSqP = BigInt("552")
		const addressQujpqct = accounts[1]
		const uintZBQihxU = BigInt("771")
		const addressnrhTmRI = accounts[1]
		const uint256dmU5NY = await WeedburnNryw4S.allowance.call(addressDl4AxbT, addressa3u6t13, {from: accounts[5]});
		const boolEi5ls2u = await WeedburnNryw4S.approve.call(addressFlUxiPl, uintfXl5tVb, {from: accounts[1]});
//		const boolSiX0oxK = await WeedburnNryw4S.transfer.call(addressCJAwbes, uintFK7DKwx, {from: accounts[2]});
//		const addressp7JwRP = await WeedburnNryw4S.burnFrom.call(addressQujpqct, uintY09fSqP, {from: accounts[2]});
//		await WeedburnNryw4S.disableLimitMode.call({from: accounts[3]});
//		const boolsBHUXRq = await WeedburnNryw4S.decreaseAllowance.call(addressnrhTmRI, uintZBQihxU, {from: accounts[4]});

		assert.equal(boolEi5ls2u, true)
		assert.equal(uint256dmU5NY, BigInt("0"))
		await expect(WeedburnNryw4S.transfer.call(addressCJAwbes, uintFK7DKwx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNryw4S = await Weedburn.new({from: accounts[3]});
		const addresscfGqSQX = accounts[0]
		const addressacKV3g3 = accounts[1]
		const uinthPC4hfV = BigInt("7")
		const addressM790YO = accounts[5]
		const uintJH5c3Cq = BigInt("1675")
		const addresszqped3 = accounts[0]
		const uintItSctHq = BigInt("521")
		const addressQ7z84Ml = accounts[1]
		const uintyY3h4gO = BigInt("552")
		const addressKJsMPW = accounts[1]
		const uintkw1bLg = BigInt("771")
		const addressYlXW6co = accounts[1]
		const uint256dmU5NY = await WeedburnNryw4S.allowance.call(addressacKV3g3, addresscfGqSQX, {from: accounts[5]});
		const booloV3I87V = await WeedburnNryw4S.increaseAllowance.call(addressM790YO, uinthPC4hfV, {from: accounts[4]});
//		const addressEXxhnsO = await WeedburnNryw4S.burnFrom.call(addresszqped3, uintJH5c3Cq, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSiX0oxK = await WeedburnNryw4S.transfer.call(addressQ7z84Ml, uintItSctHq, {from: accounts[2]});
//		const addressp7JwRP = await WeedburnNryw4S.burnFrom.call(addressKJsMPW, uintyY3h4gO, {from: accounts[2]});
//		await WeedburnNryw4S.disableLimitMode.call({from: accounts[3]});
//		const uint8y1gKQBB = await WeedburnNryw4S.decimals.call({from: accounts[0]});
//		const boolsBHUXRq = await WeedburnNryw4S.decreaseAllowance.call(addressYlXW6co, uintkw1bLg, {from: accounts[4]});

		assert.equal(booloV3I87V, true)
		assert.equal(uint256dmU5NY, BigInt("0"))
		await expect(WeedburnNryw4S.burnFrom.call(addresszqped3, uintJH5c3Cq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJ9M0cYC = await Weedburn.new({from: accounts[2]});
		const uintZrFePxK = BigInt("406")
		const uintpERLuJ4 = BigInt("1337")
		const addressdvMuOGM = accounts[3]
		const uintEAA8lFQ = BigInt("64")
		const uintB1OmO8v = BigInt("963")
		const addressM49VJzm = accounts[1]
		const uint256qh4UCIE = await WeedburnJ9M0cYC.burn.call(uintZrFePxK, {from: accounts[2]});
//		const boolmaTIagN = await WeedburnJ9M0cYC.decreaseAllowance.call(addressdvMuOGM, uintpERLuJ4, {from: accounts[3]});
//		const uint256WXzA2t = await WeedburnJ9M0cYC.burn.call(uintEAA8lFQ, {from: accounts[5]});
//		const boolhgd39TJ = await WeedburnJ9M0cYC.transfer.call(addressM49VJzm, uintB1OmO8v, {from: accounts[0]});
//		const stringd25HI8j = await WeedburnJ9M0cYC.symbol.call({from: accounts[2]});
//		const uint8rb5MBtg = await WeedburnJ9M0cYC.decimals.call({from: accounts[0]});

		await expect(WeedburnJ9M0cYC.decreaseAllowance.call(addressdvMuOGM, uintpERLuJ4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNryw4S = await Weedburn.new({from: accounts[3]});
		const uinto0HUG4 = BigInt("36")
		const addressy2GbjkQ = accounts[2]
		const addressZZkk4F = accounts[1]
		const addressXsLvk6D = accounts[1]
		const uintueXKGzl = BigInt("552")
		const addressvd2NpJ2 = accounts[2]
		const boolY2uf8ay = await WeedburnNryw4S.approve.call(addressy2GbjkQ, uinto0HUG4, {from: accounts[3]});
//		await WeedburnNryw4S.enableDevMode.call({from: accounts[1]});
//		const uint256dmU5NY = await WeedburnNryw4S.allowance.call(addressXsLvk6D, addressZZkk4F, {from: accounts[5]});
//		const addressp7JwRP = await WeedburnNryw4S.burnFrom.call(addressvd2NpJ2, uintueXKGzl, {from: accounts[2]});

		assert.equal(boolY2uf8ay, true)
		await expect(WeedburnNryw4S.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNryw4S = await Weedburn.new({from: accounts[3]});
		const addressMi8LJG5 = accounts[0]
		const addresshqu8yp7 = accounts[1]
		const uintK0X7HCw = BigInt("1345")
		const addressfw8mTPn = accounts[0]
//		await WeedburnNryw4S.disableDevMode.call({from: accounts[1]});
//		const uint256dmU5NY = await WeedburnNryw4S.allowance.call(addresshqu8yp7, addressMi8LJG5, {from: accounts[5]});
//		const boolfrWyCID = await WeedburnNryw4S.increaseAllowance.call(addressfw8mTPn, uintK0X7HCw, {from: accounts[2]});
//		await WeedburnNryw4S.disableLimitMode.call({from: accounts[3]});

		await expect(WeedburnNryw4S.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnexpx6A2 = await Weedburn.new({from: accounts[3]});
		const uintCMUHnNP = BigInt("34")
		const addressGDu9Cgc = accounts[3]
		const addresseYmNlqF = "0x0000000000000000000000000000000000000001"
		const stringsZC9wm = await Weedburnexpx6A2.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolozKva3i = await Weedburnexpx6A2.transferFrom.call(addresseYmNlqF, addressGDu9Cgc, uintCMUHnNP, {from: accounts[5]});

		assert.equal(stringsZC9wm, "t.me/burnweed1")
		await expect(Weedburnexpx6A2.transferFrom.call(addresseYmNlqF, addressGDu9Cgc, uintCMUHnNP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnGGwdyGC = await Weedburn.new({from: accounts[3]});
		const uintRZdfBGE = BigInt("469")
		const addressSPYWCE = accounts[4]
		const uinthliY3TK = BigInt("1779")
		const addressBbPB4e8 = accounts[1]
		const boollFyCl3a = await WeedburnGGwdyGC.transfer.call(addressSPYWCE, uintRZdfBGE, {from: accounts[3]});
//		const boolqmgkFI6 = await WeedburnGGwdyGC.transfer.call(addressBbPB4e8, uinthliY3TK, {from: accounts[4]});

		assert.equal(boollFyCl3a, true)
		await expect(WeedburnGGwdyGC.transfer.call(addressBbPB4e8, uinthliY3TK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnpshkUmF = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr0GV2Cr = BigInt("621")
		const addressvREEqH2 = accounts[5]
		const uint8esbHiUZ = await WeedburnpshkUmF.decimals.call({from: accounts[4]});
		const boolKZaWW2M = await WeedburnpshkUmF.decreaseAllowance.call(addressvREEqH2, uintr0GV2Cr, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const Weedburnexpx6A2 = await Weedburn.new({from: accounts[3]});
		const uinttMLOI1h = BigInt("1608")
		const addressO0jfiu9 = accounts[4]
		const addressunUJ2E0 = accounts[3]
		const uintggTiTcP = BigInt("34")
		const addressAHxIVaE = accounts[3]
		const addressOAZUmJx = "0x0000000000000000000000000000000000000001"
//		const boolwfliz7Z = await Weedburnexpx6A2.transferFrom.call(addressunUJ2E0, addressO0jfiu9, uinttMLOI1h, {from: accounts[5]});
//		const boolozKva3i = await Weedburnexpx6A2.transferFrom.call(addressOAZUmJx, addressAHxIVaE, uintggTiTcP, {from: accounts[5]});

		await expect(Weedburnexpx6A2.transferFrom.call(addressunUJ2E0, addressO0jfiu9, uinttMLOI1h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})