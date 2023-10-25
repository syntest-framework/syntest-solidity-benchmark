const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMVLyGIy = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressSy0lDM3 = accounts[3]
		const addressVCXfbX = accounts[4]
		const uintkjzABAe = BigInt("584")
		const addressLo0dyR3 = accounts[5]
		const boolsy1OzCz = await CryptoSecureBankTokenMVLyGIy.deprecate.call(addressSy0lDM3, {from: accounts[1]});
		const addressjbZ7Zhc = await CryptoSecureBankTokenMVLyGIy.setOwner2.call(addressVCXfbX, {from: accounts[4]});
		const boolfBDX5pS = await CryptoSecureBankTokenMVLyGIy.redeem.call(uintkjzABAe, {from: accounts[2]});
		const addressarQt89i = await CryptoSecureBankTokenMVLyGIy.transferOwnership.call(addressLo0dyR3, {from: accounts[4]});

		assert.equal(boolsy1OzCz, true)
		await expect(CryptoSecureBankTokenMVLyGIy.setOwner2.call(addressVCXfbX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvJ8Akdz = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressw9h92iV = accounts[4]
		const addressdQBeeq1 = accounts[1]
		const uintDxQ5GcQ = BigInt("1996")
		const addressZUu1fZ9 = accounts[2]
		const addressQtJhlgY = accounts[1]
		const uintfPzTo4 = BigInt("1755")
		const addresspUHwfFC = accounts[0]
		const address6wn7H9 = accounts[0]
		const addressRoAEM7y = accounts[0]
		const uintBfdDDuR = await CryptoSecureBankTokenvJ8Akdz.allowance.call(addressdQBeeq1, addressw9h92iV, {from: accounts[0]});
		const boolJpKCTHj = await CryptoSecureBankTokenvJ8Akdz.redeem.call(uintDxQ5GcQ, {from: accounts[3]});
		const uintSsmlvn = await CryptoSecureBankTokenvJ8Akdz.allowance.call(addressQtJhlgY, addressZUu1fZ9, {from: accounts[3]});
		const boolazyKIW1 = await CryptoSecureBankTokenvJ8Akdz.transferFrom.call(address6wn7H9, addresspUHwfFC, uintfPzTo4, {from: "0x0000000000000000000000000000000000000001"});
		const addressiIH8BTa = await CryptoSecureBankTokenvJ8Akdz.transferOwnership.call(addressRoAEM7y, {from: accounts[3]});
		await CryptoSecureBankTokenvJ8Akdz.unpause.call({from: accounts[1]});

		assert.equal(uintBfdDDuR, BigInt("0"))
		await expect(CryptoSecureBankTokenvJ8Akdz.redeem.call(uintDxQ5GcQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenadfEMXM = await CryptoSecureBankToken.new({from: accounts[2]});
		const uinteAth85b = BigInt("100")
		const addressaZSEvvV = accounts[2]
		const addressjVyDIyT = accounts[4]
		const addressCQUFWo = accounts[0]
		const addressicS2Quc = accounts[1]
		const boolExc24GU = await CryptoSecureBankTokenadfEMXM.transferFrom.call(addressjVyDIyT, addressaZSEvvV, uinteAth85b, {from: accounts[3]});
		const addressDHwvdEh = await CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressCQUFWo, {from: accounts[3]});
		const uintCmJ1Mt = await CryptoSecureBankTokenadfEMXM.balanceOf.call(addressicS2Quc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenadfEMXM.transferFrom.call(addressjVyDIyT, addressaZSEvvV, uinteAth85b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokena3MwPD6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressb0szx0 = accounts[1]
		const addresspccNEya = await CryptoSecureBankTokena3MwPD6.getOwner.call({from: accounts[0]});
		const addressCTM44ux = await CryptoSecureBankTokena3MwPD6.destroyBlackFunds.call(addressb0szx0, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokena3MwPD6.whenNotPaused.call({from: accounts[3]});
		const uintw7NahSp = await CryptoSecureBankTokena3MwPD6.totalSupply.call({from: accounts[0]});

		assert.equal(addresspccNEya, 0xBD0587Ec9fE59B16C6A5c7dabe14632480c9B308)
		await expect(CryptoSecureBankTokena3MwPD6.destroyBlackFunds.call(addressb0szx0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNlwOtMh = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintt4xBHt1 = BigInt("57")
		const addressC0TDepO = accounts[0]
		const addressR58i3jS = accounts[1]
		const booly7HIhyv = await CryptoSecureBankTokenNlwOtMh.transfer.call(addressC0TDepO, uintt4xBHt1, {from: accounts[2]});
		const uintarJIL3s = await CryptoSecureBankTokenNlwOtMh.balanceOf.call(addressR58i3jS, {from: accounts[3]});

		await expect(CryptoSecureBankTokenNlwOtMh.transfer.call(addressC0TDepO, uintt4xBHt1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenF8eFny = await CryptoSecureBankToken.new({from: accounts[0]});
		const uinte86wBY = BigInt("1042")
		const addressnjwG8MV = "0x0000000000000000000000000000000000000001"
		const uintDpYqpf = await CryptoSecureBankTokenF8eFny.onlyPayloadSize.call(uinte86wBY, {from: accounts[5]});
		const addressXi9WpYQ = await CryptoSecureBankTokenF8eFny.removeBlackList.call(addressnjwG8MV, {from: accounts[0]});

		await expect(CryptoSecureBankTokenF8eFny.onlyPayloadSize.call(uinte86wBY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenk5Kiq4C = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressHbDvlvZ = accounts[0]
		const addressA4TJv6d = "0x0000000000000000000000000000000000000001"
		const uintjsupiS = BigInt("846")
		const addressnchWosx = accounts[5]
		const addressrN4tGPC = accounts[1]
		const uintSyM8C5p = await CryptoSecureBankTokenk5Kiq4C.balanceOf.call(addressHbDvlvZ, {from: accounts[0]});
		const uintuLq5RIm = await CryptoSecureBankTokenk5Kiq4C.balanceOf.call(addressA4TJv6d, {from: accounts[3]});
		const boolH7Pxej1 = await CryptoSecureBankTokenk5Kiq4C.transferFrom.call(addressrN4tGPC, addressnchWosx, uintjsupiS, {from: accounts[4]});

		assert.equal(uintSyM8C5p, BigInt("0"))
		assert.equal(uintuLq5RIm, BigInt("0"))
		await expect(CryptoSecureBankTokenk5Kiq4C.transferFrom.call(addressrN4tGPC, addressnchWosx, uintjsupiS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNHIbPc6 = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintVowiDqn = BigInt("957")
		const addressoKHUkjn = accounts[3]
		const uintPacH2Wh = await CryptoSecureBankTokenNHIbPc6.totalSupply.call({from: accounts[4]});
		const boolLQNTi7M = await CryptoSecureBankTokenNHIbPc6.transfer.call(addressoKHUkjn, uintVowiDqn, {from: accounts[4]});

		assert.equal(uintPacH2Wh, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenNHIbPc6.transfer.call(addressoKHUkjn, uintVowiDqn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvJ8Akdz = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresscdvxyp5 = accounts[2]
		const addressOa9lGC = accounts[5]
		const addressgPjImT = accounts[1]
		const uintYMqLAcS = BigInt("1996")
		const addressRK4K17V = accounts[2]
		const addressGNmcBk4 = accounts[1]
		const addressfAJMe1Y = accounts[1]
		const uintUfb77n4 = BigInt("1416")
		const addressrN4oS2 = accounts[3]
		const addressUaQh3y8 = "0x0000000000000000000000000000000000000001"
		const addressrrjynKV = await CryptoSecureBankTokenvJ8Akdz.setOwner2.call(addresscdvxyp5, {from: accounts[4]});
		const uintBfdDDuR = await CryptoSecureBankTokenvJ8Akdz.allowance.call(addressgPjImT, addressOa9lGC, {from: accounts[0]});
		const boolJpKCTHj = await CryptoSecureBankTokenvJ8Akdz.redeem.call(uintYMqLAcS, {from: accounts[3]});
		const uintSsmlvn = await CryptoSecureBankTokenvJ8Akdz.allowance.call(addressGNmcBk4, addressRK4K17V, {from: accounts[3]});
		const addressiIH8BTa = await CryptoSecureBankTokenvJ8Akdz.transferOwnership.call(addressfAJMe1Y, {from: accounts[3]});
		const boolTMnYENx = await CryptoSecureBankTokenvJ8Akdz.transferFrom.call(addressUaQh3y8, addressrN4oS2, uintUfb77n4, {from: accounts[5]});
		await CryptoSecureBankTokenvJ8Akdz.unpause.call({from: accounts[1]});

		assert.equal(uintBfdDDuR, BigInt("0"))
		await expect(CryptoSecureBankTokenvJ8Akdz.redeem.call(uintYMqLAcS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenadfEMXM = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresswUEoyP8 = accounts[0]
		const addressV9frNlr = accounts[3]
		const addressFZVWZNl = accounts[3]
		const addresscwyhef = accounts[1]
		const addressDHwvdEh = await CryptoSecureBankTokenadfEMXM.transferOwnership.call(addresswUEoyP8, {from: accounts[3]});
		const uinta2ec6Rh = await CryptoSecureBankTokenadfEMXM.allowance.call(addressFZVWZNl, addressV9frNlr, {from: accounts[2]});
		const uintCmJ1Mt = await CryptoSecureBankTokenadfEMXM.balanceOf.call(addresscwyhef, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenadfEMXM.transferOwnership.call(addresswUEoyP8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrsWCUx = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCgBRzo9 = accounts[0]
		const addressj2fKDmK = accounts[3]
		const addresscrWGRGf = accounts[5]
		const uintiDoSPsX = await CryptoSecureBankTokenrsWCUx.allowance.call(addressj2fKDmK, addressCgBRzo9, {from: "0x0000000000000000000000000000000000000001"});
		const addressxMkQbn6 = await CryptoSecureBankTokenrsWCUx.removeBlackList.call(addresscrWGRGf, {from: accounts[5]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeniFZkykZ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintI1XOD7m = BigInt("576")
		const addressbohuNvo = accounts[0]
		const uintUC2LKFM = BigInt("1938")
		const uintXDMSF0p = BigInt("1514")
		const boolBv89akP = await CryptoSecureBankTokeniFZkykZ.approve.call(addressbohuNvo, uintI1XOD7m, {from: accounts[5]});
		const uintwdtjCU8 = await CryptoSecureBankTokeniFZkykZ.setParams.call(uintXDMSF0p, uintUC2LKFM, {from: accounts[5]});

		assert.equal(boolBv89akP, true)
		await expect(CryptoSecureBankTokeniFZkykZ.setParams.call(uintXDMSF0p, uintUC2LKFM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenadfEMXM = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresscfpaIC = accounts[2]
		const addressXUvVpG = accounts[0]
		const addressb2y6oos = accounts[0]
		const addressfho3fx0 = accounts[2]
		const uintI9iuCN = await CryptoSecureBankTokenadfEMXM.balanceOf.call(addresscfpaIC, {from: accounts[2]});
		const boolyqXmOt = await CryptoSecureBankTokenadfEMXM.getBlackListStatus.call(addressXUvVpG, {from: accounts[4]});
		const addressDHwvdEh = await CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressb2y6oos, {from: accounts[3]});
		const uintCmJ1Mt = await CryptoSecureBankTokenadfEMXM.balanceOf.call(addressfho3fx0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolyqXmOt, false)
		assert.equal(uintI9iuCN, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressb2y6oos, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenadfEMXM = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintxJS5FTL = BigInt("1520")
		const addressZVT1M8f = accounts[1]
		const addressvG8SmVH = accounts[1]
		const addressVGMImHq = accounts[1]
		const boolr2BP7na = await CryptoSecureBankTokenadfEMXM.transfer.call(addressZVT1M8f, uintxJS5FTL, {from: accounts[2]});
		const addressDHwvdEh = await CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressvG8SmVH, {from: accounts[3]});
		const uintWYdl7Z5 = await CryptoSecureBankTokenadfEMXM.balanceOf.call(addressVGMImHq, {from: accounts[4]});

		assert.equal(boolr2BP7na, true)
		await expect(CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressvG8SmVH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenk5Kiq4C = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintZijef8z = BigInt("846")
		const addressG15XSHm = accounts[7]
		const address9f80RD = accounts[1]
		await CryptoSecureBankTokenk5Kiq4C.pause.call({from: accounts[4]});
		const boolH7Pxej1 = await CryptoSecureBankTokenk5Kiq4C.transferFrom.call(address9f80RD, addressG15XSHm, uintZijef8z, {from: accounts[4]});

		await expect(CryptoSecureBankTokenk5Kiq4C.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenadfEMXM = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresso7WNoTS = "0x0000000000000000000000000000000000000001"
		const addressdTn5wcN = accounts[0]
		const addressZVgHUUn = await CryptoSecureBankTokenadfEMXM.transferOwnership.call(addresso7WNoTS, {from: accounts[2]});
		const addressDHwvdEh = await CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressdTn5wcN, {from: accounts[3]});

		await expect(CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressdTn5wcN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenadfEMXM = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintkrYm3p = BigInt("1520")
		const addressDuWeWY = accounts[1]
		const addressrXOECQQ = accounts[1]
		const addressdldTBtp = accounts[2]
		const uintjhLytPS = BigInt("1827")
		const addresstGQW7Q9 = "0x0000000000000000000000000000000000000001"
		const addressRj6Uk51 = accounts[1]
		const boolr2BP7na = await CryptoSecureBankTokenadfEMXM.transfer.call(addressDuWeWY, uintkrYm3p, {from: accounts[2]});
		const addressyUTSrWG = await CryptoSecureBankTokenadfEMXM.destroyBlackFunds.call(addressrXOECQQ, {from: accounts[2]});
		const addressDHwvdEh = await CryptoSecureBankTokenadfEMXM.transferOwnership.call(addressdldTBtp, {from: accounts[3]});
		const boolCpiaQRY = await CryptoSecureBankTokenadfEMXM.approve.call(addresstGQW7Q9, uintjhLytPS, {from: accounts[4]});
		const uintWYdl7Z5 = await CryptoSecureBankTokenadfEMXM.balanceOf.call(addressRj6Uk51, {from: accounts[4]});

		assert.equal(boolr2BP7na, true)
		await expect(CryptoSecureBankTokenadfEMXM.destroyBlackFunds.call(addressrXOECQQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenk5Kiq4C = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintMiwprhb = BigInt("464")
		const addressMR4B0i9 = "0x0000000000000000000000000000000000000003"
		const boolavIP1IC = await CryptoSecureBankTokenk5Kiq4C.redeem.call(uintMiwprhb, {from: accounts[4]});
		const uintuLq5RIm = await CryptoSecureBankTokenk5Kiq4C.balanceOf.call(addressMR4B0i9, {from: accounts[3]});

		assert.equal(boolavIP1IC, true)
		assert.equal(uintuLq5RIm, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNlwOtMh = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressLCdyLOO = accounts[0]
		const uintBGu4KiM = BigInt("1399")
		const addressD8bZXUi = accounts[2]
		const addressEQgMPiN = "0x0000000000000000000000000000000000000001"
		const addressxKiMO3g = accounts[5]
		const addressTZkJWIJ = accounts[4]
		const addressrIn4BmX = await CryptoSecureBankTokenNlwOtMh.removeBlackList.call(addressLCdyLOO, {from: accounts[5]});
		const boola4M16Vw = await CryptoSecureBankTokenNlwOtMh.transferFrom.call(addressEQgMPiN, addressD8bZXUi, uintBGu4KiM, {from: accounts[2]});
		const addressUXy3yW0 = await CryptoSecureBankTokenNlwOtMh.getOwner.call({from: accounts[5]});
		const uintlezN3rE = await CryptoSecureBankTokenNlwOtMh.allowance.call(addressTZkJWIJ, addressxKiMO3g, {from: accounts[0]});

		await expect(CryptoSecureBankTokenNlwOtMh.transferFrom.call(addressEQgMPiN, addressD8bZXUi, uintBGu4KiM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNlwOtMh = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresse7lwnaQ = accounts[4]
		const addressQ0qboze = accounts[4]
		const addressoXEJHw = accounts[4]
		const addresswGj6XL7 = accounts[4]
		const uintlezN3rE = await CryptoSecureBankTokenNlwOtMh.allowance.call(addressQ0qboze, addresse7lwnaQ, {from: accounts[0]});
		const boolkbiCMo = await CryptoSecureBankTokenNlwOtMh.getBlackListStatus.call(addressoXEJHw, {from: accounts[3]});
		const addressfH5gfnY = await CryptoSecureBankTokenNlwOtMh.addBlackList.call(addresswGj6XL7, {from: accounts[5]});

		assert.equal(boolkbiCMo, false)
		assert.equal(uintlezN3rE, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenk5Kiq4C = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintXSNMNv0 = BigInt("0")
		const addressHh8QYC3 = accounts[3]
		const addressN1jJDmo = accounts[5]
		const addressdfVrvfN = "0x0000000000000000000000000000000000000003"
		const addressdlBYOY3 = accounts[3]
		const addressEg4mvBC = accounts[0]
		const addresshoFJZst = accounts[1]
		const boolUxnMWQ = await CryptoSecureBankTokenk5Kiq4C.transfer.call(addressHh8QYC3, uintXSNMNv0, {from: accounts[0]});
		const addressUN84hc = await CryptoSecureBankTokenk5Kiq4C.transferOwnership.call(addressN1jJDmo, {from: accounts[5]});
		const uintuLq5RIm = await CryptoSecureBankTokenk5Kiq4C.balanceOf.call(addressdfVrvfN, {from: accounts[3]});
		const addressjgtULJK = await CryptoSecureBankTokenk5Kiq4C.destroyBlackFunds.call(addressdlBYOY3, {from: accounts[3]});
		const uintRt670uA = await CryptoSecureBankTokenk5Kiq4C.allowance.call(addresshoFJZst, addressEg4mvBC, {from: accounts[4]});

		assert.equal(boolUxnMWQ, true)
		await expect(CryptoSecureBankTokenk5Kiq4C.transferOwnership.call(addressN1jJDmo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenk5Kiq4C = await CryptoSecureBankToken.new({from: accounts[4]});
		const uinth4buLaH = BigInt("1512")
		const uintp0dCUEU = BigInt("739")
		const uintzIqGUp = BigInt("845")
		const addressxYOvpx6 = accounts[6]
		const addressAU0XTSj = accounts[1]
		const uintHGUBxpe = BigInt("1948")
		const addressyamm0fJ = accounts[1]
		const addressHxnxxVo = accounts[4]
		const uintb3D68S = await CryptoSecureBankTokenk5Kiq4C.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintvrTl04Y = await CryptoSecureBankTokenk5Kiq4C.setParams.call(uintp0dCUEU, uinth4buLaH, {from: accounts[4]});
		const boolH7Pxej1 = await CryptoSecureBankTokenk5Kiq4C.transferFrom.call(addressAU0XTSj, addressxYOvpx6, uintzIqGUp, {from: accounts[4]});
		const booli9Fp7wf = await CryptoSecureBankTokenk5Kiq4C.transferFrom.call(addressHxnxxVo, addressyamm0fJ, uintHGUBxpe, {from: accounts[2]});

		assert.equal(uintb3D68S, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenk5Kiq4C.setParams.call(uintp0dCUEU, uinth4buLaH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})