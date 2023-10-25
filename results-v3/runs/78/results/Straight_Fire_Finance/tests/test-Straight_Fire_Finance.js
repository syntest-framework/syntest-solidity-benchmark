const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financeu0GHQFB = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressLwmRx8i = accounts[0]
		const uintmmeoO5S = BigInt("1489")
		const addressALkKvY5 = accounts[0]
		const addressbi5MGLq = accounts[0]
		const uintHuHi4XK = BigInt("1000")
		const addressLQG4oO1 = accounts[3]
		const addressUH94LIU = accounts[4]
		const addressWpziag2 = accounts[3]
		const uint256QV427Ag = await Straight_Fire_Financeu0GHQFB.balanceOf.call(addressLwmRx8i, {from: accounts[0]});
		const boolNMv9OE4 = await Straight_Fire_Financeu0GHQFB.transfer.call(addressALkKvY5, uintmmeoO5S, {from: accounts[0]});
		const uint256E1K4Wlm = await Straight_Fire_Financeu0GHQFB.balanceOf.call(addressbi5MGLq, {from: accounts[2]});
		const boolH996lOt = await Straight_Fire_Financeu0GHQFB.transferFrom.call(addressUH94LIU, addressLQG4oO1, uintHuHi4XK, {from: accounts[5]});
		const uint256QpMqFVx = await Straight_Fire_Financeu0GHQFB.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256z2khth6 = await Straight_Fire_Financeu0GHQFB.balanceOf.call(addressWpziag2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolH996lOt, false)
		assert.equal(boolNMv9OE4, true)
		assert.equal(uint256E1K4Wlm, BigInt("80000000000000000000000"))
		assert.equal(uint256QV427Ag, BigInt("80000000000000000000000"))
		assert.equal(uint256QpMqFVx, BigInt("80000000000000000000000"))
		assert.equal(uint256z2khth6, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceJKuZkmj = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintSgLxj4T = BigInt("24")
		const addressBf16Wol = accounts[4]
		const addressQ79Te7 = accounts[3]
		const uintcJxP59x = BigInt("1450")
		const addresssqF8R2x = accounts[0]
		const addressWtlXrjZ = accounts[1]
		const addresst6B0iO8 = accounts[5]
		const addressDAWIAb = accounts[0]
		const boolrYVdTAA = await Straight_Fire_FinanceJKuZkmj.transferFrom.call(addressQ79Te7, addressBf16Wol, uintSgLxj4T, {from: accounts[2]});
		const boolf0qCY74 = await Straight_Fire_FinanceJKuZkmj.transferFrom.call(addressWtlXrjZ, addresssqF8R2x, uintcJxP59x, {from: accounts[2]});
		const uintbYsK99S = await Straight_Fire_FinanceJKuZkmj.allowance.call(addressDAWIAb, addresst6B0iO8, {from: accounts[2]});

		assert.equal(boolf0qCY74, false)
		assert.equal(boolrYVdTAA, false)
		assert.equal(uintbYsK99S, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceN7zvrbH = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintsFZOrpX = BigInt("12")
		const addressAqmsgVx = accounts[2]
		const addressPbqZhn = "0x0000000000000000000000000000000000000001"
		const addressXVVw0kt = accounts[2]
		const uinttRMp8XL = BigInt("1005")
		const addressktRVhOk = accounts[3]
		const uint256XmNqiYL = await Straight_Fire_FinanceN7zvrbH.totalSupply.call({from: accounts[4]});
		const boolvRRyYYq = await Straight_Fire_FinanceN7zvrbH.transfer.call(addressAqmsgVx, uintsFZOrpX, {from: accounts[0]});
		const uintnuTRFcm = await Straight_Fire_FinanceN7zvrbH.allowance.call(addressXVVw0kt, addressPbqZhn, {from: accounts[0]});
		const booltMuP8JH = await Straight_Fire_FinanceN7zvrbH.transfer.call(addressktRVhOk, uinttRMp8XL, {from: accounts[2]});

		assert.equal(booltMuP8JH, true)
		assert.equal(boolvRRyYYq, false)
		assert.equal(uint256XmNqiYL, BigInt("80000000000000000000000"))
		assert.equal(uintnuTRFcm, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceDKIdMo5 = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintKBEOeWs = BigInt("103")
		const addressp4bHWa = accounts[0]
		const addressJBMo0Z = accounts[1]
		const uintFXvCi6P = BigInt("1077")
		const addressXXg9I4t = accounts[4]
		const uintWj12juJ = BigInt("1817")
		const addressqzhAm6n = "0x0000000000000000000000000000000000000001"
		const uintWjx07Gv = BigInt("1069")
		const addressZw0jVdb = accounts[3]
		const addressXD53hp = accounts[3]
		const boolP9nLoPO = await Straight_Fire_FinanceDKIdMo5.transferFrom.call(addressJBMo0Z, addressp4bHWa, uintKBEOeWs, {from: accounts[4]});
		const booloqXJzTm = await Straight_Fire_FinanceDKIdMo5.approve.call(addressXXg9I4t, uintFXvCi6P, {from: accounts[3]});
		const boolxN5hHG4 = await Straight_Fire_FinanceDKIdMo5.approve.call(addressqzhAm6n, uintWj12juJ, {from: accounts[3]});
		const uint256Y5QIW82 = await Straight_Fire_FinanceDKIdMo5.totalSupply.call({from: accounts[5]});
		const boolX4lTNDh = await Straight_Fire_FinanceDKIdMo5.transfer.call(addressZw0jVdb, uintWjx07Gv, {from: accounts[4]});
		const uint256nrI68AW = await Straight_Fire_FinanceDKIdMo5.balanceOf.call(addressXD53hp, {from: accounts[3]});

		assert.equal(boolP9nLoPO, false)
		assert.equal(boolX4lTNDh, false)
		assert.equal(booloqXJzTm, true)
		assert.equal(boolxN5hHG4, true)
		assert.equal(uint256Y5QIW82, BigInt("80000000000000000000000"))
		assert.equal(uint256nrI68AW, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceG4NgG2 = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressstM9Vvl = accounts[4]
		const addressxFr0mk = accounts[3]
		const uintuOaspCq = BigInt("1848")
		const address4MDSKO = accounts[3]
		const addressbjM22zH = accounts[5]
		const uintC1ETfDC = await Straight_Fire_FinanceG4NgG2.allowance.call(addressxFr0mk, addressstM9Vvl, {from: accounts[3]});
		const boolAnr3JL5 = await Straight_Fire_FinanceG4NgG2.transferFrom.call(addressbjM22zH, address4MDSKO, uintuOaspCq, {from: accounts[3]});
		const uint256q3aHgG6 = await Straight_Fire_FinanceG4NgG2.totalSupply.call({from: accounts[4]});
	});
})