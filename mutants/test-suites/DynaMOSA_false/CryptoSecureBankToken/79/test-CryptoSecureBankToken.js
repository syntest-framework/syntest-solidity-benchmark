const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenY38YB99 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintszHrOH6 = BigInt("528")
		const addressqAukVhO = accounts[0]
		const addressC5HGgh = accounts[3]
		const addressAFCEh3w = accounts[3]
//		await CryptoSecureBankTokenY38YB99.pause.call({from: accounts[3]});
//		const addressugobCEP = await CryptoSecureBankTokenY38YB99.getOwner.call({from: accounts[1]});
//		const booloRCyjK = await CryptoSecureBankTokenY38YB99.transfer.call(addressqAukVhO, uintszHrOH6, {from: accounts[1]});
//		await CryptoSecureBankTokenY38YB99.whenNotPaused.call({from: accounts[1]});
//		const addressn5Qs67U = await CryptoSecureBankTokenY38YB99.removeBlackList.call(addressC5HGgh, {from: accounts[4]});
//		const uintAxiq3t3 = await CryptoSecureBankTokenY38YB99.balanceOf.call(addressAFCEh3w, {from: accounts[2]});

		await expect(CryptoSecureBankTokenY38YB99.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUun5RTD = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintLhS3Sgi = BigInt("1708")
		const addressR0Df9q = accounts[2]
		const uintHeWfFrU = BigInt("793")
		const addressJTkeffj = accounts[5]
		const addresso7HfVcP = "0x0000000000000000000000000000000000000001"
		const addresshnli93S = accounts[5]
		const boolOhLdYu = await CryptoSecureBankTokenUun5RTD.approve.call(addressR0Df9q, uintLhS3Sgi, {from: accounts[0]});
//		const boolI85Sb5u = await CryptoSecureBankTokenUun5RTD.transfer.call(addressJTkeffj, uintHeWfFrU, {from: accounts[0]});
//		await CryptoSecureBankTokenUun5RTD.whenPaused.call({from: accounts[3]});
//		const uintlMfcWFi = await CryptoSecureBankTokenUun5RTD.allowance.call(addresshnli93S, addresso7HfVcP, {from: accounts[4]});

		assert.equal(boolOhLdYu, true)
		await expect(CryptoSecureBankTokenUun5RTD.transfer.call(addressJTkeffj, uintHeWfFrU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken8qCY0o = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresspHnaywI = accounts[0]
		const addressDwFdNm = accounts[1]
		const uintExBKEKV = BigInt("1325")
		const addresshd74MbQ = accounts[0]
		const addressf1YmBtd = accounts[2]
		const uintXg2WsIZ = await CryptoSecureBankToken8qCY0o.balanceOf.call(addresspHnaywI, {from: accounts[1]});
		const addresstjvNHx0 = await CryptoSecureBankToken8qCY0o.setOwner2.call(addressDwFdNm, {from: accounts[0]});
//		await CryptoSecureBankToken8qCY0o.unpause.call({from: accounts[3]});
//		const boolnlzlZhH = await CryptoSecureBankToken8qCY0o.transferFrom.call(addressf1YmBtd, addresshd74MbQ, uintExBKEKV, {from: accounts[3]});

		assert.equal(uintXg2WsIZ, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankToken8qCY0o.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbLRqYJa = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressanD82d1 = "0x0000000000000000000000000000000000000001"
		const uintub3XlY = BigInt("386")
		const addressvvzWR5T = accounts[2]
		const boolokz4Wa = await CryptoSecureBankTokenbLRqYJa.getBlackListStatus.call(addressanD82d1, {from: "0x0000000000000000000000000000000000000001"});
		const uintSsr8w2b = await CryptoSecureBankTokenbLRqYJa.totalSupply.call({from: accounts[3]});
//		const uintRQMxd22 = await CryptoSecureBankTokenbLRqYJa.onlyPayloadSize.call(uintub3XlY, {from: accounts[5]});
//		const addressGM3R71X = await CryptoSecureBankTokenbLRqYJa.destroyBlackFunds.call(addressvvzWR5T, {from: accounts[2]});

		assert.equal(boolokz4Wa, false)
		assert.equal(uintSsr8w2b, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenbLRqYJa.onlyPayloadSize.call(uintub3XlY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenkopKdx3 = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyhRdM9z = BigInt("1402")
		const uintExaXOrt = BigInt("1036")
		const uintfHuUWnq = await CryptoSecureBankTokenkopKdx3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintR1Ni2ld = await CryptoSecureBankTokenkopKdx3.setParams.call(uintExaXOrt, uintyhRdM9z, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken8qCY0o = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressFCrbRkS = accounts[1]
		const addressqKRwzkD = accounts[2]
		const uintBXVQYxV = BigInt("1657")
		const addressgyRt0V = "0x0000000000000000000000000000000000000001"
		const addressvdnOGK0 = "0x0000000000000000000000000000000000000001"
		const uintTE3wveN = BigInt("1325")
		const addressAxVjUO = accounts[0]
		const addressNEkJLQt = accounts[2]
		const uintXg2WsIZ = await CryptoSecureBankToken8qCY0o.balanceOf.call(addressFCrbRkS, {from: accounts[1]});
		const addresstjvNHx0 = await CryptoSecureBankToken8qCY0o.setOwner2.call(addressqKRwzkD, {from: accounts[0]});
//		const boolO2sFNXL = await CryptoSecureBankToken8qCY0o.transferFrom.call(addressvdnOGK0, addressgyRt0V, uintBXVQYxV, {from: accounts[3]});
//		await CryptoSecureBankToken8qCY0o.whenNotPaused.call({from: accounts[1]});
//		await CryptoSecureBankToken8qCY0o.unpause.call({from: accounts[3]});
//		const boolnlzlZhH = await CryptoSecureBankToken8qCY0o.transferFrom.call(addressNEkJLQt, addressAxVjUO, uintTE3wveN, {from: accounts[3]});

		assert.equal(uintXg2WsIZ, BigInt("0"))
		await expect(CryptoSecureBankToken8qCY0o.transferFrom.call(addressvdnOGK0, addressgyRt0V, uintBXVQYxV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbLRqYJa = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressYg3Dttf = "0x0000000000000000000000000000000000000000"
		const address0wnymv = "0x0000000000000000000000000000000000000001"
		const addressh6vg7h = accounts[2]
		const uintY6eC6MX = BigInt("1560")
		const addressBaFrpln = accounts[0]
		const addressTb1jQB = accounts[0]
		const addressQQcAtC6 = accounts[4]
		const uintJBWZkdq = BigInt("1729")
		const addressNzp8ik0 = accounts[1]
		const addressQMbCoar = accounts[1]
		const addressl3H1l7v = accounts[0]
		const uinttotmQjo = BigInt("386")
		const addressmpIssJO = accounts[4]
		const addressBCT6tV9 = accounts[2]
		const boolokz4Wa = await CryptoSecureBankTokenbLRqYJa.getBlackListStatus.call(addressYg3Dttf, {from: "0x0000000000000000000000000000000000000001"});
//		const addressAJWjV94 = await CryptoSecureBankTokenbLRqYJa.destroyBlackFunds.call(address0wnymv, {from: accounts[1]});
//		const uintSsr8w2b = await CryptoSecureBankTokenbLRqYJa.totalSupply.call({from: accounts[3]});
//		const addressPJMZIXO = await CryptoSecureBankTokenbLRqYJa.setOwner2.call(addressh6vg7h, {from: accounts[2]});
//		const boolc1JX8ge = await CryptoSecureBankTokenbLRqYJa.transferFrom.call(addressTb1jQB, addressBaFrpln, uintY6eC6MX, {from: accounts[0]});
//		const uintU7w9SaD = await CryptoSecureBankTokenbLRqYJa.balanceOf.call(addressQQcAtC6, {from: accounts[0]});
//		const boolgHCNZ7S = await CryptoSecureBankTokenbLRqYJa.transferFrom.call(addressQMbCoar, addressNzp8ik0, uintJBWZkdq, {from: accounts[0]});
//		const boolyOLNFl = await CryptoSecureBankTokenbLRqYJa.getBlackListStatus.call(addressl3H1l7v, {from: accounts[0]});
//		const uintRQMxd22 = await CryptoSecureBankTokenbLRqYJa.onlyPayloadSize.call(uinttotmQjo, {from: accounts[5]});
//		const uintWixpu8m = await CryptoSecureBankTokenbLRqYJa.balanceOf.call(addressmpIssJO, {from: accounts[3]});
//		const addressGM3R71X = await CryptoSecureBankTokenbLRqYJa.destroyBlackFunds.call(addressBCT6tV9, {from: accounts[2]});

		assert.equal(boolokz4Wa, false)
		await expect(CryptoSecureBankTokenbLRqYJa.destroyBlackFunds.call(address0wnymv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbLRqYJa = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintSAJVTOT = BigInt("1952")
		const addressfZeA7r = accounts[0]
		const addressgEOjDP = "0x0000000000000000000000000000000000000000"
		const addresszTgQZfj = accounts[4]
		const uintBfX6Qv8 = BigInt("386")
		const addressBj1fT2S = accounts[3]
		const boolYRCfAka = await CryptoSecureBankTokenbLRqYJa.approve.call(addressfZeA7r, uintSAJVTOT, {from: accounts[4]});
		const addresskp5zxto = await CryptoSecureBankTokenbLRqYJa.getOwner.call({from: accounts[4]});
		const boolokz4Wa = await CryptoSecureBankTokenbLRqYJa.getBlackListStatus.call(addressgEOjDP, {from: "0x0000000000000000000000000000000000000001"});
		const uintU7w9SaD = await CryptoSecureBankTokenbLRqYJa.balanceOf.call(addresszTgQZfj, {from: accounts[0]});
//		const uintRQMxd22 = await CryptoSecureBankTokenbLRqYJa.onlyPayloadSize.call(uintBfX6Qv8, {from: accounts[5]});
//		const addressGM3R71X = await CryptoSecureBankTokenbLRqYJa.destroyBlackFunds.call(addressBj1fT2S, {from: accounts[2]});

		assert.equal(addresskp5zxto, 0x208043DEC6C8B4e1fCC5870A0f33eF1430a4eFdf)
		assert.equal(boolYRCfAka, true)
		assert.equal(boolokz4Wa, false)
		assert.equal(uintU7w9SaD, BigInt("0"))
		await expect(CryptoSecureBankTokenbLRqYJa.onlyPayloadSize.call(uintBfX6Qv8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXEhJQq5 = await CryptoSecureBankToken.new({from: accounts[2]});
		const uinttk49YD = BigInt("1020")
		const addressjpGMoK7 = accounts[4]
		const uintS6Ro1Np = BigInt("621")
		const addresseRWGRDG = accounts[3]
		const boolfw4qqN = await CryptoSecureBankTokenXEhJQq5.transfer.call(addressjpGMoK7, uinttk49YD, {from: accounts[2]});
//		const boolMSiw0Y = await CryptoSecureBankTokenXEhJQq5.transfer.call(addresseRWGRDG, uintS6Ro1Np, {from: accounts[0]});
//		await CryptoSecureBankTokenXEhJQq5.onlyOwner.call({from: accounts[4]});

		assert.equal(boolfw4qqN, true)
		await expect(CryptoSecureBankTokenXEhJQq5.transfer.call(addresseRWGRDG, uintS6Ro1Np, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken8qCY0o = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressNyMuQ67 = accounts[0]
		const addressk8JOCtD = accounts[2]
		const addressUFMyaMM = accounts[4]
		const uintOVzTox2 = BigInt("1325")
		const addressAJMij7 = accounts[0]
		const addressGVUA4oB = accounts[2]
		const uintXg2WsIZ = await CryptoSecureBankToken8qCY0o.balanceOf.call(addressNyMuQ67, {from: accounts[1]});
		const addressmpEeyAW = await CryptoSecureBankToken8qCY0o.transferOwnership.call(addressk8JOCtD, {from: accounts[0]});
//		await CryptoSecureBankToken8qCY0o.unpause.call({from: accounts[3]});
//		const addressIsYnmk = await CryptoSecureBankToken8qCY0o.transferOwnership.call(addressUFMyaMM, {from: accounts[4]});
//		const boolnlzlZhH = await CryptoSecureBankToken8qCY0o.transferFrom.call(addressGVUA4oB, addressAJMij7, uintOVzTox2, {from: accounts[3]});

		assert.equal(uintXg2WsIZ, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankToken8qCY0o.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXEhJQq5 = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressu57C6nb = accounts[2]
		const addressii3KF8 = accounts[0]
		const uintGGQSx1Z = BigInt("1020")
		const addressZVWkgB = accounts[5]
		const uintsMSL1B9 = BigInt("621")
		const addressPPQC9g7 = accounts[3]
		const uintmdTAlP4 = await CryptoSecureBankTokenXEhJQq5.allowance.call(addressii3KF8, addressu57C6nb, {from: accounts[4]});
		const boolfw4qqN = await CryptoSecureBankTokenXEhJQq5.transfer.call(addressZVWkgB, uintGGQSx1Z, {from: accounts[2]});
//		const boolMSiw0Y = await CryptoSecureBankTokenXEhJQq5.transfer.call(addressPPQC9g7, uintsMSL1B9, {from: accounts[0]});

		assert.equal(boolfw4qqN, true)
		assert.equal(uintmdTAlP4, BigInt("0"))
		await expect(CryptoSecureBankTokenXEhJQq5.transfer.call(addressPPQC9g7, uintsMSL1B9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXEhJQq5 = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresstrHKLF3 = accounts[1]
		const addressj2FpGI = accounts[4]
		const addressgmbsFht = accounts[2]
		const addressWSJz9J = accounts[0]
		const addressMcVvwHX = await CryptoSecureBankTokenXEhJQq5.removeBlackList.call(addresstrHKLF3, {from: accounts[2]});
//		await CryptoSecureBankTokenXEhJQq5.onlyOwner.call({from: accounts[4]});
//		const addressUB2lB27 = await CryptoSecureBankTokenXEhJQq5.transferOwnership.call(addressj2FpGI, {from: accounts[4]});
//		const uintrNaDQyN = await CryptoSecureBankTokenXEhJQq5.allowance.call(addressWSJz9J, addressgmbsFht, {from: accounts[3]});

		await expect(CryptoSecureBankTokenXEhJQq5.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentiwHzDK = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressXSVNyIw = accounts[5]
		const addressyfHF93i = accounts[4]
		const addressDmq2hNb = accounts[1]
		const uintutJL2Ly = BigInt("654")
		const uintkXBCzeb = BigInt("1843")
		const addressgdZs4O = accounts[1]
		const addressBi0P48Y = accounts[0]
//		await CryptoSecureBankTokentiwHzDK.pause.call({from: accounts[2]});
//		const addressDdxOeHm = await CryptoSecureBankTokentiwHzDK.destroyBlackFunds.call(addressXSVNyIw, {from: accounts[5]});
//		const uintJDvARwb = await CryptoSecureBankTokentiwHzDK.allowance.call(addressDmq2hNb, addressyfHF93i, {from: accounts[3]});
//		const uintSXIVCxH = await CryptoSecureBankTokentiwHzDK.onlyPayloadSize.call(uintutJL2Ly, {from: accounts[1]});
//		const boolo9sN0sA = await CryptoSecureBankTokentiwHzDK.transferFrom.call(addressBi0P48Y, addressgdZs4O, uintkXBCzeb, {from: accounts[3]});

		await expect(CryptoSecureBankTokentiwHzDK.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUun5RTD = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressyv2bMx7 = "0x00000000000000000000000000000000000000-1"
		const addresswozFkCZ = accounts[6]
		const address30uxrc = accounts[1]
//		const uintlMfcWFi = await CryptoSecureBankTokenUun5RTD.allowance.call(addresswozFkCZ, addressyv2bMx7, {from: accounts[4]});
//		const addressx4947ym = await CryptoSecureBankTokenUun5RTD.transferOwnership.call(address30uxrc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenUun5RTD.allowance.call(addresswozFkCZ, addressyv2bMx7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXEhJQq5 = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressiA5Yol8 = accounts[2]
		const uintVJvny3j = BigInt("728")
		const addresseixOQ2X = accounts[4]
		const addressSBLyLFT = await CryptoSecureBankTokenXEhJQq5.addBlackList.call(addressiA5Yol8, {from: accounts[2]});
		const boolfw4qqN = await CryptoSecureBankTokenXEhJQq5.transfer.call(addresseixOQ2X, uintVJvny3j, {from: accounts[2]});

		assert.equal(boolfw4qqN, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUun5RTD = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintzNS83s = BigInt("761")
		const addressgxxVdjv = accounts[0]
		const addressMhBtbpZ = accounts[3]
		const uintGU40SC = BigInt("1708")
		const addressSPUQBeF = accounts[2]
		const bool32tEdc = await CryptoSecureBankTokenUun5RTD.approve.call(addressgxxVdjv, uintzNS83s, {from: accounts[3]});
		const boola3VhAqx = await CryptoSecureBankTokenUun5RTD.deprecate.call(addressMhBtbpZ, {from: accounts[3]});
		const boolOhLdYu = await CryptoSecureBankTokenUun5RTD.approve.call(addressSPUQBeF, uintGU40SC, {from: accounts[0]});

		assert.equal(bool32tEdc, true)
		assert.equal(boolOhLdYu, true)
		assert.equal(boola3VhAqx, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUun5RTD = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintLRqiEE9 = BigInt("0")
		const addressom6QfU = accounts[2]
		const addressbT7kBbS = "0x0000000000000000000000000000000000000001"
		const addressmdJIYLe = accounts[6]
		const uintjIheOmX = BigInt("795")
		const addressZSC0kPY = accounts[1]
		const boolxLSgPui = await CryptoSecureBankTokenUun5RTD.transfer.call(addressom6QfU, uintLRqiEE9, {from: accounts[2]});
		const uintavdlKFr = await CryptoSecureBankTokenUun5RTD.totalSupply.call({from: accounts[1]});
		const uintlMfcWFi = await CryptoSecureBankTokenUun5RTD.allowance.call(addressmdJIYLe, addressbT7kBbS, {from: accounts[4]});
//		await CryptoSecureBankTokenUun5RTD.unpause.call({from: accounts[2]});
//		const boolOUqcj8l = await CryptoSecureBankTokenUun5RTD.approve.call(addressZSC0kPY, uintjIheOmX, {from: accounts[2]});

		assert.equal(boolxLSgPui, true)
		assert.equal(uintavdlKFr, BigInt("100000000000000000000000000"))
		assert.equal(uintlMfcWFi, BigInt("0"))
		await expect(CryptoSecureBankTokenUun5RTD.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO82eRRf = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintT3dciZc = BigInt("825")
		const uintBUYpDDv = BigInt("1458")
		const uintx3nBAs = BigInt("560")
		const addressJDg4ka = accounts[5]
		const addressK1uedeD = accounts[0]
		const uintBRxt0Gr = BigInt("1356")
		const addressQEy0MIr = accounts[3]
//		const uintCDpzZ6C = await CryptoSecureBankTokenO82eRRf.setParams.call(uintBUYpDDv, uintT3dciZc, {from: accounts[2]});
//		const boolszm6o7j = await CryptoSecureBankTokenO82eRRf.transfer.call(addressJDg4ka, uintx3nBAs, {from: accounts[1]});
//		const boold8NdEKr = await CryptoSecureBankTokenO82eRRf.deprecate.call(addressK1uedeD, {from: accounts[4]});
//		await CryptoSecureBankTokenO82eRRf.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolSs4P72T = await CryptoSecureBankTokenO82eRRf.approve.call(addressQEy0MIr, uintBRxt0Gr, {from: accounts[1]});

		await expect(CryptoSecureBankTokenO82eRRf.setParams.call(uintBUYpDDv, uintT3dciZc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyMHl45 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintybYrZnu = BigInt("1264")
		const uintwlrpJA7 = BigInt("722")
		const addressjwOyppZ = accounts[4]
		const boolqBCl48q = await CryptoSecureBankTokenyMHl45.redeem.call(uintybYrZnu, {from: accounts[4]});
//		const uinthQfUh8 = await CryptoSecureBankTokenyMHl45.onlyPayloadSize.call(uintwlrpJA7, {from: accounts[3]});
//		const addressnsVmHl6 = await CryptoSecureBankTokenyMHl45.getOwner.call({from: accounts[3]});
//		const boolKvghMVN = await CryptoSecureBankTokenyMHl45.deprecate.call(addressjwOyppZ, {from: accounts[2]});
//		const addressLEtyJsW = await CryptoSecureBankTokenyMHl45.getOwner.call({from: accounts[2]});

		assert.equal(boolqBCl48q, true)
		await expect(CryptoSecureBankTokenyMHl45.onlyPayloadSize.call(uintwlrpJA7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})