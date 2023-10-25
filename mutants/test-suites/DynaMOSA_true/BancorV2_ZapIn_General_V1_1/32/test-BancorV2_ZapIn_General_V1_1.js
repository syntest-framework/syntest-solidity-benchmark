const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintr3i1xI = BigInt("420")
		const BancorV2_ZapIn_General_V1_1Puz9lBu = await BancorV2_ZapIn_General_V1_1.new(uintr3i1xI, {from: accounts[3]});
		const uintYNnra2v = BigInt("340")
//		await BancorV2_ZapIn_General_V1_1Puz9lBu.renounceOwnership.call({from: accounts[3]});
//		const uint16O0nMhjb = await BancorV2_ZapIn_General_V1_1Puz9lBu.set_new_goodwill.call(uintYNnra2v, {from: accounts[2]});
//		const bool6pKTIZ = await BancorV2_ZapIn_General_V1_1Puz9lBu.isOwner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1Puz9lBu.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintBdrSwB0 = BigInt("462")
		const BancorV2_ZapIn_General_V1_1vX08ZTu = await BancorV2_ZapIn_General_V1_1.new(uintBdrSwB0, {from: accounts[2]});
		const bytexFBnpnH = "0x170213010d1e13030019060f0b14011614"
		const addressuMxttvV = accounts[2]
		const addressqiw1pHh = accounts[3]
		const uinta2o7lvL = BigInt("129")
		const uintDbIDSR = BigInt("67")
		const addressI09jEQM = accounts[3]
		const addressRsQm6L2 = accounts[2]
		const addressS5gjSWU = accounts[4]
		const uintXX4Vvhq = BigInt("1225")
//		await BancorV2_ZapIn_General_V1_1vX08ZTu.stopInEmergency.call({from: accounts[1]});
//		const uint256WFpHOqa = await BancorV2_ZapIn_General_V1_1vX08ZTu.ZapInSingleSided.call(addressS5gjSWU, addressRsQm6L2, addressI09jEQM, uintDbIDSR, uinta2o7lvL, addressqiw1pHh, addressuMxttvV, bytexFBnpnH, {from: accounts[3]});
//		const uint16tbDxsGo = await BancorV2_ZapIn_General_V1_1vX08ZTu.set_new_goodwill.call(uintXX4Vvhq, {from: accounts[0]});
//		const boolhsxldiG = await BancorV2_ZapIn_General_V1_1vX08ZTu.isOwner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1vX08ZTu.onlyOwner.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1vX08ZTu.stopInEmergency.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintp1wmINh = BigInt("578")
		const BancorV2_ZapIn_General_V1_1lgf7FXh = await BancorV2_ZapIn_General_V1_1.new(uintp1wmINh, {from: accounts[4]});
		const addressfMta1HD = accounts[2]
		const uintPzWrZj = BigInt("385")
		const addressswFkck = await BancorV2_ZapIn_General_V1_1lgf7FXh.owner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1lgf7FXh.onlyOwner.call({from: accounts[1]});
