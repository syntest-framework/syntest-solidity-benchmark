const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNOGNpmf = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenNOGNpmf.whenPaused.call({from: accounts[4]});
		await CryptoSecureBankTokenNOGNpmf.unpause.call({from: accounts[2]});
		const addressCIyHaUT = await CryptoSecureBankTokenNOGNpmf.getOwner.call({from: accounts[5]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeng9BcHTL = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresshIlvSK = accounts[3]
		const uintT8GEXsg = BigInt("1973")
		const addresst3jYW8m = accounts[5]
		const addressoaQs9m = await CryptoSecureBankTokeng9BcHTL.transferOwnership.call(addresshIlvSK, {from: "0x0000000000000000000000000000000000000001"});
		const uintToUeuer = await CryptoSecureBankTokeng9BcHTL.onlyPayloadSize.call(uintT8GEXsg, {from: accounts[0]});
		const addressyTA2zza = await CryptoSecureBankTokeng9BcHTL.addBlackList.call(addresst3jYW8m, {from: accounts[0]});

		await expect(CryptoSecureBankTokeng9BcHTL.transferOwnership.call(addresshIlvSK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyf7hax = await CryptoSecureBankToken.new({from: accounts[2]});
		const uint1bfHic = BigInt("1558")
		const addressfrBRiQA = accounts[0]
		const uintHMrIaIo = BigInt("1767")
		const uintzdCNV7g = BigInt("1699")
		const boolkgb06ia = await CryptoSecureBankTokenyf7hax.approve.call(addressfrBRiQA, uint1bfHic, {from: accounts[2]});
		await CryptoSecureBankTokenyf7hax.whenPaused.call({from: accounts[3]});
		const uintSbcdXp7 = await CryptoSecureBankTokenyf7hax.setParams.call(uintzdCNV7g, uintHMrIaIo, {from: accounts[0]});

		assert.equal(boolkgb06ia, true)
		await expect(CryptoSecureBankTokenyf7hax.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDDzYQK9 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintBq3kn9y = BigInt("1457")
		const uintcOUY9Ol = BigInt("1219")
		const addressOalpnb = accounts[3]
		const addresszt9J4U5 = accounts[4]
		const boolIZbM8Cm = await CryptoSecureBankTokenDDzYQK9.redeem.call(uintBq3kn9y, {from: accounts[1]});
		const boolrt8g9yM = await CryptoSecureBankTokenDDzYQK9.transferFrom.call(addresszt9J4U5, addressOalpnb, uintcOUY9Ol, {from: accounts[1]});

		assert.equal(boolIZbM8Cm, true)
		await expect(CryptoSecureBankTokenDDzYQK9.transferFrom.call(addresszt9J4U5, addressOalpnb, uintcOUY9Ol, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBWIsRR2 = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressrSSU3Ey = accounts[5]
		const uintOwzeqKk = BigInt("261")
		const addressp9DSEjq = accounts[0]
		const addressGPwglsj = accounts[5]
		const addressSDCGYZS = "0x0000000000000000000000000000000000000001"
		const addressJnsK8aI = accounts[4]
		const addressAKTL56A = accounts[5]
		const addressgtMkKsE = await CryptoSecureBankTokenBWIsRR2.addBlackList.call(addressrSSU3Ey, {from: accounts[1]});
		const boolQsDNzM3 = await CryptoSecureBankTokenBWIsRR2.transferFrom.call(addressGPwglsj, addressp9DSEjq, uintOwzeqKk, {from: accounts[2]});
		const addressVtCeRZL = await CryptoSecureBankTokenBWIsRR2.getOwner.call({from: accounts[4]});
		const boolICnApef = await CryptoSecureBankTokenBWIsRR2.deprecate.call(addressSDCGYZS, {from: accounts[3]});
		const uintry0JLVu = await CryptoSecureBankTokenBWIsRR2.allowance.call(addressAKTL56A, addressJnsK8aI, {from: accounts[5]});

		await expect(CryptoSecureBankTokenBWIsRR2.transferFrom.call(addressGPwglsj, addressp9DSEjq, uintOwzeqKk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLfDlgwi = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresslcEy7Wl = accounts[3]
		const addressZs0fxdD = accounts[0]
		const uintwUTeQF6 = await CryptoSecureBankTokenLfDlgwi.balanceOf.call(addresslcEy7Wl, {from: accounts[5]});
		const addressdauzvqC = await CryptoSecureBankTokenLfDlgwi.addBlackList.call(addressZs0fxdD, {from: accounts[1]});
		await CryptoSecureBankTokenLfDlgwi.unpause.call({from: accounts[3]});

		assert.equal(uintwUTeQF6, BigInt("0"))
		await expect(CryptoSecureBankTokenLfDlgwi.addBlackList.call(addressZs0fxdD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintmwVhHyf = BigInt("2019")
		const addressKdQEOLb = accounts[1]
		const addressMgiHDdA = accounts[1]
		const addressVILXcX4 = "0x0000000000000000000000000000000000000001"
		const boolCxna7hG = await CryptoSecureBankTokensr375w6.approve.call(addressKdQEOLb, uintmwVhHyf, {from: accounts[1]});
		const uintlakStOP = await CryptoSecureBankTokensr375w6.allowance.call(addressVILXcX4, addressMgiHDdA, {from: accounts[0]});

		assert.equal(boolCxna7hG, true)
		assert.equal(uintlakStOP, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintOWVYST = BigInt("2019")
		const addressDfoNhqX = accounts[2]
		const uintYIeZo8C = BigInt("1194")
		const addressyVb7rrf = accounts[1]
		const addressDrGPVq = accounts[1]
		const addressaluHymp = "0x0000000000000000000000000000000000000001"
		const uintvrK9bep = BigInt("1046")
		const addressUkeVgSn = accounts[4]
		const boolCxna7hG = await CryptoSecureBankTokensr375w6.approve.call(addressDfoNhqX, uintOWVYST, {from: accounts[1]});
		const booltssZzx = await CryptoSecureBankTokensr375w6.transfer.call(addressyVb7rrf, uintYIeZo8C, {from: accounts[2]});
		const uintlakStOP = await CryptoSecureBankTokensr375w6.allowance.call(addressaluHymp, addressDrGPVq, {from: accounts[0]});
		const boolFdTf9P2 = await CryptoSecureBankTokensr375w6.approve.call(addressUkeVgSn, uintvrK9bep, {from: accounts[2]});

		assert.equal(boolCxna7hG, true)
		await expect(CryptoSecureBankTokensr375w6.transfer.call(addressyVb7rrf, uintYIeZo8C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintHW01lO0 = BigInt("2019")
		const addressM0q0Ads = accounts[1]
		const addressmyoqkzJ = "0x0000000000000000000000000000000000000001"
		const addressx4omMGr = accounts[1]
		const addressaUyCcbu = "0x0000000000000000000000000000000000000001"
		const boolCxna7hG = await CryptoSecureBankTokensr375w6.approve.call(addressM0q0Ads, uintHW01lO0, {from: accounts[1]});
		const boolhbfEINs = await CryptoSecureBankTokensr375w6.getBlackListStatus.call(addressmyoqkzJ, {from: accounts[1]});
		const uintlakStOP = await CryptoSecureBankTokensr375w6.allowance.call(addressaUyCcbu, addressx4omMGr, {from: accounts[0]});

		assert.equal(boolCxna7hG, true)
		assert.equal(boolhbfEINs, false)
		assert.equal(uintlakStOP, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintKfaZPr = BigInt("2019")
		const addressvpAszij = accounts[2]
		const uintA1mm4h3 = BigInt("1211")
		const addresscuTVbgd = accounts[1]
		const addressxBqGsbs = accounts[1]
		const addressLrr25Bo = "0x0000000000000000000000000000000000000001"
		const uintRTYd2T = BigInt("1046")
		const addressa0LRWex = accounts[4]
		const uintr2fS8UO = await CryptoSecureBankTokensr375w6.totalSupply.call({from: accounts[0]});
		const boolCxna7hG = await CryptoSecureBankTokensr375w6.approve.call(addressvpAszij, uintKfaZPr, {from: accounts[1]});
		const booltssZzx = await CryptoSecureBankTokensr375w6.transfer.call(addresscuTVbgd, uintA1mm4h3, {from: accounts[2]});
		const uintlakStOP = await CryptoSecureBankTokensr375w6.allowance.call(addressLrr25Bo, addressxBqGsbs, {from: accounts[0]});
		const boolFdTf9P2 = await CryptoSecureBankTokensr375w6.approve.call(addressa0LRWex, uintRTYd2T, {from: accounts[2]});

		assert.equal(boolCxna7hG, true)
		assert.equal(uintr2fS8UO, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokensr375w6.transfer.call(addresscuTVbgd, uintA1mm4h3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLfDlgwi = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressToXybij = accounts[1]
		const addressf5GEfuK = accounts[1]
		const addresshwfnTm7 = await CryptoSecureBankTokenLfDlgwi.getOwner.call({from: accounts[3]});
		const boolTVF8Fy = await CryptoSecureBankTokenLfDlgwi.deprecate.call(addressToXybij, {from: "0x0000000000000000000000000000000000000001"});
		const addressdauzvqC = await CryptoSecureBankTokenLfDlgwi.addBlackList.call(addressf5GEfuK, {from: accounts[1]});

		assert.equal(addresshwfnTm7, 0x69BB6deED2cb7D12F0aF19AB5B3B8a0450a2cBB0)
		await expect(CryptoSecureBankTokenLfDlgwi.deprecate.call(addressToXybij, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintTm6oJzO = BigInt("2019")
		const addressFmC7cEA = accounts[1]
		const addressIwVhgUh = accounts[1]
		const addresscHXiJNs = accounts[2]
		const addressIkl9urw = "0x0000000000000000000000000000000000000001"
		const boolCxna7hG = await CryptoSecureBankTokensr375w6.approve.call(addressFmC7cEA, uintTm6oJzO, {from: accounts[1]});
		const addressvzMcvgl = await CryptoSecureBankTokensr375w6.destroyBlackFunds.call(addressIwVhgUh, {from: accounts[4]});
		const uintlakStOP = await CryptoSecureBankTokensr375w6.allowance.call(addressIkl9urw, addresscHXiJNs, {from: accounts[0]});

		assert.equal(boolCxna7hG, true)
		await expect(CryptoSecureBankTokensr375w6.destroyBlackFunds.call(addressIwVhgUh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDDzYQK9 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uinthZPn9ds = BigInt("152")
		const addressnmy6qj9 = accounts[2]
		const addressPVhYtJy = accounts[5]
		const uintRuBRGMK = BigInt("1457")
		const uintIgD94Xz = BigInt("1219")
		const addresszFcyeZK = accounts[4]
		const addresswgUDpNo = accounts[4]
		const boolIYOkgyj = await CryptoSecureBankTokenDDzYQK9.approve.call(addressnmy6qj9, uinthZPn9ds, {from: accounts[2]});
		const boolCU11DeM = await CryptoSecureBankTokenDDzYQK9.deprecate.call(addressPVhYtJy, {from: accounts[1]});
		const boolIZbM8Cm = await CryptoSecureBankTokenDDzYQK9.redeem.call(uintRuBRGMK, {from: accounts[1]});
		await CryptoSecureBankTokenDDzYQK9.unpause.call({from: accounts[1]});
		const boolrt8g9yM = await CryptoSecureBankTokenDDzYQK9.transferFrom.call(addresswgUDpNo, addresszFcyeZK, uintIgD94Xz, {from: accounts[1]});

		assert.equal(boolCU11DeM, true)
		assert.equal(boolIYOkgyj, true)
		assert.equal(boolIZbM8Cm, true)
		await expect(CryptoSecureBankTokenDDzYQK9.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenaUtRXUX = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressMU4CUAl = accounts[0]
		const uintqsG56NI = BigInt("1772")
		const addressXaCl9fv = accounts[4]
		const addressSwF4fDP = accounts[0]
		const uintxlRasRu = BigInt("931")
		const addresskEpo2ij = accounts[0]
		const uintOSpYc1 = await CryptoSecureBankTokenaUtRXUX.balanceOf.call(addressMU4CUAl, {from: accounts[0]});
		const boolPQZ6QSG = await CryptoSecureBankTokenaUtRXUX.transfer.call(addressXaCl9fv, uintqsG56NI, {from: accounts[0]});
		const addressjUuvMXX = await CryptoSecureBankTokenaUtRXUX.transferOwnership.call(addressSwF4fDP, {from: accounts[1]});
		const uintDsUBMdQ = await CryptoSecureBankTokenaUtRXUX.onlyPayloadSize.call(uintxlRasRu, {from: accounts[1]});
		const addressDTQUY15 = await CryptoSecureBankTokenaUtRXUX.removeBlackList.call(addresskEpo2ij, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPQZ6QSG, true)
		assert.equal(uintOSpYc1, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenaUtRXUX.transferOwnership.call(addressSwF4fDP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresszKmQgAW = accounts[1]
		const addressnm5A6Rr = "0x0000000000000000000000000000000000000001"
		const uintlakStOP = await CryptoSecureBankTokensr375w6.allowance.call(addressnm5A6Rr, addresszKmQgAW, {from: accounts[0]});
		await CryptoSecureBankTokensr375w6.pause.call({from: accounts[4]});

		assert.equal(uintlakStOP, BigInt("0"))
		await expect(CryptoSecureBankTokensr375w6.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLfDlgwi = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresszZTIPr = accounts[1]
		const uintWGGmc8Q = BigInt("193")
		const addressG7G9Q65 = "0x0000000000000000000000000000000000000002"
		const addressm0sLugx = accounts[2]
		const address3qbP8x = accounts[1]
		const addressHqwdlVU = await CryptoSecureBankTokenLfDlgwi.removeBlackList.call(addresszZTIPr, {from: accounts[5]});
		const booldvTT4tu = await CryptoSecureBankTokenLfDlgwi.transferFrom.call(addressm0sLugx, addressG7G9Q65, uintWGGmc8Q, {from: accounts[3]});
		const addressvIC8SCq = await CryptoSecureBankTokenLfDlgwi.addBlackList.call(address3qbP8x, {from: accounts[3]});

		await expect(CryptoSecureBankTokenLfDlgwi.transferFrom.call(addressm0sLugx, addressG7G9Q65, uintWGGmc8Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpGz8tb = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressv6IPSuz = accounts[0]
		const addressFCa1DiF = accounts[2]
		const uintCsiu8OT = await CryptoSecureBankTokenpGz8tb.balanceOf.call(addressv6IPSuz, {from: accounts[4]});
		const addressOgt6GW4 = await CryptoSecureBankTokenpGz8tb.getOwner.call({from: accounts[2]});
		const addressa8MnGR = await CryptoSecureBankTokenpGz8tb.setOwner2.call(addressFCa1DiF, {from: accounts[0]});

		assert.equal(addressOgt6GW4, 0x9a3A9a42D1c69D5C192f44c744ce3790FF7A5f8A)
		assert.equal(uintCsiu8OT, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintMpk3Nvv = BigInt("2019")
		const addressZQVMNf = accounts[1]
		const addressDB48LMq = accounts[4]
		const uintLmA0D2C = BigInt("1609")
		const addressvNxfoL = accounts[3]
		const addressUrnPKTq = accounts[1]
		const boolCxna7hG = await CryptoSecureBankTokensr375w6.approve.call(addressZQVMNf, uintMpk3Nvv, {from: accounts[1]});
		const addressXo1ZFeL = await CryptoSecureBankTokensr375w6.transferOwnership.call(addressDB48LMq, {from: accounts[4]});
		const boolgluAO1 = await CryptoSecureBankTokensr375w6.transferFrom.call(addressUrnPKTq, addressvNxfoL, uintLmA0D2C, {from: accounts[4]});

		assert.equal(boolCxna7hG, true)
		await expect(CryptoSecureBankTokensr375w6.transferFrom.call(addressUrnPKTq, addressvNxfoL, uintLmA0D2C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDDzYQK9 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintrxOZZ9 = BigInt("0")
		const addressUZTvEPO = accounts[1]
		const addressf78vTIU = accounts[2]
		const uintnEh0SHR = BigInt("537")
		const addresshyXL6Uu = "0x0000000000000000000000000000000000000001"
		const uinttE9k9cb = BigInt("1787")
		const addressQ6JiXuy = accounts[0]
		const addressigySKHg = accounts[4]
		const boolGlrqBx4 = await CryptoSecureBankTokenDDzYQK9.transferFrom.call(addressf78vTIU, addressUZTvEPO, uintrxOZZ9, {from: accounts[4]});
		const boolfy6kckO = await CryptoSecureBankTokenDDzYQK9.approve.call(addresshyXL6Uu, uintnEh0SHR, {from: "0x0000000000000000000000000000000000000001"});
		const uintbzMAO4D = await CryptoSecureBankTokenDDzYQK9.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenDDzYQK9.pause.call({from: accounts[1]});
		const boolq1VWW3G = await CryptoSecureBankTokenDDzYQK9.transferFrom.call(addressigySKHg, addressQ6JiXuy, uinttE9k9cb, {from: accounts[3]});

		assert.equal(boolGlrqBx4, true)
		assert.equal(boolfy6kckO, true)
		assert.equal(uintbzMAO4D, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenDDzYQK9.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensr375w6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintl2NVjUt = BigInt("152")
		const uintxp44e3V = BigInt("686")
		const uintpXuANkP = BigInt("2019")
		const addressLbfF1hB = accounts[2]
		const uintu8DOxVn = await CryptoSecureBankTokensr375w6.setParams.call(uintxp44e3V, uintl2NVjUt, {from: accounts[4]});
		const boolCxna7hG = await CryptoSecureBankTokensr375w6.approve.call(addressLbfF1hB, uintpXuANkP, {from: accounts[1]});

		await expect(CryptoSecureBankTokensr375w6.setParams.call(uintxp44e3V, uintl2NVjUt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})