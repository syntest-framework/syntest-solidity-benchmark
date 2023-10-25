const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DHrmjGM = await GAZ_ERC20.new({from: accounts[4]});
		const uinty8DkVG5 = BigInt("867")
		const addressfiDOPy = accounts[5]
		const uinty7WN1AB = BigInt("541")
		const addressOqZkPEs = accounts[5]
		const uinty4ZcLpa = BigInt("563")
		const addressSb3TqG1 = accounts[3]
		const uintTRNbVQn = BigInt("1122")
		const addressKBnzxw6 = accounts[3]
		const uinttDS3hU9 = BigInt("1473")
		const addressRq9cOHL = accounts[1]
		const boolYEQ3TY = await GAZ_ERC20DHrmjGM.transfer.call(addressfiDOPy, uinty8DkVG5, {from: accounts[0]});
		const boolLb8stm0 = await GAZ_ERC20DHrmjGM.transfer.call(addressOqZkPEs, uinty7WN1AB, {from: accounts[4]});
		const boolYLiTHB4 = await GAZ_ERC20DHrmjGM.transfer.call(addressSb3TqG1, uinty4ZcLpa, {from: accounts[3]});
		const boolQWyIxHB = await GAZ_ERC20DHrmjGM.transfer.call(addressKBnzxw6, uintTRNbVQn, {from: accounts[5]});
		const boolsqySfxU = await GAZ_ERC20DHrmjGM.transfer.call(addressRq9cOHL, uinttDS3hU9, {from: accounts[4]});

		await expect(GAZ_ERC20DHrmjGM.transfer.call(addressfiDOPy, uinty8DkVG5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ts6H58G = await GAZ_ERC20.new({from: accounts[5]});
		const addresspUydiN0 = accounts[4]
		const uintaXEhgAL = BigInt("146")
		const addressRZ7EuMO = accounts[2]
		const uintmvxQpzJ = BigInt("705")
		const addressbB7cauk = accounts[5]
		const addressDbxqTu7 = accounts[5]
		const uintXTfBKOr = BigInt("1782")
		const addressXjbCuuD = accounts[3]
		const boolDeOhqPS = await GAZ_ERC20ts6H58G.approve.call(addresspUydiN0, {from: accounts[1]});
		const booligMcZql = await GAZ_ERC20ts6H58G.approve.call(addressRZ7EuMO, uintaXEhgAL, {from: accounts[1]});
		const boolqml80we = await GAZ_ERC20ts6H58G.approve.call(addressbB7cauk, uintmvxQpzJ, {from: accounts[2]});
		const boolsEZnodV = await GAZ_ERC20ts6H58G.approve.call(addressDbxqTu7, {from: accounts[3]});
		const boolOZrN9cD = await GAZ_ERC20ts6H58G.approve.call(addressXjbCuuD, uintXTfBKOr, {from: accounts[2]});

		await expect(GAZ_ERC20ts6H58G.approve.call(addresspUydiN0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20XNcD6BC = await GAZ_ERC20.new({from: accounts[2]});
		const uintZMEZMKK = BigInt("476")
		const addressQJIeadi = "0x0000000000000000000000000000000000000001"
		const addressVXoimSm = accounts[3]
		const uintzBOqwDG = BigInt("841")
		const addressWAEVKmA = accounts[2]
		const uintX3VoZO = BigInt("1668")
		const addressmGqto8k = accounts[3]
		const addressclt4n3Q = accounts[4]
		const boolujod6rj = await GAZ_ERC20XNcD6BC.approve.call(addressQJIeadi, uintZMEZMKK, {from: accounts[2]});
		const boolKCARkk = await GAZ_ERC20XNcD6BC.approve.call(addressVXoimSm, {from: accounts[4]});
		const boolMF64RtI = await GAZ_ERC20XNcD6BC.approve.call(addressWAEVKmA, uintzBOqwDG, {from: accounts[3]});
		const boolfr5Aws = await GAZ_ERC20XNcD6BC.transfer.call(addressmGqto8k, uintX3VoZO, {from: accounts[1]});
		const booleHZiy1F = await GAZ_ERC20XNcD6BC.approve.call(addressclt4n3Q, {from: accounts[4]});

		assert.equal(boolujod6rj, true)
		await expect(GAZ_ERC20XNcD6BC.approve.call(addressVXoimSm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20KOPxePL = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYmOAgTh = BigInt("30")
		const addressU5k80aH = accounts[1]
		const uintgzsGXh6 = BigInt("1")
		const address544nJm = accounts[0]
		const uintIgY8CS = BigInt("1525")
		const addressK3AjHP = accounts[2]
		const addressD6hdcCq = accounts[5]
		const uinttxFW5BL = BigInt("1868")
		const addresstnHT0sS = accounts[4]
		const uintdlJpQom = BigInt("154")
		const addressMrUUmm2 = accounts[1]
		const boolbm6fVT = await GAZ_ERC20KOPxePL.approve.call(addressU5k80aH, uintYmOAgTh, {from: "0x0000000000000000000000000000000000000001"});
		const boolSexx9ws = await GAZ_ERC20KOPxePL.approve.call(address544nJm, uintgzsGXh6, {from: accounts[4]});
		const boolPZiLMrO = await GAZ_ERC20KOPxePL.transferFrom.call(addressD6hdcCq, addressK3AjHP, uintIgY8CS, {from: accounts[0]});
		const boolOMm9CH3 = await GAZ_ERC20KOPxePL.transfer.call(addresstnHT0sS, uinttxFW5BL, {from: accounts[1]});
		const boolKShzxja = await GAZ_ERC20KOPxePL.transfer.call(addressMrUUmm2, uintdlJpQom, {from: accounts[2]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20imY4Gta = await GAZ_ERC20.new({from: accounts[1]});
		const addressDmvWZRK = accounts[1]
		const uintcjQTMSS = BigInt("935")
		const addressHbt9VJw = accounts[5]
		const uintQFs7wz5 = BigInt("1749")
		const addressoYeSreu = accounts[3]
		const uintuMtKGRg = BigInt("817")
		const addresstPoOyUX = accounts[0]
		const uintU00ZB46 = BigInt("993")
		const addresszFPFf6 = accounts[0]
		const addressbPF14mJ = accounts[4]
		const booljELO0du = await GAZ_ERC20imY4Gta.approve.call(addressDmvWZRK, {from: accounts[5]});
		const boolIT8kVMo = await GAZ_ERC20imY4Gta.transfer.call(addressHbt9VJw, uintcjQTMSS, {from: accounts[2]});
		const boolWrBpLHL = await GAZ_ERC20imY4Gta.approve.call(addressoYeSreu, uintQFs7wz5, {from: accounts[4]});
		const boolilF5s1p = await GAZ_ERC20imY4Gta.approve.call(addresstPoOyUX, uintuMtKGRg, {from: accounts[1]});
		const boolXzQ6iaa = await GAZ_ERC20imY4Gta.transferFrom.call(addressbPF14mJ, addresszFPFf6, uintU00ZB46, {from: accounts[4]});

		await expect(GAZ_ERC20imY4Gta.approve.call(addressDmvWZRK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20WTTLpi4 = await GAZ_ERC20.new({from: accounts[2]});
		const uintDAbmAH = BigInt("1253")
		const addressDNF5hJA = accounts[3]
		const addressoAZF0Ps = accounts[3]
		const uintUdYqy2k = BigInt("1349")
		const addressbTZ0NzQ = accounts[4]
		const address6yOUlD = accounts[5]
		const uintw17EKJ5 = BigInt("342")
		const addresswoWnydQ = "0x0000000000000000000000000000000000000001"
		const addressYMSlksj = accounts[4]
		const addresscSseNUU = accounts[0]
		const boolZKd6Bfu = await GAZ_ERC20WTTLpi4.approve.call(addressDNF5hJA, uintDAbmAH, {from: accounts[3]});
		const boolwjpOrzt = await GAZ_ERC20WTTLpi4.approve.call(addressoAZF0Ps, {from: accounts[3]});
		const boolwjxqOxT = await GAZ_ERC20WTTLpi4.approve.call(addressbTZ0NzQ, uintUdYqy2k, {from: accounts[0]});
		const boolo2LrjkM = await GAZ_ERC20WTTLpi4.approve.call(address6yOUlD, {from: accounts[1]});
		const boolt0kHrTp = await GAZ_ERC20WTTLpi4.transferFrom.call(addressYMSlksj, addresswoWnydQ, uintw17EKJ5, {from: "0x0000000000000000000000000000000000000001"});
		const bool8AQLKa = await GAZ_ERC20WTTLpi4.approve.call(addresscSseNUU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZKd6Bfu, true)
		await expect(GAZ_ERC20WTTLpi4.approve.call(addressoAZF0Ps, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kLbUuSu = await GAZ_ERC20.new({from: accounts[2]});
		const uintI5iupL = BigInt("1487")
		const addressP8xLeX = accounts[2]
		const addressxEEFFKi = accounts[0]
		const uintTPeL1Ar = BigInt("606")
		const addressUAxc2XK = accounts[1]
		const boolWUeh6Pz = await GAZ_ERC20kLbUuSu.transferFrom.call(addressxEEFFKi, addressP8xLeX, uintI5iupL, {from: accounts[2]});
		const boolU0lKCyd = await GAZ_ERC20kLbUuSu.approve.call(addressUAxc2XK, uintTPeL1Ar, {from: accounts[0]});

		await expect(GAZ_ERC20kLbUuSu.transferFrom.call(addressxEEFFKi, addressP8xLeX, uintI5iupL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20fdNAeDh = await GAZ_ERC20.new({from: accounts[4]});
		const addressb57oEkl = accounts[2]
		const uintK9Zv7lz = BigInt("566")
		const addresswcSDFC3 = accounts[4]
		const uintX6pClGD = BigInt("1480")
		const addressM0eZ3aW = accounts[2]
		const addresswHsG9JA = accounts[4]
		const uintAcbKDj = BigInt("1221")
		const addressBhr7PN1 = accounts[0]
		const uintHB4b7fx = BigInt("1802")
		const addressdiRFCJY = accounts[1]
		const boolUCjB0m = await GAZ_ERC20fdNAeDh.approve.call(addressb57oEkl, {from: accounts[2]});
		const boolPsZQjtG = await GAZ_ERC20fdNAeDh.transfer.call(addresswcSDFC3, uintK9Zv7lz, {from: accounts[4]});
		const boolu3HTFN9 = await GAZ_ERC20fdNAeDh.transferFrom.call(addresswHsG9JA, addressM0eZ3aW, uintX6pClGD, {from: accounts[0]});
		const bool1DktAW = await GAZ_ERC20fdNAeDh.transfer.call(addressBhr7PN1, uintAcbKDj, {from: accounts[1]});
		const boolJ8F9Ya8 = await GAZ_ERC20fdNAeDh.transfer.call(addressdiRFCJY, uintHB4b7fx, {from: accounts[0]});

		await expect(GAZ_ERC20fdNAeDh.approve.call(addressb57oEkl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kLbUuSu = await GAZ_ERC20.new({from: accounts[2]});
		const uintnCeTHei = BigInt("590")
		const addresss35OemV = accounts[2]
		const addressTVgU4fW = "0x0000000000000000000000000000000000000001"
		const boolU0lKCyd = await GAZ_ERC20kLbUuSu.approve.call(addresss35OemV, uintnCeTHei, {from: accounts[0]});
		const boolNdNbTBf = await GAZ_ERC20kLbUuSu.approve.call(addressTVgU4fW, {from: accounts[0]});

		assert.equal(boolU0lKCyd, true)
		await expect(GAZ_ERC20kLbUuSu.approve.call(addressTVgU4fW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kLbUuSu = await GAZ_ERC20.new({from: accounts[2]});
		const uinteMbAqE9 = BigInt("1893")
		const addressjntP15 = accounts[5]
		const uintV0W5QVB = BigInt("590")
		const addresseX0htyf = accounts[1]
		const boolSj9Wab = await GAZ_ERC20kLbUuSu.transfer.call(addressjntP15, uinteMbAqE9, {from: accounts[2]});
		const boolU0lKCyd = await GAZ_ERC20kLbUuSu.approve.call(addresseX0htyf, uintV0W5QVB, {from: accounts[0]});

		assert.equal(boolSj9Wab, true)
		assert.equal(boolU0lKCyd, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kLbUuSu = await GAZ_ERC20.new({from: accounts[2]});
		const addressKMWpCy = accounts[2]
		const uintFHUCLPf = BigInt("597")
		const addressmObNIvG = accounts[1]
		const uinte8YgvII = BigInt("196")
		const addressqqoktN = accounts[3]
		const addressjdoLg19 = accounts[1]
		const boolmtVUrgV = await GAZ_ERC20kLbUuSu.approve.call(addressKMWpCy, {from: "0x0000000000000000000000000000000000000001"});
		const boolU0lKCyd = await GAZ_ERC20kLbUuSu.approve.call(addressmObNIvG, uintFHUCLPf, {from: accounts[0]});
		const booluAKQpTj = await GAZ_ERC20kLbUuSu.transferFrom.call(addressjdoLg19, addressqqoktN, uinte8YgvII, {from: accounts[0]});

		await expect(GAZ_ERC20kLbUuSu.approve.call(addressKMWpCy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})