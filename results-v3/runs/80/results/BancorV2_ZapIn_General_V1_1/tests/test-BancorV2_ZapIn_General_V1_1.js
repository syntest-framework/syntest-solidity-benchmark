const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbIN1xSd = BigInt("1272")
		const BancorV2_ZapIn_General_V1_10ZON0T = await BancorV2_ZapIn_General_V1_1.new(uintbIN1xSd, {from: accounts[2]});
		const uintxN6NQ0v = BigInt("174")
		const bytescptSWa = "0x101d2013150e1606161f01"
		const addressyhuXtlV = accounts[3]
		const addressvRkN8ZK = accounts[2]
		const uintsbBz402 = BigInt("1218")
		const uintQGgITEZ = BigInt("1174")
		const addressYRbXZXY = accounts[0]
		const addressAunAaIQ = accounts[4]
		const addressZWyIWwC = accounts[4]
		await BancorV2_ZapIn_General_V1_10ZON0T.withdraw.call({from: accounts[5]});
		const uint16Jr5fL9s = await BancorV2_ZapIn_General_V1_10ZON0T.set_new_goodwill.call(uintxN6NQ0v, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_10ZON0T.withdraw.call({from: accounts[3]});
		const uint256Q93WxQ8 = await BancorV2_ZapIn_General_V1_10ZON0T.ZapInSingleSided.call(addressZWyIWwC, addressAunAaIQ, addressYRbXZXY, uintQGgITEZ, uintsbBz402, addressvRkN8ZK, addressyhuXtlV, bytescptSWa, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_10ZON0T.onlyOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_10ZON0T.withdraw.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAzUVaGI = BigInt("1688")
		const BancorV2_ZapIn_General_V1_1nt3WCy = await BancorV2_ZapIn_General_V1_1.new(uintAzUVaGI, {from: accounts[0]});
		const addressmVRFVAA = accounts[1]
		const addressZqwgJ1t = accounts[2]
		const addressO5KP6vt = accounts[0]
		const addressQ0FRxLy = accounts[4]
		const addressvGIVd3 = await BancorV2_ZapIn_General_V1_1nt3WCy.toPayable.call(addressmVRFVAA, {from: accounts[4]});
		const addressJjStG5E = await BancorV2_ZapIn_General_V1_1nt3WCy.transferOwnership.call(addressZqwgJ1t, {from: accounts[3]});
		const addressLgp41z = await BancorV2_ZapIn_General_V1_1nt3WCy.inCaseTokengetsStuck.call(addressO5KP6vt, {from: accounts[3]});
		const addresswhWjgqV = await BancorV2_ZapIn_General_V1_1nt3WCy.transferOwnership.call(addressQ0FRxLy, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1nt3WCy.toggleContractActive.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1nt3WCy.toPayable.call(addressmVRFVAA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQmAtLpm = BigInt("1789")
		const BancorV2_ZapIn_General_V1_1dTgNKG5 = await BancorV2_ZapIn_General_V1_1.new(uintQmAtLpm, {from: accounts[2]});
		const addressBeSNNoj = "0x0000000000000000000000000000000000000001"
		const addressRvQbRxN = await BancorV2_ZapIn_General_V1_1dTgNKG5.owner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1dTgNKG5.nonReentrant.call({from: accounts[1]});
		const addressJ5sfSnY = await BancorV2_ZapIn_General_V1_1dTgNKG5.inCaseTokengetsStuck.call(addressBeSNNoj, {from: accounts[3]});

		assert.equal(addressRvQbRxN, 0xA8282ADBe463b3e780bf8FedCCEEE1B0b76AA75C)
		await expect(BancorV2_ZapIn_General_V1_1dTgNKG5.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintjESqJD3 = BigInt("171")
		const BancorV2_ZapIn_General_V1_1JrGIMiz = await BancorV2_ZapIn_General_V1_1.new(uintjESqJD3, {from: "0x0000000000000000000000000000000000000001"});
		const byteap8R2Us = "0x1d03071d100b0c111a060913"
		const addressiDLZxg = accounts[1]
		const addressyi3nNzx = accounts[3]
		const uintkVhqnGP = BigInt("2024")
		const uintXqtOsw = BigInt("1599")
		const addressxvwYzrE = accounts[0]
		const addresslw881cx = accounts[0]
		const addressoCU6xHC = accounts[1]
		const addressae7sTF = await BancorV2_ZapIn_General_V1_1JrGIMiz.owner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1JrGIMiz.renounceOwnership.call({from: accounts[2]});
		const uint256jCDxAEK = await BancorV2_ZapIn_General_V1_1JrGIMiz.ZapInSingleSided.call(addressoCU6xHC, addresslw881cx, addressxvwYzrE, uintXqtOsw, uintkVhqnGP, addressyi3nNzx, addressiDLZxg, byteap8R2Us, {from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkFSGziF = BigInt("1091")
		const BancorV2_ZapIn_General_V1_1KXify2E = await BancorV2_ZapIn_General_V1_1.new(uintkFSGziF, {from: accounts[4]});
		const byteW03PJtW = "0x1e0411020f16100d0711"
		const addresswHMPnFY = accounts[0]
		const address5axDeo = accounts[4]
		const uintvflPyg0 = BigInt("930")
		const uintYcht0gm = BigInt("1465")
		const addressLFMQPyD = accounts[4]
		const addressz6RXKLf = accounts[4]
		const addressc4CG4R = accounts[1]
		const boolAqSCs8S = await BancorV2_ZapIn_General_V1_1KXify2E.isOwner.call({from: accounts[2]});
		const uint256ZLJu4r = await BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addressc4CG4R, addressz6RXKLf, addressLFMQPyD, uintYcht0gm, uintvflPyg0, address5axDeo, addresswHMPnFY, byteW03PJtW, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1KXify2E.toggleContractActive.call({from: accounts[0]});

		assert.equal(boolAqSCs8S, false)
		await expect(BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addressc4CG4R, addressz6RXKLf, addressLFMQPyD, uintYcht0gm, uintvflPyg0, address5axDeo, addresswHMPnFY, byteW03PJtW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintW1OMbgj = BigInt("1340")
		const BancorV2_ZapIn_General_V1_19vAT4B = await BancorV2_ZapIn_General_V1_1.new(uintW1OMbgj, {from: accounts[1]});
		const addresssEYdznp = accounts[1]
		const addressgwiEGA8 = accounts[5]
		const addressotHCJ8o = await BancorV2_ZapIn_General_V1_19vAT4B.inCaseTokengetsStuck.call(addresssEYdznp, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_19vAT4B.withdraw.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_19vAT4B.stopInEmergency.call({from: accounts[3]});
		const addressRYo48bk = await BancorV2_ZapIn_General_V1_19vAT4B.inCaseTokengetsStuck.call(addressgwiEGA8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_19vAT4B.inCaseTokengetsStuck.call(addresssEYdznp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintr8FmuM = BigInt("1091")
		const BancorV2_ZapIn_General_V1_1KXify2E = await BancorV2_ZapIn_General_V1_1.new(uintr8FmuM, {from: accounts[4]});
		const uintYV1Er17 = BigInt("555")
		const bytekj6OSEo = "0x1e0411020f16100d0711"
		const addressSpW8Pe0 = accounts[0]
		const addresscjQUkrb = accounts[4]
		const uint3fdP7Z = BigInt("930")
		const uintv8WLhP = BigInt("1465")
		const addressgk3wxV = accounts[4]
		const addressEgVZFSm = accounts[4]
		const addressJMnu5N5 = accounts[1]
		const uint16IKat4Zl = await BancorV2_ZapIn_General_V1_1KXify2E.set_new_goodwill.call(uintYV1Er17, {from: accounts[4]});
		const boolAqSCs8S = await BancorV2_ZapIn_General_V1_1KXify2E.isOwner.call({from: accounts[2]});
		const uint256ZLJu4r = await BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addressJMnu5N5, addressEgVZFSm, addressgk3wxV, uintv8WLhP, uint3fdP7Z, addresscjQUkrb, addressSpW8Pe0, bytekj6OSEo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAqSCs8S, false)
		await expect(BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addressJMnu5N5, addressEgVZFSm, addressgk3wxV, uintv8WLhP, uint3fdP7Z, addresscjQUkrb, addressSpW8Pe0, bytekj6OSEo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintnrIE5UP = BigInt("1091")
		const BancorV2_ZapIn_General_V1_1KXify2E = await BancorV2_ZapIn_General_V1_1.new(uintnrIE5UP, {from: accounts[4]});
		const bytet0ReL7L = "0x1e0411020f16100d0711"
		const address9F1Aai = accounts[0]
		const addressUZ5lQOf = accounts[4]
		const uintdlyxixU = BigInt("928")
		const uintxneK6Qu = BigInt("1465")
		const addressUYOxxo = accounts[4]
		const addressjEt8Kav = accounts[4]
		const addressgZl1uOc = accounts[1]
		const boolAqSCs8S = await BancorV2_ZapIn_General_V1_1KXify2E.isOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1KXify2E.withdraw.call({from: accounts[4]});
		const uint256ZLJu4r = await BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addressgZl1uOc, addressjEt8Kav, addressUYOxxo, uintxneK6Qu, uintdlyxixU, addressUZ5lQOf, address9F1Aai, bytet0ReL7L, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAqSCs8S, false)
		await expect(BancorV2_ZapIn_General_V1_1KXify2E.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZwOTIr3 = BigInt("1091")
		const BancorV2_ZapIn_General_V1_1KXify2E = await BancorV2_ZapIn_General_V1_1.new(uintZwOTIr3, {from: accounts[4]});
		const byteFoTGwnh = "0x1e0411020f16100d0711"
		const addressByQtbxy = accounts[0]
		const addressaTMsKHB = accounts[4]
		const uintUNCspRk = BigInt("930")
		const uintb00dnK1 = BigInt("1501")
		const addressonrYKy = accounts[5]
		const addressSP96ftK = accounts[4]
		const addressy6oDs19 = accounts[1]
		const byteQD2ZvVD = "0x0210150119"
		const addressXvDYjD = accounts[4]
		const addresstLUw18t = accounts[5]
		const uintZh3crT = BigInt("1276")
		const uintsJImkF8 = BigInt("164")
		const addressQ7kagRq = accounts[3]
		const addressIu1B788 = accounts[1]
		const addresszliLxec = accounts[4]
		const boolAqSCs8S = await BancorV2_ZapIn_General_V1_1KXify2E.isOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1KXify2E.toggleContractActive.call({from: accounts[4]});
		const addressnvy6rgM = await BancorV2_ZapIn_General_V1_1KXify2E.owner.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1KXify2E.renounceOwnership.call({from: accounts[2]});
		const uint256ZLJu4r = await BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addressy6oDs19, addressSP96ftK, addressonrYKy, uintb00dnK1, uintUNCspRk, addressaTMsKHB, addressByQtbxy, byteFoTGwnh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iF5AeSx = await BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addresszliLxec, addressIu1B788, addressQ7kagRq, uintsJImkF8, uintZh3crT, addresstLUw18t, addressXvDYjD, byteQD2ZvVD, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1KXify2E.toggleContractActive.call({from: accounts[0]});
		const boollUZ2vz = await BancorV2_ZapIn_General_V1_1KXify2E.isOwner.call({from: accounts[2]});

		assert.equal(boolAqSCs8S, false)
		await expect(BancorV2_ZapIn_General_V1_1KXify2E.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintLuQ2P2U = BigInt("1091")
		const BancorV2_ZapIn_General_V1_1KXify2E = await BancorV2_ZapIn_General_V1_1.new(uintLuQ2P2U, {from: accounts[4]});
		const bytezuSQ5Eu = "0x1e0411020f16100d0711"
		const addresspMG5G1U = accounts[0]
		const addressYeXfEiJ = accounts[4]
		const uintrz1SGgm = BigInt("930")
		const uintwAoHD7E = BigInt("1489")
		const addressdq6eV0D = accounts[5]
		const addressZ4r0ms8 = accounts[4]
		const addressbth11A8 = accounts[1]
		await BancorV2_ZapIn_General_V1_1KXify2E.renounceOwnership.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1KXify2E.nonReentrant.call({from: accounts[0]});
		const boolAqSCs8S = await BancorV2_ZapIn_General_V1_1KXify2E.isOwner.call({from: accounts[2]});
		const uint256ZLJu4r = await BancorV2_ZapIn_General_V1_1KXify2E.ZapInSingleSided.call(addressbth11A8, addressZ4r0ms8, addressdq6eV0D, uintwAoHD7E, uintrz1SGgm, addressYeXfEiJ, addresspMG5G1U, bytezuSQ5Eu, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1KXify2E.toggleContractActive.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1KXify2E.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintwu4DLrV = BigInt("930")
		const BancorV2_ZapIn_General_V1_17VnM7b = await BancorV2_ZapIn_General_V1_1.new(uintwu4DLrV, {from: accounts[0]});
		const addressFUsdClg = accounts[4]
		await BancorV2_ZapIn_General_V1_17VnM7b.toggleContractActive.call({from: accounts[0]});
		const addresswTPZSnO = await BancorV2_ZapIn_General_V1_17VnM7b.transferOwnership.call(addressFUsdClg, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_17VnM7b.toggleContractActive.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_17VnM7b.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})