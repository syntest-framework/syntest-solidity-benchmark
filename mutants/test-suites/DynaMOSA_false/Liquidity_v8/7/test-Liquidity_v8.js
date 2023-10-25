const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringgzcpQCc = "WDzjxKFyPEfVOCTWMd8HNUu6zAILcuoPEzFng7lqBmkeTPYP8OPAQ791"
		const addressZYsTNNz = accounts[3]
		const addressw8PNDLj = accounts[1]
		const uintlpBk4FC = BigInt("49")
		const uintiuETfOH = BigInt("1371")
		const Liquidity_v8WElpxjY = await Liquidity_v8.new(stringgzcpQCc, addressZYsTNNz, addressw8PNDLj, uintlpBk4FC, uintiuETfOH, {from: accounts[2]});
		const uintRoRW4mg = BigInt("1954")
		const addressRSmaxV6 = accounts[5]
		const uintU4QZ3F = BigInt("892")
		const uintxfB00qX = BigInt("1131")
		await Liquidity_v8WElpxjY.renounceOwnership.call({from: accounts[2]});
		const boolIXYa7RB = await Liquidity_v8WElpxjY.stake.call(uintRoRW4mg, {from: accounts[3]});
		const addressZKdKrDX = await Liquidity_v8WElpxjY.transferOwnership.call(addressRSmaxV6, {from: accounts[4]});
		const booldxBjpSJ = await Liquidity_v8WElpxjY.addReward.call(uintU4QZ3F, {from: accounts[2]});
		const uint64ufgdMSf = await Liquidity_v8WElpxjY.setRate.call(uintxfB00qX, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgLPXBsM = "WFH8fsrbE392r6yoEdyl2ZoE6Ii5Y1vINFsvjpvAA0Hj1ms1paLx4HUYWb9ZdNoqfARiCzHNI4nq7hHpc"
		const addressayaS3x = accounts[0]
		const addressd7Bhz15 = accounts[3]
		const uintJRTsgZ = BigInt("1800")
		const uintFJcEIDu = BigInt("1631")
		const Liquidity_v8sXsd66K = await Liquidity_v8.new(stringgLPXBsM, addressayaS3x, addressd7Bhz15, uintJRTsgZ, uintFJcEIDu, {from: accounts[0]});
		const uintWIK3Zu3 = BigInt("1421")
		const addressF2qdqmM = accounts[3]
		const address3pYha0 = accounts[2]
		const uint256hs88uY = await Liquidity_v8sXsd66K.changeLockDuration.call(uintWIK3Zu3, {from: accounts[1]});
		const uint256e7Z2qSZ = await Liquidity_v8sXsd66K.calculate.call(addressF2qdqmM, {from: accounts[2]});
		const addressPn3wVbu = await Liquidity_v8sXsd66K.transferOwnership.call(address3pYha0, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringLVvEFB6 = "Gfm7Sy6pVxhvOR5pNEbxOiOPMuNf2Xp1Y2NEmUlxUSBCJ3Gmz8DcMKkGSKhsRcpB6kLWLRm3uS3JNxHBQk"
		const addressOc5UIWa = accounts[1]
		const addresshytQSxY = accounts[3]
		const uintsFsKpZ2 = BigInt("192")
		const uintwTzeZNb = BigInt("174")
		const Liquidity_v8IXjaBeX = await Liquidity_v8.new(stringLVvEFB6, addressOc5UIWa, addresshytQSxY, uintsFsKpZ2, uintwTzeZNb, {from: accounts[1]});
		const addresspC0TJ8B = accounts[3]
		const uintPtM81MB = BigInt("716")
		const 
OWVQMmT = await Liquidity_v8IXjaBeX.userDeposits.call(addresspC0TJ8B, {from: accounts[4]});
		const uint256DC3n3jq = await Liquidity_v8IXjaBeX.changeLockDuration.call(uintPtM81MB, {from: accounts[4]});
		const addressVOrh1MY = await Liquidity_v8IXjaBeX.owner.call({from: accounts[4]});
		const boolAL1CIY = await Liquidity_v8IXjaBeX.isOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringoErG6JY = "mzNhUKJpWRyxUar4bpuKQT5sxmokPOmu4w4p26efmwGSSd1d"
		const addressPTM8eqj = accounts[5]
		const addressi1FnYxT = accounts[2]
		const uintOD6sEvh = BigInt("1754")
		const uinthxhxNgM = BigInt("1328")
		const Liquidity_v8doeviNX = await Liquidity_v8.new(stringoErG6JY, addressPTM8eqj, addressi1FnYxT, uintOD6sEvh, uinthxhxNgM, {from: accounts[5]});
		const addressOYZDVts = accounts[1]
		const uintqwiYcwm = BigInt("1656")
		const uintppVkRf1 = BigInt("1277")
		const uint256Hw7VgSX = await Liquidity_v8doeviNX.calculate.call(addressOYZDVts, {from: accounts[2]});
		const boolKDUQ0R4 = await Liquidity_v8doeviNX.addReward.call(uintqwiYcwm, {from: accounts[2]});
		const boold99PPlZ = await Liquidity_v8doeviNX.addReward.call(uintppVkRf1, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrmPZFeL = "nNXudtk1WrtGCir6TUQiVJMg4BwxczUHttsxspuigIWmRPgWXtu2Cv3Mfgy0Jn8AFcwtR58L02lguwrojyLK4UdiQi5dh"
		const addresspcbo0q1 = accounts[3]
		const addressuC0rzk = accounts[4]
		const uintqxjBQF4 = BigInt("1285")
		const uintPh4V8Cs = BigInt("1965")
		const Liquidity_v8LdPF9TO = await Liquidity_v8.new(stringrmPZFeL, addresspcbo0q1, addressuC0rzk, uintqxjBQF4, uintPh4V8Cs, {from: accounts[0]});
		const uintDcUOXh4 = BigInt("1645")
		const addressHn8ZAaE = accounts[2]
		await Liquidity_v8LdPF9TO.onlyOwner.call({from: accounts[4]});
		const boolQvyshMB = await Liquidity_v8LdPF9TO.stake.call(uintDcUOXh4, {from: accounts[4]});
		const addressP98JpRK = await Liquidity_v8LdPF9TO.owner.call({from: accounts[1]});
		const addressglKKzdI = await Liquidity_v8LdPF9TO.transferOwnership.call(addressHn8ZAaE, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlDWX2WP = "UOmctgGJSkZWucJ16t5ZovXrPj7RECAGIiJVyKXG0oszHKiN1etDxOP7kWOxySGfVlgzJAalhy4IiOxTTgVpBRZnXmju5eIT"
		const addresssboU0xv = accounts[5]
		const addresspaoOa2t = accounts[0]
		const uintHOnanTy = BigInt("1921")
		const uintIzLeo1W = BigInt("1724")
		const Liquidity_v8nIuA3N = await Liquidity_v8.new(stringlDWX2WP, addresssboU0xv, addresspaoOa2t, uintHOnanTy, uintIzLeo1W, {from: accounts[0]});
		const uintQMJ6tAR = BigInt("535")
		const uintipxfT90 = BigInt("1925")
		const uint64m6p3GZZ = await Liquidity_v8nIuA3N.setRate.call(uintQMJ6tAR, {from: accounts[0]});
		const boolslMhOjq = await Liquidity_v8nIuA3N.stake.call(uintipxfT90, {from: accounts[0]});
		const addressuHgDkXg = await Liquidity_v8nIuA3N.owner.call({from: accounts[4]});
		const boolXCTYBQB = await Liquidity_v8nIuA3N.withdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringLVvEFB6 = "Gfm7Sy6pVxhvOR5pNEbxOiOPMuNf2Xp1Y2NEmUlxUSBCJ3Gmz8DcMKkGSKhsRcpB6kLWLRm3uS3JNxHBQk"
		const addressmJJweLX = accounts[1]
		const addressVG0cQyc = accounts[3]
		const uintEZiKfnf = BigInt("192")
		const uintTlPwPSx = BigInt("174")
		const Liquidity_v8IXjaBeX = await Liquidity_v8.new(stringLVvEFB6, addressmJJweLX, addressVG0cQyc, uintEZiKfnf, uintTlPwPSx, {from: accounts[1]});
		const addressMwnk0eq = accounts[3]
		const 
OWVQMmT = await Liquidity_v8IXjaBeX.userDeposits.call(addressMwnk0eq, {from: accounts[4]});
		const addressVOrh1MY = await Liquidity_v8IXjaBeX.owner.call({from: accounts[4]});
		const boolAL1CIY = await Liquidity_v8IXjaBeX.isOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringxpJ4rtM = "KwZ9SJq8Anw"
		const addresst5bPr7A = "0x0000000000000000000000000000000000000001"
		const addressgjoftrM = accounts[2]
		const uintpxjXOAD = BigInt("576")
		const uintuHFCYMA = BigInt("1624")
		const Liquidity_v8BkuYDW7 = await Liquidity_v8.new(stringxpJ4rtM, addresst5bPr7A, addressgjoftrM, uintpxjXOAD, uintuHFCYMA, {from: accounts[1]});
		const address49eC3l = accounts[3]
		const uintFPsbaPV = BigInt("421")
		const addressQ0aRtql = accounts[3]
		const boolbpeyH7m = await Liquidity_v8BkuYDW7.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8BkuYDW7.onlyOwner.call({from: accounts[1]});
		const 
q0DxD99 = await Liquidity_v8BkuYDW7._hasAllowance.call(addressQ0aRtql, uintFPsbaPV, address49eC3l, {from: accounts[3]});
		const boolyTtvatZ = await Liquidity_v8BkuYDW7.emergencyWithdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const boolASXrSZ4 = await Liquidity_v8BkuYDW7.emergencyWithdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringbolhEjb = "oVA9GxwYTFggp2JJDHMmnqOnkr"
		const addressVbo8uQ = accounts[5]
		const addressdxk0TkD = accounts[2]
		const uintPQpje5A = BigInt("923")
		const uintMeeQeE2 = BigInt("1129")
		const Liquidity_v8wj7ymGh = await Liquidity_v8.new(stringbolhEjb, addressVbo8uQ, addressdxk0TkD, uintPQpje5A, uintMeeQeE2, {from: accounts[2]});
		const addressIKWJtVp = accounts[2]
		const addressbqdXjgW = await Liquidity_v8wj7ymGh.transferOwnership.call(addressIKWJtVp, {from: accounts[2]});
		const boolyV2YK4v = await Liquidity_v8wj7ymGh.withdraw.call({from: accounts[2]});
		await Liquidity_v8wj7ymGh.renounceOwnership.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIs4Zve7 = "b3uIg"
		const addressw26YncA = accounts[2]
		const addressJpB0Ncg = accounts[5]
		const uintOAuOBME = BigInt("547")
		const uintqsXPmWU = BigInt("1660")
		const Liquidity_v8bGgr5fp = await Liquidity_v8.new(stringIs4Zve7, addressw26YncA, addressJpB0Ncg, uintOAuOBME, uintqsXPmWU, {from: "0x0000000000000000000000000000000000000001"});
		const addressPvP7h6b = accounts[2]
		const uintRhtxo1 = BigInt("1466")
		const addressNxOfwIo = accounts[2]
		const 
EiXOGlh = await Liquidity_v8bGgr5fp.userDeposits.call(addressPvP7h6b, {from: accounts[3]});
		const boolr4baNZU = await Liquidity_v8bGgr5fp.stake.call(uintRhtxo1, {from: accounts[4]});
		const uint256FKtJslt = await Liquidity_v8bGgr5fp.calculate.call(addressNxOfwIo, {from: accounts[3]});
		await Liquidity_v8bGgr5fp.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringLVvEFB6 = "Gfm7Sy6pVxhvOR5pNEbxOiOPMuNf2Xp1Y2NEmUlxUSBCJ3Gmz8DcMKkGSKhsRcpB6kLWLRm3uS3JNxHBQk"
		const addressOR6y6iQ = accounts[1]
		const addressxV5lYS = accounts[3]
		const uintfeRtfmI = BigInt("192")
		const uintwF4ekgU = BigInt("174")
		const Liquidity_v8IXjaBeX = await Liquidity_v8.new(stringLVvEFB6, addressOR6y6iQ, addressxV5lYS, uintfeRtfmI, uintwF4ekgU, {from: accounts[1]});
		const uintS6pcFHn = BigInt("1127")
		const addressN9nA1Wb = accounts[4]
		const uintif70S9C = BigInt("381")
		const addressWSGUesB = accounts[4]
		const addresszLRVtkV = accounts[7]
		const uint256JqRZsrE = await Liquidity_v8IXjaBeX.changeLockDuration.call(uintS6pcFHn, {from: accounts[1]});
		const 
kb1qASF = await Liquidity_v8IXjaBeX._hasAllowance.call(addressWSGUesB, uintif70S9C, addressN9nA1Wb, {from: accounts[2]});
		const 
OWVQMmT = await Liquidity_v8IXjaBeX.userDeposits.call(addresszLRVtkV, {from: accounts[4]});
		await Liquidity_v8IXjaBeX.onlyOwner.call({from: accounts[1]});
	});
})