//		const addressypLztk = await BancorV2_ZapIn_General_V1_1lgf7FXh.inCaseTokengetsStuck.call(addressfMta1HD, {from: accounts[1]});
//		const uint16Xk8IuIw = await BancorV2_ZapIn_General_V1_1lgf7FXh.set_new_goodwill.call(uintPzWrZj, {from: accounts[0]});

		assert.equal(addressswFkck, 0x5C682d12cA7aCf4CA289E8d080190A88A2778e1D)
		await expect(BancorV2_ZapIn_General_V1_1lgf7FXh.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintOizTTJm = BigInt("1462")
		const BancorV2_ZapIn_General_V1_1CCD6MEy = await BancorV2_ZapIn_General_V1_1.new(uintOizTTJm, {from: accounts[1]});
		const addressoslIM9p = accounts[0]
		const byteHnVee1N = "0x1405050d14030e1e010a0915000f1509101f0f"
		const addressPK8khST = accounts[2]
		const addressfmObp0x = accounts[5]
		const uintEPHMqyH = BigInt("289")
		const uintnIxIDTD = BigInt("1169")
		const addressOQWEQBH = accounts[3]
		const addressJq1pjGo = accounts[3]
		const addressPS9FVrp = accounts[5]
//		const addressdhy9cXy = await BancorV2_ZapIn_General_V1_1CCD6MEy.inCaseTokengetsStuck.call(addressoslIM9p, {from: accounts[1]});
//		const uint256OdLma6u = await BancorV2_ZapIn_General_V1_1CCD6MEy.ZapInSingleSided.call(addressPS9FVrp, addressJq1pjGo, addressOQWEQBH, uintnIxIDTD, uintEPHMqyH, addressfmObp0x, addressPK8khST, byteHnVee1N, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1CCD6MEy.inCaseTokengetsStuck.call(addressoslIM9p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbbMAJ2C = BigInt("2012")
		const BancorV2_ZapIn_General_V1_1g40OBT3 = await BancorV2_ZapIn_General_V1_1.new(uintbbMAJ2C, {from: "0x0000000000000000000000000000000000000001"});
		const uintHpfIMtS = BigInt("1899")
		const uint16NCNwYBO = await BancorV2_ZapIn_General_V1_1g40OBT3.set_new_goodwill.call(uintHpfIMtS, {from: "0x0000000000000000000000000000000000000001"});
		const boolDW3AA1 = await BancorV2_ZapIn_General_V1_1g40OBT3.isOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1g40OBT3.renounceOwnership.call({from: accounts[4]});
		const addressNYhxfsl = await BancorV2_ZapIn_General_V1_1g40OBT3.owner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1g40OBT3.toggleContractActive.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1g40OBT3.renounceOwnership.call({from: accounts[5]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintuE25ar = BigInt("1309")
		const BancorV2_ZapIn_General_V1_1ejtO0XF = await BancorV2_ZapIn_General_V1_1.new(uintuE25ar, {from: accounts[1]});
		const byteB401IS6 = "0x1615080a1c07030a0d0a1e061f1e011d1b20180e1c12070d1005"
		const addressFuzT9wE = accounts[0]
		const address44jMvU = "0x0000000000000000000000000000000000000001"
		const uintvSWaj78 = BigInt("1336")
		const uintQYT2JVW = BigInt("1770")
		const addresssQGQ1Hx = accounts[0]
		const addresskkGb19Z = accounts[0]
		const addressvWvlE9 = accounts[5]
		const addressybgHwbd = await BancorV2_ZapIn_General_V1_1ejtO0XF.owner.call({from: accounts[1]});
//		const uint256pNdAAzz = await BancorV2_ZapIn_General_V1_1ejtO0XF.ZapInSingleSided.call(addressvWvlE9, addresskkGb19Z, addresssQGQ1Hx, uintQYT2JVW, uintvSWaj78, address44jMvU, addressFuzT9wE, byteB401IS6, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1ejtO0XF.nonReentrant.call({from: accounts[4]});

		assert.equal(addressybgHwbd, 0xD4F63B42816Bf54F81D22C88878dbf85cF35f874)
		await expect(BancorV2_ZapIn_General_V1_1ejtO0XF.ZapInSingleSided.call(addressvWvlE9, addresskkGb19Z, addresssQGQ1Hx, uintQYT2JVW, uintvSWaj78, address44jMvU, addressFuzT9wE, byteB401IS6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintMdfndiz = BigInt("1309")
		const BancorV2_ZapIn_General_V1_1ejtO0XF = await BancorV2_ZapIn_General_V1_1.new(uintMdfndiz, {from: accounts[1]});
		const addressfZ5KvoJ = accounts[4]
		const byteg8Hrja6 = "0x1615080a1c07030a0d0a1e061f1e011d1b20180e1c12070d1005"
		const addressSvoEjS = accounts[0]
		const addressN1IhFRU = "0x0000000000000000000000000000000000000001"
		const uintYAUh0c = BigInt("1336")
		const uintI6zYDNn = BigInt("1776")
		const addressCzSXMQL = accounts[0]
		const addressImxrSHX = accounts[0]
		const addressCOEB6J3 = accounts[5]
		const addressybgHwbd = await BancorV2_ZapIn_General_V1_1ejtO0XF.owner.call({from: accounts[1]});
		const addressmd8DQa = await BancorV2_ZapIn_General_V1_1ejtO0XF.transferOwnership.call(addressfZ5KvoJ, {from: accounts[1]});
//		const uint256pNdAAzz = await BancorV2_ZapIn_General_V1_1ejtO0XF.ZapInSingleSided.call(addressCOEB6J3, addressImxrSHX, addressCzSXMQL, uintI6zYDNn, uintYAUh0c, addressN1IhFRU, addressSvoEjS, byteg8Hrja6, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1ejtO0XF.nonReentrant.call({from: accounts[4]});

		assert.equal(addressybgHwbd, 0xD4F63B42816Bf54F81D22C88878dbf85cF35f874)
		await expect(BancorV2_ZapIn_General_V1_1ejtO0XF.ZapInSingleSided.call(addressCOEB6J3, addressImxrSHX, addressCzSXMQL, uintI6zYDNn, uintYAUh0c, addressN1IhFRU, addressSvoEjS, byteg8Hrja6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQaEtjAP = BigInt("1253")
		const BancorV2_ZapIn_General_V1_1mnmERVu = await BancorV2_ZapIn_General_V1_1.new(uintQaEtjAP, {from: accounts[0]});
		const uintKX5N83c = BigInt("1673")
		const addressRBHBJ76 = accounts[0]
		const addresspTaaVUF = accounts[4]
		const byteFUAkPlu = "0x0f09001220181e05111e0112201c0a0f07020b"
		const address5lIR5U = accounts[5]
		const addressd0SX7aI = accounts[0]
		const uintS9Ju8Rn = BigInt("639")
		const uintqeFDpJe = BigInt("1811")
		const addressuAZuEOH = accounts[2]
		const addressKGDBbxn = accounts[1]
		const addressWuOZjzL = accounts[1]
//		await BancorV2_ZapIn_General_V1_1mnmERVu.toggleContractActive.call({from: accounts[0]});
//		const boolcA3Bpq = await BancorV2_ZapIn_General_V1_1mnmERVu.isOwner.call({from: accounts[3]});
//		const uint16B9jQAne = await BancorV2_ZapIn_General_V1_1mnmERVu.set_new_goodwill.call(uintKX5N83c, {from: accounts[2]});
//		const addressjp3DHZB = await BancorV2_ZapIn_General_V1_1mnmERVu.inCaseTokengetsStuck.call(addressRBHBJ76, {from: accounts[0]});
//		const addressRFAydi4 = await BancorV2_ZapIn_General_V1_1mnmERVu.transferOwnership.call(addresspTaaVUF, {from: accounts[5]});
//		const uint256QlOnpg5 = await BancorV2_ZapIn_General_V1_1mnmERVu.ZapInSingleSided.call(addressWuOZjzL, addressKGDBbxn, addressuAZuEOH, uintqeFDpJe, uintS9Ju8Rn, addressd0SX7aI, address5lIR5U, byteFUAkPlu, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1mnmERVu.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintq23ZQ5d = BigInt("1309")
		const BancorV2_ZapIn_General_V1_1ejtO0XF = await BancorV2_ZapIn_General_V1_1.new(uintq23ZQ5d, {from: accounts[1]});
		const uintksWQASR = BigInt("1582")
		const byteeUsDtyM = "0x1615080a1c07030a0d0a1e061f1e011d1b20180e1c12070d1005"
		const addressxLXyOhV = accounts[0]
		const addressCGezuac = "0x0000000000000000000000000000000000000001"
		const uintVjuARj3 = BigInt("1336")
		const uintrN5H1ri = BigInt("1787")
		const addressqCQiej9 = accounts[0]
		const addressuUyBxM = accounts[0]
		const addressoVohR93 = accounts[5]
		const uint16LDNtaDI = await BancorV2_ZapIn_General_V1_1ejtO0XF.set_new_goodwill.call(uintksWQASR, {from: accounts[1]});
//		const uint256pNdAAzz = await BancorV2_ZapIn_General_V1_1ejtO0XF.ZapInSingleSided.call(addressoVohR93, addressuUyBxM, addressqCQiej9, uintrN5H1ri, uintVjuARj3, addressCGezuac, addressxLXyOhV, byteeUsDtyM, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1ejtO0XF.ZapInSingleSided.call(addressoVohR93, addressuUyBxM, addressqCQiej9, uintrN5H1ri, uintVjuARj3, addressCGezuac, addressxLXyOhV, byteeUsDtyM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdftoj0 = BigInt("1309")
		const BancorV2_ZapIn_General_V1_1ejtO0XF = await BancorV2_ZapIn_General_V1_1.new(uintdftoj0, {from: accounts[1]});
		const byteAqCME7U = "0x1615080a1c07030a0d0a1e061f1e011d1b20180e1c12070d1005"
		const addressa0bOEIG = accounts[0]
		const addressFc1II9q = "0x0000000000000000000000000000000000000001"
		const uintCCZkxr = BigInt("1336")
		const uintCBQYA9 = BigInt("1770")
		const addressyRmKSbS = accounts[0]
		const addressHw3w9qq = accounts[0]
		const addressuJvKeU = accounts[5]
		const addressiuZZtO = await BancorV2_ZapIn_General_V1_1ejtO0XF.owner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1ejtO0XF.withdraw.call({from: accounts[1]});
//		const uint256pNdAAzz = await BancorV2_ZapIn_General_V1_1ejtO0XF.ZapInSingleSided.call(addressuJvKeU, addressHw3w9qq, addressyRmKSbS, uintCBQYA9, uintCCZkxr, addressFc1II9q, addressa0bOEIG, byteAqCME7U, {from: accounts[4]});

		assert.equal(addressiuZZtO, 0xD4F63B42816Bf54F81D22C88878dbf85cF35f874)
		await expect(BancorV2_ZapIn_General_V1_1ejtO0XF.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})