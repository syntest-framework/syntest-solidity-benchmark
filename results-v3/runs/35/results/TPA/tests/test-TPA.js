const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringig2Ae7g = "a1U5JNUbMBeSfkbr7S9Om4tfes8awhmTcbiFJu3cFTIyZ7HJCyDfwUT8bLkEnVSau1DFEiuOxLq5Rv0kih"
		const stringJHDsbd = "518KnFI54PqMn99j7NOkyLDa1ug7SUzeDPhoZjkPGXhv38zp03faqISsdBtyNEk31QQIadXRK"
		const uintDvDVjTb = BigInt("135")
		const TPAmPEyDzt = await TPA.new(stringig2Ae7g, stringJHDsbd, uintDvDVjTb, {from: accounts[4]});
		const addressXSNG2ov = accounts[4]
		const uintgKrZ27Y = BigInt("1612")
		const addressMwwmdm = accounts[4]
		const boolFnNkIsN = await TPAmPEyDzt.isOwner.call(addressXSNG2ov, {from: accounts[3]});
		const boolaRyjdna = await TPAmPEyDzt.decreaseAllowance.call(addressMwwmdm, uintgKrZ27Y, {from: accounts[4]});
		await TPAmPEyDzt.pause.call({from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const uintyAkRXKf = BigInt("895")
		const addressA6Z5si = accounts[1]
		const boolG3Efed3 = await TPApUx2R6p.unlock.call(addressA6Z5si, uintyAkRXKf, {from: accounts[5]});
		await TPApUx2R6p.renounceAdmin.call({from: accounts[1]});

		await expect(TPApUx2R6p.unlock.call(addressA6Z5si, uintyAkRXKf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const uintETDBPl6 = BigInt("91")
		const addressqWJMSG = accounts[1]
		const uint256uaYq5lY = await TPAlkhxiGg.burn.call(uintETDBPl6, {from: accounts[1]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addressqWJMSG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iNAPInV, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAJLTIWPN = await TPA.new({from: accounts[0]});
		const addresse7jgjpp = accounts[3]
		const addressBCQTVnL = accounts[0]
		const addresspsB0nix = accounts[4]
		const address3eZmZ6 = accounts[0]
		const addressNbpziR = await TPAJLTIWPN.upgradeTo.call(addresse7jgjpp, {from: accounts[0]});
		const addressSmefyJy = await TPAJLTIWPN.addAdmin.call(addressBCQTVnL, {from: accounts[3]});
		const uint256PNNWfoh = await TPAJLTIWPN.allowance.call(address3eZmZ6, addresspsB0nix, {from: accounts[1]});

		await expect(TPAJLTIWPN.addAdmin.call(addressBCQTVnL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const uinte5z1zVW = BigInt("91")
		const addressETE09eF = accounts[2]
		const uintxuphts8 = BigInt("1019")
		const addressxS5W6mK = accounts[3]
		const addressEVDDPwj = accounts[3]
		const addressqsde3jY = accounts[2]
		const uint256uaYq5lY = await TPAlkhxiGg.burn.call(uinte5z1zVW, {from: accounts[1]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addressETE09eF, {from: "0x0000000000000000000000000000000000000001"});
		const boolnDBfYv = await TPAlkhxiGg.increaseAllowance.call(addressxS5W6mK, uintxuphts8, {from: accounts[3]});
		const addresspx7uz1o = await TPAlkhxiGg.removeAdmin.call(addressEVDDPwj, {from: accounts[0]});
		const boolMdAjYXB = await TPAlkhxiGg.isAdmin.call(addressqsde3jY, {from: accounts[5]});
		await TPAlkhxiGg.whenPaused.call({from: accounts[1]});

		assert.equal(boolnDBfYv, true)
		assert.equal(uint256iNAPInV, BigInt("0"))
		await expect(TPAlkhxiGg.removeAdmin.call(addressEVDDPwj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAJLTIWPN = await TPA.new({from: accounts[0]});
		const address1YwCOF = accounts[3]
		const addresscmDEZo1 = accounts[4]
		const addressi470fTV = accounts[0]
		const addressNbpziR = await TPAJLTIWPN.upgradeTo.call(address1YwCOF, {from: accounts[0]});
		const uint256PNNWfoh = await TPAJLTIWPN.allowance.call(addressi470fTV, addresscmDEZo1, {from: accounts[1]});

		assert.equal(uint256PNNWfoh, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const uintvg23MBG = BigInt("335")
		const addressAqZOHFE = accounts[0]
		const addressGUZlL6r = accounts[1]
		const uintfDKVWqE = BigInt("895")
		const addressJB7FmFM = accounts[1]
		const boolRTl3XLA = await TPApUx2R6p.transferFrom.call(addressGUZlL6r, addressAqZOHFE, uintvg23MBG, {from: accounts[0]});
		const boolG3Efed3 = await TPApUx2R6p.unlock.call(addressJB7FmFM, uintfDKVWqE, {from: accounts[5]});
		const stringzWmViV6 = await TPApUx2R6p.name.call({from: accounts[5]});
		await TPApUx2R6p.renounceAdmin.call({from: accounts[1]});

		await expect(TPApUx2R6p.transferFrom.call(addressGUZlL6r, addressAqZOHFE, uintvg23MBG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		await TPApUx2R6p.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		await TPApUx2R6p.renounceAdmin.call({from: accounts[1]});

		await expect(TPApUx2R6p.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const uintjo2wToz = BigInt("95")
		const uintlwA0XAQ = BigInt("1506")
		const addressTeXqF6S = accounts[3]
		const addressDAJUYLG = accounts[1]
		const uint256uaYq5lY = await TPAlkhxiGg.burn.call(uintjo2wToz, {from: accounts[1]});
		const boolLwa1UD = await TPAlkhxiGg.decreaseAllowance.call(addressTeXqF6S, uintlwA0XAQ, {from: accounts[1]});
		await TPAlkhxiGg.whenNotPaused.call({from: accounts[2]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addressDAJUYLG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAlkhxiGg.decreaseAllowance.call(addressTeXqF6S, uintlwA0XAQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const uintS6Mu4M3 = BigInt("75")
		const addressUwrKANv = accounts[1]
		const uint256uaYq5lY = await TPAlkhxiGg.burn.call(uintS6Mu4M3, {from: accounts[1]});
		const stringbFPKDB4 = await TPAlkhxiGg.name.call({from: accounts[0]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addressUwrKANv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringbFPKDB4, "TPA")
		assert.equal(uint256iNAPInV, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		await TPApUx2R6p.renounceAdmin.call({from: accounts[1]});

		await expect(TPApUx2R6p.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const uintpuaiHCT = BigInt("840")
		const addresspmhHCc0 = accounts[0]
		const addressPpVE0jG = accounts[1]
		const uintdOig3EG = BigInt("91")
		const addressUThj6s = accounts[2]
		const boolZ76ClX = await TPAlkhxiGg.approve.call(addresspmhHCc0, uintpuaiHCT, {from: accounts[5]});
		const addressq28MjDk = await TPAlkhxiGg.addAdmin.call(addressPpVE0jG, {from: accounts[0]});
		await TPAlkhxiGg.renounceAdmin.call({from: accounts[4]});
		const uint256uaYq5lY = await TPAlkhxiGg.burn.call(uintdOig3EG, {from: accounts[1]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addressUThj6s, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZ76ClX, true)
		await expect(TPAlkhxiGg.addAdmin.call(addressPpVE0jG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const uintNG4aLNR = BigInt("272")
		const addresscjoQIOB = accounts[2]
		const uintGda4EY5 = BigInt("908")
		const addressIcIwFWS = accounts[1]
		const boolCNccTtP = await TPApUx2R6p.transfer.call(addresscjoQIOB, uintNG4aLNR, {from: accounts[0]});
		const boolG3Efed3 = await TPApUx2R6p.unlock.call(addressIcIwFWS, uintGda4EY5, {from: accounts[5]});

		assert.equal(boolCNccTtP, true)
		await expect(TPApUx2R6p.unlock.call(addressIcIwFWS, uintGda4EY5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const uintvxcl4r = BigInt("1257")
		const addressm98bw5N = accounts[0]
		const uint6xqryM = BigInt("895")
		const addressgARIIxR = accounts[2]
		await TPApUx2R6p.pause.call({from: accounts[0]});
		const boolC38oqP = await TPApUx2R6p.decreaseAllowance.call(addressm98bw5N, uintvxcl4r, {from: "0x0000000000000000000000000000000000000001"});
		const boolG3Efed3 = await TPApUx2R6p.unlock.call(addressgARIIxR, uint6xqryM, {from: accounts[5]});

		await expect(TPApUx2R6p.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const addresslJpPSjX = accounts[2]
		const uinttahnHLK = BigInt("968")
		const uinttPfhemG = BigInt("983")
		const addressofYwdtT = accounts[3]
		const addressftKgDOu = "0x0000000000000000000000000000000000000001"
		const uint256W7DzFFk = await TPAlkhxiGg.totalSupply.call({from: accounts[1]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addresslJpPSjX, {from: "0x0000000000000000000000000000000000000001"});
		const boolh2SWP7f = await TPAlkhxiGg.transferWithLock.call(addressofYwdtT, uinttPfhemG, uinttahnHLK, {from: accounts[3]});
		const boolQzwX0xf = await TPAlkhxiGg.unfreezeAccount.call(addressftKgDOu, {from: accounts[3]});

		assert.equal(uint256W7DzFFk, BigInt("10000000000000000000000000000"))
		assert.equal(uint256iNAPInV, BigInt("0"))
		await expect(TPAlkhxiGg.transferWithLock.call(addressofYwdtT, uinttPfhemG, uinttahnHLK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const addressClTyOY = accounts[1]
		const uintPjzzQYl = BigInt("895")
		const addressJ42ChEx = accounts[1]
		const addressFBC42Gn = await TPApUx2R6p.upgradeTo.call(addressClTyOY, {from: accounts[0]});
		const stringWZQUKYU = await TPApUx2R6p.symbol.call({from: accounts[0]});
		await TPApUx2R6p.onlyAdmin.call({from: accounts[4]});
		const boolG3Efed3 = await TPApUx2R6p.unlock.call(addressJ42ChEx, uintPjzzQYl, {from: accounts[5]});

		assert.equal(stringWZQUKYU, "TPA")
		await expect(TPApUx2R6p.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const uintVzlMYRD = BigInt("1802")
		const addressprppWlN = accounts[2]
		const uintNdTVbFs = BigInt("908")
		const addressIXtJSIU = accounts[1]
		const boolRWbqmPy = await TPApUx2R6p.unlock.call(addressprppWlN, uintVzlMYRD, {from: accounts[0]});
		const boolG3Efed3 = await TPApUx2R6p.unlock.call(addressIXtJSIU, uintNdTVbFs, {from: accounts[5]});

		await expect(TPApUx2R6p.unlock.call(addressprppWlN, uintVzlMYRD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAriryGI2 = await TPA.new({from: accounts[2]});
		const addressdlgjXnN = accounts[1]
		const uintFouVTWG = BigInt("765")
		const addressbsmsyr2 = accounts[4]
		const uintp4FwFXH = BigInt("244")
		const uinteOCoUkR = BigInt("289")
		const addressslvR0P = accounts[0]
		const uintQ8IuNPQ = BigInt("1734")
		const addressok5DYNx = "0x0000000000000000000000000000000000000001"
		const uintFmJucOJ = BigInt("926")
		const addressCFkZyem = accounts[2]
		const boolpdSKzgF = await TPAriryGI2.isAdmin.call(addressdlgjXnN, {from: accounts[0]});
		const addressk09w0uJ = await TPAriryGI2.burnFrom.call(addressbsmsyr2, uintFouVTWG, {from: accounts[1]});
		const boolrBhsbJW = await TPAriryGI2.lock.call(addressslvR0P, uinteOCoUkR, uintp4FwFXH, {from: accounts[1]});
		const boolCFdcBae = await TPAriryGI2.decreaseAllowance.call(addressok5DYNx, uintQ8IuNPQ, {from: accounts[2]});
		const boolgbYRagW = await TPAriryGI2.increaseAllowance.call(addressCFkZyem, uintFmJucOJ, {from: accounts[0]});

		assert.equal(boolpdSKzgF, false)
		await expect(TPAriryGI2.burnFrom.call(addressbsmsyr2, uintFouVTWG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const addresslBEfyja = accounts[0]
		const uintn5MTlc6 = BigInt("895")
		const addressXAHOhs = accounts[1]
		const boolkXWUpHK = await TPApUx2R6p.isOwner.call(addresslBEfyja, {from: accounts[2]});
		const boolG3Efed3 = await TPApUx2R6p.unlock.call(addressXAHOhs, uintn5MTlc6, {from: accounts[5]});

		assert.equal(boolkXWUpHK, true)
		await expect(TPApUx2R6p.unlock.call(addressXAHOhs, uintn5MTlc6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const uintA23lBim = BigInt("88")
		const addressVu7f3bP = accounts[3]
		const addresswhfO6oA = accounts[3]
		const uintm21F2U = BigInt("272")
		const addressjClhVGc = accounts[3]
		const uint8NlqYp99 = await TPApUx2R6p.decimals.call({from: accounts[0]});
		const boolW2adkxP = await TPApUx2R6p.transferFrom.call(addresswhfO6oA, addressVu7f3bP, uintA23lBim, {from: accounts[2]});
		const boolCNccTtP = await TPApUx2R6p.transfer.call(addressjClhVGc, uintm21F2U, {from: accounts[0]});

		assert.equal(uint8NlqYp99, BigInt("18"))
		await expect(TPApUx2R6p.transferFrom.call(addresswhfO6oA, addressVu7f3bP, uintA23lBim, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const uintLQG1SJi = BigInt("248")
		const addressJTsYrXH = accounts[4]
		const uintcph7Kl = BigInt("735")
		const addresswQxRYU = accounts[5]
		const uintSTMVEai = BigInt("1663")
		const uintmR1tzyp = BigInt("684")
		const addressIFKFzck = accounts[1]
		const uintfmlN55O = BigInt("328")
		const addressPDxy0tY = accounts[6]
		const addressiF5IkI = accounts[0]
		const uintJfb8YJc = BigInt("1340")
		const addressfRdlbs4 = "0x0000000000000000000000000000000000000001"
		const boolCNccTtP = await TPApUx2R6p.transfer.call(addressJTsYrXH, uintLQG1SJi, {from: accounts[0]});
		const uint256J1E4bcB = await TPApUx2R6p.totalSupply.call({from: accounts[1]});
		const boolYr68PbE = await TPApUx2R6p.transfer.call(addresswQxRYU, uintcph7Kl, {from: accounts[0]});
		const booliAungPD = await TPApUx2R6p.lock.call(addressIFKFzck, uintmR1tzyp, uintSTMVEai, {from: accounts[0]});
		const boolyEaCJbv = await TPApUx2R6p.transferFrom.call(addressiF5IkI, addressPDxy0tY, uintfmlN55O, {from: accounts[2]});
		const booloTQZ0f = await TPApUx2R6p.decreaseAllowance.call(addressfRdlbs4, uintJfb8YJc, {from: accounts[4]});
		const uint256iaAhWbV = await TPApUx2R6p.totalSupply.call({from: accounts[4]});

		assert.equal(boolCNccTtP, true)
		assert.equal(boolYr68PbE, true)
		assert.equal(uint256J1E4bcB, BigInt("10000000000000000000000000000"))
		await expect(TPApUx2R6p.lock.call(addressIFKFzck, uintmR1tzyp, uintSTMVEai, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApUx2R6p = await TPA.new({from: accounts[0]});
		const addressmQ5Rhc = accounts[1]
		const uintmcdWauy = BigInt("272")
		const addresstUGPGMf = accounts[4]
		const boolE20dKeW = await TPApUx2R6p.unfreezeAccount.call(addressmQ5Rhc, {from: accounts[0]});
		const stringVmokgR2 = await TPApUx2R6p.name.call({from: accounts[0]});
		const boolCNccTtP = await TPApUx2R6p.transfer.call(addresstUGPGMf, uintmcdWauy, {from: accounts[0]});

		await expect(TPApUx2R6p.unfreezeAccount.call(addressmQ5Rhc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const address24L7d4 = accounts[0]
		const addressFQCQpSH = accounts[2]
		const addressNMAwKc0 = await TPAlkhxiGg.removeAdmin.call(address24L7d4, {from: accounts[1]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addressFQCQpSH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAlkhxiGg.removeAdmin.call(address24L7d4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlkhxiGg = await TPA.new({from: accounts[1]});
		const addressFrwis8I = accounts[2]
		const uintUgXlSX1 = BigInt("978")
		const addressq2TbK3c = accounts[0]
		const addressbsPUqZ6 = "0x0000000000000000000000000000000000000001"
		const addressifjIaD = accounts[4]
		const stringP6UnMsE = await TPAlkhxiGg.name.call({from: accounts[5]});
		const uint256iNAPInV = await TPAlkhxiGg.balanceOf.call(addressFrwis8I, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V0w0Q48 = await TPAlkhxiGg.totalSupply.call({from: accounts[4]});
		const boolwDsGTs2 = await TPAlkhxiGg.transfer.call(addressq2TbK3c, uintUgXlSX1, {from: accounts[1]});
		const boolyEPIf4l = await TPAlkhxiGg.paused.call({from: accounts[0]});
		const uint256XYEIczk = await TPAlkhxiGg.allowance.call(addressifjIaD, addressbsPUqZ6, {from: accounts[0]});

		assert.equal(boolwDsGTs2, true)
		assert.equal(boolyEPIf4l, false)
		assert.equal(stringP6UnMsE, "TPA")
		assert.equal(uint256V0w0Q48, BigInt("10000000000000000000000000000"))
		assert.equal(uint256XYEIczk, BigInt("0"))
		assert.equal(uint256iNAPInV, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAdPZr7b = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstXajyyf = accounts[2]
		const addressk9daW1u = accounts[4]
		const uintdOxLhHq = BigInt("432")
		const addresslJD79B4 = accounts[2]
		const addressCFjaGsM = accounts[2]
		const uintON5Ofpg = BigInt("1874")
		const addressFdaj4a2 = accounts[2]
		const addressO2NUAwY = accounts[0]
		const uint256o1wduDz = await TPAdPZr7b.balanceOf.call(addresstXajyyf, {from: accounts[0]});
		const uint8t9GpODU = await TPAdPZr7b.decimals.call({from: accounts[2]});
		const addressJMlSVw6 = await TPAdPZr7b.addAdmin.call(addressk9daW1u, {from: "0x0000000000000000000000000000000000000001"});
		const bool57kJ91 = await TPAdPZr7b.transferFrom.call(addressCFjaGsM, addresslJD79B4, uintdOxLhHq, {from: accounts[2]});
		const boolw9zANNJ = await TPAdPZr7b.transferFrom.call(addressO2NUAwY, addressFdaj4a2, uintON5Ofpg, {from: accounts[0]});
	});
})