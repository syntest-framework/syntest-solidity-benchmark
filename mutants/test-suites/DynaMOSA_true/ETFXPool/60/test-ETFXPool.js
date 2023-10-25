const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringF1sIXzA = "XVoczl3eowjofJuI8ZjDC6144Hq"
		const stringcAwbhv = "BOK9MWbUzZably4BqGjbT6Vj6YzATy"
		const uintwVPOtG2 = BigInt("85")
		const ETFXPooldcfJHyk = await ETFXPool.new(stringF1sIXzA, stringcAwbhv, uintwVPOtG2, {from: accounts[4]});
		const uintKEWPjjW = BigInt("581")
		await ETFXPooldcfJHyk.exit.call({from: accounts[0]});
		const addressRZaDnG5 = await ETFXPooldcfJHyk.owner.call({from: accounts[2]});
		const uint8wuLpaB = await ETFXPooldcfJHyk.decimals.call({from: accounts[1]});
		const uint256R3j28QE = await ETFXPooldcfJHyk.stake.call(uintKEWPjjW, {from: accounts[0]});
		const uint8jzZtZHj = await ETFXPooldcfJHyk.decimals.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIBrRFKq = await ETFXPool.new({from: accounts[4]});
		const addressqXyjOVI = accounts[4]
		const uintcQGlrYC = BigInt("89")
		const addressxtRbHq5 = accounts[3]
		const stringKwR5eQ = await ETFXPoolIBrRFKq.symbol.call({from: accounts[5]});
		const uint256TKg8FNA = await ETFXPoolIBrRFKq.balanceOf.call(addressqXyjOVI, {from: "0x0000000000000000000000000000000000000001"});
		const boolaq3nzVl = await ETFXPoolIBrRFKq.approve.call(addressxtRbHq5, uintcQGlrYC, {from: accounts[2]});
		const addressiLEz3S9 = await ETFXPoolIBrRFKq.owner.call({from: accounts[0]});

		assert.equal(addressiLEz3S9, 0x13861dD8E1F1b2460F04D276146E7D144985F949)
		assert.equal(boolaq3nzVl, true)
		assert.equal(stringKwR5eQ, "FETFX")
		assert.equal(uint256TKg8FNA, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbP3bqYw = await ETFXPool.new({from: accounts[3]});
		const addressRcLUkP = accounts[3]
		const addressSDPgMX = accounts[4]
		const addressBkxyzN = accounts[2]
		const uint256CjM5Q2h = await ETFXPoolbP3bqYw.totalSupply.call({from: accounts[4]});
		const uint256HG7mPV = await ETFXPoolbP3bqYw.balanceOf.call(addressRcLUkP, {from: accounts[4]});
		const stringGxIkchl = await ETFXPoolbP3bqYw.symbol.call({from: accounts[1]});
//		const uint256tc3jkuB = await ETFXPoolbP3bqYw.earned.call(addressSDPgMX, {from: accounts[5]});
//		const uint256zqUPxBD = await ETFXPoolbP3bqYw.earned.call(addressBkxyzN, {from: accounts[4]});

		assert.equal(stringGxIkchl, "FETFX")
		assert.equal(uint256CjM5Q2h, BigInt("0"))
		assert.equal(uint256HG7mPV, BigInt("0"))
		await expect(ETFXPoolbP3bqYw.earned.call(addressSDPgMX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf09iSj = await ETFXPool.new({from: accounts[3]});
		const uintuv4gtBN = BigInt("81")
		const addressmO2hPcI = accounts[0]
		const addressDv1AOzi = accounts[3]
		const uintIYGLjyH = BigInt("877")
		const addressxEEMdP8 = accounts[0]
		const boolL5NpSNJ = await ETFXPoolf09iSj.increaseAllowance.call(addressmO2hPcI, uintuv4gtBN, {from: accounts[4]});
//		await ETFXPoolf09iSj.exit.call({from: accounts[0]});
//		const addressQoEaaj0 = await ETFXPoolf09iSj.owner.call({from: accounts[4]});
//		const uint256jujJ6H = await ETFXPoolf09iSj.balanceOf.call(addressDv1AOzi, {from: accounts[0]});
//		const boolLE2P953 = await ETFXPoolf09iSj.transfer.call(addressxEEMdP8, uintIYGLjyH, {from: accounts[1]});
//		await ETFXPoolf09iSj.onlyOwner.call({from: accounts[3]});

		assert.equal(boolL5NpSNJ, true)
		await expect(ETFXPoolf09iSj.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolOe15iE = await ETFXPool.new({from: accounts[3]});
		const addressuGp3yY = accounts[0]
		const uint8Hn2Cib = await ETFXPoolOe15iE.decimals.call({from: accounts[3]});
//		const uint256cNT2n4 = await ETFXPoolOe15iE.earned.call(addressuGp3yY, {from: accounts[4]});

		assert.equal(uint8Hn2Cib, BigInt("8"))
		await expect(ETFXPoolOe15iE.earned.call(addressuGp3yY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzyRdXty = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJLMxRSg = BigInt("1970")
		const addresstam2k0q = accounts[1]
		const stringyV3J9if = await ETFXPoolzyRdXty.symbol.call({from: accounts[0]});
		await ETFXPoolzyRdXty.getReward.call({from: accounts[4]});
		const uint8aK6upwV = await ETFXPoolzyRdXty.decimals.call({from: accounts[1]});
		const boolfPk1XyQ = await ETFXPoolzyRdXty.transfer.call(addresstam2k0q, uintJLMxRSg, {from: accounts[4]});
		const uint256HM1TnY5 = await ETFXPoolzyRdXty.rewardPerToken.call({from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintpJEgAZ9 = BigInt("1834")
		const addressptXaz0d = accounts[1]
		const addresscZUBRTN = await ETFXPoolhB41t7.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const bool4AQVLA = await ETFXPoolhB41t7.transfer.call(addressptXaz0d, uintpJEgAZ9, {from: accounts[3]});

		assert.equal(addresscZUBRTN, 0x5dF9d1f1C0F24B2150674f8012a10Bc722CB240E)
		await expect(ETFXPoolhB41t7.transfer.call(addressptXaz0d, uintpJEgAZ9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const addresscZUBRTN = await ETFXPoolhB41t7.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const stringFtwDWNC = await ETFXPoolhB41t7.name.call({from: accounts[4]});

		assert.equal(addresscZUBRTN, 0x5dF9d1f1C0F24B2150674f8012a10Bc722CB240E)
		assert.equal(stringFtwDWNC, "ETFX-FARM")
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintwRJD187 = BigInt("801")
		const uinty4a95Eu = BigInt("1834")
		const addressvqyewjX = accounts[1]
		const uint256JK3mge7 = await ETFXPoolhB41t7.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256bg4czyT = await ETFXPoolhB41t7.withdraw.call(uintwRJD187, {from: accounts[4]});
//		const bool4AQVLA = await ETFXPoolhB41t7.transfer.call(addressvqyewjX, uinty4a95Eu, {from: accounts[3]});

		assert.equal(uint256JK3mge7, BigInt("0"))
		await expect(ETFXPoolhB41t7.withdraw.call(uintwRJD187, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintYmioQ7 = BigInt("1861")
		const addressAtL9gpz = accounts[2]
		const addressRp4QGca = accounts[0]
		const addresslUQe0VI = accounts[2]
		const addresscZUBRTN = await ETFXPoolhB41t7.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolsaG6fOJ = await ETFXPoolhB41t7.transferFrom.call(addressRp4QGca, addressAtL9gpz, uintYmioQ7, {from: accounts[0]});
//		const addressFRw2Ikm = await ETFXPoolhB41t7.transferOwnership.call(addresslUQe0VI, {from: accounts[2]});

		assert.equal(addresscZUBRTN, 0x5dF9d1f1C0F24B2150674f8012a10Bc722CB240E)
		await expect(ETFXPoolhB41t7.transferFrom.call(addressRp4QGca, addressAtL9gpz, uintYmioQ7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintNx5tGmI = BigInt("1603")
		const uintgFTVFj = BigInt("1834")
		const addressct96Asr = accounts[1]
		const addresscZUBRTN = await ETFXPoolhB41t7.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256GX0zutu = await ETFXPoolhB41t7.stake.call(uintNx5tGmI, {from: accounts[2]});
//		const bool4AQVLA = await ETFXPoolhB41t7.transfer.call(addressct96Asr, uintgFTVFj, {from: accounts[3]});

		assert.equal(addresscZUBRTN, 0x5dF9d1f1C0F24B2150674f8012a10Bc722CB240E)
		await expect(ETFXPoolhB41t7.stake.call(uintNx5tGmI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const addresseaKBwbO = accounts[2]
		const addressb8ffbIx = accounts[4]
		const uintMRSTqpw = BigInt("1834")
		const addressmBgpHy6 = accounts[1]
		const uint256JK3mge7 = await ETFXPoolhB41t7.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CSVBCiY = await ETFXPoolhB41t7.allowance.call(addressb8ffbIx, addresseaKBwbO, {from: accounts[0]});
//		const bool4AQVLA = await ETFXPoolhB41t7.transfer.call(addressmBgpHy6, uintMRSTqpw, {from: accounts[3]});

		assert.equal(uint256CSVBCiY, BigInt("0"))
		assert.equal(uint256JK3mge7, BigInt("0"))
		await expect(ETFXPoolhB41t7.transfer.call(addressmBgpHy6, uintMRSTqpw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintnsbwjO1 = BigInt("86")
		const addressHgaYqgv = accounts[2]
		const uintnANUIfS = BigInt("840")
		const addressGe4XO4V = accounts[2]
		const addressn6oag5L = await ETFXPoolhB41t7.owner.call({from: accounts[0]});
//		await ETFXPoolhB41t7.nonReentrant.call({from: accounts[1]});
//		const boolEoqeK4g = await ETFXPoolhB41t7.approve.call(addressHgaYqgv, uintnsbwjO1, {from: "0x0000000000000000000000000000000000000001"});
//		const addresscZUBRTN = await ETFXPoolhB41t7.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolA5oKyJP = await ETFXPoolhB41t7.decreaseAllowance.call(addressGe4XO4V, uintnANUIfS, {from: accounts[3]});
//		const stringcaYE0x6 = await ETFXPoolhB41t7.symbol.call({from: accounts[4]});

		assert.equal(addressn6oag5L, 0x5dF9d1f1C0F24B2150674f8012a10Bc722CB240E)
		await expect(ETFXPoolhB41t7.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintC3YTXLy = BigInt("705")
		const addresspQu4qXT = accounts[4]
		const addressxnOIsqy = accounts[4]
		const addressMHj3v8 = accounts[3]
//		const boolVzYYKUT = await ETFXPoolhB41t7.decreaseAllowance.call(addresspQu4qXT, uintC3YTXLy, {from: accounts[2]});
//		const addressdKxh5Xh = await ETFXPoolhB41t7.owner.call({from: accounts[4]});
//		const uint256RnhoCeP = await ETFXPoolhB41t7.allowance.call(addressMHj3v8, addressxnOIsqy, {from: accounts[0]});

		await expect(ETFXPoolhB41t7.decreaseAllowance.call(addresspQu4qXT, uintC3YTXLy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const addressKOw8Vr = accounts[0]
		const addressYsscqwJ = accounts[0]
		const uintQnAN7ZT = BigInt("1834")
		const addressleSoSPE = accounts[2]
		const addresswP6672U = await ETFXPoolhB41t7.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressU709RMR = await ETFXPoolhB41t7.transferOwnership.call(addressKOw8Vr, {from: accounts[5]});
//		const addressjV99Nsa = await ETFXPoolhB41t7.transferOwnership.call(addressYsscqwJ, {from: accounts[1]});
//		const bool4AQVLA = await ETFXPoolhB41t7.transfer.call(addressleSoSPE, uintQnAN7ZT, {from: accounts[3]});

		assert.equal(addresswP6672U, 0x5dF9d1f1C0F24B2150674f8012a10Bc722CB240E)
		await expect(ETFXPoolhB41t7.transferOwnership.call(addressKOw8Vr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintUS6GhEH = BigInt("1834")
		const addresshzElUn8 = accounts[1]
		const addresscZUBRTN = await ETFXPoolhB41t7.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolhB41t7.renounceOwnership.call({from: accounts[3]});
//		const bool4AQVLA = await ETFXPoolhB41t7.transfer.call(addresshzElUn8, uintUS6GhEH, {from: accounts[3]});

		assert.equal(addresscZUBRTN, 0x5dF9d1f1C0F24B2150674f8012a10Bc722CB240E)
		await expect(ETFXPoolhB41t7.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const uintzGcUCRm = BigInt("1834")
		const addressnwmNWE = accounts[1]
		const uint256rdaBemr = await ETFXPoolhB41t7.rewardPerToken.call({from: accounts[1]});
//		await ETFXPoolhB41t7.getReward.call({from: accounts[3]});
//		const bool4AQVLA = await ETFXPoolhB41t7.transfer.call(addressnwmNWE, uintzGcUCRm, {from: accounts[3]});
//		await ETFXPoolhB41t7.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256rdaBemr, BigInt("0"))
		await expect(ETFXPoolhB41t7.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhB41t7 = await ETFXPool.new({from: accounts[3]});
		const addressoNPLCB = accounts[1]
		const uintOIZLb3J = BigInt("705")
		const addressDW0NZet = accounts[5]
		const addressrRjqmTG = await ETFXPoolhB41t7.transferOwnership.call(addressoNPLCB, {from: accounts[3]});
//		const boolVzYYKUT = await ETFXPoolhB41t7.decreaseAllowance.call(addressDW0NZet, uintOIZLb3J, {from: accounts[2]});

		await expect(ETFXPoolhB41t7.decreaseAllowance.call(addressDW0NZet, uintOIZLb3J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})