const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolBkqDiK5 = await ETFXPool.new({from: accounts[2]});
		const uintjpowwn = BigInt("1627")
		const addressIf5Z4OC = accounts[1]
		const addressItmJkt8 = accounts[0]
		const stringOpG5yo = await ETFXPoolBkqDiK5.name.call({from: accounts[2]});
		const uint256YuQD5fv = await ETFXPoolBkqDiK5.totalSupply.call({from: accounts[2]});
		const boolLgWvzUP = await ETFXPoolBkqDiK5.approve.call(addressIf5Z4OC, uintjpowwn, {from: accounts[0]});
//		const addressEM3Oaxw = await ETFXPoolBkqDiK5.transferOwnership.call(addressItmJkt8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLgWvzUP, true)
		assert.equal(stringOpG5yo, "ETFX-FARM")
		assert.equal(uint256YuQD5fv, BigInt("0"))
		await expect(ETFXPoolBkqDiK5.transferOwnership.call(addressItmJkt8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleqVO8xs = await ETFXPool.new({from: accounts[2]});
		const addressU6fFbOM = accounts[1]
		const uintQZJzg47 = BigInt("573")
		const uintv7hlexO = BigInt("348")
		const addressFRt2iAg = "0x0000000000000000000000000000000000000001"
		const stringkCtJlmy = await ETFXPooleqVO8xs.symbol.call({from: accounts[2]});
		const uint256p3J82E3 = await ETFXPooleqVO8xs.balanceOf.call(addressU6fFbOM, {from: accounts[3]});
//		const uint256ynmRDal = await ETFXPooleqVO8xs.withdraw.call(uintQZJzg47, {from: accounts[0]});
//		const booluxJSKdT = await ETFXPooleqVO8xs.decreaseAllowance.call(addressFRt2iAg, uintv7hlexO, {from: accounts[4]});

		assert.equal(stringkCtJlmy, "FETFX")
		assert.equal(uint256p3J82E3, BigInt("0"))
		await expect(ETFXPooleqVO8xs.withdraw.call(uintQZJzg47, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringeV9SkKU = "fhOqBpbcsqUkMbxeY0z43kPNywjQLhPP4JfKwWJo1T79iGQOa2U6pXGqX4lgA6WIS5Hr9B"
		const stringbZpKFTh = "YwMKy9QGmNKS5GN8WGYOhNiWJtHDL"
		const uintqEBD9Cr = BigInt("74")
		const ETFXPooln6ArFrl = await ETFXPool.new(stringeV9SkKU, stringbZpKFTh, uintqEBD9Cr, {from: "0x0000000000000000000000000000000000000001"});
		const addressmBU2NIH = accounts[0]
		const uintioXhv7D = BigInt("2009")
		const addressbccGI0D = accounts[2]
		const addressPstqfe5 = accounts[1]
		const stringHdQJs5d = await ETFXPooln6ArFrl.name.call({from: accounts[1]});
		const addressyYVnh4P = await ETFXPooln6ArFrl.transferOwnership.call(addressmBU2NIH, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPooln6ArFrl.getReward.call({from: accounts[0]});
		const boolOOgcLp8 = await ETFXPooln6ArFrl.transferFrom.call(addressPstqfe5, addressbccGI0D, uintioXhv7D, {from: accounts[5]});
		const uint256pZdHUrp = await ETFXPooln6ArFrl.totalSupply.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbon75uI = await ETFXPool.new({from: accounts[4]});
		const addressXENCKsU = accounts[3]
		const addresswWUwiQ3 = accounts[0]
		const addresswPRYKNo = accounts[4]
		const uint256eeTBEJ6 = await ETFXPoolbon75uI.totalSupply.call({from: accounts[1]});
		const uint256Kqwpet4 = await ETFXPoolbon75uI.balanceOf.call(addressXENCKsU, {from: accounts[3]});
		const uint256lBcivwn = await ETFXPoolbon75uI.allowance.call(addresswPRYKNo, addresswWUwiQ3, {from: accounts[0]});

		assert.equal(uint256Kqwpet4, BigInt("0"))
		assert.equal(uint256eeTBEJ6, BigInt("0"))
		assert.equal(uint256lBcivwn, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooldRw6jnG = await ETFXPool.new({from: accounts[2]});
		const uintwlW84TU = BigInt("1646")
		const addressHSH84vq = "0x0000000000000000000000000000000000000001"
		const addressa4WCC9L = accounts[1]
		const uint8Cecelrs = await ETFXPooldRw6jnG.decimals.call({from: accounts[2]});
//		const boolQJsd612 = await ETFXPooldRw6jnG.transfer.call(addressHSH84vq, uintwlW84TU, {from: accounts[0]});
//		const uint256N2uOzi7 = await ETFXPooldRw6jnG.balanceOf.call(addressa4WCC9L, {from: accounts[3]});

		assert.equal(uint8Cecelrs, BigInt("8"))
		await expect(ETFXPooldRw6jnG.transfer.call(addressHSH84vq, uintwlW84TU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolE0jotd = await ETFXPool.new({from: accounts[4]});
		const uintCJtiPdv = BigInt("370")
		const stringUeeFsNp = await ETFXPoolE0jotd.name.call({from: accounts[3]});
		const stringxoNAm5W = await ETFXPoolE0jotd.name.call({from: accounts[1]});
//		await ETFXPoolE0jotd.onlyOwner.call({from: accounts[2]});
//		await ETFXPoolE0jotd.exit.call({from: accounts[2]});
//		const uint256N46qHlA = await ETFXPoolE0jotd.withdraw.call(uintCJtiPdv, {from: accounts[4]});

		assert.equal(stringUeeFsNp, "ETFX-FARM")
		assert.equal(stringxoNAm5W, "ETFX-FARM")
		await expect(ETFXPoolE0jotd.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRzXTcpe = await ETFXPool.new({from: accounts[1]});
//		await ETFXPoolRzXTcpe.getReward.call({from: accounts[5]});
//		const addressniysBDY = await ETFXPoolRzXTcpe.owner.call({from: accounts[1]});

		await expect(ETFXPoolRzXTcpe.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbon75uI = await ETFXPool.new({from: accounts[4]});
		const addressORiLTJ = accounts[3]
		const uintPNKV7gF = BigInt("427")
		const addressAQEVpap = accounts[3]
		const addressmpj5u1X = accounts[0]
		const addressF5kgHWM = accounts[4]
		const uint256eeTBEJ6 = await ETFXPoolbon75uI.totalSupply.call({from: accounts[1]});
		const uint256I1H0qh = await ETFXPoolbon75uI.rewardPerToken.call({from: accounts[0]});
		const uint256Kqwpet4 = await ETFXPoolbon75uI.balanceOf.call(addressORiLTJ, {from: accounts[3]});
		const boolQT2Xdjg = await ETFXPoolbon75uI.increaseAllowance.call(addressAQEVpap, uintPNKV7gF, {from: accounts[2]});
		const uint256lBcivwn = await ETFXPoolbon75uI.allowance.call(addressF5kgHWM, addressmpj5u1X, {from: accounts[0]});

		assert.equal(boolQT2Xdjg, true)
		assert.equal(uint256I1H0qh, BigInt("0"))
		assert.equal(uint256Kqwpet4, BigInt("0"))
		assert.equal(uint256eeTBEJ6, BigInt("0"))
		assert.equal(uint256lBcivwn, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRzXTcpe = await ETFXPool.new({from: accounts[1]});
		const uintWKf7lmw = BigInt("92")
		const addressxuZi3Fi = accounts[2]
		const addressNyBiNpU = accounts[0]
//		const boolfTaihIL = await ETFXPoolRzXTcpe.transferFrom.call(addressNyBiNpU, addressxuZi3Fi, uintWKf7lmw, {from: accounts[4]});
//		await ETFXPoolRzXTcpe.getReward.call({from: accounts[5]});
//		const addressniysBDY = await ETFXPoolRzXTcpe.owner.call({from: accounts[1]});
//		await ETFXPoolRzXTcpe.nonReentrant.call({from: accounts[0]});

		await expect(ETFXPoolRzXTcpe.transferFrom.call(addressNyBiNpU, addressxuZi3Fi, uintWKf7lmw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbon75uI = await ETFXPool.new({from: accounts[4]});
		const uintFZSyjbz = BigInt("796")
		const addressRNcqeIz = accounts[3]
		const addressaF30L9s = accounts[3]
		const addressQ34H8zN = accounts[3]
		const addressF1eDQ7z = accounts[0]
		const addressfLvCI8j = accounts[5]
//		const boolfExGAm = await ETFXPoolbon75uI.decreaseAllowance.call(addressRNcqeIz, uintFZSyjbz, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256eeTBEJ6 = await ETFXPoolbon75uI.totalSupply.call({from: accounts[1]});
//		const uint256Kqwpet4 = await ETFXPoolbon75uI.balanceOf.call(addressaF30L9s, {from: accounts[3]});
//		const addresso6md6WN = await ETFXPoolbon75uI.transferOwnership.call(addressQ34H8zN, {from: accounts[1]});
//		const uint256lBcivwn = await ETFXPoolbon75uI.allowance.call(addressfLvCI8j, addressF1eDQ7z, {from: accounts[0]});

		await expect(ETFXPoolbon75uI.decreaseAllowance.call(addressRNcqeIz, uintFZSyjbz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolz9S2KAp = await ETFXPool.new({from: accounts[1]});
		const uintxaa2RUj = BigInt("1076")
		const addresssrvswjP = accounts[0]
		const addressemibAES = accounts[2]
		const boolH74a3GX = await ETFXPoolz9S2KAp.approve.call(addresssrvswjP, uintxaa2RUj, {from: accounts[0]});
//		await ETFXPoolz9S2KAp.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint8NfrhzTG = await ETFXPoolz9S2KAp.decimals.call({from: accounts[1]});
//		await ETFXPoolz9S2KAp.renounceOwnership.call({from: accounts[1]});
//		const addresszFAy17H = await ETFXPoolz9S2KAp.transferOwnership.call(addressemibAES, {from: accounts[2]});

		assert.equal(boolH74a3GX, true)
		await expect(ETFXPoolz9S2KAp.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleqVO8xs = await ETFXPool.new({from: accounts[2]});
		const addressBZwDtY = accounts[2]
		const uintg6INdy = BigInt("573")
		const uintxcAafXT = BigInt("348")
		const addressAP1Hx1 = "0x0000000000000000000000000000000000000001"
		const stringkCtJlmy = await ETFXPooleqVO8xs.symbol.call({from: accounts[2]});
//		await ETFXPooleqVO8xs.renounceOwnership.call({from: accounts[2]});
//		const uint256p3J82E3 = await ETFXPooleqVO8xs.balanceOf.call(addressBZwDtY, {from: accounts[3]});
//		const uint256ynmRDal = await ETFXPooleqVO8xs.withdraw.call(uintg6INdy, {from: accounts[0]});
//		const booluxJSKdT = await ETFXPooleqVO8xs.decreaseAllowance.call(addressAP1Hx1, uintxcAafXT, {from: accounts[4]});
//		await ETFXPooleqVO8xs.nonReentrant.call({from: accounts[3]});

		assert.equal(stringkCtJlmy, "FETFX")
		await expect(ETFXPooleqVO8xs.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRzXTcpe = await ETFXPool.new({from: accounts[1]});
		const uintClmVnfh = BigInt("919")
		const addressEJ9RPYW = accounts[4]
		const addressnN6fcfj = accounts[0]
		const stringGt3g62R = await ETFXPoolRzXTcpe.symbol.call({from: accounts[0]});
		const boolXKpcsN = await ETFXPoolRzXTcpe.approve.call(addressEJ9RPYW, uintClmVnfh, {from: accounts[5]});
		const uint256AJQywVk = await ETFXPoolRzXTcpe.balanceOf.call(addressnN6fcfj, {from: accounts[3]});
		const addressniysBDY = await ETFXPoolRzXTcpe.owner.call({from: accounts[1]});

		assert.equal(addressniysBDY, 0x65cB85127296Ab7409114b280cbD94C4646328B0)
		assert.equal(boolXKpcsN, true)
		assert.equal(stringGt3g62R, "FETFX")
		assert.equal(uint256AJQywVk, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRzXTcpe = await ETFXPool.new({from: accounts[1]});
		const addressutM7PGB = accounts[5]
		const addressp855Yn5 = await ETFXPoolRzXTcpe.transferOwnership.call(addressutM7PGB, {from: accounts[1]});
//		await ETFXPoolRzXTcpe.getReward.call({from: accounts[5]});

		await expect(ETFXPoolRzXTcpe.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvH0RzUX = await ETFXPool.new({from: accounts[2]});
		const uintctzySP = BigInt("891")
		const uintjsP1Auz = BigInt("1860")
		const addressOxTs0r = accounts[4]
		const uintnM2MM5M = BigInt("1131")
//		const uint256vadW9Df = await ETFXPoolvH0RzUX.stake.call(uintctzySP, {from: accounts[4]});
//		const boolp7ixkvd = await ETFXPoolvH0RzUX.increaseAllowance.call(addressOxTs0r, uintjsP1Auz, {from: accounts[0]});
//		const uint256070Gqf = await ETFXPoolvH0RzUX.stake.call(uintnM2MM5M, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolvH0RzUX.stake.call(uintctzySP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPpN456x = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressn3D1XPr = accounts[3]
		const addressUUSfObp = accounts[4]
		const uint8UUu9VUD = await ETFXPoolPpN456x.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolPpN456x.renounceOwnership.call({from: accounts[0]});
		const uint256j4GzWPp = await ETFXPoolPpN456x.allowance.call(addressUUSfObp, addressn3D1XPr, {from: accounts[5]});
	});
})