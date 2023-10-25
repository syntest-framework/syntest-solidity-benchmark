const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenR8tWyzn = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresswGzTHvu = "0x0000000000000000000000000000000000000001"
		const uintf1f8Kc4 = BigInt("45")
		await CryptoSecureBankTokenR8tWyzn.pause.call({from: accounts[5]});
		const boolI5H375 = await CryptoSecureBankTokenR8tWyzn.deprecate.call(addresswGzTHvu, {from: accounts[3]});
		const uintA4t0EF = await CryptoSecureBankTokenR8tWyzn.onlyPayloadSize.call(uintf1f8Kc4, {from: accounts[3]});
		await CryptoSecureBankTokenR8tWyzn.whenPaused.call({from: accounts[4]});

		await expect(CryptoSecureBankTokenR8tWyzn.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenr4VORvg = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintJlP8QoZ = BigInt("1851")
		const addressBaGH1sq = accounts[1]
		const addresscYiAy0 = accounts[2]
		const uintUtmwQnY = BigInt("468")
		const addressqedKemZ = accounts[3]
		const addressp5CcP6c = accounts[0]
		const uintqvewKXO = BigInt("620")
		const addressbW4EsM = accounts[5]
		const addressNJpSP7j = accounts[3]
		const boolUiiKFWE = await CryptoSecureBankTokenr4VORvg.transferFrom.call(addresscYiAy0, addressBaGH1sq, uintJlP8QoZ, {from: accounts[1]});
		const boollYk4avM = await CryptoSecureBankTokenr4VORvg.transferFrom.call(addressp5CcP6c, addressqedKemZ, uintUtmwQnY, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenr4VORvg.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpMZ5cVt = await CryptoSecureBankTokenr4VORvg.transferFrom.call(addressNJpSP7j, addressbW4EsM, uintqvewKXO, {from: accounts[1]});
		await CryptoSecureBankTokenr4VORvg.pause.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenr4VORvg.transferFrom.call(addresscYiAy0, addressBaGH1sq, uintJlP8QoZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressSd9gonC = "0x0000000000000000000000000000000000000001"
		const addressaaLjPLB = "0x0000000000000000000000000000000000000001"
		const addressbAbX9SP = accounts[3]
		const addressKovPBJ7 = accounts[0]
		const uintjtntwN = BigInt("1691")
		const addressL1Q5Az5 = accounts[5]
		const addressnTlL8od = accounts[5]
		const addressZ4snl5P = accounts[2]
		const uintDHvBsa7 = await CryptoSecureBankTokendihTAUQ.allowance.call(addressaaLjPLB, addressSd9gonC, {from: "0x0000000000000000000000000000000000000001"});
		const uintoabTuq = await CryptoSecureBankTokendihTAUQ.allowance.call(addressKovPBJ7, addressbAbX9SP, {from: accounts[4]});
		const booli1iOeXr = await CryptoSecureBankTokendihTAUQ.transfer.call(addressL1Q5Az5, uintjtntwN, {from: accounts[3]});
		const uintXDKfMa = await CryptoSecureBankTokendihTAUQ.allowance.call(addressZ4snl5P, addressnTlL8od, {from: accounts[1]});
		const address4EkVPT = await CryptoSecureBankTokendihTAUQ.getOwner.call({from: accounts[1]});

		assert.equal(address4EkVPT, 0xe3C06Dbc4a80EB09cA4C9E1de7d5f178eEFF161B)
		assert.equal(booli1iOeXr, true)
		assert.equal(uintDHvBsa7, BigInt("0"))
		assert.equal(uintXDKfMa, BigInt("0"))
		assert.equal(uintoabTuq, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyYdNjgW = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint7Eefdo = BigInt("459")
		const addressiyp1KG = accounts[0]
		const addressqaZuho4 = accounts[2]
		const uintTg7ehuB = BigInt("2035")
		const addressYA6Jv0b = accounts[1]
		const addressHhZQAvG = await CryptoSecureBankTokenyYdNjgW.getOwner.call({from: accounts[4]});
		const boolqjPnaBR = await CryptoSecureBankTokenyYdNjgW.transferFrom.call(addressqaZuho4, addressiyp1KG, uint7Eefdo, {from: accounts[5]});
		const booldst4Z2K = await CryptoSecureBankTokenyYdNjgW.approve.call(addressYA6Jv0b, uintTg7ehuB, {from: accounts[0]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokencKkGUu8 = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressRLnUXOo = accounts[3]
		const addresseZef1g = accounts[1]
		const addressXmlZLp = accounts[4]
		const addressgGEBxj2 = accounts[1]
		const addressEiE0X3D = accounts[4]
		const uintih6BokN = await CryptoSecureBankTokencKkGUu8.balanceOf.call(addressRLnUXOo, {from: accounts[0]});
		const addressf3tGv9B = await CryptoSecureBankTokencKkGUu8.addBlackList.call(addresseZef1g, {from: accounts[4]});
		const uintmyrDtRg = await CryptoSecureBankTokencKkGUu8.allowance.call(addressgGEBxj2, addressXmlZLp, {from: "0x0000000000000000000000000000000000000001"});
		const addressMifEm6a = await CryptoSecureBankTokencKkGUu8.getOwner.call({from: accounts[2]});
		const addressxJQJo5s = await CryptoSecureBankTokencKkGUu8.setOwner2.call(addressEiE0X3D, {from: accounts[2]});

		assert.equal(uintih6BokN, BigInt("0"))
		await expect(CryptoSecureBankTokencKkGUu8.addBlackList.call(addresseZef1g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenf6nCfRL = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintaCfv2t = BigInt("1870")
		const addressqGVKLdg = accounts[2]
		const uintaM3ztzj = BigInt("1008")
		const addressSsdWYKs = accounts[1]
		const addressOZdpzDk = await CryptoSecureBankTokenf6nCfRL.getOwner.call({from: accounts[4]});
		const boolZSyUSH1 = await CryptoSecureBankTokenf6nCfRL.approve.call(addressqGVKLdg, uintaCfv2t, {from: accounts[0]});
		const boolSRvaQcm = await CryptoSecureBankTokenf6nCfRL.approve.call(addressSsdWYKs, uintaM3ztzj, {from: accounts[3]});

		assert.equal(addressOZdpzDk, 0xc163E83d5bC949Aa0760D3550C69bF3003C869e0)
		assert.equal(boolSRvaQcm, true)
		assert.equal(boolZSyUSH1, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenf6nCfRL = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintxigF3bl = BigInt("615")
		const addressDfTPMG = accounts[2]
		const uintOUDZRI = BigInt("1008")
		const addressatA50A = accounts[1]
		await CryptoSecureBankTokenf6nCfRL.onlyOwner.call({from: accounts[3]});
		const addressOZdpzDk = await CryptoSecureBankTokenf6nCfRL.getOwner.call({from: accounts[4]});
		const boolZSyUSH1 = await CryptoSecureBankTokenf6nCfRL.approve.call(addressDfTPMG, uintxigF3bl, {from: accounts[0]});
		const boolSRvaQcm = await CryptoSecureBankTokenf6nCfRL.approve.call(addressatA50A, uintOUDZRI, {from: accounts[3]});

		await expect(CryptoSecureBankTokenf6nCfRL.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressWoO5h65 = "0x0000000000000000000000000000000000000001"
		const addressABTLWPG = "0x0000000000000000000000000000000000000001"
		const addressKvG3p86 = accounts[3]
		const addressGBtnb7Y = accounts[1]
		const addressG38a3jQ = accounts[5]
		const addressR9KxI2x = accounts[2]
		const addresskjS3Qoi = accounts[0]
		const uintDHvBsa7 = await CryptoSecureBankTokendihTAUQ.allowance.call(addressABTLWPG, addressWoO5h65, {from: "0x0000000000000000000000000000000000000001"});
		const addressbakHkbA = await CryptoSecureBankTokendihTAUQ.getOwner.call({from: accounts[4]});
		const uintoabTuq = await CryptoSecureBankTokendihTAUQ.allowance.call(addressGBtnb7Y, addressKvG3p86, {from: accounts[4]});
		const uintXDKfMa = await CryptoSecureBankTokendihTAUQ.allowance.call(addressR9KxI2x, addressG38a3jQ, {from: accounts[1]});
		const address4EkVPT = await CryptoSecureBankTokendihTAUQ.getOwner.call({from: accounts[1]});
		const boolLqOOvY0 = await CryptoSecureBankTokendihTAUQ.deprecate.call(addresskjS3Qoi, {from: accounts[3]});

		assert.equal(address4EkVPT, 0xe3C06Dbc4a80EB09cA4C9E1de7d5f178eEFF161B)
		assert.equal(addressbakHkbA, 0xe3C06Dbc4a80EB09cA4C9E1de7d5f178eEFF161B)
		assert.equal(boolLqOOvY0, true)
		assert.equal(uintDHvBsa7, BigInt("0"))
		assert.equal(uintXDKfMa, BigInt("0"))
		assert.equal(uintoabTuq, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressLBQkTBe = "0x0000000000000000000000000000000000000001"
		const addressKzKsfBH = "0x0000000000000000000000000000000000000001"
		const addressAsGymhr = accounts[3]
		const addressNHjk3qf = accounts[1]
		const addressGolonPg = accounts[5]
		const addressd8rlZDj = accounts[2]
		const addressZg8XXzj = accounts[3]
		const uintDHvBsa7 = await CryptoSecureBankTokendihTAUQ.allowance.call(addressKzKsfBH, addressLBQkTBe, {from: "0x0000000000000000000000000000000000000001"});
		const uintoabTuq = await CryptoSecureBankTokendihTAUQ.allowance.call(addressNHjk3qf, addressAsGymhr, {from: accounts[4]});
		const uintXDKfMa = await CryptoSecureBankTokendihTAUQ.allowance.call(addressd8rlZDj, addressGolonPg, {from: accounts[1]});
		const addressoMES9pf = await CryptoSecureBankTokendihTAUQ.removeBlackList.call(addressZg8XXzj, {from: accounts[3]});
		const address4EkVPT = await CryptoSecureBankTokendihTAUQ.getOwner.call({from: accounts[1]});

		assert.equal(address4EkVPT, 0xe3C06Dbc4a80EB09cA4C9E1de7d5f178eEFF161B)
		assert.equal(uintDHvBsa7, BigInt("0"))
		assert.equal(uintXDKfMa, BigInt("0"))
		assert.equal(uintoabTuq, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenf6nCfRL = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintXYKLtJ = BigInt("1870")
		const addressRXrOhuD = accounts[2]
		const uintINyHLX2 = BigInt("1008")
		const addressCGs6Ly = accounts[1]
		const boolZSyUSH1 = await CryptoSecureBankTokenf6nCfRL.approve.call(addressRXrOhuD, uintXYKLtJ, {from: accounts[0]});
		await CryptoSecureBankTokenf6nCfRL.pause.call({from: accounts[2]});
		const boolSRvaQcm = await CryptoSecureBankTokenf6nCfRL.approve.call(addressCGs6Ly, uintINyHLX2, {from: accounts[3]});

		assert.equal(boolZSyUSH1, true)
		await expect(CryptoSecureBankTokenf6nCfRL.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintncrMUaE = BigInt("435")
		const addressVxH0BNs = accounts[0]
		const address4EkVPT = await CryptoSecureBankTokendihTAUQ.getOwner.call({from: accounts[1]});
		const boolhmbsRHm = await CryptoSecureBankTokendihTAUQ.approve.call(addressVxH0BNs, uintncrMUaE, {from: accounts[5]});
		const uintqNUfoJ = await CryptoSecureBankTokendihTAUQ.totalSupply.call({from: accounts[5]});

		assert.equal(address4EkVPT, 0xe3C06Dbc4a80EB09cA4C9E1de7d5f178eEFF161B)
		assert.equal(boolhmbsRHm, true)
		assert.equal(uintqNUfoJ, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhuTZJoX = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresscoVuDZv = accounts[2]
		const addresseeSg1C = accounts[2]
		const addressrOx3MJg = accounts[1]
		const address88SLAr = accounts[0]
		const addresseRm43E1 = accounts[4]
		const boolx3o4eKB = await CryptoSecureBankTokenhuTZJoX.getBlackListStatus.call(addresscoVuDZv, {from: accounts[5]});
		const uintG1vU9sJ = await CryptoSecureBankTokenhuTZJoX.allowance.call(addressrOx3MJg, addresseeSg1C, {from: accounts[3]});
		const uintX5gb00I = await CryptoSecureBankTokenhuTZJoX.allowance.call(addresseRm43E1, address88SLAr, {from: accounts[3]});

		assert.equal(boolx3o4eKB, false)
		assert.equal(uintG1vU9sJ, BigInt("0"))
		assert.equal(uintX5gb00I, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintVMteHLT = BigInt("0")
		const addressMoMf8rV = accounts[1]
		const boolNg9nZ8S = await CryptoSecureBankTokendihTAUQ.transfer.call(addressMoMf8rV, uintVMteHLT, {from: accounts[1]});
		await CryptoSecureBankTokendihTAUQ.unpause.call({from: accounts[2]});
		const address4EkVPT = await CryptoSecureBankTokendihTAUQ.getOwner.call({from: accounts[1]});

		assert.equal(boolNg9nZ8S, true)
		await expect(CryptoSecureBankTokendihTAUQ.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uinto18Osyi = BigInt("1691")
		const addressJasA1ZO = accounts[6]
		const addressDU8jFkL = accounts[4]
		const booli1iOeXr = await CryptoSecureBankTokendihTAUQ.transfer.call(addressJasA1ZO, uinto18Osyi, {from: accounts[3]});
		const address4EkVPT = await CryptoSecureBankTokendihTAUQ.getOwner.call({from: accounts[1]});
		const addresst85n51J = await CryptoSecureBankTokendihTAUQ.transferOwnership.call(addressDU8jFkL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(address4EkVPT, 0xe3C06Dbc4a80EB09cA4C9E1de7d5f178eEFF161B)
		assert.equal(booli1iOeXr, true)
		await expect(CryptoSecureBankTokendihTAUQ.transferOwnership.call(addressDU8jFkL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressyMIucg0 = accounts[1]
		const addressNheKKH = "0x0000000000000000000000000000000000000001"
		const addressrHEjsek = "0x0000000000000000000000000000000000000002"
		const addresszbmIff1 = await CryptoSecureBankTokendihTAUQ.transferOwnership.call(addressyMIucg0, {from: accounts[3]});
		const uintDHvBsa7 = await CryptoSecureBankTokendihTAUQ.allowance.call(addressrHEjsek, addressNheKKH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDHvBsa7, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresszRydhlU = accounts[0]
		const addressFb3L014 = accounts[4]
		const addresshfXzKG5 = accounts[3]
		const addressF8hRnzG = "0x0000000000000000000000000000000000000001"
		const addressna3E5i = "0x0000000000000000000000000000000000000000"
		const uintXK0FJcL = await CryptoSecureBankTokendihTAUQ.allowance.call(addressFb3L014, addresszRydhlU, {from: accounts[4]});
		const addressnONDixI = await CryptoSecureBankTokendihTAUQ.destroyBlackFunds.call(addresshfXzKG5, {from: accounts[3]});
		const uintDHvBsa7 = await CryptoSecureBankTokendihTAUQ.allowance.call(addressna3E5i, addressF8hRnzG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintXK0FJcL, BigInt("0"))
		await expect(CryptoSecureBankTokendihTAUQ.destroyBlackFunds.call(addresshfXzKG5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressqilGA5s = accounts[2]
		const uintAQ5Whr0 = BigInt("836")
		const addressRKk1fQ = "0x0000000000000000000000000000000000000001"
		const addressqUfyviv = "0x0000000000000000000000000000000000000001"
		const addressF3Eu2ia = "0x0000000000000000000000000000000000000000"
		const addressntUY98p = await CryptoSecureBankTokendihTAUQ.setOwner2.call(addressqilGA5s, {from: accounts[3]});
		const boolFCeSMr7 = await CryptoSecureBankTokendihTAUQ.approve.call(addressRKk1fQ, uintAQ5Whr0, {from: accounts[0]});
		const uintDHvBsa7 = await CryptoSecureBankTokendihTAUQ.allowance.call(addressF3Eu2ia, addressqUfyviv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFCeSMr7, true)
		assert.equal(uintDHvBsa7, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uinthIhV9oG = BigInt("1983")
		const addressacMWAGs = accounts[1]
		const addressB5i40l9 = accounts[2]
		const addressNDkgqe = "0x0000000000000000000000000000000000000002"
		const addressPVACBmX = "0x0000000000000000000000000000000000000001"
		const boolHrk8Rz = await CryptoSecureBankTokendihTAUQ.redeem.call(uinthIhV9oG, {from: accounts[3]});
		const addressT2yAgvu = await CryptoSecureBankTokendihTAUQ.transferOwnership.call(addressacMWAGs, {from: accounts[2]});
		const addressS7cp4J = await CryptoSecureBankTokendihTAUQ.transferOwnership.call(addressB5i40l9, {from: accounts[5]});
		const uintDHvBsa7 = await CryptoSecureBankTokendihTAUQ.allowance.call(addressPVACBmX, addressNDkgqe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHrk8Rz, true)
		await expect(CryptoSecureBankTokendihTAUQ.transferOwnership.call(addressacMWAGs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendihTAUQ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintVGdjqNf = BigInt("1718")
		const addressWRKpGs = accounts[6]
		const addresst1WGT67 = accounts[3]
		const booli1iOeXr = await CryptoSecureBankTokendihTAUQ.transfer.call(addressWRKpGs, uintVGdjqNf, {from: accounts[3]});
		const addressxH981T6 = await CryptoSecureBankTokendihTAUQ.addBlackList.call(addresst1WGT67, {from: accounts[3]});

		assert.equal(booli1iOeXr, true)
	});
})