const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringpPYJ2nY = "RfxwKdq07Vm3BTYIsoXAKSRM53lTo40IwjrOjjK7pmJ"
		const stringTyi75aI = "e7uLDmtk6B2RGRHXVELmf4yYH9heiFGExgavDfRR5d4ukwJAXlSiTIHOfkp0164Kmeyqlv1"
		const uintXDLIE13 = BigInt("65")
		const WheatFarmOE6uXOk = await WheatFarm.new(stringpPYJ2nY, stringTyi75aI, uintXDLIE13, {from: accounts[5]});
		const addressG5gXq94 = accounts[1]
		const addressY56MXh3 = accounts[3]
		const uintyTGq4PE = BigInt("1884")
		const addressVonCKgB = accounts[5]
		const stringXw7XAJ = await WheatFarmOE6uXOk.symbol.call({from: accounts[1]});
		const uintpLK1pPn = await WheatFarmOE6uXOk.allowance.call(addressY56MXh3, addressG5gXq94, {from: accounts[3]});
		const stringPjDuU1m = await WheatFarmOE6uXOk.name.call({from: accounts[4]});
//		const boolJ8Hi80r = await WheatFarmOE6uXOk.decreaseAllowance.call(addressVonCKgB, uintyTGq4PE, {from: accounts[1]});
//		const uint8R3TNxKj = await WheatFarmOE6uXOk.decimals.call({from: accounts[0]});

		assert.equal(stringPjDuU1m, "RfxwKdq07Vm3BTYIsoXAKSRM53lTo40IwjrOjjK7pmJ")
		assert.equal(stringXw7XAJ, "e7uLDmtk6B2RGRHXVELmf4yYH9heiFGExgavDfRR5d4ukwJAXlSiTIHOfkp0164Kmeyqlv1")
		assert.equal(uintpLK1pPn, BigInt("0"))
		await expect(WheatFarmOE6uXOk.decreaseAllowance.call(addressVonCKgB, uintyTGq4PE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringNH49ry6 = "JOpw9TYkv0zA8YYu8Mi2GyshQ8rwxBqq3FiYZKl7WPUaXOg4yVUER1tRCSdm7lu"
		const stringQVt7vtZ = "zhHnyzfdqwjnK5GHocQXz8owNhFSzO2DrDIjoVDrzFpgvQ4"
		const uintHO6hG6g = BigInt("68")
		const WheatFarmv0RyML = await WheatFarm.new(stringNH49ry6, stringQVt7vtZ, uintHO6hG6g, {from: accounts[0]});
		const addressKA5EXA3 = accounts[4]
		const uinthi7GXBC = BigInt("2016")
		const addressOiIcNl = accounts[2]
		const addresshP2Cmoe = accounts[3]
		const uintkjuTTOT = BigInt("941")
		const addressHgjIwYy = accounts[0]
		const addresstL3ZkdE = accounts[4]
		const uintDWuING = await WheatFarmv0RyML.balanceOf.call(addressKA5EXA3, {from: accounts[2]});
//		const boolffVhFV8 = await WheatFarmv0RyML.transferFrom.call(addresshP2Cmoe, addressOiIcNl, uinthi7GXBC, {from: accounts[2]});
//		const stringledvc6y = await WheatFarmv0RyML.symbol.call({from: accounts[3]});
//		const stringUngXJBH = await WheatFarmv0RyML.name.call({from: accounts[5]});
//		const uint8mQdJ7eO = await WheatFarmv0RyML.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolPSQg2Kt = await WheatFarmv0RyML.transferFrom.call(addresstL3ZkdE, addressHgjIwYy, uintkjuTTOT, {from: accounts[1]});

		assert.equal(uintDWuING, BigInt("0"))
		await expect(WheatFarmv0RyML.transferFrom.call(addresshP2Cmoe, addressOiIcNl, uinthi7GXBC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringJ9fEYy = "ycXcAq29vLA0yje"
		const stringfeYCQqy = "14VZWbIlG"
		const uintjbQnSfx = BigInt("245")
		const WheatFarmS4ajsPD = await WheatFarm.new(stringJ9fEYy, stringfeYCQqy, uintjbQnSfx, {from: accounts[0]});
		const addressifdrjz = accounts[2]
		const uintOv8zdeY = BigInt("1208")
		const addressi2f75ww = "0x0000000000000000000000000000000000000001"
		const uintxy0dlrs = BigInt("628")
		const addressI6G4a3v = "0x0000000000000000000000000000000000000001"
		const stringU4GJGUt = await WheatFarmS4ajsPD.name.call({from: accounts[5]});
//		const boolVUIca5y = await WheatFarmS4ajsPD.transferownership.call(addressifdrjz, {from: accounts[5]});
//		const boolYgGZlNu = await WheatFarmS4ajsPD.approveAndCall.call(addressi2f75ww, uintOv8zdeY, {from: accounts[1]});
//		const boolX0paOqr = await WheatFarmS4ajsPD.decreaseAllowance.call(addressI6G4a3v, uintxy0dlrs, {from: accounts[0]});

		assert.equal(stringU4GJGUt, "ycXcAq29vLA0yje")
		await expect(WheatFarmS4ajsPD.transferownership.call(addressifdrjz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringxmI7zrv = "68SLNUCkOFQWeDzLEKQCk3EiKJgjnaoIVUwvgxH"
		const stringHD4nJro = "GhNHtP90Xpa4kOLspt"
		const uintRFh1aJI = BigInt("190")
		const WheatFarmVR0Awu = await WheatFarm.new(stringxmI7zrv, stringHD4nJro, uintRFh1aJI, {from: accounts[3]});
		const uintkIG45dY = BigInt("639")
		const addressSVJcLMc = accounts[4]
		const addresszAn64P = "0x0000000000000000000000000000000000000001"
		const uint8SOHpwCT = await WheatFarmVR0Awu.decimals.call({from: accounts[4]});
		const boolc5oekKC = await WheatFarmVR0Awu.approve.call(addressSVJcLMc, uintkIG45dY, {from: accounts[2]});
		const stringMoDhJED = await WheatFarmVR0Awu.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolnPGBdy5 = await WheatFarmVR0Awu.transferownership.call(addresszAn64P, {from: accounts[3]});

		assert.equal(boolc5oekKC, true)
		assert.equal(boolnPGBdy5, true)
		assert.equal(stringMoDhJED, "68SLNUCkOFQWeDzLEKQCk3EiKJgjnaoIVUwvgxH")
		assert.equal(uint8SOHpwCT, BigInt("18"))
	});

	it('test for WheatFarm', async () => {
		const string6Nd50B = "3VkqRxk6qDgb"
		const stringF8RUt8X = "EunSlix1TePTPOUV3uWXxMLEevmg60Pw"
		const uintD5KocfR = BigInt("69")
		const WheatFarmgoyhQAY = await WheatFarm.new(string6Nd50B, stringF8RUt8X, uintD5KocfR, {from: accounts[2]});
		const uintYGWYah = BigInt("74")
		const addresskCFR1I5 = accounts[0]
		const uintMOgYzk = BigInt("1361")
		const addressn4Hlb8l = accounts[4]
		const uintMRdroKR = BigInt("603")
		const addresspz1UZK = "0x0000000000000000000000000000000000000001"
		const addressRgykuUV = accounts[4]
		const uintkwZUEZz = BigInt("872")
		const addressc30jVry = accounts[4]
		const uintcQgaIwR = BigInt("605")
		const addressFXbNfD = accounts[0]
		const addressbSD0aj = accounts[1]
		const boolM8JgTRV = await WheatFarmgoyhQAY.transfer.call(addresskCFR1I5, uintYGWYah, {from: accounts[2]});
//		const boolZ8LynaL = await WheatFarmgoyhQAY.approveAndCall.call(addressn4Hlb8l, uintMOgYzk, {from: accounts[1]});
//		const boolPdc8gc = await WheatFarmgoyhQAY.transfer.call(addresspz1UZK, uintMRdroKR, {from: accounts[2]});
//		const boolIBn6Qr2 = await WheatFarmgoyhQAY.transferownership.call(addressRgykuUV, {from: accounts[3]});
//		const booltbBAqBo = await WheatFarmgoyhQAY.approve.call(addressc30jVry, uintkwZUEZz, {from: accounts[2]});
//		const boold5aTZs = await WheatFarmgoyhQAY.transferFrom.call(addressbSD0aj, addressFXbNfD, uintcQgaIwR, {from: accounts[1]});

		assert.equal(boolM8JgTRV, true)
		await expect(WheatFarmgoyhQAY.approveAndCall.call(addressn4Hlb8l, uintMOgYzk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringH13Wn8 = "8VFgMkNPts2V6kIrrQg9NhdHxFR93BhgiyoZuI0M8sXefNWQskncSd9RBcPYx0Noy5loojyqfFexRnD8CTWmeN3MP"
		const stringP3rFWy = "b8Esb5EIsTb6C1c3nR7ekGHdAW3r1UF7zIYmFfFyaD"
		const uintqdOXyKg = BigInt("128")
		const WheatFarmABqMSm = await WheatFarm.new(stringH13Wn8, stringP3rFWy, uintqdOXyKg, {from: accounts[2]});
		const uintmgdz6Vm = BigInt("529")
		const addressaltZ5RC = accounts[1]
		const uintciFbR4n = BigInt("910")
		const addressU6annfZ = "0x0000000000000000000000000000000000000001"
		const uintFhzLJlC = BigInt("1590")
		const addressl4i3MV = accounts[2]
		const boolFZjp9YL = await WheatFarmABqMSm.approve.call(addressaltZ5RC, uintmgdz6Vm, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqDJKdJF = await WheatFarmABqMSm.transfer.call(addressU6annfZ, uintciFbR4n, {from: accounts[0]});
//		const uint8ukqqd1 = await WheatFarmABqMSm.decimals.call({from: accounts[1]});
//		const booleRMOfD = await WheatFarmABqMSm.transfer.call(addressl4i3MV, uintFhzLJlC, {from: accounts[4]});

		assert.equal(boolFZjp9YL, true)
		await expect(WheatFarmABqMSm.transfer.call(addressU6annfZ, uintciFbR4n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVLkRRlj = "XHhjx3927"
		const stringQX11gSJ = "ziHWt5eDlhGG4pQEd2nRr5t"
		const uintPdRz8eO = BigInt("59")
		const WheatFarm8eWPVb = await WheatFarm.new(stringVLkRRlj, stringQX11gSJ, uintPdRz8eO, {from: accounts[3]});
		const uintMChgUpx = BigInt("502")
		const addressoJzKqL = accounts[4]
		const addresso94JM0C = accounts[2]
		const addressxcJe8b = "0x0000000000000000000000000000000000000001"
		const uintXnxw0Nh = BigInt("1251")
		const addressuVgJnwf = accounts[0]
		const addressCDv3aMQ = accounts[1]
		const boolJsZfQ8M = await WheatFarm8eWPVb.approve.call(addressoJzKqL, uintMChgUpx, {from: accounts[3]});
		const uintX32SmjL = await WheatFarm8eWPVb.allowance.call(addressxcJe8b, addresso94JM0C, {from: accounts[5]});
		const stringDOSYUm8 = await WheatFarm8eWPVb.symbol.call({from: accounts[0]});
		const boolPtNo6nZ = await WheatFarm8eWPVb.approveAndCall.call(addressuVgJnwf, uintXnxw0Nh, {from: accounts[3]});
		const uintZoTCntA = await WheatFarm8eWPVb.balanceOf.call(addressCDv3aMQ, {from: accounts[2]});

		assert.equal(boolJsZfQ8M, true)
		assert.equal(boolPtNo6nZ, true)
		assert.equal(stringDOSYUm8, "ziHWt5eDlhGG4pQEd2nRr5t")
		assert.equal(uintX32SmjL, BigInt("0"))
		assert.equal(uintZoTCntA, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringBLovYY9 = "bTNQz2S96BCn1cmxuwv2Jnmp8OlHrn58E8sqpzTkOiSyZXTiuM7n6Lxeij7PmkHVADapTlrnksiREQrcZKfZXpRFxwSb"
		const stringjkOeGY = "qzIMulzZtDA0wdjiJopkDJii9YIGTgMiDTQJWMvnf56s"
		const uintLfWxbtZ = BigInt("195")
		const WheatFarmzooOup9 = await WheatFarm.new(stringBLovYY9, stringjkOeGY, uintLfWxbtZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintGOLB8BO = BigInt("143")
		const addressKMCRL4Q = accounts[1]
		const uintOGlLlxQ = BigInt("1488")
		const addressq6HliN7 = "0x0000000000000000000000000000000000000001"
		const uintB6TAKlu = BigInt("178")
		const addressdSVhhdW = accounts[2]
		const addressK8i5cXy = "0x0000000000000000000000000000000000000001"
		const uintoTqLsCq = BigInt("1540")
		const addressKfhop2w = "0x0000000000000000000000000000000000000001"
		const uintoqqO8qy = BigInt("429")
		const addressWRs1d6Z = accounts[1]
		const uintGG556ra = BigInt("1463")
		const addressQcxYjVu = accounts[0]
		const boolZois4f3 = await WheatFarmzooOup9.decreaseAllowance.call(addressKMCRL4Q, uintGOLB8BO, {from: accounts[1]});
		const boolmyxUSx2 = await WheatFarmzooOup9.approve.call(addressq6HliN7, uintOGlLlxQ, {from: accounts[2]});
		const boolMGoOiJA = await WheatFarmzooOup9.transferFrom.call(addressK8i5cXy, addressdSVhhdW, uintB6TAKlu, {from: accounts[0]});
		const boolq7qHB2x = await WheatFarmzooOup9.transfer.call(addressKfhop2w, uintoTqLsCq, {from: accounts[2]});
		const boolK0kSDSV = await WheatFarmzooOup9.decreaseAllowance.call(addressWRs1d6Z, uintoqqO8qy, {from: accounts[2]});
		const booldzjfpwD = await WheatFarmzooOup9.approve.call(addressQcxYjVu, uintGG556ra, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WheatFarm', async () => {
		const stringVLkRRlj = "XHhjx3927"
		const stringQX11gSJ = "ziHWt5eDlhGG4pQEd2nRr5t"
		const uintSUiJOh8 = BigInt("59")
		const WheatFarm8eWPVb = await WheatFarm.new(stringVLkRRlj, stringQX11gSJ, uintSUiJOh8, {from: accounts[3]});
		const addressbxEgwDG = accounts[2]
		const addressbodCIsg = "0x0000000000000000000000000000000000000000"
		const uintFkDNzhE = BigInt("934")
		const addressa7LkNY1 = "0x00000000000000000000000000000000000000-1"
		const addressWS7mnlC = accounts[1]
		const uintX32SmjL = await WheatFarm8eWPVb.allowance.call(addressbodCIsg, addressbxEgwDG, {from: accounts[5]});
//		const boolKZKxJgt = await WheatFarm8eWPVb.approveAndCall.call(addressa7LkNY1, uintFkDNzhE, {from: accounts[3]});
//		const uintZoTCntA = await WheatFarm8eWPVb.balanceOf.call(addressWS7mnlC, {from: accounts[2]});

		assert.equal(uintX32SmjL, BigInt("0"))
		await expect(WheatFarm8eWPVb.approveAndCall.call(addressa7LkNY1, uintFkDNzhE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVLkRRlj = "XHhjx3927"
		const stringQX11gSJ = "ziHWt5eDlhGG4pQEd2nRr5t"
		const uintzGh7UFv = BigInt("59")
		const WheatFarm8eWPVb = await WheatFarm.new(stringVLkRRlj, stringQX11gSJ, uintzGh7UFv, {from: accounts[3]});
		const uintTfJENl = BigInt("1482")
		const addressmOcaLIo = accounts[2]
		const addressKnXUrm = accounts[2]
		const addressMO7XwR = "0x00000000000000000000000000000000000000-1"
		const addressab7mfn7 = accounts[0]
		const addressfVDKyHB = accounts[1]
		const uintcdvYDj3 = BigInt("914")
		const addressecEhQoO = "0x0000000000000000000000000000000000000000"
		const boolvMiCb3u = await WheatFarm8eWPVb.approve.call(addressmOcaLIo, uintTfJENl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintX32SmjL = await WheatFarm8eWPVb.allowance.call(addressMO7XwR, addressKnXUrm, {from: accounts[5]});
//		const uintKb5nnrA = await WheatFarm8eWPVb.allowance.call(addressfVDKyHB, addressab7mfn7, {from: accounts[4]});
//		const boolKZKxJgt = await WheatFarm8eWPVb.approveAndCall.call(addressecEhQoO, uintcdvYDj3, {from: accounts[3]});

		assert.equal(boolvMiCb3u, true)
		await expect(WheatFarm8eWPVb.allowance.call(addressMO7XwR, addressKnXUrm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const string6Nd50B = "3VkqRxk6qDgb"
		const stringF8RUt8X = "EunSlix1TePTPOUV3uWXxMLEevmg60Pw"
		const uintex1fjZq = BigInt("69")
		const WheatFarmgoyhQAY = await WheatFarm.new(string6Nd50B, stringF8RUt8X, uintex1fjZq, {from: accounts[2]});
		const addressZNvfhw = accounts[2]
		const addresskSC1FU5 = accounts[3]
		const addressmqcp6nM = accounts[4]
		const uinteNtcOUi = BigInt("0")
		const addressSMcsrq8 = accounts[0]
		const uintgVOKPef = await WheatFarmgoyhQAY.allowance.call(addresskSC1FU5, addressZNvfhw, {from: accounts[5]});
		const stringEAdpZP5 = await WheatFarmgoyhQAY.symbol.call({from: accounts[1]});
		const boolVGRcf3 = await WheatFarmgoyhQAY.transferownership.call(addressmqcp6nM, {from: accounts[2]});
		const boolM8JgTRV = await WheatFarmgoyhQAY.transfer.call(addressSMcsrq8, uinteNtcOUi, {from: accounts[2]});

		assert.equal(boolM8JgTRV, true)
		assert.equal(boolVGRcf3, true)
		assert.equal(stringEAdpZP5, "EunSlix1TePTPOUV3uWXxMLEevmg60Pw")
		assert.equal(uintgVOKPef, BigInt("0"))
	});
})