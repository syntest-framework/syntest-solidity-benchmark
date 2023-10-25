const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Q2PhguN = await Core_Fi_V3.new({from: accounts[2]});
		const addressvT8Hi80 = "0x0000000000000000000000000000000000000001"
		const addressggsOSr = accounts[2]
		const addresseb3TNxK = accounts[4]
		const addressXDLIE13 = accounts[0]
		const addressdyi75a = accounts[2]
		const uintWtk7V2S = BigInt("1831")
		const addressr2FNDeT = accounts[1]
		const uintsr86ovW = BigInt("489")
		const addressTTGlB1q = accounts[1]
		const uintWTazTTv = BigInt("220")
		const addressV3YEAs = accounts[0]
		const addressN8lu32x = accounts[2]
		const uint256hXFSWVD = await Core_Fi_V3Q2PhguN.balanceOf.call(addressvT8Hi80, {from: accounts[3]});
		const uinte7fonC = await Core_Fi_V3Q2PhguN.allowance.call(addresseb3TNxK, addressggsOSr, {from: accounts[0]});
		const uintFYE6uXO = await Core_Fi_V3Q2PhguN.allowance.call(addressdyi75a, addressXDLIE13, {from: accounts[3]});
		const boolirzOUZA = await Core_Fi_V3Q2PhguN.transfer.call(addressr2FNDeT, uintWtk7V2S, {from: "0x0000000000000000000000000000000000000001"});
		const boolj8sIQO = await Core_Fi_V3Q2PhguN.transfer.call(addressTTGlB1q, uintsr86ovW, {from: accounts[1]});
		const boolPWtzPYJ = await Core_Fi_V3Q2PhguN.transferFrom.call(addressN8lu32x, addressV3YEAs, uintWTazTTv, {from: accounts[4]});

		assert.equal(boolPWtzPYJ, false)
		assert.equal(boolirzOUZA, false)
		assert.equal(boolj8sIQO, false)
		assert.equal(uint256hXFSWVD, BigInt("0"))
		assert.equal(uintFYE6uXO, BigInt("0"))
		assert.equal(uinte7fonC, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3vK8yPEi = await Core_Fi_V3.new({from: accounts[5]});
		const addressOyujuTT = accounts[4]
		const addressEGDMk5W = accounts[0]
		const addressqEaVt7v = accounts[2]
		const addressYgxRq3 = accounts[2]
		const addressrrYM18 = accounts[4]
		const addressVeXH49 = accounts[1]
		const uint256SyqwQdJ = await Core_Fi_V3vK8yPEi.totalSupply.call({from: accounts[5]});
		const uint256ETcZSQg = await Core_Fi_V3vK8yPEi.balanceOf.call(addressOyujuTT, {from: accounts[4]});
		const uint256a5y13L3 = await Core_Fi_V3vK8yPEi.balanceOf.call(addressEGDMk5W, {from: accounts[2]});
		const uint256jZRO6hG = await Core_Fi_V3vK8yPEi.balanceOf.call(addressqEaVt7v, {from: accounts[5]});
		const uintazCnbos = await Core_Fi_V3vK8yPEi.allowance.call(addressrrYM18, addressYgxRq3, {from: accounts[1]});
		const uint256hy6djRs = await Core_Fi_V3vK8yPEi.balanceOf.call(addressVeXH49, {from: accounts[1]});

		assert.equal(uint256ETcZSQg, BigInt("0"))
		assert.equal(uint256SyqwQdJ, BigInt("84000000000000000000000"))
		assert.equal(uint256a5y13L3, BigInt("0"))
		assert.equal(uint256hy6djRs, BigInt("0"))
		assert.equal(uint256jZRO6hG, BigInt("0"))
		assert.equal(uintazCnbos, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3i2f75ww = await Core_Fi_V3.new({from: accounts[1]});
		const uintoRuuQS = BigInt("763")
		const addressZvpu0mU = accounts[3]
		const addresscTzp07O = accounts[5]
		const uintYvg4PLB = BigInt("789")
		const addresscFh5gfX = accounts[0]
		const uintNZcQq8a = BigInt("181")
		const addressPlNuSob = accounts[0]
		const boolAYs54gf = await Core_Fi_V3i2f75ww.transferFrom.call(addresscTzp07O, addressZvpu0mU, uintoRuuQS, {from: accounts[1]});
		const boolHDFPyTZ = await Core_Fi_V3i2f75ww.approve.call(addresscFh5gfX, uintYvg4PLB, {from: accounts[5]});
		const uint256dCF8Dge = await Core_Fi_V3i2f75ww.totalSupply.call({from: accounts[4]});
		const boolYfdrjzf = await Core_Fi_V3i2f75ww.transfer.call(addressPlNuSob, uintNZcQq8a, {from: accounts[1]});

		assert.equal(boolAYs54gf, false)
		assert.equal(boolHDFPyTZ, true)
		assert.equal(boolYfdrjzf, true)
		assert.equal(uint256dCF8Dge, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3u0fuWaJ = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintG7e5DTy = BigInt("224")
		const addressOj9Bf4L = accounts[1]
		const addressNjroz0p = accounts[1]
		const addressVGV5dm0 = accounts[0]
		const uinttNybmUo = BigInt("483")
		const addressHiM0Xhi = accounts[4]
		const uintxxfFkVK = BigInt("1708")
		const addressM6NLFR7 = "0x0000000000000000000000000000000000000001"
		const addresshRPkZAz = accounts[0]
		const boolEeTLgO5 = await Core_Fi_V3u0fuWaJ.transfer.call(addressOj9Bf4L, uintG7e5DTy, {from: accounts[4]});
		const uintnDkcuR = await Core_Fi_V3u0fuWaJ.allowance.call(addressVGV5dm0, addressNjroz0p, {from: accounts[5]});
		const boolHU0kh0X = await Core_Fi_V3u0fuWaJ.transfer.call(addressHiM0Xhi, uinttNybmUo, {from: accounts[0]});
		const booljxwAF0I = await Core_Fi_V3u0fuWaJ.transferFrom.call(addresshRPkZAz, addressM6NLFR7, uintxxfFkVK, {from: accounts[0]});
	});
})