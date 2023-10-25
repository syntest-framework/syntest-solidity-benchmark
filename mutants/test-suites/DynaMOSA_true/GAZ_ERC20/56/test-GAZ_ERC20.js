const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20EivSWq5 = await GAZ_ERC20.new({from: accounts[3]});
		const addressGtlOpt = accounts[1]
		const uintAOZI1UT = BigInt("261")
		const addressTTRn5i6 = accounts[1]
		const uintfETlmrZ = BigInt("1517")
		const addressi4eNU2 = accounts[3]
		const addressxpapD0z = accounts[3]
//		const boolKMH0mc5 = await GAZ_ERC20EivSWq5.approve.call(addressGtlOpt, {from: accounts[0]});
//		const boolOLdj2wJ = await GAZ_ERC20EivSWq5.transfer.call(addressTTRn5i6, uintAOZI1UT, {from: accounts[1]});
//		const boolUXjU5wS = await GAZ_ERC20EivSWq5.approve.call(addressi4eNU2, uintfETlmrZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfXBdUuT = await GAZ_ERC20EivSWq5.approve.call(addressxpapD0z, {from: accounts[4]});

		await expect(GAZ_ERC20EivSWq5.approve.call(addressGtlOpt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kTCN0Dq = await GAZ_ERC20.new({from: accounts[0]});
		const uintCF3Nco3 = BigInt("310")
		const addressocyld8r = accounts[2]
		const uintFZVnfw2 = BigInt("1531")
		const addressQuW9qeM = accounts[0]
		const addressR8X01Jx = accounts[4]
		const uintoB9zVR = BigInt("1760")
		const addressVym1FoR = accounts[2]
//		const boolvAetaFR = await GAZ_ERC20kTCN0Dq.transfer.call(addressocyld8r, uintCF3Nco3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqnBSjb5 = await GAZ_ERC20kTCN0Dq.transferFrom.call(addressR8X01Jx, addressQuW9qeM, uintFZVnfw2, {from: accounts[1]});
//		const boolZD3JTae = await GAZ_ERC20kTCN0Dq.transfer.call(addressVym1FoR, uintoB9zVR, {from: accounts[4]});

		await expect(GAZ_ERC20kTCN0Dq.transfer.call(addressocyld8r, uintCF3Nco3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20PGU74UK = await GAZ_ERC20.new({from: accounts[5]});
		const uintGgGyOtC = BigInt("1615")
		const addressyEelRy = accounts[1]
		const uintEihard = BigInt("584")
		const addressw9xAgS = accounts[4]
		const addressdcedAM8 = accounts[2]
		const uintt4ANyse = BigInt("1302")
		const addressqbYzD6i = accounts[3]
		const uintHE3voQH = BigInt("325")
		const addressohXwu7 = accounts[0]
		const uinti9hfSgh = BigInt("1423")
		const addresspGGjJa4 = accounts[2]
		const boolJirPsdo = await GAZ_ERC20PGU74UK.approve.call(addressyEelRy, uintGgGyOtC, {from: accounts[3]});
//		const boolDaM8w2c = await GAZ_ERC20PGU74UK.transferFrom.call(addressdcedAM8, addressw9xAgS, uintEihard, {from: accounts[4]});
//		const boolZfn8Id3 = await GAZ_ERC20PGU74UK.transfer.call(addressqbYzD6i, uintt4ANyse, {from: accounts[0]});
//		const boolWssJQvR = await GAZ_ERC20PGU74UK.approve.call(addressohXwu7, uintHE3voQH, {from: accounts[1]});
//		const boolsO2NHHM = await GAZ_ERC20PGU74UK.transfer.call(addresspGGjJa4, uinti9hfSgh, {from: accounts[1]});

		assert.equal(boolJirPsdo, true)
		await expect(GAZ_ERC20PGU74UK.transferFrom.call(addressdcedAM8, addressw9xAgS, uintEihard, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZjWoIny = await GAZ_ERC20.new({from: accounts[3]});
		const uintLCr7fbe = BigInt("716")
		const addressztdkkyV = accounts[3]
		const uintvcys1aM = BigInt("1736")
		const addressg8h7Rcg = accounts[1]
		const addressvoL5klx = accounts[3]
		const addresskMMqmEd = accounts[3]
		const addressoBXBEp = accounts[0]
		const uintIQGKp5a = BigInt("592")
		const addressb2vBFh9 = accounts[3]
		const address9ashTI = accounts[0]
		const booliUhdJzv = await GAZ_ERC20ZjWoIny.transfer.call(addressztdkkyV, uintLCr7fbe, {from: accounts[3]});
//		const boolqimZlBi = await GAZ_ERC20ZjWoIny.transferFrom.call(addressvoL5klx, addressg8h7Rcg, uintvcys1aM, {from: accounts[0]});
//		const boolxCzZ99 = await GAZ_ERC20ZjWoIny.approve.call(addresskMMqmEd, {from: accounts[3]});
//		const boolZ01Ksah = await GAZ_ERC20ZjWoIny.approve.call(addressoBXBEp, {from: accounts[5]});
//		const boolwr71Nu3 = await GAZ_ERC20ZjWoIny.transferFrom.call(address9ashTI, addressb2vBFh9, uintIQGKp5a, {from: accounts[2]});

		assert.equal(booliUhdJzv, true)
		await expect(GAZ_ERC20ZjWoIny.transferFrom.call(addressvoL5klx, addressg8h7Rcg, uintvcys1aM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Vg3nvTs = await GAZ_ERC20.new({from: accounts[1]});
		const addressVia3i4F = accounts[0]
		const uintBj30BTj = BigInt("230")
		const addressA1cGNpU = accounts[1]
		const uintiyGZSqJ = BigInt("434")
		const addressxfutVHJ = accounts[5]
		const addressOgsonH2 = "0x0000000000000000000000000000000000000001"
		const uintt5XzlMU = BigInt("960")
		const addresskOFYbWg = accounts[3]
		const addressRMTdNZv = accounts[6]
//		const boolM9eTjsT = await GAZ_ERC20Vg3nvTs.approve.call(addressVia3i4F, {from: accounts[4]});
//		const boolpeRQ86I = await GAZ_ERC20Vg3nvTs.transfer.call(addressA1cGNpU, uintBj30BTj, {from: accounts[1]});
//		const boolHSSpSSN = await GAZ_ERC20Vg3nvTs.transferFrom.call(addressOgsonH2, addressxfutVHJ, uintiyGZSqJ, {from: accounts[4]});
//		const boolxOdiSR5 = await GAZ_ERC20Vg3nvTs.transferFrom.call(addressRMTdNZv, addresskOFYbWg, uintt5XzlMU, {from: accounts[2]});

		await expect(GAZ_ERC20Vg3nvTs.approve.call(addressVia3i4F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Vg3nvTs = await GAZ_ERC20.new({from: accounts[1]});
		const uintdK9nQMp = BigInt("1709")
		const addresszlDMxf = accounts[0]
		const addressdRjEtVt = accounts[4]
		const uintvF2MkAd = BigInt("1205")
		const address1Jo6Gn = accounts[0]
		const uintVLYlAST = BigInt("230")
		const addressrZct3Gr = accounts[1]
		const uintM1hkSKe = BigInt("434")
		const addressjQFehYw = accounts[5]
		const addressPJFmRB6 = "0x0000000000000000000000000000000000000001"
		const uintRb0Rc1 = BigInt("176")
		const addressnmk883E = accounts[3]
		const addressuwL3vQj = "0x0000000000000000000000000000000000000001"
		const uintqcMtZ5X = BigInt("960")
		const addressQACmY0s = accounts[4]
		const addressJzL6d5t = accounts[5]
		const boolSGNN0m = await GAZ_ERC20Vg3nvTs.approve.call(addresszlDMxf, uintdK9nQMp, {from: accounts[1]});
//		const boolJg1Fmg = await GAZ_ERC20Vg3nvTs.approve.call(addressdRjEtVt, {from: accounts[2]});
//		const boolBEL2trM = await GAZ_ERC20Vg3nvTs.transfer.call(address1Jo6Gn, uintvF2MkAd, {from: accounts[3]});
//		const boolpeRQ86I = await GAZ_ERC20Vg3nvTs.transfer.call(addressrZct3Gr, uintVLYlAST, {from: accounts[1]});
//		const boolHSSpSSN = await GAZ_ERC20Vg3nvTs.transferFrom.call(addressPJFmRB6, addressjQFehYw, uintM1hkSKe, {from: accounts[4]});
//		const boolGSATi17 = await GAZ_ERC20Vg3nvTs.transferFrom.call(addressuwL3vQj, addressnmk883E, uintRb0Rc1, {from: accounts[0]});
//		const boolxOdiSR5 = await GAZ_ERC20Vg3nvTs.transferFrom.call(addressJzL6d5t, addressQACmY0s, uintqcMtZ5X, {from: accounts[2]});

		assert.equal(boolSGNN0m, true)
		await expect(GAZ_ERC20Vg3nvTs.approve.call(addressdRjEtVt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZjWoIny = await GAZ_ERC20.new({from: accounts[3]});
		const addressDVwmbAv = accounts[2]
		const uintEBWSkiI = BigInt("716")
		const addresseGqa6AV = accounts[3]
		const uintamwph62 = BigInt("1736")
		const addressSzJhjOH = accounts[1]
		const addressafFDdve = accounts[3]
		const addresshV8hpq = accounts[3]
		const addressgDUDpkH = accounts[0]
		const uintgG7gR8m = BigInt("592")
		const addressPpt15a = accounts[3]
		const addressUixvzor = accounts[0]
//		const boolrNMZqLL = await GAZ_ERC20ZjWoIny.approve.call(addressDVwmbAv, {from: accounts[3]});
//		const booliUhdJzv = await GAZ_ERC20ZjWoIny.transfer.call(addresseGqa6AV, uintEBWSkiI, {from: accounts[3]});
//		const boolqimZlBi = await GAZ_ERC20ZjWoIny.transferFrom.call(addressafFDdve, addressSzJhjOH, uintamwph62, {from: accounts[0]});
//		const boolxCzZ99 = await GAZ_ERC20ZjWoIny.approve.call(addresshV8hpq, {from: accounts[3]});
//		const boolZ01Ksah = await GAZ_ERC20ZjWoIny.approve.call(addressgDUDpkH, {from: accounts[5]});
//		const boolwr71Nu3 = await GAZ_ERC20ZjWoIny.transferFrom.call(addressUixvzor, addressPpt15a, uintgG7gR8m, {from: accounts[2]});

		await expect(GAZ_ERC20ZjWoIny.approve.call(addressDVwmbAv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZjWoIny = await GAZ_ERC20.new({from: accounts[3]});
		const uintDgYF3Gj = BigInt("716")
		const addressY8l5uXl = accounts[3]
		const addressius4wxA = accounts[4]
		const uintSKJ4Ri = BigInt("1736")
		const addressr5NVZ3F = accounts[1]
		const addressU1LWb7J = accounts[3]
		const addressm8VFuUQ = accounts[3]
		const addressM1CzYHQ = accounts[0]
		const uintpDoi8tB = BigInt("592")
		const addresslKLgq3f = accounts[3]
		const addressq13OWo9 = accounts[0]
		const booliUhdJzv = await GAZ_ERC20ZjWoIny.transfer.call(addressY8l5uXl, uintDgYF3Gj, {from: accounts[3]});
//		const boolLh44Bb4 = await GAZ_ERC20ZjWoIny.approve.call(addressius4wxA, {from: accounts[5]});
//		const boolqimZlBi = await GAZ_ERC20ZjWoIny.transferFrom.call(addressU1LWb7J, addressr5NVZ3F, uintSKJ4Ri, {from: accounts[0]});
//		const boolxCzZ99 = await GAZ_ERC20ZjWoIny.approve.call(addressm8VFuUQ, {from: accounts[3]});
//		const boolZ01Ksah = await GAZ_ERC20ZjWoIny.approve.call(addressM1CzYHQ, {from: accounts[5]});
//		const boolwr71Nu3 = await GAZ_ERC20ZjWoIny.transferFrom.call(addressq13OWo9, addresslKLgq3f, uintpDoi8tB, {from: accounts[2]});

		assert.equal(booliUhdJzv, true)
		await expect(GAZ_ERC20ZjWoIny.approve.call(addressius4wxA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZjWoIny = await GAZ_ERC20.new({from: accounts[3]});
		const addressYXt3pMK = accounts[4]
		const uintWhiDlhg = BigInt("716")
		const addressyJKpYLK = accounts[3]
		const uintiVbdwZa = BigInt("1736")
		const addressKI9Eaxs = accounts[1]
		const address1qfCz7 = accounts[3]
		const addressrO3ZCzO = accounts[4]
		const addressXxLPnSD = accounts[0]
		const uintoNDOoJd = BigInt("592")
		const addressSS24cmA = accounts[3]
		const address9kkHnd = accounts[0]
//		const boolMcrv4s6 = await GAZ_ERC20ZjWoIny.approve.call(addressYXt3pMK, {from: accounts[1]});
//		const booliUhdJzv = await GAZ_ERC20ZjWoIny.transfer.call(addressyJKpYLK, uintWhiDlhg, {from: accounts[3]});
//		const boolqimZlBi = await GAZ_ERC20ZjWoIny.transferFrom.call(address1qfCz7, addressKI9Eaxs, uintiVbdwZa, {from: accounts[0]});
//		const boolxCzZ99 = await GAZ_ERC20ZjWoIny.approve.call(addressrO3ZCzO, {from: accounts[3]});
//		const boolZ01Ksah = await GAZ_ERC20ZjWoIny.approve.call(addressXxLPnSD, {from: accounts[5]});
//		const boolwr71Nu3 = await GAZ_ERC20ZjWoIny.transferFrom.call(address9kkHnd, addressSS24cmA, uintoNDOoJd, {from: accounts[2]});

		await expect(GAZ_ERC20ZjWoIny.approve.call(addressYXt3pMK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20W8ol76 = await GAZ_ERC20.new({from: accounts[4]});
		const addressyXYuYja = accounts[1]
		const uintwHIKsDf = BigInt("4")
		const addresslFca6JY = accounts[4]
//		const boolF5oozZc = await GAZ_ERC20W8ol76.approve.call(addressyXYuYja, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpFYYk5z = await GAZ_ERC20W8ol76.approve.call(addresslFca6JY, uintwHIKsDf, {from: accounts[5]});

		await expect(GAZ_ERC20W8ol76.approve.call(addressyXYuYja, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Wkt5quy = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJsvIbpc = BigInt("1395")
		const addresskqMHH5y = accounts[4]
		const uintD44p0TK = BigInt("1491")
		const addressrwVlfkQ = accounts[4]
		const uintIF3L7n8 = BigInt("1236")
		const addressovf1qKV = accounts[4]
		const addressKk2gtFh = accounts[2]
		const uintwZXGCQu = BigInt("725")
		const addressxNKsjpJ = accounts[4]
		const boolKdvXfpw = await GAZ_ERC20Wkt5quy.approve.call(addresskqMHH5y, uintJsvIbpc, {from: accounts[3]});
		const boolVXmFEPF = await GAZ_ERC20Wkt5quy.approve.call(addressrwVlfkQ, uintD44p0TK, {from: "0x0000000000000000000000000000000000000001"});
		const boolBcknlJ9 = await GAZ_ERC20Wkt5quy.transferFrom.call(addressKk2gtFh, addressovf1qKV, uintIF3L7n8, {from: accounts[4]});
		const boolMBiloW1 = await GAZ_ERC20Wkt5quy.approve.call(addressxNKsjpJ, uintwZXGCQu, {from: accounts[0]});
	});
})