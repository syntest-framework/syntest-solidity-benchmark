const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBYRNsU = await SALESCONTRACT.new({from: accounts[1]});
		const addressBqC2gQk = accounts[3]
		const addresskTLirN = accounts[4]
		const addressTT3D0Wt = accounts[1]
		const addressbDcvOb = await SALESCONTRACTBYRNsU.setToken.call(addressBqC2gQk, {from: accounts[3]});
		const boolTdt3E0C = await SALESCONTRACTBYRNsU.tokenSale.call(addresskTLirN, {from: accounts[5]});
		const addressf89hF6c = await SALESCONTRACTBYRNsU.setToken.call(addressTT3D0Wt, {from: accounts[4]});

		await expect(SALESCONTRACTBYRNsU.setToken.call(addressBqC2gQk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTtKXfA0k = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLXXLbCh = BigInt("1917")
		const addressQ9kN4d = accounts[4]
		const addressWXrHMPd = "0x0000000000000000000000000000000000000001"
		const addresstiM2JkI = accounts[0]
		const addressiZzkqYc = accounts[5]
		const addressqVt62YQ = await SALESCONTRACTtKXfA0k._setSalesPool.call(addressQ9kN4d, uintLXXLbCh, {from: accounts[3]});
		const addressMXwtf5 = await SALESCONTRACTtKXfA0k.setToken.call(addressWXrHMPd, {from: accounts[0]});
		await SALESCONTRACTtKXfA0k.clearTokens.call({from: accounts[1]});
		const boolQKVhhzJ = await SALESCONTRACTtKXfA0k.tokenSale.call(addresstiM2JkI, {from: accounts[2]});
		const addressRhdOucN = await SALESCONTRACTtKXfA0k.setToken.call(addressiZzkqYc, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTUw8BGJH = await SALESCONTRACT.new({from: accounts[0]});
		const addressvnZHW3X = accounts[1]
		const uintr6Dvj6u = BigInt("152")
		const addressqx3zrgS = accounts[2]
		const uintmpvy6SB = BigInt("1534")
		const bool3q1a05 = await SALESCONTRACTUw8BGJH.tokenSale.call(addressvnZHW3X, {from: accounts[1]});
		await SALESCONTRACTUw8BGJH.clearTokens.call({from: accounts[3]});
		const addressnNaRomX = await SALESCONTRACTUw8BGJH._setSalesPool.call(addressqx3zrgS, uintr6Dvj6u, {from: accounts[5]});
		await SALESCONTRACTUw8BGJH.clearTokens.call({from: accounts[1]});
		const uintAAH9bJS = await SALESCONTRACTUw8BGJH._setStage.call(uintmpvy6SB, {from: accounts[4]});

		await expect(SALESCONTRACTUw8BGJH.tokenSale.call(addressvnZHW3X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTgAWseB1 = await SALESCONTRACT.new({from: accounts[4]});
		const addressTexNS4v = accounts[5]
		const uinto5dy0HU = BigInt("1920")
		const addressdGbfR95 = "0x0000000000000000000000000000000000000001"
		const uintDmXB4oP = BigInt("1029")
		const addressy9aqH1J = accounts[0]
		await SALESCONTRACTgAWseB1.ff.call({from: accounts[5]});
		const addressfPqJpLc = await SALESCONTRACTgAWseB1.setToken.call(addressTexNS4v, {from: accounts[5]});
		const addressimRqYnZ = await SALESCONTRACTgAWseB1._setSalesPool.call(addressdGbfR95, uinto5dy0HU, {from: accounts[0]});
		const addressKey2Xgf = await SALESCONTRACTgAWseB1._setSalesPool.call(addressy9aqH1J, uintDmXB4oP, {from: accounts[2]});
		await SALESCONTRACTgAWseB1.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTgAWseB1.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTUw8BGJH = await SALESCONTRACT.new({from: accounts[0]});
		const uintlWPzXv4 = BigInt("806")
		const addressgQut9sM = accounts[1]
		const uintFRCey2I = BigInt("152")
		const addressbRqIeRX = accounts[2]
		const uintO3JEVa = BigInt("1201")
		const addressztclhe = accounts[0]
		const uintw4AsjZi = BigInt("1534")
		const uintcC5IkV = await SALESCONTRACTUw8BGJH._setStage.call(uintlWPzXv4, {from: accounts[0]});
		await SALESCONTRACTUw8BGJH.clearTokens.call({from: accounts[5]});
		const bool3q1a05 = await SALESCONTRACTUw8BGJH.tokenSale.call(addressgQut9sM, {from: accounts[1]});
		const addressnNaRomX = await SALESCONTRACTUw8BGJH._setSalesPool.call(addressbRqIeRX, uintFRCey2I, {from: accounts[5]});
		const addressShA9Gjz = await SALESCONTRACTUw8BGJH._setSalesPool.call(addressztclhe, uintO3JEVa, {from: accounts[2]});
		const uintAAH9bJS = await SALESCONTRACTUw8BGJH._setStage.call(uintw4AsjZi, {from: accounts[4]});

		await expect(SALESCONTRACTUw8BGJH.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTFOExiyh = await SALESCONTRACT.new({from: accounts[3]});
		const uinthHwfkFy = BigInt("1171")
		const addressmfgStC7 = accounts[3]
		const uintTcyKZ4b = BigInt("1616")
		const addressUph1ql4 = accounts[1]
		const uintEnmhzH = BigInt("1202")
		const addressybCgZjN = accounts[5]
		const addressfsCHLF9 = accounts[2]
		const addressz9Y1C4i = await SALESCONTRACTFOExiyh._setSalesPool.call(addressmfgStC7, uinthHwfkFy, {from: accounts[3]});
		const addressWEzjLPe = await SALESCONTRACTFOExiyh._setSalesPool.call(addressUph1ql4, uintTcyKZ4b, {from: accounts[4]});
		const addressqyMoDL1 = await SALESCONTRACTFOExiyh._setSalesPool.call(addressybCgZjN, uintEnmhzH, {from: accounts[0]});
		await SALESCONTRACTFOExiyh.ff.call({from: accounts[5]});
		const boolyaexNBt = await SALESCONTRACTFOExiyh.tokenSale.call(addressfsCHLF9, {from: accounts[4]});
		await SALESCONTRACTFOExiyh.clearTokens.call({from: accounts[1]});

		await expect(SALESCONTRACTFOExiyh._setSalesPool.call(addressUph1ql4, uintTcyKZ4b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTgAWseB1 = await SALESCONTRACT.new({from: accounts[4]});
		const addressBlrfY8 = accounts[5]
		const uintEFQQ0FF = BigInt("1920")
		const addressNDsQU3F = "0x0000000000000000000000000000000000000001"
		await SALESCONTRACTgAWseB1.clearTokens.call({from: accounts[4]});
		await SALESCONTRACTgAWseB1.ff.call({from: accounts[5]});
		const addressfPqJpLc = await SALESCONTRACTgAWseB1.setToken.call(addressBlrfY8, {from: accounts[5]});
		const addressimRqYnZ = await SALESCONTRACTgAWseB1._setSalesPool.call(addressNDsQU3F, uintEFQQ0FF, {from: accounts[0]});
		await SALESCONTRACTgAWseB1.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTgAWseB1.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTgAWseB1 = await SALESCONTRACT.new({from: accounts[4]});
		const addressf5YLhg = accounts[4]
		const addressph0HU36 = accounts[3]
		const addressdQ1Phv = accounts[2]
		const addressy3FsYAZ = accounts[5]
		const addressmUapEB = accounts[3]
		const addressYFmAHdG = accounts[5]
		const uintE9Vkjgl = BigInt("1733")
		const addressONmiFqm = accounts[2]
		const addresscaYeQFL = accounts[2]
		const addressKvFUR39 = await SALESCONTRACTgAWseB1.setToken.call(addressf5YLhg, {from: accounts[4]});
		const boolNtYOpiJ = await SALESCONTRACTgAWseB1.tokenSale.call(addressph0HU36, {from: accounts[2]});
		await SALESCONTRACTgAWseB1.clearETH.call({from: accounts[1]});
		const address7co3Jx = await SALESCONTRACTgAWseB1.setToken.call(addressdQ1Phv, {from: accounts[4]});
		const boolL6hzMr = await SALESCONTRACTgAWseB1.tokenSale.call(addressy3FsYAZ, {from: accounts[2]});
		await SALESCONTRACTgAWseB1.clearTokens.call({from: accounts[4]});
		const addressAFQClYx = await SALESCONTRACTgAWseB1.setToken.call(addressmUapEB, {from: accounts[1]});
		const addressfPqJpLc = await SALESCONTRACTgAWseB1.setToken.call(addressYFmAHdG, {from: accounts[5]});
		await SALESCONTRACTgAWseB1.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTgAWseB1.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
		const addressbm98P9 = await SALESCONTRACTgAWseB1._setSalesPool.call(addressONmiFqm, uintE9Vkjgl, {from: accounts[3]});
		const boolpf8gZAm = await SALESCONTRACTgAWseB1.tokenSale.call(addresscaYeQFL, {from: accounts[1]});

		await expect(SALESCONTRACTgAWseB1.tokenSale.call(addressph0HU36, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTUw8BGJH = await SALESCONTRACT.new({from: accounts[0]});
		const uintPokeUCU = BigInt("186")
		const addressHUuyW4u = accounts[2]
		await SALESCONTRACTUw8BGJH.clearETH.call({from: accounts[0]});
		const uintaZczw5z = await SALESCONTRACTUw8BGJH._setStage.call(uintPokeUCU, {from: accounts[0]});
		const bool3q1a05 = await SALESCONTRACTUw8BGJH.tokenSale.call(addressHUuyW4u, {from: accounts[1]});

		await expect(SALESCONTRACTUw8BGJH.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})