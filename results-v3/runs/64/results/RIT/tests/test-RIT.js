const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITPbIAn4 = await RIT.new({from: accounts[4]});
		const addressAJ6d3wJ = accounts[2]
		const uintIue9NRt = BigInt("429")
		const addresszO176cp = accounts[1]
		const uint256IR0ejW3 = await RITPbIAn4.totalSupply.call({from: accounts[5]});
		const uint256G7LB0eS = await RITPbIAn4.balanceOf.call(addressAJ6d3wJ, {from: accounts[0]});
		const stringAEoXgI = await RITPbIAn4.symbol.call({from: accounts[4]});
		const boolES3slPX = await RITPbIAn4.transfer.call(addresszO176cp, uintIue9NRt, {from: accounts[2]});

		assert.equal(stringAEoXgI, "RIT 2.0")
		assert.equal(uint256G7LB0eS, BigInt("0"))
		assert.equal(uint256IR0ejW3, BigInt("500000000000000000000000000"))
		await expect(RITPbIAn4.transfer.call(addresszO176cp, uintIue9NRt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITKCxXueF = await RIT.new({from: accounts[2]});
		const uintTxVpwW0 = BigInt("764")
		const addressC2zyMCb = accounts[5]
		const addressjMtcQCr = accounts[3]
		const uint256K4eqPb = await RITKCxXueF.totalSupply.call({from: accounts[1]});
		const uint84lp4Rm = await RITKCxXueF.decimals.call({from: accounts[3]});
		const bools3NdBE = await RITKCxXueF.increaseAllowance.call(addressC2zyMCb, uintTxVpwW0, {from: accounts[2]});
		const uint256S6wXaT = await RITKCxXueF.balanceOf.call(addressjMtcQCr, {from: accounts[1]});

		assert.equal(bools3NdBE, true)
		assert.equal(uint256K4eqPb, BigInt("500000000000000000000000000"))
		assert.equal(uint256S6wXaT, BigInt("0"))
		assert.equal(uint84lp4Rm, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITdEwiP71 = await RIT.new({from: accounts[2]});
		const uintxDsCsEB = BigInt("848")
		const uintUNABGku = BigInt("1963")
		const addressqjdvH1E = accounts[4]
		const addressYbG1VP8 = accounts[1]
		const uint256cEbyQM9 = await RITdEwiP71._burn.call(uintxDsCsEB, {from: accounts[4]});
		const boolsGwQjx = await RITdEwiP71.transferFrom.call(addressYbG1VP8, addressqjdvH1E, uintUNABGku, {from: accounts[4]});

		await expect(RITdEwiP71._burn.call(uintxDsCsEB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITX7H21aj = await RIT.new({from: accounts[4]});
		const addressqC6eaL = accounts[3]
		const addressFW92sqa = accounts[1]
		const addressRkMaGyT = accounts[2]
		const uint256NmXMpZf = await RITX7H21aj.totalSupply.call({from: accounts[1]});
		const uint256o5YxBMQ = await RITX7H21aj.balanceOf.call(addressqC6eaL, {from: accounts[5]});
		const uint8hKBh3sF = await RITX7H21aj.decimals.call({from: accounts[0]});
		const uint256s8zktrt = await RITX7H21aj.totalSupply.call({from: accounts[0]});
		const uint256fLME8Cl = await RITX7H21aj.allowance.call(addressRkMaGyT, addressFW92sqa, {from: accounts[3]});

		assert.equal(uint256NmXMpZf, BigInt("500000000000000000000000000"))
		assert.equal(uint256fLME8Cl, BigInt("0"))
		assert.equal(uint256o5YxBMQ, BigInt("0"))
		assert.equal(uint256s8zktrt, BigInt("500000000000000000000000000"))
		assert.equal(uint8hKBh3sF, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITyTOOexf = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgiXXUoW = BigInt("1697")
		const addressmY0Wgqk = accounts[2]
		const uintlIb8iBD = BigInt("1256")
		const addressUmL0nOE = accounts[2]
		const addressBwfNZOS = accounts[1]
		const uint8wo1F2Tj = await RITyTOOexf.decimals.call({from: accounts[3]});
		const boolsyJbWbX = await RITyTOOexf.increaseAllowance.call(addressmY0Wgqk, uintgiXXUoW, {from: accounts[3]});
		const boolTgtZAqJ = await RITyTOOexf.transferFrom.call(addressBwfNZOS, addressUmL0nOE, uintlIb8iBD, {from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RITxLdseg = await RIT.new({from: accounts[4]});
		const uintL55I2qv = BigInt("522")
		const addressv8SKNK = accounts[1]
		const uintfrydlrd = BigInt("712")
		const addressh1VkcJS = accounts[2]
		const uintmBeAkS = BigInt("57")
		const addressQlwxFP6 = accounts[3]
		const addressE4jr4XO = accounts[1]
		const uintjWBDxU = BigInt("319")
		const addressGo0gR4E = accounts[0]
		const uintIjhB9li = BigInt("1983")
		const addressPycnZrc = "0x0000000000000000000000000000000000000001"
		const uintSwCIXIJ = BigInt("147")
		const addressoggSucE = accounts[4]
		const boolcKpvvlO = await RITxLdseg.decreaseAllowance.call(addressv8SKNK, uintL55I2qv, {from: accounts[3]});
		const boolFexyCnT = await RITxLdseg.transfer.call(addressh1VkcJS, uintfrydlrd, {from: accounts[3]});
		const booltylHRHd = await RITxLdseg.transferFrom.call(addressE4jr4XO, addressQlwxFP6, uintmBeAkS, {from: accounts[4]});
		const boolcsUkDc0 = await RITxLdseg.increaseAllowance.call(addressGo0gR4E, uintjWBDxU, {from: "0x0000000000000000000000000000000000000001"});
		const boolDgiOyYs = await RITxLdseg.approve.call(addressPycnZrc, uintIjhB9li, {from: accounts[0]});
		const boolK3v5Ql3 = await RITxLdseg.transfer.call(addressoggSucE, uintSwCIXIJ, {from: accounts[1]});

		await expect(RITxLdseg.decreaseAllowance.call(addressv8SKNK, uintL55I2qv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITdEwiP71 = await RIT.new({from: accounts[2]});
		const uintlpuCYHV = BigInt("1963")
		const addressWb5vVf5 = accounts[4]
		const address1QiTbS = accounts[1]
		const boolsGwQjx = await RITdEwiP71.transferFrom.call(address1QiTbS, addressWb5vVf5, uintlpuCYHV, {from: accounts[4]});

		await expect(RITdEwiP71.transferFrom.call(address1QiTbS, addressWb5vVf5, uintlpuCYHV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITQLDHvJd = await RIT.new({from: accounts[3]});
		const addressoNl2Hg = accounts[2]
		const addressJqM9cfa = accounts[4]
		const addressx9OQu5 = accounts[4]
		const uintEiGLYBl = BigInt("2012")
		const addressmHBIVFc = accounts[3]
		const addressBFafMsR = accounts[3]
		const addresstbPIfjk = accounts[0]
		const uintdEeAsY = BigInt("1547")
		const addressP1Al2gY = "0x0000000000000000000000000000000000000001"
		const addressIhdUJsk = accounts[0]
		const addressLhFzFOU = accounts[4]
		const uintffuSNX5 = BigInt("401")
		const addressCmBeQeC = accounts[0]
		const addressmocqx1v = accounts[1]
		const uint256jnNPabQ = await RITQLDHvJd.balanceOf.call(addressoNl2Hg, {from: accounts[1]});
		const stringqSW49U3 = await RITQLDHvJd.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CKwI0z = await RITQLDHvJd.allowance.call(addressx9OQu5, addressJqM9cfa, {from: "0x0000000000000000000000000000000000000001"});
		const boolJT9OBWE = await RITQLDHvJd.approve.call(addressmHBIVFc, uintEiGLYBl, {from: accounts[3]});
		const uint256vDS8ypU = await RITQLDHvJd.allowance.call(addresstbPIfjk, addressBFafMsR, {from: accounts[4]});
		const boolLiJZhcT = await RITQLDHvJd.transfer.call(addressP1Al2gY, uintdEeAsY, {from: accounts[2]});
		const uint256paW1z8t = await RITQLDHvJd.allowance.call(addressLhFzFOU, addressIhdUJsk, {from: accounts[0]});
		const boolShKLb0c = await RITQLDHvJd.transferFrom.call(addressmocqx1v, addressCmBeQeC, uintffuSNX5, {from: accounts[1]});
		const stringCawM2ZR = await RITQLDHvJd.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJT9OBWE, true)
		assert.equal(stringqSW49U3, "RIT 2.0")
		assert.equal(uint256CKwI0z, BigInt("0"))
		assert.equal(uint256jnNPabQ, BigInt("0"))
		assert.equal(uint256vDS8ypU, BigInt("0"))
		await expect(RITQLDHvJd.transfer.call(addressP1Al2gY, uintdEeAsY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITs4psBW = await RIT.new({from: accounts[4]});
		const uintYSqa4EQ = BigInt("1564")
		const addressDVkxNyn = accounts[4]
		const addressM27Agyj = accounts[4]
		const uintEEtA20o = BigInt("703")
		const addressUJ7VUxg = accounts[5]
		const uintVkzO0ye = BigInt("1264")
		const addresszxxYVXG = "0x0000000000000000000000000000000000000001"
		const stringR2jrq7c = await RITs4psBW.name.call({from: accounts[3]});
		const uint256TTv153s = await RITs4psBW.totalSupply.call({from: accounts[2]});
		const booliF2ftL = await RITs4psBW.increaseAllowance.call(addressDVkxNyn, uintYSqa4EQ, {from: accounts[0]});
		const uint256dbnXsWG = await RITs4psBW.balanceOf.call(addressM27Agyj, {from: accounts[0]});
		const bool8TJ0ac = await RITs4psBW.increaseAllowance.call(addressUJ7VUxg, uintEEtA20o, {from: accounts[0]});
		const boolR7SVYTr = await RITs4psBW.transfer.call(addresszxxYVXG, uintVkzO0ye, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool8TJ0ac, true)
		assert.equal(booliF2ftL, true)
		assert.equal(stringR2jrq7c, "Real Estate Investment Token")
		assert.equal(uint256TTv153s, BigInt("500000000000000000000000000"))
		assert.equal(uint256dbnXsWG, BigInt("0"))
		await expect(RITs4psBW.transfer.call(addresszxxYVXG, uintVkzO0ye, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITQLDHvJd = await RIT.new({from: accounts[3]});
		const addresswXQIkt4 = accounts[1]
		const uintF9bF3p = BigInt("1547")
		const addressMRAZXZL = "0x0000000000000000000000000000000000000000"
		const addressYVNAEQd = accounts[0]
		const addressG0LPTRO = accounts[4]
		const uint256jnNPabQ = await RITQLDHvJd.balanceOf.call(addresswXQIkt4, {from: accounts[1]});
		const stringqSW49U3 = await RITQLDHvJd.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLiJZhcT = await RITQLDHvJd.transfer.call(addressMRAZXZL, uintF9bF3p, {from: accounts[2]});
		const uint256paW1z8t = await RITQLDHvJd.allowance.call(addressG0LPTRO, addressYVNAEQd, {from: accounts[0]});
		const stringCawM2ZR = await RITQLDHvJd.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqSW49U3, "RIT 2.0")
		assert.equal(uint256jnNPabQ, BigInt("0"))
		await expect(RITQLDHvJd.transfer.call(addressMRAZXZL, uintF9bF3p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})