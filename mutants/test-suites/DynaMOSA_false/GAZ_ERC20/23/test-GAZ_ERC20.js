const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20FREMLdp = await GAZ_ERC20.new({from: accounts[2]});
		const uintqotRd6g = BigInt("478")
		const addressrLNxSCF = "0x0000000000000000000000000000000000000001"
		const uintwJV3sYf = BigInt("335")
		const addressEZJPXj6 = "0x0000000000000000000000000000000000000001"
		const addressBiTC2YK = accounts[2]
		const uintdQU88D = BigInt("62")
		const addressJk3ept = accounts[4]
		const addressiXIfa3T = accounts[1]
		const boolsMWsamt = await GAZ_ERC20FREMLdp.approve.call(addressrLNxSCF, uintqotRd6g, {from: accounts[2]});
		const booludTlYjU = await GAZ_ERC20FREMLdp.approve.call(addressEZJPXj6, uintwJV3sYf, {from: accounts[3]});
//		const bool75i8vE = await GAZ_ERC20FREMLdp.approve.call(addressBiTC2YK, {from: accounts[1]});
//		const boolicIpIr6 = await GAZ_ERC20FREMLdp.transfer.call(addressJk3ept, uintdQU88D, {from: accounts[4]});
//		const boolqi9tffH = await GAZ_ERC20FREMLdp.approve.call(addressiXIfa3T, {from: accounts[3]});

		assert.equal(boolsMWsamt, true)
		assert.equal(booludTlYjU, true)
		await expect(GAZ_ERC20FREMLdp.approve.call(addressBiTC2YK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20SPVscPt = await GAZ_ERC20.new({from: accounts[4]});
		const addressVvMuGX = accounts[0]
		const addressWYSkaM5 = accounts[4]
		const uintwHc9Hf4 = BigInt("361")
		const addresssofrmi7 = accounts[0]
//		const boolEqqP9Vh = await GAZ_ERC20SPVscPt.approve.call(addressVvMuGX, {from: accounts[5]});
//		const boolVILKju = await GAZ_ERC20SPVscPt.approve.call(addressWYSkaM5, {from: accounts[2]});
//		const boolbSAsA9S = await GAZ_ERC20SPVscPt.approve.call(addresssofrmi7, uintwHc9Hf4, {from: accounts[0]});

		await expect(GAZ_ERC20SPVscPt.approve.call(addressVvMuGX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LSSbpGU = await GAZ_ERC20.new({from: accounts[1]});
		const uintBnyVAUC = BigInt("1556")
		const addressb3T5b3o = accounts[4]
		const addressI6gZXNs = accounts[3]
		const uintmq7tSxy = BigInt("86")
		const addressncOroTN = accounts[3]
		const uintMsGW5ph = BigInt("656")
		const addressnocKWVc = accounts[2]
		const uintoBjM2b = BigInt("560")
		const addressl0O3nKI = accounts[0]
		const addressaXhfte2 = accounts[2]
//		const boolFFJgDSf = await GAZ_ERC20LSSbpGU.transferFrom.call(addressI6gZXNs, addressb3T5b3o, uintBnyVAUC, {from: accounts[1]});
//		const boolEUQwG8N = await GAZ_ERC20LSSbpGU.transfer.call(addressncOroTN, uintmq7tSxy, {from: accounts[0]});
//		const boolFgMmINP = await GAZ_ERC20LSSbpGU.transfer.call(addressnocKWVc, uintMsGW5ph, {from: accounts[3]});
//		const boolWR2Mejk = await GAZ_ERC20LSSbpGU.transferFrom.call(addressaXhfte2, addressl0O3nKI, uintoBjM2b, {from: accounts[1]});

		await expect(GAZ_ERC20LSSbpGU.transferFrom.call(addressI6gZXNs, addressb3T5b3o, uintBnyVAUC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20XK43rBv = await GAZ_ERC20.new({from: accounts[1]});
		const uintUBCsmV6 = BigInt("1458")
		const addressOcr34r = accounts[0]
		const addressUH2FKH = accounts[2]
		const uintPffvtl = BigInt("512")
		const addressSc8B6t = accounts[0]
//		const boolj7oNOpE = await GAZ_ERC20XK43rBv.transfer.call(addressOcr34r, uintUBCsmV6, {from: accounts[0]});
//		const booljZHiB1D = await GAZ_ERC20XK43rBv.approve.call(addressUH2FKH, {from: accounts[1]});
//		const boolP5fITM = await GAZ_ERC20XK43rBv.approve.call(addressSc8B6t, uintPffvtl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20XK43rBv.transfer.call(addressOcr34r, uintUBCsmV6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20IIBkV1v = await GAZ_ERC20.new({from: accounts[0]});
		const uintRosRon1 = BigInt("1657")
		const addressEF9xjjV = accounts[2]
		const addresstnrOkV8 = "0x0000000000000000000000000000000000000001"
		const uintNheTWh = BigInt("953")
		const addressHtx4BnX = accounts[0]
		const uintphAnARn = BigInt("1364")
		const addressh7UttM = accounts[3]
		const booleJFXFlF = await GAZ_ERC20IIBkV1v.approve.call(addressEF9xjjV, uintRosRon1, {from: accounts[3]});
//		const boolM0tsRHa = await GAZ_ERC20IIBkV1v.approve.call(addresstnrOkV8, {from: "0x0000000000000000000000000000000000000001"});
//		const booleItV1Ar = await GAZ_ERC20IIBkV1v.transfer.call(addressHtx4BnX, uintNheTWh, {from: accounts[4]});
//		const boolhkCjm7J = await GAZ_ERC20IIBkV1v.approve.call(addressh7UttM, uintphAnARn, {from: accounts[4]});

		assert.equal(booleJFXFlF, true)
		await expect(GAZ_ERC20IIBkV1v.approve.call(addresstnrOkV8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20SQBqh8t = await GAZ_ERC20.new({from: accounts[3]});
		const uintunvvEK8 = BigInt("1203")
		const addressppk5y8q = accounts[0]
		const addresscJU2YOu = "0x0000000000000000000000000000000000000001"
		const uintZ1YTTN3 = BigInt("432")
		const addressAaF2Jjj = accounts[1]
		const uintW55Y7ls = BigInt("228")
		const addresssmCoet4 = "0x0000000000000000000000000000000000000001"
		const boolGldKK0p = await GAZ_ERC20SQBqh8t.approve.call(addressppk5y8q, uintunvvEK8, {from: accounts[4]});
//		const boolH9YTCiH = await GAZ_ERC20SQBqh8t.approve.call(addresscJU2YOu, {from: accounts[3]});
//		const boolliAD7qT = await GAZ_ERC20SQBqh8t.transfer.call(addressAaF2Jjj, uintZ1YTTN3, {from: accounts[1]});
//		const booly24Tnrz = await GAZ_ERC20SQBqh8t.approve.call(addresssmCoet4, uintW55Y7ls, {from: accounts[1]});

		assert.equal(boolGldKK0p, true)
		await expect(GAZ_ERC20SQBqh8t.approve.call(addresscJU2YOu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20XK43rBv = await GAZ_ERC20.new({from: accounts[1]});
		const addressywBU05C = "0x0000000000000000000000000000000000000001"
		const uintWGT9AlR = BigInt("1433")
		const addressh9U83k = accounts[0]
		const address77NluP = accounts[2]
		const uintjQzoF03 = BigInt("1840")
		const addressjl3awqH = accounts[4]
		const uintqzIHx8E = BigInt("512")
		const addressa4jTrc5 = accounts[0]
//		const boolDU4B80w = await GAZ_ERC20XK43rBv.approve.call(addressywBU05C, {from: accounts[0]});
//		const boolj7oNOpE = await GAZ_ERC20XK43rBv.transfer.call(addressh9U83k, uintWGT9AlR, {from: accounts[0]});
//		const booljZHiB1D = await GAZ_ERC20XK43rBv.approve.call(address77NluP, {from: accounts[1]});
//		const boolJ3DTfED = await GAZ_ERC20XK43rBv.transfer.call(addressjl3awqH, uintjQzoF03, {from: accounts[1]});
//		const boolP5fITM = await GAZ_ERC20XK43rBv.approve.call(addressa4jTrc5, uintqzIHx8E, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20XK43rBv.approve.call(addressywBU05C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20A6QPJOD = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWwg1wEY = BigInt("980")
		const addressAdXhUF1 = accounts[0]
		const uintwDeSZLb = BigInt("360")
		const addressNDL5LzA = accounts[0]
		const addressD4ppcmQ = accounts[5]
		const uintyfPMJAO = BigInt("64")
		const addressS999rXy = accounts[0]
		const uintMYuG2Dx = BigInt("1921")
		const addresseRFQlRT = accounts[2]
		const addressCg9Jy7Q = accounts[0]
		const boolnDjX16M = await GAZ_ERC20A6QPJOD.approve.call(addressAdXhUF1, uintWwg1wEY, {from: accounts[1]});
		const boolGNAs5mK = await GAZ_ERC20A6QPJOD.transferFrom.call(addressD4ppcmQ, addressNDL5LzA, uintwDeSZLb, {from: accounts[1]});
		const boolfWZ2ZA5 = await GAZ_ERC20A6QPJOD.approve.call(addressS999rXy, uintyfPMJAO, {from: accounts[0]});
		const boolrfZcqr = await GAZ_ERC20A6QPJOD.transferFrom.call(addressCg9Jy7Q, addresseRFQlRT, uintMYuG2Dx, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20SPVscPt = await GAZ_ERC20.new({from: accounts[4]});
		const addressTOwjNp4 = accounts[4]
		const uintHNwa8mB = BigInt("361")
		const addressJ5DuLf8 = accounts[1]
//		const boolVILKju = await GAZ_ERC20SPVscPt.approve.call(addressTOwjNp4, {from: accounts[2]});
//		const boolbSAsA9S = await GAZ_ERC20SPVscPt.approve.call(addressJ5DuLf8, uintHNwa8mB, {from: accounts[0]});

		await expect(GAZ_ERC20SPVscPt.approve.call(addressTOwjNp4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20bwAEGNg = await GAZ_ERC20.new({from: accounts[3]});
		const addressvkbzExB = accounts[5]
		const uintYdzgFWQ = BigInt("1138")
		const addresscowx0qa = accounts[4]
		const uintu4AjW4p = BigInt("1134")
		const addressbGk7Ph = "0x0000000000000000000000000000000000000001"
		const addressWWKyvnY = accounts[0]
		const uinta7ZV2b0 = BigInt("1148")
		const addressQhbT116 = accounts[3]
		const addressOe3L5q9 = accounts[1]
		const uintzjN5lw4 = BigInt("484")
		const addressRqLA40S = accounts[2]
//		const boolPIX3rSm = await GAZ_ERC20bwAEGNg.approve.call(addressvkbzExB, {from: accounts[4]});
//		const boolr70g1HE = await GAZ_ERC20bwAEGNg.transfer.call(addresscowx0qa, uintYdzgFWQ, {from: accounts[4]});
//		const boolDT6elaH = await GAZ_ERC20bwAEGNg.transferFrom.call(addressWWKyvnY, addressbGk7Ph, uintu4AjW4p, {from: accounts[4]});
//		const boolW7G2SRP = await GAZ_ERC20bwAEGNg.approve.call(addressQhbT116, uinta7ZV2b0, {from: accounts[0]});
//		const boolD4IQMX = await GAZ_ERC20bwAEGNg.approve.call(addressOe3L5q9, {from: accounts[5]});
//		const boolg2mqivT = await GAZ_ERC20bwAEGNg.transfer.call(addressRqLA40S, uintzjN5lw4, {from: accounts[0]});

		await expect(GAZ_ERC20bwAEGNg.approve.call(addressvkbzExB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20FREMLdp = await GAZ_ERC20.new({from: accounts[2]});
		const uintYp8jyjy = BigInt("478")
		const addressu4XUAZ = "0x0000000000000000000000000000000000000001"
		const uintR16vsYe = BigInt("1281")
		const addressDqm1bOq = accounts[3]
		const uintG2Po0FE = BigInt("257")
		const addressGQFmJQN = accounts[4]
		const addressOGwuPyb = accounts[1]
		const uintcIn0gT = BigInt("335")
		const addressobI0ie9 = "0x0000000000000000000000000000000000000001"
		const addresspfAi8PM = accounts[2]
		const uintqvqAnQr = BigInt("62")
		const addressOiM59tI = accounts[4]
		const addressKMqCKH0 = accounts[1]
		const boolsMWsamt = await GAZ_ERC20FREMLdp.approve.call(addressu4XUAZ, uintYp8jyjy, {from: accounts[2]});
		const boolfBSH8Fa = await GAZ_ERC20FREMLdp.transfer.call(addressDqm1bOq, uintR16vsYe, {from: accounts[2]});
//		const booljd7jWUE = await GAZ_ERC20FREMLdp.transferFrom.call(addressOGwuPyb, addressGQFmJQN, uintG2Po0FE, {from: accounts[3]});
//		const booludTlYjU = await GAZ_ERC20FREMLdp.approve.call(addressobI0ie9, uintcIn0gT, {from: accounts[3]});
//		const bool75i8vE = await GAZ_ERC20FREMLdp.approve.call(addresspfAi8PM, {from: accounts[1]});
//		const boolicIpIr6 = await GAZ_ERC20FREMLdp.transfer.call(addressOiM59tI, uintqvqAnQr, {from: accounts[4]});
//		const boolqi9tffH = await GAZ_ERC20FREMLdp.approve.call(addressKMqCKH0, {from: accounts[3]});

		assert.equal(boolfBSH8Fa, true)
		assert.equal(boolsMWsamt, true)
		await expect(GAZ_ERC20FREMLdp.transferFrom.call(addressOGwuPyb, addressGQFmJQN, uintG2Po0FE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})