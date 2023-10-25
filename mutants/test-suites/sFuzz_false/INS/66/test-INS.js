const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintzSI9FOb = BigInt("1524")
		const stringLkd6i1z = "4oY2dbSpPiwsqo6zwcNPWTf2Vssv9ttz38QW6vWE1Yqvganne1DDA2UCNDyID"
		const stringfYEMjVU = "6GA8m4j12Gj9Z616RR"
		const INStiD80ob = await INS.new(uintzSI9FOb, stringLkd6i1z, stringfYEMjVU, {from: accounts[4]});
		const uintuYP28W = BigInt("1003")
		const addressT68XXq = accounts[4]
		const byteIpVfL0 = "0x1e050f1902061f1d0616141f0f1f020f0711140814101e200a200d1a1a"
		const uintdvT15Ew = BigInt("1055")
		const addressD34kDg = accounts[1]
		const uintnr0ASL = BigInt("1083")
		const addressdHgMiRd = accounts[2]
		const byteYLZKOvG = "0x15"
		const uintLFkCNAz = BigInt("512")
		const addressqvYVRNp = accounts[2]
		const uintC69H9x = BigInt("229")
		const addressTvR1PGv = accounts[3]
		const addressXv3g5xD = accounts[4]
//		const boolaQUbijx = await INStiD80ob.transfer.call(addressT68XXq, uintuYP28W, {from: accounts[3]});
//		const boolVm8cNDy = await INStiD80ob.approveAndCall.call(addressD34kDg, uintdvT15Ew, byteIpVfL0, {from: accounts[5]});
//		const boolRlRIzI = await INStiD80ob.approve.call(addressdHgMiRd, uintnr0ASL, {from: accounts[2]});
//		const boolgueqrI9 = await INStiD80ob.approveAndCall.call(addressqvYVRNp, uintLFkCNAz, byteYLZKOvG, {from: accounts[3]});
//		const booll3SKPcc = await INStiD80ob.transferFrom.call(addressXv3g5xD, addressTvR1PGv, uintC69H9x, {from: accounts[0]});

		await expect(INStiD80ob.transfer.call(addressT68XXq, uintuYP28W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintqBUHqah = BigInt("466")
		const stringJHbX8mY = "iR1njEzrmBTvV8qbZjTUeNvLp"
		const stringBDZReGz = "2JXnfm7sjHt8GusDtQIA5YRJiRRl6QVhXa"
		const INSCLLzN0q = await INS.new(uintqBUHqah, stringJHbX8mY, stringBDZReGz, {from: accounts[3]});
		const uintjqXm5S9 = BigInt("820")
		const addressAzFa7A0 = accounts[5]
		const uint4q4pee = BigInt("1171")
		const addresssOqMKSd = accounts[4]
		const uintrelHrRB = BigInt("913")
		const addressLpdMVR = accounts[4]
		const addresswretxav = accounts[2]
//		const boolCU9XvI8 = await INSCLLzN0q.burnFrom.call(addressAzFa7A0, uintjqXm5S9, {from: accounts[4]});
//		const bool21NggX = await INSCLLzN0q.transfer.call(addresssOqMKSd, uint4q4pee, {from: accounts[5]});
//		const boolctbEv9P = await INSCLLzN0q.transferFrom.call(addresswretxav, addressLpdMVR, uintrelHrRB, {from: accounts[3]});

		await expect(INSCLLzN0q.burnFrom.call(addressAzFa7A0, uintjqXm5S9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintUqSzm9p = BigInt("231")
		const stringzroHiMu = "vHkDijuWHURluqHPiOm"
		const stringnJ92Il = "2dcvFG4M5N0rwmzBuS6rOw8c77oqeJPDUavebTO4ihepuB7mXrOSR70WWd"
		const INSukADP95 = await INS.new(uintUqSzm9p, stringzroHiMu, stringnJ92Il, {from: accounts[0]});
		const byteXFFnHpw = "0x041b0210100f"
		const uintt0e3t5 = BigInt("1061")
		const addressGwrpOYi = accounts[1]
		const uintmYs3Zu = BigInt("172")
		const addressLpXZjas = accounts[0]
		const uintqfXHe5R = BigInt("212")
//		const boolo3FSHID = await INSukADP95.approveAndCall.call(addressGwrpOYi, uintt0e3t5, byteXFFnHpw, {from: accounts[1]});
//		const boolHDPgOrF = await INSukADP95.transfer.call(addressLpXZjas, uintmYs3Zu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolV4o2X9O = await INSukADP95.burn.call(uintqfXHe5R, {from: accounts[3]});

		await expect(INSukADP95.approveAndCall.call(addressGwrpOYi, uintt0e3t5, byteXFFnHpw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintBdzvltv = BigInt("737")
		const stringBUWVqL = "gyFeLOWgjXlW3RfvNiATLeo"
		const stringbOe0hC1 = ""
		const INSP6Z6G6b = await INS.new(uintBdzvltv, stringBUWVqL, stringbOe0hC1, {from: accounts[0]});
		const uintFILmnF = BigInt("1204")
		const uintW5AYFNE = BigInt("430")
		const addressPKqwCdH = accounts[4]
		const bytesotaULt = "0x0d050d0e05080c07141c1b1b11060b170f0e181a191f150910"
		const uintnSSx0B5 = BigInt("1823")
		const addressJNznDB4 = accounts[3]
		const bytexTAr51p = "0x12171c01010107011e051b1d1b0e130219120b001e1a0c12031e0c160a032005"
		const uintBAtgRQ = BigInt("961")
		const addressYMxPOPt = accounts[1]
		const uintAmUmMcy = BigInt("530")
//		const boolfpNVQGJ = await INSP6Z6G6b.burn.call(uintFILmnF, {from: accounts[4]});
//		const boolXVXPIdW = await INSP6Z6G6b.approve.call(addressPKqwCdH, uintW5AYFNE, {from: accounts[4]});
//		const boolUohN5pT = await INSP6Z6G6b.approveAndCall.call(addressJNznDB4, uintnSSx0B5, bytesotaULt, {from: accounts[0]});
//		const booljxeej7D = await INSP6Z6G6b.approveAndCall.call(addressYMxPOPt, uintBAtgRQ, bytexTAr51p, {from: accounts[3]});
//		const boolIVco9hH = await INSP6Z6G6b.burn.call(uintAmUmMcy, {from: accounts[0]});

		await expect(INSP6Z6G6b.burn.call(uintFILmnF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintQE23IcL = BigInt("466")
		const stringJHbX8mY = "iR1njEzrmBTvV8qbZjTUeNvLp"
		const stringBDZReGz = "2JXnfm7sjHt8GusDtQIA5YRJiRRl6QVhXa"
		const INSCLLzN0q = await INS.new(uintQE23IcL, stringJHbX8mY, stringBDZReGz, {from: accounts[3]});
		const uintddwPKag = BigInt("913")
		const addressAL0KeL = accounts[4]
		const addressg9LVYCT = accounts[2]
//		const boolctbEv9P = await INSCLLzN0q.transferFrom.call(addressg9LVYCT, addressAL0KeL, uintddwPKag, {from: accounts[3]});

		await expect(INSCLLzN0q.transferFrom.call(addressg9LVYCT, addressAL0KeL, uintddwPKag, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintupsUHbG = BigInt("1963")
		const stringSlC2DhO = "cXlL95dwJVXbpfCccaJ4mNdkvyVGTq4rOPtQTavzzxC4aictQ6B3KdqaYnSPJ"
		const stringAd5UjzU = "ipwz8rdRAJXDlkXxVpkCAbXKdNwH09qT6adlSSRDYu26Zw"
		const INSmA06m2M = await INS.new(uintupsUHbG, stringSlC2DhO, stringAd5UjzU, {from: "0x0000000000000000000000000000000000000001"});
		const uintPX5sP8s = BigInt("1403")
		const addressHofgiUl = accounts[4]
		const uinttFgO962 = BigInt("1446")
		const addressD2uSeLv = accounts[4]
		const addressEoqT3ya = accounts[0]
		const bytevyXspmA = "0x190c0116140c0f01"
		const uintgIF2W84 = BigInt("1757")
		const addresskvlOAIT = "0x0000000000000000000000000000000000000001"
		const byteGAfxGzg = "0x1219181d15171d140a121e1c140906021502190f13161e161316120e"
		const uintDLQipvW = BigInt("1662")
		const addressTAu4q3L = accounts[1]
		const byteL5wQTxX = "0x00141b191f0c140e1f091c0d0403041f1b0817"
		const uinthGyOcbl = BigInt("137")
		const addressGaxKYb = accounts[5]
		const uintfT1OUcj = BigInt("1141")
		const addressbSWBJN9 = "0x0000000000000000000000000000000000000001"
		const boolFg3YgJD = await INSmA06m2M.burnFrom.call(addressHofgiUl, uintPX5sP8s, {from: accounts[0]});
		const boolRwaeeOh = await INSmA06m2M.transferFrom.call(addressEoqT3ya, addressD2uSeLv, uinttFgO962, {from: accounts[5]});
		const boolxxdv8j6 = await INSmA06m2M.approveAndCall.call(addresskvlOAIT, uintgIF2W84, bytevyXspmA, {from: accounts[2]});
		const booltX3ATsm = await INSmA06m2M.approveAndCall.call(addressTAu4q3L, uintDLQipvW, byteGAfxGzg, {from: "0x0000000000000000000000000000000000000001"});
		const boolHLevvWB = await INSmA06m2M.approveAndCall.call(addressGaxKYb, uinthGyOcbl, byteL5wQTxX, {from: "0x0000000000000000000000000000000000000001"});
		const boolaA1N238 = await INSmA06m2M.approve.call(addressbSWBJN9, uintfT1OUcj, {from: accounts[0]});
	});
})