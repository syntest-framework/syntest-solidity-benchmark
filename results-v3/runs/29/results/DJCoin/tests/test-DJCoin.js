const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCointO2RJYQ = await DJCoin.new({from: accounts[4]});
		const uintnR30Vxs = BigInt("1933")
		const addressim1De8o = accounts[5]
		const addressZhU8L7e = accounts[2]
		const uinto72nXnn = BigInt("832")
		const uintSH2l5Zd = BigInt("1937")
		const addresstFjKJ1r = accounts[0]
		const uintSulEcyZ = BigInt("297")
		const uintWh0JJF = BigInt("1730")
		const uintiZBA2QV = BigInt("681")
		const addressECEt5DM = accounts[3]
		const boolr7Qiouy = await DJCointO2RJYQ.transferFrom.call(addressZhU8L7e, addressim1De8o, uintnR30Vxs, {from: accounts[5]});
		const uint256W94yNLq = await DJCointO2RJYQ.burn.call(uintSH2l5Zd, uinto72nXnn, {from: accounts[1]});
		const addressye4vvPa = await DJCointO2RJYQ.validRecipient.call(addresstFjKJ1r, {from: accounts[0]});
		await DJCointO2RJYQ.onlyOwner.call({from: accounts[3]});
		const uint256W9lrO2 = await DJCointO2RJYQ.burn.call(uintWh0JJF, uintSulEcyZ, {from: accounts[4]});
		const boolY3Elas = await DJCointO2RJYQ.increaseAllowance.call(addressECEt5DM, uintiZBA2QV, {from: accounts[4]});

		await expect(DJCointO2RJYQ.transferFrom.call(addressZhU8L7e, addressim1De8o, uintnR30Vxs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinyKnKqg = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEhvz6QE = BigInt("852")
		const uintEbEYpGt = BigInt("1769")
		const uintPzKE6ZE = BigInt("564")
		const uintovTTV0F = BigInt("712")
		const uint256gtnxlif = await DJCoinyKnKqg.burn.call(uintEbEYpGt, uintEhvz6QE, {from: accounts[2]});
		const uint256t8CHjGE = await DJCoinyKnKqg.burn.call(uintovTTV0F, uintPzKE6ZE, {from: accounts[1]});
	});

	it('test for DJCoin', async () => {
		const DJCoinlmOuLd0 = await DJCoin.new({from: accounts[1]});
		const addressX9V2R4D = accounts[4]
		const uintxH4rOlU = BigInt("329")
		const addressIB5R4d = accounts[1]
		const addressre6u0ux = accounts[2]
		const uintue9axY6 = BigInt("1046")
		const addresswlnesD = accounts[2]
		const addressXPSNQxw = accounts[2]
		const addresscq4LuS = await DJCoinlmOuLd0.transferOwnership.call(addressX9V2R4D, {from: accounts[4]});
		const boolsHNcK3 = await DJCoinlmOuLd0.transfer.call(addressIB5R4d, uintxH4rOlU, {from: accounts[0]});
		const addressKzGLf8n = await DJCoinlmOuLd0.transferOwnership.call(addressre6u0ux, {from: accounts[4]});
		const boolTKUuRQR = await DJCoinlmOuLd0.increaseAllowance.call(addresswlnesD, uintue9axY6, {from: accounts[5]});
		const addressVkBlDHC = await DJCoinlmOuLd0.transferOwnership.call(addressXPSNQxw, {from: accounts[1]});

		await expect(DJCoinlmOuLd0.transferOwnership.call(addressX9V2R4D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinLIfJTek = await DJCoin.new({from: accounts[1]});
		await DJCoinLIfJTek.onlyOwner.call({from: accounts[1]});
		const addressJx5TIK3 = await DJCoinLIfJTek.owner.call({from: accounts[4]});
		await DJCoinLIfJTek.onlyOwner.call({from: accounts[3]});

		await expect(DJCoinLIfJTek.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhQJIZJr = await DJCoin.new({from: accounts[4]});
		const uintZGdh48n = BigInt("623")
		const addressMUXBKpg = accounts[3]
		const addressRNI9LIq = accounts[0]
		const addressSfh2e85 = accounts[2]
		const boolBoTkDuk = await DJCoinhQJIZJr.increaseAllowance.call(addressMUXBKpg, uintZGdh48n, {from: accounts[3]});
		await DJCoinhQJIZJr.onlyOwner.call({from: accounts[3]});
		const uint256RXnzMvQ = await DJCoinhQJIZJr.allowance.call(addressSfh2e85, addressRNI9LIq, {from: accounts[3]});

		assert.equal(boolBoTkDuk, true)
		await expect(DJCoinhQJIZJr.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinyVMrXlW = await DJCoin.new({from: accounts[2]});
		const uintap66ml = BigInt("380")
		const addressiYyJwm2 = accounts[0]
		const addressOLZKcFs = accounts[3]
		const addressyqMoMt9 = accounts[3]
		const uintCwuInC = BigInt("1722")
		const uintuiK17eP = BigInt("929")
		const boola9hYf0z = await DJCoinyVMrXlW.approve.call(addressiYyJwm2, uintap66ml, {from: accounts[2]});
		const uint256wMNximE = await DJCoinyVMrXlW.totalSupply.call({from: accounts[3]});
		const uint256dgmxsV2 = await DJCoinyVMrXlW.allowance.call(addressyqMoMt9, addressOLZKcFs, {from: accounts[2]});
		const uint256wXZiYPU = await DJCoinyVMrXlW.burn.call(uintuiK17eP, uintCwuInC, {from: accounts[1]});

		assert.equal(boola9hYf0z, true)
		assert.equal(uint256dgmxsV2, BigInt("0"))
		assert.equal(uint256wMNximE, BigInt("2100000000000"))
		await expect(DJCoinyVMrXlW.burn.call(uintuiK17eP, uintCwuInC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinE3fJJOu = await DJCoin.new({from: accounts[3]});
		const addressUy9ybb7 = accounts[2]
		const uintcD2KOTh = BigInt("1104")
		const addressNna1TNp = accounts[0]
		const addressfdXvhc2 = accounts[1]
		const uint256K4YizNx = await DJCoinE3fJJOu.balanceOf.call(addressUy9ybb7, {from: accounts[2]});
		const boolZYU0Y9Y = await DJCoinE3fJJOu.transferFrom.call(addressfdXvhc2, addressNna1TNp, uintcD2KOTh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256K4YizNx, BigInt("0"))
		await expect(DJCoinE3fJJOu.transferFrom.call(addressfdXvhc2, addressNna1TNp, uintcD2KOTh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinE3fJJOu = await DJCoin.new({from: accounts[3]});
		const uintPGUJGn4 = BigInt("1104")
		const addressTCdJiL = accounts[1]
		const addressErOBbmL = accounts[1]
		const addressLXrFit5 = await DJCoinE3fJJOu.owner.call({from: accounts[5]});
		await DJCoinE3fJJOu.onlyOwner.call({from: accounts[4]});
		const boolZYU0Y9Y = await DJCoinE3fJJOu.transferFrom.call(addressErOBbmL, addressTCdJiL, uintPGUJGn4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressLXrFit5, 0x6Bf7eD4eb2843B3F15bDB2EdBDaF4766780D8017)
		await expect(DJCoinE3fJJOu.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinE3fJJOu = await DJCoin.new({from: accounts[3]});
		const uintC8ITdBc = BigInt("1748")
		const uinte7r5oLH = BigInt("635")
		const uintSFwyM22 = BigInt("1104")
		const addressGprrLOc = accounts[1]
		const addressw5CLNPt = accounts[1]
		const uint256hQrBHws = await DJCoinE3fJJOu.burn.call(uinte7r5oLH, uintC8ITdBc, {from: accounts[3]});
		const boolZYU0Y9Y = await DJCoinE3fJJOu.transferFrom.call(addressw5CLNPt, addressGprrLOc, uintSFwyM22, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hQrBHws, BigInt("1732920000000"))
		await expect(DJCoinE3fJJOu.transferFrom.call(addressw5CLNPt, addressGprrLOc, uintSFwyM22, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinE3fJJOu = await DJCoin.new({from: accounts[3]});
		const uintwkOGSlX = BigInt("283")
		const addressOsMzuQi = accounts[3]
		const uintX7BGsaT = BigInt("1104")
		const addressaBRmvEz = accounts[1]
		const address86cYlY = accounts[1]
		const boolS4smxir = await DJCoinE3fJJOu.decreaseAllowance.call(addressOsMzuQi, uintwkOGSlX, {from: accounts[2]});
		const boolZYU0Y9Y = await DJCoinE3fJJOu.transferFrom.call(address86cYlY, addressaBRmvEz, uintX7BGsaT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolS4smxir, true)
		await expect(DJCoinE3fJJOu.transferFrom.call(address86cYlY, addressaBRmvEz, uintX7BGsaT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinE3fJJOu = await DJCoin.new({from: accounts[3]});
		const uintar8RzyU = BigInt("1748")
		const uintMNxUpGp = BigInt("649")
		const uintEcKmR9E = BigInt("893")
		const addresszcICZrW = accounts[4]
		const uintyGHj77w = BigInt("1216")
		const addressVmqDb6S = accounts[1]
		const uintyFpz0KB = BigInt("1832")
		const uintOuAdEDH = BigInt("1877")
		const addresssj7vAyj = accounts[3]
		const uint256hQrBHws = await DJCoinE3fJJOu.burn.call(uintMNxUpGp, uintar8RzyU, {from: accounts[3]});
		const boolZYJ9Ky = await DJCoinE3fJJOu.transfer.call(addresszcICZrW, uintEcKmR9E, {from: accounts[5]});
		const bool6uht3P = await DJCoinE3fJJOu.decreaseAllowance.call(addressVmqDb6S, uintyGHj77w, {from: accounts[1]});
		const uint256LMTkkbP = await DJCoinE3fJJOu.burn.call(uintOuAdEDH, uintyFpz0KB, {from: accounts[2]});
		const addressHdjMPBF = await DJCoinE3fJJOu.transferOwnership.call(addresssj7vAyj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hQrBHws, BigInt("1732920000000"))
		await expect(DJCoinE3fJJOu.transfer.call(addresszcICZrW, uintEcKmR9E, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinE3fJJOu = await DJCoin.new({from: accounts[3]});
		const uintO1XNKvw = BigInt("123")
		const addresslAdKSgl = accounts[3]
		const addressr6HEVGz = accounts[4]
		const uintXpH3qC = BigInt("1832")
		const uintYdn8QkI = BigInt("1104")
		const addressNlyiN9l = accounts[0]
		const addressKamm3u = accounts[2]
		const boolEVMHE7l = await DJCoinE3fJJOu.increaseAllowance.call(addresslAdKSgl, uintO1XNKvw, {from: accounts[2]});
		const uint256CMOl0c0 = await DJCoinE3fJJOu.balanceOf.call(addressr6HEVGz, {from: accounts[4]});
		const boolvVzao9h = await DJCoinE3fJJOu.changetokensPerBlock.call(uintXpH3qC, {from: accounts[1]});
		const boolZYU0Y9Y = await DJCoinE3fJJOu.transferFrom.call(addressKamm3u, addressNlyiN9l, uintYdn8QkI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEVMHE7l, true)
		assert.equal(boolvVzao9h, true)
		assert.equal(uint256CMOl0c0, BigInt("0"))
		await expect(DJCoinE3fJJOu.transferFrom.call(addressKamm3u, addressNlyiN9l, uintYdn8QkI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinfVOSL6T = await DJCoin.new({from: accounts[1]});
		const addressevzlRT4 = accounts[1]
		const uinto11jwZ = BigInt("1784")
		const uintnIHPPzK = BigInt("1443")
		const addressGHF2m0u = accounts[3]
		const addresscCRKHxa = accounts[0]
		const addressr25nxje = await DJCoinfVOSL6T.transferOwnership.call(addressevzlRT4, {from: accounts[1]});
		const uint256L7o55Jj = await DJCoinfVOSL6T.burn.call(uintnIHPPzK, uinto11jwZ, {from: accounts[0]});
		const uint256lIQVyBM = await DJCoinfVOSL6T.allowance.call(addresscCRKHxa, addressGHF2m0u, {from: accounts[3]});

		await expect(DJCoinfVOSL6T.burn.call(uintnIHPPzK, uinto11jwZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinx5Tys7N = await DJCoin.new({from: accounts[3]});
		const addressEvgRjKe = accounts[0]
		const addressMI3TkC9 = accounts[4]
		const uinthWyqPH = BigInt("1310")
		const uintNMyOuD = BigInt("192")
		const addressvISnLLv = accounts[2]
		const addressAoTLlgc = accounts[2]
		const uintputKaV1 = BigInt("1500")
		const addressNnvwf4X = accounts[1]
		await DJCoinx5Tys7N.renounceOwnership.call({from: accounts[3]});
		const uint256JMl0DQ = await DJCoinx5Tys7N.allowance.call(addressMI3TkC9, addressEvgRjKe, {from: accounts[4]});
		const uint256aEHmfAB = await DJCoinx5Tys7N.burn.call(uintNMyOuD, uinthWyqPH, {from: accounts[5]});
		const uint256YzrXkpj = await DJCoinx5Tys7N.allowance.call(addressAoTLlgc, addressvISnLLv, {from: accounts[1]});
		const booljyE7JMh = await DJCoinx5Tys7N.transfer.call(addressNnvwf4X, uintputKaV1, {from: accounts[1]});

		await expect(DJCoinx5Tys7N.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinE3fJJOu = await DJCoin.new({from: accounts[3]});
		const uintyAXma0p = BigInt("0")
		const addressUfYzmb8 = "0x0000000000000000000000000000000000000001"
		const uintN62CCft = BigInt("1720")
		const addressHEOFCEv = accounts[4]
		const addressHpXSNTm = accounts[0]
		const booly2Iq4EL = await DJCoinE3fJJOu.transfer.call(addressUfYzmb8, uintyAXma0p, {from: accounts[4]});
		const boolCBykh1h = await DJCoinE3fJJOu.transferFrom.call(addressHpXSNTm, addressHEOFCEv, uintN62CCft, {from: accounts[3]});
		const uint256IK9pRG0 = await DJCoinE3fJJOu.totalSupply.call({from: accounts[3]});

		assert.equal(booly2Iq4EL, true)
		await expect(DJCoinE3fJJOu.transferFrom.call(addressHpXSNTm, addressHEOFCEv, uintN62CCft, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})