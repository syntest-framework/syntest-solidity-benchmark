const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3zwiyMv = await Core_Fi_V3.new({from: accounts[2]});
		const addressiq8bmVq = "0x0000000000000000000000000000000000000001"
		const addressGoveGtu = accounts[2]
		const uintfenOUy0 = BigInt("658")
		const addressawmMgQ7 = accounts[0]
		const addressyUCLxZQ = accounts[0]
		const uintjRayZO5 = BigInt("588")
		const addressG744Ewu = accounts[4]
		const addressYEzOUB = accounts[1]
		const addressbdnKHv4 = accounts[3]
		const uintCYTdmhk = await Core_Fi_V3zwiyMv.allowance.call(addressGoveGtu, addressiq8bmVq, {from: accounts[3]});
		const boolt7o56KE = await Core_Fi_V3zwiyMv.transferFrom.call(addressyUCLxZQ, addressawmMgQ7, uintfenOUy0, {from: accounts[2]});
		const boolMhUyLTZ = await Core_Fi_V3zwiyMv.transfer.call(addressG744Ewu, uintjRayZO5, {from: accounts[5]});
		const uintg1KDJnp = await Core_Fi_V3zwiyMv.allowance.call(addressbdnKHv4, addressYEzOUB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMhUyLTZ, false)
		assert.equal(boolt7o56KE, false)
		assert.equal(uintCYTdmhk, BigInt("0"))
		assert.equal(uintg1KDJnp, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3jg2bI9X = await Core_Fi_V3.new({from: accounts[3]});
		const uintG2aGCo = BigInt("471")
		const addressCfvD96 = accounts[3]
		const addressDgDk9v = accounts[2]
		const addressgft3PR4 = accounts[3]
		const addressglJTCym = accounts[1]
		const addressIKckVx9 = accounts[2]
		const address7v62xH = accounts[5]
		const boolFAwB1zM = await Core_Fi_V3jg2bI9X.transferFrom.call(addressDgDk9v, addressCfvD96, uintG2aGCo, {from: accounts[2]});
		const uintoTwb7H = await Core_Fi_V3jg2bI9X.allowance.call(addressglJTCym, addressgft3PR4, {from: accounts[4]});
		const uintI3MiqyU = await Core_Fi_V3jg2bI9X.allowance.call(address7v62xH, addressIKckVx9, {from: accounts[3]});
		const uint256r4EDzkW = await Core_Fi_V3jg2bI9X.totalSupply.call({from: accounts[0]});
		const uint256xxnKGc = await Core_Fi_V3jg2bI9X.totalSupply.call({from: accounts[1]});

		assert.equal(boolFAwB1zM, false)
		assert.equal(uint256r4EDzkW, BigInt("84000000000000000000000"))
		assert.equal(uint256xxnKGc, BigInt("84000000000000000000000"))
		assert.equal(uintI3MiqyU, BigInt("0"))
		assert.equal(uintoTwb7H, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3BigCNOB = await Core_Fi_V3.new({from: accounts[2]});
		const uintHWShcL3 = BigInt("1921")
		const addresscYxntW0 = accounts[1]
		const uintpCMnnv = BigInt("953")
		const addressMtuhP3 = accounts[4]
		const uintoOH2MYt = BigInt("1855")
		const addressqkirhr2 = accounts[1]
		const boolwzvIPuZ = await Core_Fi_V3BigCNOB.approve.call(addresscYxntW0, uintHWShcL3, {from: accounts[1]});
		const boolinf2jaH = await Core_Fi_V3BigCNOB.transfer.call(addressMtuhP3, uintpCMnnv, {from: accounts[5]});
		const boolxdkp0rY = await Core_Fi_V3BigCNOB.transfer.call(addressqkirhr2, uintoOH2MYt, {from: accounts[2]});

		assert.equal(boolinf2jaH, false)
		assert.equal(boolwzvIPuZ, true)
		assert.equal(boolxdkp0rY, true)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3f4lJRKY = await Core_Fi_V3.new({from: accounts[0]});
		const addressxfr16WZ = accounts[3]
		const uintGLVKzCV = BigInt("748")
		const addressqM2jnO1 = "0x0000000000000000000000000000000000000001"
		const uintIXA7biL = BigInt("1666")
		const address1T8729 = accounts[3]
		const uintlc4ruso = BigInt("541")
		const addresswGIrbjg = accounts[4]
		const uint256lTcSMpw = await Core_Fi_V3f4lJRKY.balanceOf.call(addressxfr16WZ, {from: accounts[1]});
		const boolweDTjR = await Core_Fi_V3f4lJRKY.transfer.call(addressqM2jnO1, uintGLVKzCV, {from: accounts[1]});
		const booluPgwAOP = await Core_Fi_V3f4lJRKY.transfer.call(address1T8729, uintIXA7biL, {from: accounts[1]});
		const boolSIzdsub = await Core_Fi_V3f4lJRKY.transfer.call(addresswGIrbjg, uintlc4ruso, {from: accounts[0]});

		assert.equal(boolSIzdsub, true)
		assert.equal(booluPgwAOP, false)
		assert.equal(boolweDTjR, false)
		assert.equal(uint256lTcSMpw, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3LbS5uh9 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOWOaSrr = BigInt("802")
		const addressakyZ6l7 = accounts[2]
		const addresseaeZPxk = accounts[3]
		const uintFM1f0iP = BigInt("826")
		const addressgAAjtq2 = accounts[5]
		const uintNdx9LIS = BigInt("461")
		const addressMb4hu9y = accounts[2]
		const addresspN5rx99 = accounts[2]
		const boolBZipoq = await Core_Fi_V3LbS5uh9.transferFrom.call(addresseaeZPxk, addressakyZ6l7, uintOWOaSrr, {from: accounts[1]});
		const boolEJCgUc = await Core_Fi_V3LbS5uh9.approve.call(addressgAAjtq2, uintFM1f0iP, {from: "0x0000000000000000000000000000000000000001"});
		const boolgxFQYj = await Core_Fi_V3LbS5uh9.transferFrom.call(addresspN5rx99, addressMb4hu9y, uintNdx9LIS, {from: accounts[0]});
	});
})